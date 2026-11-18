import { useMemo } from "react";

import Q from "../data/questions";
import TOPICS from "../data/topics";
import { filterQuestions, getSources, getTopicCounts, getViewTitle } from "../lib/questions";
import type { ActiveSource } from "../types/filters";
import type { TopicId } from "../data/topics";

interface UseQuestionExplorerOptions {
  activeTopic: TopicId | 0;
  activeSource: ActiveSource;
  search: string;
}

export function useQuestionExplorer({
  activeTopic,
  activeSource,
  search,
}: UseQuestionExplorerOptions) {
  const sources = useMemo(getSources, []);
  const topicCounts = useMemo(() => getTopicCounts(TOPICS.map((topic) => topic.id)), []);

  const filteredQuestions = useMemo(
    () => filterQuestions(Q, { activeTopic, activeSource, search }),
    [activeTopic, activeSource, search],
  );

  const viewTitle = useMemo(() => {
    const topicName = TOPICS.find((topic) => topic.id === activeTopic)?.name;
    return getViewTitle(activeTopic, filteredQuestions.length, topicName);
  }, [activeTopic, filteredQuestions.length]);

  return { filteredQuestions, topicCounts, viewTitle, sources };
}
