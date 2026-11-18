import { parseAsInteger, parseAsString, useQueryState } from "nuqs";

import type { TopicId } from "../data/topics";
import type { ActiveSource } from "../types/filters";

export function useQuestionFilters() {
  const [activeTopic, setActiveTopic] = useQueryState("topic", parseAsInteger.withDefault(0));
  const [activeSource, setActiveSource] = useQueryState("src", parseAsString.withDefault("all"));
  const [search, setSearch] = useQueryState("q", parseAsString.withDefault(""));
  const [selectedQuestionId, setSelectedQuestionId] = useQueryState(
    "id",
    parseAsString.withDefault(""),
  );

  const resetFilters = () => {
    void setActiveTopic(null);
    void setActiveSource(null);
    void setSearch(null);
    void setSelectedQuestionId(null);
  };

  return {
    activeTopic: activeTopic as TopicId | 0,
    activeSource: activeSource as ActiveSource,
    search,
    selectedQuestionId,
    setSelectedQuestionId,
    setActiveTopic,
    setActiveSource,
    setSearch,
    resetFilters,
  };
}
