// A small glossary of named formulas that appear in question explanations.
// RichText looks up each displayed ($$...$$) formula against this list and,
// on a match, prints what each symbol stands for underneath it. Matching is
// done on short, distinctive substrings of the raw LaTeX source so it still
// matches when numbers have been substituted in (e.g. "X_L = 2 \pi f L" and
// "X_L = 2 \pi \times 1000 \times 0.4 = ..." both match the X_L entry).
//
// Deliberately scoped to electrical/electronics/finance-style named formulas
// with real physical units. CS notations (Big-O, DFA tuples, grammar rules,
// modulo arithmetic, permutations, etc.) use single letters that mean
// different things in different questions, so they're left out rather than
// risk a wrong or misleading legend.

export interface FormulaGlossaryEntry {
  test: (tex: string) => boolean;
  legend: string;
}

const has = (tex: string, ...needles: string[]) => needles.every((n) => tex.includes(n));

export const FORMULA_GLOSSARY: FormulaGlossaryEntry[] = [
  {
    // A_v = R_C / r_e, A_v = beta * R_C / r_e (common-emitter amplifier gain)
    test: (t) => t.includes("A_v") && (t.includes("R_C") || t.includes("R_c")) && t.includes("r_e"),
    legend:
      "A_v = voltage gain · R_C = collector resistor (Ω) · r_e = AC emitter resistance (Ω)" +
      " · β (beta) = transistor current gain (h_FE)",
  },
  {
    test: (t) => has(t, "E", "\\frac{1}{2}") && t.includes("C") && t.includes("V^2"),
    legend: "E = energy stored (J) · C = capacitance (F) · V = voltage across the capacitor (V)",
  },
  {
    test: (t) => t.includes("FV") && (t.includes("P") || t.includes("1000")),
    legend:
      "FV = future value · P = principal (initial amount) · r = annual interest rate" +
      " · n = compounding periods per year · t = time in years",
  },
  {
    test: (t) => t.includes("N_{dB}") || t.includes("N_dB"),
    legend:
      "N_dB = gain or loss in decibels · P₁, P₂ = input/output power (W)" +
      " · V₁, V₂ = input/output voltage (V) · Z₁, Z₂ = input/output impedance (Ω)",
  },
  {
    test: (t) => /^P\s*=\s*\\frac\{V\^2\}\{Z\}/.test(t.trim()),
    legend: "P = power (W) · V = voltage (V) · Z = impedance (Ω)",
  },
  {
    test: (t) => t.includes("V_{\\text{rms}}") && t.includes("tan"),
    legend:
      "P = dielectric loss power (W) · V_rms = rms voltage (V)" +
      " · tan δ = dielectric loss tangent · reactance = capacitive reactance (Ω)",
  },
  {
    test: (t) => /^Q\s*=\s*\\frac\{R\}\{\\omega\s*L\}/.test(t.trim()),
    legend: "Q = quality factor (dimensionless) · R = resistance (Ω) · ω = angular frequency (rad/s) · L = inductance (H)",
  },
  {
    test: (t) => /^V\s*=\s*I\s*\\times\s*X_L/.test(t.trim()),
    legend: "V = voltage across the inductor (V) · I = current (A) · X_L = inductive reactance (Ω)",
  },
  {
    test: (t) => t.includes("X_C") && t.includes("2") && t.includes("\\pi"),
    legend:
      "X_C = capacitive reactance (Ω) · f = frequency (Hz) · C = capacitance (F)",
  },
  {
    test: (t) => t.includes("X_L") && t.includes("2") && t.includes("\\pi"),
    legend: "X_L = inductive reactance (Ω) · f = frequency (Hz) · L = inductance (H)",
  },
  {
    test: (t) => t.includes("\\Delta t") && t.includes("\\Delta f"),
    legend:
      "Δt = duration/uncertainty in time · Δf = uncertainty in frequency (bandwidth)" +
      " — the two can't both be made arbitrarily small at once",
  },
  {
    test: (t) => /^\\omega\s*=\s*2\s*\\pi\s*f/.test(t.trim()),
    legend: "ω = angular frequency (rad/s) · f₀ = frequency (Hz)",
  },
  {
    test: (t) => (t.includes("f_0") || t.includes("f_r")) && t.includes("LC"),
    legend:
      "f₀ (or f_r) = resonant frequency (Hz) · L = inductance (H) · C = capacitance (F)",
  },
  {
    test: (t) => t.includes("Capitalized Worth"),
    legend: "Capitalized Worth = present value of a perpetual annual cost · i = interest rate (per period)",
  },
  {
    test: (t) => t.includes("Effective Annual Rate"),
    legend: "r = nominal annual interest rate · n = number of compounding periods per year",
  },
  {
    test: (t) => t.includes("Effective Rate") && t.includes("e^"),
    legend: "r = nominal annual interest rate · e = Euler's number (≈2.71828), used for continuous compounding",
  },
  {
    test: (t) => t.includes("Coding Gain"),
    legend: "d_free = free distance of the code (a measure of its error-correcting strength)",
  },
  {
    test: (t) => t.includes("Time per cycle") || t.includes("Clock frequency"),
    legend: "Time per cycle = 1 / clock frequency — the duration of one clock pulse",
  },
  {
    test: (t) => t.includes("Turnaround Time"),
    legend: "Turnaround Time = Completion Time − Arrival Time, in a CPU-scheduling timeline",
  },
  {
    test: (t) => t.includes("Annual Depreciation"),
    legend: "Annual Depreciation = (purchase cost) / (useful life in years), under straight-line depreciation",
  },
  {
    test: (t) => /f\(x\)\s*=.*e\^\{?-?x\}?/.test(t) && t.includes("1"),
    legend: "f(x) = sigmoid activation function · x = weighted input to the neuron · e = Euler's number (≈2.71828)",
  },
  {
    test: (t) => t.includes("C") && t.includes("\\epsilon") && t.includes("\\frac{A}{D}"),
    legend:
      "C = capacitance (F) · ε (epsilon) = permittivity of the dielectric" +
      " · A = plate area (m²) · D = distance between plates (m)",
  },
  {
    test: (t) => t.includes("R_{star}") || t.includes("R_{delta}") || t.includes("R_star") || t.includes("R_delta"),
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
