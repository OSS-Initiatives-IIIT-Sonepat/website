"use client";
import Link from "next/link";
import Image from "next/image";
import { DitheredImage } from "@/components/DitheredImage";
import { ThemeToggle } from "@/components/ThemeToggle";
import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const navLinks = ["Projects", "About", "Source"];

const projectCards = [
  {
    name: "tiny-vercel",
    detail: "In Progress",
  },
  {
    name: "excalidraw-animate",
    detail: "In Progress",
  },
  {
    name: "transformers-visualized",
    detail: "In Progress",
  },
];

const cards = [
  {
    image: "/greek-3.png",
    kicker: "tiny-vercel",
    title: "In Progress",
    copy: "A lightweight, self-hostable deployment platform inspired by Vercel. Build, deploy, and serve your projects without the lock-in.",
  },
  {
    image: "/greek-5.png",
    kicker: "excalidraw-animate",
    title: "In Progress",
    copy: "Bring Excalidraw diagrams to life. Animate your hand-drawn sketches and share the story behind your thinking, step by step.",
  },
  {
    image: "/greek-4.png",
    kicker: "transformers-visualized",
    title: "In Progress",
    copy: "An interactive, visual walkthrough of how transformer models work — built for students and curious minds to read, run, and learn.",
  },
];

const workflowCards = [
  {
    image: "/greek6.png",
    kicker: "Student Led",
    title: "Built by students, for everyone.",
    copy: "Every project here is conceived, designed, and shipped by students at IIIT Sonepat — learning in public, building for real.",
  },
  {
    image: "/greek-7.png",
    kicker: "Free to Use",
    title: "No paywalls. No accounts. No lock-in.",
    copy: "Our software is free for anyone to use. We believe access to good tools should not depend on your ability to pay.",
  },
  {
    image: "/greek-8.png",
    kicker: "Open Source",
    title: "Read the code. Learn from it.",
    copy: "All of our projects are open source and libre. Explore the source, understand how it works, fork it, and make it yours.",
  },
];

function SocialIcon({
  type,
  className = "",
  size = 24,
}: {
  type: string;
  className?: string;
  size?: number;
}) {
  if (type === "x") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <path d="M14.6 10.2 22.3 1h-1.8l-6.7 8-5.4-8H2.2l8.1 12L2.2 23h1.8l7.1-8.5 5.7 8.5H23l-8.4-12.8Zm-2.5 3-0.8-1.2L4.8 2.4h2.7l5.3 7.8 0.8 1.2 6.9 10.1h-2.7l-5.7-8.3Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        width={size}
        height={size}
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8h4.2v15H.4V8Zm7.5 0h4v2.05h.06c.56-1.06 1.94-2.18 3.99-2.18 4.27 0 5.05 2.81 5.05 6.46V23h-4.18v-7.68c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V23H7.9V8Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.9 4.4 19 4.7 19 4.7c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v4.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"} ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type IconName = "students" | "free" | "open" | "arrow";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

function Icon({ name, size = 22, className = "" }: IconProps) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "students")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path {...p} d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
        <path {...p} d="M7 10.8V16c0 1.4 2.2 3 5 3s5-1.6 5-3v-5.2" />
      </svg>
    );
  if (name === "free")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <circle {...p} cx="12" cy="12" r="8.5" />
        <path
          {...p}
          d="M8.5 10.5c0-1.5 1.3-2.5 3-2.5s3 1 3 2.2c0 2.4-3.4 1.7-3.4 4.3"
        />
        <line {...p} x1="12" y1="17" x2="12" y2="17" />
      </svg>
    );
  if (name === "open")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path {...p} d="M12 4v6" />
        <circle {...p} cx="12" cy="14.5" r="4.5" />
        <path {...p} d="M9 3h6" />
      </svg>
    );
  if (name === "arrow")
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
        <path {...p} d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  return null;
}

interface Project {
  name: string;
  tagline: string;
  copy: string;
  stack: string[];
  status: string;
  progress: number;
  image: string;
  repoLink: string;
}

const projects: Project[] = [
  {
    name: "tiny-vercel",
    image: "/Greek-3.png",
    tagline: "Self-hostable deploys, no lock-in",
    copy: "A lightweight deployment platform inspired by Vercel. Push a repo, get a build, get a URL — on infrastructure you control.",
    stack: ["Go", "Docker", "Caddy"],
    status: "In Progress",
    progress: 0.2,
    repoLink: "https://github.com/OSS-Initiatives-IIIT-Sonepat/tiny-vercel",
  },
  {
    name: "excalidraw-animate",
    image: "/Greek-5.png",
    tagline: "Sketches that explain themselves",
    copy: "Turns a static Excalidraw board into a step-by-step animated walkthrough, so the story behind a diagram survives being shared.",
    stack: ["TypeScript", "Canvas", "React"],
    status: "In Progress",
    progress: 0.2,
    repoLink: "https://github.com/OSS-Initiatives-IIIT-Sonepat/excalidraw-animate",
  },
  {
    name: "transformers-visualized",
    image: "/Greek-1.webp",
    tagline: "Attention, made legible",
    copy: "An interactive walkthrough of how transformer models work — tokens, attention heads, and gradients you can actually poke at.",
    stack: ["Python", "WebGL", "PyTorch"],
    status: "In Progress",
    progress: 0.2,
    repoLink: "https://github.com/OSS-Initiatives-IIIT-Sonepat/visual-transformer-architecture",
  },
];

interface EyebrowProps {
  children: ReactNode;
}

function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-theme-faint font-medium">
      {children}
    </p>
  );
}

interface ProjectCardProps {
  p: Project;
  i: number;
}

function ProjectCard({ p, i }: ProjectCardProps) {
  return (
    <Reveal delay={i * 90}>
      <article
        className="group border border-theme-border p-4 sm:p-5 h-full flex flex-col justify-between bg-transparent hover:bg-theme-fg text-theme-fg hover:text-theme-inv transition-colors duration-[500ms] ease-out cursor-pointer"
        onClick={() => window?.open(p.repoLink, "_blank")}
      >
        <div>
          <div className="relative aspect-[16/9] mb-5 overflow-hidden bg-theme-border/20 border border-theme-border/50 group-hover:border-theme-inv/20 transition-colors">
            <DitheredImage
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out"
              src={p.image}
              size={1.6}
              type="4x4"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-mono text-[15px] font-medium">{p.name}</p>
            <span className="flex items-center gap-[6px] font-mono text-[10px] tracking-[0.08em] uppercase opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-current group-hover:bg-theme-inv transition-colors" />
              {p.status}
            </span>
          </div>
          <h4 className="font-black font-semibold text-[22px] mt-3 leading-[1.15]">
            {p.tagline}
          </h4>
          <p className="mt-2.5 text-[14px] leading-[1.6] opacity-70 group-hover:opacity-90 transition-opacity">
            {p.copy}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex gap-2 flex-wrap">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] border border-current opacity-65 group-hover:opacity-100 transition-opacity px-2 py-[3px]"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <div className="h-0.5 bg-theme-border group-hover:bg-theme-inv/30 transition-colors">
              <div
                className="h-full bg-current transition-all duration-1000 ease-out"
                style={{ width: `${p.progress * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2.5 font-mono text-[10px] uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              <span>build {Math.round(p.progress * 100)}%</span>
              <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                view repo{" "}
                <Icon name="arrow" size={12} className="text-current" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto min-h-screen w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30">
          <nav className="flex min-h-16 w-full items-center justify-between border border-[#1b1b1b]/15 bg-[#fafafa]/92 px-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-[#fafafa]/15 dark:bg-[#1b1b1b]/92 transition-all duration-300">
            <div className="flex flex-1 items-center justify-start">
              <Link className="flex items-center gap-3" href="/">
                <span className="grid size-9 place-items-center shrink-0">
                  <Image
                    alt="OSS Initiatives logo"
                    className="size-9 dark:block hidden"
                    height={36}
                    src="/oss-initiatives-logo.png"
                    width={36}
                  />
                  <Image
                    alt="OSS Initiatives logo dark"
                    className="size-9 dark:hidden"
                    height={36}
                    src="/oss-initiatives-logo-dark.png"
                    width={36}
                  />
                </span>
                <span className="text-[13px] sm:text-sm font-bold uppercase tracking-tight whitespace-nowrap">
                  OSS Initiatives
                </span>
              </Link>
            </div>

            <div className="hidden items-center justify-center gap-1 text-sm font-semibold md:flex">
              {navLinks.map((item) => (
                <a
                  className="px-4 py-2 text-[#1b1b1b]/58 transition hover:bg-[#1b1b1b] hover:text-[#fafafa] dark:text-[#fafafa]/62 dark:hover:bg-[#fafafa] dark:hover:text-[#1b1b1b]"
                  href={`#${item.toLowerCase()}`}
                  key={item}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              <ThemeToggle />
              <a
                className="hidden sm:inline-block border border-[#1b1b1b] bg-[#1b1b1b] px-4 py-2 text-sm font-bold text-[#fafafa] transition hover:bg-transparent hover:text-[#1b1b1b] dark:border-[#fafafa] dark:bg-[#fafafa] dark:text-[#1b1b1b] dark:hover:bg-transparent dark:hover:text-[#fafafa]"
                href="https://github.com/OSS-Initiatives-IIIT-Sonepat"
              >
                GitHub
              </a>
            </div>
          </nav>
        </header>

        <section className="grid gap-4 pt-4">
          <div className="relative min-h-[600px] overflow-hidden border border-[#1b1b1b]/15 bg-[#dcd8cf] dark:border-[#fafafa]/15 dark:bg-[#141414] lg:min-h-[660px]">
            <DitheredImage
              className="absolute inset-0 h-full w-full"
              src="/greek-hero.png"
              size={1.35}
              type="4x4"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,250,0.34),rgba(250,250,250,0)_55%)] dark:bg-[linear-gradient(90deg,rgba(27,27,27,0.40),rgba(27,27,27,0)_55%)]" />
            <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
              <Image
                alt="OSS Initiatives logo"
                className="size-12"
                height={48}
                src="/oss-initiatives-logo-dark.png"
                width={48}
              />
              <h1 className="max-w-[14rem] text-2xl font-bold leading-none text-[#fafafa] drop-shadow">
                OSS Initiatives
              </h1>
            </div>
            <div className="absolute inset-x-6 bottom-6 grid gap-4 sm:bottom-10 sm:left-10 sm:right-10 lg:grid-cols-[minmax(18rem,34rem)_minmax(0,1fr)]">
              <div className="bg-[#fafafa] p-5 text-[#1b1b1b] shadow-[12px_12px_0_rgba(27,27,27,0.18)] sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1b1b1b]/52">
                  IIIT Sonepat — Student Led, Non Profit
                </p>
                <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                  Software built for real people.
                </h2>
              </div>

              <div
                className="grid min-w-0 gap-3 sm:grid-cols-3 lg:self-end"
                id="projects"
              >
                {projectCards.map((project) => (
                  <a
                    className="group min-w-0 border border-[#fafafa] bg-transparent p-3 text-[#fafafa] transition hover:bg-[#fafafa] hover:text-[#1b1b1b] sm:p-4"
                    href="#projects"
                    key={project.name}
                  >
                    <span className="mt-4 block text-base font-black leading-none sm:text-lg">
                      {project.name}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-[#fafafa]/72 transition group-hover:text-[#1b1b1b]/62 sm:text-sm">
                      {project.detail}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <section
              className="grid gap-8 border border-[#1b1b1b]/15 bg-[#fafafa] p-5 dark:border-[#fafafa]/15 dark:bg-[#1b1b1b] sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              id="about"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b1b1b]/46 dark:text-[#fafafa]/48">
                  Open Source Initiatives — IIIT Sonepat
                </p>
                <h3 className="mt-4 max-w-xl text-4xl font-black leading-none sm:text-5xl">
                  Libre software, built in the open.
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#1b1b1b]/62 dark:text-[#fafafa]/62">
                  We are a student-led, non-profit initiative at IIIT Sonepat.
                  We build free, open source software for real people to use —
                  and educational software for anyone to read, learn from, and
                  build on. Everything we ship is libre, auditable, and yours.
                </p>
              </div>
            </section>

            {/* <section className="grid gap-4 md:grid-cols-3" id="projects-detail">
              {cards.map((card) => (
                <article
                  className="group border border-[#1b1b1b]/15 bg-[#fafafa] p-3 dark:border-[#fafafa]/15 dark:bg-[#1b1b1b]"
                  key={card.kicker}
                >
                  <div className="flex min-h-[300px] flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#dedbd3] dark:bg-[#111111]">
                      <DitheredImage
                        className="absolute inset-0 h-full w-full"
                        src={card.image}
                        size={1.6}
                        type="4x4"
                      />
                    </div>
                    <div className="pt-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1b1b1b]/42 dark:text-[#fafafa]/45">
                        {card.kicker}
                      </p>
                      <h4 className="mt-2 text-2xl font-black leading-none">
                        {card.title}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-[#1b1b1b]/58 dark:text-[#fafafa]/58">
                        {card.copy}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </section> */}
            <section id="projects" className="pt-12 px-1 pb-2">
              <Reveal>
                <div className="flex items-baseline justify-between mb-[26px]">
                  <div>
                    <Eyebrow>Currently shipping</Eyebrow>
                    <h3 className="font-black font-bold text-[clamp(1.8rem,3.4vw,2.6rem)] mt-2">
                      Active projects
                    </h3>
                  </div>
                  <span className="font-mono text-[12px] text-theme-faint">
                    {projects.length} repos
                  </span>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((p, i) => (
                  <ProjectCard key={p.name} p={p} i={i} />
                ))}
              </div>
            </section>

            <section className="pt-12 px-1 pb-2" id="ethos">
              <Reveal>
                <div className="flex items-baseline justify-between mb-[26px]">
                  <div>
                    <Eyebrow>WHAT WE STAND ON</Eyebrow>
                    <h3 className="font-black font-bold text-[clamp(1.8rem,3.4vw,2.6rem)] mt-2">
                      Our Ethos.
                    </h3>
                  </div>
                </div>
              </Reveal>
              <div className="grid gap-4 md:grid-cols-3">
                {workflowCards.map((card) => (
                  <article
                    className="group border border-[#1b1b1b]/15 bg-[#fafafa] p-3 dark:border-[#fafafa]/15 dark:bg-[#1b1b1b]"
                    key={card.title}
                  >
                    <div className="flex min-h-[300px] flex-col">
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#dedbd3] dark:bg-[#111111]">
                        <DitheredImage
                          className="absolute inset-0 h-full w-full"
                          src={card.image}
                          size={1.6}
                          type="4x4"
                        />
                      </div>
                      <div className="pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1b1b1b]/42 dark:text-[#fafafa]/45">
                          {card.kicker}
                        </p>
                        <h4 className="mt-2 text-2xl font-black leading-none">
                          {card.title}
                        </h4>
                        <p className="mt-3 text-sm leading-6 text-[#1b1b1b]/58 dark:text-[#fafafa]/58">
                          {card.copy}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <footer
          className="mt-4 border border-[#1b1b1b]/15 bg-[#fafafa] p-5 dark:border-[#fafafa]/15 dark:bg-[#1b1b1b] sm:p-7"
          id="source"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  alt="OSS Initiatives logo"
                  className="size-10 block dark:hidden"
                  height={40}
                  src="/oss-initiatives-logo.png"
                  width={40}
                />
                <Image
                  alt="OSS Initiatives logo"
                  className="size-10 hidden dark:block"
                  height={40}
                  src="/oss-initiatives-logo-dark.png"
                  width={40}
                />
                <span className="text-sm font-bold uppercase tracking-tight">
                  OSS Initiatives — IIIT Sonepat
                </span>
              </div>
              <p className="mt-5 max-w-xl text-2xl font-black leading-tight sm:text-4xl">
                Free, open source, non-profit software for real people and
                learners.
              </p>
            </div>
            <div className="grid gap-3 lg:min-w-[20rem]">
              <div className="grid gap-2 text-sm font-bold text-[#1b1b1b]/54 dark:text-[#fafafa]/58 sm:grid-cols-3">
                {projectCards.map((project) => (
                  <a
                    className="group flex items-center gap-3 border border-[#1b1b1b]/12 p-3 transition hover:bg-[#1b1b1b] hover:text-[#fafafa] dark:border-[#fafafa]/12 dark:hover:bg-[#fafafa] dark:hover:text-[#1b1b1b]"
                    href="#projects"
                    key={`footer-${project.name}`}
                  >
                    <span>{project.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex justify-start gap-2 lg:justify-end">
                {[
                  { label: "X", href: "#", icon: "x" },
                  { label: "LinkedIn", href: "#", icon: "linkedin" },
                  {
                    label: "GitHub",
                    href: "https://github.com/OSS-Initiatives-IIIT-Sonepat",
                    icon: "github",
                  },
                ].map((social) => (
                  <a
                    aria-label={social.label}
                    className="grid size-10 place-items-center border border-[#1b1b1b]/12 text-[#1b1b1b]/58 transition hover:bg-[#1b1b1b] hover:text-[#fafafa] dark:border-[#fafafa]/12 dark:text-[#fafafa]/62 dark:hover:bg-[#fafafa] dark:hover:text-[#1b1b1b]"
                    href={social.href}
                    key={social.label}
                  >
                    <SocialIcon className="size-5" type={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
