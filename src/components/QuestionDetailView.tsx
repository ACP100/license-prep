import { CheckCircle2, X, XCircle } from "./Icons";
import { useEffect, useRef, useState } from "react";
import { Latex, RichText } from "./RichText";
import type { Question } from "../data/questions";
import { useQuestionData } from "../hooks/useQuestionData";
import { useFormulaUnlocks } from "../hooks/useFormulaUnlocks";
import { matchFormulaIds } from "../data/formulaGlossary";
import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  linkPlugin,
  linkDialogPlugin,
  type MDXEditorMethods,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

interface QuestionDetailViewProps {
  question: Question;
  onClose: () => void;
}

export function QuestionDetailView({ question, onClose }: QuestionDetailViewProps) {
  const questionId = question.id;
  const { notes: storedNotes, selected, setNotes, setSelected } = useQuestionData(questionId);

  const editorRef = useRef<MDXEditorMethods>(null);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimationFinished(true), 350);
    return () => clearTimeout(timer);
  }, []);

  const hasAnswered = selected !== null;
  const isCorrect = selected === question.answer;

  const { unlock } = useFormulaUnlocks();
  useEffect(() => {
    if (hasAnswered) unlock(matchFormulaIds(question.explanation));
  }, [hasAnswered, question.explanation, unlock]);

  return (
    <div className="flex flex-col h-full bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-5 py-3 border-b border-[var(--border)] flex-shrink-0">
        <button
          onClick={onClose}
          className="p-2 hover:bg-[var(--bg2)] rounded-full transition-colors text-[var(--text2)] hover:text-[var(--text)]"
        >
          <X size={20} />
        </button>
        <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-wider font-semibold">
          <span className="bg-[var(--bg3)] border border-[var(--border)] rounded-md px-1.5 py-0.5 text-[var(--text2)]">
            {question.sub}
          </span>
          {question.occurrences.map((occ, i) => (
            <div
              key={`${occ.source}-${i}`}
              className="flex items-center gap-1.5 bg-[var(--bg3)] border border-[var(--border)] rounded-md px-1.5 py-0.5"
            >
              <span className="text-[var(--text2)]">{occ.label}</span>
            </div>
          ))}
        </div>
        {hasAnswered && (
          <div
            className={`ml-auto flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${
              isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
            }`}
          >
            {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            {isCorrect ? "Correct" : "Incorrect"}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col overflow-y-auto scrollbar-thin">
        {/* Question + options */}
        <div className="px-8 py-7 border-b border-[var(--border)] bg-[var(--bg2)]/10">
          <div className="q-text font-[family:var(--serif)] text-xl leading-[1.7] text-[var(--text)] mb-6">
            <Latex content={question.text} />
          </div>

          <div className="flex flex-col gap-2.5">
            {question.options.map((option, index) => {
              const isSelected = selected === index;
              const isCorrectOption = index === question.answer;
              let style =
                "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--accent)] cursor-pointer";
              if (hasAnswered) {
                if (isCorrectOption) {
                  style = "border-emerald-400 bg-emerald-50 cursor-default";
                } else if (isSelected) {
                  style = "border-rose-400 bg-rose-50 cursor-default";
                } else {
                  style = "border-[var(--border)] bg-[var(--bg)] opacity-60 cursor-default";
                }
              }

              return (
                <button
                  key={index}
                  disabled={hasAnswered}
                  onClick={() => setSelected(index)}
                  className={`flex items-start gap-3 text-left px-4 py-3 rounded-lg border transition-colors text-[0.95rem] leading-snug ${style}`}
                >
                  <span className="font-mono text-[var(--text3)] text-sm shrink-0 pt-0.5">
                    {String.fromCharCode(97 + index)}
                  </span>
                  <span className="flex-1">
                    <Latex content={option} />
                  </span>
                  {hasAnswered && isCorrectOption && (
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrectOption && (
                    <XCircle size={18} className="text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {hasAnswered && question.explanation && (
            <div
              className={`mt-5 px-4 py-3 rounded-lg border-l-3 ${
                isCorrect
                  ? "border-emerald-400 bg-emerald-50/60"
                  : "border-[var(--accent)] bg-[var(--bg2)]"
              }`}
            >
              <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text3)] mb-1.5">
                Explanation
              </div>
              <div className="text-[0.95rem] leading-relaxed text-[var(--text2)]">
                <RichText content={question.explanation} />
              </div>
            </div>
          )}

          {hasAnswered && (
            <button
              onClick={() => setSelected(null)}
              className="mt-4 text-[12px] font-medium text-[var(--text3)] hover:text-[var(--text)] underline"
            >
              Try again
            </button>
          )}
        </div>

        {/* Notes editor */}
        <div className="flex-1 flex flex-col px-4 py-4 min-h-[200px]">
          <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text3)] mb-2 px-2">
            Your notes
          </div>
          {!isAnimationFinished ? (
            <div className="flex-1 flex items-center justify-center text-[var(--text3)] animate-pulse">
              Preparing notes...
            </div>
          ) : (
            <MDXEditor
              key={questionId}
              ref={editorRef}
              markdown={storedNotes}
              onChange={setNotes}
              placeholder="Mnemonics, derivations, why the wrong options are wrong..."
              className="flex-1 mdxeditor-custom px-2"
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
              ]}
            />
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
  .mdxeditor-custom { background: transparent; color: var(--text); font-family: var(--mono); font-size: 1rem; height: 100%; overflow-y: auto; }
  .mdxeditor-custom h1 { font-size: 1.8rem; font-weight: 800; margin-top: 1.5rem; margin-bottom: 0.75rem; }
  .mdxeditor-custom h2 { font-size: 1.5rem; font-weight: 700; margin-top: 1.25rem; margin-bottom: 0.6rem; }
  .mdxeditor-custom h3 { font-size: 1.2rem; font-weight: 600; margin-top: 1rem; }
  .mdxeditor-custom ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem; }
  .mdxeditor-custom ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1rem; }
  .mdxeditor-custom li { margin-bottom: 0.4rem; }
  .mdxeditor-custom blockquote { border-left: 4px solid var(--border); padding-left: 1rem; font-style: italic; color: var(--text2); margin: 1rem 0; }
        `,
        }}
      />
    </div>
  );
}
