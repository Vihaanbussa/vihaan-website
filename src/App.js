// App.js
import React, { useState, useEffect, useMemo } from "react";
import emailjs from '@emailjs/browser';
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [selectedLeadership, setSelectedLeadership] = useState(null);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const assetUrl = (relativePath) => `${process.env.PUBLIC_URL || ""}${relativePath}`;

  const [zoomedImage, setZoomedImage] = useState(null);

  // Auto-scroll: left panel to top only
  useEffect(() => {
    if (selectedProject || selectedResearch || selectedLeadership || selectedInternship) {
      // Small delay to ensure modal is rendered
      setTimeout(() => {
        // Left panel: scroll to top to show Overview
        const modalText = document.querySelector('.modal-text');
        if (modalText) {
          modalText.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }

        // Right panel: no auto-scroll, let user control gallery position
      }, 500); // Delay to ensure content is fully loaded
    }
  }, [selectedProject, selectedResearch, selectedLeadership, selectedInternship]);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Portfolio Website",
      slug: "project-portfolio-website",
      description: "A sleek, responsive portfolio site built with React and CSS.",
      overview:
        "You're currently viewing this comprehensive portfolio website! Built with React and modern web technologies, it showcases my journey as a student innovator, entrepreneur, and technology leader. The site features interactive project galleries, detailed research publications, leadership experiences, and technical achievements. Serving as both a digital resume and case study collection, this platform demonstrates my ability to create impactful solutions across healthcare, education, and technology sectors. With WCAG AA accessibility compliance and responsive design, it effectively communicates my passion for using technology to solve real-world problems.",
      details: "### Technologies Used:\n- React (functional components & hooks)\n- CSS Flexbox & Grid for responsive layout\n- Framer Motion for animations\n- Vercel for continuous deployment\n- EmailJS for contact form integration\n\n### Key Features:\n- Interactive hero section with call-to-action\n- Responsive project gallery with filtering\n- Modal overlays for in-depth project details\n- Contact form with validation\n\n### Performance Metrics:\n- WCAG AA accessibility compliance\n- Fully responsive design (320px to 4K displays)\n- Optimized loading performance\n- Cross-browser compatibility\n- Mobile-first responsive design\n\n### Accessibility Features:\n- High contrast color scheme\n- Keyboard navigation support\n- Screen reader compatibility\n- Focus management and skip links\n- ARIA labels and semantic HTML",
      tags: ["React", "CSS", "JS", "UI/UX"],
      challenges: [
        {
          problem: "Creating an accessible design that meets WCAG AA standards",
          solution: "Implemented high contrast colors, proper focus management, ARIA labels, and comprehensive keyboard navigation support",
        },
        {
          problem: "Organizing complex project information in an intuitive way",
          solution: "Designed interactive modal overlays with tabbed navigation and image galleries for detailed project exploration",
        },
        {
          problem: "Ensuring optimal performance across all devices",
          solution: "Used CSS Grid with mobile-first responsive design, optimized images, and efficient React component structure",
        },
      ],
      photos: [
        {
          url: assetUrl("/about_me_pic.png"),
          caption: "Portfolio Hero Section — A clean, accessible showcase of my professional journey",
        },
        {
          url: assetUrl("/InvestEDU/investedhome.png"),
          caption: "Portfolio Project Gallery — Featuring InvestEDU and my latest work in AI and financial literacy.",
        
        },
        {
          url: assetUrl("/InvestEDU/investedinfo.png"),
          caption: "Project Detail Modal — Explore InvestEDU’s features through an interactive and accessible interface.",
        },
      ],
      links: [
        { label: "View Source Code", url: "https://github.com/Vihaanbussa" },
        { label: "You're Using It Now!", url: "#home" },
        { label: "Technical Details", url: "https://docs.google.com/document/d/10PaCSnHW3U8UJUJL-OMOAVcjja93PkaFx8LjRLpvktM/" },
      ],
      future: [
        "Add blog functionality with MDX",
        "Integrate project analytics dashboard",
        "Create theme customization options",
      ],
    },
    {
      id: 2,
      title: "InvestEDU",
      slug: "project-investedu",
      description: "Financial education platform for young adults with interactive modules.",
      overview:
        "InvestEDU is a comprehensive financial literacy application designed to teach teenagers about the importance of investing early. With 500+ beta users and 2.8K monthly views, this platform has increased user engagement by 40% and improved users' financial comprehension scores by 25%. Having been personally involved with the stock market through paper trading, I witnessed firsthand how quickly money can compound. To share this valuable knowledge with others, I created InvestEDU.",
      tags: ["React", "JS", "CSS", "Financial Education"],
      details: "### Techniques Implemented:\n- Desmos API Integration for Interactive Graph\n- SVG Graph for main simulator output\n- Vercel Deployment\n- Use of A=Pe^(rt) for compounded money calculations\n\n### Key Features:\n- Interactive budgeting simulator with real-time feedback\n- Investment scenario builder with market data\n- Progress tracking with achievement badges\n- Community challenge boards\n\n### Impact & Statistics:\n- 500+ beta users with growing engagement\n- 2.8K monthly views demonstrating strong user interest\n- 40% increase in user engagement through platform improvements\n- 25% improvement in users' financial comprehension scores\n- Interactive financial simulator with personalized quiz system\n- Dynamic budgeting and investing education tools\n- Proven educational effectiveness in financial literacy",
      photos: [
        { url: assetUrl("/InvestEDU/investedhome.png"), caption: "InvestEDU Home Page - Clean, intuitive interface with modern financial design" },
        { url: assetUrl("/InvestEDU/investedhomedesmos.png"), caption: "Desmos API Integration - Interactive compound interest visualization and graphing tools" },
        { url: assetUrl("/InvestEDU/investedinfo.png"), caption: "Investment Education Hub - Comprehensive learning modules for financial literacy" },
        { url: assetUrl("/InvestEDU/investedglossary.png"), caption: "Financial Glossary - 200+ investment terms explained in simple language" },
        { url: assetUrl("/InvestEDU/investedpersonalityquiz.png"), caption: "Investor Personality Quiz - Personalized investment strategies based on risk tolerance" },
        { url: assetUrl("/InvestEDU/investedbudgetplanner.png"), caption: "Budget Planner Tool - Track expenses, income, and savings goals effectively" },
        { url: assetUrl("/InvestEDU/investedAI.png"), caption: "InvestEDU AI Assistant - 24/7 financial guidance and investment recommendations" },
        { url: assetUrl("/InvestEDU/investedcomparison.png"), caption: "Investment Comparison Tool - Side-by-side analysis of different investment options" },
        { url: assetUrl("/InvestEDU/investedcalculator.png"), caption: "Investment Calculator - Real-time compound interest calculations with A=Pe^(rt) formula" },
        { url: assetUrl("/InvestEDU/investedu-analytics-dashboard.jpeg"), caption: "InvestEDU Analytics Dashboard - Real user engagement metrics showing 2,500+ active users" },
      ],
      links: [
        { label: "Visit InvestEDU Platform", url: "https://investedu.me" },
        { label: "View Source Code", url: "https://github.com/Vihaanbussa" },
        { label: "Project Documentation", url: "https://docs.google.com/document/d/10PaCSnHW3U8UJUJL-OMOAVcjja93PkaFx8LjRLpvktM/" }
      ],
      future: [
        "AI-powered financial coaching",
        "Integration with banking APIs",
        "Retirement/Roth IRA planning module",
      ],
    },
    {
      id: 3,
      title: "Project CARE",
      slug: "project-care",
      description: "Improving quality of life for dialysis patients through innovative technology solutions.",
      overview:
        "Project CARE is an initiative committed to improving the quality of life for dialysis patients and enhancing clinical operations at Dialysis Clinic, Inc. (DCI). The project features a mobile app for personalized meal planning and appointment management, along with community awareness campaigns.",
      tags: ["React Native", "Firebase", "Healthcare", "UI/UX", "Social Impact"],
      details: "### About DCI & Dialysis:\n- Dialysis Clinic, Inc. (DCI) is a leading non-profit provider founded in 1971\n- Operates 250+ clinics nationwide serving 15,000+ patients\n- Dialysis is a life-saving treatment for kidney failure, requiring 4-hour sessions, 3 days per week\n- 32.3% of patients experience significant decline in quality of life after starting treatment\n\n### Our Solution:\n\n**1. Personalized Meal Planning App**\n- AI-powered meal generator tailored to dialysis dietary restrictions\n- 109+ downloads on the App Store\n- Key Features:\n  • Customizable meal plans based on health conditions\n  • Allergy and preference filters\n  • Nutritional information tracking\n\n**2. Appointment Management**\n- Calendar interface for session scheduling\n- Automated notifications and reminders\n- Reduces no-show rates by 30%\n\n**3. Community Awareness**\n- Instagram campaign with 150+ followers\n- Educational content during National Kidney Month\n- Blog platform for patient stories and advice\n\n### Technical Implementation:\n- React Native for cross-platform mobile development\n- Firebase for backend services and authentication\n- HIPAA-compliant data storage\n- Real-time updates and notifications\n\n### DCI Implementation & Results:\n- Successfully implemented across DCI clinics in Tennessee and Georgia\n- 93% reduction in patient session cancellation time (from 3.5 min to 15 sec)\n- Reduced clinic no-show rates from 13% to 2%\n- Improved care for 200+ patients directly\n- Published application to Apple App Store\n- Generated over 4,000 impressions post-launch\n- Integrated AI-driven diet plans and smart scheduling\n- Translated clinical needs into secure and scalable digital tool\n- Led end-to-end development for nation's largest nonprofit dialysis provider",
      photos: [
        {
          url: assetUrl("/DECADCI/dci-meeting-screenshot.jpeg"),
          caption: "DCI Executive Meeting - Presenting Project CARE implementation strategy to leadership team",
        },
        {
          url: assetUrl("/DECADCI/IMG_2568.jpeg"),
          caption: "Project CARE Team at DCI Headquarters - Collaborating with healthcare professionals in Nashville, TN",
        },
        {
          url: assetUrl("/DECADCI/3d9812af-e50e-4f84-af6c-8347ee38bb57.jpeg"),
          caption: "DCI Clinic Implementation - Training dialysis clinic staff on Project CARE mobile app and systems",
        },
        {
          url: assetUrl("/DECADCI/6ae1d092-879f-44f9-bd68-488f85010c5e.jpeg"),
          caption: "Patient Feedback Session - Gathering user experience data from dialysis patients using Project CARE",
        },
        {
          url: assetUrl("/DECADCI/dbd797e3-2049-4a8a-a7e7-c8c294b75cca.jpeg"),
          caption: "Project CARE Analytics Dashboard - Real-time patient engagement metrics showing 89% satisfaction rate",
        },
        {
          url: assetUrl("/DECADCI/project-care-documentation.jpeg"),
          caption: "DCI Partnership Documentation - Official collaboration agreement for Project CARE implementation",
        },
        {
          url: assetUrl("/DECADCI/project-care-mobile-app.jpeg"),
          caption: "Project CARE Mobile App Interface - Meal planning feature designed for dialysis patients",
        },
        {
          url: assetUrl("/DECADCI/project-care-impact-report.jpeg"),
          caption: "Project CARE Team - Development team members who created the dialysis patient care solutions",
        },
      ],
      links: [
        { label: "Research Paper", url: "https://docs.google.com/document/d/10PaCSnHW3U8UJUJL-OMOAVcjja93PkaFx8LjRLpvktM/" },
        { label: "Project Documentation", url: "https://docs.google.com/document/d/10PaCSnHW3U8UJUJL-OMOAVcjja93PkaFx8LjRLpvktM/" },
        { label: "DCI Partnership Details", url: "https://docs.google.com/document/d/10PaCSnHW3U8UJUJL-OMOAVcjja93PkaFx8LjRLpvktM/" },
      ],
      future: [
        "Expand to 10,000+ patients nationwide",
        "Implement AI-powered health coaching",
        "Add telehealth integration",
        "Develop caregiver support features",
      ],
      budget: {
        spent: 215,
        breakdown: [
          { item: "Canva Pro", amount: 75 },
          { item: "Website Domain", amount: 40 },
          { item: "App Publication", amount: 100 }
        ],
        future: 36000,
        futureBreakdown: [
          { item: "Server Hosting", amount: 18000 },
          { item: "Social Media Marketing", amount: 12000 },
          { item: "AI Model Training", amount: 6000 }
        ]
      },
      metrics: {
        appDownloads: 109,
        websiteViews: 1500,
        instagram: {
          followers: 150,
          postViews: 3000,
          engagementRate: "8.2%"
        },
        patientSatisfaction: "92%"
      },
      compliance: {
        hipaa: true,
        dataEncryption: true,
        accessControl: "Role-based access for DCI staff"
      }
    },
    {
      id: 4,
      title: "ElderHelper",
      slug: "project-elderhelper",
      description: "IoT fall detection box and pill dispenser built for the IEEE SSCS Arduino Competition.",
      overview:
        "ElderHelper is an innovative IoT device designed to assist elderly individuals with medication management and safety monitoring. Inspired after my grandmother fell on the stairs this device combines fall detection technology with automated pill dispensing in a compact, user-friendly package. I additionally submitted a prototype to the IEEE SSCS Arduino Competition, it represents my first deep dive into electronics and embedded systems.",
      tags: ["Arduino", "IoT", "Electronics", "Healthcare", "C++"],
      details: "### Technologies Used:\n- Arduino Uno microcontroller\n- MPU6050 accelerometer/gyroscope for fall detection\n- Servo motors for pill dispensing mechanism\n- LCD display for user interface\n- Buzzer for alerts and notifications\n- Real-time clock module for medication scheduling\n\n### Key Features:\n- Fall Detection System: Uses advanced accelerometer algorithms to detect sudden falls and send alerts\n- Automated Pill Dispensing: Programmable pill dispenser with multiple compartments\n- Medication Reminders: Audio and visual alerts for medication times\n- Emergency Notifications: Automatic alerts to caregivers when falls are detected\n- User-Friendly Interface: Simple LCD display with intuitive controls\n\n### Technical Achievements:\n- Implemented machine learning-like algorithms for fall detection accuracy\n- Designed and 3D printed custom enclosure for all components\n- Achieved 95% accuracy in fall detection testing\n- Battery life optimization for 72+ hours of continuous operation",
      video: {
        url: "https://www.youtube.com/watch?v=R-SOpHmBSgU",
        embedId: "R-SOpHmBSgU",
        caption: "ElderHelper Project Demo - Fall Detection and Pill Dispenser"
      },
      challenges: [
        {
          problem: "Achieving accurate fall detection without false positives",
          solution: "Implemented multi-axis threshold detection with time-based validation algorithms",
        },
        {
          problem: "Designing a reliable pill dispensing mechanism",
          solution: "Used precision servo motors with custom 3D-printed dispensing wheels for accurate pill counting",
        },
        {
          problem: "Power management for continuous operation",
          solution: "Implemented sleep modes and optimized sensor polling intervals to extend battery life",
        },
      ],
      links: [
        { label: "Watch Demo Video", url: "https://www.youtube.com/watch?v=R-SOpHmBSgU" },
        { label: "IEEE Competition Details", url: "https://arduino-contest.sscs.ieee.org/" },
      ],
      future: [
        "Add WiFi connectivity for remote monitoring",
        "Integrate with smartphone app for caregiver notifications",
        "Implement AI-powered health pattern recognition",
        "Add voice command functionality",
      ],
    },
  ], []);

  const researchTopics = useMemo(() => [
    {
      id: 1,
      title: "AI in Predicting NFL Sports Bets",
      slug: "research-ai-in-predicting-nfl-sports-bets",
      description: "Analyzing historical NFL data to predict outcomes and betting spreads.",
      overview:
        "This machine learning research applies predictive analytics to sports betting markets, investigating the effectiveness of AI models compared to professional analysts. Conducted as part of my high school's advanced research program, this study demonstrates the superior performance of AI in sports prediction.",
      details: "### Research Abstract\nThis research investigates the use of machine learning models to predict NFL game outcomes and betting odds with a focus on ROI optimization.\n\n### Methodology:\n- Collected a full season of NFL data (2023-2024)\n- Compared Google Gemini accuracy to NFL professional analysts\n- Implemented temporal trend analysis to best predict trends\n\n### Key Findings:\n- Google Gemini achieved 58% success rate on spread bets\n- Surpassed expert analyst consensus by 7% demonstrating AI superiority\n- Quantified and compared predictive accuracy of multiple AI models\n- Highlighted AI's potential in sports forecasting through statistical analysis\n\n### Validation:\n- Backtesting on 2022-2023 season\n- Cross-Validated with other researchers in Literature Review\n- Comparison against Vegas oddsmakers",
      tags: ["Machine Learning", "Sports Analytics", "Python", "Pandas"],
      challenges: [
        {
          problem: "Data availability and consistency across seasons",
          solution: "Provided curated, standardized datasets to Gemini for consistent training and validation",
        },
      ],
      photos: [
        {
          url: assetUrl("/AIPredict/AIBetProfit.png"),
          caption: "AI vs Human Analysts - Profit comparison showing AI's superior performance over NFL season",
        },
        {
          url: assetUrl("/AIPredict/AIBetScatterplot.png"),
          caption: "Prediction Accuracy Analysis - Scatterplot visualization of model performance metrics",
        },
        {
          url: assetUrl("/AIPredict/AIBetAIPrediction.png"),
          caption: "AI Model Results - Gemini's 64.9% prediction accuracy across NFL games",
        },
        {
          url: assetUrl("/AIPredict/AIBetHumanPrediction.png"),
          caption: "Human Analyst Results - Professional analysts' 57.1% prediction accuracy comparison",
        },
        {
          url: assetUrl("/AIPredict/AIBetMoneyChart.png"),
          caption: "Weekly ROI Performance - AI model generating $3,000+ more profit than human analysts",
        },
      ],
      links: [
        { label: "Read Full Paper", url: "https://docs.google.com/document/d/10PaCSnHW3U8UJUJL-OMOAVcjja93PkaFx8LjRLpvktM/edit?usp=sharing" },
        { label: "View Research Repository", url: "https://docs.google.com/spreadsheets/d/1yaFK0Ky3bNbYYGtkbVJwOuyTmxt28dkW2qg8uVn3AYI/edit?usp=sharing" },
      ],
      future: [
        "Incorporate real-time betting market data",
        "Develop API for model predictions",
        "Expand to international football leagues",
      ],
    },
    {
      id: 2,
      title: "AI in Tracking Exercise Form",
      slug: "research-ai-in-tracking-exercise-form",
      description: "Using computer vision to analyze and correct workout posture in real-time.",
      overview:
        "This research explores how deep learning models (TensorFlow + OpenCV) can process live video to detect and correct exercise form, reducing injury risk and improving performance.",
      details: "### Abstract\nWe train a pose-estimation model on annotated workout videos to identify common form errors in exercises like squats, lunges, and push-ups.\n\n### Methodology:\n- Collected 5 hours of annotated workout footage\n- Used Ultralytic's YOLO for keypoint detection\n- Trained a CNN to classify \"correct\" vs \"incorrect\" form\n\n### Key Findings:\n- Achieved 92% accuracy in posture classification after 100 tests\n- Prototype improved exercise form and enhanced safety for users\n\n### Future Work:\n- Expand model to include yoga poses and additional exercise types\n- Integrate with AR glasses for real-time coaching and feedback",
      tags: ["Computer Vision", "Deep Learning", "TensorFlow", "OpenCV"],
      challenges: [
        {
          problem: "High variance in camera angles",
          solution: "Augmented dataset with synthetic rotations",
        },
        {
          problem: "Low-light and occlusions",
          solution: "Applied adaptive histogram equalization and dropout layers",
        },
      ],
      photos: [
        {
          url: assetUrl("/AIExercise/ExceriseCVOverlay.png"),
          caption: "Computer Vision Analysis - Real-time pose estimation overlay detecting exercise form",
        },
        {
          url: assetUrl("/AIExercise/ExerciseGoodForm.png"),
          caption: "Correct Form Detection - AI model successfully identifying proper exercise posture (92% accuracy)",
        },
        {
          url: assetUrl("/AIExercise/ExerciseBadForm.png"),
          caption: "Form Correction Alert - System detecting and flagging improper exercise technique",
        },
      ],
      links: [
        { label: "View Code", url: "https://colab.research.google.com/drive/1aKGmpm-ESD6VGs21iWuOzspcJ8-7ECP5?usp=sharing", target: "_blank" },
      ],
      future: ["Deploy on mobile devices", "Add multi-person tracking"],
    },
  ], []);

  const achievements = [
    {
      id: 1,
      title: "National Merit Scholar",
      year: "2025",
      description:
        "Recognized as a National Merit Scholar, placing in the top 1% of over 1.5 million students nationwide on the PSAT/NMSQT",
      icon: "🏅",
    },
    {
      id: 2,
      title: "DECA State Champion",
      year: "2024 & 2025",
      description:
        "Multi-time state champion in DECA Business Competition; Qualified to International Competition with 500+ delegates",
      icon: "🏆",
    },
    {
      id: 3,
      title: "AP Scholar with Distinction",
      year: "2024",
      description:
        "Scored 5 on six AP exams: AP Computer Science Principles, AP Seminar, AP Human Geography, AP Research, AP Physics 1, and AP Precalculus during freshman and sophomore years",
      icon: "🎓",
    },
    {
      id: 4,
      title: "Technology Student Association",
      year: "2022-2025",
      description:
        "Achieved state-level first place in Robotics (2024), second place in Webmaster (2023), and second place in Drone Challenge (2022) while competing against 200+ teams",
      icon: "⚡",
    },
    {
      id: 5,
      title: "VEX Robotics Competition",
      year: "2022-2025",
      description:
        "Lead programmer for a national award-winning robotics team and state champion that qualified for the World Championships four times, competing against 20,000+ teams globally",
      icon: "🤖",
    },
  ];

  const leadership = useMemo(() => [
    {
      id: 1,
      title: "Technology Student Association Vice President",
      slug: "leadership-technology-student-association-vice-president",
      organization: "Technology Student Association",
      year: "2022–2025",
      duration: "Aug 2022 – Present",
      roleType: "Elected Officer",
      isVolunteer: false,
      description:
        "As Vice President of the Technology Student Association, I co-led a 200+ member STEM competition club, coordinating strategy for over 40 events and contributing to a record-breaking 150+ total awards for the club.\n\n" +
        "I mentored project teams, oversaw event logistics, and liaised with industry professionals to provide students with real-world exposure to STEM careers across multiple competition categories.",
      responsibilities: [
        "Define event schedules, budgets, and logistics coordination",
        "Manage sponsorship outreach and industry partnerships",
        "Oversee executive board operations and strategic planning",
      ],
      skills: ["Project Management", "Public Speaking", "Fundraising"],
      keyMetrics: ["200+ member STEM club", "40+ events coordinated", "150+ total awards achieved", "Record-breaking competition performance"],
      achievements: [
        "Pioneered hybrid event model during pandemic maintaining engagement",
        "Secured partnerships with three local technology businesses",
        "Implemented virtual skills workshop series reaching broader audience",
      ],
      impactNarrative:
        "My efforts helped TSA pivot successfully to hybrid events during the pandemic, maintaining engagement and growing our community despite restrictions.",
      photos: [
        { url: assetUrl("/TSA/F02BC1AA-2038-4F7E-85CD-5F186A39E447.jpeg"), caption: "TSA State Competition - Participating in statewide STEM competition as Vice President" },
        { url: assetUrl("/TSA/IMG_2898.jpeg"), caption: "TSA Executive Board - Co-leading 10-member executive board to organize STEM events" },
        { url: assetUrl("/TSA/IMG_5537.jpeg"), caption: "TSA Achievement Recognition - Celebrating successful STEM competition organization" },
      ],
    },
    {
      id: 2,
      title: "Robotics Club Co-President",
      slug: "leadership-robotics-club-co-president",
      organization: "Ravenwood High School Robotics Club",
      year: "2023–2025",
      duration: "Sep 2023 – Present",
      roleType: "Elected Officer",
      isVolunteer: false,
      description:
        "In my role as Co-President, I mentored 20+ underclassmen and led all four competitive teams to the VEX World Championships for four consecutive years (2022-2025), earning 25+ awards. My most significant achievement was establishing a sustainable funding model by raising $5,000 through a summer camp fundraiser and securing corporate sponsorship from Qentelli.\n\n" +
        "I successfully managed the technical training program for new members, established the club's resource library, and coordinated travel for regional competitions across multiple states.",
      responsibilities: [
        "Design and implement technical training curriculum for new members",
        "Manage $15,000+ parts inventory and specialized equipment",
        "Coordinate travel logistics and competition strategy planning",
        "Execute fundraising campaigns and corporate partnership outreach",
        "Oversee social media presence and recruitment initiatives",
      ],
      skills: ["Technical Mentorship", "Inventory Management", "Logistics", "Fundraising", "Social Media Marketing", "Curriculum Development"],
      keyMetrics: ["20+ underclassmen mentored", "4 consecutive World Championships", "25+ awards earned", "$5,000 raised through summer camp", "Corporate sponsorship secured"],
      achievements: [
        "Created most successful robotics program in school history",
        "Achieved Excellence Award at VEX World Championships (2024)",
        "Built comprehensive technical training program with 95% retention rate",
        "Recruited most diverse team composition in school history",
        "Established sustainable funding model ensuring long-term program viability",
      ],
      impactNarrative:
        "My STEM summer camp introduced 45 young students to robotics, with 80% expressing interest in pursuing STEM careers. The fundraising success enabled our team to compete at the highest levels, and our social media presence helped recruit the most diverse team in school history.",
      photos: [
        { url: assetUrl("/Robotics/IMG_1084.jpeg"), caption: "STEM Summer Camp - Teaching elementary students robotics fundamentals" },
        { url: assetUrl("/Robotics/IMG_2397.jpeg"), caption: "VEX World Championships - Team preparation and strategy session" },
        { url: assetUrl("/Robotics/IMG_5953.jpeg"), caption: "Regional Competition Victory - Celebrating state championship win" },
        { url: assetUrl("/Robotics/IMG_5954.jpeg"), caption: "Robot Design Workshop - Advanced programming and CAD training" },
        { url: assetUrl("/Robotics/IMG_5956.jpeg"), caption: "Competition Robot - Award-winning design that reached World Championships" },
        { url: assetUrl("/Robotics/PNG%20image.jpeg"), caption: "Team Building Session - Developing collaboration and technical skills" },
        { url: assetUrl("/Robotics/PNG%20image%20(1).jpeg"), caption: "Fundraising Event - Community outreach and sponsor appreciation" },
        { url: assetUrl("/Robotics/IMG_5951.jpeg"), caption: "Community STEM Outreach - Robotics club members engaging with local families at educational event" },
      ],
    },
    {
      id: 3,
      title: "Woodland Middle School Robotics Club Leader",
      slug: "leadership-woodland-middle-school-robotics-club-leader",
      organization: "Woodland Middle School",
      year: "Aug 2022–Present",
      duration: "Aug 2022 – Present",
      roleType: "Volunteer",
      isVolunteer: true,
      description:
        "Established a STEM program for 20+ middle school students, designing a curriculum that led two teams to qualify for the VEX IQ World Championships. I developed comprehensive workshop series on programming logic, sensor integration, and teamwork skills.\n\n" +
        "Through hands-on mentorship and innovative curriculum design, I helped students build confidence in STEM fields and achieve competitive success at the highest levels.",
      responsibilities: [
        "Design age-appropriate robotics curriculum and workshop materials",
        "Coordinate with school administration and parent volunteers",
        "Manage equipment, safety protocols, and learning assessments",
        "Provide individualized mentorship and skill development support",
      ],
      skills: ["Teaching", "Workshop Design", "Patience"],
      keyMetrics: ["20+ students trained", "2 teams qualified for VEX IQ World Championships", "Comprehensive curriculum developed"],
      achievements: [
        "Created first-ever robotics program at Woodland Middle School",
        "Achieved highest competitive success rate in school district",
        "Developed reusable curriculum adopted by other middle schools",
        "Inspired 80% of participants to continue STEM pursuits in high school",
      ],
      impactNarrative:
        "Establishing this STEM program allowed me to impact 20+ middle school students and guide two teams to World Championships qualification. The experience taught me how to design effective curriculum, manage diverse learning styles, and inspire students to achieve at the highest competitive levels.",
      photos: [
        { url: assetUrl("/Robotics/IMG_1084.jpeg"), caption: "Woodland Middle School Robotics - Leading STEM program for 20+ students with World Championships success" },
        { url: assetUrl("/TSA/IMG_5537.jpeg"), caption: "Volunteer Recognition - Receiving 'Volunteer of the Year' PTA award for robotics mentorship" },
      ],
    },
    {
      id: 4,
      title: "Model UN Secretary General",
      slug: "leadership-model-un-secretary-general",
      organization: "Ravenwood High School Model UN",
      year: "2022–2023",
      duration: "Jul 2022 – Jun 2023",
      roleType: "Elected Officer",
      isVolunteer: false,
      description:
        "As Secretary General, I led 15+ Secretariat Members and organized three full-scale Model UN conferences, coordinating committees, drafting position guides, and training delegates. Serving as Head of MUN, I organized all conference activities and led 800+ delegates across multiple events. I delivered two keynote speeches to conference attendees and led two Summits that were presented in Plenary sessions.\n\n" +
        "My most impactful initiative was implementing a voter registration campaign across all MUN conferences. I strategically placed QR codes throughout conference venues, making it easy for delegates to register to vote. This grassroots effort successfully secured 500+ voter pledges, significantly increasing civic engagement among high school students across Tennessee. My leadership and dedication to diplomatic excellence earned me the prestigious MUN Nobel Peace Prize.",
      responsibilities: [
        "Oversee Secretariat training and committee chair development",
        "Design conference themes, committee topics, and crisis scenarios",
        "Coordinate venue logistics, catering, and technology requirements",
        "Develop delegate training materials and position paper guidelines",
        "Manage inter-school communications and registration processes",
        "Implement innovative voter registration campaign with QR technology",
      ],
      skills: ["Diplomacy", "Event Planning", "Leadership", "Civic Engagement", "Digital Campaign Management"],
      keyMetrics: ["800+ delegates led", "15+ Secretariat Members managed", "500+ voter pledges secured", "2 keynote speeches delivered", "2 Summits led in Plenary", "3 conferences hosted", "MUN Nobel Peace Prize recipient"],
      achievements: [
        "Awarded MUN Nobel Peace Prize for outstanding diplomatic leadership",
        "Created Tennessee's largest high school Model UN program",
        "Pioneered innovative QR code voter registration campaign model",
        "Established first regional crisis simulation program",
        "Published comprehensive delegate guides adopted statewide",
        "Achieved 15% increase in youth voter registration in county",
        "Gained international recognition for Plenary Summit leadership",
      ],
      impactNarrative:
        "As Head of MUN, my leadership of 15+ Secretariat Members and 800+ delegates created one of the most successful Model UN programs in Tennessee. The 2 keynote speeches I delivered inspired delegates from across the region, while the 2 Summits I led in Plenary sessions gained international recognition. My voter registration initiative became a model for other MUN conferences statewide, and receiving the MUN Nobel Peace Prize validated my commitment to diplomatic excellence and civic engagement. The 500+ pledges represented a 15% increase in youth voter registration in our county.",
      photos: [
        { url: assetUrl("/MUN/VihaangoingtoMUN.jpeg"), caption: "Model UN Secretary General - Preparing for conference as Head of MUN organization" },
        { url: assetUrl("/MUN/VihaanMUN.jpeg"), caption: "MUN Conference Leadership - Managing 800+ delegates across multiple Model UN events" },
      ],
    },
    {
      id: 5,
      title: "NRIVA Youth Committee National Lead",
      slug: "leadership-nriva-youth-committee-national-lead",
      organization: "North Region Indian Volunteers Association",
      year: "2023–Present",
      duration: "Jun 2023 – Present",
      roleType: "Volunteer Lead",
      isVolunteer: true,
      description:
        "Spearheading a nationwide initiative, I orchestrate a $105,000 fundraising campaign to provide 10,000 backpacks to underserved children across all 50 states. I direct over 75 state-level youth coordinators and pioneer social media strategies to build a sustainable program serving 15,000+ families annually.\n\n" +
        "This position blends project management with a deep personal commitment to community advocacy and nationwide impact.",
      responsibilities: [
        "Define project roadmaps, KPIs, and strategic objectives with executive board",
        "Develop volunteer recruitment, training, and retention programs",
        "Design social media campaigns and digital outreach strategies",
        "Coordinate with schools, community organizations, and local partners",
        "Manage budget allocation and financial reporting across initiatives",
      ],
      skills: ["Project Management", "Cross-cultural Communication", "Fundraising"],
      keyMetrics: ["$105K fundraising campaign", "10,000 backpacks to underserved children", "75+ state-level youth coordinators", "15,000+ families served annually", "All 50 states coverage"],
      achievements: [
        "Created largest youth-led educational support program in NRIVA history",
        "Pioneered innovative social media fundraising strategy adopted organization-wide",
        "Established sustainable volunteer network spanning all 50 states",
        "Developed replicable program model for other youth organizations",
        "Achieved 95% volunteer retention rate through comprehensive training program",
        "Built partnerships with 200+ schools and community organizations",
      ],
      impactNarrative:
        "Leading this nationwide initiative taught me how to coordinate complex logistics across all 50 states and manage diverse volunteer teams. I'm proud that our $105,000 fundraising success directly provided educational support to over 10,000 students, helping remove barriers to their academic success and demonstrating the power of organized community advocacy serving 15,000+ families annually.",
      photos: [
        { url: assetUrl("/NRIVA/IMG_5946.jpeg"), caption: "NRIVA Community Outreach - Organizing nationwide backpack distribution for students in need" },
        { url: assetUrl("/NRIVA/IMG_5949.jpeg"), caption: "Student Support Initiative - Leading $105,000 fundraising drive providing 10,000+ backpacks" },
        { url: assetUrl("/NRIVA/IMG_5950.jpeg"), caption: "NRIVA Youth Committee Leadership - Coordinating 75+ state-level youth coordinators nationwide" },
      ],
    },
  ], []);

  // New Internships section
  const internships = [
    {
      id: 1,
      title: "Full Stack Developer",
      organization: "Karini AI",
      year: "Summer 2025",
      duration: "Jun 2025 – Aug 2025",
      description:
        "At Karini AI, I work as a full stack developer building AI-powered applications and web services. I specialize in migrating agentic AI recipes to AWS Strands SDK architecture and optimizing platform performance. I've successfully migrated 600+ agentic AI recipes with 98.5% accuracy, architected user-centered frontend improvements, and enhanced platform performance by 12% for enterprise clients.",
      responsibilities: [
        "Execute large-scale migration of agentic AI recipes to AWS Strands SDK",
        "Design and implement user-centered frontend architecture improvements",
        "Develop full-stack web applications using React and Node.js",
        "Integrate AI/ML models into production applications with high reliability",
        "Build RESTful APIs for high-volume request processing",
        "Collaborate with cross-functional team on product feature development",
      ],
      skills: ["React", "Node.js", "Python", "AWS Strands SDK", "Claude AI", "LLMs", "Prompt Engineering", "AI/ML Integration", "Database Design"],
      keyMetrics: ["600+ AI recipes migrated", "98.5% migration accuracy", "12% platform performance improvement", "500+ enterprise clients served"],
      achievements: [
        "Delivered flawless migration with zero downtime during critical infrastructure update",
        "Created intuitive user interface design adopted as company standard",
        "Established new performance benchmarks for platform scalability",
        "Mentored junior developers on AWS Strands SDK best practices",
        "Reduced customer onboarding time by 50% through automation improvements",
      ],
      impactNarrative:
        "My work with AWS Strands SDK, Claude AI, and LLMs has contributed to the development of intelligent automation solutions, helping improve the user experience of Karini AI's platform. The AWS Agents I converted support enterprise clients with automation workflows, helping reduce manual tasks and improve operational efficiency.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      organization: "HSR.Health",
      year: "Summer 2025",
      duration: "May 2025 – Jul 2025",
      description:
        "At HSR.Health, I developed a geospatial health risk visualization platform to analyze and display the public health impact of ocean pollution. I created data presentations tracking key environmental health metrics across 27% of global oceans to support evidence-based policy recommendations for key stakeholders.",
      responsibilities: [
        "Design and implement geospatial data processing algorithms",
        "Create interactive data visualization charts with D3.js",
        "Build and document REST endpoints in Express for data access",
        "Perform quality assurance testing on environmental data pipelines",
        "Collaborate with research team on data accuracy and validation",
        "Develop technical documentation for stakeholder presentations",
      ],
      skills: ["Node.js", "D3.js", "API Testing", "Healthcare Analytics", "Environmental Data Science", "Ocean Mapping", "Geospatial Analysis"],
      keyMetrics: ["27% of global oceans analyzed", "Large-scale data processing pipeline", "Comprehensive API test coverage", "Real-time visualization dashboard"],
      achievements: [
        "Created first comprehensive health risk visualization for ocean pollution",
        "Established new standards for environmental data presentation",
        "Built scalable platform supporting multiple research initiatives",
        "Optimized data processing performance by 40% through algorithm improvements",
        "Contributed to policy recommendations adopted by environmental agencies",
      ],
      impactNarrative:
        "My contributions to the Poseidon project helped advance ocean plastic pollution monitoring capabilities. The data processing and visualization tools I developed support environmental research efforts and contribute to better understanding of plastic pollution patterns in ocean regions.",
    },
    {
      id: 3,
      title: "Robotics Instructor",
      organization: "RobotiX Institute",
      year: "2022-2024",
      duration: "June 2022 – Jan 2024",
      description:
        "At RobotiX Institute, I taught and mentored 80+ students, delivering a hands-on curriculum that fostered foundational engineering and collaborative problem-solving skills. I engineered a centralized curriculum database from scratch, cataloging over 150 unique lesson plans to streamline lesson planning and standardize instruction.",
      responsibilities: [
        "Design age-appropriate robotics curriculum for K-8 students",
        "Deliver hands-on instruction in programming and engineering concepts",
        "Assess student progress and provide individualized feedback",
        "Maintain equipment, manage classroom safety, and coordinate with parents",
        "Develop and organize comprehensive lesson plan database",
      ],
      skills: ["Teaching", "Curriculum Design", "Robotics", "VEX Programming"],
      keyMetrics: ["80+ students taught", "150+ lesson plans cataloged", "Centralized curriculum database", "Standardized instruction system"],
      achievements: [
        "Created comprehensive robotics education program adopted institute-wide",
        "Achieved 95% student satisfaction rate across all age groups",
        "Developed reusable curriculum framework for future instructors",
        "Inspired 70% of students to pursue advanced robotics programs",
        "Established new teaching methodology standards for technical education",
      ],
      impactNarrative:
        "Through engaging curriculum and hands-on instruction, I inspired the next generation of engineers and programmers. Many students continued their robotics journey after completing the program, demonstrating the lasting impact of quality STEM education.",
    },
  ];

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;

      const projectMatch = projects.find((project) => project.slug === hash);
      if (projectMatch) {
        setActiveSection("projects");
        setSelectedProject(projectMatch);
        setSelectedResearch(null);
        setSelectedLeadership(null);
        setSelectedInternship(null);
        setCarouselIndex(0);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            if (typeof target.focus === "function") {
              target.focus({ preventScroll: true });
            }
          }
        }, 0);
        return;
      }

      const researchTopic = researchTopics.find((topic) => topic.slug === hash);
      if (researchTopic) {
        setActiveSection("research");
        setSelectedResearch(researchTopic);
        setSelectedProject(null);
        setSelectedLeadership(null);
        setSelectedInternship(null);
        setCarouselIndex(0);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            if (typeof target.focus === "function") {
              target.focus({ preventScroll: true });
            }
          }
        }, 0);
        return;
      }

      const leadershipRole = leadership.find((role) => role.slug === hash);
      if (leadershipRole) {
        setActiveSection("leadership");
        setSelectedLeadership(leadershipRole);
        setSelectedProject(null);
        setSelectedResearch(null);
        setSelectedInternship(null);
        setCarouselIndex(0);
        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            if (typeof target.focus === "function") {
              target.focus({ preventScroll: true });
            }
          }
        }, 0);
      }
    };

    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);
    return () => window.removeEventListener("hashchange", handleHashNavigation);
  }, [projects, researchTopics, leadership]);

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedResearch(null);
    setSelectedLeadership(null);
    setSelectedInternship(null);
  };

  const openImageZoom = (image) => {
    setZoomedImage(image);
  };

  const closeImageZoom = () => {
    setZoomedImage(null);
  };

  // Keyboard support for closing modals
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (zoomedImage) {
          closeImageZoom();
        } else if (selectedProject || selectedResearch || selectedLeadership || selectedInternship) {
          closeModal();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage, selectedProject, selectedResearch, selectedLeadership, selectedInternship]);

  // Helper function to render markdown-style content
  const renderDetails = (details) => {
    if (!details) return null;

    // Helper function to process bold text
    const processBoldText = (text) => {
      const parts = text.split(/(\*\*.*?\*\*)/g);
      return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
    };

    return details.split('\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return <h4 key={index}>{processBoldText(line.replace('### ', ''))}</h4>;
      } else if (line.startsWith('- ')) {
        return <li key={index}>{processBoldText(line.replace('- ', ''))}</li>;
      } else if (line.match(/^\s{2}[•·-]\s/)) {
        // Handle indented sub-bullets (2 spaces + bullet + space)
        return <li key={index} style={{marginLeft: '2rem'}}>{processBoldText(line.replace(/^\s{2}[•·-]\s/, ''))}</li>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index}>{processBoldText(line)}</p>;
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact form handler
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('');
    if (!form.name || !form.email || !form.message) {
      setFormStatus('Please fill out all fields.');
      return;
    }
    setIsSending(true);
    emailjs.send(
      'service_qorip4p', // Service ID
      'template_hxr6npt', // Template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'BhM7_ijKahvbkYOVo' // Public Key
    )
      .then(() => {
        setFormStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setFormStatus('Failed to send message. Please try again later.');
      })
      .finally(() => setIsSending(false));
  };

  // Helper to handle carousel navigation
  // Helper to get safe carousel index for display
  // Get current photos array
  const getCurrentPhotos = () => {
    if (selectedProject?.photos) return selectedProject.photos;
    if (selectedResearch?.photos) return selectedResearch.photos;
    if (selectedLeadership?.photos) return selectedLeadership.photos;
    return [];
  };

  const handleCarouselNav = (dir) => {
    const photos = getCurrentPhotos();
    if (!photos || photos.length === 0) return;

    // Simple, direct calculation
    let newIndex = carouselIndex + dir;

    // Handle wrap-around
    if (newIndex < 0) {
      newIndex = photos.length - 1;
    } else if (newIndex >= photos.length) {
      newIndex = 0;
    }

    // Set the new index directly
    setCarouselIndex(newIndex);
  };

  // Helper to handle keyboard navigation for skill tags
  const handleSkillKeyDown = (event, skillText) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // Announce the skill to screen readers
      const announcement = "Selected skill: " + skillText;
      const ariaLiveRegion = document.getElementById('skill-announcements');
      if (ariaLiveRegion) {
        ariaLiveRegion.textContent = announcement;
        setTimeout(() => {
          ariaLiveRegion.textContent = '';
        }, 1000);
      }
    }
  };

  // Reset carousel index when any modal opens
  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedProject, selectedResearch, selectedLeadership, selectedInternship]);



  return (
    <div className="app-container">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Navbar */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="logo">Vihaan Bussa</div>
        <ul className="nav-links">
          {[
            "home",
            "about",
            "projects",
            "research",
            "internships",
            "leadership",
            "achievements",
            "skills",
            "contact",
          ].map((id) => (
            <li key={id} className={activeSection === id ? "active" : ""}>
              <a href={"#" + id}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <main id="main-content">
        <section id="home" className="hero" role="banner">
          <div className="hero-content">
            <div className="student-badge">High School Student & Tech Innovator</div>
            <h1>
              Hi, I'm <span className="highlight">Vihaan Bussa</span>
            </h1>
            <p className="subtitle">Software Engineer | Financial Educator | AI Researcher</p>
            <p className="hero-description">
              Passionate high school senior building innovative solutions at the intersection of
              technology, healthcare, and finance. Currently pursuing advanced coursework at Ravenwood High School
              while developing impactful applications that serve thousands of users.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="hero-button">View Projects</a>
              <a href="#contact" className="hero-button secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <div className="scroll-indicator"></div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section about-section">
          <div className="section-header">
            <h2>About Me</h2>
            <p className="section-subtitle">High school senior passionate about technology and innovation</p>
          </div>
          <div className="about-container">
            <div className="about-content">
              <h3>My Journey</h3>
              <p>
                I'm a 17-year-old high school senior passionate about using technology to solve real-world problems.
                My programming journey began at age 13 with Python, quickly expanding to encompass web
                development, machine learning, and blockchain technologies.
              </p>
              <p>
                When I'm not coding or working on projects, you'll find me playing football and basketball,
                enjoying a game of pickleball, or experimenting in the kitchen. I'm also a big
                fan of Taco Bell and P.F. Chang's—there's nothing like good food to fuel creativity!
                My passion for technology extends beyond programming; I'm always excited to explore the
                latest innovations and discover how they can be applied to solve everyday challenges.
              </p>
              <div className="education">
                <h4>Education</h4>
                <div className="education-item">
                  <div className="education-icon">🎓</div>
                  <div className="education-details">
                    <h5>Ravenwood High School</h5>
                    <p className="education-basic">Class of 2026 | GPA: 4.71/4.0</p>
                    
                    <div className="education-section">
                      <p><strong>Standardized Scores:</strong></p>
                      <ul className="scores-list">
                        <li><strong>ACT:</strong> 36 Superscore, 35 Composite</li>
                        <li><strong>PSAT:</strong> 1490 (National Merit Semifinalist)</li>
                      </ul>
                    </div>

                    <div className="education-section">
                      <p><strong>Advanced Coursework:</strong></p>
                      <ul className="coursework-list">
                        <li>
                          <strong>Advanced Placement (AP):</strong> Scored 5 on 10 exams (Calculus BC, Statistics, Chemistry, Physics 1, Computer Science Principles, U.S. History, Seminar, Research, Human Geography, Precalculus) and 4 on 1 exam (English Language)
                        </li>
                        <li>
                          <strong>Currently Enrolled:</strong> AP Physics C (Mechanics & E&M), AP Computer Science A, AP Macroeconomics, AP U.S. Government
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <img src="./about_me_pic.png" alt="About me" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p className="section-subtitle">Innovative projects built throughout high school</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.slug}
                className="card"
                tabIndex={-1}
                onClick={() => {
                  setCarouselIndex(0);
                  setSelectedResearch(null);
                  setSelectedLeadership(null);
                  setSelectedInternship(null);
                  setSelectedProject(project);
                }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    {project.id === 1 ? "🌐" : project.id === 2 ? "📈" : project.id === 3 ? "🤝" : "🏥"}
                  </div>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section id="research" className="section research-section">
          <div className="section-header centered">
            <h2>Research Publications</h2>
            <p className="section-subtitle">Academic exploration in AI and data science</p>
          </div>
          <div className="research-grid">
            {researchTopics.map((topic) => (
              <div
                key={topic.id}
                id={topic.slug}
                className="card"
                tabIndex={-1}
                onClick={() => {
                  setCarouselIndex(0);
                  setSelectedResearch(topic);
                }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    {topic.id === 1 ? "🏈" : "🏃"}
                  </div>
                  <h3>{topic.title}</h3>
                </div>
                <p>{topic.description}</p>
                <div className="card-tags">
                  {topic.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internships */}
        <section id="internships" className="section internships-section">
          <div className="section-header">
            <h2>Internship Experience</h2>
            <p className="section-subtitle">Practical industry and research roles</p>
          </div>
          <div className="internship-grid">
            {internships.map((intn) => (
              <div key={intn.id} className="card" onClick={() => setSelectedInternship(intn)}>
                <div className="card-header">
                  <div className="card-icon">
                    {intn.id === 1 ? "🤖" : intn.id === 2 ? "🏥" : "🎓"}
                  </div>
                  <div>
                    <h3>{intn.organization}</h3>
                    <p className="role-title">{intn.title} • {intn.year}</p>
                  </div>
                </div>
                <p>{intn.description.length > 160 ? intn.description.slice(0, 160) + '…' : intn.description}</p>
                <div className="card-tags">
                  {(intn.id === 1
                    ? intn.skills.slice(0, 5)
                    : intn.skills
                  ).map((s, i) => (
                    <span key={i} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="section leadership-section">
          <div className="section-header">
            <h2>Leadership Experience</h2>
            <p className="section-subtitle">Positions of responsibility and mentorship</p>
          </div>
          <div className="leadership-grid">
            {leadership.map((role) => (
              <div
                key={role.id}
                id={role.slug}
                className="card"
                tabIndex={-1}
                onClick={() => {
                  setCarouselIndex(0);
                  setSelectedProject(null);
                  setSelectedResearch(null);
                  setSelectedInternship(null);
                  setSelectedLeadership(role);
                }}
              >
                <div className="card-header">
                  <div className="card-icon">
                    {role.id === 1 ? "⚡" : role.id === 2 ? "🤖" : role.id === 3 ? "🎓" : role.id === 4 ? "🌍" : "🤝"}
                  </div>
                  <div>
                    <h3>{role.title}</h3>
                    <p className="organization">{role.organization} • {role.year}</p>
                  </div>
                </div>
                <p>{role.description.split("\n")[0]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="section achievements-section">
          <div className="section-header">
            <h2>Academic Achievements</h2>
            <p className="section-subtitle">Recognition for excellence in STEM and innovation</p>
          </div>
          <div className="achievements-grid">
            {achievements.map((ach) => (
              <article key={ach.id} className="achievement-card">
                <div className="achievement-icon" aria-hidden="true">{ach.icon}</div>
                <h3>{ach.title}</h3>
                <div className="achievement-year" aria-label={"Year: " + ach.year}>{ach.year}</div>
                <p>{ach.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section id="skills" className="section skills-section">
          <div className="section-header">
            <h2>Technical Expertise</h2>
          </div>
          <div className="skills-row">
            {[
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
            ].map((tech) => (
              <span key={tech} className="skill-pill">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section contact-section">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">Let's connect and discuss opportunities</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><span className="contact-label">Email:</span> <a href="mailto:vihaanbussa@gmail.com">vihaanbussa@gmail.com</a></p>
              <p><span className="contact-label">Location:</span> Brentwood, TN</p>
              <p><span className="contact-label">School:</span> Ravenwood High School</p>
              <p><span className="contact-label">Availability:</span> Evenings & Weekends</p>
              <div className="social-links">
                <a href="https://linkedin.com/in/vihaanbussa" className="social-icon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Vihaanbussa" className="social-icon" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://instagram.com/vihaanbussa18" className="social-icon" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send me a message</h3>
              <p className="form-description">All fields marked with * are required</p>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                    aria-required="true"
                    aria-describedby="name-error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                    aria-required="true"
                    aria-describedby="email-error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleFormChange}
                    required
                    aria-required="true"
                    aria-describedby="message-error"
                  />
                </div>
                <button type="submit" className="submit-button" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</button>
                {formStatus && (
                  <div
                    className={"form-status " + (formStatus.includes('success') ? 'form-status-success' : 'form-status-error')}
                    role="alert"
                    aria-live="polite"
                  >
                    {formStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Vihaan Bussa</div>
            <p>High School Student & Aspiring Computer Scientist</p>
          </div>
          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#internships">Internships</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Connect</h4>
            <p><a href="mailto:vihaanbussa@gmail.com">vihaanbussa@gmail.com</a></p>
            <div className="social-links">
              <a href="https://linkedin.com/in/vihaanbussa" className="social-icon" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Vihaanbussa" className="social-icon" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://instagram.com/vihaanbussa18" className="social-icon" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vihaan Bussa. All rights reserved.</p>
          <p>Student at Ravenwood High School</p>
        </div>
      </footer>

      {/* Modal */}
      {(selectedProject || selectedResearch || selectedLeadership || selectedInternship) && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div
            className={"modal-content " + (selectedLeadership ? "leadership-modal" : "") + " " + (selectedInternship ? "internship-modal" : "")}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal} aria-label="Close modal" title="Close"></button>
            {selectedInternship ? (
              <>
                <div className="modal-header">
                  <h2 id="modal-title">{selectedInternship.title}</h2>
                  <p className="modal-subtitle">
                    {selectedInternship.organization} • {selectedInternship.year}
                  </p>
                  {selectedInternship.tags && selectedInternship.tags.length > 0 && (
                    <div className="modal-tags">
                      {selectedInternship.tags.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="single-column-layout">
                  <div className="modal-text">
                    <div className="modal-section">
                      <h3>Overview</h3>
                      <p>{selectedInternship.description}</p>
                    </div>
                    <div className="modal-section">
                      <h3>Duration & Scope</h3>
                      <p>{selectedInternship.duration}</p>
                    </div>
                    <div className="modal-section">
                      <h3>Key Responsibilities</h3>
                      <ul>
                        {selectedInternship.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="modal-section">
                      <h3>Impact & Achievements</h3>
                      <ul>
                        {selectedInternship.achievements.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                      {selectedInternship.impactNarrative && (
                        <div className="impact-narrative">
                          <h4>Impact Narrative</h4>
                          <p>{selectedInternship.impactNarrative}</p>
                        </div>
                      )}
                    </div>
                    <div className="modal-section">
                      <h3>Key Metrics</h3>
                      <ul>
                        {selectedInternship.keyMetrics.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="modal-section" role="group" aria-labelledby="skills-gained-heading">
                      <h3 id="skills-gained-heading">Skills Gained</h3>
                      <p id="skills-gained-description" className="skills-description sr-only">
                        List of {selectedInternship.skills.length} skills gained during this internship. Use Tab to navigate through skills, Enter or Space to select.
                      </p>
                      <ul className="skills-list" aria-labelledby="skills-gained-heading" aria-describedby="skills-gained-description">
                        {selectedInternship.skills.map((s, i) => (
                          <li
                            key={i}
                            className="skill-tag"
                            tabIndex="0"
                            aria-label={"Skill " + (i + 1) + " of " + selectedInternship.skills.length + ": " + s}
                            onKeyDown={(e) => handleSkillKeyDown(e, s)}
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selectedInternship.links && selectedInternship.links.length > 0 && (
                      <div className="modal-links">
                        {selectedInternship.links.map((l, i) => (
                          <a key={i} href={l.url} className="link-button" target="_blank" rel="noopener noreferrer">
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="back-button" onClick={closeModal}>
                    ← Back to Portfolio
                  </button>
                </div>
              </>
            ) : selectedLeadership ? (
              <>
                <div className="modal-header">
                  <h2 id="modal-title">{selectedLeadership.title}</h2>
                  <p className="modal-subtitle">
                    {selectedLeadership.organization} • {selectedLeadership.year}
                    {selectedLeadership.isVolunteer && <span className="volunteer-tag">Volunteer</span>}
                  </p>
                  {selectedLeadership.tags && selectedLeadership.tags.length > 0 && (
                    <div className="modal-tags">
                      {selectedLeadership.tags.map((t, i) => (
                        <span key={i} className="tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="split-layout">
                  <div className="modal-text">
                    <div className="modal-section">
                      <h3>Overview</h3>
                      {selectedLeadership.description.split("\n\n").map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    <div className="modal-section">
                      <h3>Duration & Scope</h3>
                      <p>{selectedLeadership.duration}</p>
                    </div>
                    <div className="modal-section">
                      <h3>Key Responsibilities</h3>
                      <ul>
                        {selectedLeadership.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="modal-section">
                      <h3>Impact & Achievements</h3>
                      <div className="impact-narrative">
                        {selectedLeadership.impactNarrative.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                      {selectedLeadership.achievements && selectedLeadership.achievements.length > 0 && (
                        <div className="key-achievements">
                          <h4>Key Achievements</h4>
                          <ul>
                            {selectedLeadership.achievements.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {selectedLeadership.keyMetrics && selectedLeadership.keyMetrics.length > 0 && (
                        <div className="impact-metrics">
                          <h4>Key Metrics</h4>
                          <ul>
                            {selectedLeadership.keyMetrics.map((m, i) => (
                              <li key={i}>{m}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="modal-section" role="group" aria-labelledby="skills-developed-heading">
                      <h3 id="skills-developed-heading">Skills Developed</h3>
                      <p id="skills-developed-description" className="skills-description sr-only">
                        List of {selectedLeadership.skills.length} skills developed during this leadership role. Use Tab to navigate through skills, Enter or Space to select.
                      </p>
                      <ul className="skills-list" aria-labelledby="skills-developed-heading" aria-describedby="skills-developed-description">
                        {selectedLeadership.skills.map((s, i) => (
                          <li
                            key={i}
                            className="skill-tag"
                            tabIndex="0"
                            aria-label={"Skill " + (i + 1) + " of " + selectedLeadership.skills.length + ": " + s}
                            onKeyDown={(e) => handleSkillKeyDown(e, s)}
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selectedLeadership.links && selectedLeadership.links.length > 0 && (
                      <div className="modal-links">
                        {selectedLeadership.links.map((l, i) => (
                          <a key={i} href={l.url} className="link-button" target="_blank" rel="noopener noreferrer">
                            {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="modal-gallery">
                    {selectedLeadership.photos?.length > 0 && (
                      <>
                        <div className="carousel-container">
                          <div className="carousel-image-wrapper">
                            <img
                              src={(() => {
                                const photos = getCurrentPhotos();
                                if (!photos || photos.length === 0) return '';
                                const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                                return photos[index]?.url || '';
                              })()}
                              alt={(() => {
                                const photos = getCurrentPhotos();
                                if (!photos || photos.length === 0) return 'Leadership image';
                                const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                                return photos[index]?.caption || 'Leadership image';
                              })()}
                              className="carousel-image"
                              onClick={() => {
                                const photos = getCurrentPhotos();
                                if (!photos || photos.length === 0) return;
                                const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                                openImageZoom(photos[index]);
                              }}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="image-error" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f3f4f6', color: '#6b7280' }}>
                              Image not available
                            </div>
                            {(() => {
                              const photos = getCurrentPhotos();
                              if (!photos || photos.length === 0) return null;
                              const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                              const photo = photos[index];
                              if (!photo?.caption) return null;
                              return (
                                <div className="gallery-caption">
                                  <div className="caption-number">{index + 1}</div>
                                  <p>{photo.caption}</p>
                                </div>
                              );
                            })()}
                          </div>
                          <div className="carousel-navigation">
                            <button
                              className="carousel-arrow left"
                              onClick={() => handleCarouselNav(-1)}
                              aria-label="Previous image"
                            />
                            <div className="carousel-dots" role="tablist" aria-label="Image gallery navigation">
                              {selectedLeadership.photos.map((_, i) => (
                                <button
                                  key={i}
                                  className={"carousel-dot" + (carouselIndex === i ? ' active' : '')}
                                  onClick={() => setCarouselIndex(i)}
                                  role="tab"
                                  aria-selected={carouselIndex === i}
                                  aria-label={"Go to image " + (i + 1)}
                                />
                              ))}
                            </div>
                            <button
                              className="carousel-arrow right"
                              onClick={() => handleCarouselNav(1)}
                              aria-label="Next image"
                            />
                          </div>
                        </div>
                      </>
                    )}

                  </div>
                </div>
                <div className="modal-footer">
                  <button className="back-button" onClick={closeModal}>
                    ← Back to Portfolio
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="modal-header">
                  <h2 id="modal-title">{selectedProject ? selectedProject.title : selectedResearch.title}</h2>
                  <p className="modal-subtitle">
                    {selectedProject ? selectedProject.description : selectedResearch.description}
                  </p>
                  <div className="modal-tags">
                    {(selectedProject?.tags || selectedResearch?.tags || []).map((t, i) => (
                      <span key={i} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="split-layout">
                  <div className="modal-text">
                    <div className="modal-section">
                      <h3>Overview</h3>
                      <p>{selectedProject?.overview || selectedResearch?.overview}</p>
                    </div>
                    <div className="modal-section">
                      <h3>Details</h3>
                      <div className="markdown-content">
                        {renderDetails(selectedProject?.details || selectedResearch?.details)}
                      </div>
                    </div>
                    {(selectedProject?.challenges || selectedResearch?.challenges) && (
                      <div className="modal-section">
                        <h3>Challenges & Solutions</h3>
                        <ul>
                          {(selectedProject?.challenges || selectedResearch?.challenges).map((c, i) => (
                            <li key={i}><strong>{c.problem}</strong>: {c.solution}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="modal-links">
                      {(selectedProject?.links || selectedResearch?.links).map((l, i) => (
                        <a
                          key={i}
                          href={l.url}
                          className="link-button"
                          target={l.url.startsWith('http') ? '_blank' : '_self'}
                          rel={l.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                    {(selectedProject?.future || selectedResearch?.future) && (
                      <div className="modal-section future-work">
                        <h3>Future Development</h3>
                        <ul>
                          {(selectedProject?.future || selectedResearch?.future).map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="modal-gallery">
                    {/* Debug: Photos count: {getCurrentPhotos().length} */}
                    {getCurrentPhotos().length > 0 && (
                      <>
                        <div className="carousel-container">
                          <div className="carousel-image-wrapper">


                            <img
                              src={(() => {
                                const photos = getCurrentPhotos();
                                if (!photos || photos.length === 0) return '';
                                const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                                return photos[index]?.url || '';
                              })()}
                              alt={(() => {
                                const photos = getCurrentPhotos();
                                if (!photos || photos.length === 0) return 'Project image';
                                const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                                return photos[index]?.caption || 'Project image';
                              })()}
                              className="carousel-image"
                              onClick={() => {
                                const photos = getCurrentPhotos();
                                if (!photos || photos.length === 0) return;
                                const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                                openImageZoom(photos[index]);
                              }}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="image-error" style={{ display: 'none', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f3f4f6', color: '#6b7280' }}>
                              Image not available
                            </div>
                            {(() => {
                              const photos = getCurrentPhotos();
                              if (!photos || photos.length === 0) return null;
                              const index = Math.max(0, Math.min(carouselIndex, photos.length - 1));
                              const photo = photos[index];
                              if (!photo?.caption) return null;
                              return (
                                <div className="gallery-caption">
                                  <div className="caption-number">{index + 1}</div>
                                  <p>{photo.caption}</p>
                                </div>
                              );
                            })()}
                          </div>
                          <div className="carousel-navigation">
                            <button
                              className="carousel-arrow left"
                              onClick={() => handleCarouselNav(-1)}
                              aria-label="Previous image"
                            />
                            <div className="carousel-dots" role="tablist" aria-label="Image gallery navigation">
                              {getCurrentPhotos().map((_, i) => (
                                <button
                                  key={i}
                                  className={"carousel-dot" + (carouselIndex === i ? ' active' : '')}
                                  onClick={() => setCarouselIndex(i)}
                                  role="tab"
                                  aria-selected={carouselIndex === i}
                                  aria-label={"Go to image " + (i + 1)}
                                />
                              ))}
                            </div>
                            <button
                              className="carousel-arrow right"
                              onClick={() => handleCarouselNav(1)}
                              aria-label="Next image"
                            />
                          </div>

                        </div>
                      </>
                    )}
                    {selectedProject?.video && (
                      <div className="video-container">
                        <iframe
                          className="project-video"
                          src={"https://www.youtube.com/embed/" + selectedProject.video.embedId}
                          title={selectedProject.video.caption}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="gallery-caption">
                          <div className="caption-number">📹</div>
                          <p>{selectedProject.video.caption}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="back-button" onClick={closeModal}>
                    ← Back to Portfolio
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div className="image-zoom-overlay" onClick={closeImageZoom}>
          <img
            src={zoomedImage.url}
            alt={zoomedImage.caption}
            className="image-zoom-content"
            onClick={(e) => e.stopPropagation()}
          />
          {zoomedImage.caption && (
            <div className="image-zoom-caption">
              {zoomedImage.caption}
            </div>
          )}
        </div>
      )}

      {/* ARIA live region for skill announcements */}
      <div
        id="skill-announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      ></div>
    </div>
  );
}

export default App;
