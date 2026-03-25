import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// ── Data ──────────────────────────────────────────────────────────────────────

const startups = [
  {
    id: "ClauseAI",
    title: "ClauseAI",
    tagline: "The Intelligence Layer for Enterprise AI Infrastructure",
    description:
      "Visibility and control across enterprise AI infrastructure — monitoring cost, reliability, and risk across models, vendors, and AI workflows in production.",
    tags: ["Agentic AI", "LLMOps", "AI Observability", "Enterprise"],
    status: "In Progress",
  },
  {
    id: "Exply",
    title: "Exply",
    tagline: "Understand any text, instantly.",
    description:
      "Chrome extension that delivers instant, inline explanations of any highlighted text — without leaving the page. No login, no tracking, no friction.",
    tags: ["LLM", "Agentic AI", "Chrome Extension"],
    status: "Inactive",
  },
  {
    id: "Nucleo",
    title: "Nucleo",
    tagline: "AI Compliance Scanner for Nuclear Regulatory Documents",
    description:
      "Production-ready platform that scans NRC-bound documents for compliance violations, enables human review and override, applies corrections, and exports clean PDFs.",
    tags: ["Agentic AI", "LLM", "AWS", "Compliance Automation"],
    status: "Inactive",
  },
  {
    id: "Grocio",
    title: "Grocio",
    tagline: "AI-Powered Pantry Assistant",
    description:
      "Smart pantry management app that tracks groceries, recommends recipes, and sends restocking alerts — powered by OpenAI GPT and Firebase.",
    tags: ["Agentic AI", "LLM", "Flutter", "Firebase"],
    status: "Inactive",
  },
];

const projects = [
  {
    id: "ChessAI",
    title: "Human-Centric Chess Move Prediction",
    description:
      "Adaptive chess AI that plays at your skill level using skill-aware neural networks. Built with PyTorch and featuring an interactive GUI for personalized chess training.",
    tags: ["PyTorch", "Python", "Neural Networks"],
    category: "AI / ML",
  },
  {
    id: "Investment_Advisor",
    title: "Investment Advisor",
    description:
      "Real-time stock analysis tool combining technical analysis with machine learning. Provides interactive visualizations and predictive analytics to support data-driven investment decisions.",
    tags: ["Python", "ML", "Prophet", "Finance"],
    category: "AI / ML",
  },
  {
    id: "ECE_Soft",
    title: "Trustworthy Module Registry",
    description:
      "Node.js CLI tool that evaluates npm modules for trustworthiness using AWS services. Provides developers with detailed metrics to ensure reliable module adoption.",
    tags: ["Node.js", "AWS", "TypeScript", "CLI"],
    category: "Systems",
  },
  {
    id: "VIPResearch",
    title: "Automated UAV Drone",
    description:
      "Autonomous UAV navigation in mazes using ROS2, PX4, and Computer Vision for memory-efficient path-planning and collision avoidance.",
    tags: ["ROS2", "PX4", "Python", "Computer Vision"],
    category: "AI / ML",
  },
  {
    id: "ECE362Project",
    title: "Gesture Controlled Brick Breaker",
    description:
      "Classic Brick Breaker game on an STM32F091 microcontroller with gesture-based paddle control, TFT LCD display, sound effects, and persistent high scores via external EEPROM.",
    tags: ["STM32", "C", "Embedded", "EEPROM"],
    category: "Embedded",
  },
  {
    id: "ECE570",
    title: "AI / ML Coursework",
    description:
      "Covered logistic regression, neural networks, CNNs, density estimation, and attention mechanisms. Implemented using NumPy, scikit-learn, and PyTorch on datasets like MNIST, CIFAR-10, and Breast Cancer.",
    tags: ["PyTorch", "scikit-learn", "Python"],
    category: "Coursework",
  },
  {
    id: "ECE368",
    title: "Data Structures & Algorithms",
    description:
      "Implemented Shellsort, BST, HBT, and graph pathfinding algorithms with file I/O systems. Developed tree manipulation techniques (rerooting, balancing) and memory management for efficient data processing.",
    tags: ["C", "Algorithms", "Data Structures"],
    category: "Coursework",
  },
  {
    id: "ECE39595",
    title: "OOP Chess System (C++)",
    description:
      "Generic hash map data structure and a complete chess game system demonstrating core OOP concepts — inheritance, polymorphism, and encapsulation.",
    tags: ["C++", "OOP", "Data Structures"],
    category: "Coursework",
  },
  {
    id: "ECE270",
    title: "Digital System Design",
    description:
      "Series of digital systems labs exploring combinational and sequential logic, state machines, and HDL. Implemented and tested digital circuits on FPGAs.",
    tags: ["FPGA", "Verilog", "SystemVerilog"],
    category: "Coursework",
  },
  {
    id: "ECE362",
    title: "Microprocessor Systems",
    description:
      "Embedded systems lab assignments (ECE362) covering GPIO to RISC-V assembly programming, focusing on different aspects of microcontroller development and low-level programming.",
    tags: ["STM32", "C", "RISC-V", "Assembly"],
    category: "Coursework",
  },
  {
    id: "ECE20875",
    title: "Python for Data Science",
    description:
      "Data analysis and machine learning projects covering statistical modeling, data visualization, and predictive analytics on real-world datasets.",
    tags: ["Python", "pandas", "scikit-learn"],
    category: "Coursework",
  },
];

const beyond = [
  {
    index: "01",
    label: "Tabla",
    description:
      "Fusion artist and competitive performer. Won 2nd place at the ABSS International Tabla Competition in Dubai. Known for blending traditional Hindustani rhythms with modern music — from Bollywood to Kendrick Lamar.",
  },
  {
    index: "02",
    label: "Badminton",
    description:
      "Competitive club player. Fast reflexes, precise angles — a useful reminder that speed of iteration beats brute force.",
  },
  {
    index: "03",
    label: "Basketball",
    description:
      "Pickup games and recreational leagues. The sport taught me court vision and reading systems — skills that translate surprisingly well to software architecture.",
  },
  {
    index: "04",
    label: "Soccer",
    description:
      "Recreational player. Love the fluid teamwork and continuous movement — a good analogy for keeping systems decoupled and responsive.",
  },
];

// ── Animation presets ─────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function staggerFadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  };
}

// ── Shared primitives ─────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <span className="font-mono text-xs tracking-[0.22em] uppercase text-[#c9a96e]">
      {children}
    </span>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="font-serif text-4xl md:text-5xl text-[#e8e0d4] mt-3 mb-14 leading-tight">
      {children}
    </h2>
  );
}

function Tag({ children }) {
  return (
    <span className="font-mono text-[11px] text-[#a09890] border border-[#1e1e1e] px-2 py-0.5 rounded-sm">
      {children}
    </span>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-12"
      >
        {/* Text */}
        <div className="flex-1">
          <motion.span
            className="font-mono text-xs tracking-[0.22em] uppercase text-[#c9a96e] block mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Computer Engineering · Purdue University
          </motion.span>

          <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-[#e8e0d4] leading-[0.95] mb-10 tracking-tight">
            Aryan
            <br />
            <span className="text-[#7a7470]">Srivastava</span>
          </h1>

          <p className="text-[#a09890] text-base md:text-lg max-w-lg leading-relaxed mb-12">
            I build things. CompE at Purdue by day — founding startups, shipping
            products, and solving real problems the rest of the time. I&apos;ve
            taken two companies from zero to users, consulted at PwC, and
            engineered at Rolls-Royce. My edge is moving fast across the full
            stack: from model to product to market. Right now I&apos;m most
            interested in what AI can unlock that wasn&apos;t possible before.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#startups"
              className="font-mono text-xs tracking-[0.18em] uppercase px-6 py-3 bg-[#c9a96e] text-[#0a0a0a] hover:bg-[#e8e0d4] transition-colors duration-200"
            >
              Startup Work
            </a>

            <a
              href="#projects"
              className="font-mono text-xs tracking-[0.18em] uppercase px-6 py-3 border border-[#7a7470] text-[#a09890] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-200"
            >
              Projects
            </a>

            <div className="w-px h-5 bg-[#1e1e1e]" />

            <div className="flex items-center gap-5">
              {/* GitHub */}
              <a
                href="https://github.com/aryansri0208"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#7a7470] hover:text-[#c9a96e] transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aryan-srivastava-9b1664185/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#7a7470] hover:text-[#c9a96e] transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:aryansri0208@gmail.com"
                aria-label="Email"
                className="text-[#7a7470] hover:text-[#c9a96e] transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 md:w-72 lg:w-80"
        >
          <div className="relative">
            <div className="absolute inset-0 border border-[#c9a96e]/20 translate-x-3 translate-y-3" />
            <img
              src={`${BASE}/your-photo.jpg`}
              alt="Aryan Srivastava"
              className="relative w-full object-cover transition-all duration-500 border border-[#1e1e1e]"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="flex flex-col items-start gap-3 mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#6a6460]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#6a6460] to-transparent" />
      </motion.div>
    </section>
  );
}

function ProjectsSection() {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel>Projects</SectionLabel>
        <SectionHeading>Things I&rsquo;ve built</SectionHeading>
      </motion.div>

      {/* Filter bar */}
      <motion.div {...staggerFadeUp(0.1)} className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono text-[11px] tracking-[0.18em] uppercase px-4 py-2 border transition-colors duration-200 ${
              active === cat
                ? "border-[#c9a96e] text-[#c9a96e]"
                : "border-[#1e1e1e] text-[#a09890] hover:border-[#7a7470] hover:text-[#a09890]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div key={active} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <Link key={project.title} href={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer p-7 bg-[#111111] border border-[#1e1e1e] hover:border-[#c9a96e]/25 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <h3 className="font-serif text-xl text-[#e8e0d4] group-hover:text-[#c9a96e] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-[#6a6460] group-hover:text-[#c9a96e] transition-colors duration-200 text-base mt-0.5">
                    →
                  </span>
                </div>

                <p className="text-[#a09890] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function StartupsSection() {
  const statusColor = {
    Launched: "text-[#6dbf8a] border-[#6dbf8a]/30 bg-[#6dbf8a]/5",
    Active: "text-[#6dbf8a] border-[#6dbf8a]/30 bg-[#6dbf8a]/5",
    "In Progress": "text-[#c9a96e] border-[#c9a96e]/30 bg-[#c9a96e]/5",
    Inactive: "text-[#a09890] border-[#7a7470]/50 bg-[#1a1a1a]",
  };

  return (
    <section id="startups" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#1e1e1e]">
      <motion.div {...fadeUp}>
        <SectionLabel>Startups</SectionLabel>
        <SectionHeading>Companies I&rsquo;ve founded</SectionHeading>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {startups.map((startup, i) => (
          <Link key={startup.title} href={`/projects/${startup.id}`}>
            <motion.div
              {...staggerFadeUp(i * 0.1)}
              className="group cursor-pointer p-7 bg-[#111111] border border-[#1e1e1e] hover:border-[#c9a96e]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl text-[#e8e0d4] group-hover:text-[#c9a96e] transition-colors duration-200">
                  {startup.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-[10px] tracking-[0.16em] uppercase px-2 py-0.5 border rounded-sm ${statusColor[startup.status]}`}
                  >
                    {startup.status}
                  </span>
                  <span className="text-[#6a6460] group-hover:text-[#c9a96e] transition-colors duration-200 text-base mt-0.5">
                    →
                  </span>
                </div>
              </div>

              <p className="font-mono text-xs text-[#c9a96e] mb-4 tracking-wide">
                {startup.tagline}
              </p>

              <p className="text-[#a09890] text-sm leading-relaxed mb-5">
                {startup.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {startup.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TablaSection() {
  const performances = [
    {
      title: "International Tabla Competition",
      description: "Performed in Dubai at the ABSS International Tabla Competition — won 2nd place.",
      url: "https://www.youtube.com/embed/ci5yyxhXsOs",
    },
    {
      title: "Tabla Fusion — Sajan Bin",
      description: "An innovative fusion performance showcasing the versatility of Tabla.",
      url: "https://www.youtube.com/embed/1Qvl8hJyJwI",
    },
    {
      title: "Tabla Fusion — Love (Kendrick Lamar)",
      description: "A creative blend of traditional Tabla rhythms with modern musical elements.",
      url: "https://www.youtube.com/embed/wbTZ3P1mymg",
    },
    {
      title: "Tabla Fusion — Don't Start Now (Dua Lipa)",
      description: "A fusion of Tabla and English pop, creating a unique blend.",
      url: "https://www.youtube.com/embed/uWfI_yykFuU",
    },
    {
      title: "Tabla Fusion — Psycho (Post Malone)",
      description: "A mixture of Indian classical and Western hip-hop.",
      url: "https://www.youtube.com/embed/aEB8i1pd7Vc?start=73",
    },
    {
      title: "Tabla Fusion — Ek Zindagi",
      description: "A fusion of Tabla and modern Bollywood music.",
      url: "https://www.youtube.com/embed/At27E4Cr2To",
    },
  ];

  return (
    <section id="tabla" className="py-28 px-6 max-w-6xl mx-auto border-t border-[#1e1e1e]">
      <motion.div {...fadeUp}>
        <SectionLabel>Music</SectionLabel>
        <SectionHeading>Tabla performances</SectionHeading>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {performances.map((perf, i) => (
          <motion.div
            key={i}
            {...staggerFadeUp(i * 0.08)}
            className="bg-[#111111] border border-[#1e1e1e] hover:border-[#c9a96e]/25 transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={perf.url}
                title={perf.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="block"
              />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-base text-[#e8e0d4] mb-2">
                {perf.title}
              </h3>
              <p className="text-[#a09890] text-xs leading-relaxed">
                {perf.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function BeyondSection() {
  return (
    <section
      id="beyond"
      className="py-28 px-6 max-w-6xl mx-auto border-t border-[#1e1e1e]"
    >
      <motion.div {...fadeUp}>
        <SectionLabel>Beyond</SectionLabel>
        <SectionHeading>Life outside the terminal</SectionHeading>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {beyond.map((item, i) => (
          <motion.div
            key={i}
            {...staggerFadeUp(i * 0.1)}
            className="group p-7 bg-[#111111] border border-[#1e1e1e] hover:border-[#c9a96e]/20 transition-all duration-300"
          >
            <span className="font-mono text-xs text-[#c9a96e] block mb-4">
              {item.index}
            </span>
            <h3 className="font-mono text-sm tracking-[0.16em] uppercase text-[#e8e0d4] group-hover:text-[#c9a96e] transition-colors duration-200 mb-3">
              {item.label}
            </h3>
            <p className="text-[#a09890] text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 max-w-6xl mx-auto border-t border-[#1e1e1e]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-serif text-[#6a6460]">Aryan Srivastava</span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/aryan-srivastava-9b1664185/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.14em] text-[#6a6460] hover:text-[#c9a96e] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aryansri0208"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-[0.14em] text-[#6a6460] hover:text-[#c9a96e] transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="mailto:aryansri0208@gmail.com"
            className="font-mono text-[11px] tracking-[0.14em] text-[#6a6460] hover:text-[#c9a96e] transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <HeroSection />
      <StartupsSection />
      <ProjectsSection />
      <TablaSection />
      <BeyondSection />
      <Footer />
    </div>
  );
}
