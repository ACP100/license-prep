import Q from "../data/questions";
import TOPICS, { type TopicId } from "../data/topics";
import type { ActiveSource } from "../types/filters";
import { SourceFilterButton, TopicFilterButton } from "./FilterButtons";

import { useStudyProgress } from "../hooks/useStudyProgress";

interface SidebarProps {
  activeTopic: TopicId | 0;
  activeSource: ActiveSource;
  topicCounts: Map<TopicId, number>;
  sources: string[];
  onTopicChange: (topic: TopicId | 0) => void;
  onSourceChange: (source: ActiveSource) => void;
}

export function Sidebar({
  activeTopic,
  activeSource,
  topicCounts,
  sources,
  onTopicChange,
  onSourceChange,
}: SidebarProps) {
  const progress = useStudyProgress();
  return (
    <aside className="sticky top-[65px] hidden h-[calc(100vh-65px)] w-[270px] min-w-[270px] shrink-0 overflow-y-auto border-r border-[var(--border)] bg-[var(--bg2)] px-4 py-5 min-[901px]:block">
      <div className="mb-6">
        <div className="mb-2.5 pl-1 text-[0.68rem] font-bold tracking-[0.1em] text-[var(--text3)] uppercase">
          By Chapter
        </div>
        <button
          className={`group relative mb-0.5 flex w-full cursor-pointer items-center gap-2 rounded-[7px] px-2.5 py-[7px] text-left text-[13.5px] transition-all hover:bg-[var(--bg3)] hover:text-[var(--text)] ${
            activeTopic === 0 ? "active font-medium text-[var(--text)]" : "text-[var(--text2)]"
          }`}
          type="button"
          onClick={() => onTopicChange(0)}
        >
          <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#888]" /> All Chapters
          <span className="ml-auto rounded-[10px] border border-[var(--border)] bg-[var(--bg3)] px-1.5 py-px text-[0.7rem] text-[var(--text3)] group-[.active]:border-[rgba(27,54,93,0.3)] group-[.active]:bg-[rgba(27,54,93,0.12)] group-[.active]:text-[var(--accent)]">
            {Q.length}
          </span>
        </button>
        {TOPICS.map((topic) => {
          const topicProgress = progress.topics.find((tp) => tp.topicId === topic.id);
          const isComplete = topicProgress && topicProgress.completed === topicProgress.total;
          const percentage = topicProgress?.percentage || 0;

          return (
            <TopicFilterButton
              active={activeTopic === topic.id}
              count={topicCounts.get(topic.id) ?? 0}
              key={topic.id}
              topic={topic}
              onClick={() => onTopicChange(topic.id)}
              isComplete={isComplete}
              percentage={percentage}
            />
          );
        })}
      </div>

      <div className="mb-6">
        <div className="mb-2.5 pl-1 text-[0.68rem] font-bold tracking-[0.1em] text-[var(--text3)] uppercase">
          By Source
        </div>
        <div className="flex flex-wrap">
          <SourceFilterButton
            active={activeSource === "all"}
            label="All"
            onClick={() => onSourceChange("all")}
          />
          {sources.map((s) => (
            <SourceFilterButton
              active={activeSource === s}
              key={s}
              label={s}
              onClick={() => onSourceChange(s)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
