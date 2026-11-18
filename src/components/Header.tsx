import TOPICS, { type TopicId } from "../data/topics";
import type { ActiveSource } from "../types/filters";
import { useStudyProgress } from "../hooks/useStudyProgress";

interface HeaderProps {
  search: string;
  onSearchChange: (search: string) => void;
  activeTopic: TopicId | 0;
  activeSource: ActiveSource;
  onTopicChange: (topic: TopicId | 0) => void;
  onSourceChange: (source: ActiveSource) => void;
  sources: string[];
  onResetFilters?: () => void;
  compact?: boolean;
}

export function Header({
  search,
  onSearchChange,
  activeTopic,
  activeSource,
  onTopicChange,
  onSourceChange,
  sources,
  onResetFilters,
  compact,
}: HeaderProps) {
  const progress = useStudyProgress();
  const hasActiveFilters = activeTopic !== 0 || activeSource !== "all" || search !== "";

  return (
    <header
      className={`relative ${compact ? "" : "sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--bg2)]/90 backdrop-blur-md"}`}
    >
      <div
        className={`mx-auto flex flex-col gap-4 ${compact ? "px-0 pt-3 pb-4" : "max-w-4xl px-4 pt-4 pb-3 min-[901px]:px-8"}`}
      >
        {!compact && (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="font-[family:var(--serif)] text-xl font-bold text-[var(--text)] whitespace-nowrap">
              NEC Licence Prep <span className="text-[var(--text3)] font-normal">Computer Eng.</span>
            </h1>

            <div className="relative w-full md:w-64">
              <SearchIcon />
              <input
                className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] py-1.5 pr-2.5 pl-8 text-[13.5px] text-[var(--text)] outline-none transition-colors focus:border-[var(--text3)]"
                type="search"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search questions..."
              />
            </div>
          </div>
        )}

        {!compact && (
          <div className="flex flex-col gap-2 px-1 mb-2">
            <div className="flex justify-between items-center text-[13px] font-bold tracking-tight text-[var(--text2)] uppercase">
              <span>
                {activeTopic === 0
                  ? "Overall Progress"
                  : TOPICS.find((t) => t.id === activeTopic)?.name}
              </span>
              <span className="font-mono">
                {activeTopic === 0 ? (
                  <>
                    {Math.round(progress.total.percentage)}% ({progress.total.completed}/
                    {progress.total.total})
                  </>
                ) : (
                  <>
                    {Math.round(
                      progress.topics.find((tp) => tp.topicId === activeTopic)?.percentage || 0,
                    )}
                    % ({progress.topics.find((tp) => tp.topicId === activeTopic)?.completed}/
                    {progress.topics.find((tp) => tp.topicId === activeTopic)?.total})
                  </>
                )}
              </span>
            </div>
            <div className="h-2 w-full bg-[var(--bg3)] rounded-full overflow-hidden border border-[var(--border)] shadow-inner">
              <div
                className="h-full bg-[var(--accent)] transition-all duration-700 ease-in-out"
                style={{
                  width: `${
                    activeTopic === 0
                      ? progress.total.percentage
                      : progress.topics.find((tp) => tp.topicId === activeTopic)?.percentage || 0
                  }%`,
                }}
              />
            </div>
          </div>
        )}

        <div className={`flex flex-col gap-3 ${compact ? "mt-0" : "mt-1"}`}>
          {compact && (
            <div className="relative w-full">
              <SearchIcon />
              <input
                className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] py-1.5 pr-2.5 pl-8 text-[13.5px] text-[var(--text)] outline-none transition-colors focus:border-[var(--text3)]"
                type="search"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search..."
              />
            </div>
          )}

          <div className="flex items-center">
            <div className="flex overflow-x-auto hide-scrollbar items-center gap-2 pb-1 -mb-1 w-full">
              <button
                onClick={() => onTopicChange(0)}
                className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                  activeTopic === 0
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                    : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                }`}
              >
                All Chapters
              </button>
              {TOPICS.map((t) => {
                const topicProgress = progress.topics.find((tp) => tp.topicId === t.id);
                const isComplete = topicProgress && topicProgress.completed === topicProgress.total;
                const percentage = topicProgress?.percentage || 0;
                const isActive = activeTopic === t.id;

                return (
                  <button
                    key={t.id}
                    onClick={() => onTopicChange(t.id)}
                    className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-all flex items-center justify-center gap-2 relative overflow-hidden h-[34px] ${
                      isActive
                        ? "shadow-sm"
                        : isComplete
                          ? "border-green-500 bg-green-50 text-green-700 hover:bg-green-100/80"
                          : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                    }`}
                    style={
                      isActive
                        ? { borderColor: t.color, color: t.color, backgroundColor: "var(--bg)" }
                        : {}
                    }
                  >
                    {percentage > 0 && (
                      <div
                        className="absolute left-0 top-0 bottom-0 pointer-events-none transition-all duration-700 ease-out z-0"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: isActive
                            ? t.bg
                            : isComplete
                              ? "rgb(34 197 94 / 0.2)"
                              : "rgb(27 54 93 / 0.08)",
                        }}
                      />
                    )}
                    <div className="flex items-center gap-1.5 relative z-20">
                      {isComplete && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={isActive ? { color: t.color } : {}}
                          className={isActive ? "" : "text-green-600"}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      <span>{t.code}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`flex flex-col ${compact ? "gap-2" : "md:flex-row md:items-center justify-between gap-3"}`}
          >
            <div className="flex overflow-x-auto hide-scrollbar items-center gap-2 pb-1 -mb-1 flex-1">
              <button
                onClick={() => onSourceChange("all")}
                className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                  activeSource === "all"
                    ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                    : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                }`}
              >
                All Sources
              </button>
              {sources.map((s) => (
                <button
                  key={s}
                  onClick={() => onSourceChange(s)}
                  className={`shrink-0 rounded-full border px-3 py-1 text-[13px] font-medium transition-colors ${
                    activeSource === s
                      ? "border-[var(--text)] bg-[var(--text)] text-[var(--bg)]"
                      : "border-[var(--border)] bg-[var(--bg)] text-[var(--text2)] hover:border-[var(--text3)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {hasActiveFilters && onResetFilters && (
              <button
                onClick={onResetFilters}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium text-[var(--text3)] hover:text-[var(--text)] hover:bg-[var(--bg3)] transition-colors self-start md:self-auto"
                title="Reset all filters"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                {!compact && "Reset"}
              </button>
            )}
          </div>
        </div>
      </div>

      {compact && (
        <div className="absolute bottom-0 left-0 w-full flex flex-col pointer-events-none">
          <div className="flex justify-end px-3 pb-0.5">
            <span className="text-[10px] font-mono font-bold text-[var(--text2)] bg-[var(--bg)] px-1 rounded-sm shadow-sm border border-[var(--border)]">
              {activeTopic === 0 ? (
                <>
                  {progress.total.completed}/{progress.total.total}
                </>
              ) : (
                <>
                  {progress.topics.find((tp) => tp.topicId === activeTopic)?.completed}/
                  {progress.topics.find((tp) => tp.topicId === activeTopic)?.total}
                </>
              )}
            </span>
          </div>
          <div className="w-full h-[2px] bg-[var(--bg3)] overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all duration-700 ease-in-out"
              style={{
                width: `${
                  activeTopic === 0
                    ? progress.total.percentage
                    : progress.topics.find((tp) => tp.topicId === activeTopic)?.percentage || 0
                }%`,
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="absolute top-1/2 left-2.5 -translate-y-1/2 text-[var(--text3)]"
      fill="none"
      height="14"
      viewBox="0 0 24 24"
      width="14"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
