import { useMemo, useState } from "react";
import Q from "../data/questions";
import TOPICS from "../data/topics";
import { CheckCircle2, Clock, Flag, FlagFilled, X, XCircle } from "./Icons";
import { Latex, RichText } from "./RichText";
import { useMockExam } from "../hooks/useMockExam";
import { EXAM_PASS_MARK, QUESTIONS_PER_CHAPTER, scoreSession } from "../lib/mockExam";

interface MockExamPageProps {
  onClose: () => void;
}

function formatClock(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${s}s`;
}

export function MockExamPage({ onClose }: MockExamPageProps) {
  const exam = useMockExam();
  const [index, setIndex] = useState(0);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const byId = useMemo(() => new Map(Q.map((q) => [q.id, q])), []);
  const topicById = useMemo(() => new Map(TOPICS.map((t) => [t.id, t])), []);

  const session = exam.session;
  const questions = useMemo(
    () => (session ? session.questionIds.map((id) => byId.get(id)).filter(Boolean) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [session?.questionIds, byId],
  ) as NonNullable<ReturnType<(typeof byId)["get"]>>[];

  const result = session?.submitted ? scoreSession(session) : null;
  const attempt = session ? exam.history.find((a) => a.id === session.id) : undefined;

  // ---------- Intro screen ----------
  if (!session) {
    return (
      <div className="h-screen overflow-y-auto scrollbar-thin bg-[var(--bg)]">
        <PageHeader onClose={onClose} title="Mock exam" />
        <div className="max-w-2xl mx-auto px-4 py-10 min-[901px]:px-8">
          <h2 className="font-[family:var(--serif)] text-2xl font-bold text-[var(--text)] mb-3">
            Full-length timed mock
          </h2>
          <p className="text-[var(--text2)] leading-relaxed mb-6">
            A simulation of the real licence exam: 100 multiple-choice questions, 2 hours on the
            clock, {QUESTIONS_PER_CHAPTER} questions drawn at random from each of the 10 syllabus
            chapters — the same equal, 10-marks-per-chapter weighting as the actual paper. No
            answers or explanations are shown until you submit.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-8">
            <FactTile label="Questions" value="100" />
            <FactTile label="Time limit" value="2h 00m" />
            <FactTile label="Pass mark" value={`${EXAM_PASS_MARK} / 100`} />
          </div>
          <button
            onClick={exam.start}
            className="w-full bg-[var(--text)] text-[var(--bg)] py-3.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Start mock exam
          </button>

          {exam.history.length > 0 && (
            <div className="mt-12">
              <h3 className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text3)] mb-3 border-b border-[var(--border)] pb-2">
                Previous attempts
              </h3>
              <div className="flex flex-col gap-2">
                {exam.history.map((attempt) => {
                  const passed = attempt.score >= EXAM_PASS_MARK;
                  return (
                    <div
                      key={attempt.id}
                      className="flex items-center justify-between px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg2)]"
                    >
                      <div className="text-sm text-[var(--text2)]">
                        {new Date(attempt.finishedAt).toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        <span className="text-[var(--text3)]">
                          · {formatDuration(attempt.durationSeconds)}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-bold font-mono px-2.5 py-1 rounded-md ${
                          passed ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {attempt.score} / {attempt.total}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---------- Results screen ----------
  if (session.submitted && result) {
    const passed = result.score >= EXAM_PASS_MARK;
    const incorrectOrUnanswered = questions.filter((q) => session.answers[q.id] !== q.answer);

    return (
      <div className="h-screen overflow-y-auto scrollbar-thin bg-[var(--bg)]">
        <PageHeader onClose={onClose} title="Mock exam results" />
        <div className="max-w-3xl mx-auto px-4 py-10 min-[901px]:px-8">
          <div
            className={`rounded-xl border p-8 mb-8 text-center ${
              passed ? "border-emerald-300 bg-emerald-50" : "border-rose-300 bg-rose-50"
            }`}
          >
            <div className="text-[0.7rem] font-bold uppercase tracking-[2px] mb-2 text-[var(--text3)]">
              {passed ? "You passed" : "Below pass mark"}
            </div>
            <div className="font-[family:var(--serif)] text-6xl font-bold text-[var(--text)] tabular-nums">
              {result.score}
              <span className="text-2xl text-[var(--text3)]">/{result.total}</span>
            </div>
            <div className="text-sm text-[var(--text3)] mt-2">
              Pass mark is {EXAM_PASS_MARK}/100
              {attempt ? ` · took ${formatDuration(attempt.durationSeconds)} of 2h` : ""}
            </div>
          </div>

          <h3 className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text3)] mb-3 border-b border-[var(--border)] pb-2">
            Chapter breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-10">
            {result.byTopic.map(({ topicId, correct, total }) => {
              const topic = topicById.get(topicId);
              if (!topic) return null;
              const pct = total > 0 ? (correct / total) * 100 : 0;
              return (
                <div key={topicId}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm text-[var(--text2)] truncate pr-2">
                      {topic.code} · {topic.name}
                    </span>
                    <span className="text-sm font-mono font-bold text-[var(--text)] shrink-0">
                      {correct}/{total}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[var(--bg3)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${pct}%`, backgroundColor: topic.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mb-10">
            <button
              onClick={() => {
                exam.start();
                setIndex(0);
              }}
              className="flex-1 bg-[var(--text)] text-[var(--bg)] py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:opacity-90"
            >
              Retake mock exam
            </button>
            <button
              onClick={() => {
                exam.exit();
                setIndex(0);
              }}
              className="flex-1 bg-[var(--bg3)] text-[var(--text)] py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[var(--border2)]"
            >
              Back to start
            </button>
          </div>

          {incorrectOrUnanswered.length > 0 && (
            <>
              <h3 className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text3)] mb-3 border-b border-[var(--border)] pb-2">
                Review ({incorrectOrUnanswered.length} to look at)
              </h3>
              <div className="flex flex-col gap-4">
                {incorrectOrUnanswered.map((question) => {
                  const selected = session.answers[question.id];
                  return (
                    <div
                      key={question.id}
                      className="rounded-lg border border-[var(--border)] bg-[var(--bg2)] px-5 py-4"
                    >
                      <div className="text-[0.65rem] uppercase tracking-wider font-semibold text-[var(--text3)] mb-2">
                        {question.sub}
                      </div>
                      <div className="text-[0.95rem] text-[var(--text)] mb-3">
                        <Latex content={question.text} />
                      </div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        {question.options.map((option, i) => {
                          const isCorrect = i === question.answer;
                          const isSelected = i === selected;
                          if (!isCorrect && !isSelected) return null;
                          return (
                            <div
                              key={i}
                              className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-md ${
                                isCorrect
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-rose-100 text-rose-700"
                              }`}
                            >
                              {isCorrect ? (
                                <CheckCircle2 size={14} />
                              ) : (
                                <XCircle size={14} />
                              )}
                              <Latex content={option} />
                              {isSelected && !isCorrect && (
                                <span className="ml-auto text-[0.65rem] uppercase font-bold opacity-70">
                                  your answer
                                </span>
                              )}
                            </div>
                          );
                        })}
                        {selected === undefined && (
                          <div className="text-sm px-3 py-1.5 rounded-md bg-[var(--bg3)] text-[var(--text3)] italic">
                            Not answered
                          </div>
                        )}
                      </div>
                      {question.explanation && (
                        <div className="text-[0.85rem] leading-relaxed text-[var(--text2)] border-t border-[var(--border)] pt-3">
                          <RichText content={question.explanation} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // ---------- In-progress screen ----------
  const current = questions[index];
  const answeredCount = Object.keys(session.answers).length;
  const isLow = exam.secondsLeft <= 5 * 60;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--bg)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg2)] px-4 py-3 min-[901px]:px-6 shrink-0">
        <div className="text-sm font-bold text-[var(--text)]">
          Question {index + 1} <span className="text-[var(--text3)]">/ {questions.length}</span>
        </div>
        <div
          className={`flex items-center gap-2 font-mono font-bold text-lg tabular-nums px-3 py-1 rounded-md ${
            isLow ? "bg-rose-100 text-rose-700" : "bg-[var(--bg3)] text-[var(--text)]"
          }`}
        >
          <Clock size={18} />
          {formatClock(exam.secondsLeft)}
        </div>
        <button
          onClick={() => setConfirmSubmit(true)}
          className="bg-[var(--text)] text-[var(--bg)] px-4 py-2 rounded-md font-bold text-xs uppercase tracking-wider hover:opacity-90"
        >
          Submit exam
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-[220px] border-r border-[var(--border)] overflow-y-auto scrollbar-thin px-3 py-4 shrink-0 hidden min-[901px]:block">
          <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--text3)] mb-2 px-1">
            {answeredCount} / {questions.length} answered
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {questions.map((q, i) => {
              const isAnswered = session.answers[q.id] !== undefined;
              const isFlagged = session.flagged.includes(q.id);
              const isCurrent = i === index;
              return (
                <button
                  key={q.id}
                  onClick={() => setIndex(i)}
                  className={`relative h-8 rounded-md text-[0.7rem] font-mono font-bold flex items-center justify-center transition-colors ${
                    isCurrent
                      ? "bg-[var(--text)] text-[var(--bg)]"
                      : isAnswered
                        ? "bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30"
                        : "bg-[var(--bg2)] text-[var(--text3)] border border-[var(--border)]"
                  }`}
                >
                  {i + 1}
                  {isFlagged && (
                    <span className="absolute -top-1 -right-1 text-amber-500">
                      <FlagFilled size={10} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-8 min-[901px]:px-10">
          <div className="max-w-2xl mx-auto">
            {current && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[var(--bg3)] border border-[var(--border)] rounded-md px-1.5 py-0.5 text-[0.65rem] uppercase tracking-wider font-semibold text-[var(--text2)]">
                    {current.sub}
                  </span>
                  <button
                    onClick={() => exam.toggleFlag(current.id)}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md transition-colors ${
                      session.flagged.includes(current.id)
                        ? "text-amber-600 bg-amber-100"
                        : "text-[var(--text3)] hover:bg-[var(--bg3)]"
                    }`}
                  >
                    {session.flagged.includes(current.id) ? (
                      <FlagFilled size={14} />
                    ) : (
                      <Flag size={14} />
                    )}
                    {session.flagged.includes(current.id) ? "Flagged" : "Flag for review"}
                  </button>
                </div>

                <div className="font-[family:var(--serif)] text-xl leading-[1.7] text-[var(--text)] mb-6">
                  <Latex content={current.text} />
                </div>

                <div className="flex flex-col gap-2.5">
                  {current.options.map((option, i) => {
                    const isSelected = session.answers[current.id] === i;
                    return (
                      <button
                        key={i}
                        onClick={() => exam.answer(current.id, i)}
                        className={`flex items-start gap-3 text-left px-4 py-3 rounded-lg border transition-colors text-[0.95rem] leading-snug ${
                          isSelected
                            ? "border-[var(--accent)] bg-[var(--accent)]/10"
                            : "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)]"
                        }`}
                      >
                        <span className="font-mono text-[var(--text3)] text-sm shrink-0 pt-0.5">
                          {String.fromCharCode(97 + i)}
                        </span>
                        <span className="flex-1">
                          <Latex content={option} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider bg-[var(--bg3)] text-[var(--text)] disabled:opacity-40 hover:bg-[var(--border2)]"
              >
                Previous
              </button>
              <button
                onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
                disabled={index === questions.length - 1}
                className="px-5 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider bg-[var(--text)] text-[var(--bg)] disabled:opacity-40 hover:opacity-90"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {confirmSubmit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#141413]/60 backdrop-blur-[2px]"
            onClick={() => setConfirmSubmit(false)}
          />
          <div className="relative w-full max-w-sm bg-[var(--bg2)] rounded-xl border border-[var(--border)] p-6 shadow-xl">
            <h3 className="font-[family:var(--serif)] text-lg font-bold text-[var(--text)] mb-2">
              Submit the exam?
            </h3>
            <p className="text-sm text-[var(--text2)] mb-5">
              {questions.length - answeredCount > 0
                ? `${questions.length - answeredCount} question${questions.length - answeredCount === 1 ? "" : "s"} are still unanswered. `
                : ""}
              You won't be able to change your answers after this.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmSubmit(false)}
                className="flex-1 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider bg-[var(--bg3)] text-[var(--text)] hover:bg-[var(--border2)]"
              >
                Keep going
              </button>
              <button
                onClick={() => {
                  setConfirmSubmit(false);
                  exam.submit();
                }}
                className="flex-1 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider bg-[var(--text)] text-[var(--bg)] hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PageHeader({ onClose, title }: { onClose: () => void; title: string }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg2)]/90 backdrop-blur-md px-4 py-3 min-[901px]:px-8">
      <h1 className="font-[family:var(--serif)] text-lg font-bold text-[var(--text)]">{title}</h1>
      <button
        onClick={onClose}
        className="p-2 hover:bg-[var(--bg3)] rounded-full transition-colors text-[var(--text2)] hover:text-[var(--text)]"
        aria-label="Close"
      >
        <X size={20} />
      </button>
    </div>
  );
}

function FactTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg2)] px-3 py-4 text-center">
      <div className="font-mono text-xl font-bold text-[var(--text)]">{value}</div>
      <div className="text-[0.65rem] uppercase tracking-wider text-[var(--text3)] mt-1">
        {label}
      </div>
    </div>
  );
}
