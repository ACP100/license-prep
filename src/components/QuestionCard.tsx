import { CheckCircle } from "./Icons";
import { Latex } from "./RichText";
import type { Question } from "../data/questions";
import { useQuestionData } from "../hooks/useQuestionData";

interface QuestionCardProps {
  question: Question;
  onClick?: () => void;
  isActive?: boolean;
}

const preloadDetailView = () => import("./QuestionDetailView");

export function QuestionCard({ question, onClick, isActive }: QuestionCardProps) {
  const { isDone, selected } = useQuestionData(question.id);
  const wasCorrect = selected === question.answer;

  return (
    <button
      onClick={onClick}
      onMouseEnter={preloadDetailView}
      className={`mb-4 flex gap-4 text-left w-full text-[var(--text)] transition-all rounded-xl p-3 cursor-pointer border ${
        isActive
          ? isDone
            ? wasCorrect
              ? "bg-emerald-50 border-emerald-200 shadow-sm ring-1 ring-emerald-100"
              : "bg-rose-50 border-rose-200 shadow-sm ring-1 ring-rose-100"
            : "bg-[var(--bg)] border-blue-200 shadow-sm ring-1 ring-blue-100"
          : isDone
            ? wasCorrect
              ? "bg-emerald-50/50 border-emerald-100 hover:bg-emerald-50"
              : "bg-rose-50/50 border-rose-100 hover:bg-rose-50"
            : "border-transparent hover:bg-[var(--bg2)]"
      }`}
    >
      <div className="font-[family:var(--serif)] text-base font-semibold min-w-[2rem] pt-0.5 text-[var(--text2)] flex flex-col items-center gap-2">
        {question.sub}
        {isDone && (
          <CheckCircle
            className={wasCorrect ? "text-emerald-500 w-4 h-4" : "text-rose-500 w-4 h-4"}
          />
        )}
      </div>
      <div className="flex-1">
        <div className="q-text font-[family:var(--serif)] text-[1.05rem] leading-[1.7]">
          <Latex content={question.text} />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 font-[family:var(--sans)] text-[0.68rem] uppercase tracking-wider font-semibold">
          {question.occurrences.map((occ, i) => (
            <div
              key={`${occ.source}-${i}`}
              className="flex items-center gap-1.5 bg-[var(--bg3)] border border-[var(--border)] rounded-md px-1.5 py-0.5"
            >
              <span className="text-[var(--text2)]">{occ.label}</span>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}
