import { useMemo, useState } from "react";
import katex from "katex";
import { Lock, Sparkles, X } from "./Icons";
import { FORMULA_GLOSSARY } from "../data/formulaGlossary";
import { useFormulaUnlocks } from "../hooks/useFormulaUnlocks";
import TOPICS from "../data/topics";
import type { TopicId } from "../data/topics";

interface FormulasPageProps {
  onClose: () => void;
}

function Formula({ tex }: { tex: string }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, { displayMode: true, throwOnError: false });
    } catch {
      return tex;
    }
  }, [tex]);
  return <div className="overflow-x-auto" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function FormulasPage({ onClose }: FormulasPageProps) {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState<TopicId | "all">("all");
  const { unlocked } = useFormulaUnlocks();
  const unlockedSet = useMemo(() => new Set(unlocked), [unlocked]);

  const topicById = useMemo(() => new Map(TOPICS.map((t) => [t.id, t])), []);

  const filtered = useMemo(() => {
    // Search only matches the formula's name/chapter, never its legend --
    // locked formulas shouldn't leak their answer through a search box.
    const q = search.trim().toLowerCase();
    return FORMULA_GLOSSARY.filter((f) => {
      if (activeTopic !== "all" && f.topic !== activeTopic) return false;
      if (!q) return true;
      const topic = topicById.get(f.topic);
      return `${f.name} ${topic?.name ?? ""} ${topic?.code ?? ""}`.toLowerCase().includes(q);
    });
  }, [search, activeTopic, topicById]);

  const topicsWithFormulas = useMemo(
    () => TOPICS.filter((t) => FORMULA_GLOSSARY.some((f) => f.topic === t.id)),
    [],
  );

  return (
    <div className="h-screen overflow-y-auto scrollbar-thin bg-[var(--bg)]">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg2)]/90 backdrop-blur-md px-4 py-3 min-[901px]:px-8">
        <h1 className="font-[family:var(--serif)] text-lg font-bold text-[var(--text)]">
          Formula reference
        </h1>
        <button
          onClick={onClose}
          className="p-2 hover:bg-[var(--bg3)] rounded-full transition-colors text-[var(--text2)] hover:text-[var(--text)]"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 min-[901px]:px-8">
        <p className="text-[var(--text2)] leading-relaxed mb-6">
          Every named formula that shows up in a question explanation, with what each symbol
          means and its unit. A formula starts locked — answer a question (in the explorer or a
          mock exam) that uses it, and it unlocks here for good.
        </p>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-5 py-4 mb-8 flex items-center gap-4">
          <div className="text-[var(--accent)] shrink-0">
            <Sparkles size={28} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text3)]">
                Formulas unlocked
              </span>
              <span className="font-mono font-bold text-sm text-[var(--text)] tabular-nums">
                {unlockedSet.size} / {FORMULA_GLOSSARY.length}
              </span>
            </div>
            <div className="h-1.5 w-full bg-[var(--bg3)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--accent)] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(unlockedSet.size / FORMULA_GLOSSARY.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search formulas (e.g. reactance, gain, interest)..."
            className="w-full bg-[var(--bg2)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text3)] focus:outline-none focus:border-[var(--accent)]"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTopic("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTopic === "all"
                  ? "bg-[var(--text)] text-[var(--bg)]"
                  : "bg-[var(--bg2)] border border-[var(--border)] text-[var(--text2)] hover:border-[var(--accent)]"
              }`}
            >
              All chapters
            </button>
            {topicsWithFormulas.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTopic(t.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTopic === t.id
                    ? "text-white"
                    : "bg-[var(--bg2)] border border-[var(--border)] text-[var(--text2)] hover:border-[var(--accent)]"
                }`}
                style={activeTopic === t.id ? { backgroundColor: t.color } : undefined}
              >
                {t.code}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center text-[var(--text3)] py-16 italic">
            No formulas match that search.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((f) => {
              const topic = topicById.get(f.topic);
              const isUnlocked = unlockedSet.has(f.id);
              return (
                <div
                  key={f.id}
                  className={`rounded-lg border px-5 py-5 transition-colors ${
                    isUnlocked
                      ? "border-[var(--border)] bg-[var(--bg2)]"
                      : "border-[var(--border)] bg-[var(--bg2)]/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className={`font-[family:var(--serif)] text-base font-bold flex items-center gap-2 ${
                        isUnlocked ? "text-[var(--text)]" : "text-[var(--text3)]"
                      }`}
                    >
                      {!isUnlocked && <Lock size={14} />}
                      {f.name}
                    </h3>
                    {topic && (
                      <span
                        className="shrink-0 text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                        style={
                          isUnlocked
                            ? { color: topic.color, backgroundColor: topic.bg }
                            : { color: "var(--text3)", backgroundColor: "var(--bg3)" }
                        }
                      >
                        {topic.code}
                      </span>
                    )}
                  </div>

                  {isUnlocked ? (
                    <>
                      <div className="text-[var(--text)] mb-3">
                        <Formula tex={f.formula} />
                      </div>
                      <div className="text-[0.85rem] leading-relaxed text-[var(--text3)] italic border-t border-[var(--border)] pt-3">
                        Where: {f.legend}
                      </div>
                    </>
                  ) : (
                    <div className="relative">
                      <div
                        className="text-[var(--text)] mb-3 select-none"
                        style={{ filter: "blur(7px)", opacity: 0.6 }}
                        aria-hidden="true"
                      >
                        <Formula tex={f.formula} />
                      </div>
                      <div className="text-[0.8rem] text-[var(--text3)] italic border-t border-[var(--border)] pt-3">
                        Locked — answer a {topic?.code ?? ""} question that uses this formula to
                        reveal it.
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
