/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║                                                              ║
 * ║  Edit this file to personalize your entire portfolio.        ║
 * ║  No need to touch HTML, CSS, or JS — everything is           ║
 * ║  driven from this single config.                             ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── Personal Info ───────────────────────────────────────────
  name: "Charles Barreto",
  title: "Mechatronics Architect",
  tagline: "Building high‑performance robotics, automation systems, and precision motion platforms.",
  roles: ["Mechatronics Architect", "Robotics Specialist", "Automation Developer", "System Integrator"],

  about: {
    description: [
      "Mechatronics Architect specializing in precision motion control, autonomous robotics, and multi‑domain system integration.",
      "Experienced in developing automation pipelines, ROS/SLAM workflows, and high‑G calibration systems for mission‑critical platforms.",
      "Delivered multi‑million‑dollar reliability improvements across ASML EUV and DUV platforms through automation, diagnostics, and system‑level optimization."
    ],
    resumeUrl: "",
    avatarUrl: "assets/Images/profile.jpg"
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    linkedin: "www.linkedin.com/in/charlesbarreto",
    twitter: "",
    email: "charlesibarreto@gmail.com"
  },

  // ─── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "Extreme Ultra-Violet Lithography (5 to 15nm)",
      description: "Architected autonomous subsystems and robotics control algorithms for next‑gen EUV platforms, improving 6‑DOF system performance under 13G–21G conditions.",
      tech: ["ASML"],
      liveUrl: "https://www.youtube.com/watch?v=4K5V_xLsEQ4",
      githubUrl: "",
      image: "assets/Images/photoEUV.jpg",
      category: "robotics"
    },
    {
      title: "Deep Ultra-Violet Lithography (248nm)",
      description: "Developed Python/MATLAB automation tools reducing analysis time by ~96% and enabling $3M+ annual reliability improvements.",
      tech: ["ASML"],
      liveUrl: "https://www.youtube.com/watch?v=MiUHjLxm3V0&t=1319s",
      githubUrl: "",
      image: "assets/Images/photoDUV.png",
      category: "automation"
    },
    {
      title: "Robotic Strong Arm",
      description: "Built high‑precision calibration workflows for 6‑DOF systems operating under extreme acceleration environments.",
      tech: [""],
      liveUrl: "#",
      githubUrl: "",
      image: "assets/Images/photostrongarm.png",
      featured: false,
      category: "robotics"
    },
    {
      title: "Robotic 6DOF Precision Arm",
      description: "Led development of a 6‑DOF precision manipulator and 4‑DOF robotic arm with ROS‑based localization and control.",
      tech: [""],
      liveUrl: "#",
      githubUrl: "",
      image: "assets/Images/photoprecisionarm.png",
      featured: false,
      category: "robotics"
    },
    {
      title: "Cube Craze Robot",
      description: "Designed and validated reticle handling systems using Siemens NX and MATLAB, improving reliability and throughput.",
      tech: [""],
      liveUrl: "https://www.linkedin.com/posts/earlier-this-week-asml-wilton-employees-share-7004172295954931712-NNMd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOy5OkBsV2fSatr2glKyxd3cxfJhYByUl4",
      githubUrl: "",
      image: "assets/Images/photocubecraze.jpg",
      featured: false,
      category: "mechanical"
    },
    {
      title: "Predictive Failure Detection System",
      description: "Filed patent for a software‑based monitoring system enabling early detection of hardware wear and software failures.",
      tech: ["Python", "Diagnostics", "System Monitoring"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "automation"
    }
  ],

  // ─── Skills ─────────────────────────────────────────────────
  skills: 
  [
    { name: "Automation & Control Systems", icon: "⚙️" },
    { name: "Robotics & Autonomy (ROS, SLAM, Motion Control)", icon: "🤖" },
    { name: "Software Engineering (Python, C++, Git)", icon: "💻" },
    { name: "Modeling & Simulation (MATLAB/Simulink)", icon: "📊" },
    { name: "Linux Systems (Ubuntu, Bash, Shell Tools)", icon: "🐧" },
    { name: "CAD & Design (NX, SolidWorks, Autodesk)", icon: "📐" },
    { name: "Embedded & Hardware (Arduino, Sensors, DAQ)", icon: "🔌" },
    { name: "Fabrication & Prototyping (CNC, 3D Printing)", icon: "🖨️" }
  ],


  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
    {
      role: "Mechatronics Architect",
      company: "ASML EUV & DUV",
      period: "Jan 2021 — Present",
      description: "",
      tech: []
    },
    {
      role: "Mechanical Engineer (Contractor)",
      company: "ASML EUV",
      period: "May 2020 — Aug 2020",
      description: "",
      tech: []
    },
    {
      role: "Mechanical Engineer Intern",
      company: "ASML EUV",
      period: "May 2019 — Aug 2019",
      description: "",
      tech: []
    },
    {
      role: "Sub‑Team Lead",
      company: "Cornell Cup Robotics",
      period: "Sep 2017 — Dec 2020",
      description: "",
      tech: []
    },
    {
      role: "Team Lead",
      company: "VEX Robotics",
      period: "Sep 2016 — May 2017",
      description: "",
      tech: []
    }
  ],


  // ─── Publications ───────────────────────────────────────────
  publications: [
    {
      title: "Geneva Mechanism–Driven EUV Pod Rotation System",
      type: "Defensive Publication",
      date: "Aug 2018",
      summary: "Designed a self-locking Geneva mechanism enabling precise 90° pod rotation using a single actuation system.",
      tags: ["Mechanisms", "EUV", "Precision Motion"]
    },
    {
      title: "System for Detecting Hardware Wear and Software Failures in Lithography Systems",
      type: "Patent (Filed)",
      date: "May 2025",
      summary: "Software-based monitoring system enabling early detection of component wear and failures to reduce downtime and prevent wafer defects.",
      tags: ["Diagnostics", "Reliability", "Automation"]
    }
  ],


  // ─── Theme Configuration ────────────────────────────────────
  theme: {
    primaryColor: "#6366F1",
    secondaryColor: "#8B5CF6",
    accentColor: "#EC4899",
    bgPrimary: "#0B0D17",
    bgSecondary: "#111427",
    bgCard: "rgba(17, 20, 39, 0.7)",
    textPrimary: "#E2E8F0",
    textSecondary: "#94A3B8",
    textMuted: "#475569",
    glassBg: "rgba(255, 255, 255, 0.03)",
    glassBorder: "rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    fontFamily: "'Inter', sans-serif"
  },



  // ─── Advanced Settings ──────────────────────────────────────
  settings: {
    enableParticles: true,
    enableCursorGlow: true,
    enableSmoothScroll: true,
    enablePreloader: true,
    enableSoundEffects: false,
    particleCount: 50,
    animationSpeed: 1
  }
};
