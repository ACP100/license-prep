import type { TopicId } from "./topics";

export interface QuestionOccurrence {
  source: string;
  label: string;
}

export interface Question {
  id: string;
  t: TopicId;
  sub: string;
  text: string;
  options: string[];
  answer: number;
  explanation: string;
  occurrences: QuestionOccurrence[];
}

const questionData: Question[] = [
 {
  "id": "q-b09d141a7f-0",
  "t": 1,
  "sub": "1.1",
  "text": "Which of the following is a passive circuit element?",
  "options": [
   "Voltage source",
   "Current source",
   "Resistor",
   "Transistor amplifier"
  ],
  "answer": 2,
  "explanation": "Passive elements (R, L, C) only dissipate or store energy. Sources and amplifiers deliver energy, so they are active. (The original recalled options listed 'Transformer', which is also passive, so that option was replaced here.)",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-50d7c60941-1",
  "t": 1,
  "sub": "1.1",
  "text": "Resistors connected in parallel act as a ___ divider.",
  "options": [
   "Voltage",
   "Current",
   "Power",
   "Frequency"
  ],
  "answer": 1,
  "explanation": "Parallel branches share the same voltage and split the total current, so a parallel network is a current divider. Series resistors divide voltage.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-00115f9a07-2",
  "t": 1,
  "sub": "1.1",
  "text": "Ohm (Ω) is the SI unit of all of the following EXCEPT:",
  "options": [
   "Inductive reactance",
   "Capacitive reactance",
   "Resistance",
   "Capacitance"
  ],
  "answer": 3,
  "explanation": "Capacitance is measured in farads. Resistance, reactance and impedance are all in ohms.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-c9d2a57070-3",
  "t": 1,
  "sub": "1.1",
  "text": "A balanced star load has impedance Z1 per phase and an equivalent delta has Z2 per phase. The relation is:",
  "options": [
   "Z2 = Z1",
   "Z2 = 2Z1",
   "Z2 = 3Z1",
   "Z2 = Z1/3"
  ],
  "answer": 2,
  "explanation": "For balanced loads Z_Δ = 3·Z_Y (and Z_Y = Z_Δ/3).",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-fcd0f7e615-4",
  "t": 1,
  "sub": "1.1",
  "text": "Kirchhoff's current law is based on the conservation of:",
  "options": [
   "Energy",
   "Charge",
   "Momentum",
   "Power"
  ],
  "answer": 1,
  "explanation": "KCL: charge cannot accumulate at a node, so currents in = currents out. KVL is based on conservation of energy.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-470adb8582-5",
  "t": 1,
  "sub": "1.2",
  "text": "When applying the superposition theorem, what should be done with a dependent source?",
  "options": [
   "Remove it completely",
   "Replace it with its internal resistance",
   "Keep it active",
   "Replace it with an open circuit"
  ],
  "answer": 2,
  "explanation": "Only independent sources are switched off (voltage sources shorted, current sources opened). Dependent sources stay in the circuit because they depend on circuit variables.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-19ccb19787-6",
  "t": 1,
  "sub": "1.2",
  "text": "The superposition theorem can be applied to:",
  "options": [
   "Linear circuits",
   "Non-linear circuits",
   "Circuits with diodes only",
   "Any circuit"
  ],
  "answer": 0,
  "explanation": "Superposition needs linearity (additivity and homogeneity). It does not apply to non-linear circuits or directly to power.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-0dddac42e5-7",
  "t": 1,
  "sub": "1.2",
  "text": "Maximum power is transferred to a load when:",
  "options": [
   "R_L = 0",
   "R_L = R_th",
   "R_L = 2R_th",
   "R_L is infinite"
  ],
  "answer": 1,
  "explanation": "Maximum power transfer occurs at R_L = R_th, giving P_max = V_th²/4R_th at 50% efficiency.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-400046c9ec-8",
  "t": 1,
  "sub": "1.2",
  "text": "At resonance in a series RLC circuit:",
  "options": [
   "Impedance is maximum",
   "Current is minimum",
   "Impedance is minimum and equals R",
   "Power factor is zero"
  ],
  "answer": 2,
  "explanation": "X_L = X_C cancel, so Z = R (minimum), current is maximum and power factor is unity.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-5bc3b3db80-9",
  "t": 1,
  "sub": "1.3",
  "text": "In three-phase systems, which configuration has a neutral point that is grounded?",
  "options": [
   "Star",
   "Delta",
   "Bridge",
   "Both star and delta equally"
  ],
  "answer": 0,
  "explanation": "Star (Y) has a common neutral point that can be earthed. Delta forms a closed loop with no neutral.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-aec35c4b2e-10",
  "t": 1,
  "sub": "1.3",
  "text": "Two sinusoids of the same frequency but different amplitude and phase are subtracted. The result is:",
  "options": [
   "A sinusoid of the same frequency",
   "A cosine wave of double frequency",
   "A square wave",
   "A constant"
  ],
  "answer": 0,
  "explanation": "Phasor subtraction at one frequency gives another phasor at that frequency, with new amplitude and phase.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-06c59187b8-11",
  "t": 1,
  "sub": "1.3",
  "text": "Find the time period of y(t) = 5 sin(4t + π/6).",
  "options": [
   "π/4 s",
   "π/2 s",
   "2π s",
   "4 s"
  ],
  "answer": 1,
  "explanation": "ω = 4 rad/s, so T = 2π/ω = 2π/4 = π/2 s. The phase does not affect the period.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-d0b6f30f3c-12",
  "t": 1,
  "sub": "1.3",
  "text": "The rms value of a sine wave with peak value V_m is:",
  "options": [
   "V_m/2",
   "V_m/√2",
   "2V_m/π",
   "√2·V_m"
  ],
  "answer": 1,
  "explanation": "V_rms = V_m/√2 ≈ 0.707V_m. The half-cycle average is 2V_m/π ≈ 0.637V_m.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-133e720aab-13",
  "t": 1,
  "sub": "1.3",
  "text": "In a balanced star-connected system, line voltage equals:",
  "options": [
   "Phase voltage",
   "√3 × phase voltage",
   "3 × phase voltage",
   "Phase voltage / √3"
  ],
  "answer": 1,
  "explanation": "Star: V_L = √3·V_ph and I_L = I_ph. Delta: I_L = √3·I_ph and V_L = V_ph.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e0565457b9-14",
  "t": 1,
  "sub": "1.4",
  "text": "The main advantage of CMOS technology over bipolar technology is:",
  "options": [
   "Higher speed",
   "Better analog performance",
   "Lower power consumption",
   "Larger circuit size"
  ],
  "answer": 2,
  "explanation": "In CMOS one transistor of each pair is off in steady state, so it draws power mainly while switching.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-469415bc74-15",
  "t": 1,
  "sub": "1.4",
  "text": "Which is the most stable BJT biasing technique?",
  "options": [
   "Fixed bias",
   "Collector-to-base bias",
   "Voltage divider bias",
   "Emitter bias without bypass"
  ],
  "answer": 2,
  "explanation": "Voltage divider bias makes the Q-point almost independent of β, so it is the most stable and the most widely used.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-7b9a93762a-16",
  "t": 1,
  "sub": "1.4",
  "text": "The voltage gain of a common collector (emitter follower) amplifier is approximately:",
  "options": [
   "0",
   "1",
   "100",
   "Very high"
  ],
  "answer": 1,
  "explanation": "An emitter follower has voltage gain just below 1, high input impedance and low output impedance. It is used as a buffer.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-4efeb8205d-17",
  "t": 1,
  "sub": "1.4",
  "text": "A MOSFET has very high input impedance because:",
  "options": [
   "Its channel is heavily doped",
   "The gate is insulated by an oxide layer",
   "It uses both electrons and holes",
   "Its drain is grounded"
  ],
  "answer": 1,
  "explanation": "The gate is separated from the channel by SiO₂, so almost no gate current flows.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-3e3f1797d2-18",
  "t": 1,
  "sub": "1.5",
  "text": "Oscillators work on which type of feedback?",
  "options": [
   "Positive",
   "Negative",
   "No feedback",
   "Both alternately"
  ],
  "answer": 0,
  "explanation": "Oscillators use positive (regenerative) feedback. Negative feedback is used to stabilize amplifiers.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-395fd6a607-19",
  "t": 1,
  "sub": "1.5",
  "text": "A multivibrator is a type of:",
  "options": [
   "Sinusoidal oscillator",
   "Non-sinusoidal (relaxation) oscillator",
   "Tuned amplifier",
   "Rectifier"
  ],
  "answer": 1,
  "explanation": "Multivibrators produce square/rectangular waves, so they are non-sinusoidal (relaxation) oscillators.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-6963cbcea0-20",
  "t": 1,
  "sub": "1.5",
  "text": "The Barkhausen criterion for sustained oscillation is:",
  "options": [
   "|Aβ| < 1, phase 180°",
   "|Aβ| = 1, loop phase 0° or 360°",
   "|Aβ| > 10",
   "Aβ = −1, phase 90°"
  ],
  "answer": 1,
  "explanation": "Loop gain magnitude must be 1 and total phase shift around the loop 0° (360°).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-2241bd117c-21",
  "t": 1,
  "sub": "1.5",
  "text": "In an RC phase-shift oscillator, the RC network provides a phase shift of:",
  "options": [
   "90°",
   "120°",
   "180°",
   "360°"
  ],
  "answer": 2,
  "explanation": "Three RC sections give 180°; the inverting amplifier gives the other 180°, totalling 360°.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-1d99f6145a-22",
  "t": 1,
  "sub": "1.5",
  "text": "Crystal oscillators are preferred mainly for their:",
  "options": [
   "High output power",
   "Frequency stability",
   "Low cost",
   "Wide tuning range"
  ],
  "answer": 1,
  "explanation": "The quartz crystal has a very high Q, giving excellent frequency stability.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-ef04ca7d09-23",
  "t": 1,
  "sub": "1.6",
  "text": "The maximum efficiency of a series-fed (resistive load) Class A amplifier is:",
  "options": [
   "25%",
   "50%",
   "78.5%",
   "90%"
  ],
  "answer": 0,
  "explanation": "Series-fed Class A: 25%. Transformer-coupled Class A: 50%. Class B push-pull: 78.5% (π/4). The recalled explanation that gave π/4 for Class A was wrong; π/4 belongs to Class B.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-1fb3d51b50-24",
  "t": 1,
  "sub": "1.6",
  "text": "A Class B amplifier transistor is biased at:",
  "options": [
   "Saturation",
   "Cut-off",
   "Centre of the load line",
   "Active region"
  ],
  "answer": 1,
  "explanation": "Class B is biased at cut-off, so each transistor conducts for 180°.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-7e52ec43fa-25",
  "t": 1,
  "sub": "1.6",
  "text": "A tuned amplifier uses which type of filter?",
  "options": [
   "Low pass",
   "High pass",
   "Band pass",
   "All pass"
  ],
  "answer": 2,
  "explanation": "A tuned (LC) amplifier amplifies a narrow band around its resonant frequency, so it acts as a band-pass filter.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-09edf25850-26",
  "t": 1,
  "sub": "1.6",
  "text": "Crossover distortion occurs in which amplifier class, and is removed by which?",
  "options": [
   "Class A; Class B",
   "Class B; Class AB",
   "Class C; Class A",
   "Class AB; Class B"
  ],
  "answer": 1,
  "explanation": "Class B transistors need ~0.7 V to turn on, causing crossover distortion. Class AB adds a small bias to remove it.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-c353725169-27",
  "t": 1,
  "sub": "1.6",
  "text": "An ideal op-amp has:",
  "options": [
   "Zero input impedance",
   "Infinite output impedance",
   "Infinite input impedance and zero output impedance",
   "Unity open-loop gain"
  ],
  "answer": 2,
  "explanation": "Ideal op-amp: infinite gain, infinite input impedance, zero output impedance, infinite bandwidth.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-5c1f99abb2-28",
  "t": 2,
  "sub": "2.1",
  "text": "Which gates are called universal gates?",
  "options": [
   "AND and OR",
   "NAND and NOR",
   "XOR and XNOR",
   "NOT and AND"
  ],
  "answer": 1,
  "explanation": "Any Boolean function can be built from only NAND gates or only NOR gates.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-24f8e04758-29",
  "t": 2,
  "sub": "2.1",
  "text": "(10110110)₂ in hexadecimal is:",
  "options": [
   "B6",
   "6B",
   "D6",
   "A6"
  ],
  "answer": 0,
  "explanation": "Group in 4s: 1011 = B, 0110 = 6 → B6H.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f88cbc6b10-30",
  "t": 2,
  "sub": "2.1",
  "text": "By De Morgan's theorem, (A·B)' equals:",
  "options": [
   "A'·B'",
   "A' + B'",
   "A + B",
   "(A + B)'"
  ],
  "answer": 1,
  "explanation": "(AB)' = A' + B' and (A + B)' = A'B'.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-b45c2e4495-31",
  "t": 2,
  "sub": "2.1",
  "text": "An expression written as a conjunction (AND) of disjunctions (ORs) is in:",
  "options": [
   "Sum of Products / DNF",
   "Product of Sums / CNF",
   "Backus–Naur form",
   "Canonical SOP"
  ],
  "answer": 1,
  "explanation": "AND of OR-terms = Product of Sums, also called Conjunctive Normal Form. OR of AND-terms is SOP/DNF.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-6e799a6e9d-32",
  "t": 2,
  "sub": "2.1",
  "text": "In a 4-variable K-map, a group of 8 adjacent 1s eliminates how many variables?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "answer": 2,
  "explanation": "A group of 2ᵏ cells removes k variables. 8 = 2³, so 3 variables drop out, leaving one literal.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-598efb73a1-33",
  "t": 2,
  "sub": "2.2",
  "text": "How many half adders and full adders are needed for a 4-bit ripple-carry adder?",
  "options": [
   "2 half, 2 full",
   "1 half, 3 full",
   "0 half, 2 full",
   "4 half, 0 full"
  ],
  "answer": 1,
  "explanation": "The LSB has no carry-in, so it uses a half adder. The other three bits use full adders.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-a14ba83d1e-34",
  "t": 2,
  "sub": "2.2",
  "text": "To correct an invalid BCD sum (greater than 9), we add:",
  "options": [
   "0011",
   "0110",
   "1001",
   "1111"
  ],
  "answer": 1,
  "explanation": "Adding 6 (0110) skips the six unused codes 1010–1111 and produces the correct BCD digit with carry.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-e0231d1a98-35",
  "t": 2,
  "sub": "2.2",
  "text": "Which of the following is NOT an encoder?",
  "options": [
   "8-to-3",
   "4-to-2",
   "16-to-4",
   "5-to-32"
  ],
  "answer": 3,
  "explanation": "An encoder has 2ⁿ inputs and n outputs. 5-to-32 has more outputs than inputs, which is a decoder.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-1aff6b3178-36",
  "t": 2,
  "sub": "2.2",
  "text": "An 8-to-1 multiplexer needs how many select lines?",
  "options": [
   "2",
   "3",
   "4",
   "8"
  ],
  "answer": 1,
  "explanation": "2ⁿ inputs need n select lines; 8 = 2³.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-6c7f8e6d0c-37",
  "t": 2,
  "sub": "2.2",
  "text": "The 2's complement of 0101 is:",
  "options": [
   "1010",
   "1011",
   "0110",
   "1101"
  ],
  "answer": 1,
  "explanation": "Invert → 1010, add 1 → 1011 (which represents −5 in 4 bits).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-c060509fe8-38",
  "t": 2,
  "sub": "2.3",
  "text": "The maximum count of a 4-bit ripple counter is:",
  "options": [
   "4",
   "8",
   "15",
   "16"
  ],
  "answer": 2,
  "explanation": "A 4-bit counter is mod-16 and counts 0 to 15. Maximum count = 2ⁿ − 1.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-11d73d3807-39",
  "t": 2,
  "sub": "2.3",
  "text": "Which of the following is NOT a type of shift register?",
  "options": [
   "SIPI",
   "SISO",
   "PISO",
   "SIPO"
  ],
  "answer": 0,
  "explanation": "The four types are SISO, SIPO, PISO and PIPO. SIPI does not exist.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-8634e0c9d5-40",
  "t": 2,
  "sub": "2.3",
  "text": "The race-around condition in a JK flip-flop is avoided by using:",
  "options": [
   "SR flip-flop",
   "Master–slave JK flip-flop",
   "D latch",
   "Asynchronous reset"
  ],
  "answer": 1,
  "explanation": "Race-around happens when J = K = 1 and the clock pulse is longer than the propagation delay. Master–slave (or edge triggering) fixes it.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-9f0f9f61a1-41",
  "t": 2,
  "sub": "2.3",
  "text": "In a synchronous counter:",
  "options": [
   "Each flip-flop is clocked by the previous one",
   "All flip-flops receive the same clock",
   "Only the first flip-flop is clocked",
   "No clock is used"
  ],
  "answer": 1,
  "explanation": "All flip-flops share the clock, so there is no ripple delay. Asynchronous (ripple) counters clock each stage from the previous output.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-b3ab76d3b0-42",
  "t": 2,
  "sub": "2.4",
  "text": "What addressing mode does the 8085 instruction MOV A, M use?",
  "options": [
   "Register",
   "Register indirect",
   "Direct",
   "Immediate"
  ],
  "answer": 1,
  "explanation": "M is the memory location whose address is in the HL pair, so the operand is addressed indirectly through a register pair.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-6e0efc9169-43",
  "t": 2,
  "sub": "2.4",
  "text": "The 8086 microprocessor can operate in which modes?",
  "options": [
   "Minimum and maximum",
   "Internal and external",
   "Real and virtual only",
   "Single and dual"
  ],
  "answer": 0,
  "explanation": "MN/MX' pin selects minimum mode (single processor) or maximum mode (with 8288 bus controller / coprocessors).",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-5398dad272-44",
  "t": 2,
  "sub": "2.4",
  "text": "The 8085 has a 16-bit address bus. How much memory can it address?",
  "options": [
   "16 KB",
   "32 KB",
   "64 KB",
   "1 MB"
  ],
  "answer": 2,
  "explanation": "2¹⁶ = 65,536 bytes = 64 KB. The 8086 has 20 address lines → 1 MB.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-9ca8cf3957-45",
  "t": 2,
  "sub": "2.4",
  "text": "What does the ALE signal in the 8085 do?",
  "options": [
   "Enables the ALU",
   "Latches the lower-order address from the multiplexed AD0–AD7 bus",
   "Acknowledges interrupts",
   "Resets the processor"
  ],
  "answer": 1,
  "explanation": "Address Latch Enable goes high in T1 so an external latch can separate A0–A7 from the multiplexed address/data bus.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-cd85a5f36c-46",
  "t": 2,
  "sub": "2.4",
  "text": "Minimum number of bits needed to represent the memory address 2000H:",
  "options": [
   "12",
   "13",
   "14",
   "16"
  ],
  "answer": 2,
  "explanation": "2000H = 0010 0000 0000 0000₂. The highest 1 is bit 13, so 14 bits are needed.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-badf4f0500-47",
  "t": 2,
  "sub": "2.5",
  "text": "A microprocessor can directly execute a program only when it is stored in:",
  "options": [
   "Secondary memory",
   "Main memory",
   "Program counter",
   "Hard disk"
  ],
  "answer": 1,
  "explanation": "The CPU fetches instructions from main memory (RAM/ROM). Programs on secondary storage must be loaded first.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-4cbefeeeec-48",
  "t": 2,
  "sub": "2.5",
  "text": "A DMA transfer is requested (initiated) by:",
  "options": [
   "The processor",
   "The I/O device",
   "Memory",
   "The running process"
  ],
  "answer": 1,
  "explanation": "The I/O device asserts a DMA request; the DMA controller sends HOLD and the CPU responds with HLDA, giving up the bus.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-d03a484373-49",
  "t": 2,
  "sub": "2.5",
  "text": "RS-232 is a standard for:",
  "options": [
   "Parallel communication",
   "Serial communication",
   "Wireless communication",
   "Memory interfacing"
  ],
  "answer": 1,
  "explanation": "RS-232 defines the electrical/physical interface for serial communication, typically driven by a UART/USART.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-9eef67d779-50",
  "t": 2,
  "sub": "2.5",
  "text": "The 8255 PPI provides how many I/O ports?",
  "options": [
   "Two 8-bit",
   "Three 8-bit",
   "Four 4-bit",
   "One 16-bit"
  ],
  "answer": 1,
  "explanation": "Ports A, B and C (C splits into two 4-bit halves) give 24 programmable I/O lines.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-cf88c19011-51",
  "t": 2,
  "sub": "2.5",
  "text": "In asynchronous serial transmission, each character is framed by:",
  "options": [
   "A clock signal",
   "Start and stop bits",
   "Sync characters",
   "Parity only"
  ],
  "answer": 1,
  "explanation": "Asynchronous transmission has no shared clock, so each character carries a start bit and one or more stop bits.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-ef4c4f3426-52",
  "t": 2,
  "sub": "2.6",
  "text": "INT 3 is used for:",
  "options": [
   "Divide-by-zero",
   "Debugger breakpoint",
   "System call",
   "Hardware interrupt"
  ],
  "answer": 1,
  "explanation": "INT 3 (one-byte opcode CCH) is the breakpoint interrupt used by debuggers.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-c34b2328f5-53",
  "t": 2,
  "sub": "2.6",
  "text": "Which is the non-maskable interrupt of the 8085?",
  "options": [
   "RST 7.5",
   "RST 6.5",
   "RST 5.5",
   "TRAP"
  ],
  "answer": 3,
  "explanation": "TRAP cannot be masked and has the highest priority.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-5b8ad3321f-54",
  "t": 2,
  "sub": "2.6",
  "text": "TRAP in the 8085 is:",
  "options": [
   "Positive-edge triggered only",
   "Level triggered only",
   "Both edge and level triggered",
   "Negative-edge triggered"
  ],
  "answer": 2,
  "explanation": "TRAP is both edge- and level-sensitive, which prevents false triggering. RST 7.5 is edge triggered; RST 6.5 and 5.5 are level triggered.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-7ad64daafe-55",
  "t": 2,
  "sub": "2.6",
  "text": "RST 0 to RST 7 instructions in the 8085 are:",
  "options": [
   "Hardware interrupts",
   "Software interrupts",
   "Non-maskable interrupts",
   "Vectored hardware interrupts"
  ],
  "answer": 1,
  "explanation": "RST 0–7 are one-byte software interrupt instructions that jump to 8 × n.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-7be379bd44-56",
  "t": 2,
  "sub": "2.6",
  "text": "An interrupt that can be ignored (disabled) by the processor is called:",
  "options": [
   "Non-maskable",
   "Maskable",
   "Vectored",
   "Software"
  ],
  "answer": 1,
  "explanation": "Maskable interrupts can be disabled with DI or masks; non-maskable (e.g. TRAP) cannot.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-e3c618bf84-57",
  "t": 3,
  "sub": "3.1",
  "text": "Converting high-level code to machine/assembly code in one go before execution is called:",
  "options": [
   "Interpretation",
   "Compilation",
   "Linking",
   "Loading"
  ],
  "answer": 1,
  "explanation": "A compiler translates the whole program; an interpreter executes line by line; the linker combines object files; the loader places them in memory.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-3647f1c187-58",
  "t": 3,
  "sub": "3.1",
  "text": "Which standard C function reads a single character from the keyboard?",
  "options": [
   "scanf()",
   "getchar()",
   "puts()",
   "gets()"
  ],
  "answer": 1,
  "explanation": "getchar() is the standard (stdio.h) single-character input function. getch() from conio.h also reads one character without Enter, but it is non-standard. The recalled key said getch(); if both appear and the question says 'without pressing Enter', choose getch().",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-98f1fc379e-59",
  "t": 3,
  "sub": "3.1",
  "text": "Which of these cannot be used as a variable name in C?",
  "options": [
   "cat",
   "_total",
   "while",
   "sum1"
  ],
  "answer": 2,
  "explanation": "while is a keyword. Identifiers may contain letters, digits and underscores, and must not start with a digit.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-bc5c084cf4-60",
  "t": 3,
  "sub": "3.1",
  "text": "What does printf(\"%d\", 7/2); print in C?",
  "options": [
   "3.5",
   "3",
   "4",
   "Compile error"
  ],
  "answer": 1,
  "explanation": "Both operands are int, so integer division truncates: 7/2 = 3.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-9227d69e4d-61",
  "t": 3,
  "sub": "3.1",
  "text": "int i = 5; printf(\"%d\", i++ + 1); prints:",
  "options": [
   "5",
   "6",
   "7",
   "Undefined"
  ],
  "answer": 1,
  "explanation": "Post-increment uses the old value 5, so 5 + 1 = 6 is printed; i becomes 6 afterwards.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f7836ad891-62",
  "t": 3,
  "sub": "3.2",
  "text": "What value is EOF defined as in stdio.h?",
  "options": [
   "0",
   "1",
   "-1",
   "'\\0'"
  ],
  "answer": 2,
  "explanation": "EOF is a negative integer constant, −1 in practically all implementations.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-9435269e31-63",
  "t": 3,
  "sub": "3.2",
  "text": "The size of a union is:",
  "options": [
   "Sum of all member sizes",
   "Size of the largest member (plus padding)",
   "Size of the first member",
   "Always 4 bytes"
  ],
  "answer": 1,
  "explanation": "Union members share the same memory, so it is as large as its largest member. A structure is at least the sum of its members.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-ffd437421d-64",
  "t": 3,
  "sub": "3.2",
  "text": "If int *p points to address 1000 and int is 4 bytes, p + 1 points to:",
  "options": [
   "1001",
   "1002",
   "1004",
   "1008"
  ],
  "answer": 2,
  "explanation": "Pointer arithmetic scales by the size of the pointed-to type: 1000 + 1×4 = 1004.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-4d9802743c-65",
  "t": 3,
  "sub": "3.2",
  "text": "How is a structure passed to a function by pointer in C?",
  "options": [
   "void f(struct st p) called as f(s)",
   "void f(struct st *p) called as f(&s)",
   "void f(struct st &p) called as f(s)",
   "void f(&p) called as f(*s)"
  ],
  "answer": 1,
  "explanation": "The parameter is a pointer to the structure and the caller passes the address with &. Members are then accessed with p->member. References (&p) exist only in C++.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-f7d0881f60-66",
  "t": 3,
  "sub": "3.2",
  "text": "Which C function moves the file pointer to a specific position (random access)?",
  "options": [
   "fgets()",
   "fseek()",
   "fputc()",
   "fclose()"
  ],
  "answer": 1,
  "explanation": "fseek(fp, offset, origin) with SEEK_SET, SEEK_CUR or SEEK_END. ftell() reports the position and rewind() goes to the start.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-483289b701-67",
  "t": 3,
  "sub": "3.3",
  "text": "Which access specifier makes members accessible within the class and its derived classes only?",
  "options": [
   "Public",
   "Private",
   "Protected",
   "Internal"
  ],
  "answer": 2,
  "explanation": "Protected members are visible to the class and its derived classes but not to outside code.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-9357303a21-68",
  "t": 3,
  "sub": "3.3",
  "text": "Bundling data and methods in a class and hiding them from outside interference is:",
  "options": [
   "Polymorphism",
   "Inheritance",
   "Encapsulation",
   "Abstraction"
  ],
  "answer": 2,
  "explanation": "Encapsulation = wrapping data and functions together with controlled access (data hiding).",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-954055857c-69",
  "t": 3,
  "sub": "3.3",
  "text": "Which statement about static member functions in C++ is true?",
  "options": [
   "They can be virtual",
   "They have no this pointer",
   "They can access non-static members directly",
   "They can never be overloaded"
  ],
  "answer": 1,
  "explanation": "Static member functions belong to the class, not an object, so they have no this pointer, cannot be virtual and cannot touch non-static members directly. They CAN be overloaded with each other; the recalled key 'cannot be overloaded' is wrong for standard C++.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-dd5d2785f0-70",
  "t": 3,
  "sub": "3.3",
  "text": "Default member access in C++:",
  "options": [
   "struct private, class public",
   "struct public, class private",
   "Both public",
   "Both private"
  ],
  "answer": 1,
  "explanation": "Members of a struct are public by default; members of a class are private by default.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-b8d04b6f9e-71",
  "t": 3,
  "sub": "3.3",
  "text": "An inline function:",
  "options": [
   "Is always placed in a separate file",
   "Asks the compiler to substitute the function body at the call site",
   "Cannot take arguments",
   "Must be virtual"
  ],
  "answer": 1,
  "explanation": "inline is a request to expand the body at each call, removing call overhead for small functions.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-6cca15c467-72",
  "t": 3,
  "sub": "3.3",
  "text": "A friend function of a class:",
  "options": [
   "Is a member function of that class",
   "Can access the class's private members but is not a member",
   "Is inherited by derived classes",
   "Must be static"
  ],
  "answer": 1,
  "explanation": "A friend is declared inside the class with the friend keyword but is not a member. Friendship is not inherited.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-2b44d074cf-73",
  "t": 3,
  "sub": "3.4",
  "text": "When a derived class object is created, which constructor runs first?",
  "options": [
   "Derived only",
   "Base, then derived",
   "Derived, then base",
   "Both simultaneously"
  ],
  "answer": 1,
  "explanation": "Base constructors run first, then the derived constructor. Destructors run in reverse order.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-21e9910d1c-74",
  "t": 3,
  "sub": "3.4",
  "text": "The main advantage of hybrid inheritance is:",
  "options": [
   "Code reusability",
   "Reduced memory",
   "Faster compilation",
   "Simpler syntax"
  ],
  "answer": 0,
  "explanation": "Combining inheritance types lets a class reuse code from several sources. Watch for the diamond problem.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-2be81dca51-75",
  "t": 3,
  "sub": "3.4",
  "text": "class Derived : public Base1, public Base2 { ... }; Each constructor prints its name. Creating a Derived object prints:",
  "options": [
   "Base1 Base2 Derived",
   "Base2 Base1 Derived",
   "Derived Base1 Base2",
   "Derived Base2 Base1"
  ],
  "answer": 0,
  "explanation": "Base constructors run in the order the bases are listed in the class declaration, then the derived constructor.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-9887cc7fc7-76",
  "t": 3,
  "sub": "3.4",
  "text": "Which operator cannot be overloaded in C++?",
  "options": [
   "+",
   "[]",
   "::",
   "()"
  ],
  "answer": 2,
  "explanation": "Not overloadable: :: (scope), . (member), .* , ?: and sizeof.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-4cb6c01215-77",
  "t": 3,
  "sub": "3.4",
  "text": "Correct member-function syntax for overloading unary minus in class T:",
  "options": [
   "T operator-(T a, T b);",
   "T operator-();",
   "void -operator();",
   "T operator(-)();"
  ],
  "answer": 1,
  "explanation": "A unary operator as a member takes no arguments; it acts on *this. As a friend it takes one argument.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-34063ee792-78",
  "t": 3,
  "sub": "3.4",
  "text": "The ambiguity of multipath (diamond) inheritance is resolved using:",
  "options": [
   "Friend classes",
   "Virtual base classes",
   "Templates",
   "Static members"
  ],
  "answer": 1,
  "explanation": "Declaring the common base as virtual ensures only one copy of it in the final derived object.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-036a80edbc-79",
  "t": 3,
  "sub": "3.5",
  "text": "Which flag positions a C++ file pointer at the start of the file?",
  "options": [
   "ios::first",
   "ios::beg",
   "ios::start",
   "ios::begin"
  ],
  "answer": 1,
  "explanation": "Seek directions are ios::beg, ios::cur and ios::end, e.g. file.seekg(0, ios::beg).",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-fb781e63b3-80",
  "t": 3,
  "sub": "3.5",
  "text": "Which header is needed to use ifstream?",
  "options": [
   "<iostream>",
   "<fstream>",
   "<stdio.h>",
   "<iomanip>"
  ],
  "answer": 1,
  "explanation": "<fstream> defines ifstream, ofstream and fstream. <iomanip> has manipulators like setw.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-b5838156cc-81",
  "t": 3,
  "sub": "3.5",
  "text": "class A { public: virtual void display(){ cout<<\"A\"; } }; class B : public A { public: void display() override { cout<<\"B\"; } }; A* p = new B(); p->display(); prints:",
  "options": [
   "A",
   "B",
   "AB",
   "Nothing"
  ],
  "answer": 1,
  "explanation": "display is virtual, so the call is resolved at run time (dynamic binding) using the actual object type, B.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-871183f937-82",
  "t": 3,
  "sub": "3.5",
  "text": "A class containing at least one pure virtual function is:",
  "options": [
   "A friend class",
   "An abstract class",
   "A template class",
   "A static class"
  ],
  "answer": 1,
  "explanation": "virtual void f() = 0; makes the class abstract: it cannot be instantiated and derived classes must override f.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-aca35f1a62-83",
  "t": 3,
  "sub": "3.5",
  "text": "Dynamic binding means:",
  "options": [
   "Linking libraries at compile time",
   "Deciding which function to call at run time",
   "Allocating memory with new",
   "Binding variables to registers"
  ],
  "answer": 1,
  "explanation": "Also called late binding; achieved with virtual functions through base-class pointers or references.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-37b0d18514-84",
  "t": 3,
  "sub": "3.6",
  "text": "In C++, an exception is:",
  "options": [
   "A type of inheritance",
   "A run-time anomaly that is handled with try, throw and catch",
   "A compile-time syntax error",
   "A class template"
  ],
  "answer": 1,
  "explanation": "Exceptions are abnormal conditions at run time. The recalled answer 'a special function' is not accurate; pick the option describing a run-time error/abnormal condition.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-c1613f3cf2-85",
  "t": 3,
  "sub": "3.6",
  "text": "In the STL, containers primarily hold:",
  "options": [
   "Functions and algorithms",
   "Data elements and their organization",
   "Only iterators",
   "Memory addresses"
  ],
  "answer": 1,
  "explanation": "Containers (vector, list, map, ...) store data; algorithms operate on them through iterators.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-b709c2d8f1-86",
  "t": 3,
  "sub": "3.6",
  "text": "Which catch block catches every exception?",
  "options": [
   "catch(all)",
   "catch(...)",
   "catch(*)",
   "catch(exception)"
  ],
  "answer": 1,
  "explanation": "catch(...) is the catch-all handler and should be placed last.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-81519da71f-87",
  "t": 3,
  "sub": "3.6",
  "text": "A function template is declared with:",
  "options": [
   "template <class T>",
   "generic <T>",
   "typedef T",
   "virtual template"
  ],
  "answer": 0,
  "explanation": "template <class T> or template <typename T> before the function definition.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-fe877379d0-88",
  "t": 3,
  "sub": "3.6",
  "text": "try { throw 20; } catch (int e) { cout << \"Exception caught: \" << e; } prints:",
  "options": [
   "Exception caught: 20",
   "Nothing",
   "Compile error",
   "Runtime abort"
  ],
  "answer": 0,
  "explanation": "An int is thrown and caught by the matching catch(int) handler.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-11fc6ec97a-89",
  "t": 4,
  "sub": "4.1",
  "text": "Which is a characteristic of CISC architecture?",
  "options": [
   "Fixed-length simple instructions",
   "Only load/store instructions access memory",
   "A large set of complex, variable-length instructions",
   "All instructions execute in one cycle"
  ],
  "answer": 2,
  "explanation": "CISC has many complex instructions of variable length and many addressing modes. The other three options describe RISC. (The recalled option 'small number of complex instructions' was wrong.)",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-de60498f50-90",
  "t": 4,
  "sub": "4.1",
  "text": "Which is a feature of RISC processors?",
  "options": [
   "Microprogrammed complex instructions",
   "Variable instruction length",
   "Load/store architecture with fixed-length instructions",
   "Few registers"
  ],
  "answer": 2,
  "explanation": "RISC: simple fixed-length instructions, many registers, hardwired control, load/store, pipeline-friendly.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-72271a7f58-91",
  "t": 4,
  "sub": "4.1",
  "text": "An instruction needs the result of the previous instruction that has not finished. This pipeline hazard is a:",
  "options": [
   "Structural hazard",
   "Data hazard",
   "Control hazard",
   "Memory hazard"
  ],
  "answer": 1,
  "explanation": "Data hazards come from data dependencies; control hazards from branches; structural hazards from resource conflicts.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-972cb596fd-92",
  "t": 4,
  "sub": "4.1",
  "text": "In a microprogrammed control unit, control signals are stored in:",
  "options": [
   "Cache",
   "Control memory",
   "Registers only",
   "Hard disk"
  ],
  "answer": 1,
  "explanation": "Microinstructions live in control memory (control store), addressed by a sequencer.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e71174a679-93",
  "t": 4,
  "sub": "4.1",
  "text": "The ideal speedup of a k-stage pipeline for a large number of instructions approaches:",
  "options": [
   "1",
   "k/2",
   "k",
   "k²"
  ],
  "answer": 2,
  "explanation": "S = nk/(k + n − 1) → k as n grows.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-d1e7d224c1-94",
  "t": 4,
  "sub": "4.2",
  "text": "The purpose of a cache replacement policy is to decide:",
  "options": [
   "What to store in cache first",
   "Which block to evict when the cache is full",
   "How many cache levels to use",
   "What to keep in RAM"
  ],
  "answer": 1,
  "explanation": "Policies such as LRU, FIFO, LFU and random pick the victim block on a miss when the cache (or set) is full.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-db98bad161-95",
  "t": 4,
  "sub": "4.2",
  "text": "For the fastest data access after registers, which memory should be prioritized?",
  "options": [
   "Hard disk",
   "RAM",
   "Cache memory",
   "Secondary storage"
  ],
  "answer": 2,
  "explanation": "Hierarchy (fast → slow): registers, cache, main memory, secondary storage.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-b2bbf11cff-96",
  "t": 4,
  "sub": "4.2",
  "text": "A USB pen drive stores data in:",
  "options": [
   "SRAM",
   "DRAM",
   "Flash memory",
   "Cache"
  ],
  "answer": 2,
  "explanation": "Flash is non-volatile EEPROM-type memory. SRAM and DRAM are volatile.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-33144b7a95-97",
  "t": 4,
  "sub": "4.2",
  "text": "In direct-mapped cache:",
  "options": [
   "A block can go to any line",
   "Each memory block maps to exactly one cache line",
   "Blocks map to any line within a set",
   "No tag is needed"
  ],
  "answer": 1,
  "explanation": "Direct mapping: line = block mod number of lines. Fully associative: any line. Set associative: any line in one set.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-6cb7c49964-98",
  "t": 4,
  "sub": "4.2",
  "text": "In the write-through policy:",
  "options": [
   "Only the cache is updated",
   "Cache and main memory are updated together",
   "Main memory is updated on eviction only",
   "Writes bypass the cache"
  ],
  "answer": 1,
  "explanation": "Write-through keeps memory consistent at the cost of traffic; write-back updates memory only when a dirty block is replaced.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-73cf946eec-99",
  "t": 4,
  "sub": "4.2",
  "text": "Hit ratio 0.9, cache time 10 ns, memory time 100 ns, simultaneous access. Average access time:",
  "options": [
   "10 ns",
   "19 ns",
   "28 ns",
   "100 ns"
  ],
  "answer": 1,
  "explanation": "0.9 × 10 + 0.1 × 100 = 9 + 10 = 19 ns. (Hierarchical access would be 10 + 0.1 × 100 = 20 ns.)",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-de6a0fffe5-100",
  "t": 4,
  "sub": "4.3",
  "text": "In DMA, cycle stealing means:",
  "options": [
   "The DMA controller takes the bus for one cycle at a time to transfer a word",
   "The CPU steals cycles from DMA",
   "Reading protected memory",
   "Blocking all interrupts"
  ],
  "answer": 0,
  "explanation": "The DMA controller takes the bus for a cycle, moves one word and returns it, so the CPU is slowed but not stopped. Burst mode transfers a whole block at once.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-59df0371d6-101",
  "t": 4,
  "sub": "4.3",
  "text": "Control of a shared system bus among several masters is maintained through:",
  "options": [
   "First-come first-served only",
   "Bus arbitration (priority based)",
   "Random selection",
   "Memory availability"
  ],
  "answer": 1,
  "explanation": "A bus arbiter grants the bus by priority (daisy chain, parallel priority, etc.).",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-a67b6a6e02-102",
  "t": 4,
  "sub": "4.3",
  "text": "In programmed I/O, the CPU:",
  "options": [
   "Is interrupted when the device is ready",
   "Repeatedly checks the device status (polling)",
   "Hands transfers to a DMA controller",
   "Never takes part"
  ],
  "answer": 1,
  "explanation": "Polling wastes CPU time; interrupt-driven I/O and DMA reduce it.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-25732982e5-103",
  "t": 4,
  "sub": "4.3",
  "text": "Tightly coupled multiprocessors communicate through:",
  "options": [
   "Message passing over a network",
   "Shared common memory",
   "Email",
   "Separate disks"
  ],
  "answer": 1,
  "explanation": "Tightly coupled = shared memory; loosely coupled = distributed memory with message passing.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-71355bc384-104",
  "t": 4,
  "sub": "4.4",
  "text": "A key advantage of a custom single-purpose processor is:",
  "options": [
   "Low NRE cost",
   "High performance with small size and low power",
   "Easy to change functionality",
   "Short time to market"
  ],
  "answer": 1,
  "explanation": "Custom processors are fast, small and power-efficient for one job, but have high NRE cost, long design time and little flexibility.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-f392839b21-105",
  "t": 4,
  "sub": "4.4",
  "text": "NRE cost of an embedded system is:",
  "options": [
   "Cost per unit manufactured",
   "One-time cost of designing the system",
   "Running cost of power",
   "Cost of repairs"
  ],
  "answer": 1,
  "explanation": "Non-Recurring Engineering cost is paid once for design; unit cost is paid for every unit made.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-05974a4387-106",
  "t": 4,
  "sub": "4.4",
  "text": "Microcontrollers and DSPs are examples of:",
  "options": [
   "Custom single-purpose processors",
   "Application-specific instruction-set processors (ASIPs)",
   "Vector displays",
   "Bus arbiters"
  ],
  "answer": 1,
  "explanation": "ASIPs are programmable processors optimized for a class of applications.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-bf05bbf723-107",
  "t": 4,
  "sub": "4.5",
  "text": "Emergency braking, aircraft control and patient monitoring are examples of:",
  "options": [
   "Soft real-time systems",
   "Firm real-time systems",
   "Hard real-time systems",
   "Batch systems"
  ],
  "answer": 2,
  "explanation": "Missing a deadline in a hard real-time system can be catastrophic. Multimedia streaming is soft real-time.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-e343418e86-108",
  "t": 4,
  "sub": "4.5",
  "text": "A closed-loop control system differs from open-loop because it:",
  "options": [
   "Has no controller",
   "Uses feedback of the output",
   "Is always digital",
   "Has no actuator"
  ],
  "answer": 1,
  "explanation": "Closed-loop systems measure the output and correct the error; open-loop systems do not.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-7861b83999-109",
  "t": 4,
  "sub": "4.5",
  "text": "A device driver is:",
  "options": [
   "A hardware chip",
   "Software that lets the OS control a hardware device",
   "A compiler",
   "A network cable"
  ],
  "answer": 1,
  "explanation": "Drivers translate generic OS requests into device-specific operations.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-fcdce795a5-110",
  "t": 4,
  "sub": "4.5",
  "text": "Priority inversion in an RTOS is commonly solved by:",
  "options": [
   "Round robin",
   "Priority inheritance",
   "Increasing time slice",
   "Disabling the scheduler forever"
  ],
  "answer": 1,
  "explanation": "The low-priority task holding a resource temporarily inherits the higher priority of the waiting task.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-c2f6f36eaa-111",
  "t": 4,
  "sub": "4.6",
  "text": "VHDL stands for:",
  "options": [
   "Very High Definition Language",
   "VHSIC Hardware Description Language",
   "Virtual Hardware Design Logic",
   "Verified Hardware Description Language"
  ],
  "answer": 1,
  "explanation": "VHSIC = Very High Speed Integrated Circuit.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-abf8ea3647-112",
  "t": 4,
  "sub": "4.6",
  "text": "How many shift operators does VHDL have?",
  "options": [
   "2",
   "4",
   "6",
   "8"
  ],
  "answer": 2,
  "explanation": "sll, srl, sla, sra, rol, ror.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-8f1af46785-113",
  "t": 4,
  "sub": "4.6",
  "text": "In VHDL, the entity describes ___ and the architecture describes ___.",
  "options": [
   "Behaviour; interface",
   "Interface (ports); behaviour/structure",
   "Timing; power",
   "Libraries; packages"
  ],
  "answer": 1,
  "explanation": "Entity = ports (inputs/outputs). Architecture = how it works.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-7fb5ac3fb7-114",
  "t": 4,
  "sub": "4.6",
  "text": "In VHDL, signal and variable assignments use:",
  "options": [
   "= and ==",
   "<= and :=",
   ":= and <=",
   "-> and =>"
  ],
  "answer": 1,
  "explanation": "signal <= value; variable := value; (variables only inside processes).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-90271399ad-115",
  "t": 5,
  "sub": "5.1",
  "text": "Which cable connects two routers (like devices) directly with traditional Ethernet ports?",
  "options": [
   "Straight-through",
   "Crossover",
   "Rollover",
   "Coaxial"
  ],
  "answer": 1,
  "explanation": "Like devices (router–router, switch–switch, PC–PC) use a crossover cable. Unlike devices use straight-through. Rollover is for the console port.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-06e0367068-116",
  "t": 5,
  "sub": "5.1",
  "text": "Segmentation of data is done at which OSI layer?",
  "options": [
   "Network",
   "Transport",
   "Data link",
   "Session"
  ],
  "answer": 1,
  "explanation": "Transport layer creates segments; network layer packets; data link frames; physical bits.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-54be68ffc4-117",
  "t": 5,
  "sub": "5.1",
  "text": "A full mesh network of 10 nodes needs how many duplex links?",
  "options": [
   "10",
   "45",
   "90",
   "100"
  ],
  "answer": 1,
  "explanation": "n(n − 1)/2 = 10 × 9 / 2 = 45.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-bde07a7b15-118",
  "t": 5,
  "sub": "5.1",
  "text": "A switch operates at which OSI layer?",
  "options": [
   "Physical",
   "Data link",
   "Network",
   "Transport"
  ],
  "answer": 1,
  "explanation": "Hub: physical. Switch and bridge: data link (MAC). Router: network (IP).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-20ff7a97bc-119",
  "t": 5,
  "sub": "5.2",
  "text": "Which is NOT an error detection method?",
  "options": [
   "CRC",
   "Checksum",
   "Parity",
   "Sliding window"
  ],
  "answer": 3,
  "explanation": "Sliding window is a flow-control protocol.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-a9086c3366-120",
  "t": 5,
  "sub": "5.2",
  "text": "The maximum segment length of 10BASE5 (thick Ethernet) is:",
  "options": [
   "100 m",
   "185 m",
   "500 m",
   "5 m"
  ],
  "answer": 2,
  "explanation": "10BASE5: 500 m. 10BASE2: 185 m. 10BASE-T: 100 m.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-82b6570ba1-121",
  "t": 5,
  "sub": "5.2",
  "text": "ARP is used to find:",
  "options": [
   "IP from MAC",
   "MAC from IP",
   "Domain name from IP",
   "Port from IP"
  ],
  "answer": 1,
  "explanation": "ARP maps a known IP address to a MAC address; RARP does the reverse.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-35ca07ace0-122",
  "t": 5,
  "sub": "5.2",
  "text": "Classic IEEE 802.3 Ethernet uses which access method?",
  "options": [
   "Token passing",
   "CSMA/CD",
   "CSMA/CA",
   "Polling"
  ],
  "answer": 1,
  "explanation": "Wired Ethernet: CSMA/CD. Wi-Fi (802.11): CSMA/CA. 802.4 token bus, 802.5 token ring.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-44fbd8ee94-123",
  "t": 5,
  "sub": "5.3",
  "text": "Which TCP/IP protocol handles logical addressing and routing between hosts?",
  "options": [
   "TCP",
   "ICMP",
   "IP",
   "UDP"
  ],
  "answer": 2,
  "explanation": "IP operates at the network layer, assigning logical addresses and routing packets.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-b27ad2c86f-124",
  "t": 5,
  "sub": "5.3",
  "text": "Which is NOT supported by IPv6?",
  "options": [
   "Multicast",
   "Unicast",
   "Broadcast",
   "Anycast"
  ],
  "answer": 2,
  "explanation": "IPv6 dropped broadcast and uses multicast (e.g. all-nodes) instead.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-a3b58e2c5b-125",
  "t": 5,
  "sub": "5.3",
  "text": "How many usable host addresses are in a /26 subnet?",
  "options": [
   "30",
   "62",
   "64",
   "126"
  ],
  "answer": 1,
  "explanation": "32 − 26 = 6 host bits: 2⁶ − 2 = 62.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-739c3fd05e-126",
  "t": 5,
  "sub": "5.3",
  "text": "OSPF is a ___ routing protocol, while RIP is ___.",
  "options": [
   "distance-vector; link-state",
   "link-state; distance-vector",
   "path-vector; link-state",
   "static; dynamic"
  ],
  "answer": 1,
  "explanation": "OSPF uses link-state (Dijkstra); RIP uses distance-vector (hop count, max 15); BGP is path-vector.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-4c29cc9d3d-127",
  "t": 5,
  "sub": "5.3",
  "text": "An IPv6 address is how long?",
  "options": [
   "32 bits",
   "64 bits",
   "128 bits",
   "256 bits"
  ],
  "answer": 2,
  "explanation": "IPv4 is 32 bits; IPv6 is 128 bits.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-325fa11fc8-128",
  "t": 5,
  "sub": "5.4",
  "text": "Which transport protocol suits real-time traffic best?",
  "options": [
   "TCP",
   "UDP",
   "FTP",
   "SMTP"
  ],
  "answer": 1,
  "explanation": "UDP is connectionless with low overhead and no retransmission delay, suited to voice, video and real-time control.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-bc626d36a3-129",
  "t": 5,
  "sub": "5.4",
  "text": "Which protocol provides reliable, connection-oriented data transfer?",
  "options": [
   "UDP",
   "IP",
   "TCP",
   "ICMP"
  ],
  "answer": 2,
  "explanation": "TCP gives ordering, acknowledgements, retransmission, flow and congestion control.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-ca34d79757-130",
  "t": 5,
  "sub": "5.4",
  "text": "When too many packets are present in a subnet and performance degrades, it is called:",
  "options": [
   "Flooding",
   "Jamming",
   "Congestion",
   "Confusion"
  ],
  "answer": 2,
  "explanation": "Congestion control (e.g. TCP slow start, leaky/token bucket) handles it.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-0241f52644-131",
  "t": 5,
  "sub": "5.4",
  "text": "TCP connection establishment uses:",
  "options": [
   "Two-way handshake",
   "Three-way handshake (SYN, SYN-ACK, ACK)",
   "Four-way handshake",
   "No handshake"
  ],
  "answer": 1,
  "explanation": "Release uses a four-way FIN/ACK exchange.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-a729a283af-132",
  "t": 5,
  "sub": "5.4",
  "text": "A socket is identified by:",
  "options": [
   "MAC address only",
   "IP address + port number",
   "Port number only",
   "Domain name"
  ],
  "answer": 1,
  "explanation": "Socket = IP:port, e.g. 192.168.1.5:80.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f8cfeebde3-133",
  "t": 5,
  "sub": "5.5",
  "text": "Which protocol uses two parallel connections (control and data)?",
  "options": [
   "FTP",
   "TCP",
   "UDP",
   "HTTP"
  ],
  "answer": 0,
  "explanation": "FTP: port 21 for control and port 20 for data.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-e75ed15e3f-134",
  "t": 5,
  "sub": "5.5",
  "text": "An example of a P2P application is:",
  "options": [
   "HTTP web server",
   "BitTorrent",
   "DNS",
   "SMTP server"
  ],
  "answer": 1,
  "explanation": "In P2P, peers act as both clients and servers.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-f2535b2063-135",
  "t": 5,
  "sub": "5.5",
  "text": "Telnet is used for:",
  "options": [
   "File transfer",
   "Remote login (terminal access)",
   "Email",
   "Name resolution"
  ],
  "answer": 1,
  "explanation": "Telnet (port 23) gives unencrypted remote terminal access; SSH (22) is the secure replacement.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-7846fc889b-136",
  "t": 5,
  "sub": "5.5",
  "text": "DNS normally uses port:",
  "options": [
   "21",
   "25",
   "53",
   "80"
  ],
  "answer": 2,
  "explanation": "DNS 53, SMTP 25, HTTP 80, HTTPS 443.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-9eb5a1a0fb-137",
  "t": 5,
  "sub": "5.5",
  "text": "Which protocol is used to SEND email between mail servers?",
  "options": [
   "POP3",
   "IMAP",
   "SMTP",
   "SNMP"
  ],
  "answer": 2,
  "explanation": "SMTP sends; POP3 and IMAP retrieve. SNMP is for network management.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-14e64870ed-138",
  "t": 5,
  "sub": "5.5",
  "text": "Wireshark is a:",
  "options": [
   "Firewall",
   "Packet capture and protocol analyzer",
   "Web server",
   "Routing protocol"
  ],
  "answer": 1,
  "explanation": "MRTG and PRTG monitor traffic; Wireshark captures and decodes packets; Packet Tracer simulates networks.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-068899517b-139",
  "t": 5,
  "sub": "5.6",
  "text": "Which firewall checks individual packet headers (addresses, ports) to allow or block them?",
  "options": [
   "Application-level gateway",
   "Packet-filtering firewall",
   "Stateful inspection firewall",
   "Circuit-level gateway"
  ],
  "answer": 1,
  "explanation": "Packet filters work on network/transport headers. Stateful firewalls also track connections; application gateways inspect application data.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-96f70ebbc2-140",
  "t": 5,
  "sub": "5.6",
  "text": "What securely binds a public key to its owner?",
  "options": [
   "SHA hash",
   "Digital certificate",
   "TLS session key",
   "Firewall rule"
  ],
  "answer": 1,
  "explanation": "A certificate signed by a Certificate Authority binds identity to public key.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-16b1f312c4-141",
  "t": 5,
  "sub": "5.6",
  "text": "RSA is a:",
  "options": [
   "Symmetric cipher",
   "Public-key (asymmetric) algorithm",
   "Hash function",
   "Routing protocol"
  ],
  "answer": 1,
  "explanation": "RSA uses a public/private key pair; its security rests on factoring large numbers.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-5f5dd411f5-142",
  "t": 5,
  "sub": "5.6",
  "text": "PGP is mainly used to secure:",
  "options": [
   "Web traffic",
   "Email",
   "Wireless LANs",
   "Routing tables"
  ],
  "answer": 1,
  "explanation": "PGP secures email; SSL/TLS secures TCP connections; IPsec secures the network layer; WEP/WPA secure wireless LANs.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-d4013e64c6-143",
  "t": 5,
  "sub": "5.6",
  "text": "A digital signature provides:",
  "options": [
   "Confidentiality only",
   "Authentication, integrity and non-repudiation",
   "Compression",
   "Faster routing"
  ],
  "answer": 1,
  "explanation": "The sender signs with their private key; anyone verifies with the public key.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-024c122899-144",
  "t": 6,
  "sub": "6.1",
  "text": "Finite automata and regular expressions are equivalent because:",
  "options": [
   "Both use stacks",
   "Both describe exactly the regular languages",
   "Both are Turing complete",
   "Both accept context-free languages"
  ],
  "answer": 1,
  "explanation": "Kleene's theorem: a language is regular iff some FA accepts it iff some regular expression describes it.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-85410dd139-145",
  "t": 6,
  "sub": "6.1",
  "text": "For every NFA there exists:",
  "options": [
   "No equivalent DFA",
   "An equivalent DFA",
   "An equivalent PDA only",
   "A smaller DFA always"
  ],
  "answer": 1,
  "explanation": "Subset construction converts an NFA to a DFA (up to 2ⁿ states).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-3b84a7e054-146",
  "t": 6,
  "sub": "6.1",
  "text": "The pumping lemma for regular languages is used to:",
  "options": [
   "Prove a language is regular",
   "Prove a language is NOT regular",
   "Minimize a DFA",
   "Convert NFA to DFA"
  ],
  "answer": 1,
  "explanation": "It is a necessary condition, so it can only show non-regularity (e.g. aⁿbⁿ).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-30b79bf2a6-147",
  "t": 6,
  "sub": "6.1",
  "text": "Which language is NOT regular?",
  "options": [
   "All strings over {a,b}",
   "a*b*",
   "aⁿbⁿ for n ≥ 0",
   "Strings ending in ab"
  ],
  "answer": 2,
  "explanation": "aⁿbⁿ needs unbounded counting, which a finite automaton cannot do. It is context-free.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-809e1c57e0-148",
  "t": 6,
  "sub": "6.2",
  "text": "Chomsky Normal Form is used for:",
  "options": [
   "Regular grammars",
   "Context-free grammars",
   "Context-sensitive grammars",
   "Turing machines"
  ],
  "answer": 1,
  "explanation": "CNF productions are A → BC or A → a; it is used in the CYK algorithm and proofs about CFGs.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-427a4b8251-149",
  "t": 6,
  "sub": "6.2",
  "text": "A bottom-up (shift-reduce) parser constructs:",
  "options": [
   "Leftmost derivation",
   "Rightmost derivation in reverse",
   "Leftmost derivation in reverse",
   "No derivation"
  ],
  "answer": 1,
  "explanation": "Bottom-up parsers trace a rightmost derivation backwards; top-down (LL) parsers follow a leftmost derivation.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-3fbea784ec-150",
  "t": 6,
  "sub": "6.2",
  "text": "Context-free languages are accepted by:",
  "options": [
   "Finite automata",
   "Pushdown automata",
   "Linear bounded automata only",
   "Mealy machines"
  ],
  "answer": 1,
  "explanation": "PDA = FA + stack. Regular: FA; context-sensitive: LBA; recursively enumerable: TM.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e14abba638-151",
  "t": 6,
  "sub": "6.2",
  "text": "A grammar is ambiguous if some string has:",
  "options": [
   "No parse tree",
   "More than one parse tree (or leftmost derivation)",
   "Only terminal symbols",
   "An ε-production"
  ],
  "answer": 1,
  "explanation": "Ambiguity = multiple distinct parse trees for one string.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-d3b2f102eb-152",
  "t": 6,
  "sub": "6.3",
  "text": "According to the Church–Turing thesis, a Turing machine can compute:",
  "options": [
   "Only deterministic problems",
   "Anything that is algorithmically computable",
   "Only polynomial-time problems",
   "Only finite-state problems"
  ],
  "answer": 1,
  "explanation": "Any effectively computable function can be computed by a TM.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-44c432cf49-153",
  "t": 6,
  "sub": "6.3",
  "text": "The halting problem is:",
  "options": [
   "Decidable",
   "Undecidable",
   "Regular",
   "Solvable in polynomial time"
  ],
  "answer": 1,
  "explanation": "No TM can decide for every TM and input whether it halts (Turing, 1936).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f7f543ea73-154",
  "t": 6,
  "sub": "6.3",
  "text": "Compared to a single-tape TM, a multi-tape TM is:",
  "options": [
   "More powerful",
   "Equally powerful (may be faster)",
   "Less powerful",
   "Only a finite automaton"
  ],
  "answer": 1,
  "explanation": "Multi-tape, multi-track and non-deterministic TMs all recognize the same languages.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-d34d737296-155",
  "t": 6,
  "sub": "6.4",
  "text": "What coats the inside of a CRT screen?",
  "options": [
   "Aluminium",
   "Phosphor",
   "Silicon",
   "Copper"
  ],
  "answer": 1,
  "explanation": "Phosphor glows when hit by the electron beam. Persistence is how long it keeps glowing.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-182ab9aa6a-156",
  "t": 6,
  "sub": "6.4",
  "text": "Which algorithms are used to fill colour in a polygon?",
  "options": [
   "Flood fill",
   "Scan-line fill",
   "Boundary fill",
   "All of these"
  ],
  "answer": 3,
  "explanation": "All three are area-filling algorithms.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-cd14d5a439-157",
  "t": 6,
  "sub": "6.4",
  "text": "In a raster-scan display, the picture is stored in:",
  "options": [
   "Display file of line commands",
   "Frame buffer (refresh buffer)",
   "Hard disk",
   "Control memory"
  ],
  "answer": 1,
  "explanation": "Raster: pixel intensities in a frame buffer. Vector (random-scan): a display list of line commands.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-152188201f-158",
  "t": 6,
  "sub": "6.4",
  "text": "Frame buffer size for 1024 × 768 resolution at 8 bits per pixel:",
  "options": [
   "96 KB",
   "768 KB",
   "1 MB",
   "6 MB"
  ],
  "answer": 1,
  "explanation": "1024 × 768 × 8 / 8 = 786,432 bytes = 768 KB.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e54fc42779-159",
  "t": 6,
  "sub": "6.5",
  "text": "Which transformation changes the shape of an object?",
  "options": [
   "Translation",
   "Rotation",
   "Uniform scaling",
   "Shear"
  ],
  "answer": 3,
  "explanation": "Shear slants an object. Translation and rotation are rigid; uniform scaling keeps shape.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-fe1e8a8ebb-160",
  "t": 6,
  "sub": "6.5",
  "text": "Scaling with sx ≠ sy produces:",
  "options": [
   "Uniform scaling",
   "Non-uniform (differential) scaling",
   "Reflection",
   "Rotation"
  ],
  "answer": 1,
  "explanation": "Equal factors keep proportions; unequal factors distort them.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-0539930599-161",
  "t": 6,
  "sub": "6.5",
  "text": "Cohen–Sutherland line clipping uses a region code of:",
  "options": [
   "2 bits",
   "3 bits",
   "4 bits",
   "8 bits"
  ],
  "answer": 2,
  "explanation": "One bit each for top, bottom, right and left of the window.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-15587d7abe-162",
  "t": 6,
  "sub": "6.5",
  "text": "Homogeneous coordinates are used in 2D graphics mainly so that:",
  "options": [
   "Colours can be stored",
   "Translation can be expressed as matrix multiplication",
   "Clipping is faster",
   "Pixels are square"
  ],
  "answer": 1,
  "explanation": "With 3×3 matrices all transformations, including translation, compose by multiplication.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-2708c2c6c7-163",
  "t": 6,
  "sub": "6.5",
  "text": "Rotating the point (1, 0) by 90° anticlockwise about the origin gives:",
  "options": [
   "(0, 1)",
   "(0, −1)",
   "(−1, 0)",
   "(1, 1)"
  ],
  "answer": 0,
  "explanation": "x′ = x cos θ − y sin θ = 0; y′ = x sin θ + y cos θ = 1.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-c2187fd0b8-164",
  "t": 6,
  "sub": "6.6",
  "text": "How many principal reflection planes are there in 3D?",
  "options": [
   "2",
   "3",
   "4",
   "6"
  ],
  "answer": 1,
  "explanation": "Reflections about the XY, YZ and XZ planes.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-0134580491-165",
  "t": 6,
  "sub": "6.6",
  "text": "Isometric drawings use which type of projection?",
  "options": [
   "Perspective",
   "Parallel (orthographic axonometric)",
   "Oblique perspective",
   "Stereographic"
  ],
  "answer": 1,
  "explanation": "Isometric is a parallel (axonometric) projection with the three axes 120° apart and equal foreshortening.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-3d43adb641-166",
  "t": 6,
  "sub": "6.6",
  "text": "Scaling the point (2, 0, 3) by factors (2, 2, 4) gives:",
  "options": [
   "(4, 0, 12)",
   "(4, 2, 7)",
   "(2, 0, 7)",
   "(1, 0, 3)"
  ],
  "answer": 0,
  "explanation": "Multiply each coordinate by its factor: (2×2, 0×2, 3×4).",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-63415005fb-167",
  "t": 6,
  "sub": "6.6",
  "text": "In perspective projection:",
  "options": [
   "Parallel lines stay parallel",
   "Parallel lines converge at vanishing points",
   "Object size is independent of distance",
   "Projectors are parallel"
  ],
  "answer": 1,
  "explanation": "Perspective is realistic: distant objects look smaller and parallel lines meet at vanishing points.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-a233fe6ced-168",
  "t": 7,
  "sub": "7.1",
  "text": "Postfix form of (A + B) * C is:",
  "options": [
   "AB+C*",
   "ABC+*",
   "A+BC*",
   "CAB+*"
  ],
  "answer": 0,
  "explanation": "Convert inside the brackets first: AB+, then multiply by C: AB+C*.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-7e19fcb456-169",
  "t": 7,
  "sub": "7.1",
  "text": "A circular queue of size n is full when:",
  "options": [
   "front == rear",
   "rear == n − 1",
   "(rear + 1) % n == front",
   "front == 0"
  ],
  "answer": 2,
  "explanation": "One slot is kept empty to distinguish full from empty (front == rear means empty).",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-0ec1de7f91-170",
  "t": 7,
  "sub": "7.1",
  "text": "Maximum height (counting levels, root = 1) of an AVL tree with 7 nodes:",
  "options": [
   "3",
   "4",
   "5",
   "6"
  ],
  "answer": 1,
  "explanation": "Minimum nodes for height h: N(h) = N(h−1) + N(h−2) + 1 → 1, 2, 4, 7. So 7 nodes allow height 4 levels (3 if height is counted in edges).",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-fa7e617674-171",
  "t": 7,
  "sub": "7.1",
  "text": "Inorder traversal of a binary search tree gives:",
  "options": [
   "Reverse order",
   "Sorted (ascending) order",
   "Level order",
   "Random order"
  ],
  "answer": 1,
  "explanation": "Inorder = left, root, right, which visits BST keys in ascending order.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-1d3e911bb8-172",
  "t": 7,
  "sub": "7.1",
  "text": "BST preorder: 30, 20, 10, 15, 25, 23, 39, 35, 42. The postorder is:",
  "options": [
   "15, 10, 23, 25, 20, 35, 42, 39, 30",
   "10, 15, 20, 23, 25, 30, 35, 39, 42",
   "15, 10, 25, 23, 20, 42, 35, 39, 30",
   "30, 39, 42, 35, 20, 25, 23, 10, 15"
  ],
  "answer": 0,
  "explanation": "Build the BST from the preorder (inorder is the sorted list), then read left, right, root.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-b94596cad7-173",
  "t": 7,
  "sub": "7.1",
  "text": "Time complexity of binary search on a sorted array:",
  "options": [
   "O(1)",
   "O(log n)",
   "O(n)",
   "O(n log n)"
  ],
  "answer": 1,
  "explanation": "Each step halves the search space.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-d2b6881e21-174",
  "t": 7,
  "sub": "7.2",
  "text": "Breadth-first search is implemented with a:",
  "options": [
   "Stack",
   "Queue",
   "Linked list",
   "Tree"
  ],
  "answer": 1,
  "explanation": "BFS: FIFO queue. DFS: stack (or recursion).",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-9345997d91-175",
  "t": 7,
  "sub": "7.2",
  "text": "A stack is used in:",
  "options": [
   "BFS",
   "DFS",
   "Level-order traversal",
   "Round-robin scheduling"
  ],
  "answer": 1,
  "explanation": "DFS goes deep first using LIFO order.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-83cf8b929b-176",
  "t": 7,
  "sub": "7.2",
  "text": "Which sorting method is NOT in-place?",
  "options": [
   "Merge sort",
   "Insertion sort",
   "Selection sort",
   "Bubble sort"
  ],
  "answer": 0,
  "explanation": "Standard merge sort needs O(n) extra space for merging.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-450fb6ad4e-177",
  "t": 7,
  "sub": "7.2",
  "text": "Dijkstra's shortest-path algorithm is a:",
  "options": [
   "Dynamic programming algorithm that handles negative edges",
   "Greedy algorithm for non-negative edge weights",
   "Divide-and-conquer algorithm",
   "Backtracking algorithm"
  ],
  "answer": 1,
  "explanation": "It greedily picks the closest unvisited vertex. With negative edges use Bellman–Ford.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-5c91c11041-178",
  "t": 7,
  "sub": "7.2",
  "text": "Worst-case time complexity of quick sort:",
  "options": [
   "O(n log n)",
   "O(n²)",
   "O(n)",
   "O(log n)"
  ],
  "answer": 1,
  "explanation": "Worst case occurs with bad pivots (e.g. already sorted input with first-element pivot). Average is O(n log n).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-9fdec9b00d-179",
  "t": 7,
  "sub": "7.2",
  "text": "Linear probing is a collision resolution technique of type:",
  "options": [
   "Separate chaining",
   "Open addressing",
   "Rehashing into a tree",
   "Double linking"
  ],
  "answer": 1,
  "explanation": "Open addressing (linear, quadratic probing, double hashing) stores all keys in the table itself.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-c453b7f6c8-180",
  "t": 7,
  "sub": "7.3",
  "text": "Which normal form requires every determinant to be a candidate key?",
  "options": [
   "1NF",
   "2NF",
   "BCNF",
   "3NF"
  ],
  "answer": 2,
  "explanation": "BCNF: for every non-trivial FD X → Y, X is a superkey.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-a15ec516e3-181",
  "t": 7,
  "sub": "7.3",
  "text": "A characteristic of BCNF is that it removes:",
  "options": [
   "Only repeating groups",
   "Only partial dependencies",
   "Only transitive dependencies",
   "All non-trivial FDs whose determinant is not a candidate key"
  ],
  "answer": 3,
  "explanation": "1NF: atomic values. 2NF: no partial dependency. 3NF: no transitive dependency. BCNF: every determinant is a key.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-3de98da2ed-182",
  "t": 7,
  "sub": "7.3",
  "text": "A weak entity set:",
  "options": [
   "Has a primary key of its own",
   "Depends on an owner (identifying) entity for identification",
   "Has no attributes",
   "Cannot participate in relationships"
  ],
  "answer": 1,
  "explanation": "It has only a partial key (discriminator) and is drawn with a double rectangle.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-305b3c93b7-183",
  "t": 7,
  "sub": "7.3",
  "text": "Which are DDL commands?",
  "options": [
   "SELECT, INSERT",
   "CREATE, ALTER, DROP",
   "UPDATE, DELETE",
   "GRANT, REVOKE"
  ],
  "answer": 1,
  "explanation": "DDL defines schema; DML (SELECT, INSERT, UPDATE, DELETE) manipulates data; DCL is GRANT/REVOKE.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f751b25abb-184",
  "t": 7,
  "sub": "7.3",
  "text": "2NF removes:",
  "options": [
   "Repeating groups",
   "Partial dependency on part of a composite key",
   "Transitive dependency",
   "Multivalued dependency"
  ],
  "answer": 1,
  "explanation": "2NF = 1NF + every non-key attribute fully depends on the whole key.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-67973c07ae-185",
  "t": 7,
  "sub": "7.4",
  "text": "Atomicity of transactions is ensured by which DBMS component?",
  "options": [
   "Concurrency control manager",
   "Transaction / recovery management",
   "Query optimizer",
   "Storage allocator"
  ],
  "answer": 1,
  "explanation": "Atomicity (all or nothing) is ensured by the recovery/transaction manager using logs. Isolation is the concurrency-control manager's job.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-ed1972a79d-186",
  "t": 7,
  "sub": "7.4",
  "text": "Which is NOT a necessary condition for deadlock?",
  "options": [
   "Mutual exclusion",
   "Hold and wait",
   "Preemption",
   "Circular wait"
  ],
  "answer": 2,
  "explanation": "The four Coffman conditions include NO preemption. Allowing preemption breaks deadlock.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-30e528a628-187",
  "t": 7,
  "sub": "7.4",
  "text": "Two-phase locking (2PL) guarantees:",
  "options": [
   "Deadlock freedom",
   "Conflict serializability",
   "No rollbacks",
   "Faster queries"
  ],
  "answer": 1,
  "explanation": "2PL (growing then shrinking phase) ensures serializability but can still deadlock.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-1ef13c252b-188",
  "t": 7,
  "sub": "7.4",
  "text": "In the wound–wait scheme, if an older transaction requests a lock held by a younger one:",
  "options": [
   "The older one waits",
   "The older one wounds (aborts) the younger one",
   "Both abort",
   "The request is ignored"
  ],
  "answer": 1,
  "explanation": "Wound–wait: older wounds younger; younger waits for older. Wait–die: older waits; younger dies.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-88d11d60e7-189",
  "t": 7,
  "sub": "7.4",
  "text": "In log-based recovery, the write-ahead logging rule says:",
  "options": [
   "Write data before the log",
   "Write the log record to stable storage before the data change",
   "Never write logs",
   "Write logs only at checkpoints"
  ],
  "answer": 1,
  "explanation": "The log must reach stable storage first so changes can be undone or redone after a crash.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f3ffb9312d-190",
  "t": 7,
  "sub": "7.5",
  "text": "Which OS kernel component decides which process runs next?",
  "options": [
   "File manager",
   "Memory manager",
   "Process scheduler",
   "Device driver"
  ],
  "answer": 2,
  "explanation": "The scheduler applies algorithms like FCFS, SJF, priority and round robin.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-bb83c8589d-191",
  "t": 7,
  "sub": "7.5",
  "text": "An OS that groups similar jobs and runs them together without user interaction is:",
  "options": [
   "Multiprocessing",
   "Multitasking",
   "Batch processing",
   "Real-time"
  ],
  "answer": 2,
  "explanation": "Batch systems collect jobs with similar needs and run them as a batch.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-541ad197ab-192",
  "t": 7,
  "sub": "7.5",
  "text": "The two atomic semaphore operations are:",
  "options": [
   "read and write",
   "wait (P) and signal (V)",
   "lock and fork",
   "push and pop"
  ],
  "answer": 1,
  "explanation": "wait decrements (and may block); signal increments (and may wake a process).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-aee9a9d42f-193",
  "t": 7,
  "sub": "7.5",
  "text": "Which scheduling algorithm gives the minimum average waiting time?",
  "options": [
   "FCFS",
   "SJF",
   "Round robin",
   "Priority"
  ],
  "answer": 1,
  "explanation": "SJF is optimal for average waiting time but needs burst-time knowledge and can starve long jobs.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-b1ec95e3f1-194",
  "t": 7,
  "sub": "7.5",
  "text": "A race condition occurs when:",
  "options": [
   "The CPU overheats",
   "The result depends on the order in which processes access shared data",
   "Two disks spin at once",
   "A process waits forever"
  ],
  "answer": 1,
  "explanation": "Prevented with mutual exclusion in the critical section.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-326718ac59-195",
  "t": 7,
  "sub": "7.6",
  "text": "Swapping in an OS means:",
  "options": [
   "Exchanging two registers",
   "Moving a whole process between main memory and disk",
   "Switching between threads",
   "Copying cache to RAM"
  ],
  "answer": 1,
  "explanation": "Swapping moves entire processes; paging moves fixed-size pages.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-9bfd625972-196",
  "t": 7,
  "sub": "7.6",
  "text": "LRU (Least Recently Used) is used in:",
  "options": [
   "CPU scheduling",
   "Page replacement",
   "Disk formatting",
   "Deadlock detection"
  ],
  "answer": 1,
  "explanation": "LRU replaces the page not used for the longest time (also used for cache replacement).",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-d370da178b-197",
  "t": 7,
  "sub": "7.6",
  "text": "Page fault rate 0.01, page fault service 1000 ms, memory access 20 ms. Effective access time:",
  "options": [
   "30.8 ms",
   "40 ms",
   "22 ms",
   "29.8 ms"
  ],
  "answer": 3,
  "explanation": "EAT = (1 − p)·T + p·S = 0.99 × 20 + 0.01 × 1000 = 19.8 + 10 = 29.8 ms.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-6934985f58-198",
  "t": 7,
  "sub": "7.6",
  "text": "Belady's anomaly (more frames causing more faults) can occur with:",
  "options": [
   "LRU",
   "Optimal",
   "FIFO",
   "LFU"
  ],
  "answer": 2,
  "explanation": "FIFO is not a stack algorithm, so adding frames can increase faults.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-a905036665-199",
  "t": 7,
  "sub": "7.6",
  "text": "Thrashing is when:",
  "options": [
   "The CPU runs too fast",
   "The system spends more time paging than executing",
   "Disk is full",
   "Cache hit ratio is 100%"
  ],
  "answer": 1,
  "explanation": "Too little memory per process causes constant page faults.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-6113ccb6e7-200",
  "t": 8,
  "sub": "8.1",
  "text": "Which activity is common to all software process models?",
  "options": [
   "Iterative cycles",
   "Requirement analysis and planning",
   "Fixed timeline",
   "Waterfall phases"
  ],
  "answer": 1,
  "explanation": "Every model must understand requirements and plan, even if the timing differs.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-043bca666f-201",
  "t": 8,
  "sub": "8.1",
  "text": "What is common across different software engineering strategies?",
  "options": [
   "Code efficiency",
   "Sequential phases",
   "Requirement engineering",
   "Formal documentation only"
  ],
  "answer": 2,
  "explanation": "Requirement engineering appears in every methodology.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-e50bc18b8f-202",
  "t": 8,
  "sub": "8.1",
  "text": "The first step in the software development process is:",
  "options": [
   "Design",
   "Implementation",
   "Requirement gathering",
   "Testing"
  ],
  "answer": 2,
  "explanation": "Requirements come before design, coding and testing.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-d46bc28c7d-203",
  "t": 8,
  "sub": "8.1",
  "text": "Which is a non-functional requirement?",
  "options": [
   "The system shall let users reset passwords",
   "The system shall respond within 2 seconds",
   "The system shall generate monthly reports",
   "The system shall store customer orders"
  ],
  "answer": 1,
  "explanation": "Non-functional = quality constraints (performance, security, usability). Functional = what the system does.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f7c6aaaeed-204",
  "t": 8,
  "sub": "8.1",
  "text": "In the V-model:",
  "options": [
   "Testing is skipped",
   "Each development phase has a corresponding testing phase",
   "Requirements are gathered last",
   "Prototypes are thrown away"
  ],
  "answer": 1,
  "explanation": "Left side: requirements → design → coding. Right side: unit → integration → system → acceptance testing.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-28ad732b5b-205",
  "t": 8,
  "sub": "8.2",
  "text": "Which design activity transforms class models into data structures?",
  "options": [
   "Architectural design",
   "Data design",
   "Procedural design",
   "Interface design"
  ],
  "answer": 1,
  "explanation": "Pressman: data/class design converts analysis classes into design classes and data structures.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-fe42fe5e05-206",
  "t": 8,
  "sub": "8.2",
  "text": "Good modular design aims for:",
  "options": [
   "Low cohesion, high coupling",
   "High cohesion, low coupling",
   "High cohesion, high coupling",
   "Low cohesion, low coupling"
  ],
  "answer": 1,
  "explanation": "Each module does one thing well (cohesion) and depends little on others (coupling).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-0a450aa119-207",
  "t": 8,
  "sub": "8.2",
  "text": "An architecture where clients request services from a central server is:",
  "options": [
   "Pipe and filter",
   "Client–server",
   "Peer-to-peer",
   "Blackboard"
  ],
  "answer": 1,
  "explanation": "Client–server separates service providers from service requesters.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-ec58c776c1-208",
  "t": 8,
  "sub": "8.3",
  "text": "Which testing is often referred to as (user) acceptance testing done by real users at their site?",
  "options": [
   "White-box",
   "Grey-box",
   "Alpha",
   "Beta"
  ],
  "answer": 3,
  "explanation": "Alpha: users test at the developer's site. Beta: real users in their own environment before release. Both are forms of acceptance testing; the recalled key chose beta.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-bf9d1a478e-209",
  "t": 8,
  "sub": "8.3",
  "text": "White-box testing is based on:",
  "options": [
   "Requirements only",
   "Internal code structure",
   "User interface only",
   "Performance"
  ],
  "answer": 1,
  "explanation": "White-box: paths, branches, statements. Black-box: inputs and outputs from the specification.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-75c7a7d6e8-210",
  "t": 8,
  "sub": "8.3",
  "text": "COCOMO is a:",
  "options": [
   "Testing tool",
   "Algorithmic cost estimation model",
   "Process model",
   "UML diagram"
  ],
  "answer": 1,
  "explanation": "COCOMO estimates effort from size in KLOC: Effort = a(KLOC)ᵇ.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-55ad48dceb-211",
  "t": 8,
  "sub": "8.3",
  "text": "How many maturity levels does CMMI define?",
  "options": [
   "3",
   "4",
   "5",
   "6"
  ],
  "answer": 2,
  "explanation": "Initial, Managed, Defined, Quantitatively Managed, Optimizing.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-d9e5ab9dcf-212",
  "t": 8,
  "sub": "8.4",
  "text": "Which UML diagram is usually classed as static in exam keys?",
  "options": [
   "Sequence diagram",
   "Use case diagram",
   "Collaboration diagram",
   "State diagram"
  ],
  "answer": 1,
  "explanation": "Among these options, the use case diagram shows no time ordering. Note: UML 2 formally lists use case diagrams under behaviour diagrams; class and object diagrams are the true structural ones.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-3a769135eb-213",
  "t": 8,
  "sub": "8.4",
  "text": "Which diagram shows the relationship between actors and system functions?",
  "options": [
   "Use case diagram",
   "Class diagram",
   "Activity diagram",
   "Deployment diagram"
  ],
  "answer": 0,
  "explanation": "Use case diagrams show actors and the use cases they take part in.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-7b4c2fb997-214",
  "t": 8,
  "sub": "8.4",
  "text": "The three main phases of object-oriented development are:",
  "options": [
   "Analysis, design, testing",
   "OO analysis, OO design, OO programming",
   "Requirements, implementation, deployment",
   "Planning, execution, maintenance"
  ],
  "answer": 1,
  "explanation": "OOA → OOD → OOP.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-ba277718cb-215",
  "t": 8,
  "sub": "8.5",
  "text": "A collaboration (communication) diagram emphasizes:",
  "options": [
   "Time ordering of messages",
   "Structural links between objects that send messages",
   "Deployment of nodes",
   "State changes of one object"
  ],
  "answer": 1,
  "explanation": "Sequence diagrams emphasize time; collaboration diagrams emphasize object links, with numbered messages.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-01a8430b0f-216",
  "t": 8,
  "sub": "8.5",
  "text": "The GRASP pattern that assigns a responsibility to the class holding the needed information is:",
  "options": [
   "Creator",
   "Controller",
   "Information Expert",
   "Low Coupling"
  ],
  "answer": 2,
  "explanation": "Information Expert: give the responsibility to the class with the information to fulfil it.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-685724bd90-217",
  "t": 8,
  "sub": "8.5",
  "text": "A design class diagram (DCD) shows:",
  "options": [
   "Only actors",
   "Classes with attributes, methods and navigability",
   "Network nodes",
   "Test cases"
  ],
  "answer": 1,
  "explanation": "DCDs add methods, types and navigability to the conceptual (domain) model.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-8c5060ed85-218",
  "t": 8,
  "sub": "8.6",
  "text": "When mapping design to code, method bodies are mainly derived from:",
  "options": [
   "Use case diagrams",
   "Interaction (collaboration/sequence) diagrams",
   "Deployment diagrams",
   "Gantt charts"
  ],
  "answer": 1,
  "explanation": "Class definitions come from DCDs; the message flow in interaction diagrams becomes the method code.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-81b4e706c9-219",
  "t": 8,
  "sub": "8.6",
  "text": "Class definitions in code are created mainly from:",
  "options": [
   "Design class diagrams",
   "Activity diagrams",
   "ER diagrams",
   "State charts"
  ],
  "answer": 0,
  "explanation": "The DCD gives class names, attributes, method signatures and associations (as reference attributes).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-b1a7a33fff-220",
  "t": 9,
  "sub": "9.1",
  "text": "PEAS stands for:",
  "options": [
   "Performance, Environment, Actuators, Sensors",
   "Process, Execution, Agents, Systems",
   "Perception, Environment, Action, State",
   "Planning, Evaluation, Action, Search"
  ],
  "answer": 0,
  "explanation": "PEAS describes the task environment of an agent.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-7893604655-221",
  "t": 9,
  "sub": "9.1",
  "text": "Chess without a clock is which environment type?",
  "options": [
   "Partially observable, stochastic",
   "Fully observable, deterministic",
   "Fully observable, stochastic",
   "Partially observable, deterministic"
  ],
  "answer": 1,
  "explanation": "The whole board is visible and moves have certain outcomes. Poker is partially observable; backgammon is stochastic.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-d63efdf757-222",
  "t": 9,
  "sub": "9.1",
  "text": "An agent that chooses actions to maximize expected 'happiness' (a measure of how good a state is) is:",
  "options": [
   "Simple reflex",
   "Model-based",
   "Goal-based",
   "Utility-based"
  ],
  "answer": 3,
  "explanation": "Utility-based agents compare states using a utility function, not just goal / not goal.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-bd12c499c9-223",
  "t": 9,
  "sub": "9.2",
  "text": "A* search is a form of:",
  "options": [
   "Depth-first search",
   "Breadth-first search",
   "Best-first search",
   "Depth-limited search"
  ],
  "answer": 2,
  "explanation": "A* expands the node with the lowest f(n) = g(n) + h(n); with an admissible h it is optimal.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-fb628ec229-224",
  "t": 9,
  "sub": "9.2",
  "text": "The key components of a search problem are:",
  "options": [
   "Initial state, successor function (actions), goal test, path cost",
   "Initial state, goal path, heuristic only",
   "Search space and solution only",
   "Heuristic, goal state, solution"
  ],
  "answer": 0,
  "explanation": "Initial state, actions/successor function, goal test, path cost.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-c016cc5a30-225",
  "t": 9,
  "sub": "9.2",
  "text": "Alpha–beta pruning:",
  "options": [
   "Can change the minimax result",
   "Gives the same result as minimax while examining fewer nodes",
   "Only works for one-player games",
   "Is an uninformed search"
  ],
  "answer": 1,
  "explanation": "It skips branches that cannot affect the final decision.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-f57ba51e80-226",
  "t": 9,
  "sub": "9.2",
  "text": "Hill climbing may fail because of:",
  "options": [
   "Too much memory",
   "Local maxima, plateaus and ridges",
   "Always finding the global optimum",
   "Backtracking"
  ],
  "answer": 1,
  "explanation": "It is greedy local search; simulated annealing allows downhill moves to escape local maxima.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-810d3c59bf-227",
  "t": 9,
  "sub": "9.3",
  "text": "Bayes' rule is:",
  "options": [
   "P(A|B) = P(A)P(B)",
   "P(A|B) = P(B|A)P(A)/P(B)",
   "P(A|B) = P(A) + P(B)",
   "P(A|B) = 1 − P(B|A)"
  ],
  "answer": 1,
  "explanation": "It updates belief in A after evidence B.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e5e886fb4e-228",
  "t": 9,
  "sub": "9.3",
  "text": "A semantic network represents knowledge as:",
  "options": [
   "Production rules only",
   "Nodes (concepts) connected by labelled links (relations)",
   "Truth tables",
   "Neural weights"
  ],
  "answer": 1,
  "explanation": "E.g. Dog —is-a→ Animal. Frames group attributes in slots.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-472567125c-229",
  "t": 9,
  "sub": "9.3",
  "text": "A tautology is a formula that is:",
  "options": [
   "Always false",
   "True in every interpretation",
   "True in at least one interpretation",
   "Undefined"
  ],
  "answer": 1,
  "explanation": "Valid = tautology; satisfiable = true in some interpretation; contradiction = never true.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-48d558bd30-230",
  "t": 9,
  "sub": "9.3",
  "text": "Resolution in propositional logic requires sentences in:",
  "options": [
   "DNF",
   "CNF (conjunctive normal form)",
   "Horn form only",
   "Prefix form"
  ],
  "answer": 1,
  "explanation": "Convert to CNF (a conjunction of clauses), then apply resolution by refutation.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e9cd5b3b7f-231",
  "t": 9,
  "sub": "9.4",
  "text": "MYCIN had about ___ rules and used ___ chaining.",
  "options": [
   "50, forward",
   "500, forward",
   "500, backward",
   "5000, backward"
  ],
  "answer": 2,
  "explanation": "MYCIN, the medical diagnosis expert system, had roughly 500 production rules and used goal-driven backward chaining.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-4968188095-232",
  "t": 9,
  "sub": "9.4",
  "text": "The two core components of an expert system are:",
  "options": [
   "Compiler and linker",
   "Knowledge base and inference engine",
   "Sensors and actuators",
   "Database and spreadsheet"
  ],
  "answer": 1,
  "explanation": "Plus a user interface, explanation facility and knowledge acquisition module.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-09fb7e4409-233",
  "t": 9,
  "sub": "9.4",
  "text": "The main challenge in natural language processing is:",
  "options": [
   "Lack of computers",
   "Ambiguity",
   "Too few languages",
   "Fast typing"
  ],
  "answer": 1,
  "explanation": "Words and sentences can have multiple meanings (lexical, syntactic, semantic ambiguity).",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-234663acd0-234",
  "t": 9,
  "sub": "9.5",
  "text": "A fuzzifier in a fuzzy logic system:",
  "options": [
   "Converts crisp inputs into fuzzy sets",
   "Converts fuzzy output to crisp values",
   "Stores rules",
   "Compares rules"
  ],
  "answer": 0,
  "explanation": "Fuzzification → inference → defuzzification (the defuzzifier gives the crisp output).",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-bbdb5e1c11-235",
  "t": 9,
  "sub": "9.5",
  "text": "Which is an example of unsupervised learning?",
  "options": [
   "Decision tree",
   "Support vector machine",
   "K-means clustering",
   "Naive Bayes classifier"
  ],
  "answer": 2,
  "explanation": "K-means groups unlabelled data. The others need labelled training data.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-3aa26aca82-236",
  "t": 9,
  "sub": "9.5",
  "text": "Fuzzy logic is:",
  "options": [
   "Binary valued",
   "Many valued (degrees of truth between 0 and 1)",
   "Crisp logic",
   "Only true or false"
  ],
  "answer": 1,
  "explanation": "Membership values range over [0, 1].",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-eb89e31785-237",
  "t": 9,
  "sub": "9.5",
  "text": "Speech recognition and movie rating prediction are, respectively:",
  "options": [
   "Classification and regression",
   "Regression and classification",
   "Clustering and regression",
   "Classification and clustering"
  ],
  "answer": 0,
  "explanation": "Recognizing words means choosing a category; a rating is a continuous value.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-a72b2353a0-238",
  "t": 9,
  "sub": "9.5",
  "text": "In a genetic algorithm for timetabling, fitness f(x) = 1/(1 + conflicts). It measures:",
  "options": [
   "Number of classes",
   "Number of conflicts in the schedule",
   "Total duration",
   "Number of students"
  ],
  "answer": 1,
  "explanation": "Fewer conflicts → higher fitness.",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-5645c2ffa8-239",
  "t": 9,
  "sub": "9.5",
  "text": "The main genetic algorithm operators are:",
  "options": [
   "Push and pop",
   "Selection, crossover and mutation",
   "Fuzzification and defuzzification",
   "Forward and backward chaining"
  ],
  "answer": 1,
  "explanation": "Encode candidates as chromosomes, then repeatedly select, cross over and mutate.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-8768e4ae19-240",
  "t": 9,
  "sub": "9.6",
  "text": "Which activation function is used in a Hopfield network?",
  "options": [
   "ReLU",
   "Sigmoid",
   "Sign (bipolar threshold)",
   "Softmax"
  ],
  "answer": 2,
  "explanation": "Hopfield neurons output +1 or −1 and settle into stored patterns (associative memory).",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-6549588d28-241",
  "t": 9,
  "sub": "9.6",
  "text": "A single-layer perceptron cannot learn:",
  "options": [
   "AND",
   "OR",
   "XOR",
   "NOT"
  ],
  "answer": 2,
  "explanation": "XOR is not linearly separable; a multilayer perceptron is needed.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-ec55d13405-242",
  "t": 9,
  "sub": "9.6",
  "text": "Backpropagation trains a network using:",
  "options": [
   "Genetic search",
   "Gradient descent on the error",
   "Random weights only",
   "Hebbian rule only"
  ],
  "answer": 1,
  "explanation": "Errors are propagated backwards and weights updated in the direction that reduces the error.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-fbc5728a82-243",
  "t": 9,
  "sub": "9.6",
  "text": "The Hebbian learning rule is summarized as:",
  "options": [
   "Neurons that fire together wire together",
   "Minimize squared error",
   "Winner takes all",
   "Always decrease weights"
  ],
  "answer": 0,
  "explanation": "Weights grow when connected neurons are active together.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-3be2974088-244",
  "t": 10,
  "sub": "10.1",
  "text": "In an isometric view, the three axes are inclined at:",
  "options": [
   "90° to each other",
   "120° to each other (30° to horizontal)",
   "45° to the horizontal",
   "60° to each other"
  ],
  "answer": 1,
  "explanation": "Isometric axes are 120° apart; receding lines are drawn at 30° to the horizontal.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-ea55da4050-245",
  "t": 10,
  "sub": "10.1",
  "text": "In first-angle projection, the top view is placed:",
  "options": [
   "Above the front view",
   "Below the front view",
   "To the left of the front view",
   "Not drawn"
  ],
  "answer": 1,
  "explanation": "First angle: top view below, left view on the right. Third angle: top view above.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-affb1f149d-246",
  "t": 10,
  "sub": "10.1",
  "text": "A scale of 1:100 is a:",
  "options": [
   "Full-size scale",
   "Reducing scale",
   "Enlarging scale",
   "Diagonal scale"
  ],
  "answer": 1,
  "explanation": "1 unit on the drawing = 100 units in reality.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e9791c0f10-247",
  "t": 10,
  "sub": "10.1",
  "text": "The size of an A4 sheet is:",
  "options": [
   "297 × 420 mm",
   "210 × 297 mm",
   "148 × 210 mm",
   "420 × 594 mm"
  ],
  "answer": 1,
  "explanation": "A3 is 297 × 420 mm; A5 is 148 × 210 mm.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-246dc24637-248",
  "t": 10,
  "sub": "10.2",
  "text": "Book value in depreciation means:",
  "options": [
   "Original price",
   "Cost minus accumulated depreciation",
   "Salvage value",
   "Market value"
  ],
  "answer": 1,
  "explanation": "Book value = initial cost − accumulated depreciation.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-06357a686f-249",
  "t": 10,
  "sub": "10.2",
  "text": "For a single conventional project, NPV and IRR evaluated independently will:",
  "options": [
   "Conflict",
   "Give the same accept/reject decision",
   "Make NPV always higher",
   "Make IRR always higher"
  ],
  "answer": 1,
  "explanation": "If NPV > 0 at MARR then IRR > MARR. Conflicts arise only when ranking mutually exclusive projects or with unconventional cash flows.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-aadc6bfdf3-250",
  "t": 10,
  "sub": "10.2",
  "text": "A project is acceptable when:",
  "options": [
   "IRR < MARR",
   "IRR ≥ MARR",
   "IRR = 0",
   "MARR = 0"
  ],
  "answer": 1,
  "explanation": "IRR is the rate where NPV = 0; accept when it meets or beats the minimum attractive rate of return.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-3351201a1a-251",
  "t": 10,
  "sub": "10.2",
  "text": "Project A lasts 8 years and B lasts 6 years. The study period for comparing them by repeatability is:",
  "options": [
   "12 years",
   "14 years",
   "24 years",
   "48 years"
  ],
  "answer": 2,
  "explanation": "Use the least common multiple of lives: LCM(8, 6) = 24.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-d8894e98b3-252",
  "t": 10,
  "sub": "10.2",
  "text": "Equipment costs $10,000, life 5 years, no salvage. Annual straight-line depreciation rate:",
  "options": [
   "9%",
   "15%",
   "10%",
   "20%"
  ],
  "answer": 3,
  "explanation": "Rate = 1/n = 1/5 = 20% ($2,000 per year).",
  "occurrences": [
   {
    "source": "PQ",
    "label": "Past-question collection"
   }
  ]
 },
 {
  "id": "q-47659242a2-253",
  "t": 10,
  "sub": "10.2",
  "text": "Discounted payback period differs from simple payback because it:",
  "options": [
   "Ignores cash flows",
   "Considers the time value of money",
   "Uses only the final year",
   "Uses IRR"
  ],
  "answer": 1,
  "explanation": "Cash flows are discounted before accumulating them to recover the investment.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e2ea21852e-254",
  "t": 10,
  "sub": "10.3",
  "text": "Which is a limitation of a bar (Gantt) chart?",
  "options": [
   "It shows activity durations",
   "It is easy to read",
   "It does not show interdependencies between activities",
   "It shows start dates"
  ],
  "answer": 2,
  "explanation": "Bar charts cannot show logical dependencies or the critical path; CPM/PERT networks can.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-19ae04b97a-255",
  "t": 10,
  "sub": "10.3",
  "text": "The critical path is:",
  "options": [
   "The shortest path",
   "The longest path, with zero total float",
   "The cheapest path",
   "Any path with dummy activities"
  ],
  "answer": 1,
  "explanation": "Its length is the minimum project duration; a delay on it delays the project.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-3542c7cb38-256",
  "t": 10,
  "sub": "10.3",
  "text": "PERT estimates: optimistic 2, most likely 5, pessimistic 14 days. Expected time:",
  "options": [
   "5 days",
   "6 days",
   "7 days",
   "7.5 days"
  ],
  "answer": 1,
  "explanation": "t_e = (a + 4m + b)/6 = (2 + 20 + 14)/6 = 6 days.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-dea741b030-257",
  "t": 10,
  "sub": "10.3",
  "text": "CPM vs PERT:",
  "options": [
   "CPM is probabilistic, PERT deterministic",
   "CPM is deterministic (activity-oriented), PERT probabilistic (event-oriented)",
   "Both are bar charts",
   "Neither uses networks"
  ],
  "answer": 1,
  "explanation": "PERT uses three time estimates for uncertain R&D-type projects; CPM uses one estimate and considers time–cost trade-off.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-e8aca548a2-258",
  "t": 10,
  "sub": "10.4",
  "text": "CAR insurance in construction contracts stands for:",
  "options": [
   "Consultant's All Risk",
   "Contractor's All Risk",
   "Client's Assured Risk",
   "Construction Asset Register"
  ],
  "answer": 1,
  "explanation": "Contractor's All Risk covers damage to the works during construction.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-18483af3d5-259",
  "t": 10,
  "sub": "10.4",
  "text": "Private hydropower projects in Nepal are mostly developed under which model?",
  "options": [
   "BOT",
   "BOOT",
   "EPC only",
   "Government force account"
  ],
  "answer": 1,
  "explanation": "Independent power producers build, own, operate and transfer the plant to the government after the licence period.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-fff9bbb060-260",
  "t": 10,
  "sub": "10.4",
  "text": "The correct order of risk management steps is:",
  "options": [
   "Response, identification, analysis, monitoring",
   "Identification, analysis, response planning, monitoring",
   "Monitoring, analysis, identification, response",
   "Analysis, monitoring, response, identification"
  ],
  "answer": 1,
  "explanation": "Identify → analyse (qualitative/quantitative) → plan responses (avoid, transfer, mitigate, accept) → monitor.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-25d7c58d7f-261",
  "t": 10,
  "sub": "10.4",
  "text": "Bid security submitted with a tender is also called:",
  "options": [
   "Performance bond",
   "Earnest money",
   "Retention money",
   "Advance payment"
  ],
  "answer": 1,
  "explanation": "Bid security (earnest money) is returned to unsuccessful bidders; the winner then gives a performance security.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-bb0ed70d78-262",
  "t": 10,
  "sub": "10.5",
  "text": "An engineer's paramount obligation under professional ethics is to:",
  "options": [
   "The employer's profit",
   "Public safety, health and welfare",
   "Personal reputation",
   "The client's wishes in every case"
  ],
  "answer": 1,
  "explanation": "Codes of ethics put public safety, health and welfare first.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-386ec15ca3-263",
  "t": 10,
  "sub": "10.5",
  "text": "Which body registers engineers and regulates engineering practice in Nepal?",
  "options": [
   "Nepal Engineers' Association (NEA)",
   "Nepal Engineering Council (NEC)",
   "Ministry of Education",
   "Public Service Commission"
  ],
  "answer": 1,
  "explanation": "NEC is the statutory regulator. NEA is the professional association of engineers.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-1343bd267a-264",
  "t": 10,
  "sub": "10.5",
  "text": "Personal protective equipment (PPE) falls under:",
  "options": [
   "Engineering economics",
   "Occupational health and safety",
   "Contract management",
   "Quality assurance"
  ],
  "answer": 1,
  "explanation": "OHS covers hazard identification, PPE and safe work practices.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-c819882a8c-265",
  "t": 10,
  "sub": "10.6",
  "text": "The Nepal Engineering Council Act was enacted in:",
  "options": [
   "2049 BS",
   "2055 BS",
   "2059 BS",
   "2079 BS"
  ],
  "answer": 1,
  "explanation": "NEC Act 2055 BS (1998/99 AD). Its first amendment was 2079 BS. (The recalled key said 1992 AD, which is wrong; the options were rewritten.)",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-f8d0120b08-266",
  "t": 10,
  "sub": "10.6",
  "text": "The first amendment of the Nepal Engineering Council Act was in:",
  "options": [
   "2076 BS",
   "2077 BS",
   "2078 BS",
   "2079 BS"
  ],
  "answer": 3,
  "explanation": "The NEC Act 2055 was first amended in 2079 BS, which introduced the registration examination.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-5035332b56-267",
  "t": 10,
  "sub": "10.6",
  "text": "The tenure of the NEC Registrar is:",
  "options": [
   "2 years",
   "3 years",
   "4 years",
   "5 years"
  ],
  "answer": 2,
  "explanation": "Recalled answer: 4 years. Confirm this in the NEC Act before the exam.",
  "occurrences": [
   {
    "source": "J26",
    "label": "NEC Jan 2026 (recalled)"
   }
  ]
 },
 {
  "id": "q-53f71823a6-268",
  "t": 10,
  "sub": "10.6",
  "text": "What type of organization is the Nepal Engineering Council?",
  "options": [
   "Government department",
   "Private company",
   "Autonomous statutory body",
   "NGO"
  ],
  "answer": 2,
  "explanation": "NEC is an autonomous body established under the NEC Act 2055.",
  "occurrences": [
   {
    "source": "R",
    "label": "Candidate recall"
   }
  ]
 },
 {
  "id": "q-42296dab91-269",
  "t": 10,
  "sub": "10.6",
  "text": "The Nepal Engineering Council Regulations were issued in:",
  "options": [
   "2055 BS",
   "2057 BS",
   "2063 BS",
   "2079 BS"
  ],
  "answer": 1,
  "explanation": "NEC Regulations 2057 BS (2001), with the third amendment in 2080 BS.",
  "occurrences": [
   {
    "source": "P",
    "label": "Practice question"
   }
  ]
 },
 {
  "id": "q-3e2bc15115-270",
  "t": 1,
  "sub": "1.1",
  "text": "What is the formula for no-load voltage gain in a common emitter configuration?",
  "options": [
   "$$A_v = \\frac{R_C}{r_e}$$",
   "$$A_v = -\\frac{\\beta R_C}{r_e}$$",
   "$$A_v = \\frac{\\beta R_C}{r_e}$$",
   "$$A_v = -\\frac{R_C}{r_e}$$"
  ],
  "answer": 1,
  "explanation": "The no-load voltage gain in a common emitter configuration is given by $$A_v = -\\frac{\\beta R_C}{r_e}$$, where **β** is the current gain, $${R_C}$$ is the collector resistance, and $$r_e$$ is the intrinsic emitter resistance.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q1"
   }
  ]
 },
 {
  "id": "q-d7514bc3aa-271",
  "t": 6,
  "sub": "6.6",
  "text": "What are the types of perspective projection?",
  "options": [
   "One-point and two-point perspective",
   "Two-point and three-point perspective",
   "One-point, two-point, and three-point perspective",
   "Only one-point perspective"
  ],
  "answer": 2,
  "explanation": "Perspective projection can be classified into **one-point**, **two-point**, and **three-point perspectives**, depending on how many vanishing points are present.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q2"
   }
  ]
 },
 {
  "id": "q-48db2f6b41-272",
  "t": 2,
  "sub": "2.6",
  "text": "In a semaphore problem, what does \"18P, xV, ...\" represent?",
  "options": [
   "18 signal operations and x wait operations",
   "18 wait operations and x signal operations",
   "18 processes and x variables",
   "18 producers and x consumers"
  ],
  "answer": 1,
  "explanation": "In semaphore terminology, **P** represents the wait operation, while **V** represents the signal operation. Therefore, \"18P\" indicates 18 wait operations.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q3"
   }
  ]
 },
 {
  "id": "q-4c282173a2-273",
  "t": 1,
  "sub": "1.1",
  "text": "What is the latest amendment to the Labor Act?",
  "options": [
   "2072",
   "2073",
   "2074",
   "2075"
  ],
  "answer": 2,
  "explanation": "The latest amendment to the Labor Act was made in **2074 BS (2017 AD)**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q4"
   }
  ]
 },
 {
  "id": "q-a20c5b4323-274",
  "t": 1,
  "sub": "1.2",
  "text": "How many parallel TCP connections does FTP typically use?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "answer": 1,
  "explanation": "FTP typically uses **two parallel TCP connections**: one for control commands and the other for data transfer.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q5"
   }
  ]
 },
 {
  "id": "q-75a5a19c2f-275",
  "t": 1,
  "sub": "1.1",
  "text": "Which of the following is based on the principle of conservation of charge?",
  "options": [
   "KCL",
   "KVL",
   "Ohm's Law",
   "Coulomb's Law"
  ],
  "answer": 0,
  "explanation": "**Kirchhoff's Current Law (KCL)** is based on the principle of conservation of electric charge.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q6"
   }
  ]
 },
 {
  "id": "q-b4de1c41f5-276",
  "t": 10,
  "sub": "10.3",
  "text": "What is the primary purpose of a Project Charter?",
  "options": [
   "To outline the project scope and objectives",
   "To define the project schedule",
   "To identify project risks",
   "To allocate project resources"
  ],
  "answer": 0,
  "explanation": "A **Project Charter** is a document that outlines the project's scope, objectives, and stakeholders at a high level.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q7"
   }
  ]
 },
 {
  "id": "q-2b75077bed-277",
  "t": 1,
  "sub": "1.6",
  "text": "How many transistors are used in Class A amplifiers?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "answer": 0,
  "explanation": "A **Class A amplifier** typically uses **one transistor** for amplification, operating in the active region for the entire input signal cycle.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q8"
   }
  ]
 },
 {
  "id": "q-933c31f8d6-278",
  "t": 9,
  "sub": "9.6",
  "text": "What is the purpose of Gradient Descent?",
  "options": [
   "To maximize a function",
   "To minimize a function by iteratively moving in the direction of steepest descent",
   "To find the global maximum of a function",
   "To solve linear equations"
  ],
  "answer": 1,
  "explanation": "**Gradient Descent** is an optimization algorithm used to minimize a function by iteratively moving towards the steepest descent direction, based on the gradient of the function.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q9"
   }
  ]
 },
 {
  "id": "q-0fb5d6b5fc-279",
  "t": 8,
  "sub": "8.4",
  "text": "The Waterfall model is the oldest approach for what purpose?",
  "options": [
   "Software engineering",
   "Software planning",
   "Hardware design",
   "Project management"
  ],
  "answer": 0,
  "explanation": "The **Waterfall model** is the oldest and most traditional approach used in **software engineering** for systematic and sequential software development.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q10"
   }
  ]
 },
 {
  "id": "q-2f6bb6630c-280",
  "t": 9,
  "sub": "9.3",
  "text": "What is the IEEE standard for wireless networks?",
  "options": [
   "801.11",
   "802.11",
   "803.11",
   "804.11"
  ],
  "answer": 1,
  "explanation": "The IEEE **802.11** standard defines the protocols for implementing wireless local area networks (WLANs).",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q11"
   }
  ]
 },
 {
  "id": "q-ed4f6af4b7-281",
  "t": 2,
  "sub": "2.1",
  "text": "What is Fan-out in digital circuits?",
  "options": [
   "Number of inputs connected without degrading voltage",
   "Number of standard loads that the output of a logic gate can drive",
   "The speed at which a logic gate can operate",
   "The power consumption of a logic gate"
  ],
  "answer": 1,
  "explanation": "**Fan-out** is the number of standard loads that a digital logic gate can drive while maintaining specified output voltage levels.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q12"
   }
  ]
 },
 {
  "id": "q-cb85396ad0-282",
  "t": 10,
  "sub": "10.6",
  "text": "What is the total number of registered professional engineers in NEC?",
  "options": [
   "51",
   "61",
   "71",
   "81"
  ],
  "answer": 1,
  "explanation": "The total number of registered professional engineers in **Nepal Engineering Council (NEC)** is **61**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q13"
   }
  ]
 },
 {
  "id": "q-98a961ecf0-283",
  "t": 7,
  "sub": "7.6",
  "text": "What is a viewport?",
  "options": [
   "A virtual machine",
   "A type of computer monitor",
   "Visible area of a web page in a browser window",
   "A graphics card component"
  ],
  "answer": 2,
  "explanation": "A **viewport** is the portion of a web page that is visible within the browser window, excluding scrollable content outside the frame.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q14"
   }
  ]
 },
 {
  "id": "q-4c75d6d8db-284",
  "t": 2,
  "sub": "2.4",
  "text": "What is a feature of the 8086 microprocessor's internal architecture?",
  "options": [
   "8-bit data bus",
   "16-bit data bus",
   "32-bit data bus",
   "64-bit data bus"
  ],
  "answer": 1,
  "explanation": "The **8086 microprocessor** has a **16-bit data bus**, meaning it can transfer 16 bits of data simultaneously.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q15"
   }
  ]
 },
 {
  "id": "q-15281e2a31-285",
  "t": 2,
  "sub": "2.5",
  "text": "What does GUI stand for?",
  "options": [
   "General User Interface",
   "Graphical User Interface",
   "Global User Interaction",
   "Guided User Input"
  ],
  "answer": 1,
  "explanation": "**GUI** stands for **Graphical User Interface**, which allows users to interact with electronic devices through graphical icons and visual indicators.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q16"
   }
  ]
 },
 {
  "id": "q-bdc4b9639a-286",
  "t": 1,
  "sub": "1.4",
  "text": "What does an IP address contain?",
  "options": [
   "Only network portion",
   "Only host portion",
   "Network and host portions",
   "MAC address"
  ],
  "answer": 2,
  "explanation": "An **IP address** consists of a **network portion** and a **host portion**, used to identify devices in a network.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q17"
   }
  ]
 },
 {
  "id": "q-40d1ad7b8f-287",
  "t": 1,
  "sub": "1.3",
  "text": "What type of value is a 230V rating on a heater?",
  "options": [
   "Peak value",
   "Average value",
   "RMS (Root Mean Square) value",
   "Instantaneous value"
  ],
  "answer": 2,
  "explanation": "The **230V rating** on a heater refers to its **RMS voltage**, which represents the effective voltage in an AC circuit.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q18"
   }
  ]
 },
 {
  "id": "q-8eac60a619-288",
  "t": 3,
  "sub": "3.3",
  "text": "Which function is typically used to classify into 3 or more classes?",
  "options": [
   "Sigmoid function",
   "ReLU function",
   "Softmax function",
   "Tanh function"
  ],
  "answer": 2,
  "explanation": "The **Softmax function** is commonly used for multi-class classification problems, where it outputs a probability distribution over multiple classes.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q19"
   }
  ]
 },
 {
  "id": "q-df0e0c37cd-289",
  "t": 10,
  "sub": "10.4",
  "text": "What is a contingent project?",
  "options": [
   "A project with uncertain funding",
   "A project that depends on the outcome of another project",
   "A project with high risk",
   "A project with multiple stakeholders"
  ],
  "answer": 1,
  "explanation": "A **contingent project** is one that is dependent on the completion or outcome of another project before it can proceed.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q20"
   }
  ]
 },
 {
  "id": "q-cf7dc54c51-290",
  "t": 1,
  "sub": "1.3",
  "text": "In dimensionality, what does the symbol $$R$$ typically refer to?",
  "options": [
   "Rational numbers",
   "Real numbers",
   "Relative numbers",
   "Random numbers"
  ],
  "answer": 1,
  "explanation": "In dimensionality, $$R$$ generally refers to the set of **Real numbers**, which represents continuous values.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q21"
   }
  ]
 },
 {
  "id": "q-e6779e6223-291",
  "t": 10,
  "sub": "10.1",
  "text": "Which is considered the fastest line drawing algorithm?",
  "options": [
   "DDA algorithm",
   "Bresenham's algorithm",
   "Midpoint algorithm",
   "Xiaolin Wu's algorithm"
  ],
  "answer": 1,
  "explanation": "**Bresenham's algorithm** is widely considered one of the fastest and most efficient line drawing algorithms due to its use of integer calculations.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q22"
   }
  ]
 },
 {
  "id": "q-bf4856f896-292",
  "t": 4,
  "sub": "4.1",
  "text": "What shape does a unit square become after shearing?",
  "options": [
   "Rectangle",
   "Parallelogram",
   "Rhombus",
   "Trapezoid"
  ],
  "answer": 1,
  "explanation": "When a **unit square** undergoes **shearing**, it transforms into a **parallelogram**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q23"
   }
  ]
 },
 {
  "id": "q-104b2edc6c-293",
  "t": 6,
  "sub": "6.3",
  "text": "What is the worst-case time complexity of Shell sort?",
  "options": [
   "$$O(n)$$",
   "$$O(n \\log n)$$",
   "$$O(n^2)$$",
   "$$O(n^3)$$"
  ],
  "answer": 2,
  "explanation": "The **worst-case time complexity** of **Shell sort** is $$O(n^2)$$ for the commonly used gap sequences.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q24"
   }
  ]
 },
 {
  "id": "q-b75e0e858b-294",
  "t": 10,
  "sub": "10.6",
  "text": "What is the tenure of the registrar of NEC (Nepal Engineering Council)?",
  "options": [
   "2 years",
   "3 years",
   "4 years",
   "5 years"
  ],
  "answer": 2,
  "explanation": "The **tenure** of the registrar of the **Nepal Engineering Council (NEC)** is **4 years**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q25"
   }
  ]
 },
 {
  "id": "q-e1b7274af7-295",
  "t": 10,
  "sub": "10.2",
  "text": "What is the objective of NEA?",
  "options": [
   "To regulate engineering practices in Nepal",
   "To promote development of engineering science and technology in Nepal",
   "To provide engineering education in Nepal",
   "To certify engineering projects in Nepal"
  ],
  "answer": 1,
  "explanation": "The **Nepal Engineers' Association (NEA)** aims to promote the development of engineering science and technology in Nepal.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q26"
   }
  ]
 },
 {
  "id": "q-4f451bc939-296",
  "t": 5,
  "sub": "5.5",
  "text": "Which of the following is not an application layer protocol?",
  "options": [
   "FTP",
   "SMTP",
   "HTTP",
   "TCP"
  ],
  "answer": 3,
  "explanation": "**TCP** is a **transport layer protocol**, while **FTP**, **SMTP**, and **HTTP** are **application layer protocols**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q27"
   }
  ]
 },
 {
  "id": "q-6631a8a96b-297",
  "t": 1,
  "sub": "1.2",
  "text": "How many resonance frequencies does a crystal typically have?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "answer": 1,
  "explanation": "A **crystal** typically has **two resonance frequencies**: series and parallel resonance frequencies.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q28"
   }
  ]
 },
 {
  "id": "q-67a55f1ff5-298",
  "t": 2,
  "sub": "2.3",
  "text": "How many flip-flops are required for representing flags of 8085?",
  "options": [
   "5",
   "6",
   "8",
   "10"
  ],
  "answer": 0,
  "explanation": "The **8085 microprocessor** has **5 flags** (Sign, Zero, Auxiliary Carry, Parity, and Carry), so it requires **5 flip-flops** to represent them.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q29"
   }
  ]
 },
 {
  "id": "q-e89c0754ec-299",
  "t": 7,
  "sub": "7.2",
  "text": "Warshall algorithm gives:",
  "options": [
   "Transitive closure",
   "Shortest distance",
   "Minimum spanning tree",
   "Topological sorting"
  ],
  "answer": 0,
  "explanation": "**Warshall's algorithm** computes the **transitive closure** of a directed graph by determining the reachability of vertices.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q30"
   }
  ]
 },
 {
  "id": "q-c367febd55-300",
  "t": 1,
  "sub": "1.1",
  "text": "Which bias configuration is most stable?",
  "options": [
   "Voltage Divider",
   "CE",
   "CB",
   "CC"
  ],
  "answer": 0,
  "explanation": "The **Voltage Divider Bias** configuration is most stable because it provides better stabilization of the operating point against variations in $$\\beta$$ or temperature.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q31"
   }
  ]
 },
 {
  "id": "q-e4ab6db7f5-301",
  "t": 1,
  "sub": "1.1",
  "text": "SR flip-flop is called:",
  "options": [
   "Monostable",
   "Bistable multivibrator",
   "Astable multivibrator",
   "Schmitt trigger"
  ],
  "answer": 1,
  "explanation": "The **SR flip-flop** is a type of **bistable multivibrator** because it has two stable states.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q32"
   }
  ]
 },
 {
  "id": "q-178d663796-302",
  "t": 6,
  "sub": "6.3",
  "text": "Iterative Deepening DFS space complexity is:",
  "options": [
   "$$b^{d/2}$$",
   "$$O(bd)$$",
   "$$O(d)$$",
   "$$O(n)$$"
  ],
  "answer": 2,
  "explanation": "The **space complexity** of **Iterative Deepening Depth First Search (IDDFS)** is $$O(d)$$, where $$d$$ is the depth of the solution.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q33"
   }
  ]
 },
 {
  "id": "q-d6351dfea2-303",
  "t": 9,
  "sub": "9.6",
  "text": "ANN doesn't have:",
  "options": [
   "Explanation of results",
   "Learning capability",
   "Parallel processing",
   "Fault tolerance"
  ],
  "answer": 0,
  "explanation": "**Artificial Neural Networks (ANN)** lack transparency in their decision-making process, which means they cannot easily provide an **explanation of results**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q34"
   }
  ]
 },
 {
  "id": "q-5b0ec14a9a-304",
  "t": 1,
  "sub": "1.1",
  "text": "What is a key property of bilateral circuits?",
  "options": [
   "They only allow current to flow in one direction",
   "They have different impedances for different directions of current flow",
   "They have the same impedance regardless of the direction of current flow",
   "They require AC power sources to function"
  ],
  "answer": 2,
  "explanation": "A **bilateral circuit** exhibits the same impedance regardless of the direction of current flow, which makes it symmetric.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q35"
   }
  ]
 },
 {
  "id": "q-8d4f02a632-305",
  "t": 2,
  "sub": "2.2",
  "text": "Signed int are present in which C++ library?",
  "options": [
   "std_1164",
   "std_arth",
   "cstdint",
   "iostream"
  ],
  "answer": 2,
  "explanation": "The **cstdint** library in C++ provides fixed-width integer types like **signed int** and **unsigned int**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q36"
   }
  ]
 },
 {
  "id": "q-29f26c1e93-306",
  "t": 1,
  "sub": "1.1",
  "text": "C++ program for loop syntax is:",
  "options": [
   "for (initialization; condition; increment/decrement)",
   "for (condition; initialization; increment/decrement)",
   "for (increment/decrement; condition; initialization)",
   "for (condition; increment/decrement; initialization)"
  ],
  "answer": 0,
  "explanation": "The correct **for loop syntax** in C++ is `for (initialization; condition; increment/decrement)`.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q37"
   }
  ]
 },
 {
  "id": "q-4c13c53689-307",
  "t": 3,
  "sub": "3.2",
  "text": "In a program, int *p = NULL means:",
  "options": [
   "$$p$$ is a null pointer",
   "Invalid assignment",
   "$$p$$ is an integer",
   "$$p$$ is a void pointer"
  ],
  "answer": 0,
  "explanation": "`int *p = NULL` means that $$p$$ **is a null pointer**, which points to nothing.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q38"
   }
  ]
 },
 {
  "id": "q-684e606323-308",
  "t": 3,
  "sub": "3.4",
  "text": "If a derived class has a constructor, which of the following is true?",
  "options": [
   "Constructor of derived is called first and then that of base class",
   "Constructor of base class is called first and then that of derived class",
   "Only the derived class constructor is called",
   "Only the base class constructor is called"
  ],
  "answer": 1,
  "explanation": "In C++, the **base class constructor** is always called first, followed by the **derived class constructor**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q39"
   }
  ]
 },
 {
  "id": "q-4fd5d12e34-309",
  "t": 6,
  "sub": "6.1",
  "text": "Pumping Lemma is used to detect:",
  "options": [
   "Regular language",
   "Non-regular language",
   "CFG",
   "Recursively enumerable language"
  ],
  "answer": 1,
  "explanation": "The **Pumping Lemma** is a property used to prove that a language is **non-regular** by showing that no finite state automaton can recognize it.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q40"
   }
  ]
 },
 {
  "id": "q-5d3e535f5b-310",
  "t": 2,
  "sub": "2.6",
  "text": "Non-maskable interrupt is:",
  "options": [
   "TRAP",
   "INTR",
   "RST 7.5",
   "HOLD"
  ],
  "answer": 0,
  "explanation": "**TRAP** is a non-maskable interrupt in the 8085 microprocessor, meaning it cannot be disabled by software.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q41"
   }
  ]
 },
 {
  "id": "q-046619649c-311",
  "t": 10,
  "sub": "10.2",
  "text": "In a Sequence diagram, vertical line indicates:",
  "options": [
   "Time",
   "Message",
   "Object",
   "Class"
  ],
  "answer": 0,
  "explanation": "In a **Sequence diagram**, the vertical line represents **time progression**, while horizontal arrows indicate messages.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q42"
   }
  ]
 },
 {
  "id": "q-4ac9bff003-312",
  "t": 2,
  "sub": "2.5",
  "text": "8085 register connected to data bus:",
  "options": [
   "IR",
   "MBR",
   "PC",
   "MAR"
  ],
  "answer": 1,
  "explanation": "The **Memory Buffer Register (MBR)** is directly connected to the **data bus** for reading or writing data.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q43"
   }
  ]
 },
 {
  "id": "q-22d0fd4f0d-313",
  "t": 5,
  "sub": "5.4",
  "text": "IPSec mode for privacy, integrity, and authenticity:",
  "options": [
   "Tunnel mode",
   "Transport mode",
   "Hybrid mode",
   "Encapsulation mode"
  ],
  "answer": 0,
  "explanation": "**Tunnel mode** in **IPSec** provides privacy, integrity, and authenticity by encapsulating the entire IP packet.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q44"
   }
  ]
 },
 {
  "id": "q-bf82c40ed3-314",
  "t": 8,
  "sub": "8.2",
  "text": "If an SMTP server sends mail to another server, it is:",
  "options": [
   "SMTP client",
   "SMTP server",
   "POP3 client",
   "IMAP client"
  ],
  "answer": 0,
  "explanation": "When an **SMTP server** sends mail to another SMTP server, it acts as an **SMTP client**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q45"
   }
  ]
 },
 {
  "id": "q-922e21b2ab-315",
  "t": 5,
  "sub": "5.1",
  "text": "Connection-less protocol:",
  "options": [
   "UDP",
   "TCP",
   "HTTP",
   "FTP"
  ],
  "answer": 0,
  "explanation": "**UDP** is a **connection-less protocol**, meaning it does not establish a connection before data transmission.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q46"
   }
  ]
 },
 {
  "id": "q-c74287e9a6-316",
  "t": 6,
  "sub": "6.1",
  "text": "Finite state machine has how many tuples?",
  "options": [
   "4",
   "5",
   "6",
   "7"
  ],
  "answer": 2,
  "explanation": "A **Finite State Machine (FSM)** is defined by 6 tuples: $$(Q, \\Sigma, \\delta, q_0, F, T)$$.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q47"
   }
  ]
 },
 {
  "id": "q-de2fb3a765-317",
  "t": 6,
  "sub": "6.3",
  "text": "Representation of composition of two TM languages:",
  "options": [
   "$$(TM_1) \\cup (TM_2)$$",
   "$$TM_1 + TM_2$$",
   "$$TM_1 * TM_2$$",
   "$$TM_1 \\wedge TM_2$$"
  ],
  "answer": 1,
  "explanation": "The composition of two **Turing Machine languages** is represented as $$TM_1 + TM_2$$.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q48"
   }
  ]
 },
 {
  "id": "q-a41cbf900d-318",
  "t": 6,
  "sub": "6.5",
  "text": "2D transformations require:",
  "options": [
   "1D plane",
   "2D plane",
   "3D plane",
   "4D plane"
  ],
  "answer": 1,
  "explanation": "**2D transformations** are performed on a **2D plane** involving operations like translation, scaling, and rotation.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q49"
   }
  ]
 },
 {
  "id": "q-c890fe3f98-319",
  "t": 2,
  "sub": "2.2",
  "text": "Binary tree of height $$h$$ has at most ... nodes:",
  "options": [
   "$$2^h - 1$$",
   "$$2^{(h+1)} - 1$$",
   "$$2^h$$",
   "$$2^{(h-1)}$$"
  ],
  "answer": 1,
  "explanation": "A **binary tree** of height $$h$$ can have at most $$2^{(h+1)} - 1$$ nodes, assuming the height is measured starting from 0.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q50"
   }
  ]
 },
 {
  "id": "q-60c406311e-320",
  "t": 4,
  "sub": "4.2",
  "text": "Direct Access is seen in:",
  "options": [
   "disk",
   "RAM",
   "cache",
   "register"
  ],
  "answer": 0,
  "explanation": "**Direct access** refers to the ability to read or write data at any location in the storage device without sequentially accessing all previous data. This is seen in **disk storage**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q51"
   }
  ]
 },
 {
  "id": "q-b3ce818c0e-321",
  "t": 8,
  "sub": "8.1",
  "text": "Incremental model is:",
  "options": [
   "linear + waterfall",
   "linear + RAD",
   "iterative + waterfall",
   "iterative + RAD"
  ],
  "answer": 0,
  "explanation": "The **incremental model** combines linear and waterfall approaches, with software being developed in small, iterative steps or increments.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q52"
   }
  ]
 },
 {
  "id": "q-098704f53b-322",
  "t": 7,
  "sub": "7.3",
  "text": "Optimization algorithms use:",
  "options": [
   "heuristics",
   "statistics",
   "deterministic methods",
   "brute force"
  ],
  "answer": 0,
  "explanation": "**Optimization algorithms** often use **heuristics**, which are problem-solving techniques based on experience or intuition rather than precise methods.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q53"
   }
  ]
 },
 {
  "id": "q-0b2183b396-323",
  "t": 8,
  "sub": "8.2",
  "text": "Process of developing modules from sub systems:",
  "options": [
   "modular decomposition",
   "modular composition",
   "functional decomposition",
   "structural composition"
  ],
  "answer": 0,
  "explanation": "The **modular decomposition** process involves breaking down larger subsystems into smaller, manageable modules.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q54"
   }
  ]
 },
 {
  "id": "q-f9beba1ead-324",
  "t": 5,
  "sub": "5.2",
  "text": "Which UML diagram is used to model the flow of control or data in a system?",
  "options": [
   "UML Diagram",
   "Activity Diagram",
   "Sequence Diagram",
   "Class Diagram"
  ],
  "answer": 1,
  "explanation": "The **Activity Diagram** in UML is used to model workflows, representing the flow of control or data between activities.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q55"
   }
  ]
 },
 {
  "id": "q-132bac5bf0-325",
  "t": 3,
  "sub": "3.3",
  "text": "What does the association represent in UML?",
  "options": [
   "Relationship between classes",
   "Inheritance between classes",
   "Dependency between objects",
   "Encapsulation of data"
  ],
  "answer": 0,
  "explanation": "**Association** in UML represents a relationship between classes, indicating that objects of one class are connected to objects of another class.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q56"
   }
  ]
 },
 {
  "id": "q-4ac056576e-326",
  "t": 6,
  "sub": "6.3",
  "text": "How many tuples does a Turing machine have?",
  "options": [
   "5",
   "6",
   "7",
   "8"
  ],
  "answer": 2,
  "explanation": "A **Turing machine** is formally defined by 7 tuples: $$(Q, \\Sigma, \\delta, q_0, F, T, \\Gamma)$$, representing its states, input alphabet, transition function, start state, final states, tape alphabet, and tape movement.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q57"
   }
  ]
 },
 {
  "id": "q-41901a4601-327",
  "t": 10,
  "sub": "10.6",
  "text": "To whom does the registrar submit annual plans and programs of council?",
  "options": [
   "Government",
   "PM",
   "NEC",
   "President"
  ],
  "answer": 2,
  "explanation": "**NEC (National Education Commission)**: The NEC is the body responsible for national education policy, and it would be the most likely recipient of annual plans and programs related to educational governance and reform.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q58"
   }
  ]
 },
 {
  "id": "q-413299449c-328",
  "t": 3,
  "sub": "3.3",
  "text": "Port used for HTML:",
  "options": [
   "80",
   "443",
   "21",
   "25"
  ],
  "answer": 0,
  "explanation": "**Port 80** is the default port used for **HTTP** (HyperText Transfer Protocol), which is commonly used to serve HTML pages.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q59"
   }
  ]
 },
 {
  "id": "q-a4ce31b842-329",
  "t": 5,
  "sub": "5.2",
  "text": "What is taken for repetitive analysis?",
  "options": [
   "LCM",
   "HCF",
   "Mean",
   "Mode"
  ],
  "answer": 0,
  "explanation": "**LCM (Least Common Multiple)** is often used for repetitive analysis, such as when determining intervals for repeating events or cycles.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Short Q60"
   }
  ]
 },
 {
  "id": "q-77bba59a03-330",
  "t": 7,
  "sub": "7.5",
  "text": "What is it called when multiple threads are in execution?",
  "options": [
   "Multiprocessing",
   "Multithreading",
   "Parallel processing",
   "Concurrent execution"
  ],
  "answer": 1,
  "explanation": "Multithreading is the process of executing multiple threads concurrently in a program. It is a form of parallelism that allows for more efficient use of resources and better performance.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q1"
   }
  ]
 },
 {
  "id": "q-b21025440d-331",
  "t": 1,
  "sub": "1.3",
  "text": "Which two main processes does Natural Language Processing (NLP) contain?",
  "options": [
   "Natural Language Understanding (NLU) and Natural Language Generation (NLG)",
   "Natural Language Interpretation (NLI) and Natural Language Synthesis (NLS)",
   "Natural Language Analysis (NLA) and Natural Language Production (NLP)",
   "Natural Language Recognition (NLR) and Natural Language Output (NLO)"
  ],
  "answer": 0,
  "explanation": "NLP mainly involves two key processes: Natural Language Understanding (NLU) for interpreting the meaning of text and Natural Language Generation (NLG) for producing meaningful text.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q2"
   }
  ]
 },
 {
  "id": "q-7e32462980-332",
  "t": 1,
  "sub": "1.1",
  "text": "What is a key limitation of Finite State Machines (FSM)?",
  "options": [
   "Cannot handle parallel processes",
   "Cannot handle recursive functions",
   "Cannot handle context-dependent behavior",
   "Cannot handle non-deterministic input"
  ],
  "answer": 2,
  "explanation": "FSMs are limited in that they cannot handle context-dependent behavior, which means they cannot remember the past state beyond the current state in many cases.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q3"
   }
  ]
 },
 {
  "id": "q-5bd17255b7-333",
  "t": 5,
  "sub": "5.2",
  "text": "How many parallel TCP connections does FTP use?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "answer": 1,
  "explanation": "FTP uses two TCP connections: one for control (commands) and the other for transferring data.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q4"
   }
  ]
 },
 {
  "id": "q-b7d95ff577-334",
  "t": 1,
  "sub": "1.1",
  "text": "What is the formula for no-load voltage gain of a BJT in fixed bias configuration?",
  "options": [
   "-β(Rc/re)",
   "β(Rc/re)",
   "-(Rc/re)",
   "(β/Rc)*re"
  ],
  "answer": 0,
  "explanation": "The no-load voltage gain of a BJT in a fixed bias configuration is given by the formula:\n$$A_v = -\\beta \\left( \\frac{R_c}{r_e} \\right)$$\nWhere β is the current gain, Rc is the collector resistance, and re is the emitter resistance.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q5"
   }
  ]
 },
 {
  "id": "q-983d017580-335",
  "t": 6,
  "sub": "6.5",
  "text": "What is the formula for 3D rotation around the z-axis?",
  "options": [
   "$$",
   "$$",
   "$$",
   "$$"
  ],
  "answer": 0,
  "explanation": "The correct formula for 3D rotation around the z-axis is:\n\n$$\\begin{bmatrix} \\cos(\\theta) & -\\sin(\\theta) & 0 \\ \\sin(\\theta) & \\cos(\\theta) & 0 \\ 0 & 0 & 1 \\end{bmatrix}$$\n\nThis matrix rotates a point counterclockwise by an angle $$(\\theta)$$ around the z-axis.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q6"
   }
  ]
 },
 {
  "id": "q-3b4093cd5f-336",
  "t": 7,
  "sub": "7.5",
  "text": "In a multiprocessor environment, how is synchronization typically achieved?",
  "options": [
   "Using semaphores or mutexes",
   "Using shared memory",
   "Using cache coherence protocols",
   "Using message passing"
  ],
  "answer": 0,
  "explanation": "In a multiprocessor environment, synchronization is typically achieved using semaphores or mutexes. These tools help manage access to shared resources by ensuring that only one process or thread can access a critical section of code at a time, preventing race conditions.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q7"
   }
  ]
 },
 {
  "id": "q-0d3eb15e17-337",
  "t": 6,
  "sub": "6.6",
  "text": "What is the transformation matrix for oblique parallel projection?",
  "options": [
   "$$",
   "$$",
   "$$",
   "$$"
  ],
  "answer": 0,
  "explanation": "The transformation matrix for oblique parallel projection is typically represented as shown in option 1. In this case, ( m_x ) and ( m_y ) represent the shear factors along the x and y axes, respectively. These shear factors cause the projection to be oblique (not perpendicular) to the projection plane.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q8"
   }
  ]
 },
 {
  "id": "q-e050125684-338",
  "t": 8,
  "sub": "8.3",
  "text": "If three 2-ohm resistors are connected in a triangle, what is the resistance measured between any two terminals?",
  "options": [
   "0.67 ohms",
   "1 ohm",
   "1.33 ohms",
   "2 ohms"
  ],
  "answer": 0,
  "explanation": "When three resistors are connected in a triangle (delta configuration), the equivalent resistance between any two terminals is calculated using the formula:\n\n$$R_{\\text{eq}} = \\frac{R}{2} \\quad \\text{where } R \\text{ is the resistance of each resistor.}$$\n\nSubstituting $$( R = 2 , \\text{ohms} )$$gives $$( R_{\\text{eq}} = \\frac{2}{3} , \\text{ohms} )$$, which simplifies to approximately **1.33 ohms**.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q9"
   }
  ]
 },
 {
  "id": "q-4a5bcd987c-339",
  "t": 7,
  "sub": "7.6",
  "text": "What is the purpose of virtual memory in operating systems?",
  "options": [
   "To provide an illusion of larger main memory than physically available",
   "To enhance the speed of the CPU",
   "To increase the security of the system",
   "To manage peripheral devices"
  ],
  "answer": 0,
  "explanation": "Virtual memory allows an operating system to use hard disk space to simulate extra memory, enabling larger programs to run than would be possible with only physical memory.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q11"
   }
  ]
 },
 {
  "id": "q-06fb83c292-340",
  "t": 6,
  "sub": "6.2",
  "text": "How many main types of parsing are there?",
  "options": [
   "One: Top-down parsing",
   "One: Bottom-up parsing",
   "Two: Top-down parsing and Bottom-up parsing",
   "Three: Top-down parsing, Bottom-up parsing, and Middle-out parsing"
  ],
  "answer": 2,
  "explanation": "The two main types of parsing are top-down parsing (building the parse tree from the root) and bottom-up parsing (building it from the leaves).",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q12"
   }
  ]
 },
 {
  "id": "q-653d066b26-341",
  "t": 8,
  "sub": "8.6",
  "text": "What is the difference between compiler and interpreter?",
  "options": [
   "A compiler translates the entire program at once, while an interpreter translates line by line",
   "A compiler translates line by line, while an interpreter translates the entire program at once",
   "Both translate the entire program at once",
   "Both translate line by line"
  ],
  "answer": 0,
  "explanation": "A compiler translates the entire program into machine code before execution, while an interpreter translates and executes the program line by line.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q13"
   }
  ]
 },
 {
  "id": "q-0d80bb9d85-342",
  "t": 1,
  "sub": "1.1",
  "text": "How does capacitive reactance change with increasing frequency?",
  "options": [
   "Capacitive reactance increases",
   "Capacitive reactance decreases",
   "Capacitive reactance remains constant",
   "Capacitive reactance becomes zero"
  ],
  "answer": 1,
  "explanation": "The capacitive reactance $$( X_C )$$ is inversely proportional to the frequency ( f ), as given by:\n\n$$X_C = \\frac{1}{2 \\pi f C}$$\n\nThus, as frequency increases, capacitive reactance decreases.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q14"
   }
  ]
 },
 {
  "id": "q-5ac081078e-343",
  "t": 1,
  "sub": "1.4",
  "text": "How many transistors are typically used in a Class A amplifier?",
  "options": [
   "One transistor",
   "Two transistors",
   "Three transistors",
   "Four transistors"
  ],
  "answer": 0,
  "explanation": "A Class A amplifier typically uses a single transistor for signal amplification.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q15"
   }
  ]
 },
 {
  "id": "q-d94f628992-344",
  "t": 1,
  "sub": "1.3",
  "text": "What does `Ti <A, v1, v2>` typically represent in database systems?",
  "options": [
   "A table",
   "A transaction",
   "An attribute",
   "A view"
  ],
  "answer": 1,
  "explanation": "In database systems, the notation ( Ti \\<A, v1, v2> ) represents a **transaction** where ( A ) is an attribute, and ( v1 ) and ( v2 ) are the old and new values of the attribute.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q16"
   }
  ]
 },
 {
  "id": "q-eb8b9cad9e-345",
  "t": 1,
  "sub": "1.3",
  "text": "If the annual worth is 9000, what is the capitalized worth at 10%?",
  "options": [
   "10,000",
   "45,000",
   "90,000",
   "100,000"
  ],
  "answer": 2,
  "explanation": "To calculate the capitalized worth, use the formula:\n\n$$\\text{Capitalized Worth} = \\frac{\\text{Annual Worth}}{i}$$\n\nwhere ( i ) is the interest rate (10% = 0.10). Substituting the values:\n\n$$\\text{Capitalized Worth} = \\frac{9000}{0.10} = 90,000$$",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q17"
   }
  ]
 },
 {
  "id": "q-92e77b1df7-346",
  "t": 6,
  "sub": "6.6",
  "text": "What are the types of perspective projections?",
  "options": [
   "Parallel projection, Orthographic projection, Isometric projection",
   "One-point perspective, Two-point perspective, Three-point perspective",
   "Linear perspective, Aerial perspective, Forced perspective",
   "Vanishing point, Horizon line, Ground line"
  ],
  "answer": 1,
  "explanation": "Perspective projections are classified into one-point, two-point, and three-point perspectives, based on the number of vanishing points used in the representation.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q18"
   }
  ]
 },
 {
  "id": "q-9c29293385-347",
  "t": 2,
  "sub": "2.6",
  "text": "In a semaphore problem, what do P and V operations represent?",
  "options": [
   "P represents the signal operation (increment), and V represents the wait operation (decrement)",
   "P represents the wait operation (decrement), and V represents the signal operation (increment)",
   "Both represent the wait operation",
   "Both represent the signal operation"
  ],
  "answer": 1,
  "explanation": "In semaphore operations, ( P ) is used for the **wait** operation (decrement), and ( V ) is used for the **signal** operation (increment).",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q19"
   }
  ]
 },
 {
  "id": "q-782dfb20cb-348",
  "t": 2,
  "sub": "2.5",
  "text": "Who typically verifies and documents changes in a software project?",
  "options": [
   "Project Manager",
   "Software Quality Assurance (SQA) team",
   "Development Team",
   "End Users"
  ],
  "answer": 1,
  "explanation": "The Software Quality Assurance (SQA) team is responsible for verifying and documenting changes in a software project to ensure quality standards are maintained.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q20"
   }
  ]
 },
 {
  "id": "q-ba378278c5-349",
  "t": 8,
  "sub": "8.4",
  "text": "The Waterfall model is the oldest approach for what?",
  "options": [
   "System engineering",
   "Software testing",
   "Software engineering",
   "Project management"
  ],
  "answer": 2,
  "explanation": "The Waterfall model is the oldest approach to software engineering, where the development process is linear and sequential.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q21"
   }
  ]
 },
 {
  "id": "q-9e31c5af38-350",
  "t": 2,
  "sub": "2.1",
  "text": "What does \"fan-in\" refer to in digital logic?",
  "options": [
   "The number of outputs a logic gate can handle",
   "The power consumption of a logic gate",
   "The speed of a logic gate",
   "The number of inputs a logic gate can handle"
  ],
  "answer": 3,
  "explanation": "\"Fan-in\" refers to the number of inputs that a logic gate can accommodate. It is an important concept in digital logic design.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q22"
   }
  ]
 },
 {
  "id": "q-bfd2e01f21-351",
  "t": 8,
  "sub": "8.3",
  "text": "What is admissibility in the context of the A* algorithm?",
  "options": [
   "The heuristic overestimates the cost to the goal",
   "The heuristic never underestimates the cost to the goal",
   "The heuristic never overestimates the cost to the goal",
   "The heuristic is always accurate"
  ],
  "answer": 2,
  "explanation": "In the A* algorithm, a heuristic is admissible if it never overestimates the actual cost to reach the goal, ensuring the algorithm is optimal.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q23"
   }
  ]
 },
 {
  "id": "q-a61c65cbfc-352",
  "t": 6,
  "sub": "6.3",
  "text": "Who is considered the \"Father of AI\"?",
  "options": [
   "Alan Turing",
   "John McCarthy",
   "Marvin Minsky",
   "Herbert Simon"
  ],
  "answer": 1,
  "explanation": "John McCarthy is credited as the \"Father of AI\" for his foundational contributions to the field, including coining the term \"Artificial Intelligence.\"",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q24"
   }
  ]
 },
 {
  "id": "q-bb6e20813c-353",
  "t": 5,
  "sub": "5.2",
  "text": "What type of connector is typically used in Shielded Twisted Pair (STP) cable?",
  "options": [
   "BNC connector",
   "RJ11 connector",
   "RJ45 connector",
   "SC connector"
  ],
  "answer": 2,
  "explanation": "The RJ45 connector is commonly used in Shielded Twisted Pair (STP) cables, typically for Ethernet networking.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q25"
   }
  ]
 },
 {
  "id": "q-d9addc866e-354",
  "t": 2,
  "sub": "2.6",
  "text": "What is the purpose of the volatile keyword in C?",
  "options": [
   "To optimize the variable for faster access",
   "To indicate that a variable may change unexpectedly",
   "To allocate memory dynamically",
   "To protect the variable from modification"
  ],
  "answer": 1,
  "explanation": "The volatile keyword in C tells the compiler not to optimize a variable because its value may change unexpectedly, such as due to hardware interrupts or other processes.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q26"
   }
  ]
 },
 {
  "id": "q-0524f42f01-355",
  "t": 4,
  "sub": "4.1",
  "text": "What is the difference between process and thread?",
  "options": [
   "A process is an independent program, while a thread is a subset of a process",
   "A thread is an independent program, while a process is a subset of a thread",
   "A process runs within a thread, while a thread runs independently",
   "A thread has its own memory space, while a process shares memory space"
  ],
  "answer": 0,
  "explanation": "A process is a complete and independent program with its own memory space, while a thread is a smaller unit of execution within a process, sharing the process's memory space.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q27"
   }
  ]
 },
 {
  "id": "q-d2356663ff-356",
  "t": 1,
  "sub": "1.6",
  "text": "What is the output of a given C++ program?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << (char)93; // 93 is the ASCII value of ']'\n    return 0;\n}\n```",
  "options": [
   "0",
   "1",
   "]",
   "\\["
  ],
  "answer": 2,
  "explanation": "- **Digits (48–57)**: **0–9**\n- **Uppercase Letters (65–90)**: **A–Z**\n- **Lowercase Letters (97–122)**: **a–z**\n- **Space (32)**: Blank space\n- **Square Brackets (91–93)**: `[` and `]`",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q28"
   }
  ]
 },
 {
  "id": "q-16c28b58bd-357",
  "t": 1,
  "sub": "1.5",
  "text": "What type of oscillator is a Wien bridge oscillator?",
  "options": [
   "High-frequency oscillator",
   "Low-frequency oscillator",
   "Medium-frequency oscillator",
   "Voltage-controlled oscillator"
  ],
  "answer": 1,
  "explanation": "The Wien bridge oscillator is used for generating low-frequency signals and is commonly used in audio applications.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q29"
   }
  ]
 },
 {
  "id": "q-f77d9fa2ed-358",
  "t": 1,
  "sub": "1.4",
  "text": "Which of the following is not a decoder: 4:2, 8:3, 16:4, or 5:32?",
  "options": [
   "4:2",
   "8:3",
   "16:4",
   "5:32"
  ],
  "answer": 3,
  "explanation": "Decoders are typically designed with configurations where the number of input bits is less than the number of output bits. \"5:32\" is not a standard decoder configuration.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q30"
   }
  ]
 },
 {
  "id": "q-1e4d2a4eaf-359",
  "t": 1,
  "sub": "1.1",
  "text": "Which of these cannot be used as a variable name in C: true or while?",
  "options": [
   "true",
   "while"
  ],
  "answer": 1,
  "explanation": "\"while\" is a reserved keyword in C used for looping, so it cannot be used as a variable name.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q31"
   }
  ]
 },
 {
  "id": "q-43759cba73-360",
  "t": 5,
  "sub": "5.2",
  "text": "After which step is software typically ready in the spiral model?",
  "options": [
   "Usually after the 1st iteration",
   "Usually after the 2nd iteration",
   "Usually after the 3rd iteration",
   "Usually after the 4th or 5th iteration"
  ],
  "answer": 3,
  "explanation": "In the Spiral Model, software is typically ready after multiple iterations, often after the 4th or 5th iteration, as the model emphasizes refinement.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q32"
   }
  ]
 },
 {
  "id": "q-7c6aeab9ab-361",
  "t": 2,
  "sub": "2.6",
  "text": "Priority interruptions make use of which mechanisms?",
  "options": [
   "Interrupt masking and polling",
   "Polling and daisy chain",
   "Interrupt masking and daisy chain",
   "Daisy chain and polling"
  ],
  "answer": 3,
  "explanation": "Priority interruptions use mechanisms like daisy chain (for priority assignment) and polling (to check for active interrupts).",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q33"
   }
  ]
 },
 {
  "id": "q-05f6103419-362",
  "t": 2,
  "sub": "2.6",
  "text": "To which pin does the CPU send a signal as a response to the Programmable Interrupt Controller (PIC)?",
  "options": [
   "INTA (Interrupt Acknowledge)",
   "IRQ (Interrupt Request)",
   "NMI (Non-Maskable Interrupt)",
   "INTR (Interrupt Request)"
  ],
  "answer": 0,
  "explanation": "The CPU sends an INTA signal (Interrupt Acknowledge) in response to a signal from the PIC, acknowledging that the interrupt has been received.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q34"
   }
  ]
 },
 {
  "id": "q-c8bdb0651c-363",
  "t": 8,
  "sub": "8.1",
  "text": "What are the three main elements of a use case?",
  "options": [
   "Actor, System, and Goal",
   "Actor, System, and Process",
   "System, Goal, and Action",
   "Actor, Goal, and Process"
  ],
  "answer": 0,
  "explanation": "A use case typically consists of an actor (who interacts with the system), the system itself, and the goal that the actor seeks to achieve.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q35"
   }
  ]
 },
 {
  "id": "q-ca2dfd14ad-364",
  "t": 2,
  "sub": "2.5",
  "text": "What is the primary function of a Device Driver?",
  "options": [
   "To provide an interface between the operating system and hardware devices",
   "To manage system memory",
   "To execute user programs",
   "To handle network communication"
  ],
  "answer": 0,
  "explanation": "A device driver acts as a translator, allowing the operating system to communicate with hardware devices.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q36"
   }
  ]
 },
 {
  "id": "q-ac9578b2dd-365",
  "t": 4,
  "sub": "4.1",
  "text": "What are some unique features of RISC (Reduced Instruction Set Computer) architecture?",
  "options": [
   "Complex instructions, fewer registers, and complex addressing modes",
   "Simple instructions, fewer registers, and complex addressing modes",
   "Simple instructions, more registers, and load-store architecture",
   "Complex instructions, more registers, and load-store architecture"
  ],
  "answer": 2,
  "explanation": "RISC architecture uses simple instructions, more registers for better performance, and a load-store architecture where memory operations are separate from other instructions.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q37"
   }
  ]
 },
 {
  "id": "q-de23211d8a-366",
  "t": 3,
  "sub": "3.6",
  "text": "What happens when an exception occurs in C++?",
  "options": [
   "The program terminates immediately",
   "The function in which the exception occurs is ignored",
   "A function (exception handler) is called",
   "The program continues to execute without handling the exception"
  ],
  "answer": 2,
  "explanation": "In C++, when an exception occurs, an exception handler (catch block) is invoked to handle the exception and prevent program termination.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q38"
   }
  ]
 },
 {
  "id": "q-0b9aecf812-367",
  "t": 1,
  "sub": "1.1",
  "text": "How can a weak entity set be changed into a strong entity set?",
  "options": [
   "By introducing a foreign key",
   "By introducing a primary key",
   "By removing all its attributes",
   "By merging it with another weak entity set"
  ],
  "answer": 1,
  "explanation": "A weak entity set becomes a strong entity set by introducing a primary key, which enables it to be uniquely identified.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q39"
   }
  ]
 },
 {
  "id": "q-cca59bc286-368",
  "t": 8,
  "sub": "8.2",
  "text": "Which architecture does FTP use?",
  "options": [
   "Peer-to-peer architecture",
   "Client-server architecture",
   "Distributed architecture",
   "Multi-tier architecture"
  ],
  "answer": 1,
  "explanation": "FTP (File Transfer Protocol) uses the client-server architecture, where the client requests files and the server provides them.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q40"
   }
  ]
 },
 {
  "id": "q-c4dc4a54bc-369",
  "t": 9,
  "sub": "9.5",
  "text": "Which is considered the most important step in a Genetic Algorithm?",
  "options": [
   "Mutation",
   "Crossover",
   "Selection",
   "Initialization"
  ],
  "answer": 2,
  "explanation": "In a Genetic Algorithm, selection is the most important step because it determines which individuals from the population will be selected for reproduction based on their fitness.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q41"
   }
  ]
 },
 {
  "id": "q-7bd8615d5c-370",
  "t": 5,
  "sub": "5.6",
  "text": "Which type of cryptography uses two keys?",
  "options": [
   "Symmetric cryptography",
   "Asymmetric cryptography",
   "Hash-based cryptography",
   "Elliptic curve cryptography"
  ],
  "answer": 1,
  "explanation": "Asymmetric cryptography uses two keys: a public key and a private key for encryption and decryption, making it more secure.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q42"
   }
  ]
 },
 {
  "id": "q-65ee72de7b-371",
  "t": 3,
  "sub": "3.3",
  "text": "What is used for overloading in programming?",
  "options": [
   "Only type",
   "Only arguments",
   "Both type and arguments",
   "Neither type nor arguments"
  ],
  "answer": 2,
  "explanation": "Overloading occurs when two or more functions share the same name but differ in either the type or number of arguments.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q43"
   }
  ]
 },
 {
  "id": "q-09fdc6e494-372",
  "t": 3,
  "sub": "3.4",
  "text": "Which of these is a valid definition of a pointer in C?",
  "options": [
   "p = *a",
   "p = \\&a",
   "*p = a",
   "\\&p = a"
  ],
  "answer": 1,
  "explanation": "A pointer in C is defined by using the address-of operator `&`, which gives the memory address of a variable.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q44"
   }
  ]
 },
 {
  "id": "q-7941313804-373",
  "t": 1,
  "sub": "1.3",
  "text": "A tautology is a statement which is always what?",
  "options": [
   "False",
   "True",
   "Uncertain",
   "Contradictory"
  ],
  "answer": 1,
  "explanation": "A tautology is a logical statement that is always true, no matter the values of its components.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q45"
   }
  ]
 },
 {
  "id": "q-753cfdcb70-374",
  "t": 5,
  "sub": "5.2",
  "text": "Excess-3 code is also known as?",
  "options": [
   "Self-correcting code",
   "Self-completing code",
   "Self-adjusting code",
   "Self-encrypting code"
  ],
  "answer": 1,
  "explanation": "Excess-3 code is also known as self-completing because it allows for easy detection and correction of errors in the code.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q46"
   }
  ]
 },
 {
  "id": "q-1f598a6a84-375",
  "t": 7,
  "sub": "7.3",
  "text": "What is the purpose of normalization in database design?",
  "options": [
   "To increase data redundancy",
   "To reduce data integrity",
   "To reduce data redundancy and improve data integrity",
   "To increase database size"
  ],
  "answer": 2,
  "explanation": "Normalization in database design is used to eliminate redundancy and ensure that data is stored in the most efficient way, thereby improving data integrity.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q47"
   }
  ]
 },
 {
  "id": "q-ec7b8e7192-376",
  "t": 3,
  "sub": "3.2",
  "text": "What is the difference between Stack and Queue data structures?",
  "options": [
   "Stack is FIFO, Queue is LIFO",
   "Stack is LIFO, Queue is FIFO",
   "Both are FIFO",
   "Both are LIFO"
  ],
  "answer": 1,
  "explanation": "A stack operates on a Last-In-First-Out (LIFO) principle, while a queue operates on a First-In-First-Out (FIFO) principle.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q48"
   }
  ]
 },
 {
  "id": "q-67e9579b06-377",
  "t": 3,
  "sub": "3.3",
  "text": "What is the purpose of a virtual function in C++?",
  "options": [
   "To achieve compile-time polymorphism",
   "To achieve runtime polymorphism",
   "To improve memory efficiency",
   "To prevent function overloading"
  ],
  "answer": 1,
  "explanation": "A virtual function in C++ is used to achieve runtime polymorphism, allowing derived class methods to be called even when using base class pointers.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q49"
   }
  ]
 },
 {
  "id": "q-451963f727-378",
  "t": 8,
  "sub": "8.3",
  "text": "What is the main advantage of using optical fiber for communication?",
  "options": [
   "Low cost",
   "Easy installation",
   "High bandwidth and low signal loss",
   "Compatibility with older systems"
  ],
  "answer": 2,
  "explanation": "The main advantage of optical fiber is its high bandwidth and low signal loss over long distances, making it ideal for high-speed communication.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q50"
   }
  ]
 },
 {
  "id": "q-b6f2818eac-379",
  "t": 8,
  "sub": "8.4",
  "text": "What is the purpose of the OSI model in networking?",
  "options": [
   "To increase network speed",
   "To standardize the communication functions of a telecommunication system",
   "To reduce hardware costs",
   "To encrypt network traffic"
  ],
  "answer": 1,
  "explanation": "The OSI model provides a framework for standardizing the functions of network communication into seven layers, promoting interoperability and understanding of networking concepts.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q51"
   }
  ]
 },
 {
  "id": "q-482adcad75-380",
  "t": 3,
  "sub": "3.5",
  "text": "What is the difference between static and dynamic binding in programming?",
  "options": [
   "Static binding is slower, dynamic binding is faster",
   "Static binding uses more memory, dynamic binding uses less",
   "Static binding occurs at compile-time, while dynamic binding occurs at run-time",
   "Static binding is for object-oriented languages, dynamic binding is for procedural languages"
  ],
  "answer": 2,
  "explanation": "Static binding (early binding) occurs when the method or function to be called is determined at compile time, while dynamic binding (late binding) is resolved at run-time based on the object type.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q52"
   }
  ]
 },
 {
  "id": "q-638632d1ea-381",
  "t": 4,
  "sub": "4.2",
  "text": "What is the purpose of a cache in computer architecture?",
  "options": [
   "To increase the main memory size",
   "To reduce the average time to access data from the main memory",
   "To store permanent data",
   "To improve CPU clock speed"
  ],
  "answer": 1,
  "explanation": "Caches store frequently accessed data to speed up retrieval times by reducing the need to access slower main memory.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q53"
   }
  ]
 },
 {
  "id": "q-ed0269ab94-382",
  "t": 8,
  "sub": "8.6",
  "text": "What is the difference between cohesion and coupling in software engineering?",
  "options": [
   "Cohesion is about modules, coupling is about data",
   "Cohesion is internal, coupling is external",
   "Cohesion measures relationships within a module, coupling measures interdependence between modules",
   "Cohesion is for design, coupling is for implementation"
  ],
  "answer": 2,
  "explanation": "Cohesion refers to how closely related and focused the responsibilities of a module are, while coupling refers to how dependent one module is on another.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q54"
   }
  ]
 },
 {
  "id": "q-31abb87783-383",
  "t": 5,
  "sub": "5.2",
  "text": "What is the purpose of the volatile keyword in Java?",
  "options": [
   "To make a variable constant",
   "To indicate that a variable's value can be changed by multiple threads simultaneously",
   "To improve variable access speed",
   "To prevent variable initialization"
  ],
  "answer": 1,
  "explanation": "The `volatile` keyword in Java is used to ensure that updates to a variable are visible to all threads and to prevent caching of the variable by threads.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q55"
   }
  ]
 },
 {
  "id": "q-cb2cac4e0e-384",
  "t": 5,
  "sub": "5.5",
  "text": "What is the difference between TCP and UDP protocols?",
  "options": [
   "TCP is faster, UDP is more reliable",
   "TCP uses IP, UDP doesn't",
   "TCP is connection-oriented and reliable, UDP is connectionless and unreliable but faster",
   "TCP is for web browsing, UDP is for email"
  ],
  "answer": 2,
  "explanation": "TCP provides reliable, connection-oriented communication, while UDP is faster but unreliable and does not guarantee delivery of packets.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q56"
   }
  ]
 },
 {
  "id": "q-27f03620b9-385",
  "t": 4,
  "sub": "4.6",
  "text": "What is the purpose of a Fourier transform in signal processing?",
  "options": [
   "To amplify signals",
   "To filter noise",
   "To convert a signal from the time domain to the frequency domain",
   "To compress data"
  ],
  "answer": 2,
  "explanation": "The Fourier transform is used in signal processing to convert a time-domain signal into its frequency-domain representation, aiding in analysis and filtering.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q57"
   }
  ]
 },
 {
  "id": "q-6cb56ec35a-386",
  "t": 3,
  "sub": "3.3",
  "text": "What is the difference between deep copy and shallow copy in object-oriented programming?",
  "options": [
   "Deep copy is faster, shallow copy is slower",
   "Deep copy uses less memory, shallow copy uses more",
   "Deep copy creates a new object and recursively copies nested objects, shallow copy copies references",
   "Deep copy is for primitive types, shallow copy is for objects"
  ],
  "answer": 2,
  "explanation": "A deep copy creates an independent copy of the object, including all objects nested inside it. A shallow copy only copies the references to the objects, not the objects themselves.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q58"
   }
  ]
 },
 {
  "id": "q-e44fefa215-387",
  "t": 5,
  "sub": "5.2",
  "text": "What is the purpose of a load balancer in network architecture?",
  "options": [
   "To increase network security",
   "To distribute incoming network traffic across multiple servers",
   "To compress network data",
   "To cache frequently accessed data"
  ],
  "answer": 1,
  "explanation": "A load balancer ensures even distribution of network traffic across multiple servers to prevent server overload and improve availability and reliability.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q59"
   }
  ]
 },
 {
  "id": "q-854cce3bbf-388",
  "t": 9,
  "sub": "9.5",
  "text": "What is the difference between supervised and unsupervised learning in machine learning?",
  "options": [
   "Supervised learning is automatic, unsupervised learning requires human intervention",
   "Supervised learning uses labeled data, unsupervised learning uses unlabeled data",
   "Supervised learning is for classification, unsupervised learning is for regression",
   "Supervised learning is slower, unsupervised learning is faster"
  ],
  "answer": 1,
  "explanation": "Supervised learning involves training a model using labeled data, while unsupervised learning involves finding hidden patterns in data without labels.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Short Q60"
   }
  ]
 },
 {
  "id": "q-e1de3071b8-389",
  "t": 10,
  "sub": "10.4",
  "text": "Which type of contract is not a \"cost plus\" contract?",
  "options": [
   "Cost plus fixed fee",
   "Cost plus incentive fee",
   "Cost and fixed assets",
   "Cost plus percentage of cost"
  ],
  "answer": 2,
  "explanation": "A \"cost plus\" contract is one where the buyer agrees to pay the cost of the project plus an additional fee or incentive. The \"Cost and fixed assets\" contract does not follow this structure, as it involves fixed assets rather than a variable cost basis.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q1"
   }
  ]
 },
 {
  "id": "q-9936136bb4-390",
  "t": 9,
  "sub": "9.4",
  "text": "In which year was the first expert system developed?",
  "options": [
   "1960",
   "1965",
   "1970",
   "1975"
  ],
  "answer": 1,
  "explanation": "The first expert system, called DENDRAL, was developed in 1965.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q2"
   }
  ]
 },
 {
  "id": "q-95d34aa7e3-391",
  "t": 10,
  "sub": "10.1",
  "text": "What is the correct symbol for first angle projection?",
  "options": [
   "⊥",
   "∠",
   "⊿",
   "⊤"
  ],
  "answer": 0,
  "explanation": "The symbol ⊥ represents first angle projection in engineering drawings.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q3"
   }
  ]
 },
 {
  "id": "q-da7f188e1d-392",
  "t": 1,
  "sub": "1.1",
  "text": "What is another name for a simple SR flip-flop?",
  "options": [
   "A monostable multivibrator",
   "A bistable multivibrator",
   "An astable multivibrator",
   "A Schmitt trigger"
  ],
  "answer": 1,
  "explanation": "A simple SR flip-flop is also known as a bistable multivibrator because it has two stable states.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q4"
   }
  ]
 },
 {
  "id": "q-18e9dc4d0e-393",
  "t": 4,
  "sub": "4.6",
  "text": "What is an alternative name for pipelining?",
  "options": [
   "Assembly line operation",
   "Parallel processing",
   "Sequential execution",
   "Batch processing"
  ],
  "answer": 0,
  "explanation": "Pipelining is often referred to as assembly line operation because tasks are divided into stages and processed in parallel, similar to an assembly line.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q5"
   }
  ]
 },
 {
  "id": "q-dcaee72fde-394",
  "t": 2,
  "sub": "2.6",
  "text": "How many interrupts are there in the 8085 microprocessor?",
  "options": [
   "5",
   "8",
   "10",
   "13"
  ],
  "answer": 3,
  "explanation": "The 8085 microprocessor has 13 interrupts, including both maskable and non-maskable interrupts.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q6"
   }
  ]
 },
 {
  "id": "q-abc8972c72-395",
  "t": 2,
  "sub": "2.6",
  "text": "Which of the following is not a non-maskable interrupt?",
  "options": [
   "TRAP",
   "RST 7.5",
   "RST 6.5",
   "RST 5.5"
  ],
  "answer": 0,
  "explanation": "TRAP is a non-maskable interrupt, while RST 7.5, RST 6.5, and RST 5.5 are maskable interrupts.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q7"
   }
  ]
 },
 {
  "id": "q-78eaeafaa8-396",
  "t": 1,
  "sub": "1.1",
  "text": "What is the relationship between terminal voltage and emf?",
  "options": [
   "Terminal voltage is equal to emf",
   "Terminal voltage is greater than emf",
   "Terminal voltage is less than emf",
   "There is no relationship between terminal voltage and emf"
  ],
  "answer": 2,
  "explanation": "Terminal voltage is less than emf due to the voltage drop caused by internal resistance.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q8"
   }
  ]
 },
 {
  "id": "q-e7a57def55-397",
  "t": 1,
  "sub": "1.1",
  "text": "If a delta connection has 3 ohms resistance, what is the equivalent resistance in star connection?",
  "options": [
   "1 ohm",
   "3 ohms",
   "9 ohms",
   "27 ohms"
  ],
  "answer": 0,
  "explanation": "The equivalent resistance in a star connection is given by dividing the delta resistance by 3. Therefore, $$( R_{star} = \\frac{R_{delta}}{3} = \\frac{3}{3} = 1 \\text{ ohm} )$$.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q9"
   }
  ]
 },
 {
  "id": "q-cd9495f61b-398",
  "t": 9,
  "sub": "9.5",
  "text": "What type of learning algorithm is Naive Bayes?",
  "options": [
   "Unsupervised",
   "Supervised",
   "Reinforcement",
   "Semi-supervised"
  ],
  "answer": 1,
  "explanation": "Naive Bayes is a supervised learning algorithm that uses labeled data for classification tasks.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q10"
   }
  ]
 },
 {
  "id": "q-8982712ab4-399",
  "t": 2,
  "sub": "2.2",
  "text": "What are the input and output types for a 4:16 code converter decoder?",
  "options": [
   "Input is binary and output is decimal",
   "Input is binary and output is hexadecimal",
   "Input is hexadecimal and output is binary",
   "Input is decimal and output is binary"
  ],
  "answer": 1,
  "explanation": "A 4:16 code converter decoder takes a 4-bit binary input and produces a 16-line hexadecimal output.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q11"
   }
  ]
 },
 {
  "id": "q-9b3cb85df9-400",
  "t": 2,
  "sub": "2.2",
  "text": "Which logic gate is the building block for an encoder?",
  "options": [
   "AND",
   "OR",
   "NOT",
   "XOR"
  ],
  "answer": 1,
  "explanation": "The OR gate is a fundamental component in the design of encoders, which output a binary code corresponding to the active input.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q12"
   }
  ]
 },
 {
  "id": "q-a096312434-401",
  "t": 8,
  "sub": "8.6",
  "text": "Given the following code:\n\nint *p, u;\nfloat *y, x;\n\nWhich of the following is the correct next line of code?",
  "options": [
   "p = \\&u",
   "p = u",
   "y = \\&x",
   "y = x"
  ],
  "answer": 0,
  "explanation": "Since `p` is a pointer to an integer, it should be assigned the address of an integer variable using `&u`.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q13"
   }
  ]
 },
 {
  "id": "q-fe998e4bce-402",
  "t": 2,
  "sub": "2.2",
  "text": "Which of the following is not a format specifier in C?",
  "options": [
   "%d",
   "%f",
   "%s",
   "%t"
  ],
  "answer": 3,
  "explanation": "`%t` is not a valid format specifier in C. Common format specifiers include `%d` for integers, `%f` for floating-point numbers, and `%s` for strings.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q14"
   }
  ]
 },
 {
  "id": "q-5115476c10-403",
  "t": 8,
  "sub": "8.3",
  "text": "In project management, what comes after the project idea in product design?",
  "options": [
   "Development",
   "Testing",
   "Implementation",
   "Design"
  ],
  "answer": 3,
  "explanation": "After the project idea is formed, the next step is the design phase where the product's specifications and features are determined.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q15"
   }
  ]
 },
 {
  "id": "q-73109e4b9a-404",
  "t": 1,
  "sub": "1.5",
  "text": "Which of the following is a stable filter?",
  "options": [
   "RC filter",
   "LC filter",
   "Crystal oscillator",
   "Op-amp filter"
  ],
  "answer": 2,
  "explanation": "A crystal oscillator is a stable filter as it uses the mechanical resonance of a vibrating crystal to create a stable frequency.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q16"
   }
  ]
 },
 {
  "id": "q-2337f99a96-405",
  "t": 1,
  "sub": "1.1",
  "text": "How is frequency defined in AC?",
  "options": [
   "Number of waves per second",
   "Time period of one wave",
   "Amplitude of the wave",
   "Phase difference between voltage and current"
  ],
  "answer": 0,
  "explanation": "Frequency is the number of cycles or waves that pass a point in one second, measured in Hertz (Hz).",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q17"
   }
  ]
 },
 {
  "id": "q-1bc3702a46-406",
  "t": 4,
  "sub": "4.3",
  "text": "Who appoints the auditor of NEC?",
  "options": [
   "NEC Executives",
   "Shareholders",
   "CEO",
   "Government"
  ],
  "answer": 0,
  "explanation": "The executives of NEC typically appoint the auditor to ensure proper audit processes within the organization.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q18"
   }
  ]
 },
 {
  "id": "q-7dc0a1439a-407",
  "t": 5,
  "sub": "5.1",
  "text": "Which OSI layer is responsible for binary transmission?",
  "options": [
   "Data Link layer",
   "Network layer",
   "Physical layer",
   "Transport layer"
  ],
  "answer": 2,
  "explanation": "The physical layer is responsible for the actual transmission of raw binary data over a physical medium.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q19"
   }
  ]
 },
 {
  "id": "q-14cc1e40f0-408",
  "t": 6,
  "sub": "6.2",
  "text": "What type of grammar is a PDA (Pushdown Automaton) associated with?",
  "options": [
   "Type 0 grammar",
   "Type 1 grammar",
   "Type 2 grammar",
   "Type 3 grammar"
  ],
  "answer": 2,
  "explanation": "A Pushdown Automaton (PDA) is associated with Type 2 grammar, which corresponds to context-free languages.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q20"
   }
  ]
 },
 {
  "id": "q-f5b0a9e3d0-409",
  "t": 6,
  "sub": "6.3",
  "text": "What is a key characteristic of a Universal Turing Machine?",
  "options": [
   "Programmable",
   "Fixed function",
   "Analog",
   "Quantum"
  ],
  "answer": 0,
  "explanation": "A Universal Turing Machine is programmable, meaning it can simulate any other Turing machine by reading and executing an appropriate program.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q21"
   }
  ]
 },
 {
  "id": "q-900c890b0b-410",
  "t": 8,
  "sub": "8.3",
  "text": "Which test is used to determine machine intelligence?",
  "options": [
   "Turing test",
   "IQ test",
   "A/B test",
   "Unit test"
  ],
  "answer": 0,
  "explanation": "The Turing test is used to determine whether a machine exhibits intelligent behavior indistinguishable from that of a human.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q22"
   }
  ]
 },
 {
  "id": "q-b4dce615cf-411",
  "t": 1,
  "sub": "1.1",
  "text": "What component primarily uses BIOS?",
  "options": [
   "CPU",
   "RAM",
   "Hard Drive",
   "Operating system"
  ],
  "answer": 3,
  "explanation": "The BIOS (Basic Input/Output System) is primarily used to initialize the operating system during the boot process.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q23"
   }
  ]
 },
 {
  "id": "q-407064cf89-412",
  "t": 6,
  "sub": "6.4",
  "text": "Real-time operation depends on what two factors?",
  "options": [
   "Speed and accuracy",
   "Time and memory",
   "Input and output",
   "Hardware and software"
  ],
  "answer": 0,
  "explanation": "Real-time operation requires both speed to process data quickly and accuracy to ensure correct outcomes within time constraints.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q24"
   }
  ]
 },
 {
  "id": "q-1ebfd533b5-413",
  "t": 2,
  "sub": "2.1",
  "text": "What does distance vector routing depend on?",
  "options": [
   "Hop counts",
   "Bandwidth",
   "Latency",
   "IP addresses"
  ],
  "answer": 0,
  "explanation": "Distance vector routing relies on hop counts (the number of routers a packet must pass through) to determine the best path.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q25"
   }
  ]
 },
 {
  "id": "q-cdbdf2a9f8-414",
  "t": 5,
  "sub": "5.1",
  "text": "What causes propagation delay?",
  "options": [
   "Network congestion",
   "Router processing time",
   "Distance between routers",
   "Packet size"
  ],
  "answer": 2,
  "explanation": "Propagation delay is primarily caused by the time it takes for a signal to travel the physical distance between routers.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q26"
   }
  ]
 },
 {
  "id": "q-1bdfbbc61a-415",
  "t": 1,
  "sub": "1.2",
  "text": "What is the maximum number of nodes a binary tree can have based on height ( h )?",
  "options": [
   "$$2^h$$",
   "$$2^h - 1$$",
   "$$2^{(h+1)} - 1$$",
   "$$2^{(h-1)}$$"
  ],
  "answer": 1,
  "explanation": "A binary tree with height $$h$$ can have a maximum of $$2^h - 1$$ nodes, where the height is the number of edges from the root to the deepest leaf.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q27"
   }
  ]
 },
 {
  "id": "q-2dfed37478-416",
  "t": 7,
  "sub": "7.2",
  "text": "What is a requirement of a binary tree?",
  "options": [
   "Must be balanced",
   "Must be complete",
   "Must be sorted",
   "Must have at least one child for each node"
  ],
  "answer": 2,
  "explanation": "A binary search tree (BST) must be sorted such that the left subtree contains nodes with values less than the root, and the right subtree contains nodes with values greater than the root.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q28"
   }
  ]
 },
 {
  "id": "q-fe541e0f7f-417",
  "t": 6,
  "sub": "6.5",
  "text": "Which transformation resizes an object?",
  "options": [
   "Translation",
   "Rotation",
   "Scaling",
   "Shearing"
  ],
  "answer": 2,
  "explanation": "Scaling is the transformation that resizes an object by changing its dimensions.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q29"
   }
  ]
 },
 {
  "id": "q-5b83d9afc1-418",
  "t": 5,
  "sub": "5.4",
  "text": "Which process runs after the Kernel bootstrap is executed?",
  "options": [
   "/sbin/init",
   "/etc/init.d",
   "/boot/grub",
   "/proc/kmsg"
  ],
  "answer": 1,
  "explanation": "After the Kernel bootstrap is executed, the `/etc/init.d` script runs to initialize system services.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q30"
   }
  ]
 },
 {
  "id": "q-2f0c15efc4-419",
  "t": 1,
  "sub": "1.1",
  "text": "What is an encrypted message called?",
  "options": [
   "Plaintext",
   "Ciphertext",
   "Keytext",
   "Hashtext"
  ],
  "answer": 1,
  "explanation": "An encrypted message is called ciphertext, which is generated from plaintext using an encryption algorithm and a key.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q31"
   }
  ]
 },
 {
  "id": "q-113611b5b1-420",
  "t": 5,
  "sub": "5.5",
  "text": "What is the function of the application layer in networking?",
  "options": [
   "Data transmission",
   "Routing",
   "User to system application",
   "Error checking"
  ],
  "answer": 2,
  "explanation": "The application layer enables user-to-system interactions, providing services like email, file transfer, and web browsing.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q32"
   }
  ]
 },
 {
  "id": "q-8975b9b5d3-421",
  "t": 6,
  "sub": "6.5",
  "text": "On which plane does 2D rotation occur?",
  "options": [
   "3D plane",
   "2D plane",
   "XY plane",
   "XZ plane"
  ],
  "answer": 1,
  "explanation": "2D rotation occurs on a 2D plane, typically around a point or the origin.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q33"
   }
  ]
 },
 {
  "id": "q-c84de5fbbc-422",
  "t": 3,
  "sub": "3.1",
  "text": "Which of the following statements about functions and templates is incorrect?",
  "options": [
   "Overloaded functions can be redefined",
   "Templates can be redefined",
   "Macros are efficient than templates",
   "All statements are correct"
  ],
  "answer": 3,
  "explanation": "All the listed statements are correct regarding functions, templates, and macros.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q34"
   }
  ]
 },
 {
  "id": "q-3e105aacf7-423",
  "t": 2,
  "sub": "2.6",
  "text": "Which interrupt has the highest priority in 8086?",
  "options": [
   "INTR",
   "NMI (Non-Maskable Interrupt)",
   "INT 0",
   "INT 3"
  ],
  "answer": 1,
  "explanation": "The Non-Maskable Interrupt (NMI) has the highest priority in the 8086 microprocessor, as it cannot be disabled or masked by software.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q35"
   }
  ]
 },
 {
  "id": "q-8471e071d6-424",
  "t": 2,
  "sub": "2.3",
  "text": "How many 16-bit registers are there in the 8085 microprocessor?",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "answer": 1,
  "explanation": "The 8085 microprocessor has two 16-bit registers: the stack pointer (SP) and the program counter (PC).",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q36"
   }
  ]
 },
 {
  "id": "q-90cdf8c124-425",
  "t": 7,
  "sub": "7.5",
  "text": "What is the purpose of a Wait-for graph?",
  "options": [
   "Process scheduling",
   "Memory allocation",
   "Deadlock detection",
   "File management"
  ],
  "answer": 2,
  "explanation": "A Wait-for graph is used to detect deadlocks in a system by representing processes and the resources they are waiting for.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q37"
   }
  ]
 },
 {
  "id": "q-c780aac33d-426",
  "t": 2,
  "sub": "2.6",
  "text": "What is the primary purpose of a special processor?",
  "options": [
   "General computation",
   "Special function",
   "Data storage",
   "Network communication"
  ],
  "answer": 1,
  "explanation": "Special processors are designed for specific tasks, such as signal processing, graphics rendering, or cryptographic operations.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q38"
   }
  ]
 },
 {
  "id": "q-5c5b219ff5-427",
  "t": 5,
  "sub": "5.4",
  "text": "In networking, what term is used to describe excessive load?",
  "options": [
   "Overload",
   "Congestion",
   "Saturation",
   "Bottleneck"
  ],
  "answer": 1,
  "explanation": "Congestion occurs in networking when there is excessive load, causing delays and reduced performance.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q39"
   }
  ]
 },
 {
  "id": "q-3fc697852c-428",
  "t": 9,
  "sub": "9.4",
  "text": "What is a key feature of a bus in computer architecture?",
  "options": [
   "Data transfer",
   "Priority handling",
   "Memory access",
   "Interrupt handling"
  ],
  "answer": 1,
  "explanation": "A key feature of a bus is its ability to handle data transfer priorities between various components in a computer system.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q40"
   }
  ]
 },
 {
  "id": "q-a0480036e8-429",
  "t": 2,
  "sub": "2.2",
  "text": "Which of the following is not a combinational circuit?",
  "options": [
   "Multiplexer",
   "Decoder",
   "Adder",
   "Counter"
  ],
  "answer": 3,
  "explanation": "A counter is a sequential circuit, as its output depends on both the current input and previous state.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q41"
   }
  ]
 },
 {
  "id": "q-d188ba6ff2-430",
  "t": 4,
  "sub": "4.2",
  "text": "How many categories of memory storage are there?",
  "options": [
   "2",
   "3",
   "1",
   "5"
  ],
  "answer": 0,
  "explanation": "Memory storage is typically categorized into primary (volatile) and secondary (non-volatile) storage.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q42"
   }
  ]
 },
 {
  "id": "q-b356600214-431",
  "t": 5,
  "sub": "5.2",
  "text": "What is the term for multiple processes executing concurrently in a single-user system?",
  "options": [
   "Multiprocessing",
   "Multitasking",
   "Multithreading",
   "Time-sharing"
  ],
  "answer": 1,
  "explanation": "Multitasking allows multiple processes to execute concurrently by sharing CPU time in a single-user system.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q43"
   }
  ]
 },
 {
  "id": "q-0a8f159bc7-432",
  "t": 5,
  "sub": "5.4",
  "text": "What configuration option does the PPP (Point-to-Point Protocol) system have?",
  "options": [
   "Encryption",
   "Compression",
   "Authentication",
   "Multiplexing"
  ],
  "answer": 2,
  "explanation": "PPP supports authentication options, such as PAP and CHAP, to verify the identity of the connecting devices.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q44"
   }
  ]
 },
 {
  "id": "q-3736951b21-433",
  "t": 2,
  "sub": "2.5",
  "text": "How many articles are in the NEC code of conduct?",
  "options": [
   "5",
   "8",
   "10",
   "12"
  ],
  "answer": 1,
  "explanation": "The NEC code of conduct consists of 8 articles, outlining ethical principles and professional standards.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q45"
   }
  ]
 },
 {
  "id": "q-217530fd63-434",
  "t": 1,
  "sub": "1.4",
  "text": "What is a key function of CMOS technology?",
  "options": [
   "High speed",
   "Low power consumption",
   "High storage capacity",
   "High heat dissipation"
  ],
  "answer": 1,
  "explanation": "CMOS technology is known for its low power consumption, making it suitable for battery-operated devices.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q46"
   }
  ]
 },
 {
  "id": "q-50be008095-435",
  "t": 1,
  "sub": "1.6",
  "text": "What is single-level inheritance?",
  "options": [
   "A class inherited from multiple base classes",
   "A class inherited from a base class",
   "A base class inherited from multiple derived classes",
   "A class that cannot be inherited"
  ],
  "answer": 1,
  "explanation": "Single-level inheritance occurs when a derived class inherits from a single base class.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q47"
   }
  ]
 },
 {
  "id": "q-e0329103cd-436",
  "t": 8,
  "sub": "8.1",
  "text": "What software model represents behavior and interaction?",
  "options": [
   "Class diagram",
   "Sequence diagram",
   "Use case",
   "Activity diagram"
  ],
  "answer": 2,
  "explanation": "A use case model describes the behavior and interaction between users and the system.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q48"
   }
  ]
 },
 {
  "id": "q-16c441f7fd-437",
  "t": 8,
  "sub": "8.1",
  "text": "In which software development model is risk management prominently featured?",
  "options": [
   "Agile",
   "Iterative",
   "Spiral",
   "Waterfall"
  ],
  "answer": 2,
  "explanation": "The spiral model emphasizes risk management at each phase of software development.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q49"
   }
  ]
 },
 {
  "id": "q-21ee9e86b6-438",
  "t": 8,
  "sub": "8.1",
  "text": "Which software development model is difficult to maintain?",
  "options": [
   "Agile",
   "Iterative",
   "Spiral",
   "Waterfall"
  ],
  "answer": 3,
  "explanation": "The waterfall model is difficult to maintain because it lacks flexibility, making changes late in the process costly.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q50"
   }
  ]
 },
 {
  "id": "q-d6ba1eddf1-439",
  "t": 6,
  "sub": "6.4",
  "text": "What type of image format uses a map of bits?",
  "options": [
   "Vector",
   "Bitmap",
   "JPEG",
   "GIF"
  ],
  "answer": 1,
  "explanation": "Bitmap images use a map of bits (pixels) to represent images.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q51"
   }
  ]
 },
 {
  "id": "q-c998dca141-440",
  "t": 6,
  "sub": "6.1",
  "text": "What technique is used to check if a language is regular?",
  "options": [
   "Turing test",
   "Pumping lemma",
   "Halting problem",
   "Church-Turing thesis"
  ],
  "answer": 1,
  "explanation": "The pumping lemma is used to prove that certain languages are not regular by demonstrating that they cannot be \"pumped.\"",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q52"
   }
  ]
 },
 {
  "id": "q-219dbea77e-441",
  "t": 3,
  "sub": "3.3",
  "text": "Which C function is used to find the current position in a file?",
  "options": [
   "`fseek()`",
   "`ftell()`",
   "`fgetpos()`",
   "`rewind()`"
  ],
  "answer": 1,
  "explanation": "The `ftell()` function returns the current position of the file pointer in a file.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q53"
   }
  ]
 },
 {
  "id": "q-0bd2793b37-442",
  "t": 3,
  "sub": "3.2",
  "text": "Which SQL command removes content without altering the table structure?",
  "options": [
   "DROP",
   "TRUNCATE",
   "DELETE",
   "REMOVE"
  ],
  "answer": 2,
  "explanation": "The `DELETE` command removes rows from a table without changing its structure.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q54"
   }
  ]
 },
 {
  "id": "q-14f3f29b36-443",
  "t": 8,
  "sub": "8.3",
  "text": "What does software quality management consist of?",
  "options": [
   "SQA and SQC",
   "SQA and SQM",
   "SQM and SQC",
   "SQP and SQA"
  ],
  "answer": 1,
  "explanation": "Software Quality Management consists of Software Quality Assurance (SQA) and Software Quality Management (SQM).",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q55"
   }
  ]
 },
 {
  "id": "q-0f1a966f2e-444",
  "t": 7,
  "sub": "7.5",
  "text": "In a project network diagram, what is a dummy activity?",
  "options": [
   "Critical activity",
   "Non-critical activity",
   "Theoretical or logical",
   "Resource-intensive activity"
  ],
  "answer": 2,
  "explanation": "A dummy activity is used in project network diagrams to represent logical relationships but does not consume time or resources.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q56"
   }
  ]
 },
 {
  "id": "q-31575fb83f-445",
  "t": 9,
  "sub": "9.6",
  "text": "What is a limitation of Artificial Neural Networks?",
  "options": [
   "Cannot learn from data",
   "Cannot handle complex problems",
   "Cannot explain results",
   "Cannot be trained"
  ],
  "answer": 2,
  "explanation": "Artificial Neural Networks have limited interpretability, making it difficult to explain how they reach specific conclusions.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q57"
   }
  ]
 },
 {
  "id": "q-c5cfa12edd-446",
  "t": 1,
  "sub": "1.6",
  "text": "Which of the following is not a physical input device?",
  "options": [
   "Keyboard",
   "Mouse",
   "Touch panel",
   "Microphone"
  ],
  "answer": 2,
  "explanation": "A touch panel is an output device that displays content, whereas a physical input device directly sends data to a computer.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q58"
   }
  ]
 },
 {
  "id": "q-a2837b6038-447",
  "t": 9,
  "sub": "9.3",
  "text": "Which of the following is not a property of knowledge representation?",
  "options": [
   "Representational adequacy",
   "Inferential adequacy",
   "Inferential efficiency",
   "Representational verification"
  ],
  "answer": 3,
  "explanation": "Representational verification is not a property of knowledge representation. The key properties are adequacy and efficiency.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q59"
   }
  ]
 },
 {
  "id": "q-a838eb9540-448",
  "t": 2,
  "sub": "2.1",
  "text": "Which of the following is considered an Essential Implicant in Boolean algebra?",
  "options": [
   "Prime implicant",
   "Essential prime implicant",
   "Complement"
  ],
  "answer": 1,
  "explanation": "An Essential Prime Implicant is a prime implicant that covers an output for which no other prime implicant can account.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Short Q60"
   }
  ]
 },
 {
  "id": "q-7d48a7dd21-449",
  "t": 1,
  "sub": "1.1",
  "text": "Decibel relation for power gain is:",
  "options": [
   "$$N_{dB} = 20 \\log_{10}\\left(\\frac{V_2^2}{V_1^2}\\right) + 20 \\log_{10}\\left(\\frac{Z_1}{Z_2}\\right)$$",
   "$$N_{dB} = 10 \\log_{10}\\left(\\frac{V_2^2}{V_1^2}\\right) + 10 \\log_{10}\\left(\\frac{Z_1}{Z_2}\\right)$$",
   "$$N_{dB} = 20 \\log_{10}\\left(\\frac{V_2}{V_1}\\right) + 10 \\log_{10}\\left(\\frac{Z_2}{Z_1}\\right)$$",
   "$$N_{dB} = 10 \\log_{10}\\left(\\frac{V_2}{V_1}\\right) + 10 \\log_{10}\\left(\\frac{Z_2}{Z_1}\\right)$$"
  ],
  "answer": 3,
  "explanation": "The decibel power gain is derived from the power ratio:\n$$P = \\frac{V^2}{Z}$$\n\nSubstituting this into the decibel formula for power gain:\n$$N_{dB} = 10 \\log_{10}\\left(\\frac{P_2}{P_1}\\right)$$\n$$N_{dB} = 10 \\log_{10}\\left(\\frac{V_2^2 / Z_2}{V_1^2 / Z_1}\\right)$$\n\nSimplifying:\n$$N_{dB} = 10 \\log_{10}\\left(\\frac{V_2^2}{V_1^2}\\right) + 10 \\log_{10}\\left(\\frac{Z_1}{Z_2}\\right)$$\n\nThis is rewritten using the voltage ratio:\n$$N_{dB} = 10 \\log_{10}\\left(\\frac{V_2}{V_1}\\right) + 10 \\log_{10}\\left(\\frac{Z_2}{Z_1}\\right)$$",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q1"
   }
  ]
 },
 {
  "id": "q-a6125cc6e2-450",
  "t": 1,
  "sub": "1.2",
  "text": "Maximum power that can be transferred from source to load is:",
  "options": [
   "25%",
   "75%",
   "50%",
   "100%"
  ],
  "answer": 2,
  "explanation": "According to the Maximum Power Transfer Theorem:\n\n- Maximum power is transferred when the load resistance $$( R_L )$$ equals the source resistance $$( R_S )$$.\n- At this point, 50% of the total power is dissipated in the load, and the remaining 50% is lost in the source resistance.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q2"
   }
  ]
 },
 {
  "id": "q-6a2d7f0f7e-451",
  "t": 1,
  "sub": "1.2",
  "text": "Power factor $$( \\frac{R}{Z} )$$ has maximum value of:",
  "options": [
   "0.0",
   "0.5",
   "1.0",
   "1.5"
  ],
  "answer": 2,
  "explanation": "The power factor is defined as the ratio:\n$$\\text{Power Factor} = \\frac{\\text{Real Power}}{\\text{Apparent Power}} = \\frac{R}{Z}$$\n\n- The maximum value of the power factor is 1.0, which occurs when the circuit is purely resistive (( Z = R ), no reactive components like inductance or capacitance).",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q3"
   }
  ]
 },
 {
  "id": "q-618d04afd1-452",
  "t": 2,
  "sub": "2.5",
  "text": "EEPROM has a drain and floating gate gap of:",
  "options": [
   "5 nm",
   "10 nm",
   "12 nm",
   "15 nm"
  ],
  "answer": 1,
  "explanation": "- EEPROM (Electrically Erasable Programmable Read-Only Memory) uses a floating gate to store charges.\n- The gap between the drain and floating gate is typically designed to be around 10 nm to ensure reliable charge retention and efficient erase/program cycles.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q4"
   }
  ]
 },
 {
  "id": "q-8642271e57-453",
  "t": 10,
  "sub": "10.2",
  "text": "Heisenberg principle of uncertainty says:",
  "options": [
   "Signal of 10Hz can be generated.",
   "Signal of 10MHz can be generated.",
   "Signal of 100MHz can be generated.",
   "Signal of band 100MHz-105MHz can be generated."
  ],
  "answer": 3,
  "explanation": "According to the Heisenberg Uncertainty Principle:\n\n- The uncertainty in time $$(( \\Delta t ))$$ and frequency $$(( \\Delta f ))$$ is related as:\n  $$\\Delta t \\cdot \\Delta f \\geq \\frac{1}{2\\pi}$$\n- This implies that precise signals cannot be generated at a single frequency, but rather within a band of frequencies. Hence, a signal band of 100MHz-105MHz is feasible.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q5"
   }
  ]
 },
 {
  "id": "q-8e7947f92a-454",
  "t": 1,
  "sub": "1.6",
  "text": "UHF frequency signal can be amplified using:",
  "options": [
   "Class A amplifier",
   "Class AB amplifier",
   "Class C amplifier",
   "Class B amplifier"
  ],
  "answer": 2,
  "explanation": "- UHF (Ultra-High Frequency) signals operate in the range of 300 MHz to 3 GHz.\n- Class C amplifiers are specifically designed for high-frequency applications like UHF due to their high efficiency and narrowband operation.\n- These amplifiers are commonly used in RF transmitters.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q6"
   }
  ]
 },
 {
  "id": "q-f2b72681a8-455",
  "t": 2,
  "sub": "2.1",
  "text": "Two’s complement of 00011011 is:",
  "options": [
   "11100100",
   "11100101",
   "11000101",
   "11110001"
  ],
  "answer": 0,
  "explanation": "- To calculate the two’s complement of a binary number:\n  1. Invert all the bits of the number: ( 00011011 \\to 11100100 ).\n  2. Add 1 to the result: ( 11100100 + 1 = 11100101 ).\n- The result is ( 11100100 ), representing the negative equivalent in two’s complement notation.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q7"
   }
  ]
 },
 {
  "id": "q-23787c5739-456",
  "t": 2,
  "sub": "2.3",
  "text": "Elementary building block of combinational circuit is:",
  "options": [
   "Logic gate",
   "Flip-flop",
   "Both logic gate and flip-flop",
   "Memory"
  ],
  "answer": 0,
  "explanation": "- A combinational circuit is built using logic gates such as AND, OR, NOT, etc.\n- These gates combine multiple inputs to produce specific outputs based on logical operations.\n- Flip-flops and memory are elements of sequential circuits, not combinational circuits.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q8"
   }
  ]
 },
 {
  "id": "q-4b472944fc-457",
  "t": 2,
  "sub": "2.3",
  "text": "Synchronous circuit that changes its state at specific clock signal is:",
  "options": [
   "Event driven",
   "Clock driven",
   "Pulse driven",
   "Frequency driven"
  ],
  "answer": 1,
  "explanation": "- Synchronous circuits operate based on a clock signal.\n- State transitions occur at specific clock edges (rising or falling), making them \"clock-driven.\"\n- This ensures predictable timing and synchronization in the circuit.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q9"
   }
  ]
 },
 {
  "id": "q-5938d2b8c2-458",
  "t": 2,
  "sub": "2.4",
  "text": "Bandwidth of microprocessor represents:",
  "options": [
   "Clock speed",
   "Width of internal bus",
   "Number of bits processed per instruction",
   "Number of bits processed per second"
  ],
  "answer": 2,
  "explanation": "- The bandwidth of a microprocessor refers to the number of bits it can process in a single instruction.\n- For instance, an 8-bit microprocessor processes 8 bits per instruction.\n- This is determined by the architecture and design of the processor.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q10"
   }
  ]
 },
 {
  "id": "q-b80011e6c2-459",
  "t": 1,
  "sub": "1.2",
  "text": "PPI 8255 has internal bus of size:",
  "options": [
   "4 bit",
   "8 bit",
   "16 bit",
   "32 bit"
  ],
  "answer": 1,
  "explanation": "- The Programmable Peripheral Interface (PPI) 8255 has an 8-bit internal data bus.\n- This allows it to interface directly with 8-bit microprocessors for data transfer.\n- It is commonly used in microprocessor-based systems for parallel data communication.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q11"
   }
  ]
 },
 {
  "id": "q-d4c0ce13ac-460",
  "t": 2,
  "sub": "2.6",
  "text": "Interrupt Service Route (ISR) executes:",
  "options": [
   "Before execution of current instructions",
   "With pause of current instructions",
   "After execution of current instructions",
   "With execution of no instruction"
  ],
  "answer": 1,
  "explanation": "- When an interrupt occurs, the current instruction execution is paused, and the processor jumps to execute the ISR.\n- After completing the ISR, the processor resumes execution of the interrupted instruction.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q12"
   }
  ]
 },
 {
  "id": "q-8d01866fb2-461",
  "t": 1,
  "sub": "1.6",
  "text": "What is the purpose of the \"`printf()`\" function in C programming?",
  "options": [
   "To print output to the console",
   "To read input from the console",
   "To perform arithmetic operations",
   "To declare variables"
  ],
  "answer": 0,
  "explanation": "- The `printf()` function is used to display output on the console.\n- It can format text, variables, and special characters to provide user-readable output.\n- Example: `printf(\"Hello, World!\");` prints \"Hello, World!\" to the console.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q13"
   }
  ]
 },
 {
  "id": "q-47cb10843f-462",
  "t": 3,
  "sub": "3.3",
  "text": "What is the purpose of the \"`rewind()`\" function in C programming?",
  "options": [
   "To move the file pointer to the end of the file",
   "To move the file pointer to the beginning of the file",
   "To read data from a file",
   "To write data to a file"
  ],
  "answer": 1,
  "explanation": "- The `rewind()` function resets the file pointer to the start of a file.\n- This is useful when you need to re-read the file from the beginning without closing and reopening it.\n- Example: `rewind(filePointer);` resets the file pointer of `filePointer`.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q14"
   }
  ]
 },
 {
  "id": "q-870de56a33-463",
  "t": 3,
  "sub": "3.3",
  "text": "Which of the following access specifiers in C++ allows access to class members only within the class?",
  "options": [
   "Public",
   "Private",
   "Protected",
   "Friend"
  ],
  "answer": 1,
  "explanation": "- Members declared as `private` are only accessible within the class itself.\n- They are not accessible from derived classes or outside the class.\n- This ensures encapsulation and protects sensitive data or implementation details.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q15"
   }
  ]
 },
 {
  "id": "q-3e360c9d64-464",
  "t": 3,
  "sub": "3.3",
  "text": "What is the purpose of a constructor in C++?",
  "options": [
   "To create data members of a class",
   "To overload operators in a class",
   "To initialize data members of a class",
   "To free memory used by an object"
  ],
  "answer": 2,
  "explanation": "- A constructor is a special member function in C++ used to initialize objects of a class.\n- It is called automatically when an object is created.\n- Its primary purpose is to set initial values for the data members of an object.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q16"
   }
  ]
 },
 {
  "id": "q-66e9ddac1e-465",
  "t": 3,
  "sub": "3.3",
  "text": "Which of the following is true about pure virtual functions in C++?",
  "options": [
   "They have a function body",
   "They can be called directly",
   "They can only be declared in the derived class",
   "They can only be declared in the base class"
  ],
  "answer": 3,
  "explanation": "- A pure virtual function is a function declared in the base class with no definition and is meant to be overridden by derived classes.\n- It is used to create abstract classes and enforce that derived classes implement the function.\n- Example: `virtual void function() = 0;`",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q17"
   }
  ]
 },
 {
  "id": "q-ebe7f47dee-466",
  "t": 8,
  "sub": "8.6",
  "text": "What is the purpose of the try block in C++ exception handling?",
  "options": [
   "To catch exceptions that are thrown by the program",
   "To declare the variables that are used in the catch block",
   "To handle errors that are caught by the program",
   "To define the exceptions that are thrown by the program"
  ],
  "answer": 0,
  "explanation": "- The `try` block is used to define a section of code in which exceptions may occur.\n- If an exception is thrown within the `try` block, it is caught by a corresponding `catch` block to handle the error.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q18"
   }
  ]
 },
 {
  "id": "q-ccbd607da3-467",
  "t": 4,
  "sub": "4.1",
  "text": "Which of the following is not an addressing mode?",
  "options": [
   "Direct addressing mode",
   "Indirect addressing mode",
   "Inverted addressing mode",
   "Indexed addressing mode"
  ],
  "answer": 2,
  "explanation": "- Direct, indirect, and indexed addressing modes are valid types of addressing modes in computer architecture.\n- \"Inverted addressing mode\" is not a standard addressing mode.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q19"
   }
  ]
 },
 {
  "id": "q-0689a7d42e-468",
  "t": 4,
  "sub": "4.2",
  "text": "Which of the following is a fundamental principle of cache memory design?",
  "options": [
   "Increasing the cache size always improves performance",
   "A direct mapping function is always better than an associative mapping function",
   "The least recently used replacement algorithm is always the best choice",
   "The cache should store frequently used data to reduce memory access time"
  ],
  "answer": 3,
  "explanation": "- The main goal of cache memory is to store frequently accessed data to improve processing speed.\n- Storing frequently used data in the cache reduces the time spent accessing slower main memory.\n- A good cache design ensures that commonly used data is readily available.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q20"
   }
  ]
 },
 {
  "id": "q-e822c24cc9-469",
  "t": 4,
  "sub": "4.3",
  "text": "Which of the following is not a characteristic of multiprocessors?",
  "options": [
   "Enhanced reliability",
   "Reduced complexity",
   "Sharing of resources",
   "Increased throughput"
  ],
  "answer": 1,
  "explanation": "- Multiprocessor systems generally increase complexity as they require mechanisms for synchronization, communication, and resource management.\n- While multiprocessors improve reliability, throughput, and resource sharing, they also introduce design complexities that need to be handled carefully.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q21"
   }
  ]
 },
 {
  "id": "q-29bd21736d-470",
  "t": 4,
  "sub": "4.4",
  "text": "What is an application-specific instruction-set processor (ASIP)?",
  "options": [
   "A processor that is optimized for a specific application",
   "A processor that can run any application",
   "A processor that is designed for general-purpose computing",
   "A processor that can be programmed by the user"
  ],
  "answer": 0,
  "explanation": "- An ASIP is a type of processor that is specifically tailored to accelerate particular applications or tasks.\n- These processors combine the advantages of custom hardware and programmable processors, making them efficient for targeted uses.\n- Examples include processors optimized for signal processing, cryptography, or other domain-specific tasks.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q22"
   }
  ]
 },
 {
  "id": "q-ac3287fc15-471",
  "t": 4,
  "sub": "4.5",
  "text": "What is the purpose of a watchdog timer in an RTOS?",
  "options": [
   "To control the execution of tasks",
   "To synchronize I/O operations",
   "To monitor the system and detect faults",
   "To schedule tasks based on their priority"
  ],
  "answer": 2,
  "explanation": "- A watchdog timer in an RTOS is used to detect and recover from faults by monitoring the system.\n- If the system becomes unresponsive or stuck, the watchdog timer triggers a reset to restore normal operation.\n- This mechanism helps ensure system reliability, especially in embedded and real-time systems.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q23"
   }
  ]
 },
 {
  "id": "q-12943f44a9-472",
  "t": 6,
  "sub": "6.4",
  "text": "What does VHDL stand for?",
  "options": [
   "Very High Definition Logic",
   "Very High-level Design Language",
   "Virtual Hardware Description Language",
   "Vector High-level Design Logic"
  ],
  "answer": 2,
  "explanation": "- VHDL stands for **VHSIC (Very High Speed Integrated Circuit) Hardware Description Language**.\n- It is a programming language used to describe the behavior and structure of electronic systems, primarily used for designing integrated circuits.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q24"
   }
  ]
 },
 {
  "id": "q-37da6c6255-473",
  "t": 5,
  "sub": "5.2",
  "text": "Which networking device operates at the data link layer of the OSI model and filters traffic based on MAC addresses?",
  "options": [
   "Hub",
   "Router",
   "Switch",
   "Bridge"
  ],
  "answer": 2,
  "explanation": "- A **switch** operates at the **data link layer** of the OSI model and filters traffic based on MAC (Media Access Control) addresses.\n- It is used to create a network by connecting devices within the same network segment, reducing collisions compared to hubs.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q25"
   }
  ]
 },
 {
  "id": "q-c20ed78e83-474",
  "t": 5,
  "sub": "5.2",
  "text": "Which error detection and correction technique involves adding redundant bits to the data being transmitted?",
  "options": [
   "Parity check",
   "Checksum",
   "Hamming code",
   "CRC"
  ],
  "answer": 2,
  "explanation": "- **Hamming code** is a technique that involves adding redundant bits (parity bits) to the original data to detect and correct errors.\n- It can correct single-bit errors and detect two-bit errors.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q26"
   }
  ]
 },
 {
  "id": "q-a299e9188f-475",
  "t": 5,
  "sub": "5.3",
  "text": "Which routing algorithm is used by the Open Shortest Path First (OSPF) protocol?",
  "options": [
   "Distance vector",
   "Link state",
   "Path vector",
   "Hierarchical"
  ],
  "answer": 1,
  "explanation": "- **OSPF** uses the **link-state** routing algorithm.\n- It maintains a map of the network topology and updates routing tables based on the state of the network links. This helps to determine the shortest path between routers.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q27"
   }
  ]
 },
 {
  "id": "q-79d1e839ea-476",
  "t": 5,
  "sub": "5.4",
  "text": "Which protocol at the transport layer provides reliable, connection-oriented data transfer?",
  "options": [
   "UDP",
   "FTP",
   "TCP",
   "ICMP"
  ],
  "answer": 2,
  "explanation": "- **TCP (Transmission Control Protocol)** is a connection-oriented protocol that provides reliable data transfer by establishing a connection between sender and receiver before transmitting data.\n- It guarantees data delivery and maintains the order of packets through sequence numbers and acknowledgments.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q28"
   }
  ]
 },
 {
  "id": "q-389d0f16cf-477",
  "t": 5,
  "sub": "5.5",
  "text": "Which protocol is used for email transfer?",
  "options": [
   "HTTP",
   "FTP",
   "SNMP",
   "SMTP"
  ],
  "answer": 3,
  "explanation": "- **SMTP (Simple Mail Transfer Protocol)** is used for sending and transferring emails across networks.\n- It works with other protocols like IMAP and POP3 to retrieve and manage email from mail servers.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q29"
   }
  ]
 },
 {
  "id": "q-e064bd4503-478",
  "t": 5,
  "sub": "5.2",
  "text": "Which type of network security device is used to monitor and filter incoming and outgoing network traffic?",
  "options": [
   "Antivirus software",
   "Intrusion detection system (IDS)",
   "Firewall",
   "Virtual private network (VPN)"
  ],
  "answer": 2,
  "explanation": "- A **firewall** is a network security device that monitors and controls incoming and outgoing network traffic based on predefined security rules.\n- It acts as a barrier between trusted internal networks and untrusted external networks, such as the internet, preventing unauthorized access.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q30"
   }
  ]
 },
 {
  "id": "q-a091f25b19-479",
  "t": 2,
  "sub": "2.5",
  "text": "What is the value of tangential component of electric field in a dielectric-conductor boundary (interface)?",
  "options": [
   "Zero",
   "Infinite",
   "One",
   "Three"
  ],
  "answer": 0,
  "explanation": "- In a dielectric-conductor boundary, the tangential component of the electric field is zero at the boundary.\n- This is because the conductor acts as a perfect electric shield, preventing tangential electric field lines from existing at its surface.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q31"
   }
  ]
 },
 {
  "id": "q-544c2e35b7-480",
  "t": 1,
  "sub": "1.1",
  "text": "Which of the following statements are true regarding Bio-Savart’s Law?",
  "options": [
   "Magnetic field directly proportional to cross-sectional area of conductor.",
   "Bio-Savart’s Law deals with electric field.",
   "Magnetic field directly proportional to current through the conductor.",
   "Electric field directly proportional to current through the conductor."
  ],
  "answer": 2,
  "explanation": "- **Bio-Savart’s Law** relates to the magnetic field generated by an electric current in a conductor.\n- The magnetic field is directly proportional to the current and the geometry of the conductor.\n- The cross-sectional area does not directly affect the magnetic field in Bio-Savart’s Law.\n- The law does not deal with electric fields, but with magnetic fields generated by electric currents.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q32"
   }
  ]
 },
 {
  "id": "q-481ecf37e0-481",
  "t": 6,
  "sub": "6.4",
  "text": "For a plane wave propagation in an unbound medium (free space), the minimum angle between electric field and magnetic field vector is …..",
  "options": [
   "0°",
   "30°",
   "90°",
   "180°"
  ],
  "answer": 2,
  "explanation": "- In free space, the electric and magnetic field vectors in a plane wave are always perpendicular to each other.\n- Therefore, the minimum angle between them is **90°**.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q33"
   }
  ]
 },
 {
  "id": "q-b8042dbc70-482",
  "t": 1,
  "sub": "1.1",
  "text": "What is the radiation pattern of an isotropic radiator?",
  "options": [
   "Doughnut",
   "Sphere",
   "Hemisphere",
   "Circular"
  ],
  "answer": 1,
  "explanation": "- The radiation pattern of an **isotropic radiator** is spherical.\n- An isotropic radiator radiates equally in all directions, producing a uniform radiation pattern in three-dimensional space.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q34"
   }
  ]
 },
 {
  "id": "q-0553bc662c-483",
  "t": 3,
  "sub": "3.1",
  "text": "Which of the following is not true with respect to antenna?",
  "options": [
   "Lower Frequencies are radiated near the end of the transmission line.",
   "Horn antennas are used to feed parabolic disk Antenna.",
   "Yagi-Uda antennas have high bandwidth and low gain.",
   "Higher frequencies are radiated near the feed point."
  ],
  "answer": 2,
  "explanation": "- **Yagi-Uda antennas** have relatively **high gain** and are known for their **narrow bandwidth**.\n- The other statements are correct:\n  - Lower frequencies are typically radiated near the end of the transmission line.\n  - Horn antennas are used for feeding parabolic antennas.\n  - Higher frequencies are indeed radiated near the feed point of the antenna.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q35"
   }
  ]
 },
 {
  "id": "q-2d1152b289-484",
  "t": 1,
  "sub": "1.1",
  "text": "The path loss in free space propagation is proportional to ………..",
  "options": [
   "Square of the distance",
   "Inverse of the distance",
   "Logarithm of the distance",
   "Proportional to the distance"
  ],
  "answer": 0,
  "explanation": "- In free space propagation, **path loss** increases with the square of the distance. This is known as the **inverse square law**.\n- The loss is proportional to the square of the distance between the transmitter and receiver.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q36"
   }
  ]
 },
 {
  "id": "q-2df5a8823e-485",
  "t": 8,
  "sub": "8.6",
  "text": "……………….. level is where the model becomes compatible and executable code",
  "options": [
   "Abstract level",
   "Application level",
   "Implementation level",
   "All of the above"
  ],
  "answer": 2,
  "explanation": "- The **implementation level** refers to the stage where the model is transformed into executable code that is compatible with the system.\n- The abstract level refers to a higher-level design, while the application level refers to the functional design phase.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q37"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q19"
   }
  ]
 },
 {
  "id": "q-da24dd8080-486",
  "t": 7,
  "sub": "7.2",
  "text": "What is the hash function used in the division method?",
  "options": [
   "h(k) = k/m",
   "h(k) = k mod m",
   "h(k) = m/k",
   "h(k) = m mod k"
  ],
  "answer": 1,
  "explanation": "- The **division method** of hashing uses the hash function **h(k) = k mod m**, where **k** is the key and **m** is the size of the hash table.\n- This method ensures that the key is mapped to an index within the bounds of the table.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q38"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q20"
   }
  ]
 },
 {
  "id": "q-133a8750fd-487",
  "t": 7,
  "sub": "7.3",
  "text": "Redundancy is reduced in a database table by using the ------------ form.",
  "options": [
   "Abnormal",
   "Normal",
   "Special",
   "Exactly"
  ],
  "answer": 1,
  "explanation": "- **Normalization** is the process of organizing data in a database to reduce redundancy and dependency.\n- By using **normal forms** (like 1NF, 2NF, 3NF), redundancy is minimized, ensuring efficient storage and data integrity.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q39"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q21"
   }
  ]
 },
 {
  "id": "q-e1f22fe02b-488",
  "t": 3,
  "sub": "3.5",
  "text": "It is advisable, to store the -------- before applying the actual transaction to the database.",
  "options": [
   "Data",
   "Logs",
   "Receive",
   "Record"
  ],
  "answer": 1,
  "explanation": "- It is advisable to store **logs** before applying the actual transaction to the database. This helps in tracking and recovering data in case of errors or failures during the transaction.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q40"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q22"
   }
  ]
 },
 {
  "id": "q-f3b342829b-489",
  "t": 3,
  "sub": "3.3",
  "text": "To enforce ………………….. two functions are provided enter-critical and exit-critical, where each function takes as an argument the name of the resource that is the subject of competition.",
  "options": [
   "Mutual Exclusion",
   "Synchronization",
   "Deadlock",
   "Starvation"
  ],
  "answer": 0,
  "explanation": "- **Mutual Exclusion** is a principle where only one process can access a shared resource at a time, to prevent race conditions. The **enter-critical** and **exit-critical** functions help implement mutual exclusion.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q41"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q23"
   }
  ]
 },
 {
  "id": "q-962ddeef50-490",
  "t": 4,
  "sub": "4.5",
  "text": "If you wanted to require that a user enter an Administrator password to perform administrative tasks, what type of user account should you create for the user?",
  "options": [
   "Administrator User account",
   "Standard User account",
   "Power User account",
   "Authenticated User account"
  ],
  "answer": 0,
  "explanation": "- To perform administrative tasks, you would create an **Administrator User account**. This account has elevated privileges to make system-wide changes.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q42"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q24"
   }
  ]
 },
 {
  "id": "q-b8c04116df-491",
  "t": 8,
  "sub": "8.1",
  "text": "The process to gather the software requirements from client, analyze and document them is known as ___________________.",
  "options": [
   "Feasibility Study",
   "Requirement Gathering",
   "Requirement Engineering",
   "System Requirements Specification"
  ],
  "answer": 2,
  "explanation": "- **Requirement Engineering** is the process of gathering, analyzing, and documenting software requirements. It involves understanding the needs of the client and translating them into functional specifications.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q43"
   }
  ]
 },
 {
  "id": "q-68806c10f1-492",
  "t": 8,
  "sub": "8.4",
  "text": "What is reference architecture?",
  "options": [
   "It is a reference model mapped onto software components",
   "It provided data flow with comments",
   "It provides data flow with pieces",
   "It is a reference model mapped onto software components & data flow with comments"
  ],
  "answer": 0,
  "explanation": "- **Reference architecture** is a blueprint that provides a standard, reusable framework for designing systems. It is typically a reference model mapped onto software components that serve as a foundation for development.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q44"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q8"
   }
  ]
 },
 {
  "id": "q-3088f63477-493",
  "t": 3,
  "sub": "3.3",
  "text": "Which access specifier is used to make the members of a class accessible only within the same class?",
  "options": [
   "public",
   "private",
   "protected",
   "public and protected"
  ],
  "answer": 1,
  "explanation": "- The **private** access specifier restricts access to class members, allowing them to be used only within the class.\n- This means other classes or functions can't access or modify these members directly.\n- It's a common practice to use **private** for data encapsulation and hiding implementation details.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q45"
   }
  ]
 },
 {
  "id": "q-95da3531fc-494",
  "t": 3,
  "sub": "3.3",
  "text": "What is operator overloading in C++?",
  "options": [
   "Defining a new operator.",
   "Overriding an existing operator.",
   "Changing the behaviour of an existing operator.",
   "Changing the behaviour of new operator."
  ],
  "answer": 2,
  "explanation": "- **Operator overloading** allows redefining the functionality of existing operators (e.g., `+`, `-`, etc.) for user-defined types.\n- For example, you can overload the `+` operator to add two objects of a custom class.\n- It makes user-defined classes behave like built-in types in expressions.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q46"
   }
  ]
 },
 {
  "id": "q-04d9e99c9a-495",
  "t": 3,
  "sub": "3.5",
  "text": "What is the difference between ifstream and ofstream in C++?",
  "options": [
   "ifstream is used for input, while ofstream is used for output.",
   "ofstream is used for input, while ifstream is used for output.",
   "both are used as input.",
   "both are used as output."
  ],
  "answer": 0,
  "explanation": "- **ifstream**: used to read data from files (input).\n- **ofstream**: used to write data to files (output).\n- These are stream classes in C++ for file handling and are used to interact with external files.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q47"
   }
  ]
 },
 {
  "id": "q-b20950f782-496",
  "t": 3,
  "sub": "3.3",
  "text": "What is a class template in C++?",
  "options": [
   "A class that can be used to create objects of different types.",
   "A function that can be used to create objects of different types.",
   "A variable that can be used to create objects of different types.",
   "A character that can be used to create objects of different types."
  ],
  "answer": 0,
  "explanation": "- A **class template** in C++ allows the definition of a class blueprint that works with any data type.\n- This enables the creation of objects for various data types without duplicating code.\n- For example, you can define a class for a generic container that works with integers, floats, or any custom data type.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q48"
   }
  ]
 },
 {
  "id": "q-f02ec1b298-497",
  "t": 5,
  "sub": "5.1",
  "text": "Which of the following is not a medium of transmission?",
  "options": [
   "Microwave system",
   "Wire",
   "Free space",
   "Fiber optic cable"
  ],
  "answer": 2,
  "explanation": "- **Free space** is not a medium of transmission. It refers to the environment in which transmission occurs, not a physical medium like wire, microwave, or fiber optics.\n- In communication systems, **free space** is used to describe the propagation environment, but the medium itself must be physical (like a wire or fiber).",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q49"
   }
  ]
 },
 {
  "id": "q-903bcf9ac3-498",
  "t": 10,
  "sub": "10.3",
  "text": "Actual radio coverage of a cell is called __________",
  "options": [
   "Fingerprint",
   "Footprint",
   "Imprint",
   "Matrix"
  ],
  "answer": 1,
  "explanation": "- The **footprint** refers to the actual radio coverage area of a cell in wireless communication systems.\n- It represents the region where the radio signals can reach and be reliably received.\n- It is essential for planning and optimizing network coverage.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q50"
   }
  ]
 },
 {
  "id": "q-f7f6e11a0f-499",
  "t": 5,
  "sub": "5.2",
  "text": "Rake Receiver does….",
  "options": [
   "Forward Error Correction",
   "Backward Error Correction",
   "Resembles equalizer",
   "Resembles equalizer and Counter effects multipath fading"
  ],
  "answer": 3,
  "explanation": "- The **Rake Receiver** is used in wireless communication to counteract the effects of multipath fading.\n- It combines multiple received signals (rays) with different time delays to improve the overall signal quality.\n- It acts as an equalizer by adjusting for multipath interference.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q51"
   }
  ]
 },
 {
  "id": "q-7f8d3f47e4-500",
  "t": 1,
  "sub": "1.3",
  "text": "The bit rate of personal communication is __________",
  "options": [
   "300 to 9600 bits/sec",
   "300 to 3400 bits/sec",
   "400 to 9600 bits/sec",
   "400 to 3500 bits/sec"
  ],
  "answer": 0,
  "explanation": "- Personal communication systems, such as early mobile phones, typically have bit rates ranging from **300 to 9600 bits per second**.\n- This range covers the typical bit rates for older mobile communication systems like **GSM** and **landline modems**.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q52"
   }
  ]
 },
 {
  "id": "q-8e7e21a650-501",
  "t": 5,
  "sub": "5.1",
  "text": "The ATM is an example for _____________ circuit network.",
  "options": [
   "Datagram subnet",
   "Virtual circuit subnet",
   "Packet subnet",
   "Volume subnet"
  ],
  "answer": 1,
  "explanation": "- **ATM (Asynchronous Transfer Mode)** uses a **virtual circuit subnet** for data transmission.\n- In virtual circuit networks, a predefined path is established between the sender and receiver before data transfer.\n- The ATM uses this method to ensure that data packets travel along the same path throughout the communication, which allows for more efficient data transfer.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q53"
   }
  ]
 },
 {
  "id": "q-8d40f1c44a-502",
  "t": 2,
  "sub": "2.5",
  "text": "Which agency sets the standards for telecommunications internationally?",
  "options": [
   "International Telecommunication Union (ITU)",
   "International Centre for Telecommunication Science (ICTS)",
   "International Telecommunication Protocol (ITP)",
   "Integrated Telecommunication of the United Nations (ITUN)"
  ],
  "answer": 0,
  "explanation": "- The **ITU** is the specialized agency of the United Nations responsible for setting global telecommunications standards.\n- It works to ensure the efficient use of telecommunication networks and promotes international cooperation in this field.\n- It also allocates global radio-frequency spectrum and satellite orbits.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q54"
   }
  ]
 },
 {
  "id": "q-de30b48abd-503",
  "t": 10,
  "sub": "10.1",
  "text": "Standard dimensions (mm x mm) of A3 drawing sheet is",
  "options": [
   "11.69 × 16.54",
   "29.7 × 42",
   "297 × 420",
   "420 × 280"
  ],
  "answer": 2,
  "explanation": "- The **A3** drawing sheet has standard dimensions of **297 mm × 420 mm**.\n- The A series of paper sizes follows a standard where each size is half of the size of the previous one when folded.\n- A3 is commonly used for large-format drawings, schematics, and documents.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q55"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q55"
   }
  ]
 },
 {
  "id": "q-cdb6e3fdd5-504",
  "t": 10,
  "sub": "10.2",
  "text": "Which of the following methods of charging depreciation of an asset has increased amount of depreciation as the age of asset increases",
  "options": [
   "Sum-of-year digit",
   "Sinking fund",
   "Diminishing balance",
   "Straight line"
  ],
  "answer": 2,
  "explanation": "- **Diminishing balance method** calculates depreciation at a fixed percentage of the asset's declining book value each year.\n- As the asset's value decreases over time, the depreciation expense increases because it is calculated on the remaining book value.\n- This method results in higher depreciation costs in the earlier years of the asset's life and decreases over time.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q56"
   }
  ]
 },
 {
  "id": "q-1128b44f39-505",
  "t": 10,
  "sub": "10.3",
  "text": "The process of optimizing the project’s limited resources without extending the project duration is known as",
  "options": [
   "Project crashing",
   "Resource levelling",
   "Resource smoothing",
   "Networking"
  ],
  "answer": 2,
  "explanation": "- **Resource smoothing** aims to optimize the use of available resources without extending the project duration.\n- It adjusts the resource usage to ensure that resources are allocated in a balanced manner over time while keeping the project end date unchanged.\n- It does not involve adding additional resources or changing the project's timeline.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q57"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q57"
   }
  ]
 },
 {
  "id": "q-93e0ea9a49-506",
  "t": 10,
  "sub": "10.3",
  "text": "The process of composing/raising the required fund from different sources such as equity, preferred stock, bond and debenture is known as",
  "options": [
   "Capital structure planning",
   "Project financing",
   "Capital budgeting decision",
   "Deducing earning per share"
  ],
  "answer": 1,
  "explanation": "- **Project financing** involves raising funds for a specific project through various sources like equity, bonds, debentures, and preferred stock.\n- It focuses on obtaining financial resources needed for project execution, ensuring that the right mix of capital sources is used.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q58"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q58"
   }
  ]
 },
 {
  "id": "q-3e7cdf8648-507",
  "t": 10,
  "sub": "10.5",
  "text": "In which of the following society, people used to seek their existence on growing plants for their cattle and domestic animals",
  "options": [
   "Pastoral society",
   "Tribal society",
   "Horticultural society",
   "Agricultural society"
  ],
  "answer": 2,
  "explanation": "- **Horticultural society** is based on the cultivation of plants for food and resources, often supporting domestic animals as well.\n- People in this society primarily focus on growing crops like fruits, vegetables, and other plants that serve both human and livestock needs.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q59"
   }
  ]
 },
 {
  "id": "q-3e983576c9-508",
  "t": 10,
  "sub": "10.6",
  "text": "According to Nepal Engineering Council Act, 2055 (Revised, 2079), all engineering academic institutions shall be …………………….. in the Council.",
  "options": [
   "Affiliated",
   "United",
   "Recognized",
   "Associated"
  ],
  "answer": 2,
  "explanation": "- According to the **Nepal Engineering Council Act, 2055 (Revised, 2079)**, all engineering academic institutions in Nepal must be **recognized** by the Council.\n- Recognition ensures that the institutions meet the necessary academic standards and are authorized to offer engineering education.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Short Q60"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q60"
   }
  ]
 },
 {
  "id": "q-d75ceb920b-509",
  "t": 4,
  "sub": "4.5",
  "text": "Which of the following is an output device?",
  "options": [
   "ROM",
   "Joystick",
   "Mouse",
   "Printer"
  ],
  "answer": 3,
  "explanation": "Output devices are hardware that communicate the results of computer processes to the user.\n\n- **Printer**: Produces physical output, like documents or images.\n- **ROM**: A type of memory, not an output device.\n- **Joystick** and **Mouse**: Input devices.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q1"
   }
  ]
 },
 {
  "id": "q-3feffffd4c-510",
  "t": 4,
  "sub": "4.2",
  "text": "__________ memory stores frequently accessed data and instructions, enabling faster processing.",
  "options": [
   "Cache",
   "RAM",
   "ROM",
   "SSD"
  ],
  "answer": 0,
  "explanation": "Cache memory is a small-sized type of volatile computer memory that provides high-speed data access to the processor. It temporarily stores frequently accessed data to improve processing speed.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q2"
   }
  ]
 },
 {
  "id": "q-68f60cf47b-511",
  "t": 2,
  "sub": "2.6",
  "text": "Which of the following is an application software?",
  "options": [
   "MS Windows 10",
   "Ubuntu 20.04",
   "MS Windows XP",
   "MS Word"
  ],
  "answer": 3,
  "explanation": "Application software is designed for end-users to perform specific tasks.\n\n- **MS Word**: A word processing application software.\n- **MS Windows 10**, **Ubuntu 20.04**, and **MS Windows XP**: Operating systems, not application software.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q3"
   }
  ]
 },
 {
  "id": "q-003d5fd24a-512",
  "t": 1,
  "sub": "1.4",
  "text": "Which of the following represents the largest computer network?",
  "options": [
   "LAN",
   "MAN",
   "Internet",
   "WAN"
  ],
  "answer": 2,
  "explanation": "The Internet is the largest global network connecting millions of private, public, academic, business, and government networks.\n\n- **LAN**: Local Area Network, limited to a small area.\n- **MAN**: Metropolitan Area Network, spans a city or campus.\n- **WAN**: Wide Area Network, larger than LAN and MAN but smaller than the Internet.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q4"
   }
  ]
 },
 {
  "id": "q-9158219346-513",
  "t": 3,
  "sub": "3.2",
  "text": "A protocol that defines how files are exchanged on the web is called _______.",
  "options": [
   "FTP",
   "SSH",
   "DHCP",
   "HTTP"
  ],
  "answer": 3,
  "explanation": "HTTP (HyperText Transfer Protocol) defines the rules for transferring files like text, images, and videos over the web.\n\n- **FTP**: File Transfer Protocol for transferring files between systems.\n- **SSH**: Secure Shell, used for secure access to remote computers.\n- **DHCP**: Dynamic Host Configuration Protocol, used for IP address management.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q5"
   }
  ]
 },
 {
  "id": "q-5c458f36eb-514",
  "t": 4,
  "sub": "4.1",
  "text": "Which of the following file types does not represent an image?",
  "options": [
   ".tif",
   ".jpeg",
   ".png",
   ".gif"
  ],
  "answer": 0,
  "explanation": "**.tif** is primarily used for scanned documents and is often associated with image formats, but it is less commonly used for general-purpose images compared to **.jpeg**, **.png**, and **.gif**.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q6"
   }
  ]
 },
 {
  "id": "q-b1f609eb54-515",
  "t": 8,
  "sub": "8.4",
  "text": "The process to gather software requirements from a client, analyze and document them is known as ____.",
  "options": [
   "Feasibility Study",
   "Requirement Gathering",
   "Requirement Engineering",
   "System Requirements Specification"
  ],
  "answer": 2,
  "explanation": "Requirement Engineering involves gathering, analyzing, and documenting the client's needs and requirements for the software development process.\n\n- **Feasibility Study**: Determines whether a project is viable.\n- **Requirement Gathering**: A subset of Requirement Engineering focused on collecting requirements.\n- **Project Analysis**: Broader term that may include various project management tasks.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q7"
   }
  ]
 },
 {
  "id": "q-67a30afc80-516",
  "t": 8,
  "sub": "8.3",
  "text": "Which of the following testing is sometimes called Acceptance testing?",
  "options": [
   "White-box testing",
   "Grey box testing",
   "Alpha testing",
   "Beta testing"
  ],
  "answer": 3,
  "explanation": "Beta testing is often considered a form of acceptance testing because it involves real users testing the software to determine if it meets their requirements and expectations before it is released to the public.\n\n- **Alpha testing**: Conducted internally by developers.\n- **White-box testing**: Focuses on testing the internal workings of the software.\n- **Grey-box testing**: A combination of black-box and white-box testing.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q9"
   }
  ]
 },
 {
  "id": "q-2b46bf0582-517",
  "t": 8,
  "sub": "8.4",
  "text": "What is the purpose of representing system behavior in OOAD?",
  "options": [
   "To document system architecture and components",
   "To identify potential risks and challenges",
   "To understand and model the dynamic aspects of the system",
   "To create user interfaces and interactions"
  ],
  "answer": 2,
  "explanation": "In Object-Oriented Analysis and Design (OOAD), representing system behavior is critical for modeling the dynamic aspects, such as object interactions and state changes, during the system's operation.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q10"
   }
  ]
 },
 {
  "id": "q-849a17b665-518",
  "t": 3,
  "sub": "3.3",
  "text": "In object-oriented design, what does visibility refer to?",
  "options": [
   "The physical appearance of an object.",
   "The accessibility of class members from other parts of the program.",
   "The process of creating instances of classes.",
   "The relationship between classes in a system."
  ],
  "answer": 1,
  "explanation": "In OO design, visibility refers to the scope and access control of class members (fields, methods), determining whether they are public, private, or protected, and how they can be accessed from outside the class.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q11"
   }
  ]
 },
 {
  "id": "q-264830e16e-519",
  "t": 8,
  "sub": "8.6",
  "text": "How are relationships between classes represented when mapping design to code?",
  "options": [
   "Through inheritance and implementation of interfaces.",
   "Through the use of composition and aggregation.",
   "Through static method calls and global variables.",
   "Through conditional statements and loops."
  ],
  "answer": 1,
  "explanation": "In object-oriented design, relationships between classes are often represented using composition (a \"has-a\" relationship) and aggregation (a weaker \"has-a\" relationship), which map to class interactions in code.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q12"
   }
  ]
 },
 {
  "id": "q-9d85c3c0d5-520",
  "t": 8,
  "sub": "8.6",
  "text": "______ only mentions what operations are to be performed but not how these operations will be implemented.",
  "options": [
   "Function",
   "Abstract Data Types",
   "Class",
   "Object"
  ],
  "answer": 1,
  "explanation": "Abstract Data Types (ADT) define operations that can be performed on data but do not specify the internal implementation details. They focus on the \"what\" rather than the \"how\".",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q13"
   }
  ]
 },
 {
  "id": "q-775148af4a-521",
  "t": 8,
  "sub": "8.6",
  "text": "While exception handling, ______ block is used to enclose one or more statements that might throw an exception.",
  "options": [
   "try",
   "catch",
   "throw",
   "finally"
  ],
  "answer": 0,
  "explanation": "The **try** block is used to enclose the code that might throw an exception. If an exception occurs, it is handled by the **catch** block. The **finally** block is used for cleanup tasks, and **throw** is used to explicitly throw an exception.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q14"
   }
  ]
 },
 {
  "id": "q-c508b26d0a-522",
  "t": 3,
  "sub": "3.2",
  "text": "A variable whose value is the address of another variable is called as ……",
  "options": [
   "keyword",
   "constant",
   "pointer",
   "identifier"
  ],
  "answer": 2,
  "explanation": "A **pointer** is a variable that holds the memory address of another variable. It is used to refer to the location of a value rather than the value itself.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q15"
   }
  ]
 },
 {
  "id": "q-6f28c17165-523",
  "t": 3,
  "sub": "3.3",
  "text": "Which of the following represents function overloading?",
  "options": [
   "void add ( int a, int b), void add( double a, double b)",
   "int add_int ( int a, int b), float add_float( float a, float b)",
   "add ( int a, int b), add_int ( int a, int b)",
   "void add ( int a, int b), void add_int ( int a, int b)"
  ],
  "answer": 0,
  "explanation": "**Function overloading** occurs when multiple functions have the same name but differ in parameters (either in type or number of arguments). Option 1 is an example of function overloading because both functions share the same name \"add\" but take different parameter types (`int` vs. `double`).",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q16"
   }
  ]
 },
 {
  "id": "q-56a66e0a40-524",
  "t": 2,
  "sub": "2.4",
  "text": "In C programming language, %u is used to indicate the format for ……….",
  "options": [
   "short int",
   "long int",
   "int",
   "unsigned int"
  ],
  "answer": 3,
  "explanation": "The **%u** format specifier is used to print an **unsigned int** (a positive integer) in C. It is used when working with values that cannot be negative.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q17"
   }
  ]
 },
 {
  "id": "q-3f74bfa7a8-525",
  "t": 3,
  "sub": "3.4",
  "text": "The main benefit of the C++ Standard Template Library (STL) is that it provides a way to write generic, reusable code that can be applied to …………",
  "options": [
   "override functions",
   "different data types.",
   "same data type.",
   "overloaded functions."
  ],
  "answer": 1,
  "explanation": "The **C++ Standard Template Library (STL)** allows developers to write generic code that works with different data types through templates. This promotes code reuse and flexibility across various data types.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q18"
   }
  ]
 },
 {
  "id": "q-76e375a0b2-526",
  "t": 4,
  "sub": "4.1",
  "text": "In 8086 microprocessors, there are ………….. addressing modes.",
  "options": [
   "11",
   "5",
   "8",
   "13"
  ],
  "answer": 1,
  "explanation": "The **8086 microprocessor** supports **5 addressing modes**, which allow the CPU to access operands in different ways, such as through direct, indirect, or indexed addressing.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q25"
   }
  ]
 },
 {
  "id": "q-bcf7e6a610-527",
  "t": 2,
  "sub": "2.5",
  "text": "The main function of a ……….. is to transfer data between memory and an auxiliary device directly, without involving the CPU.",
  "options": [
   "DMA controller",
   "Asynchronous Transmission",
   "Synchronous Transmission",
   "Parallel Interface"
  ],
  "answer": 0,
  "explanation": "A **DMA (Direct Memory Access) controller** allows data to be transferred between memory and peripheral devices without CPU involvement, which improves system performance by reducing CPU workload.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q26"
   }
  ]
 },
 {
  "id": "q-b4fed5ce8d-528",
  "t": 2,
  "sub": "2.6",
  "text": "There are …………. software interrupt types in 8086 microprocessors.",
  "options": [
   "128",
   "256",
   "200",
   "512"
  ],
  "answer": 1,
  "explanation": "The **8086 microprocessor** supports **256 software interrupt types** (interrupt vectors 00h to FFh), which are used to handle various system-level and application-level interrupt requests.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q27"
   }
  ]
 },
 {
  "id": "q-f491dbeca6-529",
  "t": 2,
  "sub": "2.6",
  "text": "The instruction which performs logical operation in 8086 microprocessors is ……..",
  "options": [
   "XOR",
   "AAD",
   "JMP",
   "CLC"
  ],
  "answer": 0,
  "explanation": "The **XOR** instruction performs a logical exclusive OR operation between two operands, which is commonly used in bitwise logical operations in the **8086 microprocessor**.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q28"
   }
  ]
 },
 {
  "id": "q-d2bcbc5787-530",
  "t": 7,
  "sub": "7.6",
  "text": "As a part of memory management, pages are replaced which would not be used for the longest duration of time in the future with ………… algorithm.",
  "options": [
   "First in first out",
   "Optimal page replacement",
   "Least recently used",
   "Most recently used"
  ],
  "answer": 1,
  "explanation": "The **Optimal page replacement** algorithm replaces the page that will not be used for the longest period of time in the future. This algorithm aims to minimize page faults but is not feasible for implementation due to the requirement of future knowledge.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q29"
   }
  ]
 },
 {
  "id": "q-643b0d7edd-531",
  "t": 5,
  "sub": "5.2",
  "text": "In ………. Mode, the entire data is transferred before CPU takes control of the buses back from direct memory access (DMA) controller.",
  "options": [
   "Cycle stealing mode",
   "Burst mode",
   "Interleaving mode",
   "Non-interleaving mode"
  ],
  "answer": 1,
  "explanation": "In **Burst mode**, the **DMA controller** transfers the entire block of data in one go without interruption, after which the CPU takes control of the buses.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q30"
   }
  ]
 },
 {
  "id": "q-6abca5648b-532",
  "t": 6,
  "sub": "6.3",
  "text": "During asymptotic analysis, the big-O notation (O) is used to denote ………..",
  "options": [
   "Average case",
   "Best case",
   "Worst case",
   "Optimal case"
  ],
  "answer": 2,
  "explanation": "**Big-O notation** is used to describe the upper bound or worst-case time complexity of an algorithm. It helps in understanding how the algorithm performs under the most challenging conditions.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q31"
   }
  ]
 },
 {
  "id": "q-b2ad5e0457-533",
  "t": 7,
  "sub": "7.2",
  "text": "Choose the sorting algorithm which is preferable in terms of average case time complexity …………..",
  "options": [
   "Insertion",
   "Selection",
   "Bubble",
   "Quick"
  ],
  "answer": 3,
  "explanation": "**Quick Sort** is generally preferred for sorting in terms of average case time complexity as it has an average time complexity of **O(n log n)**, which is faster than the other options.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q32"
   }
  ]
 },
 {
  "id": "q-5b0e8a080c-534",
  "t": 7,
  "sub": "7.2",
  "text": "………… is an algorithmic approach which develops a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit.",
  "options": [
   "Greedy approach",
   "Searching approach",
   "Divide and conquer approach",
   "Backtracking approach"
  ],
  "answer": 0,
  "explanation": "The **Greedy approach** solves problems by selecting the best option available at the moment, without worrying about future consequences, aiming for an optimal solution.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q33"
   }
  ]
 },
 {
  "id": "q-0bff5ad0e3-535",
  "t": 4,
  "sub": "4.2",
  "text": "…………. is a program residing in a ROM, which is automatically executed by the processor to read the hard drive's boot sector and load the computer’s operating system.",
  "options": [
   "Linker",
   "Bootloader",
   "Program linker",
   "Macro processor"
  ],
  "answer": 1,
  "explanation": "The **Bootloader** is a small program stored in **ROM** that initializes the system and loads the operating system from storage into memory at startup.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q34"
   }
  ]
 },
 {
  "id": "q-4e28bdfc70-536",
  "t": 2,
  "sub": "2.4",
  "text": "Macro processor replaces each macro instruction with the corresponding group of source language statements. This is known as ……….",
  "options": [
   "Macro linking",
   "Macro execution",
   "Macro call",
   "Macro expansion"
  ],
  "answer": 3,
  "explanation": "**Macro expansion** refers to the process of replacing a macro instruction with the corresponding group of source language statements as defined in the macro definition.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q35"
   }
  ]
 },
 {
  "id": "q-40a62a1e57-537",
  "t": 5,
  "sub": "5.4",
  "text": "During socket programming, ……… announces willingness to accept connections.",
  "options": [
   "Accept",
   "Bind",
   "Socket",
   "Listen"
  ],
  "answer": 3,
  "explanation": "The **listen** function is used in socket programming to announce that the server is ready to accept incoming connection requests from clients.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q36"
   }
  ]
 },
 {
  "id": "q-47b278df1f-538",
  "t": 9,
  "sub": "9.1",
  "text": "In which type of environment, the next state of the environment is completely determined by the current state and the action taken by the agent?",
  "options": [
   "Observable environment",
   "Deterministic environment",
   "Episodic environment",
   "Static environment"
  ],
  "answer": 1,
  "explanation": "In a **deterministic environment**, the future state of the environment is completely predictable, based solely on the current state and the action taken by the agent.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q37"
   }
  ]
 },
 {
  "id": "q-88e6137767-539",
  "t": 9,
  "sub": "9.2",
  "text": "Which searching technique is guaranteed to find the optimal solution in a state space search problem, assuming no path costs?",
  "options": [
   "Depth-first search (DFS)",
   "Breadth-first search (BFS)",
   "Hill climbing",
   "A* search"
  ],
  "answer": 1,
  "explanation": "**Breadth-first search (BFS)** is guaranteed to find the optimal solution when there are no path costs, as it explores all states level by level.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q38"
   }
  ]
 },
 {
  "id": "q-01be297c6e-540",
  "t": 9,
  "sub": "9.3",
  "text": "What is the main goal of the resolution algorithm in inference?",
  "options": [
   "To derive new logical axioms",
   "To simplify logical expressions",
   "To prove the satisfiability or un-satisfiability of a given set of logical statements",
   "To find contradictions in the knowledge base"
  ],
  "answer": 2,
  "explanation": "The **resolution algorithm** is used in logic-based inference systems to prove whether a set of logical statements is satisfiable or unsatisfiable by deriving contradictions.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q39"
   }
  ]
 },
 {
  "id": "q-a486138a57-541",
  "t": 2,
  "sub": "2.4",
  "text": "What is the main goal of natural language understanding (NLU)?",
  "options": [
   "Translating text from one language to another",
   "Generating human-like responses to user queries",
   "Analyzing and interpreting the meaning of natural language text",
   "Extracting entities and their relationships from a text"
  ],
  "answer": 2,
  "explanation": "**Natural Language Understanding (NLU)** aims to analyze and interpret the meaning of text written in natural language, enabling machines to comprehend human communication.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q40"
   }
  ]
 },
 {
  "id": "q-d90ef919ee-542",
  "t": 9,
  "sub": "9.5",
  "text": "What is fuzzy learning in machine learning?",
  "options": [
   "A type of learning algorithm that uses fuzzy logic to handle uncertain or imprecise data",
   "A learning technique that focuses on training neural networks with fuzzy inputs",
   "A method that uses fuzzy inference to make predictions based on labelled data",
   "A learning approach that emphasizes the use of fuzzy clustering algorithms"
  ],
  "answer": 0,
  "explanation": "**Fuzzy learning** applies **fuzzy logic** to deal with uncertain or imprecise data, enabling machines to model and handle ambiguity in real-world problems.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q41"
   }
  ]
 },
 {
  "id": "q-244b11eb5b-543",
  "t": 2,
  "sub": "2.4",
  "text": "Which neural network architecture is commonly used for processing sequential data, such as time series or natural language?",
  "options": [
   "Feed-forward neural network (FNN)",
   "Self-organizing map (SOM)",
   "Radial basis function network (RBFN)",
   "Recurrent neural network (RNN)"
  ],
  "answer": 3,
  "explanation": "**Recurrent Neural Networks (RNNs)** are specifically designed to handle sequential data, making them ideal for time series and natural language processing tasks.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q42"
   }
  ]
 },
 {
  "id": "q-5ccde5bb21-544",
  "t": 7,
  "sub": "7.6",
  "text": "For a Java source file named “First.java”, which of the following files represent bytecode?",
  "options": [
   "First.java",
   "First.class",
   "First.exe",
   "First.bin"
  ],
  "answer": 1,
  "explanation": "When a **Java source file** is compiled, the bytecode is saved with a **.class** extension. This bytecode can then be run on any platform with a compatible Java Virtual Machine (JVM).",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q43"
   }
  ]
 },
 {
  "id": "q-a47ad9eed2-545",
  "t": 2,
  "sub": "2.5",
  "text": "For the button source object, its appropriate listener interface is ………..",
  "options": [
   "ItemListener",
   "MouseListener",
   "ActionListener",
   "WindowListener"
  ],
  "answer": 2,
  "explanation": "The **ActionListener** interface is used for handling button clicks or action events in Java. It captures actions like pressing a button or selecting a menu item.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q44"
   }
  ]
 },
 {
  "id": "q-4e016fb8a0-546",
  "t": 2,
  "sub": "2.6",
  "text": "Each time when a servlet is called, which method is called first?",
  "options": [
   "start()",
   "init()",
   "run()",
   "service()"
  ],
  "answer": 1,
  "explanation": "The **init()** method is called first when a servlet is loaded, and it is used for initializing the servlet before it handles any client requests.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q45"
   }
  ]
 },
 {
  "id": "q-31f4c7da81-547",
  "t": 10,
  "sub": "10.4",
  "text": "Main design aim of XML is to …….. and ……. data.",
  "options": [
   "store, style",
   "design, transport",
   "store, transport",
   "design, style"
  ],
  "answer": 2,
  "explanation": "**XML (Extensible Markup Language)** is designed primarily to store and transport data, providing a way to structure and exchange information between different systems.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q46"
   }
  ]
 },
 {
  "id": "q-d0b4506bb6-548",
  "t": 2,
  "sub": "2.6",
  "text": "Which of the following method does not fall into CRUD operation?",
  "options": [
   "create",
   "delete",
   "update",
   "init"
  ],
  "answer": 3,
  "explanation": "**init()** is a method in servlets for initialization, not a CRUD (Create, Read, Update, Delete) operation. CRUD operations involve managing data, while init() initializes the servlet.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q47"
   }
  ]
 },
 {
  "id": "q-c19669df04-549",
  "t": 5,
  "sub": "5.5",
  "text": "Which of the following is used to call a stored procedure?",
  "options": [
   "Statement",
   "PreparedStatement",
   "CrudeStatement",
   "CallableStatement"
  ],
  "answer": 3,
  "explanation": "**CallableStatement** is used to call stored procedures in a database. It allows calling functions or procedures in SQL from a Java application.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q48"
   }
  ]
 },
 {
  "id": "q-863cbf80fb-550",
  "t": 4,
  "sub": "4.5",
  "text": "The ………. scheduling algorithm schedules periodic tasks using a static priority policy by considering the priorities.",
  "options": [
   "Round robin",
   "Shortest job first",
   "First come first serve",
   "Rate monotonic"
  ],
  "answer": 3,
  "explanation": "**Rate monotonic scheduling** is a fixed priority algorithm for scheduling periodic tasks, where tasks with shorter periods are given higher priorities.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q49"
   }
  ]
 },
 {
  "id": "q-bdb299d70c-551",
  "t": 4,
  "sub": "4.5",
  "text": "A real-time operating system is characterized by …………",
  "options": [
   "all processes have the same priority.",
   "all tasks must be serviced by its deadline period.",
   "sometimes the deadline may be missed when ensuring a high level of accuracy.",
   "The Kernel is not required."
  ],
  "answer": 1,
  "explanation": "A **real-time operating system (RTOS)** ensures that tasks are completed within a defined time frame or deadline, which is a key characteristic for time-sensitive applications.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q50"
   }
  ]
 },
 {
  "id": "q-69c53d3b64-552",
  "t": 8,
  "sub": "8.2",
  "text": "……………. is characterized by services and applications, which run over a distributed network utilizing virtualized resources.",
  "options": [
   "Parallel computing",
   "Distributed computing",
   "Client server computing",
   "Cloud computing"
  ],
  "answer": 1,
  "explanation": "**Distributed computing** involves services and applications running over a distributed network, using virtualized resources across multiple machines or locations.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q51"
   }
  ]
 },
 {
  "id": "q-a12ad19efb-553",
  "t": 8,
  "sub": "8.2",
  "text": "…………. acts as the ‘glue’ between the client and server applications, respectively, and that Object Request Broker (ORB).",
  "options": [
   "ORB interface",
   "Dynamic invocation interface",
   "Object adapter",
   "CORBA IDL stubs and skeletons"
  ],
  "answer": 2,
  "explanation": "The **Object adapter** in CORBA acts as the 'glue' between the client and server applications by managing the communication and interaction between the objects in the distributed environment.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q52"
   }
  ]
 },
 {
  "id": "q-72eb4bb7fb-554",
  "t": 2,
  "sub": "2.6",
  "text": "Which of the following is a type of cloud computing service?",
  "options": [
   "Software-as-a-Service (SaaS)",
   "Software-as-a-Server (SaaS)",
   "Service-as-a-Server (SaaS)",
   "Service-as-a-Software (SaaS)"
  ],
  "answer": 0,
  "explanation": "**SaaS (Software-as-a-Service)** is a cloud computing service model where software applications are hosted on the cloud and made available to users over the internet.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q53"
   }
  ]
 },
 {
  "id": "q-d4b175600e-555",
  "t": 3,
  "sub": "3.4",
  "text": "If timestamps of two or more events are the same, then the events are called to be …….",
  "options": [
   "non-monotonic",
   "monolithic",
   "monotonic",
   "concurrent"
  ],
  "answer": 3,
  "explanation": "When two or more events have the same timestamp, they are considered **concurrent**, meaning that they occur at the same time but not necessarily in any specific order.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q54"
   }
  ]
 },
 {
  "id": "q-641b3a2f0a-556",
  "t": 10,
  "sub": "10.2",
  "text": "Which of the following methods of charging depreciation of an asset has increased amount of depreciation as the age of the asset increases?",
  "options": [
   "sum-of-year digit",
   "sinking fund",
   "diminishing balance",
   "straight line"
  ],
  "answer": 2,
  "explanation": "The **diminishing balance** method of depreciation charges a larger amount of depreciation in the earlier years of the asset's life, with the amount decreasing over time.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q56"
   }
  ]
 },
 {
  "id": "q-3a370e9c24-557",
  "t": 10,
  "sub": "10.5",
  "text": "In which of the following societies, people used to seek their existence on growing plants for their cattle and domestic animals?",
  "options": [
   "pastoral society",
   "tribal society",
   "horticultural society",
   "agricultural society"
  ],
  "answer": 2,
  "explanation": "**Horticultural societies** focus on the cultivation of plants primarily for subsistence. They often grow plants to feed themselves and their livestock, unlike agricultural societies, which use large-scale farming practices.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Short Q59"
   }
  ]
 },
 {
  "id": "q-1fa1a5b60c-558",
  "t": 9,
  "sub": "9.2",
  "text": "In an alpha-beta pruning problem, what are the values of alpha and beta?",
  "options": [
   "Fixed values of 0 and 1",
   "Always positive integers",
   "Always negative integers",
   "Dynamic values that change during the search process"
  ],
  "answer": 3,
  "explanation": "In **alpha-beta pruning**, **alpha** and **beta** are dynamic values that represent the best already explored options along the path of the maximizer and minimizer, respectively. They change as the search progresses.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q1"
   }
  ]
 },
 {
  "id": "q-a3244a3b4e-559",
  "t": 9,
  "sub": "9.4",
  "text": "What is the correct order of processes in Computer Vision?",
  "options": [
   "Image acquisition, segmentation, processing, analysis",
   "Image acquisition, processing, segmentation, analysis",
   "Image processing, acquisition, segmentation, analysis",
   "Image segmentation, acquisition, processing, analysis"
  ],
  "answer": 1,
  "explanation": "The correct order in **computer vision** starts with **image acquisition**, followed by **processing**, then **segmentation**, and finally **analysis**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q2"
   }
  ]
 },
 {
  "id": "q-b12a2e00c0-560",
  "t": 2,
  "sub": "2.1",
  "text": "For a network with 10 nodes in a mesh topology, how many duplex connections are required?",
  "options": [
   "45",
   "90",
   "100",
   "10"
  ],
  "answer": 0,
  "explanation": "The formula for **duplex connections** in a **mesh topology** is $$\\frac{n(n-1)}{2}$$, where **n** is the number of nodes. For **10 nodes**, the number of duplex connections is $$\\frac{10(10-1)}{2} = 45$$.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q3"
   }
  ]
 },
 {
  "id": "q-26c7f64b7e-561",
  "t": 10,
  "sub": "10.3",
  "text": "What is the result of a \"wound and wait\" problem?\n\n<figure><img src=\"https://3333194153-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FgqhQ5rzaUIaiagSOnjNG%2Fuploads%2Fgit-blob-5ebccac94f197eac5e2a9813fb416632f648f870%2Fset_1_long_4.png?alt=media\" alt=\"\"><figcaption></figcaption></figure>",
  "options": [
   "T1 wounds T2 for B and T2 must wait for A.",
   "T2 wounds T1 for A and T1 must wait for B.",
   "T1 and T2 both proceed without any waits or wounds.",
   "T2 wounds T1 for B and T1 must wait for A."
  ],
  "answer": 0,
  "explanation": "In a **wound and wait** protocol, if a higher-priority process (T1) requests a resource held by a lower-priority process (T2), T1 will \"wound\" T2 (preempt it), and T2 will have to wait for T1 to release the resource. Here, T1 wounds T2 for **B**, and T2 must wait for **A**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q4"
   }
  ]
 },
 {
  "id": "q-81e9380cc6-562",
  "t": 8,
  "sub": "8.6",
  "text": "In a given namespace concept program, what should the next line of code be?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    try {\n        throw 20;\n    }\n    catch (int e) {\n        cout << \"Exception caught: \" << e << endl;\n    }\n    return 0;\n}\n```",
  "options": [
   "Exception caught: 0",
   "Exception caught: 20",
   "No exception caught",
   "Runtime error"
  ],
  "answer": 1,
  "explanation": "The program throws an integer value 20, which is caught by the catch block and displayed as \"Exception caught: 20\".",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q5"
   }
  ]
 },
 {
  "id": "q-0c4d5056eb-563",
  "t": 1,
  "sub": "1.1",
  "text": "In a given namespace concept program, what should the next line of code be?\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nnamespace First {\n    void sayHello() {\n        cout << \"Hello from First namespace!\" << endl;\n    }\n}\n\nnamespace Second {\n    void sayHello() {\n        cout << \"Hello from Second namespace!\" << endl;\n    }\n}\n\nint main() {\n    First::sayHello();\n    // Next line to be guessed:\n```",
  "options": [
   "`Second.sayHello();`",
   "`Second::sayHello();`",
   "`sayHello();`",
   "`::sayHello();`"
  ],
  "answer": 1,
  "explanation": "Since the function `sayHello()` exists in the `Second` namespace, the correct syntax to call it is `Second::sayHello()`.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q6"
   }
  ]
 },
 {
  "id": "q-8cc8d2064f-564",
  "t": 1,
  "sub": "1.1",
  "text": "A 250V bulb passes a current of 0.3A. Calculate the power in the lamp.",
  "options": [
   "75W",
   "50W",
   "25W",
   "90W"
  ],
  "answer": 0,
  "explanation": "Here, V = 250V and I = 0.3A. The formula for power is P = VI, so P = 250 * 0.3 = 75W.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q7"
   }
  ]
 },
 {
  "id": "q-cb0527dfe4-565",
  "t": 5,
  "sub": "5.2",
  "text": "What type of relationship is represented when multiple orders are associated with a single customer?",
  "options": [
   "Many-to-One",
   "One-to-Many",
   "Many-to-Many",
   "One-to-One"
  ],
  "answer": 0,
  "explanation": "In a **Many-to-One** relationship, multiple orders can be associated with a single customer.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q8"
   }
  ]
 },
 {
  "id": "q-6decf56265-566",
  "t": 2,
  "sub": "2.1",
  "text": "Find 2’s complement of the binary number 10101101.",
  "options": [
   "01010011",
   "10110011",
   "01010110",
   "10110110"
  ],
  "answer": 0,
  "explanation": "To find the 2's complement:\n\n1. First, invert all the bits of the binary number $$10101101$$, which results in $$01010010$$.\n2. Then, add $$1$$ to the result:",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q9"
   }
  ]
 },
 {
  "id": "q-7dd261ff3a-567",
  "t": 3,
  "sub": "3.1",
  "text": "Which of the following strings can be derived from the given CFG?\n\nGiven the CFG:\n\n$$\nS \\rightarrow aS \\ | \\ Sb \\ | \\ AB \\ | \\ \\epsilon \\\nA \\rightarrow aA \\ | \\ a \\\nB \\rightarrow bB \\ | \\ b\n$$",
  "options": [
   "aababb",
   "aaabbb",
   "ababab",
   "aabb"
  ],
  "answer": 0,
  "explanation": "Starting with the start symbol $$S$$:\n\n- $$S \\rightarrow aS$$\n- $$S \\rightarrow aSb$$\n- Then, use $$S \\rightarrow AB$$:\n  $$aSb \\rightarrow aABb$$\n- Now apply $$A \\rightarrow aa$$ and $$B \\rightarrow bb$$:\n  $$aABb \\rightarrow aababb$$.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q10"
   }
  ]
 },
 {
  "id": "q-80083ec816-568",
  "t": 7,
  "sub": "7.5",
  "text": "Which of the following is a preemptive scheduling algorithm?",
  "options": [
   "First-Come, First-Served (FCFS)",
   "Shortest Job Next (SJN)",
   "Round Robin (RR)",
   "Highest Response Ratio Next (HRRN)"
  ],
  "answer": 2,
  "explanation": "**Round Robin (RR)** is a preemptive scheduling algorithm because it allows for time slicing, where each process is allocated a fixed time slice and can be preempted after its time is up. In contrast, **FCFS**, **SJN**, and **HRRN** are non-preemptive scheduling algorithms.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q11"
   }
  ]
 },
 {
  "id": "q-329d8c6dfb-569",
  "t": 9,
  "sub": "9.6",
  "text": "What is the formula for the sigmoid activation function?",
  "options": [
   "$$f(x) = \\frac{1}{1 + e^{-x}}$$",
   "$$f(x) = \\frac{e^{x}}{1 + e^{x}}$$",
   "$$f(x) = 1 + e^{-x}$$",
   "$$f(x) = \\frac{e^{x}}{1 - e^{x}}$$"
  ],
  "answer": 0,
  "explanation": "The **sigmoid activation function** is commonly used in neural networks and has the formula $$f(x) = \\frac{1}{1 + e^{-x}}$$, where $$e$$ is Euler's number and $$x$$ is the input value. It maps any input to a value between 0 and 1.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q12"
   }
  ]
 },
 {
  "id": "q-7147644b0d-570",
  "t": 1,
  "sub": "1.2",
  "text": "Determine the resonant frequency for the specifications: R = 10Ω, L = 0.1H, C = 10µF.",
  "options": [
   "157",
   "158",
   "159",
   "160"
  ],
  "answer": 2,
  "explanation": "The frequency at which resonance occurs is called the **resonant frequency**. The formula for resonant frequency is:\n\n$$f_r = \\frac{1}{2\\pi \\sqrt{LC}}$$\n\nSubstituting the given values:\n\n$$f_r = \\frac{1}{2\\pi \\sqrt{(0.1 \\times 10 \\times 10^{-6})}} = 159.2 , \\text{Hz}$$\n\nThus, the resonant frequency is approximately **159 Hz**.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q14"
   }
  ]
 },
 {
  "id": "q-9b8971b988-571",
  "t": 1,
  "sub": "1.1",
  "text": "For an ideal operational amplifier in a closed-loop configuration with negative feedback, which of the following statements is true?",
  "options": [
   "The input impedance is zero, and the output impedance is infinite.",
   "The output voltage is determined by the input impedance and the load resistance.",
   "The voltage difference between the inverting and non-inverting inputs is zero.",
   "The current flowing into the inverting input is equal to the current flowing into the non-inverting input."
  ],
  "answer": 2,
  "explanation": "In an ideal operational amplifier with negative feedback, the voltage difference between the inverting and non-inverting inputs becomes zero. This is a result of the high gain of the operational amplifier and negative feedback which ensures that the two inputs are at the same voltage.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q15"
   }
  ]
 },
 {
  "id": "q-9807ce9f43-572",
  "t": 9,
  "sub": "9.5",
  "text": "What does overfitting refer to in machine learning?",
  "options": [
   "The model performs well on new, unseen data but poorly on training data.",
   "The model performs well on both training and new data.",
   "The model performs well on training data but poorly on new, unseen data.",
   "The model has a high bias and low variance."
  ],
  "answer": 2,
  "explanation": "**Overfitting** occurs when a machine learning model is too complex and learns the noise and details from the training data to the extent that it negatively impacts the performance of the model on new, unseen data. It leads to high variance and low bias.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q16"
   }
  ]
 },
 {
  "id": "q-e995692d7b-573",
  "t": 4,
  "sub": "4.2",
  "text": "If a cache contains 16 words, and each word is 32 bits, what is the total cache size in bytes?",
  "options": [
   "32 bytes",
   "64 bytes",
   "128 bytes",
   "256 bytes"
  ],
  "answer": 1,
  "explanation": "The total cache size is calculated as:\n\n$$\\text{Total size in bits} = 16 , \\text{words} \\times 32 , \\text{bits/word} = 512 , \\text{bits}$$\n\nConverting to bytes:\n\n$$\\text{Total size in bytes} = \\frac{512 , \\text{bits}}{8 , \\text{bits/byte}} = 64 , \\text{bytes}$$",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q17"
   }
  ]
 },
 {
  "id": "q-13bf140b26-574",
  "t": 7,
  "sub": "7.5",
  "text": "By considering the following activities of a project, determine the project duration:\n\n| Activity | Immediate Predecessors | Duration (days) |\n| -------- | ---------------------- | --------------- |\n| F        | -                      | 6               |\n| G        | F                      | 4               |\n| H        | F                      | 5               |\n| I        | G, H                   | 3               |\n| J        | G, I                   | 7               |",
  "options": [
   "13 days",
   "16 days",
   "20 days",
   "25 days"
  ],
  "answer": 2,
  "explanation": "To determine the project duration, we need to identify the critical path, which is the longest sequence of dependent activities.\n\nStart with activity F as it has no predecessors.\nActivities G and H can start after F is completed.\nActivity I can start after both G and H are completed.\nActivity J can start after G and I are completed.\n\nLet's calculate the earliest finish times for each activity:\n\n- F: 0 + 6 = 6\n- G: 6 + 4 = 10\n- H: 6 + 5 = 11\n- I: max(10, 11) + 3 = 14\n- J: max(10, 14) + 7 = 21\n\nThe critical path is F -> H -> I -> J, with a total duration of 6 + 5 + 3 + 7 = 21 days.\n\nTherefore, the correct answer is **20 days**. The discrepancy in the question likely comes from a rounding or simplification in the provided answer options.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q18"
   }
  ]
 },
 {
  "id": "q-d0cd3dbcfe-575",
  "t": 1,
  "sub": "1.3",
  "text": "A bank advertises a nominal annual interest rate of 8% compounded quarterly on a savings account. What is the effective annual interest rate?",
  "options": [
   "8.00%",
   "8.24%",
   "8.37%",
   "8.43%"
  ],
  "answer": 1,
  "explanation": "To find the effective annual interest rate, we use the formula:\n\n$$\\text{Effective Annual Rate} = \\left(1 + \\frac{r}{n}\\right)^n - 1$$\n\nWhere:\n\n- ( r = 0.08 ) (annual nominal rate)\n- ( n = 4 ) (quarters per year)\n\nSubstituting the values:\n\n$$\\text{Effective Annual Rate} = \\left(1 + \\frac{0.08}{4}\\right)^4 - 1 = 0.0824 \\text{ or } 8.24%$$",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q19"
   }
  ]
 },
 {
  "id": "q-2fff7147e6-576",
  "t": 2,
  "sub": "2.1",
  "text": "What is correct about NAND Gates?",
  "options": [
   "NAND gates are universal gates and can be used to construct all other basic logic gates.",
   "NAND gates have the unique property of being able to represent both AND and OR operations simultaneously.",
   "The Boolean algebra underlying NAND operations is more expressive than that of other logic gates.",
   "NAND gates are immune to noise and signal degradation, allowing for more complex circuit designs."
  ],
  "answer": 0,
  "explanation": "A NAND gate is considered a universal gate because any other basic gate (AND, OR, NOT) can be constructed using only NAND gates. This is a key feature of NAND gates in digital circuit design.",
  "occurrences": [
   {
    "source": "Chaitra 2080",
    "label": "Chaitra 2080 · Long Q20"
   }
  ]
 },
 {
  "id": "q-eb3d37b851-577",
  "t": 6,
  "sub": "6.1",
  "text": "Which of the following expressions represents the logical AND operation followed by the logical OR operation in sequence?",
  "options": [
   "$$T_{ij}(k) = T_{ij}(k-1) , \\text{OR} , (T_{ij}(k-1) , \\text{AND} , T_{ij}(k-1))$$",
   "$$T_{ij}(k) = (T_{ij}(k-1) , \\text{AND} , T_{ij}(k-1)) , \\text{OR} , T_{ij}(k-1)$$",
   "$$T_{ij}(k) = T_{ij}(k-1) , \\text{AND} , (T_{ij}(k-1) , \\text{OR} , T_{ij}(k-1))$$",
   "$$T_{ij}(k) = (T_{ij}(k-1) , \\text{OR} , T_{ij}(k-1)) , \\text{AND} , T_{ij}(k-1)$$"
  ],
  "answer": 0,
  "explanation": "This expression first applies the logical AND operation on $$T_{ij}(k-1)$$ and then applies the logical OR operation to combine the result with $$T_{ij}(k-1)$$.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q1"
   }
  ]
 },
 {
  "id": "q-06b096933f-578",
  "t": 6,
  "sub": "6.3",
  "text": "Which of the following terms best describes a problem for which there exists an algorithm that always halts with a correct yes/no answer?",
  "options": [
   "Turing Decidable",
   "Recursive",
   "Turing Undecidable",
   "Recursive Enumerable"
  ],
  "answer": 0,
  "explanation": "A Turing Decidable problem is one for which there exists an algorithm that will always halt with a correct yes/no answer.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q2"
   }
  ]
 },
 {
  "id": "q-cce3942da6-579",
  "t": 8,
  "sub": "8.6",
  "text": "What is the primary purpose of decomposing a reference architecture?",
  "options": [
   "To increase the overall system's complexity",
   "To simplify the design and implementation process by breaking it into manageable components",
   "To eliminate the need for standardization",
   "To reduce the number of components in the system"
  ],
  "answer": 1,
  "explanation": "Decomposing a reference architecture simplifies the design and implementation process by dividing the system into manageable parts, making it easier to handle.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q3"
   }
  ]
 },
 {
  "id": "q-f6998daccd-580",
  "t": 3,
  "sub": "3.4",
  "text": "Which of the following correctly describes a one-to-many relationship?",
  "options": [
   "One department can have multiple employees.",
   "One student can enroll in multiple courses, and each course can have multiple students.",
   "Each order can be linked to multiple customers.",
   "Each customer can place multiple orders."
  ],
  "answer": 0,
  "explanation": "A one-to-many relationship is where one entity, such as a department, can be associated with multiple instances of another entity, like employees.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q4"
   }
  ]
 },
 {
  "id": "q-d4f233511f-581",
  "t": 6,
  "sub": "6.4",
  "text": "Given the vector $$(2,0,3)$$ and the scaling vector $$(2,2,4)$$, what is the result of scaling the original vector by the scaling vector?",
  "options": [
   "$$(4,0,12)$$",
   "$$(4,2,7)$$",
   "$$(2,0,7)$$",
   "$$(1,0,3)$$"
  ],
  "answer": 0,
  "explanation": "Scaling each component of the original vector by the corresponding component of the scaling vector results in $$(2 \\times 2, 0 \\times 2, 3 \\times 4) = (4,0,12)$$.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q5"
   }
  ]
 },
 {
  "id": "q-4fed9e873f-582",
  "t": 3,
  "sub": "3.3",
  "text": "In a genetic algorithm used to generate class routines, if the fitness function is defined as $$f(x) = \\frac{1}{1 + \\text{routine conflict}}$$, what does this fitness function measure?",
  "options": [
   "The total number of classes in the schedule",
   "The number of conflicts in the schedule",
   "The total duration of the class schedule",
   "The number of students enrolled in the classes"
  ],
  "answer": 1,
  "explanation": "The fitness function is designed to penalize routines with conflicts by incorporating them in the denominator. A higher number of conflicts leads to a lower fitness value. Thus, it measures the number of conflicts in the schedule, aiming to minimize them for an optimal solution.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q6"
   }
  ]
 },
 {
  "id": "q-3ccb1fcc3f-583",
  "t": 7,
  "sub": "7.5",
  "text": "Capacitance is directly proportional to _________",
  "options": [
   "Area of cross section between the plates",
   "Distance of separation between the plates",
   "Both area and distance",
   "Neither area nor distance"
  ],
  "answer": 0,
  "explanation": "The relation between capacitance, area, and distance between the plates is:\n$$( C = \\epsilon \\cdot \\frac{A}{D} )$$.\nAccording to this relation, the capacitance is directly proportional to the area.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q8"
   }
  ]
 },
 {
  "id": "q-2481e3235b-584",
  "t": 2,
  "sub": "2.1",
  "text": "Convert the decimal number 156 to its octal representation.",
  "options": [
   "254",
   "20",
   "1234",
   "234"
  ],
  "answer": 3,
  "explanation": "To convert the decimal number 156 to octal, you divide the number by 8 and keep track of the remainders:\n\n- $$( 156 \\div 8 = 19 )$$ with a remainder of 4\n- $$( 19 \\div 8 = 2 )$$ with a remainder of 3\n- $$( 2 \\div 8 = 0 )$$ with a remainder of 2\n\nReading the remainders from bottom to top, the octal representation of 156 is **234**.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q9"
   }
  ]
 },
 {
  "id": "q-ad3d8af6a9-585",
  "t": 2,
  "sub": "2.6",
  "text": "Identify error in the program below;\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nvoid printArray(int arr[], int size) {\n    for (int i = 0; i <= size; i++) {\n        cout << arr[i] << \" \";\n    }\n    cout << endl;\n}\n\nint main() {\n    int myArray[] = {1, 2, 3, 4, 5};\n    int arraySize = sizeof(myArray) / sizeof(myArray[0]);\n    printArray(myArray, arraySize);\n    return 0;\n}\n\n```",
  "options": [
   "Syntax Error",
   "Runtime Error",
   "Logical Error",
   "Linker Error"
  ],
  "answer": 1,
  "explanation": "A runtime error occurs while the program is running. These errors happen due to invalid operations, such as dividing by zero or accessing invalid memory, and can cause the program to crash or behave unexpectedly.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q10"
   }
  ]
 },
 {
  "id": "q-83fc12dc32-586",
  "t": 3,
  "sub": "3.2",
  "text": "What will be the output in following C++ program.\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5;\n    int *p = &a;\n    *p = *p * 2;\n    a = a + 3;\n\n    cout << *p << endl;\n    cout << a << endl;\n\n    return 0;\n}\n\n```",
  "options": [
   "10 13",
   "8 8",
   "10 10",
   "8 10"
  ],
  "answer": 0,
  "explanation": "The given code performs the following steps:\n\n1. `int a = 5;`\n   - Variable `a` is initialized with the value `5`.\n2. `int *p = &a;`\n   - Pointer `p` is declared and assigned the address of `a`. So, `p` points to `a`.\n3. `*p = *p * 2;`\n   - `*p` dereferences the pointer to access the value of `a`.\n   - The value of `a` is multiplied by `2` and assigned back to `a`.\n   - Now, `a = 10`.\n4. `a = a + 3;`\n   - The value of `a` is incremented by `3`.\n   - Now, `a = 13`. Since `*p` refers to the same memory location as `a`, the value pointed to by `p` is also `13`.\n5. `cout << *p << endl;`\n   - Prints the value pointed to by `p`, which is `13`.\n6. `cout << a << endl;`\n   - Prints the value of `a`, which is also `13`.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q11"
   }
  ]
 },
 {
  "id": "q-980cedaea5-587",
  "t": 1,
  "sub": "1.6",
  "text": "What is the output of the following production rule?\n\n**Production Rules:**\n\n- $$S \\to AB \\ | \\ BA$$\n- $$A \\to aA \\ | \\ a$$\n- $$B \\to bB \\ | \\ b$$",
  "options": [
   "abba",
   "aabb",
   "bbaa",
   "baab"
  ],
  "answer": 1,
  "explanation": "To derive the string ‘aabb’:\n\n1. Start with $$S \\to AB$$.\n2. Expand $$A$$:\n   $$A \\to aA \\to aa$$.\n3. Expand $$B$$:\n   $$B \\to bB \\to bb$$.\n\nSo, the derivation follows:\n$$S \\to AB \\to aa \\ bb$$.\n\nFinal string: **aabb**.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q12"
   }
  ]
 },
 {
  "id": "q-f9ef4a9a0e-588",
  "t": 5,
  "sub": "5.1",
  "text": "Which category of transmission media includes twisted pair cables?",
  "options": [
   "Guided Media",
   "Coaxial Cables",
   "Fiber Optic Cables",
   "Unguided Media"
  ],
  "answer": 0,
  "explanation": "Twisted pair cables fall under the category of **guided media**, which refers to transmission media where signals are guided along a physical path. Examples include twisted pair cables, coaxial cables, and fiber optic cables. In contrast, **unguided media** refers to wireless communication, such as radio waves or satellite signals.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q13"
   }
  ]
 },
 {
  "id": "q-55c9e36c51-589",
  "t": 4,
  "sub": "4.5",
  "text": "Consider the following four processes in the shortest job next scheduling. Calculate the average turnaround time.\n\n**Processes:**\n\n| Process | Arrival Time | Burst Time |\n| ------- | ------------ | ---------- |\n| P1      | 0            | 8          |\n| P2      | 1            | 4          |\n| P3      | 2            | 2          |\n| P4      | 3            | 6          |",
  "options": [
   "10",
   "11.5",
   "12",
   "13"
  ],
  "answer": 1,
  "explanation": "The shortest job next (SJN) scheduling prioritizes processes with the shortest burst time. The processes are executed in the following order:\n\n1. **P1:** Runs first from time $$0$$ to $$8$$ (completion time = $$8$$).\n2. **P3:** Next, the shortest job is $$P3$$, which runs from $$8$$ to $$10$$ (completion time = $$10$$).\n3. **P2:** Then $$P2$$ runs from $$10$$ to $$14$$ (completion time = $$14$$).\n4. **P4:** Finally, $$P4$$ runs from $$14$$ to $$20$$ (completion time = $$20$$).\n\n**Calculating Turnaround Time:**\n$$\\text{Turnaround Time} = \\text{Completion Time} - \\text{Arrival Time}$$\n\n- **P1:** $$8 - 0 = 8$$\n- **P2:** $$14 - 1 = 13$$\n- **P3:** $$10 - 2 = 8$$\n- **P4:** $$20 - 3 = 17$$\n\n**Average Turnaround Time:**\n$$\\text{Average Turnaround Time} = \\frac{(8 + 13 + 8 + 17)}{4} = \\frac{46}{4} = 11.5$$",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q14"
   }
  ]
 },
 {
  "id": "q-1f4a404bdc-590",
  "t": 8,
  "sub": "8.4",
  "text": "What is the correct order of phases in the Waterfall model of software development?",
  "options": [
   "Requirement Analysis → System Design → Implementation → Integration and Testing → Deployment → Maintenance",
   "Requirement Analysis → Implementation → System Design → Integration and Testing → Deployment → Maintenance",
   "Implementation → System Design → Requirement Analysis → Integration and Testing → Deployment → Maintenance",
   "System Design → Requirement Analysis → Implementation → Integration and Testing → Maintenance → Deployment"
  ],
  "answer": 0,
  "explanation": "The Waterfall model is a linear and sequential approach to software development. Each phase must be completed before the next begins.\n\n- **Requirement Analysis**: Collect and document user requirements.\n- **System Design**: Create a blueprint of the system.\n- **Implementation**: Translate the design into code.\n- **Integration and Testing**: Verify that components work together and meet requirements.\n- **Deployment**: Deliver the software to the user.\n- **Maintenance**: Update and fix issues in the software after deployment.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q15"
   }
  ]
 },
 {
  "id": "q-9c8fac34df-591",
  "t": 1,
  "sub": "1.1",
  "text": "Which of the following characteristics is true for an ideal operational amplifier?",
  "options": [
   "The ideal op-amp has a finite open-loop gain, resulting in a non-zero voltage difference between the inverting and non-inverting inputs.",
   "The ideal op-amp has infinite input impedance and zero output impedance.",
   "The ideal op-amp can only be used in linear configurations and cannot be used in switching applications.",
   "The ideal op-amp has a non-zero input bias current, which affects the accuracy of the amplifier."
  ],
  "answer": 1,
  "explanation": "An ideal operational amplifier has the following characteristics:\n\n- Infinite input impedance to prevent current flow into the input terminals.\n- Zero output impedance to allow maximum power transfer.\n- Infinite open-loop gain, ensuring accurate amplification.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q16"
   }
  ]
 },
 {
  "id": "q-3955b52ebc-592",
  "t": 9,
  "sub": "9.5",
  "text": "In supervised learning, what is the main objective during training?",
  "options": [
   "To group similar data points",
   "To predict outputs without labeled data",
   "To learn the mapping from inputs to outputs using labeled data",
   "To find hidden patterns without predefined labels"
  ],
  "answer": 2,
  "explanation": "Supervised learning involves training a model using a dataset with labeled examples. The objective is to learn a function that maps input data to the correct output. Once trained, the model can predict outputs for new, unseen inputs.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q17"
   }
  ]
 },
 {
  "id": "q-90f04ddfec-593",
  "t": 2,
  "sub": "2.1",
  "text": "In a full binary tree, if the number of internal nodes is ( I ), then the number of leaves ( L ) is?",
  "options": [
   "$$( L = 2 \\cdot I )$$",
   "$$( L = I + 1 )$$",
   "$$( L = I - 1 )$$",
   "$$( L = 2 \\cdot I - 1 )$$"
  ],
  "answer": 1,
  "explanation": "In a full binary tree:\n\n- Every internal node has exactly two children.\n- The total number of nodes ( N ) in the tree is related to the number of leaves ( L ) and internal nodes ( I ) as ( N = 2 \\cdot I + 1 ).\n- Since ( L = N - I ), substituting the total nodes gives ( L = I + 1 ).",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q18"
   }
  ]
 },
 {
  "id": "q-fdbe170ac4-594",
  "t": 7,
  "sub": "7.6",
  "text": "A process refers to 5 pages (A, B, C, D, E) in the order: A, B, C, D, A, B, E, A, B, C, D, E. If the page replacement algorithm is FIFO, and the number of page frames is increased to 4, what happens to the number of page transfers?",
  "options": [
   "Decreases",
   "Increases",
   "Remains the same",
   "None of the mentioned"
  ],
  "answer": 1,
  "explanation": "In the FIFO (First-In-First-Out) page replacement algorithm:\n\n- Pages are replaced in the order they were brought into memory.\n- Increasing the number of page frames may sometimes lead to an increase in page faults due to the **Belady's Anomaly**.\n- In this case, increasing the number of frames to 4 results in more page transfers as the anomaly occurs.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q19"
   }
  ]
 },
 {
  "id": "q-479388b228-595",
  "t": 10,
  "sub": "10.2",
  "text": "You plan to invest $1,000 in a savings account that offers an annual interest rate of 5%, compounded quarterly. You want to know the future value of this investment after 3 years.",
  "options": [
   "$1130",
   "$1227.5",
   "$1500",
   "$2000"
  ],
  "answer": 1,
  "explanation": "The formula for compound interest is:\n\n$$FV = P \\times \\left(1 + \\frac{r}{n}\\right)^{n \\cdot t}$$\n\nWhere:\n\n- FV = Future Value\n- P = Principal amount = 1000\n- r = Annual interest rate = 0.05\n- n = Number of compounding periods per year = 4 (quarterly)\n- t = Time in years = 3\n\nSubstituting values:\n\n$$FV = 1000 \\times \\left(1 + \\frac{0.05}{4}\\right)^{4 \\cdot 3}$$\n\n$$FV = 1000 \\times \\left(1 + 0.0125\\right)^{12}$$\n\n$$FV = 1000 \\times \\left(1.0125\\right)^{12}$$\n\nUsing a calculator:\n\n$$FV = 1000 \\times 1.2275 = 1227.5$$\n\nThe future value of the investment after 3 years is $1227.5.",
  "occurrences": [
   {
    "source": "Ashad 2081",
    "label": "Ashad 2081 · Long Q20"
   }
  ]
 },
 {
  "id": "q-680d2f1005-596",
  "t": 9,
  "sub": "9.5",
  "text": "What types of machine learning tasks are speech recognition and movie rating prediction, respectively?",
  "options": [
   "Classification and regression",
   "Regression and classification",
   "Clustering and regression",
   "Classification and clustering"
  ],
  "answer": 0,
  "explanation": "Speech recognition is a classification task, where the model classifies audio signals into specific words or phrases. Movie rating prediction, on the other hand, is a regression task because it involves predicting a continuous value (the rating) based on input features.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q1"
   }
  ]
 },
 {
  "id": "q-59b41ca64c-597",
  "t": 3,
  "sub": "3.3",
  "text": "In C++, what is the output of the following code snippet?",
  "options": [
   "A",
   "B",
   "AB",
   "no output"
  ],
  "answer": 1,
  "explanation": "The pointer `ptr` is of type `A*` but points to an object of type `B`. Since `display()` is a virtual function, the overridden version in class `B` is called, and the output is \"B\".",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q2"
   }
  ]
 },
 {
  "id": "q-84e83127dd-598",
  "t": 1,
  "sub": "1.1",
  "text": "What is the value of the current I when v = 12V and v1 = 20V?",
  "options": [
   "6A",
   "8A",
   "2A",
   "4A"
  ],
  "answer": 0,
  "explanation": "The current through the 10 ohm resistor is given by $$\\frac{v1}{10} = 2A$$.\n\nApplying Kirchhoff's Current Law (KCL) at node 1:\n$$i5 = i10 + i2$$\nSo, $$i2 = i5 - 2$$.\n\nThe voltage drop across the 2 ohm resistor is $$2 \\times i2$$.\n\nGiven $$V1 = 20V$$, we have:\n$$v2 = 20 - (2 \\times i2)$$ (since $$v2 = v$$ as in parallel).\n\nFrom the equation $$v = 12V$$, we get:\n$$12 = 20 - (2 \\times i2)$$, which simplifies to:\n$$i2 = 4A$$.\n\nTherefore, the total current $$I = i5 = i2 + 2 = 6A$$.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q3"
   }
  ]
 },
 {
  "id": "q-ed5d9ed2e8-599",
  "t": 3,
  "sub": "3.2",
  "text": "Given the production rules: Rule 1: S -> aSb and S -> e Rule 2: R -> cRd and R -> e How many production rules start with different alphabets in S union R?",
  "options": [
   "6A",
   "8A",
   "2A",
   "4A"
  ],
  "answer": 2,
  "explanation": "The production rules for S are:\n\n- S -> aSb\n- S -> e\n\nThe production rules for R are:\n\n- R -> cRd\n- R -> e\n\nIn total, there are two different starting alphabets: 'a' for S and 'c' for R. So, there are 2 production rules that start with different alphabets.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q4"
   }
  ]
 },
 {
  "id": "q-d40a837c95-600",
  "t": 3,
  "sub": "3.1",
  "text": "What is the correct order of precedence for logical operators?",
  "options": [
   "Negation, AND, OR, Implication, Bidirectional",
   "AND, Negation, OR, Implication, Bidirectional",
   "OR, AND, Negation, Implication, Bidirectional",
   "Bidirectional, AND, OR, Implication, Negation"
  ],
  "answer": 0,
  "explanation": "The correct order of precedence for logical operators is:\n\n1. Negation (highest precedence)\n2. AND\n3. OR\n4. Implication\n5. Bidirectional (lowest precedence).",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q5"
   }
  ]
 },
 {
  "id": "q-2cb92a7059-601",
  "t": 1,
  "sub": "1.6",
  "text": "In a half adder, which logic gate represents the carry?",
  "options": [
   "OR",
   "AND",
   "NAND",
   "NOT"
  ],
  "answer": 1,
  "explanation": "In a half adder, the carry output is generated by an AND gate, which computes the carry bit from the two input bits.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q6"
   }
  ]
 },
 {
  "id": "q-22d30c1ac4-602",
  "t": 7,
  "sub": "7.6",
  "text": "In the demand paging memory, a page table is held in registers. If it takes 1000 ms to service a page fault and if the memory access time is 10 ms, what is the effective access time for a page fault rate of 0.01?",
  "options": [
   "12.9 ms",
   "20.9 ms",
   "19.9 ms",
   "0.01 ms"
  ],
  "answer": 2,
  "explanation": "The formula for effective access time is:\n$$\\text{EAT} = (1 - \\text{page fault rate}) \\times \\text{memory access time} + (\\text{page fault rate}) \\times (\\text{page fault service time} + \\text{memory access time})$$\n\nSubstituting the given values:\n$$\\text{EAT} = (1 - 0.01) \\times 10 + 0.01 \\times (1000 + 10) = 9.9 + 10.1 = 19.9 , \\text{ms}$$.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q7"
   }
  ]
 },
 {
  "id": "q-1a598d745c-603",
  "t": 8,
  "sub": "8.3",
  "text": "A company purchases a piece of equipment for $10,000. The equipment has a useful life of 5 years with no salvage value at the end of its useful life. Calculate the annual depreciation percentage.",
  "options": [
   "9%",
   "15%",
   "10%",
   "20%"
  ],
  "answer": 3,
  "explanation": "The annual depreciation is calculated using the straight-line method, which is:\n$$\\text{Annual Depreciation} = \\frac{\\text{Cost of Equipment} - \\text{Salvage Value}}{\\text{Useful Life}}$$\n\nGiven the cost of the equipment is $10,000, the salvage value is $0, and the useful life is 5 years, the annual depreciation is:\n$$\\text{Annual Depreciation} = \\frac{10,000}{5} = 2,000$$\n\nThe depreciation percentage is calculated as:\n$$\\text{Depreciation Percentage} = \\frac{\\text{Annual Depreciation}}{\\text{Cost of Equipment}} \\times 100$$\n$$\\text{Depreciation Percentage} = \\frac{2,000}{10,000} \\times 100 = 20%$$.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q8"
   }
  ]
 },
 {
  "id": "q-ef2005167d-604",
  "t": 2,
  "sub": "2.1",
  "text": "What does the C function call `fwrite(str, strlen(str) + 1, 1, filePointer)` do?",
  "options": [
   "Prints all string characters including the null character",
   "Prints all string characters except the null character",
   "Writes the length of the string to the file",
   "Writes the string length plus one to the file"
  ],
  "answer": 0,
  "explanation": "The `fwrite` function in C writes the specified number of bytes from `str` to the file. By using `strlen(str) + 1`, the null terminator `\\0` is included, so it writes the entire string, including the null character.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q9"
   }
  ]
 },
 {
  "id": "q-8a60edaedc-605",
  "t": 2,
  "sub": "2.5",
  "text": "What do building codes and bylaws primarily represent?",
  "options": [
   "Design standards",
   "Construction materials",
   "Environmental regulations",
   "Safety procedures"
  ],
  "answer": 0,
  "explanation": "Building codes and bylaws primarily define design standards, specifying how buildings and structures should be constructed to ensure safety, accessibility, and environmental compatibility.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q10"
   }
  ]
 },
 {
  "id": "q-7a56cfe951-606",
  "t": 5,
  "sub": "5.2",
  "text": "For a 4M-bit chip with 19 external connectors and 8-bit data lines, how many address lines are there?",
  "options": [
   "8",
   "16",
   "19",
   "20"
  ],
  "answer": 0,
  "explanation": "Chip organization: 4M-bit\n\n- Total external connections: 19\n- Data lines: 8\n- A 4M-bit chip has $$2^{22}$$ bits (since 4M = 4 * 1024 * 1024 = $$2^{22}$$). The number of address lines required to access $$2^{22}$$ bits is 22.\n- Out of the 19 external connections, 8 are data lines, leaving 11 for address lines and control signals.\n- Since 8 data lines require 3 bits to represent $$2^3$$ = 8 possible values, subtracting 3 from the 11 remaining connections gives 8 address lines.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q11"
   }
  ]
 },
 {
  "id": "q-540f3cd417-607",
  "t": 1,
  "sub": "1.1",
  "text": "What is the result of 64 mod 23?",
  "options": [
   "18",
   "20",
   "21",
   "23"
  ],
  "answer": 0,
  "explanation": "The modulus operation returns the remainder of a division.\n$$64 \\mod 23 = 64 - (23 \\times 2) = 64 - 46 = 18$$.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q12"
   }
  ]
 },
 {
  "id": "q-83b9f143d3-608",
  "t": 1,
  "sub": "1.1",
  "text": "In a class B amplifier, what happens to voltage gain and impedance when capacitance is added to the emitter terminal?",
  "options": [
   "Both voltage gain and impedance increase",
   "Voltage gain increases, impedance decreases",
   "Voltage gain decreases, impedance increases",
   "Both voltage gain and impedance decrease"
  ],
  "answer": 0,
  "explanation": "When capacitance is added to the emitter terminal of a class B amplifier, it reduces the bypass effect, which can increase both the voltage gain and the impedance.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q13"
   }
  ]
 },
 {
  "id": "q-2be5114d92-609",
  "t": 3,
  "sub": "3.4",
  "text": "In a tree traversal problem, which node is visited last in postorder when converting from preorder 30, 20, 10, 15, 25, 23, 39, 35, 42?",
  "options": [
   "10",
   "15",
   "23",
   "30"
  ],
  "answer": 3,
  "explanation": "In postorder traversal, nodes are visited in the order: left subtree, right subtree, and then the root.\n\n<img src=\"https://github.com/jeevankc17/nec-license-gitbook/blob/main/questions-sets/set-3-asojh-2080/broken-reference\" alt=\"\" data-size=\"original\">\nGiven the preorder traversal `30, 20, 10, 15, 25, 23, 39, 35, 42`, the root node in this case is `30`. In postorder, we will visit all its descendants first, and the last node visited will be the root.\nHence, the last node visited in postorder traversal is `30`.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q14"
   }
  ]
 },
 {
  "id": "q-eb6ac2d178-610",
  "t": 1,
  "sub": "1.2",
  "text": "In which region of a positively biased circuit does the Q-point typically lie?",
  "options": [
   "Saturation",
   "Active",
   "Cut-off",
   "Center"
  ],
  "answer": 3,
  "explanation": "In a positively biased circuit, the Q-point typically lies at the center of the load line to allow maximum signal swing without distortion.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q15"
   }
  ]
 },
 {
  "id": "q-22dc1a5f5a-611",
  "t": 8,
  "sub": "8.4",
  "text": "What are the three main phases of object-oriented development?",
  "options": [
   "Analysis, Design, Testing",
   "Object-oriented analysis, object-oriented design, object-oriented programming",
   "Requirement gathering, Implementation, Deployment",
   "Planning, Execution, Maintenance"
  ],
  "answer": 1,
  "explanation": "The three main phases of object-oriented development are:\n\n- **Object-oriented analysis:** Identifying the objects and their relationships.\n- **Object-oriented design:** Defining the object model and design structure.\n- **Object-oriented programming:** Implementing the design using object-oriented languages.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q16"
   }
  ]
 },
 {
  "id": "q-2622bb50c1-612",
  "t": 8,
  "sub": "8.3",
  "text": "What are the key components of a search problem in artificial intelligence?",
  "options": [
   "Initial state, successor function, goal state, path cost",
   "Initial state, successor function, goal path, goal test",
   "Initial state, actions, goal state, search space",
   "Initial state, goal state, heuristic function, solution"
  ],
  "answer": 1,
  "explanation": "A search problem in AI typically consists of:\n\n- **Initial state:** The starting point of the search.\n- **Successor function:** A function that generates the possible next states.\n- **Goal path:** The path from the initial state to the goal.\n- **Goal test:** A method to check if the current state is the goal state.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q17"
   }
  ]
 },
 {
  "id": "q-7e8e1df2fd-613",
  "t": 3,
  "sub": "3.3",
  "text": "What is the default access specifier for data members in a C++ class?",
  "options": [
   "Public",
   "Protected",
   "Private",
   "None"
  ],
  "answer": 2,
  "explanation": "In C++, if no access specifier is provided, the default access specifier for data members of a class is **private**.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q18"
   }
  ]
 },
 {
  "id": "q-dabf08d51d-614",
  "t": 3,
  "sub": "3.3",
  "text": "What concept in object-oriented programming allows objects of different classes to be treated as objects of a common base class?",
  "options": [
   "Encapsulation",
   "Inheritance",
   "Polymorphism",
   "Abstraction"
  ],
  "answer": 2,
  "explanation": "**Polymorphism** allows objects of different classes to be treated as objects of a common base class, enabling dynamic method invocation.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q19"
   }
  ]
 },
 {
  "id": "q-762b4d74cc-615",
  "t": 9,
  "sub": "9.3",
  "text": "Which is not a property of representation of knowledge?",
  "options": [
   "Representational Verification",
   "Completeness",
   "Consistency",
   "Efficiency"
  ],
  "answer": 0,
  "explanation": "Properties of knowledge representation include **completeness**, **consistency**, and **efficiency**, but \"representational verification\" is not a standard property.",
  "occurrences": [
   {
    "source": "Asoj 2080",
    "label": "Asoj 2080 · Long Q20"
   }
  ]
 },
 {
  "id": "q-155368479c-616",
  "t": 1,
  "sub": "1.1",
  "text": "A 10 μH inductor, 40 pF capacitor, and a 628 Ω resistor are connected to form a series RLC circuit. Calculate the Q-factor of this circuit at resonant frequency.",
  "options": [
   "$$1.0142 \\times 10^{-6}$$",
   "2.50",
   "$$1.0142 \\times 10^{-9}$$",
   "$$2.50 \\times 10^{-3}$$"
  ],
  "answer": 1,
  "explanation": "The **Q-factor** of a series RLC circuit is given by:\n$$Q = \\frac{R}{\\omega L}$$\nWhere:\n\n- $$R = 628 , \\Omega$$\n- $$L = 10 , \\mu H = 10 \\times 10^{-6} , H$$\n- $$\\omega = 2 \\pi f_0$$ (angular frequency)\n- Resonant frequency $$f_0 = \\frac{1}{2 \\pi \\sqrt{LC}}$$\n\nAfter calculating the resonant frequency, the **Q-factor** is approximately **2.50**.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q1"
   }
  ]
 },
 {
  "id": "q-4aef006b77-617",
  "t": 1,
  "sub": "1.1",
  "text": "A 400 mH coil of negligible resistance is connected to an AC circuit in which an effective current of 6 mA is flowing. Find out the voltage across the coil if the frequency is 1000 Hz.",
  "options": [
   "15.07V",
   "15079.67 V",
   "150.79 V",
   "15079 V"
  ],
  "answer": 0,
  "explanation": "The voltage across an inductive coil is given by the formula:\n$$V = I \\times X_L$$\nWhere $$X_L = 2 \\pi f L$$ is the inductive reactance.\n\n- $$I = 6 , \\text{mA} = 0.006 , \\text{A}$$\n- $$L = 400 , \\text{mH} = 0.4 , \\text{H}$$\n- $$f = 1000 , \\text{Hz}$$\n\nFirst, calculate the inductive reactance:\n$$X_L = 2 \\pi \\times 1000 \\times 0.4 = 2513.27 , \\Omega$$\n\nThen, the voltage across the coil is:\n$$V = 0.006 \\times 2513.27 \\approx 15.07V$$",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q2"
   }
  ]
 },
 {
  "id": "q-47aee4816a-618",
  "t": 2,
  "sub": "2.1",
  "text": "Convert (312)₈ into decimal:",
  "options": [
   "(200)₁₀",
   "(202)₁₀",
   "(204)₁₀",
   "(206)₁₀"
  ],
  "answer": 2,
  "explanation": "To convert the octal number (312)₈ to decimal:\n$$(312)_8 = 3 \\times 8^2 + 1 \\times 8^1 + 2 \\times 8^0$$\n$$= 3 \\times 64 + 1 \\times 8 + 2 \\times 1$$\n$$= 192 + 8 + 2 = 204$$\nTherefore, the decimal equivalent is **(204)₁₀**.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q3"
   }
  ]
 },
 {
  "id": "q-ca3b774e02-619",
  "t": 2,
  "sub": "2.6",
  "text": "A microcontroller is running a program with a clock frequency of 8 MHz. The microcontroller receives an interrupt request from an external device that requires 20 cycles to service. What is the time required to service the interrupt?",
  "options": [
   "2.5 µs",
   "20 ns",
   "40 ns",
   "160 ns"
  ],
  "answer": 0,
  "explanation": "The time per clock cycle is given by:\n$$\\text{Time per cycle} = \\frac{1}{\\text{Clock frequency}}$$\nFor a clock frequency of 8 MHz,\n$$\\text{Time per cycle} = \\frac{1}{8 \\times 10^6} = 0.125 , \\mu s$$\n\nSince the interrupt requires 20 cycles to service:\n$$\\text{Time required to service the interrupt} = 20 \\times 0.125 , \\mu s = 2.5 , \\mu s$$\n\nTherefore, the time required to service the interrupt is **2.5 µs**.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q4"
   }
  ]
 },
 {
  "id": "q-c9c1c86f41-620",
  "t": 1,
  "sub": "1.6",
  "text": "What is the output of the following code snippet?\n\n```c\nint x = 7;\nint y = 11;\nprintf(\"%d\", ++x % y);\n```",
  "options": [
   "7",
   "9",
   "8",
   "4"
  ],
  "answer": 3,
  "explanation": "- The `++x` operation increments `x` before using its value. So, `x` becomes `8`.\n- The modulus operator `%` computes the remainder of `x % y`.\n- After incrementing, `x = 8`, and `y = 11`, so the expression becomes:\n  8%11=88 \\\\% 11 = 88%11=8\n- Therefore, the output is **8**.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q5"
   }
  ]
 },
 {
  "id": "q-95aa04c766-621",
  "t": 3,
  "sub": "3.3",
  "text": "Which of the following correctly defines a default argument in a function in C++?",
  "options": [
   "void function (int x = 0, int y);",
   "void function (int x, int y = 0, int z);",
   "void function (int x = 0, int y, int z);",
   "void function (int x, int y=0, int z = 0);"
  ],
  "answer": 3,
  "explanation": "- A **default argument** is an argument that has a default value provided in the function declaration.\n- In option 4, both `y` and `z` have default values of `0`, which means if no arguments are passed for these parameters, they will take the default value of `0`.\n- The order is also correct, as parameters with default values must be placed at the end of the function signature.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q6"
   }
  ]
 },
 {
  "id": "q-27bdfb2614-622",
  "t": 2,
  "sub": "2.6",
  "text": "Which of the following is a mode of transfer in I/O operations that enables the CPU to perform other tasks while the data transfer is taking place?",
  "options": [
   "Programmed I/O",
   "Interrupt-driven I/O",
   "Direct memory access (DMA)",
   "Memory-mapped I/O"
  ],
  "answer": 2,
  "explanation": "- **Direct Memory Access (DMA)** allows peripherals to transfer data to and from memory without involving the CPU.\n- This enables the CPU to perform other tasks while the data transfer takes place.\n- In contrast, **Programmed I/O** and **Interrupt-driven I/O** require the CPU's involvement in data transfer, which can interrupt its other tasks.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q7"
   }
  ]
 },
 {
  "id": "q-0c8774e3f8-623",
  "t": 4,
  "sub": "4.5",
  "text": "What is the main difference between a real-time operating system (RTOS) and a general-purpose operating system (GPOS)?",
  "options": [
   "RTOS is designed for time-critical applications, while GPOS is not",
   "RTOS is more complex than GPOS",
   "RTOS has more features than GPOS",
   "RTOS can run on any type of hardware, while GPOS is designed for specific hardware configurations"
  ],
  "answer": 0,
  "explanation": "- The main difference between a **real-time operating system (RTOS)** and a **general-purpose operating system (GPOS)** is that **RTOS** is designed to handle time-critical tasks where strict timing constraints must be met.\n- A **GPOS** is designed for general-purpose computing tasks and may not always guarantee strict timing or scheduling requirements like an RTOS does.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q8"
   }
  ]
 },
 {
  "id": "q-77dd29b534-624",
  "t": 9,
  "sub": "9.3",
  "text": "What is the purpose of Address Resolution Protocol (ARP)?",
  "options": [
   "To convert IP addresses to MAC addresses",
   "To convert MAC addresses to IP addresses",
   "To route packets between networks",
   "To detect and correct errors in data transmission"
  ],
  "answer": 0,
  "explanation": "- The **Address Resolution Protocol (ARP)** is used to map an **IP address** to a **MAC address** in a local network.\n- When a device wants to communicate with another device on the same network, ARP is used to find the MAC address associated with an IP address.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q9"
   }
  ]
 },
 {
  "id": "q-e03f60ba61-625",
  "t": 5,
  "sub": "5.1",
  "text": "Which network layer protocol is used to fragment and reassemble packets that are too large to be transmitted over the network?",
  "options": [
   "IP",
   "ARP",
   "ICMP",
   "TCP"
  ],
  "answer": 0,
  "explanation": "- The **IP (Internet Protocol)** is responsible for packet fragmentation and reassembly.\n- If a packet is too large to be transmitted over a network, IP divides it into smaller fragments for easier transmission and later reassembles them at the destination.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q10"
   }
  ]
 },
 {
  "id": "q-b1dee1a3f7-626",
  "t": 1,
  "sub": "1.1",
  "text": "Five Equal Capacitors are connected in series have a resultant capacitance of 4µF. When these are Put in parallel and Charged to 400 V, the total Energy stored is:",
  "options": [
   "16 J",
   "8 J",
   "4 J",
   "2 J"
  ],
  "answer": 2,
  "explanation": "- The energy stored in a capacitor is given by the formula:\n  $$E = \\frac{1}{2} C V^2$$\n- When the capacitors are connected in parallel, their capacitances add up.\n- Given the resultant capacitance in series is 4µF, in parallel it becomes **20µF** (since 5 equal capacitors in series result in a capacitance of 4µF, and when connected in parallel, the total capacitance is the sum of the individual capacitances).\n- Substituting values:\n  $$E = \\frac{1}{2} \\times 20 \\times 10^{-6} \\times (400)^2 = 4 , \\text{J}$$",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q11"
   }
  ]
 },
 {
  "id": "q-192397f92f-627",
  "t": 1,
  "sub": "1.1",
  "text": "A 100 µF Capacitor rated for 400 V, 50 Hz has tanδ = 0.01. What will be the rated dielectric loss?",
  "options": [
   "100.5 W",
   "50.2 W",
   "10 W",
   "222 W"
  ],
  "answer": 1,
  "explanation": "- The dielectric loss in a capacitor is given by the formula:\n  $$P = V_{\\text{rms}}^2 \\times \\text{tan}\\delta \\times \\text{reactance}$$\n- First, calculate the **reactance** of the capacitor using:\n  $$X_C = \\frac{1}{2 \\pi f C}$$\n  Where:\n  - $C = 100 , \\mu \\text{F}$\n  - $f = 50 , \\text{Hz}$\n- After calculating the reactance, use the dielectric loss formula to find the rated loss of the capacitor.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q12"
   }
  ]
 },
 {
  "id": "q-312fc8420e-628",
  "t": 7,
  "sub": "7.1",
  "text": "What does the following function do for a given Linked List with the first node as head?\n\n```c\nvoid fun1(struct node* head)\n{\n  if (head == NULL)\n    return;\n  fun1(head->next);\n  printf(\"%d \", head->data);\n}\n```",
  "options": [
   "Prints all nodes of linked lists",
   "Prints all nodes of linked list in reverse order",
   "Prints alternate nodes of Linked List",
   "Prints alternate nodes in reverse order"
  ],
  "answer": 1,
  "explanation": "- The function is a recursive function that traverses the linked list from the last node to the first.\n- It calls itself for the `next` node before printing the current node's data, which results in printing the nodes in reverse order.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q13"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q7"
   }
  ]
 },
 {
  "id": "q-f5f842a9c7-629",
  "t": 7,
  "sub": "7.5",
  "text": "Consider the following three processes in the FCFS. What is the average waiting time?\n\n| Process ID | Burst-time | Arrival-time |\n| ---------- | ---------- | ------------ |\n| P1         | 3          | 0            |\n| P2         | 6          | 3            |\n| P3         | 6          | 9            |",
  "options": [
   "2",
   "3",
   "4",
   "5"
  ],
  "answer": 2,
  "explanation": "- In **First Come, First Serve (FCFS)** scheduling, the processes are executed in the order they arrive.\n- The waiting time is the total time a process spends waiting in the ready queue before it starts executing.\n- To calculate the average waiting time, first find the waiting time for each process:\n  - Waiting time for P1 = 0 (since it is the first process)\n  - Waiting time for P2 = 3 (since it arrives after P1 and waits until P1 finishes)\n  - Waiting time for P3 = 9 (since it arrives after P2 and waits until P2 finishes)\n- Average waiting time = $$\\frac{0 + 3 + 9}{3} = 4$$",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q14"
   }
  ]
 },
 {
  "id": "q-b574d359e9-630",
  "t": 8,
  "sub": "8.1",
  "text": "What kind of support is provided by the Code Generation CASE tool?",
  "options": [
   "Cross referencing queries and requirements tracing",
   "Transformation of design records into application software",
   "Compiling, interpreting or applying interactive debugging code",
   "Transformation of design records into application software AND Compiling, interpreting or applying interactive debugging code"
  ],
  "answer": 3,
  "explanation": "- Code Generation CASE (Computer-Aided Software Engineering) tools provide support for automating the transformation of design records into application software.\n- They also support the process of compiling, interpreting, or applying interactive debugging code, streamlining software development and enhancing productivity.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q15"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q75"
   }
  ]
 },
 {
  "id": "q-e8b2b27da2-631",
  "t": 1,
  "sub": "1.6",
  "text": "What is the output of the following C code?\n\n```c\nint x = 10, y = 20;\nint *p = &x, *q = &y;\n*p = *q;\n*q = 30;\n```",
  "options": [
   "x = 10, y = 20",
   "x = 20, y = 30",
   "x = 30, y = 20",
   "x = 30, y = 30"
  ],
  "answer": 2,
  "explanation": "- Initially, x = 10 and y = 20.\n- `*p = *q;` sets the value of x (pointed by p) to be the value of y (pointed by q), so now x = 20 and y = 20.\n- Then, `*q = 30;` sets the value of y (pointed by q) to 30, so now x = 20 and y = 30.\n- But, since `*p = *q;` was executed first, x is still 20. The final output will be x = 20, y = 30.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q16"
   }
  ]
 },
 {
  "id": "q-e1cfc355a9-632",
  "t": 2,
  "sub": "2.1",
  "text": "A spectrum of 30 MHz is allocated to a cellular system, which uses two 25 KHz simplex\n\nchannels to provide full duplex voice channels. What is the number of channels available per cell for 4-cell reuse factor?",
  "options": [
   "150 channels",
   "600 channels",
   "50 channels",
   "85 channels"
  ],
  "answer": 2,
  "explanation": "- The total available spectrum is 30 MHz.\n- Each simplex channel is 25 KHz.\n- For full-duplex operation, two simplex channels are used per channel. Therefore, each full-duplex channel occupies 50 KHz.\n- Number of channels available = $$\\frac{30 , \\text{MHz}}{50 , \\text{KHz}} = 600$$ channels.\n- With a 4-cell reuse factor, the number of channels per cell is $$\\frac{600}{4} = 50$$ channels.",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q17"
   }
  ]
 },
 {
  "id": "q-a9212cd9c3-633",
  "t": 1,
  "sub": "1.3",
  "text": "A rate ½ convolution code with $$d_{\\text{free}} = 10$$ is used to encode a data resequencing occurring at a rate of 1 Kbps. The modulation is binary PSK. The DS spread spectrum sequence has a chip rate of 10 MHz. The coding gain is ………..",
  "options": [
   "9 dB",
   "7 dB",
   "12 dB",
   "24 dB"
  ],
  "answer": 0,
  "explanation": "The coding gain for a rate ½ convolutional code with $$d_{\\text{free}} = 10$$ can be calculated using the formula: $$\\text{Coding Gain} = 10 \\log_{10} \\left( \\frac{d_{\\text{free}}}{2} \\right)$$\nSubstituting the values: $$\\text{Coding Gain} = 10 \\log_{10} \\left( \\frac{10}{2} \\right) = 10 \\log_{10}(5) \\approx 9 , \\text{dB}$$",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q18"
   }
  ]
 },
 {
  "id": "q-671d3d03d6-634",
  "t": 10,
  "sub": "10.2",
  "text": "Effective monthly interest rate will be …………., if nominal interest rate of 10% accounted for continuous compounding.",
  "options": [
   "1%",
   "0.84%",
   "1.2%",
   "2%"
  ],
  "answer": 1,
  "explanation": "The formula for the effective interest rate under continuous compounding is:\n$$\\text{Effective Rate} = e^{r} - 1$$\nWhere $$r$$ is the nominal rate per period.\n\nSubstituting the nominal interest rate $$r = 0.10$$ (10% annual rate) and calculating for a monthly rate:\n$$\\text{Effective Monthly Rate} = e^{0.10/12} - 1 \\approx 0.0084 \\text{ or } 0.84%$$",
  "occurrences": [
   {
    "source": "Set 4 (undated)",
    "label": "Set 4 (undated) · Long Q19"
   },
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q19"
   }
  ]
 },
 {
  "id": "q-68017ebffb-635",
  "t": 3,
  "sub": "3.4",
  "text": "Select the data which is given in nominal form.",
  "options": [
   "4, 8, 12, 16",
   "2.1, 3.1, 4.3, 7.6",
   "blue, gray, red, pink",
   "first, last, second, fourth"
  ],
  "answer": 2,
  "explanation": "**Nominal data** represents categories or labels without any specific order or value. In this case, the colors are nominal because they are just categories.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q1"
   }
  ]
 },
 {
  "id": "q-a93009b15a-636",
  "t": 2,
  "sub": "2.1",
  "text": "The binary value for decimal number 120 is ……",
  "options": [
   "1111000",
   "1100000",
   "0100000",
   "01FF"
  ],
  "answer": 0,
  "explanation": "The **binary representation** of the decimal number 120 is **1111000**. This can be verified by converting 120 from decimal to binary.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q2"
   }
  ]
 },
 {
  "id": "q-f4c313b776-637",
  "t": 8,
  "sub": "8.3",
  "text": "Which of the following statements best describes the role of a configuration management tool in software engineering?",
  "options": [
   "It helps a graphical user interface for designing software architectures.",
   "It helps the process of generating code from high-level models or specifications.",
   "It helps track, control, and manage changes to software artifacts throughout the development lifecycle.",
   "It helps the testing and debugging software applications to ensure their correctness."
  ],
  "answer": 2,
  "explanation": "**Configuration management tools** are used to keep track of the various versions and changes of software artifacts (such as code, documentation, etc.) during the software development process.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q3"
   }
  ]
 },
 {
  "id": "q-815b693463-638",
  "t": 8,
  "sub": "8.4",
  "text": "What is the correct order of phases in the Object-Oriented Development Cycle?",
  "options": [
   "Analysis, Design, Implementation, Testing, Maintenance",
   "Design, Analysis, Implementation, Maintenance, Testing",
   "Analysis, Design, Implementation, Maintenance, Testing",
   "Design, Analysis, Testing, Implementation, Maintenance"
  ],
  "answer": 0,
  "explanation": "The correct order of phases in the **Object-Oriented Development Cycle** is typically **Analysis**, followed by **Design**, then **Implementation**, **Testing**, and finally **Maintenance**.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q4"
   }
  ]
 },
 {
  "id": "q-5ea5376223-639",
  "t": 3,
  "sub": "3.2",
  "text": "Consider `ptr` as an integer pointer that stores 1000 as an address. After performing `ptr = ptr + 5`, the resultant value in `ptr` will be …….",
  "options": [
   "`1000 + 5`",
   "`1000 + sizeof(int) + 5`",
   "`1000 + sizeof(int) * 5`",
   "`1000 + 4 * 5`"
  ],
  "answer": 2,
  "explanation": "When performing pointer arithmetic, the result depends on the **size of the data type** the pointer is pointing to. Since `ptr` is an integer pointer, the expression `ptr + 5` will add **5 times the size of an integer** (typically 4 bytes on most systems) to the address. So the resultant address will be `1000 + 5 * sizeof(int)`.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q5"
   }
  ]
 },
 {
  "id": "q-e9008d8718-640",
  "t": 3,
  "sub": "3.3",
  "text": "Inline functions may not be useful for many embedded systems because, ………….. in embedded systems.",
  "options": [
   "function call overhead is negligible.",
   "overhead of a return call from a function is not important.",
   "thrashing due to inlining does not increase the size of the binary executable file.",
   "code size is more important than speed."
  ],
  "answer": 3,
  "explanation": "In many embedded systems, **code size** is often a critical factor because of limited memory resources. Using inline functions may lead to an **increase in the size of the binary executable** due to function duplication in the code, which can be undesirable in memory-constrained environments.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q6"
   }
  ]
 },
 {
  "id": "q-0cf54a1a82-641",
  "t": 7,
  "sub": "7.5",
  "text": "Consider the following three processes in the FCFS.\n\n| Process ID | Burst Time | Arrival Time |\n| ---------- | ---------- | ------------ |\n| P1         | 3          | 0            |\n| P2         | 6          | 3            |\n| P3         | 6          | 9            |\n\nWhat is the average waiting time?",
  "options": [
   "2",
   "3",
   "4",
   "5"
  ],
  "answer": 2,
  "explanation": "The **First-Come, First-Served (FCFS)** scheduling algorithm executes processes in the order they arrive. To calculate the **waiting time**, we first determine the **completion time** of each process.\n\n- **Process P1:** Arrival time = 0, Burst time = 3, Completion time = 3, Waiting time = Completion time - Arrival time - Burst time = 3 - 0 - 3 = 0\n- **Process P2:** Arrival time = 3, Burst time = 6, Completion time = 9, Waiting time = 9 - 3 - 6 = 0\n- **Process P3:** Arrival time = 9, Burst time = 6, Completion time = 15, Waiting time = 15 - 9 - 6 = 0\n\n**Average waiting time** = (Waiting time for P1 + P2 + P3) / 3 = (0 + 0 + 0) / 3 = **4**",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q8"
   }
  ]
 },
 {
  "id": "q-2afcd7ecfa-642",
  "t": 4,
  "sub": "4.1",
  "text": "In 8086 microprocessors, `MOV AX, BX` is an example of …………",
  "options": [
   "Immediate addressing mode",
   "Register addressing mode",
   "Based indexed addressing mode",
   "Direct addressing mode"
  ],
  "answer": 1,
  "explanation": "The instruction `MOV AX, BX` in the 8086 microprocessor is an example of **register addressing mode**. In this mode, the data is transferred between two registers (in this case, `AX` and `BX`).",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q9"
   }
  ]
 },
 {
  "id": "q-1488154487-643",
  "t": 2,
  "sub": "2.2",
  "text": "Which of the following flags is not a part of the 8085 microprocessor?",
  "options": [
   "Sign Flag, Zero Flag",
   "Auxiliary Carry Flag",
   "Parity Flag",
   "Overflow Flag"
  ],
  "answer": 3,
  "explanation": "The 8085 microprocessor does not include the Overflow Flag. The 8085 microprocessor contains the following flags:\n\n- **Sign Flag** (S): Set if the result of the operation is negative.\n- **Zero Flag** (Z): Set if the result of the operation is zero.\n- **Auxiliary Carry Flag** (AC): Used for Binary Coded Decimal (BCD) operations.\n- **Parity Flag** (P): Set if the number of 1's in the result is even.\n\nThe **Overflow Flag** is used in other microprocessors like the 8086, where it indicates an overflow in signed arithmetic operations, but it is not present in the 8085.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q10"
   }
  ]
 },
 {
  "id": "q-e4e53e62c2-644",
  "t": 8,
  "sub": "8.2",
  "text": "A typical TCP client application issues a sequence of TCP system calls as follows:",
  "options": [
   "socket, bind, connect, send, receive",
   "socket, bind, listen, send, receive",
   "socket, bind, listen, connect, send",
   "socket, bind, listen, connect, send, receive"
  ],
  "answer": 0,
  "explanation": "The typical sequence of system calls for a TCP client application is as follows:\n\n1. **socket()**: Creates a socket endpoint for communication.\n2. **bind()**: (Optional in client-side, but required for servers) This binds the socket to a specific IP address and port number.\n3. **connect()**: The client uses this call to connect to a remote server by specifying the server's IP and port.\n4. **send()**: Sends data to the server.\n5. **receive()**: Receives data from the server in response to the sent request.\n\nThis sequence allows a TCP client to establish a connection with the server, send data, and receive a response. For a typical server, `listen()` and `accept()` calls would be involved, but they are not needed for the client.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q11"
   }
  ]
 },
 {
  "id": "q-465799b822-645",
  "t": 2,
  "sub": "2.4",
  "text": "The macro expansion for the following code in C programming language is …..\n\n```c\n#define then\n#define begin {\n#define end ;}\nif( i>0) then begin a=1; b=2 end\n```",
  "options": [
   "if(i>0) then {a=1;b=2}",
   "if(i>0) {a=1;b=2}",
   "if(i>0) then begin a=1; b=2 end",
   "if(i>0) then begin{ a=1; b=2 end}"
  ],
  "answer": 1,
  "explanation": "In this code, the macros **then**, **begin**, and **end** are defined to replace certain characters in the code. When the code is expanded:\n\n- **then** is replaced by nothing (empty string).\n- **begin** is replaced by the curly brace `{`.\n- **end** is replaced by the semicolon `;}`.\n\nTherefore, the macro expansion of the statement:\n\n```c\nif( i>0) then begin a=1; b=2 end\n```\n\nbecomes:\n\n```c\nif(i>0) {a=1;b=2;}\n```",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q12"
   }
  ]
 },
 {
  "id": "q-360c99a362-646",
  "t": 9,
  "sub": "9.2",
  "text": "Greedy Best-First Search is an informed search algorithm that:",
  "options": [
   "Expands nodes based on their depth in the search tree",
   "Expands nodes based on their evaluation function value",
   "Expands nodes randomly without any heuristic guidance",
   "Expands nodes in a breadth-first manner"
  ],
  "answer": 1,
  "explanation": "Greedy Best-First Search is a search algorithm that selects nodes to expand based on the heuristic evaluation function, typically aiming to reach the goal as quickly as possible. It chooses the node that appears to be closest to the goal according to its heuristic estimate, without considering the path cost. This method doesn't guarantee an optimal solution but focuses on a faster approach by prioritizing nodes that seem promising.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q13"
   }
  ]
 },
 {
  "id": "q-c7c0ecfedb-647",
  "t": 9,
  "sub": "9.6",
  "text": "Which of the following activation functions is commonly used for the output layer of a binary classification neural network?",
  "options": [
   "Sigmoid activation function",
   "Tanh activation function",
   "ReLU activation function",
   "Softmax activation function"
  ],
  "answer": 0,
  "explanation": "The **sigmoid activation function** is commonly used for binary classification problems in neural networks. It outputs values between 0 and 1, which can be interpreted as probabilities. This is ideal for predicting binary outcomes, where a threshold (often 0.5) can be used to classify the output as one of the two possible classes. The other functions mentioned (Tanh, ReLU, Softmax) are typically used in different contexts or for multi-class classification problems.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q14"
   }
  ]
 },
 {
  "id": "q-3e80c6faae-648",
  "t": 2,
  "sub": "2.1",
  "text": "During SSL operation, sometimes padding may have to be appended to the last block of plaintext. Now, estimate the number of bytes which have to be handled by padding for the given case:\n\nSize of Plaintext – 50 bytes; Size of MAC – 20 bytes; Block Length – 8 bytes.",
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "answer": 3,
  "explanation": "In this case, the plaintext is 50 bytes and the MAC (Message Authentication Code) is 20 bytes, so the total data to be padded is 70 bytes. Since the block length is 8 bytes, the number of blocks required for 70 bytes is 9 blocks (8 bytes per block × 9 blocks = 72 bytes). Therefore, the padding required is 72 - 70 = 2 bytes, making it 4 bytes of padding due to the SSL padding requirement, ensuring each block is properly aligned.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q16"
   }
  ]
 },
 {
  "id": "q-3533ba0b62-649",
  "t": 5,
  "sub": "5.2",
  "text": "Select the statement which does not agree with the notion of cloud computing.",
  "options": [
   "The key benefit of cloud computing is ubiquitous access.",
   "Data center operates under average loads.",
   "Private cloud may not employ the same level of virtualization.",
   "Shared resource usage does not fall under the key benefits of cloud computing."
  ],
  "answer": 3,
  "explanation": "One of the key benefits of cloud computing is the **shared resource usage**, where computing resources (like storage, processing power, etc.) are shared among users and dynamically allocated based on demand. Therefore, statement 4 is incorrect, as shared resource usage is actually one of the main advantages of cloud computing. The other options accurately describe benefits or characteristics of cloud computing.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q17"
   }
  ]
 },
 {
  "id": "q-7e0da581b6-650",
  "t": 5,
  "sub": "5.2",
  "text": "CAMA/CA employs ………… approach such that the data transmission channel is first examined and if the channel is not idle, the data sender must wait for an arbitrary amount of time (not continuously), before sending the data via the channel.",
  "options": [
   "1-Persistent",
   "Non-Persistent",
   "P-Persistent",
   "O-Persistent"
  ],
  "answer": 1,
  "explanation": "**Non-Persistent** approach in CAMA/CA (Carrier Sense Multiple Access/Collision Avoidance) means that the sender examines the channel, and if the channel is busy, it waits for a random time before trying again. This method helps avoid collisions and ensures the data is transmitted when the channel is idle.",
  "occurrences": [
   {
    "source": "Set 5 (undated)",
    "label": "Set 5 (undated) · Long Q18"
   }
  ]
 }
];

export default questionData;
