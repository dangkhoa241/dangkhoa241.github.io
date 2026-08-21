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
  tech: string;
  responsibilities?: string;
};

export const resume = {
  phone: "(350) 217-8342",
  summary:
    "Software engineer and MS Computer Science student at the University of the Pacific, with experience across full-stack development, databases, and AI-powered applications. Looking for a Software Engineering role where I can keep growing and contribute to impactful products.",
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
        "Developed and optimized product features across the full stack, improving system performance and SQL query efficiency for retail management systems used by clients in Japan.",
        "Designed and implemented backend services and application frameworks using Java Spring Boot, and built responsive frontend interfaces with Vue.js.",
        "Worked with PostgreSQL and DB2, performing SQL tuning, query optimization, and database schema design to support high-volume transaction processing.",
        "Deployed and maintained services on AWS cloud infrastructure, collaborating with the team to improve reliability and scalability. Automated deployment, build, and monitoring workflows with Shell scripting.",
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
    { label: "Tools", value: "Git, GitHub, SVN, Jira, Trello, AWS, Shell, Highcharts, Jupyter Notebook" },
    { label: "Concepts", value: "Data Structures & Algorithms, OOP, RESTful APIs, Database Design" },
  ],
  projects: [
    {
      name: "POP Management System",
      org: "FPT Telecom",
      description:
        "Built a dashboard to manage a telecom station system — statistics, POP status, infrastructure monitoring, and data visualization.",
      tech: "React.js, Next.js, Express, Node.js, MongoDB, Highcharts",
      responsibilities: "Built RESTful APIs, implemented interfaces from design, and handled data visualization.",
    },
    {
      name: "CineVibes",
      org: "Personal project",
      description:
        "A full-stack movie discussion platform with spoiler-aware, category-based comment threads, trending rankings, and CineBot, an in-app AI chat assistant (Groq-hosted LLM) for movie recommendations and trivia, grounded in the app's own MongoDB catalog via a search tool.",
      tech: "React, Node.js, Express, MongoDB, Vite, JWT Auth, Groq, Vitest, Playwright",
    },
    {
      name: "ML-Assisted Natural Language to SQL Query System",
      org: "Personal project",
      description:
        "A CSV-agnostic natural language to SQL system: users upload any CSV and ask questions in plain English. Pairs a BERT intent classifier (fine-tuned on 1,250 examples across 14 domains) with a self-built, schema-aware rule-based SQL generator — no external LLM API calls.",
      tech: "Python, BERT (bert-base-uncased), Streamlit, SQLite, Pandas, Matplotlib, Seaborn",
    },
  ] satisfies ResumeProject[],
};
