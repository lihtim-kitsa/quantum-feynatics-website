export interface SessionTopic {
  title: string;
  description: string;
}

export interface Session {
  title: string;
  time: string;
  presenter?: string;
  description?: string;
  topics?: SessionTopic[];
}

export interface ProgrammeDay {
  day: string;
  date: string;
  dateTime: string;
  tone: "purple" | "blue" | "pink";
  sessions: Session[];
}

// Transcribed from the supplied DAY 1–3 screenshots. All times are IST.
// Grouped topics share the source time block; no individual durations are inferred.
export const programme: ProgrammeDay[] = [
  {
    day: "DAY 1",
    date: "23 October 2026",
    dateTime: "2026-10-23",
    tone: "purple",
    sessions: [
      { title: "Introduction to Quantum Computing", time: "9–10 am", description: "Get introduced to qubits, superposition, measurement, and how quantum computing differs from classical computing." },
      { title: "QML Session", time: "10–11 am", presenter: "Dr Kavitha Yogaraj" },
      { title: "Basic Mathematics", time: "11 am–noon", description: "Review complex numbers, vectors, matrices, and probability as the mathematical language used to describe quantum states." },
      { title: "Lunch", time: "Noon–1 pm" },
      { title: "Single- and Multi-Qubit Systems", time: "1–2 pm", description: "Explore single-qubit states, combine qubits using tensor products, and build intuition for multi-qubit states and entanglement." },
      { title: "Quantum Circuits", time: "2–3 pm", description: "Read circuit diagrams, explore common quantum gates, and see how gates and measurements come together in a circuit." },
      { title: "Qiskit and Python", time: "3–4 pm", description: "Get familiar with the Python workflow for Qiskit, create simple circuits, and inspect measurement results." },
      { title: "Notebook", time: "5–6 pm", description: "Practise the day's concepts through notebook exercises on quantum states, gates, and simple circuits." },
    ],
  },
  {
    day: "DAY 2",
    date: "24 October 2026",
    dateTime: "2026-10-24",
    tone: "blue",
    sessions: [
      { title: "Day 1 Revision", time: "9–10 am", description: "Revisit qubits, the essential mathematics, circuit building, and the Qiskit workflow before moving into new topics." },
      {
        title: "Qiskit SDK",
        time: "10 am–noon",
        topics: [
          { title: "Aer", description: "Explore circuit simulation and compare ideal simulations with simulations that include noise." },
          { title: "Sampler Primitives", description: "Sample measurement outcomes from circuits and interpret the resulting outcome distributions." },
          { title: "Estimator", description: "Explore observables and estimate expectation values for quantum circuits." },
          { title: "Transpilation, Pass Managers, Qiskit Runtime and Backends", description: "Understand how circuits are adapted to a target backend, how pass managers organize circuit transformations, and where Qiskit Runtime fits into execution." },
        ],
      },
      { title: "Lunch", time: "Noon–1 pm" },
      { title: "Superdense Coding", time: "1–2 pm", description: "Follow a circuit that uses a shared entangled pair to encode and communicate two classical bits by sending one qubit." },
      { title: "Quantum Teleportation", time: "2–3 pm", description: "Walk through transferring a quantum state using shared entanglement, measurement, and classical communication." },
      { title: "Notebook", time: "3–3:30 pm", description: "Reinforce the SDK and communication-protocol sessions through notebook exercises and circuit experiments." },
      { title: "QML Hands-on", time: "4–6 pm", presenter: "Archit" },
    ],
  },
  {
    day: "DAY 3",
    date: "25 October 2026",
    dateTime: "2026-10-25",
    tone: "pink",
    sessions: [
      {
        title: "Oracle, Procedure & Qiskit Implementation",
        time: "9–11 am",
        topics: [
          { title: "Oracle", description: "Explore how an oracle encodes a problem condition and how it can be represented within a quantum circuit." },
          { title: "Procedure", description: "Follow the procedure step by step, connecting its circuit operations to the role of the oracle." },
          { title: "Geometric Visualisation", description: "Use geometric intuition to trace how quantum states change through the procedure." },
          { title: "Qiskit Implementation", description: "Translate the procedure into a Qiskit circuit, run a simulation, and interpret the measurement outcomes." },
        ],
      },
    ],
  },
];
