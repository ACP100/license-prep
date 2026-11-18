import { useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import Q from "../data/questions";
import TOPICS from "../data/topics";

export function useStudyProgress() {
  const [answeredIds] = useLocalStorage<string[]>("answered-questions", []);

  const progress = useMemo(() => {
    const validSet = new Set(answeredIds.filter((id) => Q.some((q) => q.id === id)));
    const valid = Array.from(validSet);

    const totalQuestions = Q.length;
    const completedCount = valid.length;
    const totalPercentage = totalQuestions > 0 ? (completedCount / totalQuestions) * 100 : 0;

    const topicProgress = TOPICS.map((topic) => {
      const topicQuestions = Q.filter((q) => q.t === topic.id);
      const topicIds = new Set(topicQuestions.map((q) => q.id));
      const topicCompleted = valid.filter((id) => topicIds.has(id)).length;
      const topicTotal = topicQuestions.length;
      const percentage = topicTotal > 0 ? (topicCompleted / topicTotal) * 100 : 0;

      return { topicId: topic.id, completed: topicCompleted, total: topicTotal, percentage };
    });

    return {
      total: { completed: completedCount, total: totalQuestions, percentage: totalPercentage },
      topics: topicProgress,
    };
  }, [answeredIds]);

  return progress;
}
