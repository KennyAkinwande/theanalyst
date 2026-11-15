/* =====================================================================
   PORTFOLIO CONTENT  —  edit this file to update the website
   ---------------------------------------------------------------------
   Everything in the Skills, Experience, Projects, "How I work",
   and "Selected results" sections comes from this file.

   Rules of thumb for editing:
   • Text goes between quotes:  "like this"
   • Every item in a list ends with a comma
   • To hide an optional link or file, leave it empty:  ""
   • Save the file, then refresh the browser to see changes

   The Hero and About text lives directly in index.html
   (search for "EDIT:" in that file).
   ===================================================================== */

const portfolioData = {

  /* ------------------------------------------------------------------
     1. PROFILE & CONTACT
     Used in the navigation, hero, contact section and footer.
     ------------------------------------------------------------------ */
  profile: {
    name: "Kehinde (Kenny) Akinwande",
    shortName: "Kenny Akinwande",
    title: "Health Tech Business Analyst | Project Manager | Data & Process Improvement Analyst",
    location: "Ontario, Canada",
    email: "kendozman@yahoo.com",
    linkedin: "https://www.linkedin.com/in/kenny-akinwande",
    github: "https://github.com/KennyAkinwande",

    // Your CV, shown on the site as pictures of each page (view only, no download button).
    // To update it: save each page of your new CV as an image, put the images in
    // assets/documents/resume/ and list them here in page order. See README section 5.
    resume: "resume.html",
    resumePages: [
      "assets/documents/resume/resume-page-1.webp",
      "assets/documents/resume/resume-page-2.webp",
      "assets/documents/resume/resume-page-3.webp"
    ],
    resumeLabel: "View CV",

    // Your public Formspree endpoint (safe to publish — it is not a password).
    formspreeEndpoint: "https://formspree.io/f/mrpqeajv"
  },

  /* ------------------------------------------------------------------
     1b. HERO EXTRAS
     ------------------------------------------------------------------ */
  // Small badge above your name. Change to e.g. "Open to opportunities · Ontario, Canada" if you like.
  heroBadge: "Ontario, Canada",

  // The words that type, hold, erase and rotate after "I turn business problems into ..."
  // Keep every phrase between about 16 and 22 characters so each one fits on a single
  // line on a phone. Add, remove or reorder freely; a single phrase is typed once and stays.
  heroTypedPhrases: [
    "operational solutions.",
    "scalable workflows.",
    "data-driven outcomes.",
    "clinical efficiency.",
    "measurable impact."
  ],

  // The words that form the ring around your photo, in order (clockwise from the top).
  // The text is sized automatically so the ring always closes; four to six short phrases look best.
  heroTags: ["Business Analysis", "Project Management", "Data & Process Improvement", "Clinical Research", "Healthcare Leadership"],

  // Scrolling strip of skills under the hero (taken from your competencies)
  highlights: [
    "Requirements Elicitation",
    "Stakeholder Engagement",
    "Process Mapping",
    "Gap & Root Cause Analysis",
    "User Stories & Acceptance Criteria",
    "UAT",
    "Clinical Workflow Optimization",
    "Healthcare Data Analysis",
    "SQL",
    "Power BI",
    "Microsoft Excel",
    "Jira",
    "Agile & Waterfall"
  ],

  // Cards beside the About text
  aboutStats: [
    { value: "4+", label: "Years in project delivery and business analysis" },
    { value: "300+", label: "Healthcare professionals and leaders taught and mentored" },
    { value: "BA", label: "Business analysis" },
    { value: "PM", label: "Project management" }
  ],

  /* ------------------------------------------------------------------
     2. CORE COMPETENCIES
     style: "list"  → shown as a two-column list
     style: "chips" → shown as small tags (good for tools)
     ------------------------------------------------------------------ */
  competencies: [
    {
      group: "Business analysis",
      style: "list",
      items: [
        "Business Requirements Elicitation & Documentation",
        "Stakeholder Engagement & Management",
        "Business Process Analysis & Mapping",
        "Requirements Gathering, Analysis & Validation",
        "Functional & Non-Functional Requirements",
        "Gap Analysis & Root Cause Analysis",
        "Business Process Improvement & Optimization",
        "Solution Assessment & Recommendations",
        "Use Case Development & User Stories",
        "Acceptance Criteria & Requirements Traceability",
        "Workflow Analysis & Documentation",
        "Cross-Functional Collaboration"
      ]
    },
    {
      group: "Data & analytics",
      style: "list",
      items: [
        "Data Collection, Cleaning & Validation",
        "Data Analysis & Interpretation",
        "Healthcare Data Analysis",
        "Performance Measurement & KPI Monitoring",
        "Data Quality Assessment & Improvement",
        "Research & Evidence-Based Analysis",
        "Trend Identification & Reporting",
        "Process Performance Analysis",
        "Data-Driven Decision Support",
        "Continuous Quality Improvement"
      ]
    },
    {
      group: "Tools",
      style: "chips",
      items: [
        "Microsoft Excel",
        "Microsoft Word & PowerPoint",
        "Microsoft Visio",
        "Microsoft Teams",
        "SQL",
        "Power BI",
        "Jira",
        "Azure DevOps",
        "SharePoint",
        "Microsoft Forms"
      ]
    },
    {
      group: "Methodologies & frameworks",
      style: "list",
      items: [
        "Agile Project Management",
        "Waterfall Project Management",
        "Hybrid Project Delivery",
        "Business Process Modelling",
        "Design Thinking",
        "Requirements Engineering",
        "Continuous Improvement",
        "Root Cause Analysis",
        "Evidence-Based Practice",
        "Quality Improvement Methodologies",
        "Change Management",
        "Project Lifecycle Management"
      ]
    },
    {
      group: "Healthcare & professional",
      style: "list",
      items: [
        "Healthcare Operations Management",
        "Clinical Workflow Optimization",
        "Health Technology & Digital Health",
        "Clinical Education & Professional Development",
        "Research Coordination & Collaboration",
        "Training, Facilitation & Mentorship",
        "Healthcare Stakeholder Engagement",
        "Project Coordination & Delivery",
        "Strategic Problem-Solving",
        "Technical & Business Documentation",
        "Communication & Knowledge Translation",
        "Remote Consulting & Cross-Functional Team Collaboration"
      ]
    }
  ],

  /* ------------------------------------------------------------------
     3. PROFESSIONAL EXPERIENCE  (most recent first)
     ------------------------------------------------------------------ */
  experience: [
    {
      company: "AMDARI",
      role: "Healthcare Business Analyst",
      location: "Edmonton, Alberta, Canada (Remote)",
      start: "May 2026",
      end: "Present",
      summary: "Supporting healthcare transformation initiatives through business requirements analysis, clinical workflow optimization, stakeholder engagement and data-driven process improvement. Bridging clinical and operational stakeholders and technical delivery teams to turn business needs into functional requirements, actionable solutions and measurable outcomes.",
      achievements: [
        "Reduced weekly operational reporting effort by 75% through the development of centralized Power BI dashboards.",
        "Produced current-state and future-state workflow models that identified critical bottlenecks and handoff gaps, informing recommendations adopted by the project team.",
        "Improved solution validation through structured UAT planning, test execution, defect coordination and clinical workflow verification."
      ],
      impact: "Improved visibility into healthcare operational performance, reduced manual reporting effort, strengthened requirements traceability, and supported the delivery of technology solutions aligned with real-world clinical and administrative workflows.",
      responsibilities: [
        "Elicit, analyze, validate and document business and functional requirements through stakeholder interviews, discovery sessions and requirements workshops.",
        "Develop user stories, acceptance criteria and supporting requirements documentation using Jira and Confluence.",
        "Analyze and document current-state (AS-IS) and future-state (TO-BE) healthcare workflows, identifying process inefficiencies, operational bottlenecks and communication gaps.",
        "Collaborate with clinical, administrative, operational and technical stakeholders to align business requirements with proposed technology solutions.",
        "Develop Power BI dashboards and performance reports to monitor operational KPIs and support evidence-based management decisions.",
        "Plan, coordinate and facilitate User Acceptance Testing (UAT), including test case development, defect tracking, validation and stakeholder sign-off.",
        "Translate complex clinical and operational processes into clear business documentation, workflow diagrams and solution recommendations."
      ],
      tools: ["Jira", "SQL", "Power BI", "Microsoft Excel", "Microsoft Visio", "Draw.io", "Lucidchart"]
    },
    {
      company: "Oneness Education Foundation",
      role: "Program Director, Community Health and Education",
      location: "Toronto, Ontario, Canada",
      start: "March 2024",
      end: "Present",
      summary: "Strategic and operational leadership for community health and education initiatives supporting internationally educated healthcare professionals. Applying business analysis, stakeholder engagement, program management, research and performance measurement to turn participant and organizational needs into structured programs, measurable outcomes and continuous service improvements.",
      achievements: [
        "Improved program completion rates by 15% through data-informed program redesign and continuous performance evaluation.",
        "Contributed to securing competitive funding through an evidence-informed funding proposal to charitable organizations.",
        "Supported the successful planning and delivery of programs serving cohorts of 30+ healthcare professionals."
      ],
      impact: "Strengthened program effectiveness, improved participant outcomes, enhanced operational accountability, and supported organizational sustainability through evidence-based planning, performance measurement and strategic funding initiatives.",
      responsibilities: [
        "Engage participants, funders, community partners and other stakeholders to identify needs, gather requirements, and translate insights into program objectives, delivery plans and success metrics.",
        "Lead program planning and execution, coordinating activities, resources, timelines and deliverables for cohorts of 30+ healthcare professionals.",
        "Analyze program performance data, participant feedback, completion rates and assessment outcomes to identify improvement opportunities.",
        "Develop and implement evidence-informed program enhancements to improve participant engagement, learning outcomes and operational effectiveness.",
        "Prepare performance reports, outcome summaries and strategic recommendations for organizational leadership, funders and community partners.",
        "Support funding and partnership development through research, proposal development, needs assessments and evidence-based business cases.",
        "Facilitate stakeholder communication, cross-functional collaboration and continuous improvement across program activities."
      ],
      tools: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Teams", "Microsoft Forms", "SQL", "Power BI"]
    },
    {
      company: "March-Nineteenth Hospital",
      role: "Practice Manager / Healthcare Operations Lead",
      location: "Nigeria",
      start: "August 2022",
      end: "November 2023",
      summary: "Led healthcare practice operations and process improvement, combining clinical workflow knowledge, operational management, business process analysis and health information system administration to improve patient flow, service delivery, staff performance and operational efficiency.",
      achievements: [
        "Reduced average patient waiting and booking times by 15% through workflow analysis, triage improvements and scheduling optimization.",
        "Improved referral follow-up completion rates by 10%, while maintaining patient satisfaction above 95%.",
        "Maintained 99% reporting accuracy through improved OpenEMR documentation practices, data-entry processes and staff training.",
        "Supervised 10+ staff members and maintained operational budget performance within 3% of planned expenditure."
      ],
      impact: "Improved operational efficiency, strengthened patient-flow management, enhanced referral coordination and increased the reliability of clinical information management, supporting better resource utilization, stronger operational controls and a better patient experience.",
      responsibilities: [
        "Conducted stakeholder interviews, staff consultations and operational observations to identify business needs, document requirements and evaluate existing healthcare processes.",
        "Analyzed patient admission, triage, appointment scheduling, booking and referral workflows to identify operational bottlenecks and improvement opportunities.",
        "Developed and implemented optimized patient-flow, triage, scheduling and referral follow-up processes.",
        "Served as the OpenEMR system lead, overseeing system documentation, scheduling workflows, reporting processes and staff adoption.",
        "Monitored operational performance, patient satisfaction, reporting accuracy and service delivery indicators to support continuous improvement.",
        "Supervised and coordinated a team of 10+ healthcare personnel, supporting workforce planning, performance management and daily operational delivery.",
        "Managed operational budgets, monitored resource utilization, and maintained compliance with applicable privacy and Infection Prevention and Control standards.",
        "Developed and updated operational policies, procedures and documentation to strengthen service consistency and accountability."
      ],
      tools: ["OpenEMR", "Microsoft Excel", "Microsoft Office", "Power BI", "SQL"]
    }
  ],

  /* ------------------------------------------------------------------
     4. HOW I WORK  (the process map)
     Each step shows where you have actually used it ("evidence").
     ------------------------------------------------------------------ */
  approach: [
    {
      step: "Define the problem",
      text: "Pin down what is actually going wrong, for whom, and what a good outcome would look like.",
      evidence: "Every case study starts from a written business problem and objective."
    },
    {
      step: "Engage the right people",
      text: "Interviews, discovery sessions and workshops with clinical, administrative and technical stakeholders.",
      evidence: "Power-Interest matrix and RACI across 28 stakeholder groups."
    },
    {
      step: "Map the current process",
      text: "Document how work really flows today, including handoffs and where things wait.",
      evidence: "AS-IS swimlanes covering 5 actors in prior authorization."
    },
    {
      step: "Analyse the data",
      text: "Clean and validate first, then segment, compare and trend with SQL, Power BI and Excel.",
      evidence: "Validation queries caught 20 duplicate records before reporting."
    },
    {
      step: "Find root causes and gaps",
      text: "Separate symptoms from causes, and focus on what the organisation can control.",
      evidence: "Fishbone, 5 Whys and gap analysis across 9 focus areas."
    },
    {
      step: "Recommend and measure",
      text: "Requirements, user stories and acceptance criteria, then KPIs to show whether the change worked.",
      evidence: "UAT planning, sign-off, and KPIs such as first-pass approval rate."
    }
  ],

  /* ------------------------------------------------------------------
     5. SELECTED RESULTS  (only real, verifiable outcomes)
     ------------------------------------------------------------------ */
  results: [
    { value: "75%", text: "less weekly operational reporting effort, through centralized Power BI dashboards", where: "AMDARI" },
    { value: "15%", text: "shorter average patient waiting and booking times, through workflow, triage and scheduling changes", where: "March-Nineteenth Hospital" },
    { value: "15%", text: "higher program completion, through data-informed program redesign", where: "Oneness Education Foundation" },
    { value: "10%", text: "higher referral follow-up completion, with patient satisfaction kept above 95%", where: "March-Nineteenth Hospital" },
    { value: "99%", text: "reporting accuracy maintained in OpenEMR through better documentation and staff training", where: "March-Nineteenth Hospital" },
    { value: "300+", text: "healthcare professionals and leaders taught and mentored", where: "Teaching and mentoring" }
  ],

  /* ------------------------------------------------------------------
     6. PROJECTS
     Each project has its own case-study page in /projects/<slug>.html
     To add a project: copy a block below, give it a new slug, then copy
     any file in /projects/ and change data-project="..." to the new slug.

     image:      put your screenshot in assets/images/projects/ and
                 keep the same file name (or change the path here).
     documents:  add files to assets/documents/projects/ and fill in
                 "file". Items with an empty "file" are hidden.
     ------------------------------------------------------------------ */
  projects: [
    {
      slug: "patient-no-show-analysis",
      title: "Patient No-Show Analysis & Appointment Attendance Optimization",
      shortTitle: "Patient No-Show Analysis",
      categories: ["Data Analysis", "Business Analysis", "Process Improvement"],
      role: "Healthcare Data Analyst / Business Analyst",
      image: "assets/images/projects/patient-no-show-analysis-thumbnail.png",
      imageAlt: "Cover for the Patient No-Show Analysis project showing a 24.3% no-show rate",
      summary: "An exploratory healthcare data analysis of appointment attendance across 8 countries, 6 clinics and 7 specialties, using Advanced Excel to find no-show patterns, assess reminder effectiveness and recommend ways to improve appointment use and scheduling.",
      tools: ["Microsoft Excel", "Power Query", "Pivot Tables", "Pivot Charts", "Excel formulas", "Data Validation", "Interactive Dashboards"],
      skills: ["Data cleaning & validation", "Segmentation analysis", "KPI analysis", "Recommendations"],
      keyFigures: [
        { value: "1,951", label: "reliable records kept from 2,025 after cleaning" },
        { value: "24.3%", label: "overall no-show rate, against an 18–20% benchmark" },
        { value: "21%", label: "no-show rate for appointments with reminders" },
        { value: "32%", label: "of bookings made more than 30 days in advance" }
      ],
      problem: "Patient appointment no-shows contribute to underutilized clinical capacity, inefficient resource allocation, lost appointment opportunities and potential delays in patient care. The organization needed to understand the factors associated with missed appointments and identify opportunities to improve attendance.",
      objective: "To analyze appointment attendance patterns, identify key no-show drivers, evaluate the relationship between reminder interventions and attendance, and develop actionable recommendations to improve appointment adherence.",
      methodology: [
        "Data cleaning and validation",
        "Exploratory Data Analysis (EDA)",
        "Descriptive and comparative analysis",
        "Segmentation analysis",
        "KPI analysis",
        "Trend identification and business recommendations"
      ],
      dataSource: "A healthcare appointment dataset containing 2,025 initial appointment records across 8 countries, 6 clinics and 7 medical specialties. After data cleaning and validation, 1,951 reliable records were retained for analysis.",
      analysis: [
        "Cleaned and validated 2,025 appointment records, resolving data quality issues and establishing a reliable analytical sample of 1,951 records.",
        "Segmented appointment outcomes by country, clinic, medical specialty, reminder status and booking lead time.",
        "Evaluated overall no-show rates and compared reminder-associated attendance patterns against an 18–20% benchmark.",
        "Analyzed the relationship between appointment booking lead time and missed appointments.",
        "Developed interactive PivotTable and PivotChart dashboards to communicate attendance patterns and operational performance."
      ],
      findings: [
        "The overall appointment no-show rate was 24.3%, exceeding the 18–20% benchmark.",
        "Appointments associated with reminders recorded a 21% no-show rate, suggesting a potentially beneficial relationship between reminders and attendance.",
        "Appointments booked more than 30 days in advance represented 32% of the analyzed bookings, highlighting booking lead time as an area for further investigation.",
        "Attendance patterns varied across the eight countries, six clinics and seven specialties."
      ],
      recommendations: [
        "Introduce a controlled reminder pilot to evaluate the actual impact of appointment reminders before implementing them at scale.",
        "Implement a booking-system risk flag to identify appointments with characteristics associated with higher no-show risk.",
        "Review long-lead-time appointments and assess opportunities for confirmation and re-engagement.",
        "Establish ongoing monitoring of appointment attendance KPIs to evaluate improvement initiatives."
      ],
      outcome: "Developed an interactive Excel dashboard and evidence-based recommendations to support healthcare appointment management, attendance monitoring and operational decision-making.",
      impact: "Established a reliable baseline for appointment attendance performance, identified opportunities to improve clinic capacity utilization, and provided actionable insights for targeted interventions. The observed reminder association informed a proposed pilot rather than an unsupported claim of proven causation.",
      documents: [
        // Add the file to assets/documents/projects/ then fill in "file":
        { label: "Excel dashboard (.xlsx)", file: "" } // e.g. "assets/documents/projects/Patient_No_Show_Analysis_Dashboard.xlsx"
      ],
      links: { github: "", dashboard: "" }
    },
    {
      slug: "immunization-program-performance",
      title: "Global Immunization Program Performance & Vaccine Distribution Analysis",
      shortTitle: "Immunization Program Performance",
      categories: ["Data Analysis", "Healthcare Analytics", "Research"],
      role: "Healthcare Data Analyst / Research Analyst",
      image: "assets/images/projects/immunization-program-performance-thumbnail.png",
      imageAlt: "Cover for the Immunization Program Performance project showing 34.4 million doses analysed",
      summary: "A SQL analysis of immunization program performance across 20 Asian countries from 2022 to 2024: querying, validating, aggregating and comparing vaccination data to inform public health planning and a Ministry of Health reporting brief.",
      tools: ["PostgreSQL", "SQL", "SQL Joins", "Aggregate Functions", "Filtering", "Data Validation Queries"],
      skills: ["Relational querying", "Data validation", "Comparative analysis", "Evidence-based reporting"],
      keyFigures: [
        { value: "34.4M", label: "vaccine doses across the analysed dataset" },
        { value: "20", label: "Asian countries, 2022 to 2024" },
        { value: "20", label: "duplicate records caught before reporting" },
        { value: "2.0M", label: "BCG doses, the lowest-volume vaccine" }
      ],
      problem: "Public health decision-makers need reliable immunization data to understand vaccine distribution, compare program performance, identify potential gaps and support resource allocation. Inaccurate or duplicated records, and comparisons based only on total doses, can distort program performance assessments.",
      objective: "To analyze immunization data across countries, vaccines and regions, validate data integrity, identify distribution patterns, and generate actionable insights to support public health reporting and decision-making.",
      methodology: [
        "Exploratory Data Analysis",
        "Relational Database Querying",
        "Data Cleaning and Validation",
        "Aggregation and Comparative Analysis",
        "Descriptive Statistical Analysis",
        "Evidence-Based Reporting"
      ],
      dataSource: "A structured immunization dataset containing 200 records covering approximately 34.4 million vaccine doses across 20 Asian countries from 2022 to 2024.",
      analysis: [
        "Used SQL joins to combine relevant datasets and establish relationships between immunization records, countries, vaccines and reporting periods.",
        "Applied aggregate functions, filters and grouping to calculate vaccine volumes and compare performance across countries and regions.",
        "Ran validation queries to identify duplicate records and prevent inaccurate reporting.",
        "Ranked vaccines, countries and regions based on reported vaccine volumes.",
        "Evaluated the limitations of raw vaccine totals as indicators of population-level immunization coverage."
      ],
      findings: [
        "Identified approximately 34.4 million vaccine doses across the analyzed dataset.",
        "Detected 20 duplicate records during validation, preventing inflated reporting totals.",
        "Identified BCG (tuberculosis) as the lowest-volume vaccine in the dataset, with approximately 2.0 million doses.",
        "Identified the need for population-adjusted measures to provide more meaningful comparisons of immunization reach across countries."
      ],
      recommendations: [
        "Introduce per-capita vaccination indicators and population-adjusted coverage measures to support fairer country-level comparisons.",
        "Strengthen data validation and duplicate detection procedures before publishing immunization reports.",
        "Supplement vaccine volume reporting with coverage, target-population and reporting-completeness indicators.",
        "Use regional and country-level performance analysis to guide further investigation and public health planning."
      ],
      outcome: "Produced validated SQL analysis and comparative immunization insights to support a Ministry of Health reporting brief and evidence-informed public health discussions.",
      impact: "Improved the reliability of the analytical dataset by identifying 20 duplicate records, and provided a more informed approach to interpreting vaccine distribution data. Established a basis for better immunization performance measurement and resource allocation discussions.",
      documents: [
        { label: "SQL analysis script (.sql)", file: "" } // e.g. "assets/documents/projects/Immunization_Program_SQL_Analysis.sql"
      ],
      links: { github: "", dashboard: "" }
    },
    {
      slug: "sales-performance-dashboard",
      title: "Sales Performance & Business Intelligence Dashboard",
      shortTitle: "Sales Performance Dashboard",
      categories: ["Business Intelligence", "Data Analysis", "Performance Reporting"],
      role: "Business Intelligence Analyst / Data Analyst",
      image: "assets/images/projects/sales-performance-dashboard-thumbnail.png",
      imageAlt: "Cover for the Sales Performance Dashboard project showing a star-schema data model",
      summary: "A Power BI project that turned raw sales data into an interactive four-page performance dashboard, through data cleaning, star-schema modelling, DAX measures and visual design, to support management decision-making.",
      tools: ["Microsoft Power BI", "Power Query", "DAX", "Data Modelling", "Star Schema", "Microsoft Excel"],
      skills: ["Data modelling", "DAX measures", "KPI analysis", "Dashboard design"],
      keyFigures: [
        { value: "~3,000", label: "records cleaned and transformed in Power Query" },
        { value: "4", label: "interactive dashboard pages" },
        { value: "5", label: "prioritized recommendations for leadership" }
      ],
      problem: "Business leaders need accurate, accessible and timely performance information to understand revenue trends, profitability, product performance, customer feedback and returns. Fragmented or inconsistent sales data limits visibility and affects the quality of business decisions.",
      objective: "To develop an interactive Power BI dashboard that consolidates sales performance indicators, improves data visibility, and enables leadership to identify trends, monitor KPIs and make informed business decisions.",
      methodology: [
        "Data Extraction and Transformation",
        "Data Cleaning and Validation",
        "Dimensional Data Modelling",
        "Star Schema Design",
        "DAX Measure Development",
        "KPI Analysis",
        "Interactive Dashboard Development"
      ],
      dataSource: "A sales dataset of approximately 3,000 records with information on revenue, sales transactions, returns and customer ratings.",
      analysis: [
        "Used Power Query to clean and transform approximately 3,000 records, addressing duplicates, invalid dates and inconsistent text values.",
        "Designed a star-schema data model to establish appropriate relationships and improve reporting consistency.",
        "Developed DAX measures to calculate revenue, profit margin, return rate and customer ratings.",
        "Designed a four-page interactive dashboard to give multiple perspectives on business performance.",
        "Kept missing customer ratings as null values rather than zero, to avoid distorting average rating calculations.",
        "Interpreted dashboard findings and translated them into five prioritized recommendations for leadership."
      ],
      findings: [
        "Identified data quality issues, including duplicate records, invalid dates and inconsistent text values, that needed correcting before reporting.",
        "Established a consolidated reporting structure for revenue, margin, returns and customer ratings.",
        "Identified performance patterns and areas needing management attention through interactive KPI analysis.",
        "Demonstrated the importance of accurate data modelling and appropriate treatment of missing values in business reporting."
      ],
      recommendations: [
        "Use the dashboard as a centralized reporting resource for regular sales performance reviews.",
        "Monitor revenue, profitability and return-rate indicators together for a balanced view of business performance.",
        "Investigate the underlying drivers of identified performance gaps.",
        "Improve data quality controls to maintain consistency across future reporting cycles.",
        "Prioritize the five recommendations developed from the dashboard findings."
      ],
      outcome: "Designed and developed a four-page interactive Power BI dashboard supported by a structured data model, a validated dataset and leadership-focused business recommendations.",
      impact: "Established a consolidated business intelligence reporting solution that improves visibility into sales performance and supports more consistent, data-driven management decisions.",
      documents: [
        { label: "Power BI file (.pbix)", file: "" } // e.g. "assets/documents/projects/Sales_Performance_PowerBI_Dashboard.pbix"
      ],
      links: { github: "", dashboard: "" }
    },
    {
      slug: "prior-authorization-process-redesign",
      title: "Healthcare Prior Authorization Process Redesign & Workflow Optimization",
      shortTitle: "Prior Authorization Process Redesign",
      categories: ["Business Analysis", "Process Improvement", "Healthcare Operations"],
      role: "Healthcare Business Analyst / Business Process Improvement Analyst",
      image: "assets/images/projects/prior-authorization-process-redesign-thumbnail.png",
      imageAlt: "Cover for the Prior Authorization Process Redesign project showing a five-lane swimlane diagram",
      summary: "Analysis and redesign of prior authorization workflows for a hospital network in the United States, Canada and the United Kingdom, examining handoffs between hospitals, insurers and clinical reviewers to find what was driving authorization delays and surgery cancellations.",
      tools: ["Draw.io", "Microsoft Visio", "Lucidchart", "Microsoft Excel", "Business Process Mapping", "Root Cause Analysis Documentation"],
      skills: ["AS-IS / TO-BE mapping", "Gap analysis", "Root cause analysis", "KPI definition"],
      keyFigures: [
        { value: "5", label: "actors mapped in AS-IS swimlanes" },
        { value: "8", label: "operational and technology pain points found" },
        { value: "9", label: "focus areas covered by the gap analysis" },
        { value: "70%", label: "of patients in the network use private insurance" }
      ],
      problem: "Prior authorization can create significant administrative bottlenecks, especially when documentation is incomplete, communication between stakeholders is fragmented, review queues are understaffed, or authorization systems fail to give timely updates. In this project scenario, these challenges contributed to delayed approvals and authorization-related surgery cancellations. About 70% of patients in the network used private insurance, making authorization workflow efficiency a significant operational concern.",
      objective: "To evaluate the existing prior authorization process, identify root causes of delays and cancellations, redesign workflows, and recommend operational and technology improvements that strengthen authorization turnaround times and coordination between clinical and administrative teams.",
      methodology: [
        "AS-IS and TO-BE Process Mapping",
        "Swimlane Workflow Modelling",
        "Stakeholder and Process Analysis",
        "Gap Analysis",
        "Fishbone (Ishikawa) Analysis",
        "5 Whys Root Cause Analysis",
        "Requirements Analysis",
        "Solution Design and KPI Definition"
      ],
      dataSource: "Project scenario inputs, stakeholder and process information, authorization workflow requirements, and operational assumptions for a multi-country hospital network.",
      analysis: [
        "Developed AS-IS swimlane process maps covering the five key actors in the prior authorization process.",
        "Analyzed authorization workflows across the United States, Canada and the United Kingdom to identify process variations and coordination challenges.",
        "Conducted gap analysis across nine focus areas and identified eight major operational and technology pain points.",
        "Applied Fishbone and 5 Whys techniques to investigate the causes of authorization-related surgery cancellations.",
        "Evaluated documentation practices, portal reliability, AI-assisted rejection processes, review queue capacity and communication handoffs.",
        "Identified the absence of standardized documentation and pre-submission review as root causes within the hospital's operational control.",
        "Designed a TO-BE workflow with pre-submission validation, request tracking, automated retry, authorization-linked surgery booking and online peer-to-peer scheduling."
      ],
      findings: [
        "Identified eight significant process pain points affecting authorization efficiency and operational coordination.",
        "Inconsistent documentation and the absence of a standardized pre-submission review created avoidable authorization delays.",
        "Silent portal failures and limited request-status visibility weakened tracking and follow-up.",
        "False AI-assisted rejections and understaffed review queues introduced additional barriers to timely authorization.",
        "Fragmented communication between clinical, administrative and payer stakeholders contributed to process delays."
      ],
      recommendations: [
        "Introduce standardized pre-submission documentation checklists and mandatory review processes.",
        "Implement centralized authorization request tracking with automated status notifications and retry for failed submissions.",
        "Establish authorization-linked surgery booking workflows to improve scheduling visibility and coordination.",
        "Introduce online peer-to-peer scheduling to ease communication between clinical reviewers and payer representatives.",
        "Monitor first-pass approval rates, average days to decision, and authorization-related operating room cancellations."
      ],
      outcome: "Developed AS-IS and TO-BE swimlane workflows, completed root cause and gap analyses, and proposed a redesigned prior authorization process supported by operational controls, technology enhancements and measurable performance indicators.",
      impact: "Established a structured improvement roadmap aimed at reducing avoidable authorization delays, improving administrative coordination, strengthening documentation quality and minimizing authorization-related surgery cancellations. The proposed improvements were defined with measurable KPIs; actual post-implementation results were not provided.",
      documents: [
        { label: "Process analysis (PDF)", file: "" } // e.g. "assets/documents/projects/Prior_Authorization_Process_Analysis.pdf"
      ],
      links: { github: "", dashboard: "" }
    },
    {
      slug: "closed-loop-medication-platform",
      title: "Closed-Loop Medication Management Platform: Business Case & Implementation Strategy",
      shortTitle: "Closed-Loop Medication Platform",
      categories: ["Business Analysis", "Healthcare Technology", "Digital Transformation", "Project Management"],
      role: "Healthcare Business Analyst / Digital Transformation Business Analyst",
      image: "assets/images/projects/closed-loop-medication-platform-thumbnail.png",
      imageAlt: "Cover for the Closed-Loop Medication Platform project showing a $42.0 million projected NPV",
      summary: "A business case and implementation strategy for an integrated closed-loop medication management platform across a 57-site network of 12 hospitals and 45 clinics, covering stakeholder analysis, solution assessment, financial modelling, requirements traceability and delivery planning.",
      tools: ["Microsoft Excel", "Microsoft PowerPoint", "Stakeholder Analysis Matrix", "Power-Interest Matrix", "RACI Matrix", "Requirements Traceability Matrix", "Business Case and Financial Modelling"],
      skills: ["Stakeholder analysis", "Solution assessment", "Business case & NPV", "Non-functional requirements"],
      keyFigures: [
        { value: "$42.0M", label: "projected net present value" },
        { value: "2.3 yrs", label: "estimated payback period" },
        { value: "28", label: "stakeholder groups across 57 sites" },
        { value: "46%", label: "of planned benefits needed to break even" }
      ],
      problem: "Fragmented medication management processes across many healthcare facilities can create operational inefficiencies, inconsistent workflows, limited system interoperability, and challenges with medication tracking and administration. The network needed an integrated technology solution that could support more standardized medication management, improve operational visibility, and align clinical and technical requirements across its facilities.",
      objective: "To evaluate potential technology solutions, establish a business case for an integrated medication management platform, define stakeholder engagement and implementation requirements, and recommend a delivery approach supported by measurable financial and technical objectives.",
      methodology: [
        "Stakeholder Analysis and Engagement Planning",
        "Power-Interest Matrix",
        "RACI Responsibility Assignment",
        "Problem-to-Capability Traceability",
        "Multi-Criteria Solution Assessment",
        "Cost-Benefit Analysis",
        "Net Present Value (NPV) Analysis",
        "Payback Period Analysis",
        "Hybrid Waterfall/Agile SDLC",
        "Non-Functional Requirements Analysis",
        "Stage-Gate Project Governance"
      ],
      dataSource: "Project scenario assumptions, healthcare network operational requirements, stakeholder analysis inputs, solution evaluation criteria, estimated implementation costs, projected benefits and financial modelling assumptions.",
      analysis: [
        "Conducted stakeholder analysis across 28 stakeholder groups within a 57-site network of 12 hospitals and 45 clinics.",
        "Developed a Power-Interest Matrix and RACI framework to clarify stakeholder influence, responsibilities, decision-making authority and engagement needs.",
        "Created a four-phase stakeholder communication plan covering awareness, alignment, consultation and implementation readiness.",
        "Applied problem-to-capability traceability to connect operational challenges with required platform capabilities.",
        "Ran a five-option solution assessment to evaluate possible approaches and justify the recommendation for an integrated platform.",
        "Developed a financial business case with projected investment, annual benefits, net present value, payback period and break-even sensitivity.",
        "Evaluated the suitability of a hybrid Waterfall/Agile SDLC with five governance stage gates.",
        "Defined non-functional requirements covering system availability, scan response time and recovery objectives."
      ],
      findings: [
        "The network's scale and diversity required coordinated engagement across 28 stakeholder groups and 57 healthcare facilities.",
        "An integrated medication management platform was the preferred solution in the five-option evaluation.",
        "The financial model projected a Year 1 investment of $28.0 million against $27.3 million in annual benefits.",
        "The business case showed a projected NPV of $42.0 million and an estimated payback period of 2.3 years.",
        "Sensitivity analysis showed the business case would break even at about 46% of planned benefits.",
        "The platform needed clearly defined technical requirements, including 99.9% availability, scan response under two seconds and a 30-minute recovery time objective."
      ],
      recommendations: [
        "Proceed with the integrated medication management platform, subject to the appropriate financial, technical and operational approvals.",
        "Use a hybrid Waterfall/Agile delivery approach with five formal stage gates, for strong governance with room for iterative development.",
        "Establish a structured stakeholder engagement and communication framework based on the Power-Interest Matrix and RACI.",
        "Maintain end-to-end traceability between business problems, required capabilities, functional requirements and proposed solutions.",
        "Set technical acceptance criteria for system availability, scan response time and recovery.",
        "Introduce benefits realization tracking to compare projected financial and operational outcomes with actual performance."
      ],
      outcome: "Developed a structured business case and implementation strategy for an integrated closed-loop medication management platform, including stakeholder governance, solution assessment, financial projections, requirements traceability, non-functional requirements and a hybrid implementation roadmap.",
      impact: "The financial model projected a $42.0 million NPV, $27.3 million in annual benefits and a 2.3-year payback against a $28.0 million Year 1 investment. The project established a financial and operational justification for the platform, with benefits subject to implementation and realization.",
      documents: [
        { label: "Business case (PDF)", file: "" } // e.g. "assets/documents/projects/Closed_Loop_Medication_Platform_Business_Case.pdf"
      ],
      links: { github: "", dashboard: "" }
    }
  ]
};
