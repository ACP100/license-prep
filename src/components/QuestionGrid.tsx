import type { Question } from "../data/questions";
import { QuestionCard } from "./QuestionCard";

interface QuestionGridProps {
  questions: Question[];
  onQuestionSelect?: (question: Question) => void;
  activeQuestionId?: string;
}

export function QuestionGrid({ questions, onQuestionSelect, activeQuestionId }: QuestionGridProps) {
  return (
    <div className="flex flex-col gap-1">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          isActive={question.id === activeQuestionId}
          onClick={() => onQuestionSelect?.(question)}
        />
      ))}
    </div>
  );
}
