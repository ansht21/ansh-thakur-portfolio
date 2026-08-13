export const portfolioData = {
  name: "Ansh Thakur",
  title: "Data Analyst | Python, SQL, Power BI & Excel | Data Analytics & Business Intelligence",
  tagline: "Turning raw data into reliable analysis, clear dashboards, and actionable business insights.",
  email: "ansht1194@gmail.com",
  phone: "9665895546",
  linkedin: "https://www.linkedin.com/in/ansh-thakur-5407192b4/",
  portfolio: "https://ansh-thakur.netlify.app/",
  drive: "https://drive.google.com/drive/folders/1N7W-ZWuNlb0WFUhfyA_O1Pp_qg2wmOvW?usp=sharing",
  gitlab: "https://gitlab.com/ansht_121/data-analytics",

  about: {
    bio: "B.Sc. IT graduate with a Data Analytics internship at Unified Mentor. Proficient in Python (Pandas, NumPy), SQL (MySQL, PostgreSQL), Power BI, and Advanced Excel. Hands-on experience in data cleaning, EDA, KPI reporting, and dashboard development. Strong analytical thinking with proven ability to translate complex datasets into clear business insights and actionable recommendations.",
    highlights: [
      "Information Technology background with data analytics specialization",
      "Data Analytics internship at Unified Mentor Pvt. Ltd.",
      "Python, SQL, Power BI, Advanced Excel proficiency",
      "Data cleaning, EDA, KPI reporting, dashboard development",
      "Strong analytical and problem-solving ability"
    ]
  },

  skills: [
    {
      category: "Languages",
      items: [
        "Python",
        "SQL",
        "HTML",
        "CSS"
      ]
    },
    {
      category: "Analytics",
      items: [
        "Data Cleaning",
        "Data Validation",
        "EDA",
        "Statistical Analysis",
        "KPI Reporting",
        "Business Intelligence",
        "Data Visualization",
        "Business Understanding",
        "Problem Solving"
      ]
    },
    {
      category: "Libraries",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn"
      ]
    },
    {
      category: "BI / Tools",
      items: [
        "Power BI",
        "Excel",
        "MySQL",
        "PostgreSQL",
        "Google Colab",
        "Git",
        "GitLab"
      ]
    },
    {
      category: "Development",
      items: [
        "Jupyter Notebook",
        "VS Code",
        "PowerShell",
        "Bash"
      ]
    }
  ],

  experience: [
    {
      role: "Data Analytics Intern",
      company: "Unified Mentor Pvt. Ltd.",
      period: "Sep 2025 – Dec 2025",
      responsibilities: [
        "Performed data cleaning, transformation, and validation on large datasets using Python (Pandas) and Excel",
        "Built automated reporting workflows and KPI dashboards for business stakeholders",
        "Applied SQL for data extraction, joins, subqueries, and window functions",
        "Developed Power BI dashboards with DAX measures for executive reporting",
        "Collaborated with cross-functional teams to gather requirements and document analytical processes",
        "Improved reporting efficiency through structured data analysis workflows and documentation"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "Sardar Patel Mahavidyalaya, Chandrapur",
      university: "Gondwana University, Maharashtra",
      result: "CGPA: 7.26/10",
      period: "2022 – 2025"
    }
  ],

  projects: [
    {
      id: "supply-chain",
      title: "Supply Chain Inventory & Performance Optimization",
      shortProblem: "Analyze 7,991 orders across 6 warehouses to optimize inventory allocation and delivery performance.",
      tech: ["Python", "Pandas", "openpyxl", "MySQL", "Advanced Excel", "VBA", "Power BI", "DAX"],
      metrics: [
        { label: "Orders Analyzed", value: "7,991" },
        { label: "SKUs", value: "47" },
        { label: "Revenue", value: "~$82.7M" },
        { label: "Profit", value: "~$30.9M" }
      ],
      methodology: [
        "Python data-cleaning/analysis pipeline with Pandas and openpyxl",
        "SQL analysis with variance decomposition and warehouse-level segmentation",
        "Excel/VBA automated dashboard with dynamic KPI calculations as primary deliverable",
        "Power BI model with DAX measures for executive reporting",
        "ABC classification: 35 of 47 products drive 78.7% revenue",
        "Delivery-time variance analysis: only 0.08% between warehouses (systemic issue)"
      ],
      findings: [
        "Only 0.08% of delivery-time variance is between warehouses — issue is systemic, not warehouse-specific",
        "ABC classification reveals non-Pareto distribution: 74% of SKUs drive ~79% revenue",
        "Warehouse-level analysis identifies consistent bottlenecks across all locations",
        "Discounts at 20%+ return 38.28% margin (higher than 5–10% band) — no blanket cap needed",
        "Margin stable at ~37% over 32 months with no downward drift"
      ],
      recommendations: [
        "Implement system-wide delivery process standardization",
        "Focus inventory optimization on top 35 revenue-driving SKUs",
        "Redesign warehouse allocation logic based on demand patterns, not proximity",
        "Do not impose blanket discount cap — deeper discounts land on higher-margin products",
        "Investigate 2020 growth stall: revenue flattened to +1.0% YoY while margin held"
      ],
      image: "/supply-chain-dashboard.png",
      drive: "https://drive.google.com/drive/folders/1N7W-ZWuNlb0WFUhfyA_O1Pp_qg2wmOvW?usp=sharing",
      repo: "https://gitlab.com/ansht_121/data-analytics/-/tree/main/supply-chain-performance-analysis"
    },
    {
      id: "ride-demand",
      title: "Ride Demand Forecasting & Revenue Analytics",
      shortProblem: "Analyze 35,000+ ride records to uncover demand patterns, revenue drivers, and pricing insights.",
      tech: ["Python", "SQL", "MySQL", "Power BI", "Advanced Excel", "Pandas", "Matplotlib", "Seaborn"],
      metrics: [
        { label: "Ride Records", value: "35,000+" },
        { label: "Peak Demand", value: "5–7 PM (31.2%)" },
        { label: "Airport Volume", value: "39.6%" },
        { label: "Airport Revenue", value: "54.8%" }
      ],
      methodology: [
        "SQL cleaning with ROW_NUMBER() deduplication, null validation, CTEs, window functions",
        "Python EDA for demand analysis, fare analysis, revenue analysis, airport analysis",
        "Vehicle-category analysis and driver rating correlation",
        "Power BI dashboard for executive reporting and trend visualization",
        "Advanced Excel for supplementary analysis and validation"
      ],
      findings: [
        "5–7 PM carries 31.2% of daily demand; surge starts at 5 PM (+138% hour-over-hour), not 6 PM",
        "Airport trips: 39.6% of volume but 54.8% of revenue (1.85× fare premium)",
        "Fare-per-km: ₹22.06–₹22.41 after controlling for distance",
        "Uber Black revenue/km ₹40.06 vs Pool ₹14.08 (2.8×); UberX leads total revenue",
        "Driver rating vs fare: negative correlation (−0.13) explained by trip distance, not quality",
        "No weekend fare effect (₹389 vs ₹386, <1% gap); no seasonality (11% month spread)"
      ],
      recommendations: [
        "Optimize driver allocation for 5–7 PM peak window; launch incentives by 4:30 PM",
        "Prioritize airport trip acquisition for revenue growth",
        "Refine pricing model using fare-per-km benchmarks by vehicle category",
        "Investigate long-trip rider experience (lower ratings on 18+ km trips)",
        "Maintain city-wide coverage — 4 of 5 zones needed for 80% revenue"
      ],
      image: "/uber-dashboard.png",
      drive: "https://drive.google.com/drive/folders/1N7W-ZWuNlb0WFUhfyA_O1Pp_qg2wmOvW?usp=sharing",
      repo: "https://gitlab.com/ansht_121/data-analytics/-/tree/main/uber-trip-demand-analysis"
    }
  ],

  keyInsights: [
    { value: "7,991", label: "Orders Analyzed" },
    { value: "47", label: "SKUs" },
    { value: "35K+", label: "Ride Records" },
    { value: "31.2%", label: "5–7 PM Demand" },
    { value: "39.6%", label: "Airport Trip Volume" },
    { value: "54.8%", label: "Airport Revenue" }
  ],

  workflow: [
    { step: "DATA", description: "Collect & ingest raw data from multiple sources" },
    { step: "CLEANING & VALIDATION", description: "Transform, deduplicate, and validate data quality" },
    { step: "SQL / PYTHON", description: "Query, aggregate, and engineer features" },
    { step: "EDA", description: "Explore patterns, distributions, and relationships" },
    { step: "DASHBOARDS", description: "Build interactive visualizations in Power BI & Excel" },
    { step: "BUSINESS INSIGHTS", description: "Translate findings into actionable recommendations" },
    { step: "RECOMMENDATIONS", description: "Deliver data-driven decisions to stakeholders" }
  ],

  certifications: [
    {
      title: "Deloitte Data Analytics Job Simulation",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Pn2fgx9uC9r33pJRp_1750857267981_completion_certificate.pdf",
      issuer: "Deloitte"
    },
    {
      title: "Tata GenAI Powered Data Analytics Job Simulation",
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_Pn2fgx9uC9r33pJRp_1752581188250_completion_certificate.pdf",
      issuer: "Tata"
    },
    {
      title: "British Airways Data Science Job Simulation",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_Pn2fgx9uC9r33pJRp_1754161186122_completion_certificate.pdf",
      issuer: "British Airways"
    }
  ],

  resumeFile: "Ansh_Thakur_Data_Analyst_Resume.pdf"
};