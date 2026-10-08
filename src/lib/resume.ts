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
    "Software engineer and MS Computer Science student (graduating December 2026) with 2+ years of professional full-stack experience building production systems in Java Spring Boot, JavaScript, Vue.js, and PostgreSQL for major Japanese retail chains. Builds data pipelines and serverless AWS applications, ships LLM-integrated features, and writes tests at every level (unit, integration, end-to-end) wired into CI.",
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
      title: "Full-Stack Software Engineer",
      org: "UNICCS Co., Ltd",
      start: "Nov. 2022",
      end: "Dec. 2024",
      bullets: [
        "Architected full-stack features for TAURUS, a core retail ERP (purchase ordering, SKU-level inventory, departmental P&L) used by Don Quijote, Welcia, and Sundrug, with Java Spring Boot backends and JavaScript/Vue.js frontends.",
        "Reduced query response times by 40% through SQL tuning, indexing, and schema redesign on PostgreSQL and DB2.",
        "Cut a dashboard stored procedure's runtime from 10 minutes to 30 seconds by isolating the slow join and indexing the key field.",
        "Deployed and maintained services on AWS, automating build, deployment, and monitoring workflows with Shell scripts.",
        "Debugged and resolved production issues reported by client teams, tracing defects across the Spring Boot backend and Vue.js frontend.",
      ],
      tags: ["Java Spring Boot", "JavaScript", "Vue.js", "PostgreSQL", "DB2", "SQL", "AWS", "Shell", "HTML", "CSS"],
    },
    {
      title: "Software Engineering Intern",
      org: "FPT Telecom",
      start: "Dec. 2021",
      end: "June 2022",
      bullets: [
        "Built Node.js/Express REST APIs for real-time monitoring of POP stations across FPT Telecom's Southern Vietnam network.",
        "Developed React/Next.js dashboards with Highcharts, backed by MongoDB schemas designed for fast monitoring queries.",
      ],
      tags: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "Highcharts"],
    },
  ] satisfies ResumeEntry[],
  skills: [
    { label: "Languages", value: "JavaScript, TypeScript, Python, Java, C++, C#, SQL, HTML, CSS" },
    { label: "Frameworks", value: "React.js, Next.js, Vue.js, Node.js, Express, Spring Boot, Tailwind CSS, Hono, D3" },
    { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, DB2, SQL Server, Oracle, ClickHouse, Redis" },
    { label: "Testing & CI/CD", value: "Vitest, Playwright, unit testing, integration testing, end-to-end testing, GitHub Actions" },
    { label: "Cloud & Tools", value: "AWS (Lambda, S3, CloudFront, SNS, IAM), Docker, Vercel, Git, GitHub, Shell, Claude Code" },
    {
      label: "Concepts",
      value:
        "Object-Oriented Programming (OOP), Data Structures and Algorithms, RESTful APIs, Database Design, Data Pipelines/ETL, Serverless, Infrastructure as Code, Agile/Scrum, Machine Learning, NLP, LLM Integration, Prompt Engineering, AI Agents",
    },
  ],
  projects: [
    {
      name: "US Weather Forecast Pipeline",
      org: "Personal project",
      description:
        "End-to-end data platform (NWS + Open-Meteo → MongoDB → ClickHouse → Redis → Hono API → React/D3) holding 1.7M+ hourly observations and 3M+ forecast snapshots for 53 US cities, with idempotent incremental loads and data-quality checks. Deployed serverless on AWS as infrastructure as code (SAM): Lambda + EventBridge scheduled collection and ETL, S3 archive, live dashboard data via CloudFront, SNS heat alerts, and least-privilege IAM, all at $0 on the free tier. Measures forecast accuracy of NWS and 4 weather models (ECMWF most accurate: 2.0°F average error 1 day ahead), with a forecast replay and a D3 dashboard with US map → city → month → day drill-down.",
      testing:
        "Directed Claude Code to build 3 versions of each of 5 key features and kept the best each time (Redis caching cut p95 latency 12×); fixed SQL/NoSQL-injection and IAM flaws from security reviews; 209 tests in CI.",
      tech: "Node.js, Hono, TypeScript, React, D3, MongoDB, ClickHouse, Redis, Docker, AWS (Lambda, S3, CloudFront, SNS, SAM), Vitest, Playwright",
      repoUrl: "https://github.com/dangkhoa241/us-weather-pipeline",
      liveUrl: "https://us-weather-pipeline.vercel.app",
    },
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
      name: "RAG-Assisted Natural Language to SQL System",
      org: "Personal project",
      description:
        "Routes each question by intent with a fine-tuned BERT model, retrieves only the matching business-glossary definitions (e.g., \"ARR\", \"active account\"), and has gpt-oss-120b generate the SQL, falling back to gpt-oss-20b and a rule-based generator. On a held-out domain never used for tuning (settings frozen before testing), accuracy on definition-dependent questions rose from 0% to 95%, within 2.5 points of an oracle.",
      testing:
        "Diagnosed why naive few-shot RAG lowered accuracy (99.2% to 93.3%): retrieval matched the question's topic, not the SQL structure it needed. A SELECT-only SQL safety layer blocked 13 prompt-injection variants in tests. Exported BERT to int8 ONNX Runtime, cutting serving memory from 754 MB to 243 MB to run on free hosting.",
      tech: "Python, FastAPI, React, TypeScript, BERT, ONNX Runtime, RAG, Groq, SQLite, Vercel, Render",
      repoUrl: "https://github.com/dangkhoa241/RAG-assisted-natural-language-to-SQL-query-system",
      liveUrl: "https://nl2sql-assistant.vercel.app",
    },
  ] as ResumeProject[],
};
