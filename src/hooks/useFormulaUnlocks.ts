import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

const KEY = "unlocked-formulas";

/**
 * Tracks which formula-glossary entries the learner has "unlocked" by
 * reading a question's explanation (shown after answering) that uses them,
 * either in the question explorer or in a mock exam. Persisted so it
 * carries across visits, same as the rest of the site's progress state.
 */
export function useFormulaUnlocks() {
  const [unlocked, setUnlocked] = useLocalStorage<string[]>(KEY, []);

  const unlock = useCallback(
    (ids: string[]) => {
      if (ids.length === 0) return;
      setUnlocked((prev) => {
        const next = new Set(prev);
        let changed = false;
        for (const id of ids) {
          if (!next.has(id)) {
            next.add(id);
            changed = true;
          }
        }
        return changed ? Array.from(next) : prev;
      });
    },
    [setUnlocked],
  );

  return { unlocked, unlock };
}
