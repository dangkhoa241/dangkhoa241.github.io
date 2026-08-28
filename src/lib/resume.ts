export type ResumeEntry = {
  title: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tags?: string[];
};

export type ResumeProject = {
  name: string;
  org: string;
  description: string;
  testing?: string;
  tech: string;
  responsibilities?: string;
};

export const resume = {
  phone: "(350) 217-8342",
  summary:
    "Software engineer and MS Computer Science student (GPA 3.76, graduating December 2026) at the University of the Pacific, with 2+ years of professional experience across full-stack development, databases, and AI-powered applications. Strong foundation in data structures & algorithms, database design, and automated testing/CI pipelines. Looking for a Software Engineering role where I can keep growing and contribute to impactful products.",
  education: [
    {
      title: "MS Computer Science — GPA: 3.76",
      org: "University of the Pacific",
      location: "Stockton, CA",
      start: "Jan. 2025",
      end: "Expected Dec. 2026",
      bullets: [],
    },
    {
      title: "BS Information System",
      org: "University of Science, VNU–HCM",
      location: "Vietnam",
      start: "2018",
      end: "2022",
      bullets: [],
    },
  ] satisfies ResumeEntry[],
  experience: [
    {
      title: "Software Engineer",
      org: "UNICCS Co., Ltd",
      start: "Nov. 2022",
      end: "Dec. 2024",
      bullets: [
        "Architected and implemented backend services and application frameworks in Java Spring Boot (object-oriented design) with responsive Vue.js frontends, delivering full-stack features for retail management systems used by clients in Japan.",
        "Improved system performance and SQL query efficiency through query tuning, indexing, and schema design on PostgreSQL and DB2, supporting high-volume transaction processing.",
        "Deployed and maintained services on AWS cloud infrastructure, collaborating with a cross-functional team to keep the platform stable, scalable, and production-ready; automated deployment, build, and monitoring workflows with Shell scripting.",
      ],
      tags: ["JavaScript", "HTML", "CSS", "PostgreSQL", "DB2", "Shell", "VueJS", "SQL", "Java Spring Boot", "AWS Cloud Service"],
    },
    {
      title: "Software Intern",
      org: "FPT Telecom",
      start: "Dec. 2021",
      end: "June 2022",
      bullets: [
        "Built and optimized RESTful APIs using Node.js and Express to power POP management dashboards, enabling real-time monitoring of telecom infrastructure.",
        "Developed interactive dashboards with React and Next.js, integrating Highcharts to visualize statistical data and infrastructure status across multiple POP stations.",
        "Designed and integrated MongoDB schemas to store and query telecom monitoring data efficiently.",
      ],
      tags: ["React.js", "Next.js", "Express", "Node.js", "MongoDB", "Highcharts"],
    },
  ] satisfies ResumeEntry[],
  skills: [
    { label: "Languages", value: "Java, JavaScript, Python, C++, C#, PHP, HTML, CSS, SQL, TSQL" },
    { label: "Frameworks", value: "React.js, Next.js, Vue.js, Node.js, Express, Spring Boot, Bootstrap" },
    { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, DB2, SQL Server, Oracle" },
    { label: "Testing & CI/CD", value: "Vitest, Playwright, Cypress, GitHub Actions" },
    { label: "Tools", value: "Git, GitHub, SVN, Jira, Trello, AWS, Shell, Highcharts, Jupyter Notebook" },
    {
      label: "Concepts",
      value:
        "Object-Oriented Programming/Design, Data Structures & Algorithms, RESTful APIs, Database Design, Full-Stack Development, LLM Integration & Prompt Engineering, Agentic/Tool-Use AI Systems",
    },
  ],
  projects: [
    {
      name: "CineVibes",
      org: "Personal project",
      description:
        "Full-stack movie discussion platform with spoiler-aware, category-based comment threads, trending rankings, and CineBot, an in-app AI chat assistant (Groq-hosted LLM) for movie recommendations and trivia, grounded in the app's own MongoDB catalog via a search tool.",
      testing:
        "Designed the test strategy and automation framework: unit/integration tests (Vitest), end-to-end tests (Playwright/Cypress), and a GitHub Actions pipeline running the full test suite, lint, and build on every push/PR.",
      tech: "React, Node.js, Express, MongoDB, Vite, JWT Auth, Groq, Vitest, Playwright, Cypress, GitHub Actions",
    },
    {
      name: "ML-Assisted Natural Language to SQL Query System",
      org: "Personal project",
      description:
        "CSV-agnostic natural language to SQL system: users upload any CSV and ask questions in plain English. Pairs a BERT intent classifier (fine-tuned on 1,250 examples across 14 domains) with a self-built, schema-aware rule-based SQL generator — no external LLM API calls.",
      tech: "Python, BERT (bert-base-uncased), PyTorch, Streamlit, SQLite, Pandas, Matplotlib, Seaborn",
    },
    {
      name: "POP Management System",
      org: "FPT Telecom",
      description:
        "Dashboard to manage a telecom station system: statistics, POP status, infrastructure problem monitoring, and data visualization.",
      tech: "ReactJS, NextJS, Express, NodeJS, MongoDB, Highcharts",
    },
  ] as ResumeProject[],
};
