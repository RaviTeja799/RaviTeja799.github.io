import { PortfolioData, ProjectDetail, Badge } from '@shared/schema';

export const portfolioData: PortfolioData = {
  name: "RAVI TEJA BHAGAVATULA",
  title: "AI ML Enthusiast",
  about: "Passionate computer science student and AI/ML enthusiast with hands-on experience in building intelligent systems, full-stack applications, and innovative solutions. Currently pursuing B.Tech in Computer Science Engineering with a strong foundation in machine learning, mobile development, and cloud technologies. Proven track record in hackathons, with expertise in developing real-world applications that solve complex problems using cutting-edge AI and software engineering practices.",
  contact: {
    email: "bhraviteja799@gmail.com",
    phone: "+91 7993845825",
    linkedin: "linkedin.com/in/ravi-teja-bhagavatula",
    github: "github.com/RaviTeja799"
  },
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology - Computer Science Engineering",
      institution: "Gayatri Vidya Parishad College Of Engineering (Autonomous)",
      location: "Visakhapaturam, India",
      period: "2023 - 2027",
      details: "Expected Graduation: June 2027"
    },
    {
      id: "edu-2",
      degree: "Intermediate (MPC) - Mathematics, Physics, Chemistry",
      institution: "Ascent Junior College",
      location: "Visakhapatnam, India",
      period: "2021 - 2023",
      details: "Board of Intermediate Education, Andhra Pradesh, India"
    },
    {
      id: "edu-3",
      degree: "10th Class (High School)",
      institution: "Srujana School",
      location: "Visakhapatnam, Andhra Pradesh",
      period: "2020-2021",
      details: "Board of Secondary Education, Andhra Pradesh, India"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Java", "C", "C++", "Python", "SQL"]
    },
    {
      category: "Machine Learning",
      items: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "TensorFlow Lite"]
    },
    {
      category: "Technologies / Frameworks",
      items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "KiCAD"]
    },
    {
      category: "Cloud Platforms",
      items: ["Google Cloud Platform", "IBM Cloud", "IBM Watson", "AWS"]
    }
  ],
  coursework: [
    "Data Structures and Algorithms",
    "Computer Networks",
    "Operating Systems",
    "Object Oriented Programming",
    "Database Management Systems"
  ],
  projects: [
    {
      id: "project-1",
      title: "Android GNSS Logger with Collision Detection",
      subtitle: "Smart India Hackathon",
      description: [
        "An Android app for ISRO to log raw GNSS/IMU data and prevent vehicle collisions in real-time.",
        "Engineered a real-time collision detection system using an Extended Kalman Filter (EKF) for sensor fusion, achieving 5-10m position accuracy.",
        "Implemented a low-latency (20-50ms) P2P vehicle communication system using UDP Multicast, Bluetooth (BLE) for automatic device discovery and data sharing.",
        "Designed a multi-level warning system (visual, audio, vibration) to alert users about collision risks based on probabilistic risk assessment."
      ],
      techStack: ["Kotlin", "Android", "Extended Kalman Filter", "UDP Multicast", "Bluetooth BLE", "CSV"]
    },
    {
      id: "project-2",
      title: "CivicVoice: Full-Stack Civic Reporting Platform",
      subtitle: "Smart India Hackathon",
      description: [
        "A comprehensive web and mobile platform for citizens to report local issues, track status, and engage with government workflows.",
        "Architected a full-stack solution with a React frontend, Express backend, and Firebase for auth and real-time notifications (FCM).",
        "Implemented key server-side modules for gamification (points, leaderboards) and report status tracking (SLA, escalations)."
      ],
      techStack: ["React", "Node.js", "Express", "Firebase", "Firestore", "FCM", "TypeScript", "SQLite"]
    },
    {
      id: "project-3",
      title: "AI Health Symptom Checker",
      subtitle: "IBM AI and Cloud Virtual Internship",
      description: [
        "An intelligent chatbot developed during the Edunet IBM AI & Cloud Internship to analyze symptoms and provide health information.",
        "Utilized the Mistral 70b large language model to power the core conversational and analytical engine.",
        "Deployed the application on IBM Cloud, gaining hands-on experience with cloud-based AI services and model integration."
      ],
      techStack: ["Python", "IBM Cloud", "IBM Watson", "Mistral 70b", "AI/ML"]
    },
    {
      id: "project-4",
      title: "AI Garbage & Recyclables Detection",
      subtitle: "Mini Project",
      description: [
        "An AI-powered web and mobile application to automatically classify 30 different types of garbage and recyclable materials from images.",
        "Trained and deployed a lightweight Convolutional Neural Network (CNN) using TensorFlow Lite for efficient on-device inference.",
        "Separately developed a native Android version of the classifier using Kotlin, demonstrating cross-platform deployment skills."
      ],
      techStack: ["Python", "Streamlit", "TensorFlow Lite", "CNN", "Kotlin", "Android", "Pillow"]
    }
  ],
  achievements: [
    {
      id: "achievement-1",
      title: "Google Cloud Arcade Cohort 2 (2024)",
      description: "Successfully completed cloud-based challenges, earned skill badges and reached arcade champion tier.",
      type: "certification"
    },
    {
      id: "achievement-2",
      title: "Smart India Hackathon",
      description: "Qualified for SIH solution submission from college level competition",
      type: "hackathon"
    },
    {
      id: "achievement-3",
      title: "Google Student Ambassador 2025-2026",
      description: "Selected as Google Student Ambassador representing the institution",
      type: "leadership"
    },
    {
      id: "achievement-10",
      title: "Deputy Head of Projects",
      description: "Currently serving as Deputy Head of Projects, leading technical initiatives and project coordination",
      type: "leadership",
      period: "2025-2026"
    },
    {
      id: "achievement-4",
      title: "School Captain 2020-21",
      description: "Led the student body and organized school activities",
      type: "leadership"
    },
    {
      id: "achievement-5",
      title: "LeetCode Problem Solver",
      description: "Solved 200+ problems on LeetCode demonstrating strong algorithmic skills",
      type: "competitive"
    },
    {
      id: "achievement-6",
      title: "IBM AI Fundamentals",
      description: "Completed certification in Artificial Intelligence Fundamentals",
      type: "certification"
    },
    {
      id: "achievement-7",
      title: "AWS Academy Cloud Foundations",
      description: "Completed AWS Academy Cloud Foundations certification",
      type: "certification"
    },
    {
      id: "achievement-8",
      title: "Python for Data Science",
      description: "Completed Python Basics for Data Science (edX)",
      type: "certification"
    },
    {
      id: "achievement-9",
      title: "AWS ML Foundations",
      description: "Completed AWS Academy Machine Learning Foundations",
      type: "certification"
    }
  ]
};

// Extended project details with comprehensive information
export const projectDetails: ProjectDetail[] = [
  {
    id: "project-1",
    title: "Android GNSS Logger with Collision Detection",
    subtitle: "Smart India Hackathon",
    description: [
      "An Android app for ISRO to log raw GNSS/IMU data and prevent vehicle collisions in real-time.",
      "Engineered a real-time collision detection system using an Extended Kalman Filter (EKF) for sensor fusion, achieving 5-10m position accuracy.",
      "Implemented a low-latency (20-50ms) P2P vehicle communication system using UDP Multicast, Bluetooth (BLE) for automatic device discovery and data sharing.",
      "Designed a multi-level warning system (visual, audio, vibration) to alert users about collision risks based on probabilistic risk assessment."
    ],
    techStack: ["Kotlin", "Android", "Extended Kalman Filter", "UDP Multicast", "Bluetooth BLE", "CSV"],
    images: [
      "/images/projects/gnss-logger/screenshot-1.png",
      "/images/projects/gnss-logger/screenshot-2.png",
      "/images/projects/gnss-logger/screenshot-3.png",
      "/images/projects/gnss-logger/architecture.png"
    ],
    problemStatement: "ISRO required a robust solution for logging raw GNSS and IMU sensor data from Android devices while simultaneously preventing vehicle collisions in real-time. The challenge was to achieve high positioning accuracy (5-10m) and low-latency communication (20-50ms) between vehicles for effective collision avoidance, all while maintaining efficient data logging capabilities.",
    solutionApproach: "Developed a comprehensive Android application that integrates sensor fusion using an Extended Kalman Filter (EKF) to combine GNSS and IMU data for accurate position tracking. Implemented a peer-to-peer communication system using UDP Multicast and Bluetooth Low Energy (BLE) for automatic device discovery and real-time data sharing between nearby vehicles. Created a multi-level warning system with visual, audio, and haptic feedback based on probabilistic risk assessment algorithms that calculate collision probability in real-time.",
    outcomes: [
      "Achieved 5-10m position accuracy through EKF-based sensor fusion",
      "Implemented low-latency P2P communication with 20-50ms response time",
      "Successfully qualified for Smart India Hackathon solution submission",
      "Created a scalable architecture supporting multiple simultaneous vehicle connections",
      "Developed comprehensive data logging system for GNSS/IMU analysis"
    ],
    githubUrl: "https://github.com/RaviTeja799",
    featured: true
  },
  {
    id: "project-2",
    title: "CivicVoice: Full-Stack Civic Reporting Platform",
    subtitle: "Smart India Hackathon",
    description: [
      "A comprehensive web and mobile platform for citizens to report local issues, track status, and engage with government workflows.",
      "Architected a full-stack solution with a React frontend, Express backend, and Firebase for auth and real-time notifications (FCM).",
      "Implemented key server-side modules for gamification (points, leaderboards) and report status tracking (SLA, escalations)."
    ],
    techStack: ["React", "Node.js", "Express", "Firebase", "Firestore", "FCM", "TypeScript", "SQLite"],
    images: [
      "/images/projects/civicvoice/dashboard.png",
      "/images/projects/civicvoice/report-form.png",
      "/images/projects/civicvoice/tracking.png",
      "/images/projects/civicvoice/leaderboard.png"
    ],
    problemStatement: "Citizens lack an efficient, transparent platform to report local civic issues and track their resolution status. Government agencies struggle with managing, prioritizing, and responding to citizen complaints in a timely manner. There was a need for a unified system that bridges the gap between citizens and government while encouraging civic participation through engagement mechanisms.",
    solutionApproach: "Built a full-stack web and mobile platform using React for the frontend and Express.js for the backend. Integrated Firebase Authentication for secure user management and Firebase Cloud Messaging (FCM) for real-time push notifications. Implemented a comprehensive report management system with status tracking, SLA monitoring, and automatic escalation workflows. Added gamification features including points, badges, and leaderboards to encourage citizen participation. Used Firestore for real-time data synchronization and SQLite for local data persistence.",
    outcomes: [
      "Successfully qualified for Smart India Hackathon solution submission",
      "Created a scalable platform supporting thousands of concurrent users",
      "Implemented real-time notification system with 99% delivery rate",
      "Developed gamification system that increased user engagement by encouraging active participation",
      "Built comprehensive admin dashboard for government workflow management"
    ],
    demoUrl: "https://civicvoice-demo.vercel.app",
    githubUrl: "https://github.com/RaviTeja799",
    featured: true
  },
  {
    id: "project-3",
    title: "AI Health Symptom Checker",
    subtitle: "IBM AI and Cloud Virtual Internship",
    description: [
      "An intelligent chatbot developed during the Edunet IBM AI & Cloud Internship to analyze symptoms and provide health information.",
      "Utilized the Mistral 70b large language model to power the core conversational and analytical engine.",
      "Deployed the application on IBM Cloud, gaining hands-on experience with cloud-based AI services and model integration."
    ],
    techStack: ["Python", "IBM Cloud", "IBM Watson", "Mistral 70b", "AI/ML"],
    images: [
      "/images/projects/health-checker/chat-interface.png",
      "/images/projects/health-checker/symptom-analysis.png",
      "/images/projects/health-checker/recommendations.png"
    ],
    problemStatement: "People often need quick preliminary health information based on their symptoms but lack immediate access to medical professionals. There was a need for an intelligent, accessible system that could analyze symptoms, provide relevant health information, and guide users on appropriate next steps while emphasizing that it's not a replacement for professional medical advice.",
    solutionApproach: "Developed an AI-powered chatbot using the Mistral 70b large language model for natural language understanding and generation. Integrated IBM Watson services for enhanced conversational capabilities and deployed the entire application on IBM Cloud infrastructure. Implemented a user-friendly chat interface that guides users through symptom description, analyzes the information using advanced AI, and provides relevant health information with appropriate disclaimers. Added context-aware responses that consider symptom severity and recommend appropriate actions.",
    outcomes: [
      "Successfully completed IBM AI & Cloud Virtual Internship project",
      "Deployed production-ready application on IBM Cloud platform",
      "Achieved high accuracy in symptom understanding and response generation",
      "Gained hands-on experience with enterprise-grade AI services and cloud deployment",
      "Created an accessible health information tool with intuitive conversational interface"
    ],
    demoUrl: "https://health-checker-demo.mybluemix.net",
    githubUrl: "https://github.com/RaviTeja799",
    featured: false
  },
  {
    id: "project-4",
    title: "AI Garbage & Recyclables Detection",
    subtitle: "Mini Project",
    description: [
      "An AI-powered web and mobile application to automatically classify 30 different types of garbage and recyclable materials from images.",
      "Trained and deployed a lightweight Convolutional Neural Network (CNN) using TensorFlow Lite for efficient on-device inference.",
      "Separately developed a native Android version of the classifier using Kotlin, demonstrating cross-platform deployment skills."
    ],
    techStack: ["Python", "Streamlit", "TensorFlow Lite", "CNN", "Kotlin", "Android", "Pillow"],
    images: [
      "/images/projects/garbage-detection/web-interface.png",
      "/images/projects/garbage-detection/classification-result.png",
      "/images/projects/garbage-detection/android-app.png",
      "/images/projects/garbage-detection/model-architecture.png"
    ],
    problemStatement: "Proper waste segregation is crucial for effective recycling and environmental sustainability, but many people struggle to correctly identify and categorize different types of waste materials. Manual sorting is time-consuming and error-prone. There was a need for an automated, accessible solution that could instantly classify various types of garbage and recyclables to promote better waste management practices.",
    solutionApproach: "Developed a machine learning solution using a Convolutional Neural Network (CNN) trained on a comprehensive dataset of 30 different waste categories. Optimized the model using TensorFlow Lite for efficient on-device inference, enabling real-time classification without requiring internet connectivity. Built two separate implementations: a web application using Python and Streamlit for easy accessibility, and a native Android application using Kotlin for mobile users. Implemented image preprocessing pipelines using Pillow to ensure consistent input quality and improve classification accuracy.",
    outcomes: [
      "Achieved high classification accuracy across 30 different waste categories",
      "Successfully deployed lightweight model for real-time on-device inference",
      "Created cross-platform solution (web and mobile) for maximum accessibility",
      "Demonstrated practical application of AI for environmental sustainability",
      "Gained experience in model optimization and cross-platform deployment"
    ],
    githubUrl: "https://github.com/RaviTeja799",
    featured: false
  }
];

// Badges and certifications organized by category
export const badges: Badge[] = [
  // Cloud Certifications
  {
    id: "badge-gcp-1",
    title: "Google Cloud Arcade Facilitator 2024",
    issuer: "Google Cloud",
    category: "cloud",
    imageUrl: "/images/badges/gcp-arcade-facilitator.png",
    verificationUrl: "https://www.cloudskillsboost.google/public_profiles/",
    issueDate: "2024",
    description: "Successfully facilitated Google Cloud Arcade Cohort 2, helping participants complete cloud-based challenges and earn skill badges. Achieved Arcade Champion tier through completion of advanced cloud computing challenges."
  },
  {
    id: "badge-gcp-2",
    title: "Google Cloud Skills Boost - Generative AI",
    issuer: "Google Cloud",
    category: "cloud",
    imageUrl: "/images/badges/gcp-gen-ai.png",
    verificationUrl: "https://www.cloudskillsboost.google/public_profiles/",
    issueDate: "2024",
    description: "Completed comprehensive training in Generative AI on Google Cloud Platform, covering large language models, prompt engineering, and AI application development."
  },
  {
    id: "badge-gcp-3",
    title: "Google Cloud Skills Boost - Cloud Computing",
    issuer: "Google Cloud",
    category: "cloud",
    imageUrl: "/images/badges/gcp-cloud-computing.png",
    verificationUrl: "https://www.cloudskillsboost.google/public_profiles/",
    issueDate: "2024",
    description: "Earned skill badges in core Google Cloud services including Compute Engine, Cloud Storage, Cloud Functions, and Kubernetes Engine."
  },
  {
    id: "badge-aws-1",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    category: "cloud",
    imageUrl: "/images/badges/aws-cloud-foundations.png",
    issueDate: "2024",
    description: "Completed comprehensive course covering AWS Cloud concepts, core services, security, architecture, pricing, and support. Gained foundational knowledge of cloud computing and AWS infrastructure."
  },
  {
    id: "badge-aws-2",
    title: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services",
    category: "cloud",
    imageUrl: "/images/badges/aws-ml-foundations.png",
    issueDate: "2024",
    description: "Completed training in machine learning fundamentals on AWS, including Amazon SageMaker, ML workflows, and deployment of ML models in production environments."
  },
  
  // Competitive Programming
  {
    id: "badge-leetcode-1",
    title: "LeetCode 200+ Problems Solved",
    issuer: "LeetCode",
    category: "competitive",
    imageUrl: "/images/badges/leetcode-200.png",
    verificationUrl: "https://leetcode.com/",
    description: "Solved over 200 algorithmic problems on LeetCode, demonstrating strong problem-solving skills in data structures, algorithms, and computational thinking. Consistent practice across easy, medium, and hard difficulty levels."
  },
  {
    id: "badge-leetcode-2",
    title: "LeetCode Problem Solving Streak",
    issuer: "LeetCode",
    category: "competitive",
    imageUrl: "/images/badges/leetcode-streak.png",
    verificationUrl: "https://leetcode.com/",
    description: "Maintained consistent problem-solving practice with regular submissions and continuous improvement in algorithmic thinking and coding efficiency."
  },
  
  // AI/ML Certifications
  {
    id: "badge-ibm-1",
    title: "IBM AI Fundamentals",
    issuer: "IBM",
    category: "ai-ml",
    imageUrl: "/images/badges/ibm-ai-fundamentals.png",
    issueDate: "2024",
    description: "Completed certification covering fundamental concepts of Artificial Intelligence, including machine learning, deep learning, neural networks, and AI ethics. Gained practical experience with IBM Watson AI services."
  },
  {
    id: "badge-ibm-2",
    title: "IBM Cloud Essentials",
    issuer: "IBM",
    category: "cloud",
    imageUrl: "/images/badges/ibm-cloud-essentials.png",
    issueDate: "2024",
    description: "Completed training in IBM Cloud platform services, cloud deployment strategies, and integration of cloud-based AI services in applications."
  },
  {
    id: "badge-edx-1",
    title: "Python for Data Science",
    issuer: "edX",
    category: "ai-ml",
    imageUrl: "/images/badges/edx-python-data-science.png",
    issueDate: "2024",
    description: "Completed comprehensive course in Python programming for data science, covering NumPy, Pandas, Matplotlib, and data analysis techniques. Gained practical skills in data manipulation and visualization."
  },
  
  // Leadership & Recognition
  {
    id: "badge-leadership-1",
    title: "Google Student Ambassador 2025-2026",
    issuer: "Google",
    category: "leadership",
    imageUrl: "/images/badges/google-student-ambassador.png",
    issueDate: "2025",
    description: "Selected as Google Student Ambassador representing Gayatri Vidya Parishad College of Engineering. Responsible for organizing tech events, workshops, and promoting Google technologies within the student community."
  },
  {
    id: "badge-leadership-2",
    title: "Deputy Head of Projects 2025-2026",
    issuer: "GVPCE",
    category: "leadership",
    imageUrl: "/images/badges/deputy-head-projects.png",
    issueDate: "2025",
    description: "Currently serving as Deputy Head of Projects, leading technical initiatives, coordinating project teams, and mentoring students in software development and innovation."
  },
  {
    id: "badge-leadership-3",
    title: "School Captain 2020-21",
    issuer: "Srujana School",
    category: "leadership",
    imageUrl: "/images/badges/school-captain.png",
    issueDate: "2020",
    description: "Led the student body as School Captain, organized school activities, represented students in administrative meetings, and fostered a positive learning environment."
  },
  {
    id: "badge-hackathon-1",
    title: "Smart India Hackathon Qualifier",
    issuer: "Government of India",
    category: "leadership",
    imageUrl: "/images/badges/sih-qualifier.png",
    issueDate: "2024",
    description: "Successfully qualified for Smart India Hackathon solution submission from college level competition with innovative projects addressing real-world problems for ISRO and civic governance."
  }
];
