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
  responsibilities: string;
};

export const resume = {
  phone: "(350) 217-8342",
  summary:
    "A junior developer with a desire to become a good software engineer, seeking an organization that can provide a variety of opportunities and allow me to expand my knowledge and enhance my skills while working towards achieving the organizational goals.",
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
        "Automated deployment, build, and monitoring workflows with Shell scripting, reducing manual intervention and deployment errors.",
        "Deployed and maintained services on AWS cloud infrastructure, collaborating with the team to improve reliability and scalability.",
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
        "Designed and integrated MongoDB schemas to store and query telecom monitoring data efficiently, supporting fast dashboard rendering.",
        "Collaborated closely with backend and frontend teams to identify and resolve system monitoring issues, improving overall dashboard reliability and user experience.",
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
    {
      label: "Soft Skills",
      value:
        "Communication and team collaboration, problem-solving and critical thinking, time management and organization, adaptability and openness to feedback",
    },
  ],
  projects: [
    {
      name: "Web Taurus – Next Taurus",
      org: "UNICCS Co., Ltd",
      description:
        "Developing sales, inventory, and returns management systems for retail companies in Japan.",
      tech: "JavaScript, HTML, CSS, PostgreSQL, DB2, Java frameworks",
      responsibilities:
        "Developed and maintained the product, coordinated with the team leader to design solutions meeting end-user requirements, and improved performance through SQL and feature optimization.",
    },
    {
      name: "POP Management System",
      org: "FPT Telecom",
      description:
        "Built a dashboard to manage a telecom station system — statistics, POP status, infrastructure monitoring, and data visualization.",
      tech: "React.js, Next.js, Express, Node.js, MongoDB, Highcharts",
      responsibilities: "Built RESTful APIs, implemented interfaces from design, and handled data visualization.",
    },
    {
      name: "LLM-Powered Natural Language Query System for Healthcare",
      org: "Course project",
      description:
        "An end-to-end healthcare analytics system that lets users query structured medical data using natural language, auto-generating SQL queries, tables, and visualizations.",
      tech: "Python, BERT (bert-base-uncased), Streamlit, SQLite, Pandas, Matplotlib, Seaborn",
      responsibilities:
        "Designed and trained an intent classification model, implemented rule-based NL-to-SQL generation, performed data preprocessing, built an interactive Streamlit dashboard, and integrated automated chart generation.",
    },
  ] satisfies ResumeProject[],
};
