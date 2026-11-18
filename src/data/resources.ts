// Ported from the project's standalone resources.html hub (compiled 18 Nov 2026 / 2083/08/03),
// into the new site's design system. Content, dates and links are unchanged from that page.

export const COMPILED_NOTE = "Compiled 18 Nov 2026 (2083/08/03).";

export interface ExamCycle {
  cycle: string;
  current?: boolean;
  applyNormal: string;
  applyNormalAd: string;
  applyDouble: string;
  examStarts: string;
  examStartsAd: string;
  done?: boolean;
}

export const CYCLES: ExamCycle[] = [
  {
    cycle: "1st",
    applyNormal: "2083/04/28 – 05/17",
    applyNormalAd: "13 Aug – 2 Sep 2026",
    applyDouble: "05/18 – 05/24",
    examStarts: "2083/06/17",
    examStartsAd: "3 Oct 2026",
    done: true,
  },
  {
    cycle: "2nd",
    current: true,
    applyNormal: "2083/08/01 – 08/21",
    applyNormalAd: "16 Nov – 6 Dec 2026",
    applyDouble: "08/22 – 08/28",
    examStarts: "2083/09/20",
    examStartsAd: "4 Jan 2027",
  },
  {
    cycle: "3rd",
    applyNormal: "2083/10/22 – 11/13",
    applyNormalAd: "5 – 25 Feb 2027",
    applyDouble: "11/14 – 11/20",
    examStarts: "2083/12/10",
    examStartsAd: "24 Mar 2027",
  },
  {
    cycle: "4th",
    applyNormal: "2084/01/20 – 02/09",
    applyNormalAd: "3 – 23 May 2027",
    applyDouble: "02/10 – 02/16",
    examStarts: "2084/03/04",
    examStartsAd: "18 Jun 2027",
  },
];

// 2nd-cycle countdown anchors (Asia/Kathmandu, UTC+05:45), computed live.
export const CYCLE_2_DATES = {
  open: "2026-11-16T00:00:00+05:45",
  applyEnd: "2026-12-06T23:59:00+05:45",
  lateEnd: "2026-12-13T23:59:00+05:45",
  exam: "2027-01-04T09:00:00+05:45",
};

export interface FormatFact {
  label: string;
  value: string;
  detail: string;
}

export const FORMAT_FACTS: FormatFact[] = [
  { label: "Questions", value: "100 MCQ", detail: "1 mark each, computer-based" },
  { label: "Time", value: "2 hours", detail: "about 1.2 minutes per question" },
  { label: "Pass mark", value: "50 / 100", detail: "qualifying, not ranked" },
  { label: "Negative marking", value: "None", detail: "answer every question" },
  { label: "Per chapter", value: "10 × 10", detail: "at least 1 question per subchapter" },
  { label: "Fees", value: "NPR 2,500", detail: "double if late; NPR 5,000 registration after passing" },
];

export const OLD_FORMAT_WARNING =
  "Papers from 2080–2081, including the GitBook past-paper sets, use the older 60 × 1 + 20 × 2 scheme. The questions are still good practice, but the official 2082 model question is the only paper in the current 100 × 1 layout.";

export interface SyllabusSub {
  code: string;
  title: string;
  playlistId: string | null;
}

export interface SyllabusChapter {
  n: number;
  code: string;
  name: string;
  subs: SyllabusSub[];
}

const YT = "https://www.youtube.com/playlist?list=";
export const ytUrl = (id: string) => YT + id;

export const SYLLABUS_CHAPTERS: SyllabusChapter[] = [
  {
    n: 1,
    code: "AExE01",
    name: "Concept of Basic Electrical and Electronics Engineering",
    subs: [
      { code: "1.1", title: "Basic concepts (Ohm's law, power, series/parallel, Kirchhoff)", playlistId: null },
      { code: "1.2", title: "Network theorems", playlistId: "PLAXUYU7PbJhgLUsjjaiA1u0MmJF-eHN4w" },
      { code: "1.3", title: "Alternating current fundamentals", playlistId: "PLAXUYU7PbJhgaa7ER2ULzFKio10d19r8d" },
      { code: "1.4", title: "Semiconductor devices", playlistId: "PLAXUYU7PbJhi7bPRJk4nl7q77yz7vwdJ3" },
      { code: "1.5", title: "Signal generators", playlistId: "PLAXUYU7PbJhg4aJbdKW_mQlhuSF_3-9oC" },
      { code: "1.6", title: "Amplifiers", playlistId: "PLAXUYU7PbJhhaf3NZQ_XomkqMAMvaR-_G" },
    ],
  },
  {
    n: 2,
    code: "AExE02",
    name: "Digital Logic and Microprocessor",
    subs: [
      { code: "2.1", title: "Digital logic", playlistId: "PLAXUYU7PbJhhncW1TYg_IVXt8Yhqm1uyP" },
      { code: "2.2", title: "Combinational & arithmetic circuits", playlistId: "PLAXUYU7PbJhhqWesUD1dBw5c7-iqm7lfT" },
      { code: "2.3", title: "Sequential logic circuits", playlistId: "PLAXUYU7PbJhjeQI3nHewsuxJC8qxbCarn" },
      { code: "2.4", title: "Microprocessor", playlistId: null },
      { code: "2.5", title: "Microprocessor system", playlistId: null },
      { code: "2.6", title: "Interrupt operations", playlistId: "PLAXUYU7PbJhjiONBpKGkAx3zi1hjrabet" },
    ],
  },
  {
    n: 3,
    code: "ACtE03",
    name: "Programming Language and Its Applications",
    subs: [
      { code: "3.1", title: "Introduction to C programming", playlistId: "PLAXUYU7PbJhghFr2oEdTbL8z23Wdqfis1" },
      { code: "3.2", title: "Pointers, structures and data files", playlistId: "PLAXUYU7PbJhherVuN3EQQrDrvpfYMvI0a" },
      { code: "3.3", title: "C++ language constructs with objects and classes", playlistId: "PLAXUYU7PbJhgXU-_NvAw_jRmkfiXiGrme" },
      { code: "3.4", title: "Features of object-oriented programming", playlistId: "PLAXUYU7PbJhje3GBvuenk8CHz8C0qakBM" },
      { code: "3.5", title: "Pure virtual functions and file handling", playlistId: "PLAXUYU7PbJhgwGQ7x3q3YThpENbuYUg5y" },
      { code: "3.6", title: "Generic programming and exception handling", playlistId: "PLAXUYU7PbJhgvdNs48I-qDnzts3x7Cyq9" },
    ],
  },
  {
    n: 4,
    code: "ACtE04",
    name: "Computer Organization and Embedded System",
    subs: [
      { code: "4.1", title: "Control and CPU", playlistId: "PLAXUYU7PbJhij_mzxJ6bcFmJTAkvSkSoC" },
      { code: "4.2", title: "Computer arithmetic and memory system", playlistId: "PLAXUYU7PbJhjVfMb1oKy9z1MjC173F2LH" },
      { code: "4.3", title: "I/O organization and multiprocessor", playlistId: "PLAXUYU7PbJhjHkOlWt352SE43fv-0qo1X" },
      { code: "4.4", title: "Embedded system design", playlistId: "PLAXUYU7PbJhiiV-7Q7CCuk4EUsJWL1QpF" },
      { code: "4.5", title: "Real-time operating and control systems", playlistId: "PLAXUYU7PbJhgfZvhOkGmlenrWPm08IieG" },
      { code: "4.6", title: "Hardware description language (VHDL) and IC technology", playlistId: null },
    ],
  },
  {
    n: 5,
    code: "ACtE05",
    name: "Concept of Computer Network and Network Security System",
    subs: [
      { code: "5.1", title: "Introduction to computer networks and physical layer", playlistId: "PLAXUYU7PbJhhpQ5PAocNwVagYhS2KL-PG" },
      { code: "5.2", title: "Data link layer", playlistId: "PLAXUYU7PbJhjs1bzEzn1_9Qd7-Bfif7aH" },
      { code: "5.3", title: "Network layer", playlistId: "PLAXUYU7PbJhjAxExi0t79yf6IjxEZk9lJ" },
      { code: "5.4", title: "Transport layer", playlistId: "PLAXUYU7PbJhjZ9KCQDkbIGiBBpptoYLCL" },
      { code: "5.5", title: "Application layer", playlistId: "PLAXUYU7PbJhhUdeBrkq6OMYaCobitOlVZ" },
      { code: "5.6", title: "Network security", playlistId: "PLAXUYU7PbJhjZwyfVapm8uE_zUMbpVs18" },
    ],
  },
  {
    n: 6,
    code: "ACtE06",
    name: "Theory of Computation and Computer Graphics",
    subs: [
      { code: "6.1", title: "Introduction to finite automata", playlistId: "PLAXUYU7PbJhhGBdj11Vb5piNNEMX0bnn0" },
      { code: "6.2", title: "Context-free languages", playlistId: null },
      { code: "6.3", title: "Turing machines", playlistId: null },
      { code: "6.4", title: "Introduction to computer graphics", playlistId: "PLAXUYU7PbJhiAdlwqyV12-5hbVq8WDnYk" },
      { code: "6.5", title: "Two-dimensional transformation", playlistId: "PLAXUYU7PbJhi-LXQUyUPuP36UGNcy2U0D" },
      { code: "6.6", title: "Three-dimensional transformation", playlistId: null },
    ],
  },
  {
    n: 7,
    code: "ACtE07",
    name: "Data Structures and Algorithm, Database System and Operating System",
    subs: [
      { code: "7.1", title: "Data structures, lists, linked lists and trees", playlistId: "PLAXUYU7PbJhjEGCBq6nnVUoGFsWk6qY0Y" },
      { code: "7.2", title: "Sorting, searching, hashing and graphs", playlistId: null },
      { code: "7.3", title: "Data models, normalization and SQL", playlistId: null },
      { code: "7.4", title: "Transaction processing, concurrency control and crash recovery", playlistId: "PLAXUYU7PbJhgs-nhw4wlFAdynG_qAZMMK" },
      { code: "7.5", title: "Operating system and process management", playlistId: "PLAXUYU7PbJhjRMni-AlHZohLrDwq_IP1s" },
      { code: "7.6", title: "Memory management, file systems and system administration", playlistId: null },
    ],
  },
  {
    n: 8,
    code: "ACtE08",
    name: "Software Engineering and Object-Oriented Analysis & Design",
    subs: [
      { code: "8.1", title: "Software process and requirements", playlistId: "PLAXUYU7PbJhiuxgGCR1_ihJU-Ph6MVY1a" },
      { code: "8.2", title: "Software design", playlistId: null },
      { code: "8.3", title: "Testing, cost estimation, quality and configuration management", playlistId: "PLAXUYU7PbJhjfnqRdDCPIhc1xidctKFq5" },
      { code: "8.4", title: "Object-oriented fundamentals and analysis", playlistId: "PLAXUYU7PbJhgVlj1z_K2s00u_yXdo1byq" },
      { code: "8.5", title: "Object-oriented design", playlistId: "PLAXUYU7PbJhh3SM73HWpBHXU1Qf2hoZXb" },
      { code: "8.6", title: "Object-oriented design implementation", playlistId: null },
    ],
  },
  {
    n: 9,
    code: "ACtE09",
    name: "Artificial Intelligence and Neural Networks",
    subs: [
      { code: "9.1", title: "Introduction to AI and intelligent agents", playlistId: "PLAXUYU7PbJhi-YVkthBg_e5cmoP6-Kukw" },
      { code: "9.2", title: "Problem solving and searching techniques", playlistId: "PLAXUYU7PbJhhg1jaU2gasFmh4FlMXvq-P" },
      { code: "9.3", title: "Knowledge representation", playlistId: "PLAXUYU7PbJhi18Iyxr0xaHI8JJXlHnuTq" },
      { code: "9.4", title: "Expert systems and natural language processing", playlistId: "PLAXUYU7PbJhjyT9UWCdW0qprJrwdvoQZV" },
      { code: "9.5", title: "Machine learning", playlistId: "PLAXUYU7PbJhjMWH1O92J_MXLeqar3zYU0" },
      { code: "9.6", title: "Neural networks", playlistId: "PLAXUYU7PbJhhn-Dl0GBoVLXyFFxbv2Avs" },
    ],
  },
  {
    n: 10,
    code: "AALL10",
    name: "Project Planning, Design and Implementation",
    subs: [
      { code: "10.1", title: "Engineering drawings and their concepts", playlistId: null },
      { code: "10.2", title: "Engineering economics", playlistId: null },
      { code: "10.3", title: "Project planning and scheduling (CPM/PERT)", playlistId: "PLAXUYU7PbJhjkNsEkO1zVGge8YT6DzfyU" },
      { code: "10.4", title: "Project management", playlistId: "PLAXUYU7PbJhjDuHReUetluhPJSU_dL8b6" },
      { code: "10.5", title: "Engineering professional practice", playlistId: null },
      { code: "10.6", title: "Engineering regulatory body (NEC Act, Regulations)", playlistId: null },
    ],
  },
];

export const SYLLABUS_TOTAL_SUBS = SYLLABUS_CHAPTERS.reduce((n, c) => n + c.subs.length, 0);

export type ResourceKind =
  | "Official"
  | "Question bank"
  | "Notes"
  | "Video"
  | "App"
  | "Paid"
  | "Guide"
  | "In your project";

export interface Resource {
  kind: ResourceKind;
  name: string;
  url: string;
  cost: string;
  description: string;
  warning?: string;
  keywords: string;
}

export const RESOURCES: Resource[] = [
  { kind: "Official", name: "Official model question: Computer Engineering", url: "https://nec.gov.np/uploads/Model%20Question%20Registration/1763714765897_Model%20question%20of%20Computer%20Engineering.pdf", cost: "Free", description: "NEC's own model paper in the current 100 × 1 format. Do it first, timed, to see the real style.", keywords: "model question pdf official 2082" },
  { kind: "Official", name: "NEC registration portal", url: "https://register.nec.gov.np/", cost: "Free", description: "The only place to apply. Includes a how-to-fill-the-application guide and support contacts.", keywords: "apply application register admit card" },
  { kind: "Official", name: "Nepal Engineering Council website", url: "https://nec.gov.np/", cost: "Free", description: "Notices for each cycle: application windows, admit cards, results, syllabus PDFs.", keywords: "notices results calendar syllabus" },
  { kind: "Official", name: "NEC Act 2055 (amended 2079)", url: "https://nec.gov.np/uploads/brochure/uHz5GkVeJ4220316085434.pdf", cost: "Free", description: "Chapter 10.6 asks about it. Pair with NEC Regulations 2057, Public Procurement Act 2063 and Electronic Transactions Act 2063.", keywords: "law act regulation chapter 10 regulatory body" },
  { kind: "Official", name: "ACtE syllabus (Slideshare copy)", url: "https://www.slideshare.net/slideshow/ioe-bachelor-in-computer-engineering-license-syllabus-pdf/273678976", cost: "Free", description: "Copy of the official Computer Engineering syllabus.", keywords: "syllabus chapters subchapters" },

  { kind: "Question bank", name: "NEC License Books (GitBook)", url: "https://nec-license.gitbook.io/books/summary", cost: "Free", description: "The biggest free chapter-wise MCQ collection, with explanations: Digital Logic 12 sets, Microprocessor 9, COA 11, OS 12, SE 9, AI 9, Graphics 6, DSA 6, Networks 8, C/C++ 5. Also notes for every subchapter, past sets (Chaitra 2080, Asoj 2080, Ashad 2081), NEC model sets and a Tips & Tricks page.", warning: "Past sets use the old 60 + 20 format. Some Chapter 1 Basic Electrical links are broken.", keywords: "mcq past questions model sets notes all chapters gitbook" },
  { kind: "Question bank", name: "Kati Sajilo / necmcq", url: "https://necmcq.vercel.app/personal", cost: "Free", description: "Questions recalled from the January 2026 exam, plus past, model and chapter practice sets.", keywords: "past questions memory 2082 2026 recent" },
  { kind: "Question bank", name: "necmcq source repo", url: "https://github.com/bibhushansaakha/MCQ", cost: "Free", description: "GitHub source behind necmcq, with past questions, official model questions and chapter practice sets.", keywords: "github past questions model" },
  { kind: "Question bank", name: "NECPrep (open source)", url: "https://lisensepreparation.samirwagle.com.np/", cost: "Free", description: "About 2,300 Computer Engineering MCQs over all 10 chapters, with timed mocks, flashcards and progress tracking. No account; built for slow mobile data.", warning: "Its own validator found answer defects. Chapters 5, 6, 7 and 9 have only about 65–70 questions each.", keywords: "mock test flashcards mcq app open source" },
  { kind: "Question bank", name: "Quick NEC: Computer Engineering", url: "https://www.quicknec.com/exam/computer-engineering", cost: "Free", description: "No sign-up: model papers, past NEC questions, chapter MCQs with explanations and 100-question timed mocks.", keywords: "mock test past questions model free" },
  { kind: "Question bank", name: "OpenExamPrep: NEC Computer", url: "https://open-exam-prep.com/practice/np-nec-computer", cost: "Free", description: "100+ practice questions with explanations, plus a clear summary of format, fees and study tips.", keywords: "practice questions format fees" },
  { kind: "Question bank", name: "NECX", url: "https://necx.girirakesh.com.np/", cost: "Free to start", description: "Web portal and Android/iOS app claiming 5,000+ chapter-wise MCQs, timed mocks, past papers and a leaderboard.", keywords: "app mock test past papers leaderboard" },
  { kind: "Question bank", name: "NEC License Exam Portal", url: "https://neclicenseexam.vercel.app/faculty/computer-engineering", cost: "Free", description: "Computer-based-test simulator with a 100-question, 120-minute mock.", keywords: "cbt mock simulator" },
  { kind: "Question bank", name: "Srijannsm offline MCQ app", url: "https://github.com/Srijannsm/nec-license-preparation-bct", cost: "Free", description: "Plain HTML study-and-test app that works offline from index.html; you can add your own questions.", keywords: "offline app github mcq" },
  { kind: "Question bank", name: "Licenseexam blog: Chapter 1 mock", url: "https://licenseexam.blogspot.com/2024/09/beeemocktest.html", cost: "Free", description: "MCQ mock for Basic Electrical and Electronics.", keywords: "chapter 1 electrical electronics mock" },
  { kind: "Question bank", name: "NEC Exam Helper", url: "https://necexamhelper.com/", cost: "Unknown", description: "Lists Computer Engineering past-year question sets 1–3, repeated MCQs and model sets.", warning: "Down for maintenance when checked on 18 Nov 2026.", keywords: "past year questions repeated" },

  { kind: "Notes", name: "aakritsubedi/computer-nec-license", url: "https://github.com/aakritsubedi/computer-nec-license", cost: "Free", description: "Markdown notes for all 60 subchapters, plus short-question sets 1–5.", keywords: "notes all subchapters github" },
  { kind: "Notes", name: "imSarthakGautam/NEC-License-Computer", url: "https://github.com/imSarthakGautam/NEC-License-Computer", cost: "Free", description: "Condensed notes: Basic Electrical, Digital Logic & Microprocessor, COA & Embedded, Networks & Security, DSA/DBMS/OS.", keywords: "notes condensed revision" },
  { kind: "Notes", name: "srijankarki07 preparation guide", url: "https://github.com/srijankarki07/Nepal-Engineering-License-Exam-Preparation-Guide", cost: "Free", description: "Clear Chapter 1 notes (1.1–1.6) with diagrams.", warning: "Only Chapter 1 so far.", keywords: "notes electrical diagrams chapter 1" },
  { kind: "Notes", name: "SabinNepali topic link list", url: "https://github.com/SabinNepali/NEC-License-Computer-Engineering", cost: "Free", description: "A .docx mapping each Chapter 1–2 topic to a web explainer (AllAboutCircuits, GeeksforGeeks and similar).", keywords: "links electrical digital logic" },
  { kind: "Notes", name: "IOE Professional Practice notes", url: "https://ioesolutions.esign.com.np/notes/text-notes-show/Regulatory-Environment", cost: "Free", description: "Regulatory environment, NEC Act and NEA, for Chapter 10.5–10.6.", keywords: "professional practice chapter 10 nec act nea" },

  { kind: "Video", name: "BCT Engineering Notes: playlist per subchapter", url: "https://bctengineeringnotes.blogspot.com/2023/04/nepal-engineering-council.html", cost: "Free", description: "YouTube playlists for about 40 of the 60 subchapters, all linked in the syllabus tracker above.", keywords: "youtube video lectures playlists" },
  { kind: "Video", name: "Licence exam playlist", url: "https://www.youtube.com/watch?v=0qIujiMtzDU&list=PLfel_XmkwhfLoKa7VQBT7Fk_lLDNzXfnS", cost: "Free", description: "A licence-exam YouTube playlist shared in the BCT Engineering Notes comments.", keywords: "youtube video" },

  { kind: "App", name: "NEC License Exam Preparation (Android)", url: "https://play.google.com/store/apps/details?id=com.aaratiniraj.nec", cost: "Free, ads", description: "About 3.5K installs, 5★ from 85 ratings. Past questions, the official model question, notes and mock exams.", keywords: "android app past questions model" },
  { kind: "App", name: "Yashi Academy", url: "https://yashiacademy.com/blog/nec-license-exam-questions-branch-wise-practice-nepal/", cost: "Free to start", description: "iOS/Android app with branch-wise mock tests; the link opens an 8-question sample with answers.", keywords: "app ios android mock" },
  { kind: "App", name: "Engineering Mock Test (iOS)", url: "https://apps.apple.com/app/engineering-mock-test/id6757604629", cost: "Free", description: "Chapter-wise questions with step-by-step solutions, Computer included.", keywords: "ios app chapter" },
  { kind: "App", name: "Exametix", url: "https://apps.apple.com/app/id6762305333", cost: "Free to start", description: "Topic-wise MCQs, daily practice and weak-area analytics for NEC and PSC exams.", keywords: "app analytics" },
  { kind: "App", name: "Engineering License Prep: NEC (Android)", url: "https://play.google.com/store/apps/details?id=com.anupapp.necprep1", cost: "Free", description: "Mock tests for all faculties. Small and new.", keywords: "android app mock" },

  { kind: "Paid", name: "NEC Prep", url: "https://necprep.com/", cost: "About Rs 500", description: "Unlimited MCQs, readiness score, weak-chapter analytics, AI explanations and a study planner.", keywords: "paid ai analytics planner" },
  { kind: "Paid", name: "Pana Academy: Computer licence course", url: "https://panaacademy.com/courses/nec-computer-engineering-license", cost: "Paid", description: "Live and recorded classes (online or in Kathmandu), notes, past papers, full mocks; 3+ months; you can rejoin batches until you pass.", keywords: "coaching class kathmandu" },

  { kind: "Guide", name: "10-week Computer Engineering study plan", url: "https://licenseexam.blogspot.com/2024/08/computerengineer.html", cost: "Free", description: "Week-by-week plan through all 10 chapters with study tips.", keywords: "study plan schedule weeks" },
  { kind: "Guide", name: "NEC Prep: exam pattern guide", url: "https://necprep.com/blog/how-to-crack-the-nepal-engineering-council-nec-license-exam-on-your-first-attempt-the-ultimate-ai-preparation-guide", cost: "Free", description: "Pattern, no-negative-marking rule and pacing advice.", keywords: "strategy pattern format" },
  { kind: "Guide", name: "engineerfromnepal: dates and registration", url: "https://engineerfromnepal.com/blog/nec-license-exam-date/", cost: "Free", description: "The 2083/84 calendar with AD dates, plus step-by-step registration and result guides.", keywords: "dates calendar registration result" },
  { kind: "Guide", name: "Edusanjal: registration exam overview", url: "https://edusanjal.com/exam/nepal-engineering-council-registration-examination/", cost: "Free", description: "Exam overview and syllabus downloads.", keywords: "overview syllabus" },
  { kind: "Guide", name: "Collegenp: 15th registration exam 2083", url: "https://www.collegenp.com/exam/nec-15th-engineer-registration-exam-2083", cost: "Free", description: "Notice summary for the 15th exam.", keywords: "notice 2083" },

  { kind: "In your project", name: "Questions from memory, parts 1–3", url: "", cost: "Yours", description: "Recalled questions from recent sittings, in your Claude project.", keywords: "memory past questions recent" },
  { kind: "In your project", name: "NEC PAST QUESTIONS.pdf", url: "", cost: "Yours", description: "BCT past-question collection (tapendrapandey.com.np).", warning: "One effective-access-time solution uses a formula that doesn't match its own calculation.", keywords: "past questions pdf" },
  { kind: "In your project", name: "sample-question.pdf and syllabus PDF", url: "", cost: "Yours", description: "Sample paper and the official ACtE syllabus.", keywords: "sample syllabus" },
  { kind: "In your project", name: "NEC personal exam questions (Jan 2026)", url: "", cost: "Yours", description: "55 questions from the necmcq personal set.", keywords: "2026 personal questions" },
];

export const TIPS: string[] = [
  "Cover all 10 chapters. Each is worth 10 marks, so skipping one costs a lot. Chapter 10 (drawing, economics, CPM/PERT, professional practice, NEC Act) is mostly memorisation and an easy place to pick up marks.",
  "Practise the numericals: cache address fields and effective access time, Booth's multiplication, IEEE 754, K-maps, number conversions, 8085 addressing modes and interrupt vectors, page replacement, CPU scheduling, tree traversals and quicksort partitions, 2D/3D transformation matrices, NPV/IRR and CPM float.",
  "Chapters people flag as weak: Computer Organization & Embedded Systems, DSA, and Software Engineering.",
  "Learn the laws Chapter 10 asks about: NEC Act 2055 (amended 2079), NEC Regulations 2057, Public Procurement Act 2063, Electronic Transactions Act 2063.",
  "Do the last two or three exams' questions to learn the style: your project's questions-from-memory docs first, then the GitBook and necmcq sets.",
  "Take timed 100-question mocks on a computer. The exam is computer-based, and pacing matters more than people expect.",
  "Never leave a blank. There's no negative marking.",
  "Check answers in community banks. They contain mistakes: NECPrep's own validator reports defects, some GitBook links are broken, and the BCT past-questions PDF has a wrong effective-access-time solution.",
];

export interface PassRate {
  label: string;
  value: string;
  detail: string;
}

export const PASS_RATES: PassRate[] = [
  { label: "1st licence exam · Chaitra 2079", value: "28.5%", detail: "565 of 1,981 passed" },
  { label: "2nd licence exam · Ashadh 2080", value: "32.5%", detail: "801 of 2,468 passed" },
  { label: "Computer-specific rates", value: "Not published", detail: "only overall figures were found" },
];

export const NOT_COVERED_NOTE =
  "Reddit couldn't be reached from the session that compiled this page, so no Reddit threads are included. Facebook and Telegram study groups exist but couldn't be checked.";

export interface SourceLink {
  name: string;
  url: string;
}

export const SOURCE_LINKS: SourceLink[] = [
  { name: "educatenepal: NEC calendar 2083/84", url: "https://www.educatenepal.com/news/detail/nepal-engineering-council-licensing-exam-routine" },
  { name: "engineerfromnepal: exam dates", url: "https://engineerfromnepal.com/blog/nec-license-exam-date/" },
  { name: "OpenExamPrep: format, fees, study tips", url: "https://open-exam-prep.com/practice/np-nec-computer" },
  { name: "NEC Prep: exam pattern guide", url: "https://necprep.com/blog/how-to-crack-the-nepal-engineering-council-nec-license-exam-on-your-first-attempt-the-ultimate-ai-preparation-guide" },
  { name: "NEC registration portal", url: "https://register.nec.gov.np/" },
  { name: "Republica: 1st exam result", url: "https://myrepublica.nagariknetwork.com/news/only-28-5-percent-of-examinees-pass-engineer-s-license-exam" },
  { name: "Collegenp: 2nd exam result", url: "https://www.collegenp.com/result/nepal-engineering-council-publishes-general-engineers-exam-results" },
  { name: "NEC License Books (GitBook)", url: "https://nec-license.gitbook.io/books/summary" },
  { name: "BCT Engineering Notes: playlists", url: "https://bctengineeringnotes.blogspot.com/2023/04/nepal-engineering-council.html" },
  { name: "NECPrep repository", url: "https://github.com/SamirWagle/NECPrep" },
];
