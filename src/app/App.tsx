import { Header } from "../components/Header";
import { ProgressDialog } from "../components/ProgressDialog";
import { QuestionContent } from "../components/QuestionContent";
import { lazy, Suspense } from "react";
import { useQuestionExplorer } from "../hooks/useQuestionExplorer";
import { useQuestionFilters } from "../hooks/useQuestionFilters";
import { parseAsBoolean, useQueryState } from "nuqs";
import { DesktopGuard } from "../components/DesktopGuard";
import Q from "../data/questions";

const QuestionDetailView = lazy(() =>
  import("../components/QuestionDetailView").then((m) => ({ default: m.QuestionDetailView })),
);

const ResourcesPage = lazy(() =>
  import("../components/ResourcesPage").then((m) => ({ default: m.ResourcesPage })),
);

const MockExamPage = lazy(() =>
  import("../components/MockExamPage").then((m) => ({ default: m.MockExamPage })),
);

const FormulasPage = lazy(() =>
  import("../components/FormulasPage").then((m) => ({ default: m.FormulasPage })),
);

function Home() {
  const [isProgressOpen, setIsProgressOpen] = useQueryState(
    "progress",
    parseAsBoolean.withDefault(false),
  );
  const [showResources, setShowResources] = useQueryState(
    "resources",
    parseAsBoolean.withDefault(false),
  );
  const [showExam, setShowExam] = useQueryState("exam", parseAsBoolean.withDefault(false));
  const [showFormulas, setShowFormulas] = useQueryState(
    "formulas",
    parseAsBoolean.withDefault(false),
  );
  const filters = useQuestionFilters();
  const { filteredQuestions, viewTitle, sources } = useQuestionExplorer(filters);

  const selectedQuestion = Q.find((q) => q.id === filters.selectedQuestionId);

  const handleQuestionSelect = (q: { id: string }) => {
    void filters.setSelectedQuestionId(q.id, { shallow: true });
  };

  const handleCloseDetail = () => {
    void filters.setSelectedQuestionId(null, { shallow: true });
  };

  if (showResources) {
    return (
      <Suspense fallback={null}>
        <ResourcesPage onClose={() => void setShowResources(null)} />
      </Suspense>
    );
  }

  if (showExam) {
    return (
      <Suspense fallback={null}>
        <MockExamPage onClose={() => void setShowExam(null)} />
      </Suspense>
    );
  }

  if (showFormulas) {
    return (
      <Suspense fallback={null}>
        <FormulasPage onClose={() => void setShowFormulas(null)} />
      </Suspense>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[var(--bg)]">
      <div id="split-container-home" className="flex-1 flex overflow-hidden relative">
        <div
          className="flex flex-col overflow-hidden border-r border-transparent data-[selected=true]:border-[var(--border)]"
          data-selected={!!selectedQuestion}
          style={{ width: selectedQuestion ? "380px" : "100%", flexShrink: 0 }}
        >
          <div
            className={`flex-shrink-0 ${selectedQuestion ? "bg-[var(--bg)] border-b border-[var(--border)]" : ""}`}
          >
            <Header
              search={filters.search}
              onSearchChange={filters.setSearch}
              activeTopic={filters.activeTopic}
              activeSource={filters.activeSource}
              onTopicChange={filters.setActiveTopic}
              onSourceChange={filters.setActiveSource}
              sources={sources}
              onResetFilters={filters.resetFilters}
              compact={!!selectedQuestion}
            />
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <main
              className={`mx-auto w-full ${
                selectedQuestion
                  ? "px-4 py-6"
                  : "max-w-4xl px-4 py-8 min-[901px]:px-8 min-[901px]:py-12"
              }`}
            >
              <div
                className={`mb-10 font-[family:var(--serif)] font-bold text-[var(--text)] tracking-tight flex items-baseline ${
                  selectedQuestion ? "text-lg" : "text-[1.4rem]"
                }`}
              >
                {viewTitle}
              </div>

              <QuestionContent
                activeTopic={filters.activeTopic}
                activeSource={filters.activeSource}
                questions={filteredQuestions}
                search={filters.search}
                activeQuestionId={filters.selectedQuestionId || undefined}
                onQuestionSelect={handleQuestionSelect}
              />
            </main>
          </div>
        </div>

        <div
          className="absolute right-0 top-0 bottom-0 z-10 flex flex-col transition-[transform,opacity] duration-300 bg-[var(--bg)] ease-[cubic-bezier(0.2,0,0,1)]"
          style={{
            width: "calc(100% - 380px)",
            transform: selectedQuestion ? "translateX(0)" : "translateX(100%)",
            opacity: selectedQuestion ? 1 : 0,
            visibility: selectedQuestion ? "visible" : "hidden",
            willChange: "transform, opacity",
          }}
        >
          {selectedQuestion && (
            <Suspense fallback={null}>
              <QuestionDetailView
                key={selectedQuestion.id}
                question={selectedQuestion}
                onClose={handleCloseDetail}
              />
            </Suspense>
          )}
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-20 flex items-center flex-wrap justify-end gap-2 max-w-[90vw]">
        <button
          onClick={() => void setShowFormulas(true)}
          className="flex items-center gap-2 bg-[var(--bg2)] text-[var(--text)] border border-[var(--border)] px-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all active:scale-95 font-bold text-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 7h6M9 11h6M9 15h3" />
            <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5v13A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3z" />
          </svg>
          Formulas
        </button>
        <button
          onClick={() => void setShowExam(true)}
          className="flex items-center gap-2 bg-[var(--bg2)] text-[var(--text)] border border-[var(--border)] px-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all active:scale-95 font-bold text-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Mock Exam
        </button>
        <button
          onClick={() => void setShowResources(true)}
          className="flex items-center gap-2 bg-[var(--bg2)] text-[var(--text)] border border-[var(--border)] px-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all active:scale-95 font-bold text-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          Resources
        </button>
        <button
          onClick={() => setIsProgressOpen(true)}
          className="flex items-center gap-2 bg-[var(--text)] text-[var(--bg)] px-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all active:scale-95 font-bold text-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20v-6M6 20V10M18 20V4" />
          </svg>
          Check Progress
        </button>
      </div>

      <ProgressDialog isOpen={isProgressOpen} onClose={() => setIsProgressOpen(false)} />
    </div>
  );
}

export function App() {
  return (
    <>
      <DesktopGuard />
      <div id="app-root" className="max-[640px]:hidden">
        <Home />
      </div>
    </>
  );
}
