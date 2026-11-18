import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        window.dispatchEvent(
          new CustomEvent("local-storage", { detail: { key, value: valueToStore } }),
        );
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent | CustomEvent) => {
      if (e instanceof StorageEvent) {
        if (e.key === key && e.newValue) {
          setStoredValue(JSON.parse(e.newValue) as T);
        }
      } else if (e.type === "local-storage") {
        const detail = (e as CustomEvent).detail;
        if (detail.key === key) {
          setStoredValue(detail.value as T);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange as EventListener);
    window.addEventListener("local-storage", handleStorageChange as EventListener);

    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item) as T);
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange as EventListener);
      window.removeEventListener("local-storage", handleStorageChange as EventListener);
    };
  }, [key]);

  return [storedValue, setValue] as const;
}
