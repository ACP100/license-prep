import Q, { type Question } from "../data/questions";
import TOPICS from "../data/topics";
import type { TopicId } from "../data/topics";

export const EXAM_DURATION_SECONDS = 2 * 60 * 60; // 2 hours
export const EXAM_QUESTION_COUNT = 100;
export const EXAM_PASS_MARK = 50;
export const QUESTIONS_PER_CHAPTER = EXAM_QUESTION_COUNT / TOPICS.length; // 10

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Builds one mock exam: 10 questions from each of the 10 syllabus chapters
 * (the real exam weights every chapter equally at 10 marks), drawn at random
 * and then shuffled together so chapters aren't grouped in a predictable order.
 */
export function buildMockExam(): Question[] {
  const byTopic = new Map<TopicId, Question[]>();
  for (const topic of TOPICS) {
    byTopic.set(topic.id, Q.filter((q) => q.t === topic.id));
  }

  const picked: Question[] = [];
  for (const topic of TOPICS) {
    const pool = byTopic.get(topic.id) ?? [];
    const take = Math.min(QUESTIONS_PER_CHAPTER, pool.length);
    picked.push(...shuffled(pool).slice(0, take));
  }

  return shuffled(picked);
}

export interface MockExamAttempt {
  id: string;
  startedAt: number;
  finishedAt: number;
  durationSeconds: number;
  score: number;
  total: number;
  byTopic: { topicId: TopicId; correct: number; total: number }[];
}

export interface MockExamSession {
  id: string;
  questionIds: string[];
  answers: Record<string, number>; // questionId -> selected option index
  flagged: string[];
  startedAt: number;
  durationSeconds: number;
  submitted: boolean;
}

export function scoreSession(
  session: MockExamSession,
): { score: number; total: number; byTopic: MockExamAttempt["byTopic"] } {
  const byId = new Map(Q.map((q) => [q.id, q]));
  const byTopic = new Map<TopicId, { correct: number; total: number }>();
  for (const topic of TOPICS) byTopic.set(topic.id, { correct: 0, total: 0 });

  let score = 0;
  for (const qid of session.questionIds) {
    const question = byId.get(qid);
    if (!question) continue;
    const topicStats = byTopic.get(question.t);
    if (topicStats) topicStats.total += 1;
    const selected = session.answers[qid];
    if (selected !== undefined && selected === question.answer) {
      score += 1;
      if (topicStats) topicStats.correct += 1;
    }
  }

  return {
    score,
    total: session.questionIds.length,
    byTopic: TOPICS.map((t) => ({
      topicId: t.id,
      correct: byTopic.get(t.id)?.correct ?? 0,
      total: byTopic.get(t.id)?.total ?? 0,
    })),
  };
}
