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
  repoUrl?: string;
  liveUrl?: string;
};

export const resume = {
  phone: "(350) 217-8342",
  summary:
    "Software engineer and MS Computer Science student (graduating December 2026) with 2+ years of professional full-stack experience delivering production systems in Java Spring Boot, Vue.js, and PostgreSQL for major Japanese retail chains, with shipped LLM-integration work and a testing-first approach across unit, integration, and end-to-end suites wired into CI.",
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
      title: "BS Information Systems",
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
        "Architected and delivered full-stack features for TAURUS, a core retail ERP covering purchase ordering, SKU-level inventory, and departmental P&L, used by major Japanese chains including Don Quijote, Welcia, and Sundrug, built with Java Spring Boot and responsive frontends in JavaScript and Vue.js.",
        "Reduced query response times by 40% through SQL tuning, indexing, and schema redesign on PostgreSQL and DB2, supporting high-volume transaction processing.",
        "Deployed and maintained services on AWS, automating build, deployment, and monitoring workflows with Shell scripting to cut manual release effort.",
        "Collaborated with product and QA counterparts in an Agile workflow, contributing to sprint planning and peer code review.",
        "Debugged and resolved production issues reported by client teams, tracing defects across the Spring Boot backend and Vue.js frontend.",
      ],
      tags: ["Java Spring Boot", "JavaScript", "Vue.js", "PostgreSQL", "DB2", "SQL", "AWS", "Shell", "HTML", "CSS"],
    },
    {
      title: "Software Intern",
      org: "FPT Telecom",
      start: "Dec. 2021",
      end: "June 2022",
      bullets: [
        "Built RESTful APIs with Node.js and Express powering POP management dashboards for real-time monitoring of telecom infrastructure across multiple POP stations.",
        "Developed interactive React and Next.js dashboards with Highcharts visualizations, backed by MongoDB schemas designed for efficient querying of monitoring data.",
      ],
      tags: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Highcharts"],
    },
  ] satisfies ResumeEntry[],
  skills: [
    { label: "Languages", value: "JavaScript, TypeScript, Python, Java, C++, C#, SQL, HTML, CSS" },
    { label: "Frameworks", value: "React.js, Next.js, Vue.js, Node.js, Express, Spring Boot, Tailwind CSS" },
    { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, DB2, SQL Server, Oracle" },
    { label: "Testing & CI/CD", value: "Vitest, Playwright, unit testing, integration testing, end-to-end testing, GitHub Actions" },
    { label: "Cloud & Tools", value: "AWS, Git, GitHub, Shell scripting, Jupyter Notebook, Claude Code (AI-assisted development)" },
    {
      label: "Concepts",
      value:
        "Object-Oriented Programming (OOP), Data Structures and Algorithms, RESTful APIs, Database Design, Agile/Scrum, Machine Learning, NLP, LLM Integration, Prompt Engineering, AI Agents",
    },
  ],
  projects: [
    {
      name: "CineVibes",
      org: "Personal project",
      description:
        "Full-stack movie discussion platform with spoiler-aware comment threads, trending rankings, and CineBot, an in-app AI assistant (Groq-hosted LLM) grounded in the app's MongoDB catalog through a search tool.",
      testing:
        "Wrote 57 automated tests: 51 Vitest API and integration tests across 4 suites, plus 6 Playwright end-to-end flows, running alongside lint and build on every push and pull request through GitHub Actions.",
      tech: "React, Node.js, Express, MongoDB, Vite, JWT Auth, Groq, Vitest, Playwright, GitHub Actions",
      repoUrl: "https://github.com/dangkhoa241/cinevibes",
      liveUrl: "https://cinevibes-rho.vercel.app/",
    },
    {
      name: "ML-Assisted Natural Language to SQL Query System",
      org: "Personal project",
      description:
        "CSV-agnostic natural language to SQL system: users upload any CSV and ask questions in plain English. Pairs a BERT intent classifier fine-tuned on 1,250 labeled examples spanning 14 domains and 5 query intents with a self-built, schema-aware SQL generator and no external LLM API calls.",
      tech: "Python, BERT (bert-base-uncased), PyTorch, Streamlit, SQLite, Pandas, Matplotlib, Seaborn",
      repoUrl: "https://github.com/dangkhoa241/ML-assisted-natural-language-to-SQL-query-system",
      liveUrl: "https://ml-assisted-natural-language-to-sql-query-system.streamlit.app/",
    },
    {
      name: "ExpenseTracker",
      org: "Personal project",
      description:
        "Client-only expense tracker (filtering, budgets, dashboard analytics, CSV/JSON/PDF export across 4 report types) end-to-end with Claude Code: compared three parallel implementations of the export feature, fixed a CSV-injection vulnerability the comparison surfaced, and covered the aggregation modules with 31 unit tests.",
      tech: "Next.js, React, TypeScript, Tailwind CSS, Recharts, jsPDF, Vitest",
      repoUrl: "https://github.com/dangkhoa241/expense-tracker-ai",
      liveUrl: "https://expense-tracker-ai-sigma.vercel.app",
    },
  ] as ResumeProject[],
};
