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
  roles: ["Mechatronics Architect", "Robotics Engineer", "Automation Developer", "System Integrator"],

  about: {
    description: [
      "Mechatronics Architect specializing in precision motion control, autonomous robotics, and multi‑domain system integration.",
      "Experienced in developing automation pipelines, ROS/SLAM workflows, and high‑G calibration systems for mission‑critical platforms.",
      "Delivered multi‑million‑dollar reliability improvements across ASML EUV and DUV platforms through automation, diagnostics, and system‑level optimization."
    ],
    resumeUrl: "docs/resume.pdf",
    avatarUrl: "assets/images/profile.jpeg"
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/charlesibarreto",
    linkedin: "https://linkedin.com/in/charlesbarreto",
    twitter: "",
    email: "charlesibarreto@gmail.com"
  },

  // ─── Skills ─────────────────────────────────────────────────
  skills: [
    { name: "Precision Motion Control", icon: "🎯" },
    { name: "Python / MATLAB Automation", icon: "🐍" },
    { name: "Robotics (ROS / SLAM)", icon: "🤖" },
    { name: "System Architecture", icon: "🧩" },
    { name: "High‑G Testing & Calibration", icon: "📈" },
    { name: "Siemens NX / SolidWorks", icon: "📐" },
    { name: "Data Analysis / Diagnostics", icon: "📊" },
    { name: "CNC / 3D Printing / Electronics", icon: "⚙️" }
  ],


  // ─── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "EUV Autonomous Subsystem Architecture",
      description: "Architected autonomous subsystems and robotics control algorithms for next‑gen EUV platforms, improving 6‑DOF system performance under 13G–21G conditions.",
      tech: ["Python", "MATLAB", "Control Systems", "Robotics"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: true,
      category: "robotics"
    },
    {
      title: "DUV Automation Pipeline",
      description: "Developed Python/MATLAB automation tools reducing analysis time by ~96% and enabling $3M+ annual reliability improvements.",
      tech: ["Python", "MATLAB", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: true,
      category: "automation"
    },
    {
      title: "High‑G Calibration & Diagnostics",
      description: "Built high‑precision calibration workflows for 6‑DOF systems operating under extreme acceleration environments.",
      tech: ["MATLAB", "Python", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "robotics"
    },
    {
      title: "Cornell Cup Robotics Manipulator",
      description: "Led development of a 6‑DOF precision manipulator and 4‑DOF robotic arm with ROS‑based localization and control.",
      tech: ["ROS", "Python", "Kinematics"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "robotics"
    },
    {
      title: "Reticle Handling Prototype",
      description: "Designed and validated reticle handling systems using Siemens NX and MATLAB, improving reliability and throughput.",
      tech: ["NX", "MATLAB", "Mechanical Design"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
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

  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
    {
      role: "Mechatronics Architect",
      company: "ASML EUV",
      period: "2025 — Present",
      description: "Architecting autonomous subsystems, robotics algorithms, and high‑precision calibration workflows for next‑gen EUV platforms.",
      tech: ["Python", "MATLAB", "Control Systems", "Robotics"]
    },
    {
      role: "Mechatronics Architect",
      company: "ASML DUV",
      period: "2021 — 2025",
      description: "Developed automation pipelines, diagnostic dashboards, and reliability improvements delivering $3M+ annual savings.",
      tech: ["Python", "Shell", "MATLAB", "Diagnostics"]
    },
    {
      role: "Mechanical Engineer (Contractor)",
      company: "ASML EUV",
      period: "2020",
      description: "Designed cooling systems for 32G actuators and validated reliability using Siemens NX FEA.",
      tech: ["NX", "FEA", "Mechanical Design"]
    },
    {
      role: "Sub‑Team Lead",
      company: "Cornell Cup Robotics",
      period: "2017 — 2020",
      description: "Led development of precision manipulators and ROS‑based localization systems.",
      tech: ["ROS", "Python", "Kinematics"]
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

  // ─── EmailJS (for contact form) ─────────────────────────────
  emailjs: {
    publicKey: "PROD_EMAILJS_PUBLIC_KEY",
    serviceId: "PROD_EMAILJS_SERVICE_ID",
    templateId: "PROD_EMAILJS_TEMPLATE_ID"
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
