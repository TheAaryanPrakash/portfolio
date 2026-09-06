export const profile = {
  name: "Aaryan Prakash",
  identity: "AI/ML & research-focused engineer",
  school: "Computer Science & Engineering Student at BMS College of Engineering",
  tagline:
    "I enjoy building technology that solves practical problems while understanding the business and economic context behind it. I'm equally interested in how engineering decisions shape products, businesses, and create real-world impact.",
  email: "aaryanprakash1@gmail.com",
  phone: "+91 82176 17133",
  location: "Bengaluru, Karnataka",
  github: { label: "@TheAaryanPrakash", url: "https://github.com/TheAaryanPrakash" },
  linkedin: { label: "Aaryan Prakash", url: "https://www.linkedin.com/in/aaryan-prakash" },
};

export const about = {
  paragraphs: [
    "From the start, technology has always fascinated me. Not just how it works, but the impact it creates. Now entering my final year as a Computer Science and Engineering student at BMS College of Engineering, I'm more driven than ever to build, lead, and contribute meaningfully to the tech space.",
    "I'm passionate about solving problems through code, with strong interests in DSA, cryptography, cybersecurity, databases, machine learning, and data analysis. At the same time, I've developed a deep interest in how technology meets business: through marketing, strategy, and innovation. My leadership experiences, especially with Protocol, have shown me how much I enjoy taking initiative, rallying teams, and making ideas happen.",
    "While I'm committed to growing as a technologist, I also hope to gradually take on roles that blend engineering depth with business impact. I'm always seeking opportunities where I can learn, collaborate, and have fun, while building meaningful, real-world solutions.",
    "Outside of engineering, I write — I run Synergy Weekly, digging into optimistic science and tech stories and trying to make them land for people who aren't already in the field. And when I want to step away from a screen entirely, I'm usually out shooting photography instead, mostly landscapes and whatever catches my eye outdoors.",
  ],
};

export type ProjectStatus = "ongoing" | "complete";

export interface Project {
  slug: string;
  title: string;
  category: string;
  period: string;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  problem: string;
  approach: string[];
  reflection: string;
  /** Live/deployed URL. Omit if not hosted; empty string "" renders as a coming-soon placeholder. */
  liveUrl?: string;
  /** GitHub repo URL. Omit to hide the icon entirely (used for federated-ids, still in progress); empty string "" renders as a coming-soon placeholder. */
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "federated-ids",
    title: "Federated Learning-Based Intrusion Detection System",
    category: "Federated Learning & Cybersecurity Research & Project",
    period: "Jan 2026 – Present",
    status: "ongoing",
    featured: true,
    summary:
      "A Federated Learning-based intrusion detection system for SDN-enabled IoT environments, built to stay accurate even when clients are unreliable or malicious.",
    problem:
      "SDN-enabled IoT environments generate distributed, non-IID data across a lot of untrusted clients, which makes a normal centralized IDS a bad fit — you either give up on privacy or give up on robustness. I wanted to work on something that sits at the actual intersection of federated learning and security instead of treating FL as a black box.",
    approach: [
      "Developing an FL-based IDS for SDN-enabled IoT environments",
      "Designing a semi-supervised architecture that combines autoencoder-based anomaly detection, trust-based malicious client filtering, and robust aggregation to resist poisoning attacks",
      "Optimizing with cosine similarity evaluation and lightweight communication techniques to support non-IID IoT data while cutting compute/communication overhead",
      "Running a literature review across federated learning, adversarial ML, semi-supervised learning, and IoT security to find the actual research gaps rather than assume them",
    ],
    reflection:
      "This one's still in progress, and it's the project where I'm learning the most about how much of \"robust ML\" is really an adversarial design problem — you're not just optimizing for accuracy, you're optimizing against someone actively trying to poison your aggregation step.",
  },
  {
    slug: "fake-news-bert-lightgbm",
    title: "Fake News Detection using BERT & LightGBM",
    category: "Machine Learning & Natural Language Processing",
    period: "Sep 2025 – Dec 2025",
    status: "complete",
    featured: true,
    summary:
      "A hybrid classifier that pairs BERT's contextual embeddings with a LightGBM model, kept modular on purpose.",
    problem:
      "I was curious how far a hybrid setup — deep contextual embeddings feeding into a classical ML classifier — could get on text classification, instead of just fine-tuning BERT end-to-end and calling it done.",
    approach: [
      "Built a fake news classification system using BERT to generate contextual embeddings from news articles",
      "Fine-tuned BERT to extract semantic representations for improved text classification",
      "Trained a LightGBM classifier on the BERT embeddings for efficient, accurate prediction",
      "Evaluated performance using accuracy, precision, recall, and F1-score",
      "Designed a modular pipeline separating feature extraction from classification for scalability and maintainability",
    ],
    reflection:
      "Keeping feature extraction and classification as separate, swappable stages was a deliberate call — it meant I could iterate on the classifier without re-running BERT every time.",
    githubUrl: "https://github.com/TheAaryanPrakash/Fake-News-Detection",
  },
  {
    slug: "f1-analytics-dashboard",
    title: "Formula 1 Analytics Dashboard",
    category: "Full-Stack Data Visualization",
    period: "Sep 2025 – Dec 2025 · updated 2026",
    status: "complete",
    featured: true,
    summary:
      "A full-stack race analytics dashboard with 8 REST endpoints, built around a genuinely large, messy, real-world telemetry dataset.",
    problem:
      "I wanted to build a full-stack app around a real, high-volume time-series dataset instead of another toy CSV — something with enough scale and structure to force real decisions around API design and caching. Motorsport telemetry data turned out to be a good excuse for exactly that.",
    approach: [
      "Built a full-stack race analytics dashboard using FastAPI, JavaScript, and Plotly.js, with 8 REST endpoints for interactive data exploration",
      "Built a data pipeline on the FastF1 API for lap times, pit stops, tyre strategies, gaps, sectors, telemetry, and weather across seasons",
      "Designed interactive views: driver comparisons, team-livery-accurate visualizations, track maps, and telemetry-based speed/throttle/brake analysis",
      "Deployed on Render with in-memory and on-disk caching to handle large telemetry datasets without re-fetching or re-computing on every request",
    ],
    reflection:
      "The interesting part wasn't the frontend, it was figuring out a caching strategy that kept the dashboard responsive despite how much raw telemetry the FastF1 pipeline pulls in per session.",
    liveUrl: "",
    githubUrl: "https://github.com/TheAaryanPrakash/F1-Analytics-Visualised",
  },
  {
    slug: "ai-flashcard-generator",
    title: "Notes on Time: An AI-Powered Flashcard Generator",
    category: "Full-Stack Web Application",
    period: "Oct 2024 – Jan 2025 · updated 2026",
    status: "complete",
    featured: true,
    summary:
      "A flashcard app that grew from a plain CRUD tool into an OCR-plus-LLM pipeline that turns your own notes into study material.",
    problem:
      "I kept manually retyping my own notes into flashcards, which is exactly the kind of repetitive task that should be automatable. I started with a straightforward flashcard app and then kept extending it once the manual-entry problem became obvious.",
    approach: [
      "Built a full-stack flashcard app with React, Tailwind CSS, and Supabase/PostgreSQL, including email auth, protected routing, and row-level security",
      "Extended it with an AI flashcard-generation pipeline: PDF.js and Tesseract.js extract text from notes, PDFs, and images, and Groq's Llama 3.3 generates term-definition pairs through Supabase Edge Functions",
      "Implemented multiple-choice quizzes with per-user attempt history, scoring, and flashcard-set management",
      "Added public read-only sharing, image uploads, and print-friendly layouts, and deployed via Vercel + Supabase with version-controlled SQL migrations",
    ],
    reflection:
      "This is the project I'm proudest of purely because of how far it stretched — from a basic CRUD app with auth to something with a real OCR-to-LLM pipeline and its own migration history.",
    liveUrl: "https://notes-on-time.vercel.app/",
    githubUrl: "https://github.com/TheAaryanPrakash/NOT-2026",
  },
  {
    slug: "drowsiness-detection",
    title: "Drowsiness Detection System",
    category: "Computer Vision",
    period: "Mar 2026 – May 2026",
    status: "complete",
    featured: false,
    summary:
      "Real-time drowsiness detection using facial landmarks and Eye Aspect Ratio, with logic to filter out normal blinking.",
    problem: "",
    approach: [
      "Real-time drowsiness detection using OpenCV, dlib, and SciPy",
      "68-point facial landmark detection to localize eye regions in webcam video",
      "Computed Eye Aspect Ratio (EAR) to detect prolonged eye closure and fatigue",
      "Triggered visual alerts when EAR stayed below threshold across consecutive frames, reducing false positives from normal blinking",
    ],
    reflection: "",
    githubUrl: "https://github.com/TheAaryanPrakash/Drowsiness-Detection",
  },
];

export const hostedProjectSlugs = ["f1-analytics-dashboard", "ai-flashcard-generator"];

export interface PhotographyItem {
  src: string;
  instagramUrl: string;
}

export const photography: PhotographyItem[] = [
  { src: "/photography/photo-1.jpg", instagramUrl: "https://www.instagram.com/p/CBALq2lsDoi/" },
  { src: "/photography/photo-2.jpg", instagramUrl: "https://www.instagram.com/p/CRG2TPXskS9/" },
  { src: "/photography/photo-3.jpg", instagramUrl: "https://www.instagram.com/p/CAid7DKgcW-/" },
  { src: "/photography/photo-4.jpg", instagramUrl: "https://www.instagram.com/p/B6esO3yASKy/" },
  { src: "/photography/photo-5.jpg", instagramUrl: "https://www.instagram.com/p/Bz26oU7HhzE/" },
  { src: "/photography/photo-6.jpg", instagramUrl: "https://www.instagram.com/p/CDrGHSnsYu8/" },
];

export const photographyProfileUrl = "https://www.instagram.com/_._lensational_pics_._";

export interface WritingRole {
  role: string;
  org: string;
  period: string;
  description: string;
}

export const writing: WritingRole[] = [
  {
    role: "Editor & Journalist",
    org: "Synergy Weekly",
    period: "Apr 2025 – Apr 2026",
    description:
      "I launched Synergy Weekly, a weekly tech newsletter published on LinkedIn and Medium focused on optimistic science and tech stories. I led the editorial process end to end — researching complex topics, simplifying them for a general audience, and crafting narratives that actually land. I worked with a small editorial team, guiding content direction and writing style while gradually handing off responsibilities so the newsletter's voice could grow with the team.",
  },
  {
    role: "E-Learning Content Writer",
    org: "Adeptic Creative Labs",
    period: "Apr 2026 – Jun 2026",
    description:
      "Developed content and scripts for a 10-hour cybersecurity eLearning course spanning 12 modules, including scenario-based learning, knowledge checks, instructional design elements, and visual/ID guidance.",
  },
  {
    role: "Freelance Content Writer",
    org: "Clearly Blue Digital",
    period: "Mar 2026 – Present",
    description: "Freelance technical content writing.",
  },
];

export interface ExperienceRole {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceRole[] = [
  {
    role: "President",
    org: "Protocol, BMSCE",
    period: "Apr 2025 – Apr 2026",
    bullets: [
      "Lead a core team organizing and executing a wide range of events under the CSE Department's official club: hackathons, codeathons, gaming events, and creative formats like \"Among Us in Real Life,\" spanning technical workshops, cultural activities, and outreach — both independently and as part of BMSCE's major college fests",
      "Primary point of contact for faculty and external stakeholders, managing official communication and cross-team coordination",
      "Work closely with a senior core on strategy, planning, and execution decisions",
      "Oversee logistics, permissions, and venue coordination",
      "Lead sponsorship efforts — identifying partners, preparing proposals, and maintaining relationships",
      "Oversee outreach to external speakers, mentors, and industry guests for technical sessions and panels",
      "Assign responsibilities, track progress, and mentor junior team members into greater responsibility within the club",
    ],
  },
  {
    role: "Junior Core",
    org: "Protocol, BMSCE",
    period: "Jun 2024 – Apr 2025",
    bullets: [
      "Marketing team and organising committee",
      "Organised and marketed technical events across campus",
    ],
  },
];

export interface EducationEntry {
  institution: string;
  detail: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    institution: "BMS College of Engineering",
    detail: "B.E. Computer Science · CGPA 8.40",
    period: "Aug 2023 – Present",
  },
  {
    institution: "DPS Bangalore South",
    detail: "Grade 90% (XII) · 93% (X)",
    period: "Middle / High School",
  },
  {
    institution: "National Hill View Public School",
    detail: "",
    period: "2009 – 2016",
  },
];

export const certifications: string[] = [
  "Introduction to Responsible AI — Google Cloud Skills Boost",
  "Supply Chain Digitization — NPTEL",
  "Research Methodology — NPTEL",
  "Artificial Intelligence Foundation — Infosys Springboard",
];

export interface SkillCategory {
  label: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  { label: "Programming", items: ["Python", "Java", "C", "JavaScript", "HTML/CSS", "SQL"] },
  {
    label: "AI & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Federated Learning"],
  },
  {
    label: "Technologies",
    items: [
      "Django",
      "FastAPI",
      "OpenCV",
      "Pandas",
      "MySQL",
      "NumPy",
      "BERT",
      "LightGBM",
      "Git",
      "GitHub",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
  },
  { label: "Core Concepts", items: ["Data Structures", "Algorithms", "OOP", "Cybersecurity", "Network Security"] },
  {
    label: "Professional Skills",
    items: [
      "Leadership",
      "Team Management",
      "Technical Writing",
      "Technical Content Writing",
      "Public Speaking",
      "Sponsorship",
    ],
  },
  { label: "Languages", items: ["English", "Hindi", "Kannada"] },
];
