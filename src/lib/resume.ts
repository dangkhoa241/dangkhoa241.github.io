export type ResumeEntry = {
  title: string;
  org: string;
  orgDescription?: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tags?: string[];
};

export type ResumeProject = {
  name: string;
  org: string;
  bullets: string[];
  tech: string;
};

export const resume = {
  phone: "(350) 217-8342",
  summary:
    "Software engineer and MS Computer Science student (graduating December 2026) with 2+ years of full-stack experience building production systems in Java Spring Boot, Vue.js, and PostgreSQL for major Japanese retail chains. Builds data pipelines, serverless AWS apps, and RAG/LLM features, with tests at every level wired into CI.",
  education: [
    {
      title: "MS Computer Science — GPA: 3.86",
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
      orgDescription: "Retail software provider; #1 core-system share among Japan's top 30 drugstore chains",
      start: "Nov. 2022",
      end: "Dec. 2024",
      bullets: [
        "Architected full-stack features for TAURUS, a core retail ERP (purchase ordering, SKU-level inventory, departmental P&L) used by Don Quijote, Welcia, and Sundrug, with Java Spring Boot backends and JavaScript/Vue.js frontends.",
        "Reduced query response times by 40% through SQL tuning, indexing, and schema redesign on PostgreSQL and DB2.",
        "Cut a dashboard stored procedure's runtime from 10 minutes to 30 seconds by isolating the slow join and indexing the key field.",
        "Deployed and maintained services on AWS, automating build, deployment, and monitoring workflows with Shell scripts.",
      ],
      tags: ["Java Spring Boot", "JavaScript", "Vue.js", "PostgreSQL", "DB2", "SQL", "AWS", "Shell", "HTML", "CSS"],
    },
    {
      title: "Software Engineering Intern",
      org: "FPT Telecom",
      orgDescription: "Part of FPT Corporation, one of Vietnam's largest tech companies",
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
    { label: "Frameworks", value: "React.js, Next.js, Vue.js, Node.js, Express, Spring Boot, FastAPI, Tailwind CSS, Hono, D3" },
    { label: "Databases", value: "PostgreSQL, MySQL, MongoDB, DB2, SQL Server, Oracle, ClickHouse, Redis" },
    { label: "Testing & CI/CD", value: "Vitest, Playwright, unit testing, integration testing, end-to-end testing, GitHub Actions" },
    { label: "Cloud & Tools", value: "AWS (Lambda, S3, CloudFront, SNS, DynamoDB, IAM), Docker, Vercel, Git, GitHub, Shell, Claude Code" },
    { label: "AI/ML", value: "PyTorch, Hugging Face Transformers, BERT fine-tuning, NLP, ONNX Runtime, RAG, LLM APIs (Groq)" },
    {
      label: "Concepts",
      value:
        "Object-Oriented Programming (OOP), Data Structures and Algorithms, RESTful APIs, Database Design, Data Pipelines/ETL, Serverless, Infrastructure as Code, Agile/Scrum, LLM Integration, Prompt Engineering, AI Agents",
    },
  ],
  projects: [
    {
      name: "US Weather Forecast Pipeline",
      org: "Personal Project",
      bullets: [
        "Built an end-to-end data pipeline (NWS + Open-Meteo → MongoDB → ClickHouse → Redis → Hono API → React) processing 1.7M+ hourly observations and 3M+ forecast snapshots for 53 US cities since 2023, with incremental loads and data-quality checks.",
        "Deployed it serverless on AWS as infrastructure as code (SAM): Lambda + EventBridge collection and ETL, S3, CloudFront, least-privilege IAM, and public alert sign-ups (SNS filter policies, Turnstile CAPTCHA, DynamoDB rate limits), all at $0 on the free tier.",
        "Compared 4 weather models against a best-match baseline (ECMWF best: 2.0°F average error 1 day ahead) in a D3 dashboard with map drill-down and forecast replay.",
        "Used Claude Code to build and compare 3 versions of 5 key features, keeping the best (Redis caching cut p95 latency 12×); fixed SQL/NoSQL-injection and IAM security flaws; 300+ automated tests in CI.",
      ],
      tech: "Node.js, Hono, TypeScript, React, D3, MongoDB, ClickHouse, Redis, Docker, AWS (Lambda, S3, CloudFront, SNS, DynamoDB, SAM), Cloudflare Turnstile, Vitest",
    },
    {
      name: "RAG-Assisted Natural Language to SQL System",
      org: "Personal Project",
      bullets: [
        "Built and deployed a full-stack RAG assistant (React + FastAPI) that answers plain-English questions about any CSV: BERT routes intent, term-gated retrieval supplies business definitions, and gpt-oss-120b writes SQL, with gpt-oss-20b and rule-based fallbacks.",
        "Raised accuracy on definition-dependent questions from 0% to 95% on a held-out domain, with settings frozen before testing, within 2.5 points of an oracle; diagnosed why naive few-shot RAG lowered accuracy (99.2% → 93.3%): it matched topic, not SQL structure.",
        "Built a SELECT-only SQL safety layer that blocked 13 prompt-injection variants; all 120B benchmark runs cost under $0.25.",
      ],
      tech: "Python, FastAPI, React, TypeScript, BERT, ONNX Runtime, Groq, SQLite, pytest, Vercel, Render",
    },
    {
      name: "CineVibes",
      org: "Personal Project",
      bullets: [
        "Built a full-stack movie platform with CineBot, an LLM assistant grounded in the app's MongoDB catalog via tool use; 57 tests in CI.",
      ],
      tech: "React, Node.js, Express, MongoDB, Vite, JWT Auth, Groq, Vitest, Playwright, GitHub Actions",
    },
  ] as ResumeProject[],
};
