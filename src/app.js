(function(){
"use strict";
const SRC = {J26:"NEC Jan 2026 · recalled", R:"Recalled by candidates", PQ:"Past questions", P:"Practice"};
const LS_KEY = "nec-acte-prep-v1";
const DEFAULT_EXAM = "2027-01-04";

// ---- index data ----
const SUBS = []; // {key:"1.1", ch, i, code, title, topics}
CHAPTERS.forEach(c => c.subs.forEach((s, i) => SUBS.push({key:c.n+"."+(i+1), ch:c.n, i:i+1, code:c.code+String(i+1).padStart(2,"0"), title:s[0], topics:s[1]})));
const SUBMAP = Object.fromEntries(SUBS.map(s => [s.key, s]));
const perSub = {};
Q.forEach(q => { perSub[q.s] = (perSub[q.s]||0) + 1; q.id = q.s + "-" + perSub[q.s]; q.ch = +q.s.split(".")[0]; });
// shuffle answer positions so the correct option isn't always in the same place
Q.forEach(q => {
  if (q.o.some(o => /^(all|none|both)\b/i.test(o))) return;
  const order = q.o.map((_,i)=>i);
  for (let i=order.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [order[i],order[j]]=[order[j],order[i]]; }
  q.o = order.map(i=>q.o[i]); q.a = order.indexOf(q.a);
});
const QMAP = Object.fromEntries(Q.map(q => [q.id, q]));
const CH = Object.fromEntries(CHAPTERS.map(c => [c.n, c]));

// ---- state ----
function blank(){ return {v:1, t:0, exam:DEFAULT_EXAM, sub:{}, att:{}, miss:[], mocks:[]}; }
let S = blank();
function normalize(x){ const b = blank(); x = x && typeof x === "object" ? x : {}; return {v:1, t:x.t||0, exam:x.exam||b.exam, sub:x.sub||{}, att:x.att||{}, miss:Array.isArray(x.miss)?x.miss.filter(id=>QMAP[id]):[], mocks:Array.isArray(x.mocks)?x.mocks:[]}; }
try { const raw = localStorage.getItem(LS_KEY); if (raw) S = normalize(JSON.parse(raw)); } catch(e) {}

let dbRef = null, saveTimer = null, syncMode = "local";
function setSync(mode, msg){
  syncMode = mode;
  const el = document.getElementById("sync");
  const text = {loading:"Loading your progress…", synced:"Progress <b>saved to your Claude account</b>, so it follows you to any device.", local:"Progress saved <b>in this browser only</b>. Sign in to claude.ai to keep it across devices.", error:"Couldn't reach your account just now. Progress is kept in this browser and will sync on your next change."}[mode];
  el.innerHTML = msg || text;
}
function save(){
  S.t = Date.now();
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch(e) {}
  if (dbRef){
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      try { await dbRef.set({s: JSON.stringify(S)}); if (syncMode !== "synced") setSync("synced"); }
      catch(e){ setSync("error"); }
    }, 1200);
  }
}
function unwrap(snap){
  if (!snap) return null;
  if (typeof snap.data === "function") return snap.data();
  if (typeof snap.s === "string") return snap;
  if (snap.data && typeof snap.data === "object") return snap.data;
  return snap;
}
async function initDb(){
  try {
    if (!window.claude || typeof window.claude.use !== "function") { setSync("local"); return; }
    const timeout = new Promise(r => setTimeout(() => r("timeout"), 10000));
    const got = await Promise.race([Promise.all([window.claude.use("db"), window.claude.use("user")]), timeout]);
    if (got === "timeout" || !got[0] || !got[1]) { setSync("local"); return; }
    const [db, user] = got;
    const id = await user.id();
    if (!id) { setSync("local"); return; }
    dbRef = db.collection("data/users/" + id).doc("prep");
    const remote = unwrap(await Promise.race([dbRef.get(), timeout]));
    if (remote && remote !== "timeout" && typeof remote.s === "string"){
      const r = normalize(JSON.parse(remote.s));
      if ((r.t||0) > (S.t||0)) { S = r; try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch(e) {} render(); }
      else if ((S.t||0) > (r.t||0)) { await dbRef.set({s: JSON.stringify(S)}); }
    } else if (S.t) {
      await dbRef.set({s: JSON.stringify(S)});
    }
    setSync("synced");
  } catch(e) { dbRef = dbRef || null; setSync(dbRef ? "error" : "local"); }
}

// ---- helpers ----
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pct = (a,b) => b ? Math.round(a*100/b) : 0;
function todayISO(){ const d = new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function daysBetween(a, b){ const [y1,m1,d1]=a.split("-").map(Number), [y2,m2,d2]=b.split("-").map(Number); return Math.round((Date.UTC(y2,m2-1,d2)-Date.UTC(y1,m1-1,d1))/864e5); }
function fmtDate(iso){ const [y,m,d] = iso.split("-").map(Number); return new Date(Date.UTC(y,m-1,d)).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}); }
function shuffle(a){ a = a.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function subStats(key){ let r=0,w=0,seen=0,n=0; Q.forEach(q=>{ if(q.s!==key) return; n++; const a=S.att[q.id]; if(a){ r+=a[0]; w+=a[1]; seen++; } }); return {r,w,seen,n,acc: r+w ? pct(r,r+w) : null}; }
function chStats(n){ const subs = SUBS.filter(s=>s.ch===n); const done = subs.filter(s=>(S.sub[s.key]||0)>0).length; let r=0,w=0; Q.forEach(q=>{ if(q.ch!==n) return; const a=S.att[q.id]; if(a){r+=a[0];w+=a[1];} }); return {done, total:subs.length, acc: r+w?pct(r,r+w):null, r, w}; }
function accChip(acc){ if (acc===null) return '<span class="chip plain">no attempts</span>'; const cls = acc>=70?"good":acc>=50?"warn":"bad"; return `<span class="chip ${cls}">${acc}% right</span>`; }
function record(q, correct){
  const a = S.att[q.id] || [0,0,0];
  if (correct){ a[0]++; a[2]=1; S.miss = S.miss.filter(id=>id!==q.id); }
  else { a[1]++; a[2]=0; if (!S.miss.includes(q.id)) S.miss.push(q.id); }
  S.att[q.id] = a;
}
function currentWeek(){ const t = todayISO(); return PLAN.find(p => t>=p.from && t<=p.to) || (t < PLAN[0].from ? PLAN[0] : null); }

// ---- header ----
function renderHeader(){
  $("#tb-date").textContent = fmtDate(S.exam);
  const d = daysBetween(todayISO(), S.exam);
  $("#tb-days").textContent = d > 0 ? d : d === 0 ? "Today" : "Done";
  const mc = $("#misscount"); mc.hidden = !S.miss.length; mc.textContent = S.miss.length;
}

// ---- views ----
let view = "today";
function render(){
  renderHeader();
  document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.dataset.v === view));
  const fn = {today:vToday, syllabus:vSyllabus, plan:vPlan, practice:vPractice, mock:vMock, mistakes:vMistakes, formulas:vFormulas}[view] || vToday;
  $("#view").innerHTML = fn();
  if (view === "practice" && quiz) bindQuizKeys();
}

function vToday(){
  const covered = SUBS.filter(s => (S.sub[s.key]||0) > 0).length;
  const revised = SUBS.filter(s => (S.sub[s.key]||0) === 2).length;
  const attempted = Object.keys(S.att).filter(id=>QMAP[id]).length;
  let r=0,w=0; Object.values(S.att).forEach(a=>{r+=a[0];w+=a[1];});
  const best = S.mocks.length ? Math.max(...S.mocks.map(m=>m.score)) : null;
  const wk = currentWeek();
  const weak = SUBS.map(s=>({s, st:subStats(s.key)})).filter(x=>x.st.r+x.st.w>=2).sort((a,b)=>a.st.acc-b.st.acc).slice(0,5);
  let weekHtml;
  if (wk){
    const chs = wk.ch.length ? wk.ch.map(n=>{ const st=chStats(n); return `<li><div><b>Ch ${n}</b> ${esc(CH[n].name)}<div class="small muted">${st.done}/${st.total} sub-chapters started · ${st.acc===null?"no practice yet":st.acc+"% right"}</div></div><button class="btn small" data-act="practice-ch" data-ch="${n}">Practise</button></li>`; }).join("") : `<li><div>Full mock tests and weak areas</div><a class="btn small" href="#mock">Open mock test</a></li>`;
    weekHtml = `<div class="row spread"><h2>${esc(wk.label)}: this week</h2><span class="chip">${fmtDate(wk.from)} – ${fmtDate(wk.to)}</span></div><p class="muted small" style="margin:6px 0 4px">${esc(wk.why)}</p><ul class="clean weak">${chs}</ul>`;
  } else {
    weekHtml = `<h2>This week</h2><p class="muted">The plan has ended. Keep doing mocks and your mistakes list until the exam.</p>`;
  }
  const weakHtml = weak.length ? `<ul class="clean weak">${weak.map(x=>`<li><div><span class="mono small muted">${x.s.code}</span> ${esc(x.s.title)}</div><div class="row">${accChip(x.st.acc)}<button class="btn small" data-act="practice-sub" data-sub="${x.s.key}">Drill</button></div></li>`).join("")}</ul>` : `<p class="muted small">Answer a few questions in each sub-chapter and your weakest ones will show up here.</p>`;
  return `<div class="stack" style="gap:14px">
  <div class="grid g4">
    <div class="panel stat"><div class="tlabel">Syllabus started</div><div class="n">${covered}<small> / 60</small></div><div class="bar"><i style="width:${pct(covered,60)}%"></i></div><div class="small muted" style="margin-top:6px">${revised} revised</div></div>
    <div class="panel stat"><div class="tlabel">Questions tried</div><div class="n">${attempted}<small> / ${Q.length}</small></div><div class="bar"><i style="width:${pct(attempted,Q.length)}%"></i></div></div>
    <div class="panel stat"><div class="tlabel">Accuracy</div><div class="n">${r+w?pct(r,r+w)+"%":"–"}</div><div class="small muted" style="margin-top:6px">${r+w} answer${r+w===1?"":"s"} so far</div></div>
    <div class="panel stat"><div class="tlabel">Best mock</div><div class="n">${best===null?"–":best}<small>${best===null?"":" / 100"}</small></div><div class="small muted" style="margin-top:6px">${S.mocks.length} mock${S.mocks.length===1?"":"s"} taken</div></div>
  </div>
  <div class="grid g2">
    <div class="panel">${weekHtml}</div>
    <div class="panel"><h2>Weakest sub-chapters</h2>${weakHtml}</div>
  </div>
  <div class="grid g2">
    <div class="panel"><h2>Daily routine</h2>
      <ol class="steps" style="margin-top:8px">
        <li>Read short notes for 2–3 sub-chapters from this week's chapters (about 45 minutes each), then mark them <b>Studied</b> on the Syllabus tab.</li>
        <li>Straight after, practise those sub-chapters here until you are above 70%.</li>
        <li>Clear your <b>Mistakes</b> list. A question leaves it once you answer it correctly.</li>
        <li>Add any new formula to your own sheet; check the <b>Formulas</b> tab.</li>
        <li>On Sundays, revise the week and mark sub-chapters <b>Revised</b>.</li>
      </ol></div>
    <div class="panel"><h2>Exam format</h2>
      <ul class="clean weak small">
        <li><span>Questions</span><b>100 × 1 mark</b></li>
        <li><span>Time</span><b>2 hours</b></li>
        <li><span>Per chapter</span><b>10 questions, at least 1 per sub-chapter</b></li>
        <li><span>Negative marking</span><b>None, so never leave a blank</b></li>
        <li><span>Exam date</span><span class="row"><label class="small muted" for="examdate">Change</label><input type="date" id="examdate" value="${S.exam}"></span></li>
      </ul>
      <p class="small muted" style="margin:8px 0 0">The 15th exam starts Poush 20, 2083. Set your own date from your admit card.</p></div>
  </div></div>`;
}

function vSyllabus(){
  return CHAPTERS.map(c => {
    const st = chStats(c.n);
    const subs = SUBS.filter(s=>s.ch===c.n).map(s => {
      const v = S.sub[s.key]||0, ss = subStats(s.key);
      return `<div class="sub"><div class="code">${s.code}</div>
        <div><div class="t">${s.key} ${esc(s.title)}</div><div class="topics">${esc(s.topics)}</div></div>
        <div class="ctl"><div class="seg" role="group" aria-label="Status of ${esc(s.title)}">${["Not started","Studied","Revised"].map((l,i)=>`<button data-act="status" data-sub="${s.key}" data-v="${i}" class="${v===i?"on":""}" aria-pressed="${v===i}">${l}</button>`).join("")}</div>
        <div class="row">${accChip(ss.acc)}<button class="btn small" data-act="practice-sub" data-sub="${s.key}">Practise ${ss.n}</button></div></div></div>`;
    }).join("");
    return `<section class="panel chap"><div class="chap-h"><div><span class="num">${c.n}</span><h2 style="display:inline">${esc(c.name)}</h2> <span class="mono small muted">${c.code} · 10 marks</span></div>
      <div class="row small"><span class="muted">${st.done}/6 started</span>${accChip(st.acc)}<button class="btn small" data-act="practice-ch" data-ch="${c.n}">Practise chapter</button></div></div>${subs}</section>`;
  }).join("");
}

function vPlan(){
  const t = todayISO();
  const rows = PLAN.map(p => {
    const cls = t>=p.from && t<=p.to ? "now" : t>p.to ? "past" : "";
    const chs = p.ch.map(n => { const st = chStats(n); return `<button class="btn small" data-act="practice-ch" data-ch="${n}">Ch ${n} · ${esc(CH[n].name)} <span class="muted">(${st.done}/6)</span></button>`; }).join(" ");
    return `<div class="week ${cls}"><div><div style="font-weight:700">${esc(p.label)}${cls==="now"?' <span class="chip">now</span>':""}</div><div class="when muted">${fmtDate(p.from)} – ${fmtDate(p.to)}</div></div>
      <div><p style="margin:0 0 8px">${esc(p.why)}</p><div class="row">${chs || '<a class="btn small" href="#mock">Take a mock test</a> <a class="btn small" href="#mistakes">Clear mistakes</a>'}</div></div></div>`;
  }).join("");
  return `<div class="panel" style="padding:0">${rows}</div><p class="small muted">Every chapter carries 10 marks, so the plan covers all ten before going deeper anywhere.</p>`;
}

// ---- practice ----
let quiz = null; // {list, i, picked, right, wrong[], label}
let pf = {ch:"all", sub:"all", mode:"unseen", n:"10"};
function startQuiz(list, label){
  if (!list.length) { quiz = null; alertBox = "No questions match. Try another filter."; location.hash = "#practice"; render(); return; }
  quiz = {list, i:0, picked:null, right:0, wrong:[], label};
  alertBox = "";
  if (location.hash !== "#practice") location.hash = "#practice"; else render();
  window.scrollTo(0,0);
}
let alertBox = "";
function buildList(){
  let pool = Q.filter(q => (pf.ch==="all" || q.ch===+pf.ch) && (pf.sub==="all" || q.s===pf.sub));
  if (pf.mode === "mistakes") pool = pool.filter(q => S.miss.includes(q.id));
  let list;
  if (pf.mode === "unseen"){ const un = shuffle(pool.filter(q=>!S.att[q.id])), seen = shuffle(pool.filter(q=>S.att[q.id])); list = un.concat(seen); }
  else list = shuffle(pool);
  if (pf.n !== "all") list = list.slice(0, +pf.n);
  return list;
}
function vPractice(){
  if (quiz && quiz.i < quiz.list.length) return vQuestion();
  if (quiz && quiz.i >= quiz.list.length) return vQuizDone();
  const chOpts = `<option value="all">All chapters</option>` + CHAPTERS.map(c=>`<option value="${c.n}" ${pf.ch==c.n?"selected":""}>${c.n}. ${esc(c.name)}</option>`).join("");
  const subOpts = `<option value="all">All sub-chapters</option>` + (pf.ch==="all"?[]:SUBS.filter(s=>s.ch===+pf.ch)).map(s=>`<option value="${s.key}" ${pf.sub===s.key?"selected":""}>${s.key} ${esc(s.title)}</option>`).join("");
  const count = buildList().length;
  return `<div class="panel"><h2>Practice</h2><p class="muted small" style="margin:4px 0 14px">You see the answer and explanation after each question. Wrong answers go to your Mistakes list.</p>
    <div class="filters">
      <label for="f-ch">Chapter<select id="f-ch" data-f="ch">${chOpts}</select></label>
      <label for="f-sub">Sub-chapter<select id="f-sub" data-f="sub" ${pf.ch==="all"?"disabled":""}>${subOpts}</select></label>
      <label for="f-mode">Order<select id="f-mode" data-f="mode"><option value="unseen" ${pf.mode==="unseen"?"selected":""}>New questions first</option><option value="random" ${pf.mode==="random"?"selected":""}>Random</option><option value="mistakes" ${pf.mode==="mistakes"?"selected":""}>Only my mistakes</option></select></label>
      <label for="f-n">How many<select id="f-n" data-f="n">${["10","20","40","all"].map(v=>`<option value="${v}" ${pf.n===v?"selected":""}>${v==="all"?"All":v}</option>`).join("")}</select></label>
      <button class="btn primary" data-act="start" ${count?"":"disabled"}>Start ${count} question${count===1?"":"s"}</button>
    </div>${alertBox?`<p class="small" style="color:var(--bad)">${esc(alertBox)}</p>`:""}</div>
    <div class="panel" style="margin-top:14px"><h3>Where the questions come from</h3>
    <ul class="clean weak small" style="margin-top:6px">
      <li><span><span class="chip">NEC Jan 2026 · recalled</span> From the necmcq collection in your project</span><b>${Q.filter(q=>q.src==="J26").length}</b></li>
      <li><span><span class="chip">Recalled by candidates</span> From your "questions from memory" notes</span><b>${Q.filter(q=>q.src==="R").length}</b></li>
      <li><span><span class="chip">Past questions</span> From the BCT past-question PDF</span><b>${Q.filter(q=>q.src==="PQ").length}</b></li>
      <li><span><span class="chip">Practice</span> Written to fill every sub-chapter</span><b>${Q.filter(q=>q.src==="P").length}</b></li>
    </ul><p class="small muted" style="margin:8px 0 0">Recalled questions had a few wrong answer keys. Those are corrected here and the explanation says what changed.</p></div>`;
}
function vQuestion(){
  const q = quiz.list[quiz.i], s = SUBMAP[q.s], done = quiz.picked !== null;
  const opts = q.o.map((o,k) => {
    let cls = "";
    if (done){ if (k===q.a) cls="right"; else if (k===quiz.picked) cls="wrong"; }
    return `<button class="opt ${cls}" data-act="pick" data-k="${k}" ${done?"disabled":""}><span class="k">${"ABCD"[k]}</span><span>${esc(o)}</span></button>`;
  }).join("");
  const ok = done && quiz.picked===q.a;
  const exp = done ? `<div class="explain ${ok?"ok":"no"}"><div class="verdict">${ok?"Correct.":"Not quite. The answer is "+"ABCD"[q.a]+"."}</div>${esc(q.e)}</div>
    <div class="row" style="margin-top:14px"><button class="btn primary" data-act="next" id="nextbtn">${quiz.i+1<quiz.list.length?"Next question":"See results"}</button><span class="small muted">Press Enter</span></div>` : `<p class="small muted" style="margin-top:12px">Press 1–4 or A–D to answer.</p>`;
  return `<div class="panel qcard"><div class="progress-line"><i style="width:${pct(quiz.i,quiz.list.length)}%"></i></div>
    <div class="qmeta"><span class="mono small">${quiz.i+1} / ${quiz.list.length}</span><span class="chip plain">${s.code} · ${esc(s.title)}</span><span class="chip">${SRC[q.src]}</span><span style="flex:1"></span><button class="btn small" data-act="quit">End practice</button></div>
    <div class="qtext">${esc(q.q)}</div><div class="opts">${opts}</div>${exp}</div>`;
}
function vQuizDone(){
  const n = quiz.list.length, sc = quiz.right;
  const wrong = quiz.wrong.map(id=>QMAP[id]).map(q=>`<div class="miss-item"><div class="small muted mono">${SUBMAP[q.s].code}</div><div style="font-weight:500">${esc(q.q)}</div><div class="small" style="margin-top:4px"><span class="chip good">${"ABCD"[q.a]}. ${esc(q.o[q.a])}</span></div><div class="small muted" style="margin-top:6px">${esc(q.e)}</div></div>`).join("");
  return `<div class="panel qcard"><div class="tlabel">${esc(quiz.label)}</div><div class="result-big">${sc}<span class="muted" style="font-size:22px"> / ${n}</span></div><div>${accChip(pct(sc,n))}</div>
    <div class="row" style="margin-top:14px"><button class="btn primary" data-act="again">Practise again</button><button class="btn" data-act="newset">Change filters</button></div>
    ${wrong?`<h3 style="margin-top:20px">Review what you missed</h3>${wrong}`:""}</div>`;
}
function bindQuizKeys(){ const b = document.getElementById("nextbtn"); if (b) b.focus({preventScroll:true}); }

// ---- mock ----
let mock = null; // {list, ans[], cur, end, timer, confirm, result}
function startMock(){
  const list = [];
  CHAPTERS.forEach(c => list.push(...shuffle(Q.filter(q=>q.ch===c.n)).slice(0,10)));
  mock = {list, ans:new Array(list.length).fill(null), cur:0, end:Date.now()+120*60*1000, confirm:false, result:null};
  clearInterval(mockTick); mockTick = setInterval(tickMock, 1000);
  render(); window.scrollTo(0,0);
}
let mockTick = null;
function tickMock(){
  if (!mock || mock.result) { clearInterval(mockTick); return; }
  const left = mock.end - Date.now();
  if (left <= 0) { submitMock(); return; }
  const el = document.getElementById("timer");
  if (el){ el.textContent = fmtLeft(left); el.classList.toggle("low", left < 10*60*1000); }
}
function fmtLeft(ms){ const s = Math.max(0, Math.floor(ms/1000)); return Math.floor(s/3600)+":"+String(Math.floor(s%3600/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); }
function submitMock(){
  clearInterval(mockTick);
  const byCh = {}; let score = 0;
  mock.list.forEach((q,i) => { byCh[q.ch] = byCh[q.ch] || [0,0]; byCh[q.ch][1]++; const ok = mock.ans[i]===q.a; if (ok){ score++; byCh[q.ch][0]++; } if (mock.ans[i]!==null) record(q, ok); else if (!S.miss.includes(q.id)) S.miss.push(q.id); });
  mock.result = {score, byCh, used: Math.round((120*60*1000 - Math.max(0, mock.end-Date.now()))/60000)};
  S.mocks.push({d: todayISO(), score, byCh: Object.fromEntries(Object.entries(byCh).map(([k,v])=>[k,v[0]]))});
  save(); render(); window.scrollTo(0,0);
}
function vMock(){
  if (!mock){
    const hist = S.mocks.slice().reverse().slice(0,8).map(m=>`<li><span class="mono">${fmtDate(m.d)}</span><span>${accChip(m.score)} <b>${m.score}</b>/100 ${m.score>=50?'<span class="chip good">pass</span>':'<span class="chip bad">below 50</span>'}</span></li>`).join("");
    return `<div class="grid g2"><div class="panel"><h2>Full mock test</h2>
      <ul class="clean weak small" style="margin:10px 0 14px"><li><span>Questions</span><b>100, 10 from each chapter</b></li><li><span>Time</span><b>2 hours, auto-submits</b></li><li><span>Pass mark</span><b>50</b></li><li><span>Feedback</span><b>After you submit</b></li></ul>
      <p class="small muted">The bank has ${Q.length} questions, so mocks will repeat some. Use them in Week 6 to test timing and spot weak chapters.</p>
      <button class="btn primary" data-act="mock-start">Start mock test</button></div>
      <div class="panel"><h2>Your mocks</h2>${hist?`<ul class="clean weak small">${hist}</ul>`:'<p class="muted small">No mocks yet.</p>'}</div></div>`;
  }
  if (mock.result){
    const r = mock.result;
    const bars = CHAPTERS.map(c => { const v = r.byCh[c.n]||[0,10]; const p = pct(v[0],v[1]); const col = p>=70?"var(--good)":p>=50?"var(--warn)":"var(--bad)"; return `<div class="small">${c.n}. ${esc(c.name)}</div><div class="b"><i style="width:${p}%;background:${col}"></i></div><div class="mono small">${v[0]}/${v[1]}</div>`; }).join("");
    const rev = mock.list.map((q,i)=>({q,i})).filter(x=>mock.ans[x.i]!==x.q.a).map(({q,i})=>`<div class="miss-item"><div class="small muted mono">Q${i+1} · ${SUBMAP[q.s].code}</div><div style="font-weight:500">${esc(q.q)}</div><div class="row small" style="margin-top:6px">${mock.ans[i]===null?'<span class="chip plain">left blank</span>':`<span class="chip bad">You: ${"ABCD"[mock.ans[i]]}. ${esc(q.o[mock.ans[i]])}</span>`}<span class="chip good">${"ABCD"[q.a]}. ${esc(q.o[q.a])}</span></div><div class="small muted" style="margin-top:6px">${esc(q.e)}</div></div>`).join("");
    return `<div class="stack" style="gap:14px"><div class="grid g2"><div class="panel"><div class="tlabel">Mock result</div><div class="result-big">${r.score}<span class="muted" style="font-size:22px"> / 100</span></div>
      <div class="row">${r.score>=50?'<span class="chip good">Pass</span>':'<span class="chip bad">Below the pass mark</span>'}<span class="small muted">${r.used} minutes used</span></div>
      <div class="row" style="margin-top:14px"><button class="btn primary" data-act="mock-new">Back to mock tests</button></div></div>
      <div class="panel"><h3>By chapter</h3><div class="chbars" style="margin-top:10px">${bars}</div></div></div>
      ${rev?`<div class="panel"><h2>Review (${100-r.score})</h2>${rev}</div>`:""}</div>`;
  }
  const q = mock.list[mock.cur], s = SUBMAP[q.s];
  const answered = mock.ans.filter(a=>a!==null).length;
  const nav = mock.list.map((_,i)=>`<button data-act="mock-go" data-i="${i}" class="${mock.ans[i]!==null?"ans":""} ${i===mock.cur?"cur":""}" aria-label="Question ${i+1}">${i+1}</button>`).join("");
  const opts = q.o.map((o,k)=>`<button class="opt ${mock.ans[mock.cur]===k?"sel":""}" data-act="mock-pick" data-k="${k}"><span class="k">${"ABCD"[k]}</span><span>${esc(o)}</span></button>`).join("");
  return `<div class="mock-top"><div class="row spread"><div class="row"><span class="timer" id="timer">${fmtLeft(mock.end-Date.now())}</span><span class="small muted">${answered}/100 answered</span></div>
    <button class="btn" data-act="mock-submit">Submit</button></div>
    ${mock.confirm?`<div class="confirm small"><b>${100-answered} unanswered.</b> There is no negative marking, so guessing can only help. Submit anyway?<div class="row" style="margin-top:8px"><button class="btn primary small" data-act="mock-confirm">Yes, submit</button><button class="btn small" data-act="mock-cancel">Keep going</button></div></div>`:""}
    <div class="navgrid">${nav}</div></div>
    <div class="panel qcard"><div class="qmeta"><span class="mono small">Q${mock.cur+1}</span><span class="chip plain">Ch ${q.ch} · ${esc(s.title)}</span></div>
    <div class="qtext">${esc(q.q)}</div><div class="opts">${opts}</div>
    <div class="row spread" style="margin-top:14px"><button class="btn" data-act="mock-prev" ${mock.cur===0?"disabled":""}>Previous</button><button class="btn primary" data-act="mock-next" ${mock.cur===99?"disabled":""}>Next</button></div></div>`;
}

// ---- mistakes ----
function vMistakes(){
  if (!S.miss.length) return `<div class="panel empty">No mistakes saved. Wrong answers from practice and mocks will appear here.</div>`;
  const byCh = {}; S.miss.forEach(id=>{ const q=QMAP[id]; (byCh[q.ch]=byCh[q.ch]||[]).push(q); });
  const items = Object.keys(byCh).sort((a,b)=>a-b).map(n=>`<section class="panel" style="margin-top:14px"><div class="row spread"><h2>Ch ${n} · ${esc(CH[n].name)}</h2><span class="chip bad">${byCh[n].length}</span></div>
    ${byCh[n].map(q=>`<div class="miss-item"><div class="row spread"><span class="small muted mono">${SUBMAP[q.s].code} · ${esc(SUBMAP[q.s].title)}</span><button class="btn small" data-act="miss-remove" data-id="${q.id}">Remove</button></div><div style="font-weight:500;margin-top:4px">${esc(q.q)}</div><div class="small" style="margin-top:6px"><span class="chip good">${"ABCD"[q.a]}. ${esc(q.o[q.a])}</span></div><div class="small muted" style="margin-top:6px">${esc(q.e)}</div></div>`).join("")}</section>`).join("");
  return `<div class="panel"><div class="row spread"><div><h2>Mistakes (${S.miss.length})</h2><p class="small muted" style="margin:4px 0 0">A question leaves this list when you answer it correctly.</p></div><button class="btn primary" data-act="miss-practice">Practise all mistakes</button></div></div>${items}`;
}

// ---- formulas ----
function vFormulas(){
  return `<p class="muted small" style="margin-top:0">The formulas and facts that recalled questions keep testing. Copy them onto your own one-page sheet for the last week.</p><div class="fgrid">${FORMULAS.map(f=>`<div class="panel"><h3>Ch ${f.ch} · ${esc(CH[f.ch].name)}</h3><div style="margin-top:8px">${f.items.map(it=>`<div class="frow"><div class="fn">${it[0]}</div><div class="fv">${it[1]}</div></div>`).join("")}</div></div>`).join("")}</div>`;
}

// ---- events ----
document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act;
  if (act === "status"){ S.sub[b.dataset.sub] = +b.dataset.v; save(); render(); }
  else if (act === "practice-sub"){ const s = SUBMAP[b.dataset.sub]; pf = {ch:String(s.ch), sub:s.key, mode:"unseen", n:"all"}; startQuiz(buildList(), s.key+" "+s.title); }
  else if (act === "practice-ch"){ pf = {ch:b.dataset.ch, sub:"all", mode:"unseen", n:"20"}; startQuiz(buildList(), "Chapter "+b.dataset.ch+" · "+CH[b.dataset.ch].name); }
  else if (act === "start"){ startQuiz(buildList(), pf.ch==="all"?"All chapters":(pf.sub!=="all"?pf.sub+" "+SUBMAP[pf.sub].title:"Chapter "+pf.ch+" · "+CH[pf.ch].name)); }
  else if (act === "pick" && quiz && quiz.picked===null){ pick(+b.dataset.k); }
  else if (act === "next"){ nextQ(); }
  else if (act === "quit"){ quiz.list = quiz.list.slice(0, quiz.i + (quiz.picked!==null?1:0)); quiz.i = quiz.list.length; render(); }
  else if (act === "again"){ startQuiz(buildList(), quiz.label); }
  else if (act === "newset"){ quiz = null; render(); }
  else if (act === "mock-start"){ startMock(); }
  else if (act === "mock-pick"){ mock.ans[mock.cur] = +b.dataset.k; render(); }
  else if (act === "mock-go"){ mock.cur = +b.dataset.i; render(); }
  else if (act === "mock-prev"){ mock.cur = Math.max(0, mock.cur-1); render(); }
  else if (act === "mock-next"){ mock.cur = Math.min(99, mock.cur+1); render(); }
  else if (act === "mock-submit"){ const un = mock.ans.filter(a=>a===null).length; if (un){ mock.confirm = true; render(); } else submitMock(); }
  else if (act === "mock-confirm"){ submitMock(); }
  else if (act === "mock-cancel"){ mock.confirm = false; render(); }
  else if (act === "mock-new"){ mock = null; render(); }
  else if (act === "miss-remove"){ S.miss = S.miss.filter(id=>id!==b.dataset.id); save(); render(); }
  else if (act === "miss-practice"){ pf = {ch:"all", sub:"all", mode:"mistakes", n:"all"}; startQuiz(buildList(), "Your mistakes"); }
});
document.addEventListener("change", e => {
  const t = e.target;
  if (t.dataset.f){ pf[t.dataset.f] = t.value; if (t.dataset.f==="ch") pf.sub = "all"; alertBox=""; render(); }
  else if (t.id === "examdate" && t.value){ S.exam = t.value; save(); renderHeader(); }
});
function pick(k){
  const q = quiz.list[quiz.i]; quiz.picked = k;
  const ok = k === q.a; if (ok) quiz.right++; else quiz.wrong.push(q.id);
  record(q, ok); save(); render();
}
function nextQ(){ quiz.i++; quiz.picked = null; render(); window.scrollTo({top:0}); }
document.addEventListener("keydown", e => {
  if (e.target.matches("input,select,textarea")) return;
  if (view === "practice" && quiz && quiz.i < quiz.list.length){
    const k = {"1":0,"2":1,"3":2,"4":3,"a":0,"b":1,"c":2,"d":3}[e.key.toLowerCase()];
    if (quiz.picked === null && k !== undefined && k < quiz.list[quiz.i].o.length){ pick(k); e.preventDefault(); }
    else if (quiz.picked !== null && e.key === "Enter" && !e.target.matches("button")){ nextQ(); e.preventDefault(); }
  } else if (view === "mock" && mock && !mock.result){
    const k = {"1":0,"2":1,"3":2,"4":3,"a":0,"b":1,"c":2,"d":3}[e.key.toLowerCase()];
    if (k !== undefined){ mock.ans[mock.cur] = k; render(); e.preventDefault(); }
    else if (e.key === "ArrowRight" && mock.cur < 99){ mock.cur++; render(); }
    else if (e.key === "ArrowLeft" && mock.cur > 0){ mock.cur--; render(); }
  }
});
const VIEWS = ["today","syllabus","plan","practice","mock","mistakes","formulas"];
function route(){ const h = location.hash.replace("#",""); view = VIEWS.includes(h) ? h : "today"; render(); }
window.addEventListener("hashchange", () => { route(); window.scrollTo(0,0); });
window.addEventListener("beforeunload", e => { if (mock && !mock.result) { e.preventDefault(); e.returnValue = ""; } });
setSync("loading");
route();
setTimeout(initDb, 0);
})();
