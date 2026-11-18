import { useMemo, useState } from "react";
import { X } from "./Icons";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  COMPILED_NOTE,
  CYCLES,
  CYCLE_2_DATES,
  FORMAT_FACTS,
  NOT_COVERED_NOTE,
  OLD_FORMAT_WARNING,
  PASS_RATES,
  RESOURCES,
  SOURCE_LINKS,
  SYLLABUS_CHAPTERS,
  SYLLABUS_TOTAL_SUBS,
  TIPS,
  ytUrl,
  type ResourceKind,
} from "../data/resources";

interface ResourcesPageProps {
  onClose: () => void;
}

function useCycle2Countdown() {
  const now = Date.now();
  const at = (s: string) => new Date(s).getTime();
  const days = (t: number) => Math.max(0, Math.ceil((t - now) / 86400000));
  const open = at(CYCLE_2_DATES.open);
  const applyEnd = at(CYCLE_2_DATES.applyEnd);
  const lateEnd = at(CYCLE_2_DATES.lateEnd);
  const exam = at(CYCLE_2_DATES.exam);

  let status: { label: string; tone: "info" | "ok" | "warn" | "bad" | "neutral" };
  if (now < open) status = { label: "Opens 16 Nov 2026", tone: "info" };
  else if (now <= applyEnd) status = { label: "Applications open", tone: "ok" };
  else if (now <= lateEnd) status = { label: "Double-fee window only", tone: "warn" };
  else if (now < exam) status = { label: "Applications closed", tone: "bad" };
  else status = { label: "Exam under way or done; see 3rd cycle", tone: "neutral" };

  return {
    daysToApply: days(applyEnd),
    daysToLate: days(lateEnd),
    daysToExam: days(exam),
    status,
  };
}

const TONE_CLASSES: Record<string, string> = {
  info: "bg-blue-100 text-blue-700",
  ok: "bg-emerald-100 text-emerald-700",
  warn: "bg-amber-100 text-amber-800",
  bad: "bg-rose-100 text-rose-700",
  neutral: "bg-[var(--bg3)] text-[var(--text2)]",
};

const RESOURCE_KINDS: ResourceKind[] = [
  "Official",
  "Question bank",
  "Notes",
  "Video",
  "App",
  "Paid",
  "Guide",
  "In your project",
];

export function ResourcesPage({ onClose }: ResourcesPageProps) {
  const countdown = useCycle2Countdown();
  const [ticks, setTicks] = useLocalStorage<Record<string, boolean>>("nec-acte-progress-v1", {});
  const [activeKind, setActiveKind] = useState<ResourceKind | "all">("all");
  const [search, setSearch] = useState("");

  const doneCount = Object.values(ticks).filter(Boolean).length;

  const filteredResources = useMemo(() => {
    const q = search.trim().toLowerCase();
    return RESOURCES.filter((r) => {
      if (activeKind !== "all" && r.kind !== activeKind) return false;
      if (!q) return true;
      return `${r.name} ${r.description} ${r.keywords}`.toLowerCase().includes(q);
    });
  }, [activeKind, search]);

  return (
    <div className="h-screen overflow-y-auto scrollbar-thin bg-[var(--bg)]">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg2)]/90 backdrop-blur-md px-4 py-3 min-[901px]:px-8">
        <h1 className="font-[family:var(--serif)] text-lg font-bold text-[var(--text)]">
          Resources &amp; exam info
        </h1>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--text2)] hover:bg-[var(--bg3)] transition-colors"
        >
          <X size={16} /> Back to questions
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 min-[901px]:px-8">
        <p className="text-[var(--text2)] leading-relaxed mb-8">
          Everything found so far for the Nepal Engineering Council registration exam, Computer
          Engineering (syllabus code <code className="font-mono text-[0.9em]">ACtE</code>): dates,
          format, a chapter-by-chapter tracker with video lectures, and every question bank, notes
          repo and app worth knowing about. <span className="text-[var(--text3)]">{COMPILED_NOTE}</span>
        </p>

        {/* Deadlines */}
        <Section title="Next exam: 2nd cycle, 2083/84">
          <div className="mb-5">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${TONE_CLASSES[countdown.status.tone]}`}
            >
              {countdown.status.label}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            <Countdown
              days={countdown.daysToApply}
              label="days left to apply at normal fee"
              date="2083/08/21 · 6 Dec 2026"
            />
            <Countdown
              days={countdown.daysToLate}
              label="days left in the double-fee window"
              date="2083/08/28 · 13 Dec 2026"
            />
            <Countdown
              days={countdown.daysToExam}
              label="days to the exam start"
              date="2083/09/20 · 4 Jan 2027"
            />
          </div>
          <p className="text-[13px] text-[var(--text3)] leading-relaxed mb-6">
            Apply only at{" "}
            <a className="text-[var(--accent)] underline" href="https://register.nec.gov.np/">
              register.nec.gov.np
            </a>
            . Support: <span className="font-mono">9767472423</span> (Mon–Fri, 9 AM–5 PM) or{" "}
            <span className="font-mono">exam_support@nec.gov.np</span>. Confirm dates in the notice
            for your cycle on{" "}
            <a className="text-[var(--accent)] underline" href="https://nec.gov.np/">
              nec.gov.np
            </a>{" "}
            before paying; the calendar is only a guide.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[var(--border)]">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[var(--bg3)] text-left text-[var(--text2)]">
                  <Th>Cycle</Th>
                  <Th>Apply (normal fee)</Th>
                  <Th>Apply (double fee)</Th>
                  <Th>Exam starts</Th>
                </tr>
              </thead>
              <tbody>
                {CYCLES.map((c) => (
                  <tr
                    key={c.cycle}
                    className={`border-t border-[var(--border)] ${c.current ? "bg-[var(--accent)]/5 font-medium" : ""}`}
                  >
                    <Td>{c.cycle}</Td>
                    <Td>
                      {c.applyNormal}{" "}
                      <span className="text-[var(--text3)]">({c.applyNormalAd})</span>
                    </Td>
                    <Td>{c.applyDouble}</Td>
                    <Td>
                      {c.examStarts} <span className="text-[var(--text3)]">({c.examStartsAd})</span>
                      {c.done && <span className="text-[var(--text3)]"> · done</span>}
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Format */}
        <Section title="Exam format">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {FORMAT_FACTS.map((f) => (
              <div key={f.label} className="rounded-lg border border-[var(--border)] p-3 bg-[var(--bg2)]">
                <div className="text-[11px] uppercase tracking-wide text-[var(--text3)]">{f.label}</div>
                <div className="font-[family:var(--serif)] text-lg font-bold">{f.value}</div>
                <div className="text-[11px] text-[var(--text3)]">{f.detail}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border-l-3 border-amber-400 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
            <strong>Old format warning.</strong> {OLD_FORMAT_WARNING}
          </div>
        </Section>

        {/* Syllabus tracker */}
        <Section title="Syllabus tracker">
          <p className="text-[13px] text-[var(--text3)] mb-4">
            The 10 ACtE chapters and their {SYLLABUS_TOTAL_SUBS} subchapters. Tick a subchapter when
            you've studied it; ticks are kept in this browser only. Where a free YouTube playlist
            exists (from BCT Engineering Notes), it's linked.
          </p>
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-[13px] font-medium">
              {doneCount} of {SYLLABUS_TOTAL_SUBS} subchapters done
            </span>
            <div className="flex-1 min-w-[120px] h-2 bg-[var(--bg3)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent)] transition-all"
                style={{ width: `${(doneCount / SYLLABUS_TOTAL_SUBS) * 100}%` }}
              />
            </div>
            <button
              onClick={() => setTicks({})}
              className="text-[12px] rounded-full border border-[var(--border)] px-3 py-1 hover:bg-[var(--bg3)]"
            >
              Clear ticks
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {SYLLABUS_CHAPTERS.map((chapter) => (
              <div key={chapter.n} className="rounded-lg border border-[var(--border)] overflow-hidden">
                <div className="px-4 py-2.5 bg-[var(--bg2)] border-b border-[var(--border)] font-medium text-[13.5px]">
                  <span className="font-mono text-[var(--text3)] mr-2">{chapter.code}</span>
                  {chapter.name}
                </div>
                {chapter.subs.map((sub) => (
                  <label
                    key={sub.code}
                    className={`flex items-center gap-3 px-4 py-2 border-t border-[var(--border)] first:border-t-0 text-[13px] ${
                      ticks[sub.code] ? "bg-emerald-50/60" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!ticks[sub.code]}
                      onChange={(e) =>
                        setTicks((prev) => ({ ...prev, [sub.code]: e.target.checked }))
                      }
                    />
                    <span className="font-mono text-[var(--text3)] w-9 shrink-0">{sub.code}</span>
                    <span className="flex-1">{sub.title}</span>
                    {sub.playlistId ? (
                      <a
                        href={ytUrl(sub.playlistId)}
                        className="text-[var(--accent)] text-[12px] shrink-0 whitespace-nowrap"
                      >
                        ▶ Videos
                      </a>
                    ) : (
                      <span className="text-[var(--text3)] text-[12px] shrink-0">no playlist</span>
                    )}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </Section>

        {/* Resource directory */}
        <Section title="Resource directory">
          <p className="text-[13px] text-[var(--text3)] mb-4">
            Every resource found, with what it's good for and any known problems.
          </p>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Try: past questions, OS, free, app, video"
            className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-[13.5px] mb-3 outline-none focus:border-[var(--text3)]"
          />
          <div className="flex flex-wrap gap-2 mb-5">
            <KindChip label="All" active={activeKind === "all"} onClick={() => setActiveKind("all")} />
            {RESOURCE_KINDS.map((k) => (
              <KindChip key={k} label={k} active={activeKind === k} onClick={() => setActiveKind(k)} />
            ))}
          </div>
          <div className="text-[12px] text-[var(--text3)] mb-3">
            {filteredResources.length} of {RESOURCES.length} resources
          </div>

          <div className="flex flex-col gap-3">
            {filteredResources.map((r) => (
              <div key={r.name} className="rounded-lg border border-[var(--border)] p-4 bg-[var(--bg2)]">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="font-medium text-[14px]">
                    {r.url ? (
                      <a href={r.url} className="text-[var(--accent)] hover:underline">
                        {r.name}
                      </a>
                    ) : (
                      r.name
                    )}
                  </div>
                  <span className="shrink-0 text-[11px] font-mono text-[var(--text3)] bg-[var(--bg3)] rounded px-1.5 py-0.5">
                    {r.cost}
                  </span>
                </div>
                <div className="text-[11px] uppercase tracking-wide text-[var(--text3)] mb-1.5">
                  {r.kind}
                </div>
                <p className="text-[13px] text-[var(--text2)] leading-relaxed">{r.description}</p>
                {r.warning && (
                  <p className="mt-2 text-[12px] text-amber-800 bg-amber-50 rounded px-2 py-1.5">
                    ⚠️ {r.warning}
                  </p>
                )}
              </div>
            ))}
            {filteredResources.length === 0 && (
              <div className="text-center text-[var(--text3)] py-10">No resources match.</div>
            )}
          </div>
        </Section>

        {/* Tips */}
        <Section title="Tips collected from these sources">
          <ol className="flex flex-col gap-3 list-decimal pl-5 text-[13.5px] text-[var(--text2)] leading-relaxed">
            {TIPS.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ol>
        </Section>

        {/* Pass rates */}
        <Section title="Pass rates so far">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PASS_RATES.map((p) => (
              <div key={p.label} className="rounded-lg border border-[var(--border)] p-3 bg-[var(--bg2)]">
                <div className="text-[11px] text-[var(--text3)] mb-1">{p.label}</div>
                <div className="font-[family:var(--serif)] text-xl font-bold">{p.value}</div>
                <div className="text-[11px] text-[var(--text3)]">{p.detail}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Sources */}
        <div className="border-t border-[var(--border)] pt-6 pb-16">
          <p className="text-[12px] text-[var(--text3)] mb-3">
            <strong>Not covered:</strong> {NOT_COVERED_NOTE}
          </p>
          <ul className="flex flex-col gap-1 text-[12px]">
            {SOURCE_LINKS.map((s) => (
              <li key={s.url}>
                <a href={s.url} className="text-[var(--accent)] hover:underline">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="font-[family:var(--serif)] text-xl font-bold mb-4 border-b border-[var(--border2)] pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Countdown({ days, label, date }: { days: number; label: string; date: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] p-4 bg-[var(--bg2)]">
      <div className="font-[family:var(--serif)] text-3xl font-bold text-[var(--accent)] tabular-nums">
        {days}
      </div>
      <div className="text-[12px] text-[var(--text2)] leading-snug mt-1">{label}</div>
      <div className="text-[11px] font-mono text-[var(--text3)] mt-1">{date}</div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-3 py-2 font-medium">{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2">{children}</td>;
}

function KindChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-[12px] font-medium transition-colors ${
        active
          ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
          : "border-[var(--border)] text-[var(--text2)] hover:border-[var(--text3)]"
      }`}
    >
      {label}
    </button>
  );
}
