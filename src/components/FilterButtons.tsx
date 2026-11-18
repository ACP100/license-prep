import type { Topic } from "../data/topics";

const filterButtonBase =
  "relative mb-0.5 flex w-full cursor-pointer items-center gap-2 rounded-[7px] px-2.5 py-[7px] text-left text-[13.5px] transition-all hover:bg-[var(--bg3)] hover:text-[var(--text)]";
const filterButtonState = (active: boolean) =>
  active ? "font-medium text-[var(--text)]" : "text-[var(--text2)]";
const filterDotBase = "h-[9px] w-[9px] shrink-0 rounded-full";
const filterCountBase =
  "ml-auto rounded-[10px] border px-1.5 py-px text-[0.7rem] group-[.active]:border-[rgba(27,54,93,0.3)] group-[.active]:bg-[rgba(27,54,93,0.12)] group-[.active]:text-[var(--accent)]";

interface TopicFilterButtonProps {
  active: boolean;
  count: number;
  topic: Topic;
  onClick: () => void;
  isComplete?: boolean;
  percentage?: number;
}

export function TopicFilterButton({
  active,
  count,
  topic,
  onClick,
  isComplete,
  percentage,
}: TopicFilterButtonProps) {
  return (
    <button
      className={`group ${active ? "active" : ""} ${filterButtonBase} ${filterButtonState(active)} ${
        isComplete && !active ? "bg-green-500/5 text-green-700 hover:bg-green-500/10" : ""
      } overflow-hidden`}
      type="button"
      onClick={onClick}
    >
      {!isComplete && !active && percentage !== undefined && percentage > 0 && (
        <div
          className="absolute left-0 bottom-0 top-0 bg-[var(--text3)] opacity-5 pointer-events-none transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      )}

      {isComplete && !active ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-green-600"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <span className={filterDotBase} style={{ background: topic.color }} />
      )}
      <span className="relative z-10 truncate">{topic.name}</span>
      <span
        className={`${filterCountBase} relative z-10 border-[var(--border)] bg-[var(--bg3)] text-[var(--text3)] ${
          isComplete && !active ? "border-green-500/20 bg-green-500/10 text-green-600" : ""
        }`}
      >
        {count}
      </span>
    </button>
  );
}

interface SourceFilterButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

export function SourceFilterButton({ active, label, onClick }: SourceFilterButtonProps) {
  return (
    <button
      className={`m-[3px] inline-flex cursor-pointer items-center rounded-[20px] border px-2.5 py-1 text-xs transition-all hover:border-[var(--accent)] hover:text-[var(--text)] ${
        active
          ? "border-[var(--accent)] bg-[rgba(27,54,93,0.1)] text-[var(--accent)]"
          : "border-[var(--border)] text-[var(--text3)]"
      }`}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
