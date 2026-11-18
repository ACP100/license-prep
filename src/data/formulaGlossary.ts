import type { TopicId } from "./topics";

// A small glossary of named formulas that appear in question explanations.
// RichText looks up each displayed ($$...$$) formula against this list and,
// on a match, prints what each symbol stands for underneath it. Matching is
// done on short, distinctive substrings of the raw LaTeX source so it still
// matches when numbers have been substituted in (e.g. "X_L = 2 \pi f L" and
// "X_L = 2 \pi \times 1000 \times 0.4 = ..." both match the X_L entry).
//
// The same list backs the standalone Formulas page (each entry's `formula`
// and `name` are only used there; RichText only needs `test` + `legend`).
//
// Deliberately scoped to electrical/electronics/finance-style named formulas
// with real physical units. CS notations (Big-O, DFA tuples, grammar rules,
// modulo arithmetic, permutations, etc.) use single letters that mean
// different things in different questions, so they're left out rather than
// risk a wrong or misleading legend.

export interface FormulaGlossaryEntry {
  id: string;
  name: string;
  topic: TopicId;
  formula: string; // canonical LaTeX, no $$ delimiters
  legend: string;
  test: (tex: string) => boolean;
}

const has = (tex: string, ...needles: string[]) => needles.every((n) => tex.includes(n));

export const FORMULA_GLOSSARY: FormulaGlossaryEntry[] = [
  {
    id: "amplifier-gain",
    name: "Common-emitter amplifier voltage gain",
    topic: 1,
    formula: "A_v = -\\frac{\\beta R_C}{r_e}",
    test: (t) => t.includes("A_v") && (t.includes("R_C") || t.includes("R_c")) && t.includes("r_e"),
    legend:
      "A_v = voltage gain · R_C = collector resistor (Ω) · r_e = AC emitter resistance (Ω)" +
      " · β (beta) = transistor current gain (h_FE)",
  },
  {
    id: "capacitor-energy",
    name: "Energy stored in a capacitor",
    topic: 1,
    formula: "E = \\frac{1}{2} C V^2",
    test: (t) => has(t, "E", "\\frac{1}{2}") && t.includes("C") && t.includes("V^2"),
    legend: "E = energy stored (J) · C = capacitance (F) · V = voltage across the capacitor (V)",
  },
  {
    id: "compound-interest",
    name: "Compound interest (future value)",
    topic: 10,
    formula: "FV = P \\times \\left(1 + \\frac{r}{n}\\right)^{n \\cdot t}",
    test: (t) => t.includes("FV") && (t.includes("P") || t.includes("1000")),
    legend:
      "FV = future value · P = principal (initial amount) · r = annual interest rate" +
      " · n = compounding periods per year · t = time in years",
  },
  {
    id: "decibel-gain",
    name: "Gain / loss in decibels",
    topic: 1,
    formula: "N_{dB} = 10 \\log_{10}\\left(\\frac{P_2}{P_1}\\right)",
    test: (t) => t.includes("N_{dB}") || t.includes("N_dB"),
    legend:
      "N_dB = gain or loss in decibels · P₁, P₂ = input/output power (W)" +
      " · V₁, V₂ = input/output voltage (V) · Z₁, Z₂ = input/output impedance (Ω)",
  },
  {
    id: "power-voltage-impedance",
    name: "Power from voltage and impedance",
    topic: 1,
    formula: "P = \\frac{V^2}{Z}",
    test: (t) => /^P\s*=\s*\\frac\{V\^2\}\{Z\}/.test(t.trim()),
    legend: "P = power (W) · V = voltage (V) · Z = impedance (Ω)",
  },
  {
    id: "dielectric-loss",
    name: "Dielectric loss power",
    topic: 1,
    formula: "P = V_{\\text{rms}}^2 \\times \\tan\\delta \\times \\text{reactance}",
    test: (t) => t.includes("V_{\\text{rms}}") && t.includes("tan"),
    legend:
      "P = dielectric loss power (W) · V_rms = rms voltage (V)" +
      " · tan δ = dielectric loss tangent · reactance = capacitive reactance (Ω)",
  },
  {
    id: "quality-factor",
    name: "Quality factor of a coil",
    topic: 1,
    formula: "Q = \\frac{R}{\\omega L}",
    test: (t) => /^Q\s*=\s*\\frac\{R\}\{\\omega\s*L\}/.test(t.trim()),
    legend: "Q = quality factor (dimensionless) · R = resistance (Ω) · ω = angular frequency (rad/s) · L = inductance (H)",
  },
  {
    id: "inductor-voltage",
    name: "Voltage across an inductor",
    topic: 1,
    formula: "V = I \\times X_L",
    test: (t) => /^V\s*=\s*I\s*\\times\s*X_L/.test(t.trim()),
    legend: "V = voltage across the inductor (V) · I = current (A) · X_L = inductive reactance (Ω)",
  },
  {
    id: "capacitive-reactance",
    name: "Capacitive reactance",
    topic: 1,
    formula: "X_C = \\frac{1}{2 \\pi f C}",
    test: (t) => t.includes("X_C") && t.includes("2") && t.includes("\\pi"),
    legend: "X_C = capacitive reactance (Ω) · f = frequency (Hz) · C = capacitance (F)",
  },
  {
    id: "inductive-reactance",
    name: "Inductive reactance",
    topic: 1,
    formula: "X_L = 2 \\pi f L",
    test: (t) => t.includes("X_L") && t.includes("2") && t.includes("\\pi"),
    legend: "X_L = inductive reactance (Ω) · f = frequency (Hz) · L = inductance (H)",
  },
  {
    id: "uncertainty-relation",
    name: "Time–bandwidth uncertainty relation",
    topic: 5,
    formula: "\\Delta t \\cdot \\Delta f \\geq \\frac{1}{2\\pi}",
    test: (t) => t.includes("\\Delta t") && t.includes("\\Delta f"),
    legend:
      "Δt = duration/uncertainty in time · Δf = uncertainty in frequency (bandwidth)" +
      " — the two can't both be made arbitrarily small at once",
  },
  {
    id: "angular-frequency",
    name: "Angular frequency",
    topic: 1,
    formula: "\\omega = 2 \\pi f_0",
    test: (t) => /^\\omega\s*=\s*2\s*\\pi\s*f/.test(t.trim()),
    legend: "ω = angular frequency (rad/s) · f₀ = frequency (Hz)",
  },
  {
    id: "resonant-frequency",
    name: "Resonant frequency of an LC circuit",
    topic: 1,
    formula: "f_0 = \\frac{1}{2 \\pi \\sqrt{LC}}",
    test: (t) => (t.includes("f_0") || t.includes("f_r")) && t.includes("LC"),
    legend: "f₀ (or f_r) = resonant frequency (Hz) · L = inductance (H) · C = capacitance (F)",
  },
  {
    id: "capitalized-worth",
    name: "Capitalized worth",
    topic: 10,
    formula: "\\text{Capitalized Worth} = \\frac{\\text{Annual Worth}}{i}",
    test: (t) => t.includes("Capitalized Worth"),
    legend: "Capitalized Worth = present value of a perpetual annual cost · i = interest rate (per period)",
  },
  {
    id: "effective-annual-rate",
    name: "Effective annual rate",
    topic: 10,
    formula: "\\text{Effective Annual Rate} = \\left(1 + \\frac{r}{n}\\right)^n - 1",
    test: (t) => t.includes("Effective Annual Rate"),
    legend: "r = nominal annual interest rate · n = number of compounding periods per year",
  },
  {
    id: "effective-rate-continuous",
    name: "Effective rate (continuous compounding)",
    topic: 10,
    formula: "\\text{Effective Rate} = e^{r} - 1",
    test: (t) => t.includes("Effective Rate") && t.includes("e^"),
    legend: "r = nominal annual interest rate · e = Euler's number (≈2.71828), used for continuous compounding",
  },
  {
    id: "coding-gain",
    name: "Coding gain",
    topic: 5,
    formula: "\\text{Coding Gain} = 10 \\log_{10} \\left( \\frac{d_{\\text{free}}}{2} \\right)",
    test: (t) => t.includes("Coding Gain"),
    legend: "d_free = free distance of the code (a measure of its error-correcting strength)",
  },
  {
    id: "clock-period",
    name: "Clock period",
    topic: 4,
    formula: "\\text{Time per cycle} = \\frac{1}{\\text{Clock frequency}}",
    test: (t) => t.includes("Time per cycle") || t.includes("Clock frequency"),
    legend: "Time per cycle = 1 / clock frequency — the duration of one clock pulse",
  },
  {
    id: "turnaround-time",
    name: "CPU scheduling turnaround time",
    topic: 7,
    formula: "\\text{Turnaround Time} = \\text{Completion Time} - \\text{Arrival Time}",
    test: (t) => t.includes("Turnaround Time"),
    legend: "Turnaround Time = Completion Time − Arrival Time, in a CPU-scheduling timeline",
  },
  {
    id: "straight-line-depreciation",
    name: "Straight-line annual depreciation",
    topic: 10,
    formula: "\\text{Annual Depreciation} = \\frac{\\text{Cost}}{\\text{Useful Life}}",
    test: (t) => t.includes("Annual Depreciation"),
    legend: "Annual Depreciation = (purchase cost) / (useful life in years), under straight-line depreciation",
  },
  {
    id: "sigmoid",
    name: "Sigmoid activation function",
    topic: 9,
    formula: "f(x) = \\frac{1}{1 + e^{-x}}",
    test: (t) => /f\(x\)\s*=.*e\^\{?-?x\}?/.test(t) && t.includes("1"),
    legend: "f(x) = sigmoid activation function · x = weighted input to the neuron · e = Euler's number (≈2.71828)",
  },
  {
    id: "parallel-plate-capacitance",
    name: "Parallel-plate capacitance",
    topic: 1,
    formula: "C = \\epsilon \\cdot \\frac{A}{D}",
    test: (t) => t.includes("C") && t.includes("\\epsilon") && t.includes("\\frac{A}{D}"),
    legend:
      "C = capacitance (F) · ε (epsilon) = permittivity of the dielectric" +
      " · A = plate area (m²) · D = distance between plates (m)",
  },
  {
    id: "star-delta",
    name: "Star–delta resistor conversion",
    topic: 1,
    formula: "R_{star} = \\frac{R_{delta}}{3}",
    test: (t) =>
      t.includes("R_{star}") || t.includes("R_{delta}") || t.includes("R_star") || t.includes("R_delta"),
    legend:
      "R_star = resistance of one arm in the equivalent star (Y) network" +
      " · R_delta = resistance of one arm in the original delta (Δ) network",
  },
];

/** Returns the legend text for a formula's raw LaTeX source, if one matches. */
export function formulaLegendFor(tex: string): string | null {
  const entry = FORMULA_GLOSSARY.find((e) => {
    try {
      return e.test(tex);
    } catch {
      return false;
    }
  });
  return entry?.legend ?? null;
}

const DISPLAY_MATH_RE = /\$\$(.+?)\$\$/gs;

/**
 * Scans a block of question/explanation text for display ($$...$$) formulas
 * and returns the ids of every glossary entry that matches one of them.
 * Used to "unlock" formulas on the Formulas page as the learner encounters
 * them while studying or sitting the mock exam.
 */
export function matchFormulaIds(text: string | null | undefined): string[] {
  if (!text) return [];
  const ids = new Set<string>();
  const matches = text.matchAll(DISPLAY_MATH_RE);
  for (const match of matches) {
    const tex = match[1];
    for (const entry of FORMULA_GLOSSARY) {
      try {
        if (entry.test(tex)) ids.add(entry.id);
      } catch {
        // ignore malformed entries
      }
    }
  }
  return Array.from(ids);
}
