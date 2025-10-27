import { PortfolioData } from '@shared/schema';

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
      location: "Visakhapatnam, India",
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
