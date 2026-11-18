const CHAPTERS = [
 {n:1, code:"AExE01", name:"Basic Electrical & Electronics", subs:[
  ["Basic concept","Ohm's law, voltage, current, power, energy; conductors and insulators; series and parallel circuits; star–delta conversion; Kirchhoff's laws; linear/non-linear, bilateral/unilateral, active/passive circuits"],
  ["Network theorems","Superposition, Thevenin, Norton, maximum power transfer; R-L, R-C, R-L-C circuits; series and parallel resonance; active and reactive power"],
  ["AC fundamentals","Generation of AC, equations and waveforms; average, peak and rms values; three-phase systems"],
  ["Semiconductor devices","Diode characteristics; BJT configurations and biasing; small and large signal models; MOSFET and CMOS"],
  ["Signal generators","Oscillator principles; RC, LC and crystal oscillators; waveform generators"],
  ["Amplifiers","Output stage classes A, B, AB; biasing class AB; power BJTs; transformer-coupled push-pull; tuned amplifiers; op-amps"]]},
 {n:2, code:"AExE02", name:"Digital Logic & Microprocessor", subs:[
  ["Digital logic","Number systems, logic levels, gates, Boolean algebra, SOP, POS, Karnaugh maps"],
  ["Combinational & arithmetic circuits","MUX, DEMUX, decoder, encoder; binary addition and subtraction; signed and unsigned numbers"],
  ["Sequential logic","RS, gated, edge-triggered and master–slave flip-flops; registers; shift registers; asynchronous and synchronous counters"],
  ["Microprocessor","Internal architecture and features; assembly language programming"],
  ["Microprocessor system","Memory classification and hierarchy; I/O and memory interfacing; PPI; serial interface and standards; DMA and DMA controllers"],
  ["Interrupt operations","Interrupts, interrupt service routines, interrupt processing"]]},
 {n:3, code:"ACtE03", name:"Programming Language & Applications", subs:[
  ["C programming basics","Tokens, operators, formatted/unformatted I/O, control statements, loops, functions, recursion, arrays, strings"],
  ["Pointers, structures, files in C","Pointer arithmetic, pointers and arrays, structure vs union, structures and functions, file I/O, sequential and random access"],
  ["C++ classes & objects","Namespaces, function overloading, inline functions, default arguments, references, access specifiers, constructors/destructors, this pointer, static members, const members, friend functions and classes"],
  ["OOP features","Operator overloading, data conversion, inheritance types, constructor/destructor order in inheritance"],
  ["Virtual functions & file handling","Virtual functions, dynamic binding, file streams, I/O errors, stream class hierarchy, ios flags, manipulators"],
  ["Templates & exceptions","Function and class templates, STL containers/algorithms/iterators, try/catch/throw, rethrow, catch-all"]]},
 {n:4, code:"ACtE04", name:"Computer Organization & Embedded Systems", subs:[
  ["Control unit & CPU","Control memory, microinstructions, control unit design, ALU, instruction formats, addressing modes, RISC vs CISC, pipelining"],
  ["Arithmetic & memory system","Memory hierarchy, cache principles, mapping, replacement, write policy, memory write-ability and storage permanence"],
  ["I/O organization & multiprocessors","Peripherals, I/O modules and interfaces, modes of transfer, DMA, multiprocessor interconnection and synchronization"],
  ["Embedded HW–SW design","Embedded system classification, custom single-purpose processors, general-purpose processors, ASIPs"],
  ["Real-time OS & control","Tasks, processes, threads, scheduling, synchronization, device drivers, open- and closed-loop control"],
  ["HDL & IC technology","VHDL overview, data representation, combinational/sequential design and pipelining in VHDL"]]},
 {n:5, code:"ACtE05", name:"Computer Networks & Security", subs:[
  ["Intro & physical layer","Network models, OSI and TCP/IP, hubs, bridges, switches, routers, transmission media"],
  ["Data link layer","Error detection/correction, flow control, multiple access, ARP, Ethernet 802.3, 802.4, 802.5, CSMA/CD, WLAN, PPP"],
  ["Network layer","IP addressing, classful addressing, subnetting, RIP/OSPF/BGP, routing algorithms, ICMP, IPv6"],
  ["Transport layer","Transport services, ports and sockets, connection setup/release, flow control, multiplexing, congestion control"],
  ["Application layer","HTTP/HTTPS, FTP, email, DNS, P2P, sockets, traffic analyzers (MRTG, PRTG, SNMP, Wireshark)"],
  ["Network security","Attacks, cryptography, RSA, digital signatures, PGP, SSL, IPsec, VPN, WEP, firewalls"]]},
 {n:6, code:"ACtE06", name:"Theory of Computation & Graphics", subs:[
  ["Finite automata","DFA, NFA, minimization, regular expressions, pumping lemma for regular languages"],
  ["Context-free languages","CFG, derivations, parse trees, ambiguity, CNF, GNF, BNF, PDA, pumping lemma for CFLs"],
  ["Turing machines","TM notation and variants, Church–Turing thesis, universal TM, complexity, intractability, reducibility"],
  ["Graphics intro & hardware","Display technology, raster and vector displays, display processors, I/O devices, graphics software"],
  ["2D transformations","Translation, rotation, scaling, reflection, shear, composite transforms, viewing pipeline, Cohen–Sutherland and Liang–Barsky clipping"],
  ["3D transformations","3D transforms, viewing pipeline, orthographic, parallel and perspective projection"]]},
 {n:7, code:"ACtE07", name:"DSA, Database & OS", subs:[
  ["Lists, stacks, queues, trees","ADTs, Big-O, stacks and queues, infix→postfix, linked lists, binary trees, traversals, AVL trees"],
  ["Sorting, searching, graphs","Sorting algorithms, binary search, hashing, graph traversal, topological sort, MST, Dijkstra"],
  ["Data models, normalization, SQL","ER model, keys, normal forms up to BCNF, constraints, DDL/DML, views, relational algebra, query optimization"],
  ["Transactions & recovery","ACID, serializability, locking, deadlocks, failure classes, log-based recovery"],
  ["OS & process management","OS types and structure, processes and threads, scheduling, critical section, semaphores, monitors, classical problems"],
  ["Memory, files, administration","Swapping, virtual memory, demand paging, page replacement, file systems, allocation, user accounts"]]},
 {n:8, code:"ACtE08", name:"Software Engineering & OOAD", subs:[
  ["Process & requirements","Software process models (Agile, V, iterative, prototype, big bang), CASE, functional and non-functional requirements, elicitation and validation"],
  ["Software design","Design concepts, architectural design, modular decomposition, client–server, distributed and real-time design, CBSE"],
  ["Testing, cost, quality, config.","Unit to acceptance testing, test design, cost models, SQA, metrics, ISO, CMMI, configuration and release management"],
  ["OO fundamentals & analysis","Models, use cases, OO development cycle, UML, conceptual model, system behaviour"],
  ["OO design","Use-case elaboration, collaboration diagrams, patterns, visibility, class diagrams"],
  ["OO implementation","Mapping design to code, class definitions from DCDs, methods from collaboration diagrams, exception handling"]]},
 {n:9, code:"ACtE09", name:"AI & Neural Networks", subs:[
  ["AI & intelligent agents","AI history and foundations, agent structure, PEAS, agent types, environment types"],
  ["Search techniques","State-space search, CSP, uninformed and informed search, A*, hill climbing, simulated annealing, minimax, alpha–beta"],
  ["Knowledge representation","Semantic nets, frames, propositional and predicate logic, resolution, Bayes' rule, Bayesian networks"],
  ["Expert systems & NLP","Expert system architecture, knowledge acquisition, NLP steps and challenges, machine vision, robotics"],
  ["Machine learning","Supervised, unsupervised, reinforcement learning, decision trees, Naive Bayes, fuzzy inference, genetic algorithms"],
  ["Neural networks","McCulloch–Pitts, activation functions, perceptron, gradient descent, delta rule, Hebbian, Adaline, MLP, backpropagation, Hopfield"]]},
 {n:10, code:"AALL10", name:"Project Planning, Design & Implementation", subs:[
  ["Engineering drawing","Drawing sheets, dimensioning, scale, orthographic and isometric projection, sectional drawing"],
  ["Engineering economics","Cash flow, interest and time value of money, discounted payback, NPV, IRR, MARR, comparison of alternatives, depreciation, taxation in Nepal"],
  ["Planning & scheduling","Project life cycle, bar chart, CPM, PERT, resource levelling and smoothing, monitoring and control"],
  ["Project management","Information systems, risk management, project financing, tendering, contract management"],
  ["Professional practice","Environment and society, ethics, regulation, occupational health and safety, role of NEA"],
  ["Regulatory body","Nepal Engineering Council Act and Regulations"]]}
];

const PLAN = [
 {from:"2026-11-18", to:"2026-11-24", ch:[10,1], label:"Week 1", why:"Easy marks most computer engineers skip. Facts and formulas stick with repetition."},
 {from:"2026-11-25", to:"2026-12-01", ch:[2,4], label:"Week 2", why:"Closely linked hardware topics: interrupts, DMA, cache, pipelining."},
 {from:"2026-12-02", to:"2026-12-08", ch:[3,7], label:"Week 3", why:"Likely your strongest area. Revise fast and drill code-output and normalization questions."},
 {from:"2026-12-09", to:"2026-12-15", ch:[5,8], label:"Week 4", why:"Term-heavy chapters: protocols, ports, layers, process models and UML."},
 {from:"2026-12-16", to:"2026-12-22", ch:[6,9], label:"Week 5", why:"Transformation matrices, clipping, Chomsky hierarchy, search and neural networks."},
 {from:"2026-12-23", to:"2026-12-29", ch:[], label:"Week 6", why:"Timed 100-question mocks every other day. Fix the weakest sub-chapters in between."},
 {from:"2026-12-30", to:"2027-01-03", ch:[], label:"Final days", why:"Formula sheet, NEC Act facts, mistakes list, one light mock. No new topics."}
];

const FORMULAS = [
 {ch:1, items:[
  ["Ohm's law and power","V = IR, P = VI = I²R = V²/R"],
  ["Balanced star ↔ delta","Z<sub>Δ</sub> = 3·Z<sub>Y</sub>; R<sub>a</sub> = R<sub>ab</sub>R<sub>ca</sub> / (R<sub>ab</sub>+R<sub>bc</sub>+R<sub>ca</sub>)"],
  ["Sinusoid","v = V<sub>m</sub> sin(ωt + φ); T = 2π/ω; f = ω/2π"],
  ["RMS and average (sine)","V<sub>rms</sub> = V<sub>m</sub>/√2 ≈ 0.707V<sub>m</sub>; V<sub>avg</sub> (half cycle) = 2V<sub>m</sub>/π ≈ 0.637V<sub>m</sub>; form factor 1.11"],
  ["Three phase","Star: V<sub>L</sub> = √3V<sub>ph</sub>, I<sub>L</sub> = I<sub>ph</sub>. Delta: I<sub>L</sub> = √3I<sub>ph</sub>, V<sub>L</sub> = V<sub>ph</sub>. P = √3 V<sub>L</sub> I<sub>L</sub> cos φ"],
  ["Resonance","f<sub>0</sub> = 1 / (2π√(LC)); series: Z minimum = R; parallel: Z maximum"],
  ["Max power transfer","R<sub>L</sub> = R<sub>th</sub>; P<sub>max</sub> = V<sub>th</sub>² / 4R<sub>th</sub>; efficiency 50%"],
  ["Amplifier efficiency (max)","Class A series-fed 25%, transformer-coupled 50%; Class B 78.5% (π/4); Class AB between"],
  ["Barkhausen criterion","|Aβ| = 1 and loop phase shift 0° or 360°"]]},
 {ch:2, items:[
  ["MUX select lines","2<sup>n</sup> inputs need n select lines"],
  ["Counters","n flip-flops: mod 2<sup>n</sup>, maximum count 2<sup>n</sup> − 1"],
  ["Address bus","n address lines address 2<sup>n</sup> locations; 8085: 16 lines = 64 KB; 8086: 20 lines = 1 MB"],
  ["BCD correction","If a BCD digit sum > 9 or a carry occurs, add 0110"],
  ["2's complement","Invert all bits, then add 1"]]},
 {ch:4, items:[
  ["Average memory access time","Simultaneous: h·T<sub>c</sub> + (1−h)·T<sub>m</sub>. Hierarchical: T<sub>c</sub> + (1−h)·T<sub>m</sub>"],
  ["Pipeline speedup","S = n·k / (k + n − 1) for n tasks on k stages; ideal limit k"],
  ["Cache address split","Direct mapped: tag | line (index) | word (offset)"]]},
 {ch:5, items:[
  ["Full mesh links","n(n−1)/2 duplex links; each device needs n−1 ports"],
  ["Hosts per subnet","2<sup>h</sup> − 2 usable hosts, h = host bits; /26 → 62 hosts"],
  ["Delays","Transmission = L/R; propagation = distance/speed"],
  ["Ports","FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, HTTP 80, POP3 110, IMAP 143, HTTPS 443"]]},
 {ch:6, items:[
  ["2D rotation (CCW by θ)","x′ = x cos θ − y sin θ; y′ = x sin θ + y cos θ"],
  ["Homogeneous coordinates","2D uses 3×3 matrices, 3D uses 4×4, so translation becomes a matrix multiplication"],
  ["Frame buffer size","width × height × bits per pixel / 8 bytes"],
  ["Cohen–Sutherland","4-bit region code (top, bottom, right, left); both 0000 → accept; AND ≠ 0000 → reject"]]},
 {ch:7, items:[
  ["Effective access time (paging)","EAT = (1 − p)·memory access + p·page fault service time"],
  ["Binary tree","Max nodes at height h (levels) = 2<sup>h</sup> − 1; leaves = internal nodes with 2 children + 1"],
  ["AVL minimum nodes","N(h) = N(h−1) + N(h−2) + 1; levels 1,2,3,4,5 → 1,2,4,7,12 nodes"],
  ["Complexities","Binary search O(log n); merge/heap sort O(n log n); quick sort worst O(n²); bubble/insertion O(n²)"],
  ["Circular queue full","(rear + 1) % n == front"]]},
 {ch:10, items:[
  ["Compound interest","F = P(1 + i)<sup>n</sup>; P = F / (1 + i)<sup>n</sup>"],
  ["NPV","NPV = Σ CF<sub>t</sub> / (1 + i)<sup>t</sup> − initial cost; accept if NPV ≥ 0"],
  ["IRR rule","IRR is the rate where NPV = 0; accept if IRR ≥ MARR"],
  ["Straight-line depreciation","D = (P − S) / n; rate = 1/n (5 years → 20%); book value = cost − accumulated depreciation"],
  ["PERT","t<sub>e</sub> = (a + 4m + b) / 6; σ = (b − a) / 6"],
  ["Critical path","Longest path through the network; activities on it have zero total float"],
  ["Unequal lives","Compare over the LCM of lives (8 and 6 years → 24 years)"]]}
];
