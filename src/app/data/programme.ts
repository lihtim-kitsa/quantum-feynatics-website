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

// Previous-edition programme, preserved as reference until Vol. 4.0 is confirmed.
export const programme: ProgrammeDay[] = [
  {
    "day": "DAY 1",
    "tone": "purple",
    "sessions": [
      {
        "title": "Kickoff",
        "time": "10:30 - 10:45",
        "description": "A brief introduction to the workshop's agenda and a high-level overview of quantum computing and its various applications in science and industry."
      },
      {
        "title": "Speaker Session",
        "time": "11:00 - 12:00",
        "description": "A speaker from IBM will guide participants into the field of quantum computing, offering perspectives on its present state, recent progress, IBM’s roadmap for developing quantum computers, and the applications where it outperforms classical approaches. This session will equip participants with a well-rounded understanding of the domain, spark their interest in the field, and provide an opportunity to have their questions addressed directly."
      },
      {
        "title": "Lunch Break",
        "time": "12:00 - 13:00",
        "description": ""
      },
      {
        "title": "Fundamental of Quantum Computing",
        "time": "13:00 - 16:00",
        "description": "This session introduces the fundamental building blocks of quantum computation, covering the necessary mathematical foundations, single and multi-qubit systems, and the design of quantum circuits. Participants will also be introduced to IBM’s Quantum Computing SDK, Qiskit, which enables them to code and explore quantum circuits in detail while providing tools essential for practical quantum computing applications and beyond."
      }
    ]
  },
  {
    "day": "DAY 2",
    "tone": "blue",
    "sessions": [
      {
        "title": "Working with Qiskit SDK",
        "time": "10:00 - 13:00",
        "description": "A comprehensive, hands-on and theory-guided session on programming with Qiskit, where participants will learn to construct, simulate, and run quantum circuits on a quantum computer. Key topics include using quantum circuit simulators, performing circuit measurements with Qiskit Primitives, circuit transpilation, and exploring both IBM’s real and simulated backends."
      },
      {
        "title": "Lunch Break",
        "time": "13:00 - 14:00",
        "description": ""
      },
      {
        "title": "Expert Panel Discussion",
        "time": "14:00 - 15:00",
        "description": "A moderated discussion featuring a panel of experts in quantum computing. The discussion will explore current technical and practical challenges, emerging trends in research and industry, and potential opportunities for innovation and application. Participants will gain insights from professionals and have the chance to get their questions addressed, fostering a deeper understanding of the field and its future directions."
      },
      {
        "title": "Understanding Quantum Entanglement",
        "time": "15:00 - 16:30",
        "description": "This session delves into quantum entanglement, a fundamental principle that sets quantum systems apart from classical ones. Participants will explore its key properties and learn about various applications that leverage entanglement, highlighting why quantum algorithms achieve capabilities beyond classical methods."
      }
    ]
  },
  {
    "day": "DAY 3",
    "tone": "pink",
    "sessions": [
      {
        "title": "Introduction to Quantum Error Correction",
        "time": "10:00 - 12:00",
        "description": "In the current NISQ (Noisy Intermediate-Scale Quantum) era, quantum computers are highly sensitive to environmental noise, which can cause errors or decoherence. This session introduces the fundamental concepts of quantum error correction and the techniques used to protect quantum information in such noisy, intermediate-scale devices."
      },
      {
        "title": "Quantum Hackathon",
        "time": "12 HRS",
        "description": "Test your knowledge in a challenging hackathon, applying the concepts and skills you’ve gained throughout the workshop."
      }
    ]
  }
];
