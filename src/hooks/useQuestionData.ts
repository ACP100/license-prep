import { useLocalStorage } from "./useLocalStorage";

export interface QuestionData {
  notes: string;
  selected: number | null;
}

export function useQuestionData(questionId: string) {
  const [data, setData] = useLocalStorage<QuestionData>(`question-data-${questionId}`, {
    notes: "",
    selected: null,
  });

  const [answeredIds, setAnsweredIds] = useLocalStorage<string[]>("answered-questions", []);

  const isDone = answeredIds.includes(questionId);

  const setNotes = (notes: string | ((prev: string) => string)) =>
    setData((prev) => ({
      ...prev,
      notes: typeof notes === "function" ? notes(prev.notes) : notes,
    }));

  const setSelected = (selected: number | null) => {
    setData((prev) => ({ ...prev, selected }));
    if (selected !== null) {
      setAnsweredIds((prev) => (prev.includes(questionId) ? prev : [...prev, questionId]));
    } else {
      setAnsweredIds((prev) => prev.filter((id) => id !== questionId));
    }
  };

  return {
    notes: data.notes,
    selected: data.selected,
    isDone,
    setNotes,
    setSelected,
  };
}
