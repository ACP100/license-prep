import { useCallback, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import {
  buildMockExam,
  scoreSession,
  EXAM_DURATION_SECONDS,
  type MockExamAttempt,
  type MockExamSession,
} from "../lib/mockExam";

const SESSION_KEY = "mock-exam-session";
const HISTORY_KEY = "mock-exam-history";

export function useMockExam() {
  const [session, setSession] = useLocalStorage<MockExamSession | null>(SESSION_KEY, null);
  const [history, setHistory] = useLocalStorage<MockExamAttempt[]>(HISTORY_KEY, []);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const autoSubmittedRef = useRef(false);

  const recomputeSecondsLeft = useCallback((s: MockExamSession) => {
    const elapsed = Math.floor((Date.now() - s.startedAt) / 1000);
    return Math.max(0, s.durationSeconds - elapsed);
  }, []);

  useEffect(() => {
    if (!session || session.submitted) return;
    setSecondsLeft(recomputeSecondsLeft(session));
    const interval = setInterval(() => {
      setSecondsLeft(recomputeSecondsLeft(session));
    }, 1000);
    return () => clearInterval(interval);
  }, [session, recomputeSecondsLeft]);

  const start = useCallback(() => {
    const questions = buildMockExam();
    const newSession: MockExamSession = {
      id: `exam-${Date.now()}`,
      questionIds: questions.map((q) => q.id),
      answers: {},
      flagged: [],
      startedAt: Date.now(),
      durationSeconds: EXAM_DURATION_SECONDS,
      submitted: false,
    };
    autoSubmittedRef.current = false;
    setSession(newSession);
  }, [setSession]);

  const answer = useCallback(
    (questionId: string, optionIndex: number) => {
      setSession((prev) => {
        if (!prev || prev.submitted) return prev;
        return { ...prev, answers: { ...prev.answers, [questionId]: optionIndex } };
      });
    },
    [setSession],
  );

  const toggleFlag = useCallback(
    (questionId: string) => {
      setSession((prev) => {
        if (!prev || prev.submitted) return prev;
        const flagged = prev.flagged.includes(questionId)
          ? prev.flagged.filter((id) => id !== questionId)
          : [...prev.flagged, questionId];
        return { ...prev, flagged };
      });
    },
    [setSession],
  );

  const submit = useCallback(() => {
    setSession((prev) => {
      if (!prev || prev.submitted) return prev;
      const finished: MockExamSession = { ...prev, submitted: true };
      const { score, total, byTopic } = scoreSession(finished);
      const attempt: MockExamAttempt = {
        id: finished.id,
        startedAt: finished.startedAt,
        finishedAt: Date.now(),
        durationSeconds: Math.min(
          finished.durationSeconds,
          Math.floor((Date.now() - finished.startedAt) / 1000),
        ),
        score,
        total,
        byTopic,
      };
      setHistory((prevHistory) => [attempt, ...prevHistory].slice(0, 20));
      return finished;
    });
  }, [setSession, setHistory]);

  // Auto-submit once the clock runs out.
  useEffect(() => {
    if (!session || session.submitted) return;
    if (secondsLeft <= 0 && !autoSubmittedRef.current) {
      autoSubmittedRef.current = true;
      submit();
    }
  }, [secondsLeft, session, submit]);

  const exit = useCallback(() => {
    setSession(null);
  }, [setSession]);

  return {
    session,
    history,
    secondsLeft,
    start,
    answer,
    toggleFlag,
    submit,
    exit,
  };
}
