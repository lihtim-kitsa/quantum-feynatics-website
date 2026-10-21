export interface Session {
  title: string;
  time: string;
  description: string;
}
export interface ProgrammeDay {
  day: string;
  tone: "purple" | "blue" | "pink";
  sessions: Session[];
}

// Confirmed session formats; dates, timings, and speaker names remain unannounced.
export const programme: ProgrammeDay[] = [
  {
    day: "EXPERT TALKS",
    tone: "purple",
    sessions: [
      {
        title: "QML & Qiskit with Experts from IBM",
        time: "Timings TBA",
        description: "Experts from IBM will conduct talks on quantum machine learning and Qiskit. Individual talk topics and the speaker lineup will be announced.",
      },
    ],
  },
  {
    day: "HANDS-ON QML",
    tone: "blue",
    sessions: [
      {
        title: "Quantum Machine Learning Sessions",
        time: "Timings TBA",
        description: "Explore QML through hands-on sessions conducted by experts from IBM. Session exercises, prerequisites, and setup instructions will be shared before the event.",
      },
    ],
  },
  {
    day: "HANDS-ON QISKIT",
    tone: "pink",
    sessions: [
      {
        title: "Practical Qiskit Sessions",
        time: "Timings TBA",
        description: "Put your learning into practice in hands-on Qiskit sessions conducted by experts from IBM. The detailed session plan and software requirements will be announced.",
      },
    ],
  },
];
