export type GalleryImage = { url: string; caption: string }
export type LinkItem = { label: string; url: string }
export type Challenge = { problem: string; solution: string }
export type DetailItem = {
  id: string
  title: string
  kicker: string
  description: string
  overview?: string
  details?: string
  tags?: string[]
  photos?: GalleryImage[]
  links?: LinkItem[]
  challenges?: Challenge[]
  responsibilities?: string[]
  skills?: string[]
  keyMetrics?: string[]
  achievements?: string[]
  impactNarrative?: string
  duration?: string
  future?: string[]
  budget?: string[]
  compliance?: string[]
}

export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`
}

export const navItems = [
  ["about", "About"],
  ["projects", "Projects"],
  ["research", "Research"],
  ["experience", "Experience"],
  ["leadership", "Leadership"],
  ["contact", "Contact"],
]

export const awardSpotlights = [
  {
    title: "1st in IEEE SSCS International Arduino Competition",
    context:
      "Won $1,000 in prize money and the Most Engaging Presentation Award in a competition with 40+ countries and 800+ submissions.",
    highlights: ["$1,000 in prize money", "40+ countries", "800+ submissions"],
    year: "2025",
  },
  {
    title: "8th at DECA ICDC",
    context:
      "Placed 8th internationally in Innovation Plan, competing against 200 ICDC teams after 2,000+ international teams competed globally.",
    highlights: ["200 ICDC teams", "2,000+ international teams"],
    year: "2026",
  },
  {
    title: "3x Tennessee DECA State Champion",
    context:
      "Won state titles from 2024-2026 in Innovation Plan, Integrated Marketing Campaign - Service, and Business Solutions Project.",
    year: "2024-2026",
  },
  {
    title: "VEX Robotics State Champion, 4x Worlds Qualifier",
    context:
      "State Champion, 20+ local awards, international awards, and 2nd place at the Bristol International Competition.",
    highlights: ["20+ local awards"],
    year: "2022-2025",
  },
  {
    title: "Technology Student Association",
    context:
      "1st in Tennessee state in Robotics, plus 2nd in Webmaster / Drone Challenge against 200+ teams.",
    highlights: [
      "1st in Tennessee state in Robotics",
      "2nd in Webmaster / Drone Challenge",
      "200+ teams",
    ],
    year: "2022-2025",
  },
  {
    title: "National Merit Scholar",
    context: "Recognized in the top 1% of PSAT/NMSQT students nationwide.",
    highlights: ["top 1%"],
    year: "2025",
  },
  {
    title: "YC Startup School",
    context:
      "Hand-selected for Y Combinator's builder program from 30,000+ applicants.",
    highlights: ["30,000+ applicants"],
    year: "2026",
  },
  {
    title: "Model UN Nobel Peace Prize",
    context:
      "Sole recipient selected by Tennessee YMCA staff from 900+ students for diplomacy and collaboration efforts.",
    highlights: [
      "Sole recipient",
      "900+ students",
      "diplomacy and collaboration efforts",
    ],
    year: "2025",
  },
]

export const metrics = [
  { value: "500+", label: "InvestEDU beta users" },
  { value: "200+", label: "patients improved through Project CARE" },
  { value: "600+", label: "AI recipes migrated at Karini AI" },
  { value: "800+", label: "Model UN delegates led" },
]

export const projects: DetailItem[] = [
  {
    id: "investedu",
    title: "InvestEDU",
    kicker: "Financial education platform",
    description:
      "Financial education platform for young adults with interactive modules.",
    overview:
      "InvestEDU teaches teenagers the importance of investing early through interactive tools, calculators, a glossary, quizzes, budgeting workflows, and an AI assistant. The platform grew to 500+ beta users, 2.8K monthly views, a 40% engagement lift, and a 25% improvement in financial comprehension scores.",
    details:
      "Techniques Implemented: Desmos API integration, SVG graphing, Vercel deployment, and A=Pe^(rt) compound growth calculations. Key Features: budgeting simulator, investment scenario builder, progress tracking, achievement badges, community challenge boards, investment comparison, calculator, glossary, personality quiz, and AI guidance.",
    tags: ["React", "JavaScript", "CSS", "Financial Education"],
    photos: [
      { url: "/InvestEDU/investedhome.png", caption: "InvestEDU home page." },
      {
        url: "/InvestEDU/investedhomedesmos.png",
        caption: "Desmos-powered compound interest visualization.",
      },
      {
        url: "/InvestEDU/investedinfo.png",
        caption: "Investment education hub.",
      },
      {
        url: "/InvestEDU/investedglossary.png",
        caption: "Glossary with 200+ investing terms.",
      },
      {
        url: "/InvestEDU/investedpersonalityquiz.png",
        caption: "Investor personality quiz.",
      },
      {
        url: "/InvestEDU/investedbudgetplanner.png",
        caption: "Budget planner tool.",
      },
      { url: "/InvestEDU/investedAI.png", caption: "InvestEDU AI assistant." },
      {
        url: "/InvestEDU/investedcomparison.png",
        caption: "Investment comparison tool.",
      },
      {
        url: "/InvestEDU/investedcalculator.png",
        caption: "Investment calculator.",
      },
      {
        url: "/InvestEDU/investedu-analytics-dashboard.jpeg",
        caption: "Analytics dashboard with user engagement metrics.",
      },
    ],
    links: [
      { label: "Visit InvestEDU", url: "https://investedu.me" },
      { label: "GitHub", url: "https://github.com/Vihaanbussa" },
    ],
    future: [
      "AI-powered financial coaching",
      "Banking API integration",
      "Retirement and Roth IRA planning",
    ],
  },
  {
    id: "care",
    title: "Project CARE",
    kicker: "Healthcare technology and social impact",
    description:
      "Improving quality of life for dialysis patients through clinical and patient-facing tools.",
    overview:
      "Project CARE improves life for dialysis patients and supports clinic operations at Dialysis Clinic, Inc. The work includes a mobile app for personalized meal planning, appointment management, and awareness campaigns, with implementation across DCI clinics in Tennessee and Georgia.",
    details:
      "About DCI: a leading nonprofit dialysis provider founded in 1971, operating 250+ clinics and serving 15,000+ patients. Results: 93% reduction in patient session cancellation time from 3.5 minutes to 15 seconds, clinic no-shows reduced from 13% to 2%, 200+ patients directly improved, 109+ App Store downloads, and 4,000+ impressions post-launch.",
    tags: ["React Native", "Firebase", "Healthcare", "UI/UX", "Social Impact"],
    photos: [
      {
        url: "/DECADCI/dci-meeting-screenshot.jpeg",
        caption: "DCI executive meeting.",
      },
      {
        url: "/DECADCI/IMG_2568.jpeg",
        caption: "Project CARE team at DCI headquarters.",
      },
      {
        url: "/DECADCI/3d9812af-e50e-4f84-af6c-8347ee38bb57.jpeg",
        caption: "DCI clinic implementation and training.",
      },
      {
        url: "/DECADCI/6ae1d092-879f-44f9-bd68-488f85010c5e.jpeg",
        caption: "Patient feedback session.",
      },
      {
        url: "/DECADCI/dbd797e3-2049-4a8a-a7e7-c8c294b75cca.jpeg",
        caption: "Project CARE analytics dashboard.",
      },
      {
        url: "/DECADCI/project-care-documentation.jpeg",
        caption: "DCI partnership documentation.",
      },
      {
        url: "/DECADCI/project-care-mobile-app.jpeg",
        caption: "Meal planning interface.",
      },
      {
        url: "/DECADCI/project-care-impact-report.jpeg",
        caption: "Project CARE impact report.",
      },
    ],
    budget: [
      "$215 spent: Canva Pro, domain, and app publication",
      "$36,000 future budget: hosting, marketing, and AI model training",
    ],
    compliance: [
      "HIPAA-conscious design",
      "Data encryption",
      "Role-based DCI staff access",
    ],
    future: [
      "Expand to 10,000+ patients",
      "AI health coaching",
      "Telehealth integration",
      "Caregiver support",
    ],
  },
  {
    id: "dialysense",
    title: "DialySense",
    kicker: "Wearable dialysis fatigue tracking system",
    description:
      "Wearable fatigue tracker for dialysis patients using GSR sensing, Arduino hardware, Bluetooth, a connected app, and AI support.",
    overview:
      "DialySense is a wearable fatigue tracking system designed specifically for dialysis patients. It uses a GSR (Galvanic Skin Response) sensor, Arduino UNO, HM-10 Bluetooth module, and connected app to display live fatigue data that can be exported for dialysis clinicians to review.",
    details:
      "The system combines a skin-conductivity sensor, onboard calibration flow, Bluetooth data transfer, patient-facing fatigue dashboard, symptom journal, fatigue guide, and AI health assistant. Patients can view live fatigue trends, export data for clinicians, and ask questions through the connected AI experience.",
    tags: [
      "Arduino",
      "GSR Sensor",
      "Bluetooth",
      "Healthcare",
      "AI Assistant",
      "Mobile App",
    ],
    photos: [
      {
        url: "/DialySense/01-arduino-schematic.png",
        caption: "Custom Arduino schematic for the DialySense wearable.",
      },
      {
        url: "/DialySense/02-how-it-works.png",
        caption:
          "How the GSR sensor, Arduino schematic, and companion app connect.",
      },
      {
        url: "/DialySense/03-internals-slide.png",
        caption:
          "Internal components: buzzer, button, HM-10 Bluetooth module, Arduino UNO, and GSR sensor.",
      },
      {
        url: "/DialySense/04-software.png",
        caption:
          "DialySense app screens for live fatigue, trends, symptom journaling, AI assistant, and fatigue education.",
      },
      {
        url: "/DialySense/05-patient-reviews.png",
        caption:
          "Patient review data showing improved motivation after DialySense.",
      },
      {
        url: "/DialySense/06-real-internals.jpeg",
        caption: "Real-life internals of the DialySense hardware box.",
      },
      {
        url: "/DialySense/07-icdc-team.jpeg",
        caption: "DialySense team after placing at DECA ICDC.",
      },
    ],
    links: [
      { label: "View Slides", url: "https://canva.link/y9nqk71qq0hsaz7" },
      {
        label: "ICDC Article",
        url: "https://williamsonsource.com/deca-students-earn-international-awards/",
      },
    ],
    achievements: [
      "8th out of 200+ teams at DECA ICDC",
      "1st in Tennessee in Innovation Plan",
      "Advanced from a field of 2,000+ teams globally",
      "Clinician-exportable fatigue data",
      "AI-powered patient question support",
    ],
    keyMetrics: [
      "36-patient review sample",
      "P-value 0.00001057",
      "Average rating improved from 5.67 to 8.08",
    ],
    challenges: [
      {
        problem: "Making fatigue visible",
        solution:
          "Used GSR sensor readings and calibration to convert skin-conductivity changes into live fatigue trends.",
      },
      {
        problem: "Keeping clinicians in the loop",
        solution:
          "Designed exportable fatigue data so dialysis clinicians could review patient trends outside the appointment.",
      },
      {
        problem: "Helping patients interpret results",
        solution:
          "Connected the app to an AI assistant so patients could ask questions about fatigue and symptom patterns.",
      },
    ],
    future: [
      "Clinical pilot expansion",
      "More symptom categories",
      "Wearable enclosure refinement",
      "Clinician dashboard integration",
    ],
  },
  {
    id: "elderhelper",
    title: "ElderHelper",
    kicker: "Arduino, IoT, electronics, healthcare",
    description:
      "IoT fall detection box and pill dispenser built for the IEEE SSCS Arduino Competition.",
    overview:
      "ElderHelper assists elderly individuals with medication management and safety monitoring. Inspired by electronics projects and built for the IEEE SSCS Arduino Competition, it combines fall detection, medication reminders, emergency alerts, and automated pill dispensing.",
    details:
      "Technologies Used: Arduino Uno, MPU6050 accelerometer and gyroscope, servo motors, LCD display, buzzer, real-time clock module, C++. Technical Achievements: 95% fall detection accuracy, custom enclosure, and 72+ hours of optimized battery life.",
    tags: ["Arduino", "IoT", "Electronics", "Healthcare", "C++"],
    photos: [
      {
        url: "/Robotics/IMG_5956.jpeg",
        caption: "Hardware and robotics build reference.",
      },
    ],
    links: [
      {
        label: "Watch Demo",
        url: "https://www.youtube.com/watch?v=R-SOpHmBSgU",
      },
      {
        label: "IEEE Competition",
        url: "https://arduino-contest.sscs.ieee.org/",
      },
    ],
    challenges: [
      {
        problem: "False positives in fall detection",
        solution: "Multi-axis threshold detection with time-based validation.",
      },
      {
        problem: "Reliable dispensing",
        solution: "Precision servos and 3D-printed dispensing wheels.",
      },
      {
        problem: "Power management",
        solution: "Sleep modes and optimized sensor polling.",
      },
    ],
    future: [
      "WiFi monitoring",
      "Caregiver smartphone app",
      "Health pattern recognition",
      "Voice commands",
    ],
  },
]

export const research: DetailItem[] = [
  {
    id: "nfl-ai",
    title: "AI in Predicting NFL Sports Bets",
    kicker: "Machine learning, sports analytics, Python, Pandas",
    description:
      "Analyzing historical NFL data to predict outcomes and betting spreads.",
    overview:
      "This research applies machine learning to sports betting markets and compares AI prediction performance against professional analysts. It was conducted through advanced high school research and focused on ROI optimization and spread betting accuracy.",
    details:
      "Methodology: collected 2023-2024 NFL data, compared Google Gemini to NFL analysts, and implemented temporal trend analysis. Findings: Gemini achieved 58% success on spread bets, surpassed expert consensus by 7%, and demonstrated AI's potential for sports forecasting. Validation included 2022-2023 backtesting, literature review comparison, and Vegas oddsmaker comparison.",
    tags: ["Machine Learning", "Sports Analytics", "Python", "Pandas"],
    photos: [
      {
        url: "/AIPredict/AIBetProfit.png",
        caption: "AI vs. human profit comparison.",
      },
      {
        url: "/AIPredict/AIBetScatterplot.png",
        caption: "Prediction accuracy scatterplot.",
      },
      {
        url: "/AIPredict/AIBetAIPrediction.png",
        caption: "AI prediction results.",
      },
      {
        url: "/AIPredict/AIBetHumanPrediction.png",
        caption: "Human analyst results.",
      },
      {
        url: "/AIPredict/AIBetMoneyChart.png",
        caption: "Weekly ROI performance.",
      },
    ],
    links: [
      {
        label: "Full Paper",
        url: "https://docs.google.com/document/d/10PaCSnHW3U8UJUJL-OMOAVcjja93PkaFx8LjRLpvktM/edit?usp=sharing",
      },
      {
        label: "Research Repository",
        url: "https://docs.google.com/spreadsheets/d/1yaFK0Ky3bNbYYGtkbVJwOuyTmxt28dkW2qg8uVn3AYI/edit?usp=sharing",
      },
    ],
    challenges: [
      {
        problem: "Data consistency",
        solution: "Curated standardized datasets for Gemini evaluation.",
      },
    ],
    future: [
      "Real-time betting data",
      "Prediction API",
      "International football leagues",
    ],
  },
  {
    id: "nfl-predictor",
    title: "NFL Game Predictor",
    kicker: "Research Paper Part 2, ML product build",
    description:
      "Built a deployed prediction tool that turns the original NFL betting research into a custom-line model, API, and React website.",
    overview:
      "This is the second phase of my NFL prediction research: instead of only comparing AI picks against analysts, I built a working product that predicts upcoming games with engineered football features, saved ML models, and user-entered sportsbook lines.",
    details:
      "Data pipeline: I collected schedules, play-by-play, team stats, player stats, injuries, depth charts, rosters, draft picks, expected starting quarterbacks, weather context, rest, Elo, and sportsbook lines from nflverse through nflreadpy. I cleaned and joined the raw tables with Polars, pandas, and NumPy into one pre-game row per matchup.\n\nFeature engineering: Each row only used information available before kickoff. I built recent-form features for EPA, success rate, explosive plays, red-zone efficiency, passing and rushing output, turnovers, sacks, penalties, pace, quarterback performance, injury burden, roster strength, rookie impact, and betting-market context.\n\nModel training: I used walk-forward validation so future games could not leak into earlier predictions. I trained separate scikit-learn pipelines for moneyline, spread, over/under, home score, away score, and total residual, compared logistic regression against histogram gradient boosting, evaluated probability quality with log loss, Brier score, accuracy, and ROC-AUC, then saved the selected pipelines with Joblib.\n\nProduct build: I served the saved models with a FastAPI and Pydantic backend that accepts custom lines and returns projected scores, probabilities, and expected-value sides. I connected that API to a React and Vite frontend, deployed the site through GitHub Pages, hosted the backend on Render, and added GitHub Actions data refreshes.",
    tags: ["scikit-learn", "FastAPI", "React", "nflverse", "Polars"],
    photos: [
      {
        url: "/NFLPredictor/03-prediction-results.png",
        caption:
          "Prediction output with score projection, probabilities, and expected-value sides.",
      },
    ],
    links: [
      {
        label: "Try Website",
        url: "https://vihaanbussa.github.io/nflgamepredictor/",
      },
      {
        label: "GitHub",
        url: "https://github.com/Vihaanbussa/nflgamepredictor",
      },
      {
        label: "API Docs",
        url: "https://nflgamepredictor-api.onrender.com/docs",
      },
    ],
    responsibilities: [
      "Collected and processed NFL data with nflreadpy, Polars, pandas, NumPy, and nflverse datasets.",
      "Built leakage-safe pre-game features from historical schedules, play-by-play, injuries, rosters, quarterbacks, draft picks, and betting lines.",
      "Trained and compared scikit-learn pipelines for moneyline, spread, total, score, and residual prediction.",
      "Served the models through FastAPI and Pydantic, then connected them to a React/Vite frontend.",
      "Deployed the frontend through GitHub Pages, the backend through Render, and data refreshes through GitHub Actions.",
    ],
    achievements: [
      "Extended the original AP Research paper into a live, usable machine-learning product.",
      "Used walk-forward validation to reduce future-data leakage and evaluate model performance more realistically.",
      "Trained separate models for moneyline, spread, over/under, projected scores, and total residuals.",
    ],
    keyMetrics: [
      "2018-2025 historical training data",
      "6 saved model artifacts",
      "Daily data refresh workflow",
    ],
    challenges: [
      {
        problem: "Data leakage",
        solution:
          "Built each row from information available before that game and validated by season.",
      },
      {
        problem: "Line movement",
        solution:
          "Made sportsbook lines user inputs so predictions can be rerun with current odds.",
      },
    ],
    future: [
      "Weekly 2026 refreshes",
      "Model calibration dashboard",
      "Injury-news weighting",
      "Expanded feature importance views",
    ],
  },
  {
    id: "exercise-ai",
    title: "AI in Tracking Exercise Form",
    kicker: "Computer vision, TensorFlow, OpenCV",
    description:
      "Using computer vision to analyze and correct workout posture in real time.",
    overview:
      "This research explores how deep learning can process live video to detect and correct exercise form, reducing injury risk and improving performance.",
    details:
      "Methodology: collected five hours of annotated workout footage, used Ultralytics YOLO for keypoint detection, and trained a CNN to classify correct vs. incorrect form. Findings: achieved 92% posture classification accuracy after 100 tests and built a prototype for form safety feedback.",
    tags: ["Computer Vision", "Deep Learning", "TensorFlow", "OpenCV"],
    photos: [
      {
        url: "/AIExercise/ExceriseCVOverlay.png",
        caption: "Real-time pose estimation overlay.",
      },
      {
        url: "/AIExercise/ExerciseGoodForm.png",
        caption: "Correct form detection.",
      },
      {
        url: "/AIExercise/ExerciseBadForm.png",
        caption: "Improper form alert.",
      },
    ],
    links: [
      {
        label: "View Code",
        url: "https://colab.research.google.com/drive/1aKGmpm-ESD6VGs21iWuOzspcJ8-7ECP5?usp=sharing",
      },
    ],
    challenges: [
      {
        problem: "Camera angle variance",
        solution: "Dataset augmentation with synthetic rotations.",
      },
      {
        problem: "Low light and occlusion",
        solution: "Adaptive histogram equalization and dropout layers.",
      },
    ],
    future: [
      "Mobile deployment",
      "Multi-person tracking",
      "Yoga pose expansion",
      "AR glasses feedback",
    ],
  },
]

export const internships: DetailItem[] = [
  {
    id: "karini",
    title: "Full Stack Developer",
    kicker: "Karini AI, Summer 2025",
    description:
      "Built AI-powered applications and web services, migrated agentic AI recipes to AWS Strands SDK architecture, and optimized enterprise platform performance.",
    duration: "Jun 2025 - Aug 2025",
    responsibilities: [
      "Migrated agentic AI recipes to AWS Strands SDK",
      "Improved frontend architecture",
      "Developed React and Node.js web apps",
      "Integrated AI/ML models",
      "Built REST APIs",
      "Collaborated on product features",
    ],
    skills: [
      "React",
      "Node.js",
      "Python",
      "AWS Strands SDK",
      "Claude AI",
      "LLMs",
      "Prompt Engineering",
      "AI/ML Integration",
      "Database Design",
    ],
    keyMetrics: [
      "600+ AI recipes migrated",
      "98.5% migration accuracy",
      "12% performance improvement",
      "500+ enterprise clients served",
    ],
    achievements: [
      "Zero-downtime migration",
      "UI adopted as company standard",
      "New scalability benchmarks",
      "Mentored junior developers",
      "Reduced onboarding time by 50%",
    ],
    impactNarrative:
      "The migrated AWS agents support enterprise automation workflows, reduce manual tasks, and improve Karini AI's user experience.",
    photos: [
      { url: "/logos/karini-ai.svg", caption: "Karini AI logo." },
      {
        url: "/InvestEDU/investedAI.png",
        caption: "AI product interface reference.",
      },
    ],
  },
  {
    id: "hsr",
    title: "Full Stack Developer",
    kicker: "HSR.Health, Summer 2025",
    description:
      "Developed geospatial health risk visualization tools for analyzing public health impacts of ocean pollution and supporting policy recommendations.",
    duration: "May 2025 - Jul 2025",
    responsibilities: [
      "Designed geospatial processing algorithms",
      "Created D3.js visualizations",
      "Built Express REST endpoints",
      "QA-tested environmental pipelines",
      "Validated data with researchers",
      "Prepared stakeholder documentation",
    ],
    skills: [
      "Node.js",
      "D3.js",
      "API Testing",
      "Healthcare Analytics",
      "Environmental Data Science",
      "Ocean Mapping",
      "Geospatial Analysis",
    ],
    keyMetrics: [
      "27% of global oceans analyzed",
      "Large-scale data processing pipeline",
      "API test coverage",
      "Real-time visualization dashboard",
    ],
    achievements: [
      "Comprehensive health risk visualization",
      "Environmental data presentation standards",
      "Scalable research platform",
      "40% processing optimization",
      "Policy recommendation support",
    ],
    impactNarrative:
      "The Poseidon tools advanced ocean plastic pollution monitoring and helped researchers better understand pollution patterns.",
    photos: [
      { url: "/logos/hsr-health.png", caption: "HSR.Health logo." },
      {
        url: "/DECADCI/project-care-impact-report.jpeg",
        caption: "Environmental health dashboard reference.",
      },
    ],
  },
  {
    id: "robotix",
    title: "Robotics Instructor",
    kicker: "RobotiX Institute, 2022-2024",
    description:
      "Taught and mentored 80+ students while building a centralized curriculum database with 150+ lesson plans.",
    duration: "Jun 2022 - Jan 2024",
    responsibilities: [
      "Designed K-8 robotics curriculum",
      "Delivered hands-on engineering instruction",
      "Assessed student progress",
      "Maintained equipment and safety",
      "Built lesson plan database",
    ],
    skills: ["Teaching", "Curriculum Design", "Robotics", "VEX Programming"],
    keyMetrics: [
      "80+ students taught",
      "150+ lesson plans",
      "Centralized curriculum database",
      "Standardized instruction system",
    ],
    achievements: [
      "Institute-wide curriculum",
      "95% student satisfaction",
      "Reusable framework",
      "70% pursued advanced robotics",
      "New technical education methodology",
    ],
    impactNarrative:
      "Hands-on instruction inspired students to continue robotics and engineering beyond the program.",
    photos: [
      {
        url: "/logos/robotix-institute.webp",
        caption: "RobotiX Institute logo.",
      },
      {
        url: "/Robotics/IMG_1084.jpeg",
        caption: "Robotics classroom and mentorship.",
      },
    ],
  },
]

export const leadership: DetailItem[] = [
  {
    id: "tsa",
    title: "Technology Student Association Vice President",
    kicker: "Technology Student Association, 2022-2025",
    description:
      "Co-led a 200+ member STEM competition club, coordinated strategy for 40+ events, and contributed to 150+ total club awards.",
    duration: "Aug 2022 - Present",
    responsibilities: [
      "Event schedules, budgets, and logistics",
      "Sponsorship outreach",
      "Executive board operations",
      "Strategic planning",
    ],
    skills: ["Project Management", "Public Speaking", "Fundraising"],
    keyMetrics: [
      "200+ members",
      "40+ events",
      "150+ awards",
      "Record-breaking competition performance",
    ],
    achievements: [
      "Hybrid event model",
      "Local technology partnerships",
      "Virtual skills workshop series",
    ],
    impactNarrative:
      "The TSA work kept students engaged through hybrid events and broadened access to STEM career exposure.",
    photos: [
      {
        url: "/logos/tsa.png",
        caption: "Technology Student Association logo.",
      },
      {
        url: "/TSA/F02BC1AA-2038-4F7E-85CD-5F186A39E447.jpeg",
        caption: "TSA State Competition.",
      },
      { url: "/TSA/IMG_2898.jpeg", caption: "TSA Executive Board." },
      { url: "/TSA/IMG_5537.jpeg", caption: "TSA achievement recognition." },
    ],
  },
  {
    id: "robotics-club",
    title: "Robotics Club Co-President",
    kicker: "Ravenwood High School Robotics Club, 2023-2025",
    description:
      "Mentored 20+ underclassmen, led four competitive teams to VEX Worlds for four consecutive years, earned 25+ awards, raised $5,000 through a STEM camp, and secured Qentelli sponsorship.",
    duration: "Sep 2023 - Present",
    responsibilities: [
      "Technical training curriculum",
      "$15,000+ inventory",
      "Competition logistics",
      "Fundraising",
      "Recruitment and social media",
    ],
    skills: [
      "Technical Mentorship",
      "Inventory Management",
      "Logistics",
      "Fundraising",
      "Social Media Marketing",
      "Curriculum Development",
    ],
    keyMetrics: [
      "20+ mentees",
      "4 consecutive World Championships",
      "25+ awards",
      "$5,000 raised",
      "Corporate sponsorship",
    ],
    achievements: [
      "Most successful robotics program in school history",
      "Excellence Award at VEX Worlds",
      "95% retention training program",
      "Diverse team recruitment",
      "Sustainable funding model",
    ],
    impactNarrative:
      "The STEM summer camp introduced 45 young students to robotics, with 80% expressing interest in STEM careers.",
    photos: [
      { url: "/Robotics/IMG_1084.jpeg", caption: "STEM summer camp." },
      { url: "/Robotics/IMG_2397.jpeg", caption: "VEX Worlds preparation." },
      {
        url: "/Robotics/IMG_5953.jpeg",
        caption: "Regional competition victory.",
      },
      { url: "/Robotics/IMG_5954.jpeg", caption: "Robot design workshop." },
      { url: "/Robotics/IMG_5956.jpeg", caption: "Competition robot." },
      { url: "/Robotics/PNG%20image.jpeg", caption: "Team building session." },
      {
        url: "/Robotics/PNG%20image%20(1).jpeg",
        caption: "Fundraising event.",
      },
      { url: "/Robotics/IMG_5951.jpeg", caption: "Community STEM outreach." },
    ],
  },
  {
    id: "woodland",
    title: "Woodland Middle School Robotics Club Leader",
    kicker: "Woodland Middle School, Aug 2022-Present",
    description:
      "Established a STEM program for 20+ middle school students and helped two teams qualify for VEX IQ World Championships.",
    duration: "Aug 2022 - Present",
    responsibilities: [
      "Age-appropriate curriculum",
      "School and parent coordination",
      "Safety and assessments",
      "Individualized mentorship",
    ],
    skills: ["Teaching", "Workshop Design", "Patience"],
    keyMetrics: [
      "20+ students",
      "2 teams to VEX IQ Worlds",
      "Reusable curriculum",
    ],
    achievements: [
      "First robotics program at Woodland",
      "Highest competitive success rate in district",
      "Curriculum adopted by other middle schools",
      "80% continued STEM",
    ],
    impactNarrative:
      "The program helped middle school students build confidence and compete successfully at the highest levels.",
    photos: [
      { url: "/logos/vex-iq.png", caption: "VEX IQ logo." },
      {
        url: "/Robotics/IMG_1084.jpeg",
        caption: "Woodland robotics mentorship.",
      },
      { url: "/TSA/IMG_5537.jpeg", caption: "Volunteer recognition." },
    ],
  },
  {
    id: "mun",
    title: "Model UN Secretary General",
    kicker: "Ravenwood High School Model UN, 2022-2023",
    description:
      "Led 15+ Secretariat members, organized three Model UN conferences, led 800+ delegates, delivered two keynotes, led two Plenary summits, secured 500+ voter pledges, and received the MUN Nobel Peace Prize.",
    duration: "Jul 2022 - Jun 2023",
    responsibilities: [
      "Secretariat training",
      "Conference themes and crisis scenarios",
      "Venue logistics",
      "Delegate materials",
      "Registration",
      "QR-code voter registration campaign",
    ],
    skills: [
      "Diplomacy",
      "Event Planning",
      "Leadership",
      "Civic Engagement",
      "Digital Campaign Management",
    ],
    keyMetrics: [
      "800+ delegates",
      "15+ Secretariat members",
      "500+ voter pledges",
      "2 keynotes",
      "2 Plenary summits",
      "3 conferences",
      "MUN Nobel Peace Prize",
    ],
    achievements: [
      "Tennessee's largest high school MUN program",
      "QR voter registration model",
      "Regional crisis simulation",
      "Statewide delegate guides",
      "15% youth voter registration increase",
    ],
    impactNarrative:
      "The voter registration campaign became a model for other conferences statewide and strengthened youth civic engagement.",
    photos: [
      { url: "/logos/model-un.png", caption: "Model UN logo." },
      { url: "/MUN/VihaangoingtoMUN.jpeg", caption: "Preparing for Model UN." },
      { url: "/MUN/VihaanMUN.jpeg", caption: "MUN conference leadership." },
    ],
  },
  {
    id: "nriva",
    title: "NRIVA Youth Committee National Lead",
    kicker: "North Region Indian Volunteers Association, 2023-Present",
    description:
      "Orchestrated a $105,000 campaign to provide 10,000 backpacks to underserved children across all 50 states while directing 75+ state-level youth coordinators and serving 15,000+ families annually.",
    duration: "Jun 2023 - Present",
    responsibilities: [
      "Roadmaps and KPIs",
      "Volunteer recruitment and training",
      "Social campaigns",
      "School and community partnerships",
      "Budget allocation and reporting",
    ],
    skills: [
      "Project Management",
      "Cross-cultural Communication",
      "Fundraising",
    ],
    keyMetrics: [
      "$105K campaign",
      "10,000 backpacks",
      "75+ coordinators",
      "15,000+ families",
      "50-state coverage",
    ],
    achievements: [
      "Largest youth-led NRIVA education support program",
      "Organization-wide fundraising strategy",
      "50-state volunteer network",
      "Replicable program model",
      "95% volunteer retention",
      "200+ partner schools and organizations",
    ],
    impactNarrative:
      "The campaign removed educational barriers for students and showed the power of organized community advocacy.",
    photos: [
      { url: "/logos/nriva.png", caption: "NRIVA logo." },
      { url: "/NRIVA/IMG_5946.jpeg", caption: "NRIVA outreach." },
      {
        url: "/NRIVA/IMG_5949.jpeg",
        caption: "Backpack distribution campaign.",
      },
      { url: "/NRIVA/IMG_5950.jpeg", caption: "Youth committee leadership." },
    ],
  },
]

export const technicalSkills = [
  "React",
  "CSS",
  "JavaScript",
  "Python",
  "HTML",
  "Google Firebase",
  "GSuite",
  "C++",
  "AWS Strands SDK",
  "Claude AI",
  "TensorFlow",
  "OpenCV",
  "Node.js",
  "D3.js",
  "API Testing",
]

export type CardInsight = {
  role: string
  impact: string
  build: string
  direction: string
  metrics: string[]
}

export const cardInsights: Record<string, CardInsight> = {
  portfolio: {
    role: "Personal platform",
    impact:
      "Turns a long resume into navigable case studies with accessible structure and visual proof.",
    build:
      "Designed the content system, project galleries, modal details, contact paths, and responsive layout.",
    direction:
      "Shows how I think about product storytelling, accessibility, and making technical work legible.",
    metrics: ["WCAG-minded", "Responsive", "Case-study driven"],
  },
  investedu: {
    role: "Founder / builder",
    impact:
      "Helped young adults learn investing through calculators, quizzes, budgeting tools, and AI support.",
    build:
      "Built compound-interest simulations, glossary flows, comparison tools, and learning modules around finance fundamentals.",
    direction:
      "Education products interest me most when they turn intimidating concepts into something people can actually use.",
    metrics: ["500+ beta users", "2.8K monthly views", "+25% comprehension"],
  },
  care: {
    role: "Healthcare product lead",
    impact:
      "Supported dialysis patients and clinic staff through meal planning, scheduling, and cancellation workflows.",
    build:
      "Translated clinic needs into patient-facing app features, Firebase-backed workflows, and implementation materials.",
    direction:
      "This is the clearest example of my interest in software that improves real operations and care delivery.",
    metrics: ["200+ patients", "13% to 2% no-shows", "109+ downloads"],
  },
  dialysense: {
    role: "Wearable healthcare founder",
    impact:
      "Helped dialysis patients track fatigue in real time and share exportable data with clinicians.",
    build:
      "Built a GSR-based Arduino wearable with HM-10 Bluetooth, live app dashboards, symptom tracking, and an AI assistant.",
    direction:
      "This project connects hardware, patient experience, and clinician-facing data into one healthcare workflow.",
    metrics: ["200+ ICDC teams", "2,000+ global teams", "GSR + Arduino"],
  },
  elderhelper: {
    role: "Embedded systems builder",
    impact:
      "Explored medication safety and fall detection through a physical IoT prototype for elderly care.",
    build:
      "Combined Arduino, motion sensing, servo dispensing, alerts, and a custom enclosure into one working device.",
    direction:
      "It pushed me beyond web apps into hardware, reliability, and human-centered assistive technology.",
    metrics: ["95% fall detection", "72+ hr battery", "Arduino/C++"],
  },
  "nfl-ai": {
    role: "ML researcher",
    impact:
      "Compared AI prediction against analyst consensus to study whether models could identify sports-betting edges.",
    build:
      "Collected season data, structured prompts and comparisons, validated results, and analyzed ROI patterns.",
    direction:
      "This sharpened how I evaluate models against real baselines instead of just demoing outputs.",
    metrics: ["58% spread success", "+7% vs analysts", "Backtested"],
  },
  "nfl-predictor": {
    role: "Research-to-product builder",
    impact:
      "Turned the original NFL betting research into a deployed predictor for upcoming games and custom sportsbook lines.",
    build:
      "Built walk-forward ML training, saved scikit-learn models, a FastAPI backend, React frontend, and automated data refreshes.",
    direction:
      "This is the applied follow-through: taking a research question and making it usable as software.",
    metrics: ["6 model artifacts", "FastAPI + React", "Daily refresh"],
  },
  "exercise-ai": {
    role: "Computer vision researcher",
    impact:
      "Used pose estimation to flag exercise form issues and reduce injury risk through real-time feedback.",
    build:
      "Worked with annotated video, YOLO keypoints, classification, and form-correction logic.",
    direction:
      "I like applied AI most when the model output becomes immediate, useful feedback for a person.",
    metrics: ["92% accuracy", "YOLO keypoints", "OpenCV"],
  },
  karini: {
    role: "Full-stack AI engineering",
    impact:
      "Helped migrate enterprise automation recipes and improve platform performance for AI workflows.",
    build:
      "Worked across React, Node, Python, Claude AI, AWS Strands SDK migration, and integration details.",
    direction:
      "This connected my product instincts with production AI infrastructure and enterprise reliability.",
    metrics: ["600+ recipes", "98.5% accuracy", "+12% performance"],
  },
  hsr: {
    role: "Health analytics engineer",
    impact:
      "Built geospatial health-risk visualization support for ocean pollution and environmental policy work.",
    build:
      "Worked on data processing, D3 visualizations, Express endpoints, QA, and stakeholder documentation.",
    direction:
      "It sits at the intersection of data infrastructure, public health, and environmental decision-making.",
    metrics: ["27% oceans analyzed", "D3.js", "API testing"],
  },
  robotix: {
    role: "Robotics instructor",
    impact:
      "Taught robotics to younger students and made instruction more consistent through reusable curriculum.",
    build:
      "Created lesson plans, delivered hands-on programming and engineering workshops, and managed classroom progress.",
    direction:
      "Teaching keeps me honest: if I understand something, I should be able to make it approachable.",
    metrics: ["80+ students", "150+ lessons", "K-8 robotics"],
  },
  tsa: {
    role: "STEM club vice president",
    impact:
      "Helped lead a large STEM competition organization with record-setting participation and awards.",
    build:
      "Coordinated event strategy, logistics, sponsorship outreach, mentorship, and executive-board operations.",
    direction:
      "This shaped how I organize technical teams and create systems that help people do better work.",
    metrics: ["200+ members", "40+ events", "150+ awards"],
  },
  "robotics-club": {
    role: "Robotics co-president",
    impact:
      "Mentored teams, raised funding, and helped sustain a Worlds-level competitive robotics program.",
    build:
      "Built training systems, managed inventory, coordinated travel, ran fundraising, and mentored programmers.",
    direction:
      "Robotics taught me how technical execution, team culture, and funding all have to work together.",
    metrics: ["4x Worlds", "25+ awards", "$5K raised"],
  },
  woodland: {
    role: "Middle-school mentor",
    impact:
      "Started a robotics program and helped younger students reach VEX IQ World Championships.",
    build:
      "Designed age-appropriate lessons, coordinated with parents and school staff, and coached teams hands-on.",
    direction:
      "This is the service side of my STEM work: building confidence before students think they are technical.",
    metrics: ["20+ students", "2 Worlds teams", "Reusable curriculum"],
  },
  mun: {
    role: "Secretary General",
    impact:
      "Led conferences, Secretariat members, civic engagement work, and hundreds of delegates.",
    build:
      "Managed conference themes, crisis scenarios, delegate guides, logistics, and voter-registration systems.",
    direction:
      "Model UN trained the communication side of leadership: clarity, diplomacy, and large-event execution.",
    metrics: ["800+ delegates", "500+ pledges", "3 conferences"],
  },
  nriva: {
    role: "National youth lead",
    impact:
      "Coordinated a nationwide backpack campaign supporting underserved students and families.",
    build:
      "Managed coordinators, volunteer systems, fundraising plans, social campaigns, and partner outreach.",
    direction:
      "This is where logistics, community service, and national-scale coordination meet.",
    metrics: ["$105K campaign", "10K backpacks", "75+ coordinators"],
  },
}

export const currentFocus = [
  {
    title: "Building products people can actually use",
    body: "Finance education, healthcare workflows, and AI tools all show up because I care about software that changes someone’s behavior or day-to-day work.",
  },
  {
    title: "Learning CS at Berkeley",
    body: "I’m grounding the same builder energy in stronger fundamentals: systems, algorithms, AI, and the discipline to make ambitious projects durable.",
  },
  {
    title: "Turning projects into proof",
    body: "Each project page shows what I did, what changed, and what it says about how I work.",
  },
]
