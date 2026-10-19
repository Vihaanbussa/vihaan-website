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
      "I won $1,000 and the Most Engaging Presentation Award in a field of 800+ submissions from 40+ countries.",
    highlights: ["$1,000 in prize money", "40+ countries", "800+ submissions"],
    year: "2025",
  },
  {
    title: "8th at DECA ICDC",
    context:
      "I placed 8th in the world in Innovation Plan, against the 200 teams that made it to ICDC out of 2,000+ internationally.",
    highlights: ["200 ICDC teams", "2,000+ international teams"],
    year: "2026",
  },
  {
    title: "3x Tennessee DECA State Champion",
    context:
      "I won state titles from 2024 to 2026 in Innovation Plan, Integrated Marketing Campaign - Service, and Business Solutions Project.",
    year: "2024-2026",
  },
  {
    title: "VEX Robotics State Champion, 4x Worlds Qualifier",
    context:
      "I was a state champion, picked up 20+ local awards and a few international ones, and took 2nd at the Bristol International Competition.",
    highlights: ["20+ local awards"],
    year: "2022-2025",
  },
  {
    title: "Technology Student Association",
    context:
      "I took 1st in Tennessee in Robotics and 2nd in Webmaster / Drone Challenge against 200+ teams.",
    highlights: [
      "1st in Tennessee state in Robotics",
      "2nd in Webmaster / Drone Challenge",
      "200+ teams",
    ],
    year: "2022-2025",
  },
  {
    title: "National Merit Scholar",
    context: "I scored in the top 1% of PSAT/NMSQT students nationwide.",
    highlights: ["top 1%"],
    year: "2025",
  },
  {
    title: "YC Startup School",
    context:
      "I was hand-picked for Y Combinator's builder program from 30,000+ applicants.",
    highlights: ["30,000+ applicants"],
    year: "2026",
  },
  {
    title: "Model UN Nobel Peace Prize",
    context:
      "Tennessee YMCA staff picked me as the sole recipient out of 900+ students for diplomacy and collaboration.",
    highlights: [
      "Sole recipient",
      "900+ students",
      "diplomacy and collaboration efforts",
    ],
    year: "2025",
  },
]

export const metrics = [
  { value: "28,000", label: "InvestEDU users" },
  { value: "200+", label: "patients across 15 clinics through Project CARE" },
  { value: "600+", label: "client configurations migrated at Karini AI" },
  { value: "900", label: "Model UN delegates led" },
]

export const projects: DetailItem[] = [
  {
    id: "investedu",
    title: "InvestEDU",
    kicker: "Financial education platform, 2023 - Present",
    description:
      "I built a financial-literacy platform that pairs Desmos-based market simulations with adaptive quizzes. It's at 28,000 users now.",
    overview:
      "I started InvestEDU to teach teenagers why investing early matters. It pairs Desmos-based market simulations with adaptive quizzes that resurface whatever you missed, plus calculators, a glossary, budgeting tools, and an AI assistant. It took off when a 120-student macroeconomics class adopted it for classwork mid-semester, and it's now at 28,000 users across 45 teachers, 12 student clubs, and 3 nonprofits. Among the 18 students I formally tested, comprehension rose 25%.",
    details:
      "What I used: the Desmos API, SVG graphing, Vercel, A=Pe^(rt) compound growth math, and a spaced-repetition engine I wrote that reweights each question by past misses and keeps review sets to a student's 20 concepts. What's in it: a budgeting simulator, an investment scenario builder, progress tracking, achievement badges, community challenge boards, an investment comparison tool, a calculator, a glossary, a personality quiz, and AI guidance.",
    tags: ["React", "JavaScript", "CSS", "Financial Education"],
    keyMetrics: [
      "28,000 users",
      "45 teachers, 12 student clubs, and 3 nonprofits",
      "25% comprehension gain across the 18 students formally tested",
      "Adopted mid-semester by a 120-student macroeconomics course",
    ],
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
    kicker: "Dialysis Clinic, Inc., Aug 2024 - May 2025",
    description:
      "I was the technical lead for Project CARE at Dialysis Clinic, Inc., shipping renal nutrition guidance and self-service scheduling to 200+ patients across 15 clinics.",
    overview:
      "Project CARE makes life a little easier for dialysis patients and the clinics that care for them. During my internship at Dialysis Clinic, Inc. I led it as technical lead: I shipped renal nutrition guidance to 200+ patients across 15 clinics (280+ downloads) and replaced phone scheduling with self-service booking, rolled out across DCI clinics in Tennessee and Georgia.",
    details:
      "About DCI: a nonprofit dialysis provider founded in 1971 that runs 250+ clinics and serves 15,000+ patients. What changed: no-shows fell 11%, handling a cancellation went from 3.5 minutes to 15 seconds, schedule changes reached clinics in under 5 seconds through a Firestore listener at 99.6% uptime across the pilot, and clinics got back 6 staff hours and $1,100+ in wasted dialyzers every month.",
    duration: "Aug 2024 - May 2025",
    tags: ["React Native", "Firebase", "Healthcare", "UI/UX", "Social Impact"],
    keyMetrics: [
      "200+ patients across 15 clinics",
      "280+ downloads",
      "No-shows cut 11%",
      "Cancellation handling from 3.5 minutes to 15 seconds",
      "Schedule changes delivered in under 5 seconds at 99.6% uptime",
      "6 staff hours and $1,100+ in dialyzers saved monthly",
    ],
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
      "$215 spent so far: Canva Pro, the domain, and app publication",
      "$36,000 planned: hosting, marketing, and AI model training",
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
      "I built a wearable fatigue tracker for dialysis patients with a GSR sensor, an Arduino, Bluetooth, a companion app, and an AI assistant.",
    overview:
      "DialySense is a wearable I designed specifically for dialysis patients to track fatigue. A GSR (galvanic skin response) sensor, an Arduino UNO, and an HM-10 Bluetooth module feed live fatigue data into a companion app, and patients can export that data for their clinicians to review.",
    details:
      "How it works: a skin-conductivity sensor with an onboard calibration flow sends readings over Bluetooth to the app, which has a fatigue dashboard, a symptom journal, a fatigue guide, and an AI health assistant. Patients can watch live fatigue trends, export data for clinicians, and ask the assistant questions.",
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
          "I used calibrated GSR readings to turn changes in skin conductivity into a live fatigue trend.",
      },
      {
        problem: "Keeping clinicians in the loop",
        solution:
          "I made the fatigue data exportable so clinicians can review trends between appointments.",
      },
      {
        problem: "Helping patients interpret results",
        solution:
          "I connected the app to an AI assistant so patients can ask about their fatigue and symptom patterns.",
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
    kicker: "1st of 800+ entries worldwide, IEEE SSCS Arduino Contest 2025",
    description:
      "I built a two-part Arduino device for seniors: an accelerometer fall detector with buzzer and phone alerts, and a servo pill dispenser.",
    overview:
      "ElderHelper helps older adults with medication and safety. I built it for the IEEE SSCS Arduino Contest, where it placed 1st of 800+ entries worldwide. It combines an accelerometer fall detector with buzzer and phone alerts, medication reminders, hydration alerts, and automatic pill dispensing.",
    details:
      "What I used: an Arduino Uno, a 3-axis MPU6050 accelerometer and gyroscope, servo motors, an LCD, a buzzer, a real-time clock module, Bluetooth, C++, and a Swift app. What I got working: fall detection tuned to ignore sitting and stair steps, which cut false alarms to under 1 per day in testing; 12-hour dosing across 4 compartments on the real-time clock; hydration alerts in heat, which is behind about 1 in 4 falls; 10 sensors linked over Bluetooth to a 5-screen Swift app with live temperature, fall and dose logs, location, and prevention guides; plus a custom enclosure and 72+ hours of battery life.",
    tags: ["Arduino", "IoT", "Electronics", "Healthcare", "C++", "Swift"],
    keyMetrics: [
      "1st of 800+ entries worldwide",
      "Under 1 false alarm per day in testing",
      "4-compartment, 12-hour dosing schedule",
      "10 sensors over Bluetooth",
      "5-screen Swift companion app",
    ],
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
        solution: "I used multi-axis thresholds with time-based validation.",
      },
      {
        problem: "Reliable dispensing",
        solution:
          "I paired precision servos with 3D-printed dispensing wheels.",
      },
      {
        problem: "Power management",
        solution: "I added sleep modes and slowed down sensor polling.",
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
      "I analyzed historical NFL data to see whether AI could predict outcomes and beat betting spreads.",
    overview:
      "For this research I applied machine learning to sports betting markets and compared AI predictions against professional analysts. I did it as advanced high school research (AP Research), focused on ROI and spread-betting accuracy.",
    details:
      "Methodology: I collected 2023-2024 NFL data, compared Google Gemini against NFL analysts, and ran temporal trend analysis. Findings: Gemini hit 58% on spread bets, beat the expert consensus by 7%, and made a decent case for AI in sports forecasting. Validation: 2022-2023 backtesting, a literature-review comparison, and a comparison against Vegas oddsmakers.",
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
        solution: "I curated standardized datasets for the Gemini evaluation.",
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
    title: "AI-Based NFL Game Predictor",
    kicker: "Research Paper Part 2, ML product build, 2025 - Present",
    description:
      "I trained six ML models on 130+ pregame stats from 1,964 games, beat the betting spread on 53% of picks, and shipped it as an API and a React site.",
    overview:
      "This is part two of my NFL prediction research. Instead of only comparing AI picks against analysts, I built a working product that predicts upcoming games from engineered football features, saved ML models, and whatever sportsbook lines you type in.",
    details:
      "Data pipeline: I pulled schedules, play-by-play, team stats, player stats, injuries, depth charts, rosters, draft picks, expected starting quarterbacks, weather, rest, Elo, and sportsbook lines from nflverse through nflreadpy, then cleaned and joined everything with Polars, pandas, and NumPy into one pre-game row per matchup.\n\nFeature engineering: Every row only uses information available before kickoff. I built recent-form features for EPA, success rate, explosive plays, red-zone efficiency, passing and rushing output, turnovers, sacks, penalties, pace, quarterback performance, injury burden, roster strength, rookie impact, and betting-market context, then cut 130 inputs down to the 40 that actually carried the prediction.\n\nModel training: I used walk-forward validation so future games could never leak into earlier predictions. I trained separate scikit-learn pipelines for moneyline, spread, over/under, home score, away score, and total residual, compared logistic regression against histogram gradient boosting, judged probability quality with log loss, Brier score, accuracy, and ROC-AUC, and saved the winners with Joblib.\n\nProduct build: I serve the saved models from a FastAPI and Pydantic backend that takes custom lines and returns projected scores, probabilities, and expected-value sides. A React and Vite frontend sits on top, deployed through GitHub Pages, with the backend on Render and a GitHub Action that refreshes the data and retrains in under 4 minutes each morning.",
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
      "I collected and processed NFL data with nflreadpy, Polars, pandas, NumPy, and nflverse datasets.",
      "I built leakage-safe pre-game features from historical schedules, play-by-play, injuries, rosters, quarterbacks, draft picks, and betting lines.",
      "I trained and compared scikit-learn pipelines for moneyline, spread, total, score, and residual prediction.",
      "I served the models through FastAPI and Pydantic and wired them to a React/Vite frontend.",
      "I deployed the frontend on GitHub Pages, the backend on Render, and the data refreshes through GitHub Actions.",
    ],
    achievements: [
      "I turned the original AP Research paper into a live machine-learning product people can use.",
      "I engineered rolling team-form, injury, rest, and weather features, then cut 130 inputs to the 40 that carried the prediction.",
      "I backtested season by season rather than on random splits, so no model ever trained on a game played after the one it predicted.",
      "I trained separate models for moneyline, spread, over/under, projected scores, and total residuals.",
    ],
    keyMetrics: [
      "1,964 games and 130+ pregame stats",
      "53% of picks beat the betting spread",
      "68% confidence-weighted accuracy across 570 unseen games",
      "40 features kept from 130 inputs",
      "6 saved model artifacts",
      "Retrains in under 4 minutes each morning via GitHub Actions",
    ],
    challenges: [
      {
        problem: "Data leakage",
        solution:
          "I built each row only from information available before that game and validated by season.",
      },
      {
        problem: "Line movement",
        solution:
          "I made sportsbook lines a user input so predictions can be rerun with current odds.",
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
      "I used computer vision to analyze and correct workout posture in real time.",
    overview:
      "This research looks at how deep learning can process live video to catch and correct exercise form, cutting injury risk and improving performance.",
    details:
      "Methodology: I collected five hours of annotated workout footage, used Ultralytics YOLO for keypoint detection, and trained a CNN to classify correct versus incorrect form. Findings: 92% posture classification accuracy across 100 tests, plus a working prototype for form-safety feedback.",
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
        solution: "I augmented the dataset with synthetic rotations.",
      },
      {
        problem: "Low light and occlusion",
        solution: "I used adaptive histogram equalization and dropout layers.",
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
    title: "Software Engineering Intern",
    kicker: "Karini AI, Summer 2026",
    description:
      "I automated the migration of 600+ client configurations onto the AWS Strands SDK platform across 500+ live accounts with zero downtime, and shipped onboarding and prompt-tool upgrades along the way.",
    duration: "Jun 2026 - Aug 2026",
    responsibilities: [
      "I automated the migration of 600+ client configurations onto the AWS Strands SDK platform across 500+ live accounts, with no downtime.",
      "I built an automated test suite that caught 13 critical conversion errors before they reached accounts and saved about 3 weeks of manual review.",
      "I consolidated setup across 4 product areas into a single guided flow, cutting the time to a client's first live product by 50%.",
      "I shipped 5 upgrades to the tool clients use to write and test AI prompts, cutting pre-launch revisions by 30%.",
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
      "600+ client configurations migrated",
      "500+ live accounts, no downtime",
      "13 critical conversion errors caught before release",
      "3 weeks of manual review cut",
      "50% faster time to a client's first live product",
      "30% fewer pre-launch prompt revisions",
    ],
    achievements: [
      "Zero-downtime migration across 500+ live accounts",
      "An automated test suite for configuration conversion",
      "One guided setup flow across 4 product areas",
      "5 upgrades to the prompt authoring and testing tool",
    ],
    impactNarrative:
      "The configurations I migrated now run enterprise automation for 500+ live accounts, and the new setup flow and prompt tooling cut the manual work clients do before launch.",
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
    title: "Software Engineering Intern",
    kicker: "HSR.health, Summer 2025",
    description:
      "I built Poseidon, an interactive map of 8M tons of plastic across 27% of the world's oceans and the 250M coastal residents at risk.",
    duration: "Jun 2025 - Aug 2025",
    responsibilities: [
      "I built Poseidon, an interactive map of 8M tons of plastic across 27% of the world's oceans and the 250M coastal residents at risk.",
      "I automated quality checks across 12 mapping and environmental datasets, which cut processing time 40% on every run.",
      "I ranked 140 coastal regions by plastic exposure and flagged the top 20 as first priority for the next round of cleanup funding.",
      "I built the D3.js visualizations and Express REST endpoints behind the map.",
      "I validated data with the researchers and wrote the stakeholder documentation.",
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
      "8M tons of plastic mapped",
      "27% of the world's oceans",
      "250M coastal residents at risk",
      "12 datasets with automated quality checks",
      "40% faster processing on every run",
      "140 coastal regions ranked, top 20 flagged",
    ],
    achievements: [
      "Poseidon, an interactive ocean-plastic map",
      "Automated QA across 12 mapping and environmental datasets",
      "A priority list of 20 coastal regions for cleanup funding",
      "Environmental data presentation standards",
    ],
    impactNarrative:
      "Poseidon gave the researchers a ranked view of coastal plastic exposure and flagged the 20 regions that most needed the next round of cleanup funding.",
    photos: [
      { url: "/logos/hsr-health.png", caption: "HSR.Health logo." },
      {
        url: "/DECADCI/project-care-impact-report.jpeg",
        caption: "Environmental health dashboard reference.",
      },
    ],
  },
  {
    id: "dci",
    title: "Software Engineering Intern, Project CARE Technical Lead",
    kicker: "Dialysis Clinic, Inc., Nashville, 2024 - 2025",
    description:
      "I led Project CARE as technical lead, shipping renal nutrition guidance to 200+ patients across 15 clinics and replacing phone scheduling with self-service booking.",
    duration: "Aug 2024 - May 2025",
    responsibilities: [
      "I led Project CARE as technical lead and shipped renal nutrition guidance to 200+ patients across 15 clinics, with 280+ downloads.",
      "I replaced phone scheduling with self-service booking, which cut no-shows 11% and cancellation handling from 3.5 minutes to 15 seconds.",
      "I delivered schedule changes to clinics in under 5 seconds through a Firestore listener and held 99.6% uptime across the pilot.",
      "I moved cancellations and rebooking to patient self-service, freeing 6 staff hours and $1,100+ in wasted dialyzers every month.",
    ],
    skills: ["React Native", "Firebase", "Firestore", "Healthcare", "UI/UX"],
    keyMetrics: [
      "200+ patients across 15 clinics",
      "280+ downloads",
      "No-shows cut 11%",
      "Cancellation handling from 3.5 minutes to 15 seconds",
      "99.6% uptime across the pilot",
      "6 staff hours and $1,100+ in dialyzers saved monthly",
    ],
    impactNarrative:
      "Scheduling and nutrition guidance now sit in patients' hands, no-shows dropped, and clinic staff got hours back every month.",
    links: [{ label: "Project CARE case study", url: "#/projects/care" }],
    photos: [
      {
        url: "/DECADCI/IMG_2568.jpeg",
        caption: "Project CARE team at DCI headquarters.",
      },
      {
        url: "/DECADCI/dci-meeting-screenshot.jpeg",
        caption: "DCI executive meeting.",
      },
    ],
  },
  {
    id: "robotix",
    title: "Robotics Instructor",
    kicker: "RobotiX Institute, 2022-2024",
    description:
      "I taught and mentored 80+ students and built a centralized curriculum database with 150+ lesson plans.",
    duration: "Jun 2022 - Jan 2024",
    responsibilities: [
      "I designed the K-8 robotics curriculum",
      "I taught hands-on engineering lessons",
      "I assessed student progress",
      "I kept the equipment running and safe",
      "I built the lesson plan database",
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
      "The hands-on lessons got a lot of students to keep going with robotics and engineering after the program.",
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
      "I co-led a 200+ member STEM competition club, coordinated strategy for 40+ events, and helped the club collect 150+ awards.",
    duration: "Aug 2022 - Present",
    responsibilities: [
      "I ran event schedules, budgets, and logistics",
      "I handled sponsorship outreach",
      "I kept the executive board running",
      "I led strategic planning",
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
      "The hybrid events kept students engaged and got a lot more of them in front of STEM careers.",
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
    title: "Robotics Club Coding Co-President",
    kicker: "Ravenwood High School Robotics Club, 2024-2026",
    description:
      "I wrote and taught a 10-week C++, robot control, navigation, and CAD curriculum for 18+ first-time builders, led 4 programmers on Monte Carlo localization, and tuned our autonomous routine from 6 of 10 scoring runs to 9 of 10.",
    duration: "Aug 2024 - May 2026",
    responsibilities: [
      "I wrote and taught a 10-week curriculum in C++, robot control, navigation, and CAD, training 18+ first-time student builders.",
      "I led 4 programmers writing the robot's self-positioning code (Monte Carlo localization) and got field error under 2 cm.",
      "I tuned the 15-second autonomous routine with PID heading control, taking its scoring consistency from 6 of 10 runs to 9 of 10.",
      "I managed $15,000+ of inventory, competition logistics, fundraising, recruitment, and social media.",
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
      "18+ first-time builders trained",
      "Field localization error under 2 cm",
      "Autonomous consistency from 6 of 10 runs to 9 of 10",
      "4 consecutive World Championships",
      "25+ awards",
      "$5,000 raised through a STEM camp",
    ],
    achievements: [
      "Most successful robotics program in school history",
      "Excellence Award at VEX Worlds",
      "95% retention training program",
      "Diverse team recruitment",
      "Sustainable funding model",
    ],
    impactNarrative:
      "Our STEM summer camp introduced 45 younger students to robotics, and 80% of them said they wanted to pursue STEM afterward.",
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
      "I started a STEM program for 20+ middle schoolers and helped two teams qualify for the VEX IQ World Championships.",
    duration: "Aug 2022 - Present",
    responsibilities: [
      "I wrote age-appropriate curriculum",
      "I coordinated with the school and parents",
      "I handled safety and assessments",
      "I mentored students one on one",
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
      "The program helped middle schoolers build confidence and compete at the highest level.",
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
    title: "Model UN Secretary-General",
    kicker: "Tennessee Model United Nations, 2024-2025",
    description:
      "I was elected Secretary-General (Head of Conference) and led 30 student officers running a three-day, 900-delegate, 12-committee conference across 22 Tennessee schools. We raised $25,000 and registered 550+ delegates to vote.",
    duration: "Nov 2024 - Nov 2025",
    responsibilities: [
      "I was elected to lead 30 student officers running a three-day, 900-delegate, 12-committee conference across 22 Tennessee schools.",
      "I raised $25,000 in sponsorship and registration revenue, which covered 40% of conference costs and kept delegate fees at $225.",
      "I registered 550+ delegates to vote (61% of attendance) through 6 nonpartisan sign-up tables staffed between every committee session.",
      "I set the conference themes and crisis scenarios and handled delegate materials, venue logistics, and registration.",
    ],
    skills: [
      "Diplomacy",
      "Event Planning",
      "Leadership",
      "Civic Engagement",
      "Digital Campaign Management",
    ],
    keyMetrics: [
      "900 delegates",
      "30 student officers",
      "12 committees across 22 schools",
      "$25,000 raised, 40% of conference costs",
      "550+ delegates registered to vote (61% of attendance)",
      "2 keynotes",
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
      "The voter registration drive became a model for other conferences across the state and got a lot more young people registered.",
    photos: [
      { url: "/logos/model-un.png", caption: "Model UN logo." },
      { url: "/MUN/VihaangoingtoMUN.jpeg", caption: "Preparing for Model UN." },
      { url: "/MUN/VihaanMUN.jpeg", caption: "MUN conference leadership." },
    ],
  },
  {
    id: "nriva",
    title: "NRIVA National Youth Committee Co-Chair",
    kicker: "Non-Resident Indian Vasavi Association, 2022-2025",
    description:
      "I coordinated the $105,000 Back2School campaign, built the strategy, forms, and targets that 30 state leads ran their drives from, and sourced and routed 10,000 backpacks to kids in 26 states.",
    duration: "Aug 2022 - Jan 2025",
    responsibilities: [
      "I set roadmaps and KPIs",
      "I recruited and trained volunteers",
      "I ran the social campaigns",
      "I built school and community partnerships",
      "I handled budget allocation and reporting",
    ],
    skills: [
      "Project Management",
      "Cross-cultural Communication",
      "Fundraising",
    ],
    keyMetrics: [
      "$105,000 Back2School campaign",
      "10,000 backpacks",
      "26 states",
      "30 state leads",
      "30% off vendor pricing through bulk buys",
    ],
    achievements: [
      "Largest youth-led NRIVA education support program",
      "Organization-wide fundraising strategy",
      "Replicable program model",
      "95% volunteer retention",
      "200+ partner schools and organizations",
    ],
    impactNarrative:
      "The campaign knocked down a real barrier for a lot of students and showed what organized community advocacy can do.",
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

export const skillGroups = [
  {
    label: "Languages",
    items: [
      "Python",
      "C++",
      "Java",
      "HTML/CSS",
      "Swift",
      "JavaScript",
      "SQL",
      "React",
    ],
  },
  {
    label: "Data / ML / Cloud",
    items: [
      "scikit-learn",
      "AWS",
      "Firebase",
      "Arduino",
      "Git",
      "Google Workspace",
      "Pandas",
      "NumPy",
      "Node.js",
      "FastAPI",
      "Rasterio",
    ],
  },
]

export const technicalSkills = skillGroups.flatMap((group) => group.items)

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
      "I turned a long resume into case studies you can actually navigate.",
    build:
      "I designed the content system, the galleries, the detail pages, the contact paths, and the responsive layout.",
    direction:
      "It shows how I think about product storytelling, accessibility, and making technical work legible.",
    metrics: ["WCAG-minded", "Responsive", "Case-study driven"],
  },
  investedu: {
    role: "Founder / builder",
    impact:
      "I built InvestEDU to help young adults learn investing through Desmos-based market simulations, adaptive quizzes, budgeting tools, and AI support. It's reached 28,000 users.",
    build:
      "I built the compound-interest simulations, a spaced-repetition engine that reweights questions by past misses, the glossary, the comparison tools, and the learning modules.",
    direction:
      "Education products interest me most when they turn intimidating concepts into something people can actually use.",
    metrics: ["28,000 users", "45 teachers", "+25% comprehension"],
  },
  care: {
    role: "Technical lead, Dialysis Clinic, Inc.",
    impact:
      "I shipped renal nutrition guidance and self-service scheduling to 200+ dialysis patients across 15 clinics and cut no-shows 11%.",
    build:
      "I turned what the clinics needed into patient-facing app features, Firestore-backed scheduling that reaches clinics in under 5 seconds, and the rollout materials.",
    direction:
      "This is the clearest example of my interest in software that improves real operations and care delivery.",
    metrics: [
      "200+ patients, 15 clinics",
      "No-shows cut 11%",
      "280+ downloads",
    ],
  },
  dialysense: {
    role: "Wearable healthcare founder",
    impact:
      "I helped dialysis patients track fatigue in real time and share exportable data with their clinicians.",
    build:
      "I built a GSR-based Arduino wearable with HM-10 Bluetooth, live app dashboards, symptom tracking, and an AI assistant.",
    direction:
      "This one connects hardware, patient experience, and clinician-facing data into a single workflow.",
    metrics: ["200+ ICDC teams", "2,000+ global teams", "GSR + Arduino"],
  },
  elderhelper: {
    role: "Embedded systems builder",
    impact:
      "I won 1st of 800+ entries worldwide at the IEEE SSCS Arduino Contest 2025 with a fall detector and pill dispenser for seniors.",
    build:
      "I tuned 3-axis fall detection to ignore sitting and stair steps, scheduled 12-hour dosing across 4 compartments on a real-time clock, and linked 10 sensors over Bluetooth to a 5-screen Swift app.",
    direction:
      "It pushed me beyond web apps into hardware, reliability, and human-centered assistive technology.",
    metrics: [
      "1st of 800+ worldwide",
      "Under 1 false alarm per day",
      "10 Bluetooth sensors",
    ],
  },
  "nfl-ai": {
    role: "ML researcher",
    impact:
      "I compared AI predictions against analyst consensus to see whether models could find real sports-betting edges.",
    build:
      "I collected season data, structured the prompts and comparisons, validated the results, and analyzed ROI patterns.",
    direction:
      "This sharpened how I evaluate models against real baselines instead of just demoing outputs.",
    metrics: ["58% spread success", "+7% vs analysts", "Backtested"],
  },
  "nfl-predictor": {
    role: "Research-to-product builder",
    impact:
      "I turned the original NFL betting research into a deployed predictor: six models trained on 130+ pregame stats from 1,964 games, beating the spread on 53% of picks.",
    build:
      "I engineered rolling team-form, injury, rest, and weather features, cut 130 inputs to 40, backtested season by season, and served it all through FastAPI, a React frontend, and a GitHub Action that retrains in under 4 minutes each morning.",
    direction:
      "This is the applied follow-through: taking a research question and making it usable as software.",
    metrics: ["53% vs the spread", "68% weighted accuracy", "6 models"],
  },
  "exercise-ai": {
    role: "Computer vision researcher",
    impact:
      "I used pose estimation to flag exercise form problems and give real-time feedback that lowers injury risk.",
    build:
      "I worked with annotated video, YOLO keypoints, a classifier, and form-correction logic.",
    direction:
      "I like applied AI most when the model output becomes immediate, useful feedback for a person.",
    metrics: ["92% accuracy", "YOLO keypoints", "OpenCV"],
  },
  karini: {
    role: "Software engineering intern",
    impact:
      "I automated the migration of 600+ client configurations onto the AWS Strands SDK platform across 500+ live accounts with no downtime.",
    build:
      "I built the automated test suite that caught 13 critical conversion errors, consolidated setup across 4 product areas into one guided flow, and shipped 5 upgrades to the prompt authoring tool.",
    direction:
      "This connected my product instincts with production AI infrastructure and enterprise reliability.",
    metrics: [
      "600+ configurations",
      "500+ live accounts",
      "50% faster onboarding",
    ],
  },
  hsr: {
    role: "Software engineering intern",
    impact:
      "I built Poseidon, an interactive map of 8M tons of plastic across 27% of the world's oceans and the 250M coastal residents at risk.",
    build:
      "I automated quality checks across 12 mapping and environmental datasets, ranked 140 coastal regions by plastic exposure, and built the D3 visualizations and Express endpoints behind the map.",
    direction:
      "It sits at the intersection of data infrastructure, public health, and environmental decision-making.",
    metrics: [
      "27% of oceans mapped",
      "140 regions ranked",
      "40% faster processing",
    ],
  },
  dci: {
    role: "Software engineering intern and technical lead",
    impact:
      "I led Project CARE at Dialysis Clinic, Inc., shipping renal nutrition guidance to 200+ patients across 15 clinics and replacing phone scheduling with self-service booking.",
    build:
      "I built Firestore-backed scheduling that reaches clinics in under 5 seconds at 99.6% uptime and moved cancellations and rebooking to patient self-service.",
    direction:
      "This is the clearest example of my interest in software that improves real operations and care delivery.",
    metrics: ["200+ patients, 15 clinics", "No-shows cut 11%", "99.6% uptime"],
  },
  robotix: {
    role: "Robotics instructor",
    impact:
      "I taught robotics to younger students and made the teaching more consistent with a reusable curriculum.",
    build:
      "I wrote the lesson plans, ran hands-on programming and engineering workshops, and tracked classroom progress.",
    direction:
      "Teaching keeps me honest: if I understand something, I should be able to make it approachable.",
    metrics: ["80+ students", "150+ lessons", "K-8 robotics"],
  },
  tsa: {
    role: "STEM club vice president",
    impact:
      "I helped lead a big STEM competition club through record participation and awards.",
    build:
      "I coordinated event strategy, logistics, sponsorship outreach, mentorship, and the executive board.",
    direction:
      "This shaped how I organize technical teams and create systems that help people do better work.",
    metrics: ["200+ members", "40+ events", "150+ awards"],
  },
  "robotics-club": {
    role: "Coding co-president",
    impact:
      "I trained 18+ first-time builders and led the programming team of a Worlds-level robotics program.",
    build:
      "I wrote a 10-week C++, control, navigation, and CAD curriculum, led 4 programmers on Monte Carlo localization down to under 2 cm of field error, and tuned our PID autonomous routine to 9 of 10 scoring runs.",
    direction:
      "Robotics taught me how technical execution, team culture, and funding all have to work together.",
    metrics: [
      "4x Worlds",
      "Under 2 cm localization",
      "9 of 10 autonomous runs",
    ],
  },
  woodland: {
    role: "Middle-school mentor",
    impact:
      "I started a robotics program and helped younger students reach the VEX IQ World Championships.",
    build:
      "I wrote age-appropriate lessons, coordinated with parents and school staff, and coached the teams hands-on.",
    direction:
      "This is the service side of my STEM work: building confidence before students think they are technical.",
    metrics: ["20+ students", "2 Worlds teams", "Reusable curriculum"],
  },
  mun: {
    role: "Secretary-General",
    impact:
      "I led 30 student officers running a three-day, 900-delegate, 12-committee conference across 22 Tennessee schools.",
    build:
      "I raised $25,000 in sponsorship and registration revenue, set the themes and crisis scenarios, and ran 6 nonpartisan sign-up tables that registered 550+ delegates to vote.",
    direction:
      "Model UN trained the communication side of leadership: clarity, diplomacy, and large-event execution.",
    metrics: ["900 delegates", "$25,000 raised", "550+ voter registrations"],
  },
  nriva: {
    role: "National youth committee co-chair",
    impact:
      "I coordinated the $105,000 Back2School campaign that put 10,000 backpacks in the hands of kids across 26 states.",
    build:
      "I built the strategy, forms, and targets that 30 state leads ran their drives from, and negotiated 30% off vendor pricing through bulk buys.",
    direction:
      "This is where logistics, community service, and national-scale coordination meet.",
    metrics: ["$105K campaign", "10K backpacks", "26 states"],
  },
}

export const currentFocus = [
  {
    title: "Building things people actually use",
    body: "Finance education, healthcare workflows, and AI tools keep showing up in my work because I care about software that changes someone's day, not just a demo.",
  },
  {
    title: "Learning CS at Berkeley",
    body: "I'm grounding the same builder energy in stronger fundamentals: systems, algorithms, AI, and the discipline to make ambitious projects last.",
  },
  {
    title: "Turning projects into proof",
    body: "Every project page here shows what I did, what changed, and what it says about how I work.",
  },
]
