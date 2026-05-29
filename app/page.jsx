"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/moving-border";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Timeline } from "@/components/ui/timeline";
import {
  Component,
  Layout,
  Database,
  Smartphone,
  Zap,
  Brain,
  Code,
  Cloud,
  Layers,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import styles from "../styles/Projects.module.scss";

// ─── Skill Pills ───────────────────────────────────────────────────────────────
const skills = [
  "React JS",
  "JavaScript (ES6+)",
  "GraphQL",
  "Claude API",
  "OutSystems",
  "Web Performance",
];

// ─── Skeleton placeholder for Bento Grid ──────────────────────────────────────
const Skeleton = ({ Icon, bgClass, iconColor }) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[10rem] rounded-xl items-center justify-center border border-white/5 ${bgClass}`}
  >
    <div className={styles.iconWrapper}>
      <Icon size={64} className={iconColor} strokeWidth={1.5} />
    </div>
  </div>
);

// ─── Career Timeline Data ──────────────────────────────────────────────────────
const timelineData = [
  {
    title: "2025 – Present",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-neutral-200 font-bold text-lg md:text-xl">
            Software Engineer
          </p>
          <p className="text-indigo-400 font-semibold text-sm tracking-wide uppercase">
            Damco Solutions
          </p>
        </div>
        <ul className="space-y-2 text-neutral-400 text-sm md:text-base">
          <li className="flex gap-2">
            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
            Spearheaded InsureEdge 2.0 UI enhancements, bypassing default
            platform constraints with custom JS/CSS overrides.
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
            Architected a scalable, component-driven UI pattern library
            (modals, tooltips, notifications) enforcing cross-module design
            consistency and reducing feature build times.
          </li>
          <li className="flex gap-2">
            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
            Led IE 2.0 HB Phase 1 production deployment end-to-end and
            delivered key Customer 360 data-visualization screens under tight
            deadlines.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-1">
          {["🏅 Gold Star Award", "⭐ 2× Silver Star Award"].map((award) => (
            <span
              key={award}
              className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400"
            >
              {award}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2022 – 2025",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-neutral-200 font-bold text-lg md:text-xl">
            Software Engineer
          </p>
          <p className="text-cyan-400 font-semibold text-sm tracking-wide uppercase">
            Ranosys
          </p>
        </div>
        <ul className="space-y-2 text-neutral-400 text-sm md:text-base">
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
            Sole frontend owner — engineered complex data-grid workflows and
            interactive form components for insurance-domain applications.
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
            Integrated GraphQL APIs and secure payment gateways into rich,
            data-heavy interfaces using modern web standards.
          </li>
          <li className="flex gap-2">
            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
            Led performance audits and implemented targeted frontend
            optimisations across the full product suite.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            🤝 Team Player Award
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "2021 – 2022",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-neutral-200 font-bold text-lg md:text-xl">
            Software Engineer
          </p>
          <p className="text-emerald-400 font-semibold text-sm tracking-wide uppercase">
            HawksCode
          </p>
        </div>
        <ul className="space-y-2 text-neutral-400 text-sm md:text-base">
          <li className="flex gap-2">
            <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
            Executed advanced web performance optimisations — asset
            minification, lazy loading, and DOM streamlining.
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
            Drove Google PageSpeed Insights scores from{" "}
            <strong className="text-neutral-300">70% → 95%</strong> across
            client properties.
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-400 mt-0.5 shrink-0">▸</span>
            Converted Figma and PSD designs into pixel-perfect, responsive
            architectures with full cross-browser fidelity.
          </li>
        </ul>
        <div className="flex items-center gap-3 pt-1">
          <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
              style={{ width: "95%" }}
            />
          </div>
          <span className="text-xs text-emerald-400 font-bold whitespace-nowrap">
            95 / 100 PageSpeed
          </span>
        </div>
      </div>
    ),
  },
];

// ─── Bento Grid Projects (5 items) ────────────────────────────────────────────
const projects = [
  {
    Icon: Layout,
    title: "InsureEdge 2.0 Pattern Library",
    description:
      "Architected a scalable, component-driven UI library enforcing cross-module design consistency.",
    bgClass: "bg-gradient-to-br from-blue-900/40 to-cyan-900/40",
    iconColor: "text-cyan-400",
    wide: true,
  },
  {
    Icon: Component,
    title: "DamcoWorks Customer 360",
    description:
      "Delivered mission-critical data visualization screens under tight deadlines.",
    bgClass: "bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40",
    iconColor: "text-fuchsia-400",
    wide: false,
  },
  {
    Icon: Database,
    title: "Data-Heavy Domain Interfaces",
    description:
      "Engineered customized data-grid workflows and interactive forms integrated with GraphQL.",
    bgClass: "bg-gradient-to-br from-emerald-900/40 to-teal-900/40",
    iconColor: "text-teal-400",
    wide: false,
  },
  {
    Icon: Smartphone,
    title: "Mobile Banking Redesign",
    description:
      "Developed fully responsive, cross-device interfaces for a mobile banking platform.",
    bgClass: "bg-gradient-to-br from-rose-900/40 to-orange-900/40",
    iconColor: "text-rose-400",
    wide: false,
  },
  {
    Icon: Zap,
    title: "Core Web Vitals Optimization",
    description:
      "Led rendering bottleneck audits to push Google PageSpeed scores from 70% to 95%.",
    bgClass: "bg-gradient-to-br from-amber-900/40 to-yellow-900/40",
    iconColor: "text-amber-400",
    wide: false,
  },
];

// ─── Certifications ────────────────────────────────────────────────────────────
const certifications = [
  {
    Icon: Brain,
    name: "Claude Code in Action",
    issuer: "Anthropic Academy",
    accent: "from-orange-900/30 to-neutral-950",
    border: "border-orange-500/20",
    iconColor: "text-orange-500/50",
  },
  {
    Icon: Code,
    name: "Front-End Developer Specialist",
    issuer: "OutSystems 11",
    accent: "from-red-900/30 to-neutral-950",
    border: "border-red-500/20",
    iconColor: "text-red-500/50",
  },
  {
    Icon: Cloud,
    name: "Associate Developer",
    issuer: "OutSystems Developer Cloud (ODC)",
    accent: "from-sky-900/30 to-neutral-950",
    border: "border-sky-500/20",
    iconColor: "text-sky-500/50",
  },
  {
    Icon: Layers,
    name: "Associate Reactive Developer",
    issuer: "OutSystems 11",
    accent: "from-violet-900/30 to-neutral-950",
    border: "border-violet-500/20",
    iconColor: "text-violet-500/50",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* ── Fixed parallax starfield ─────────────────────────────────────── */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />
      </div>

      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative z-10 h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_20%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

        {/* Content — pointer-events-none so the canvas gets hover events */}
        <div className="relative flex flex-col items-center gap-5 text-center px-4 pointer-events-none">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to full-time Frontend Engineering roles
          </div>

          {/* Name */}
          <h1 className="text-7xl md:text-8xl font-extrabold text-white tracking-tight leading-none drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            Rishabh Gupta
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-wide">
            Frontend Engineer &amp; UI Architect
          </p>

          {/* Skill pills */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mt-1">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA — pointer-events re-enabled */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pointer-events-auto">
            <Button
              containerClassName="w-72 h-14"
              borderClassName="bg-[radial-gradient(#6366f1_40%,transparent_60%)]"
              className="font-semibold text-base tracking-wide"
              duration={2500}
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Experience
            </Button>
            <a
              href="/rishabh-gupta-resume.pdf"
              download="Rishabh_Gupta_Resume.pdf"
              className="px-8 py-3 rounded-full border border-zinc-700 bg-transparent text-white font-semibold hover:bg-zinc-800 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 pointer-events-none animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── Section 2: Professional Experience ───────────────────────────── */}
      <section id="experience" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20 pb-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-3">
            Career History
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-zinc-500 max-w-xl text-base">
            4+ years building production-grade frontend systems across
            insurance, e-commerce, and enterprise SaaS domains.
          </p>
        </div>
        <Timeline data={timelineData} />
      </section>

      {/* ── Section 3: Featured Architecture (Bento Grid) ────────────────── */}
      <section
        id="projects"
        className="relative z-10 py-24 px-4 sm:px-8"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-3">
              Engineering Impact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Enterprise Architecture &amp; Delivery
            </h2>
            <p className="mt-4 text-zinc-500 max-w-xl mx-auto text-base">
              A curated set of systems I architected, owned, and shipped at
              scale.
            </p>
          </div>

          <BentoGrid className="dark md:grid-cols-3">
            {projects.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <Skeleton
                    Icon={item.Icon}
                    bgClass={item.bgClass}
                    iconColor={item.iconColor}
                  />
                }
                className={i === 0 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ── Section 4: Certifications & Honors ───────────────────────────── */}
      <section
        id="certifications"
        className="relative z-10 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-white tracking-tight">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`${styles.certCard} bg-gradient-to-br ${cert.accent} p-8 rounded-2xl border ${cert.border} flex flex-col`}
              >
                <cert.Icon size={48} className={`${cert.iconColor} mb-6`} />
                <p className="text-white font-bold text-lg leading-snug mb-2">
                  {cert.name}
                </p>
                <p className="text-zinc-500 text-sm mt-auto">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Contact Me ─────────────────────────────────────── */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center text-white tracking-tight">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <a
            href="mailto:rishabhaggarwal983.ra@gmail.com"
            className={`${styles.certCard} bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex flex-col items-center text-center rounded-xl border border-zinc-800 no-underline`}
          >
            <div className="bg-white/5 p-4 rounded-full mb-4">
              <Mail size={32} className="text-zinc-300" />
            </div>
            <p className="text-lg font-semibold text-white mb-2">Email</p>
            <p className="text-zinc-400 text-sm break-all">
              rishabhaggarwal983.ra@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+918057995569"
            className={`${styles.certCard} bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex flex-col items-center text-center rounded-xl border border-zinc-800 no-underline`}
          >
            <div className="bg-white/5 p-4 rounded-full mb-4">
              <Phone size={32} className="text-zinc-300" />
            </div>
            <p className="text-lg font-semibold text-white mb-2">Phone</p>
            <p className="text-zinc-400 text-sm">+91 80579 95569</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rishabh-gupta-ra"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.certCard} bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex flex-col items-center text-center rounded-xl border border-zinc-800 no-underline`}
          >
            <div className="bg-white/5 p-4 rounded-full mb-4">
              <IconBrandLinkedin size={32} className="text-zinc-300" />
            </div>
            <p className="text-lg font-semibold text-white mb-2">LinkedIn</p>
            <p className="text-zinc-400 text-sm">rishabh-gupta-ra</p>
          </a>

          {/* Location */}
          <div
            className={`${styles.certCard} bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex flex-col items-center text-center rounded-xl border border-zinc-800`}
          >
            <div className="bg-white/5 p-4 rounded-full mb-4">
              <MapPin size={32} className="text-zinc-300" />
            </div>
            <p className="text-lg font-semibold text-white mb-2">Location</p>
            <p className="text-zinc-400 text-sm">
              Roorkee, Uttarakhand, India
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <p>
            © {new Date().getFullYear()} Rishabh Gupta · Frontend Engineer
            &amp; UI Architect
          </p>
          <p className="text-xs">
            🏅 Gold Star · ⭐ 2× Silver Star · 🤝 Team Player Award
          </p>
        </div>
      </footer>
    </main>
  );
}
