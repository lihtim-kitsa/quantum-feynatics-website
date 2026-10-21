export interface SessionTopic {
  title: string;
  presenter?: string;
}

export interface Session {
  title: string;
  time: string;
  presenter?: string;
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
      { title: "Introduction to Quantum Computing", time: "9–10 am", presenter: "Anvesh" },
      { title: "QML Session", time: "10–11 am", presenter: "Dr Kavitha Yogaraj" },
      { title: "Basic Mathematics", time: "11 am–noon", presenter: "Srinandan" },
      { title: "Lunch", time: "Noon–1 pm" },
      { title: "Single- and Multi-Qubit Systems", time: "1–2 pm", presenter: "Spandan" },
      { title: "Quantum Circuits", time: "2–3 pm", presenter: "Rutwek" },
      { title: "Qiskit and Python", time: "3–4 pm", presenter: "Kaushik" },
      { title: "Notebook", time: "5–6 pm" },
    ],
  },
  {
    day: "DAY 2",
    date: "24 October 2026",
    dateTime: "2026-10-24",
    tone: "blue",
    sessions: [
      { title: "Day 1 Revision", time: "9–10 am" },
      {
        title: "Qiskit SDK",
        time: "10 am–noon",
        topics: [
          { title: "Aer", presenter: "Spandan" },
          { title: "Sampler Primitives", presenter: "Rutwek" },
          { title: "Estimator", presenter: "Rutwek" },
          { title: "Transpilation, Pass Managers, Qiskit Runtime and Backends", presenter: "Kaushik" },
        ],
      },
      { title: "Lunch", time: "Noon–1 pm" },
      { title: "Superdense Coding", time: "1–2 pm", presenter: "Anvesh" },
      { title: "Quantum Teleportation", time: "2–3 pm", presenter: "Srinandan" },
      { title: "Notebook", time: "3–3:30 pm" },
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
          { title: "Oracle", presenter: "Anvesh" },
          { title: "Procedure", presenter: "Srinandan" },
          { title: "Geometric Visualisation", presenter: "Spandan" },
          { title: "Qiskit Implementation", presenter: "Kaushik" },
        ],
      },
    ],
  },
];
