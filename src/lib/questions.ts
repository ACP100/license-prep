import Q, { type Question } from "../data/questions";
import type { TopicId } from "../data/topics";
import type { ActiveSource } from "../types/filters";

export function getSources(): string[] {
  const sources = new Set<string>();
  for (const question of Q) {
    for (const occ of question.occurrences) {
      sources.add(occ.source);
    }
  }
  return Array.from(sources).sort();
}

export function getTopicCounts(topicIds: TopicId[]): Map<TopicId, number> {
  return new Map<TopicId, number>(
    topicIds.map((topicId) => [topicId, Q.filter((question) => question.t === topicId).length]),
  );
}

export function getViewTitle(
  activeTopic: TopicId | 0,
  filteredQuestionCount: number,
  topicName?: string,
): string {
  const title = activeTopic !== 0 ? topicName ?? "Questions" : "All Questions";
  return `${title} (${filteredQuestionCount})`;
}

export function filterQuestions(
  questions: Question[],
  {
    activeTopic,
    activeSource,
    search,
  }: {
    activeTopic: TopicId | 0;
    activeSource: ActiveSource;
    search: string;
  },
): Question[] {
  const normalizedSearch = search.trim().toLowerCase();

  return questions.filter((question) => {
    if (activeTopic !== 0 && question.t !== activeTopic) return false;

    if (activeSource !== "all") {
      const hasSource = question.occurrences.some((occ) => occ.source === activeSource);
      if (!hasSource) return false;
    }

    if (normalizedSearch) {
      const occurrencesText = question.occurrences.map((o) => o.label).join(" ");
      const optionsText = question.options.join(" ");
      const haystack =
        `${question.text} ${optionsText} ${occurrencesText} ${question.sub}`.toLowerCase();
      if (!haystack.includes(normalizedSearch)) return false;
    }

    return true;
  });
}

export function sortQuestionsBySub(questions: Question[]): Question[] {
  return [...questions].sort((a, b) => {
    const subA = a.sub.split(".").map(Number);
    const subB = b.sub.split(".").map(Number);
    if (subA[0] !== subB[0]) return (subA[0] ?? 0) - (subB[0] ?? 0);
    return (subA[1] ?? 0) - (subB[1] ?? 0);
  });
}
