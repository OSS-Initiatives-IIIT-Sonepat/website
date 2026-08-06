"use client";
import React, {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/* Design tokens mapped to globals.css and Tailwind config */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/* Reveal-on-scroll wrapper                                           */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/* Small line icons for the principle cards / CTAs                    */
/* ------------------------------------------------------------------ */
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

interface Social {
  key: string;
  label: string;
  href: string;
}

const SOCIALS: Social[] = [
  { key: "x", label: "X", href: "#" },
  { key: "linkedin", label: "LinkedIn", href: "#" },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/OSS-Initiatives-IIIT-Sonepat",
  },
];

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
interface Project {
  name: string;
  tagline: string;
  copy: string;
  stack: string[];
  status: string;
  progress: number;
}

interface Principle {
  icon: IconName;
  kicker: string;
  title: string;
  copy: string;
}

const projects: Project[] = [
  {
    name: "tiny-vercel",
    tagline: "Self-hostable deploys, no lock-in",
    copy: "A lightweight deployment platform inspired by Vercel. Push a repo, get a build, get a URL — on infrastructure you control.",
    stack: ["Go", "Docker", "Caddy"],
    status: "In Progress",
    progress: 0.35,
  },
  {
    name: "excalidraw-animate",
    tagline: "Sketches that explain themselves",
    copy: "Turns a static Excalidraw board into a step-by-step animated walkthrough, so the story behind a diagram survives being shared.",
    stack: ["TypeScript", "Canvas", "React"],
    status: "In Progress",
    progress: 0.5,
  },
  {
    name: "transformers-visualized",
    tagline: "Attention, made legible",
    copy: "An interactive walkthrough of how transformer models work — tokens, attention heads, and gradients you can actually poke at.",
    stack: ["Python", "WebGL", "PyTorch"],
    status: "In Progress",
    progress: 0.2,
  },
];

const principles: Principle[] = [
  {
    icon: "students",
    kicker: "Student Led",
    title: "Built by students, for everyone.",
    copy: "Every project here is conceived, designed, and shipped by students at IIIT Sonepat — learning in public, building for real.",
  },
  {
    icon: "free",
    kicker: "Free to Use",
    title: "No paywalls. No accounts.",
    copy: "Our software is free for anyone to use. Access to good tools shouldn't depend on your ability to pay.",
  },
  {
    icon: "open",
    kicker: "Open Source",
    title: "Read the code. Learn from it.",
    copy: "Every project is libre. Explore the source, understand how it works, fork it, and make it yours.",
  },
];

/* ------------------------------------------------------------------ */
/* Reusable bits                                                      */
/* ------------------------------------------------------------------ */
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
      <article className="group border border-theme-border p-[22px] h-full flex flex-col justify-between bg-transparent hover:bg-theme-fg text-theme-fg hover:text-theme-inv transition-colors duration-[350ms] ease-out cursor-pointer">
        <div>
          <div className="flex items-center justify-between">
            <p className="font-mono text-[15px] font-medium">{p.name}</p>
            <span className="flex items-center gap-[6px] font-mono text-[10px] tracking-[0.08em] uppercase opacity-60">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {p.status}
            </span>
          </div>
          <h4 className="font-serif italic font-semibold text-[22px] mt-3.5 leading-[1.15]">
            {p.tagline}
          </h4>
          <p className="mt-3 text-[14px] leading-[1.6] opacity-70">
            {p.copy}
          </p>
        </div>

        <div className="mt-[22px]">
          <div className="flex gap-2 flex-wrap">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10.5px] border border-current opacity-65 px-2 py-[3px]"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <div className="h-0.5 bg-theme-border group-hover:bg-theme-inv/25">
              <div
                className="h-full bg-current"
                style={{ width: `${p.progress * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-2.5 font-mono text-[10.5px] opacity-60">
              <span>build {Math.round(p.progress * 100)}%</span>
              <span className="inline-flex items-center gap-1">
                view repo <Icon name="arrow" size={12} className="text-current" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function OSSInitiativesHome() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Projects", "About", "Contribute", "Blog"];

  // Toggle dark mode by setting a class on a wrapper
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-theme-bg text-theme-fg font-sans transition-colors duration-400 ease-out">
        <div className="max-w-[1180px] mx-auto px-5 py-4">
          {/* NAV */}
          <header className="sticky top-4 z-30">
            <nav className="flex items-center justify-between min-h-[60px] border border-theme-border bg-[rgba(250,250,248,0.88)] dark:bg-[rgba(10,10,10,0.88)] backdrop-blur-[14px] px-[18px]">
              <div className="flex items-center gap-2.5">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r="10.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <span className="text-[13px] font-extrabold tracking-[0.02em] uppercase">
                  OSS Initiatives
                </span>
              </div>

              <div className="hidden sm:flex gap-1 text-[13.5px] font-semibold">
                {navLinks.map((n) => (
                  <a
                    key={n}
                    href={`#${n.toLowerCase()}`}
                    className="px-4 py-2.5 text-theme-mute no-underline"
                  >
                    {n}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDark((d) => !d)}
                  aria-label="Toggle theme"
                  className="w-9 h-9 border border-theme-border bg-transparent text-theme-fg cursor-pointer grid place-items-center"
                >
                  {dark ? "☾" : "☀"}
                </button>
                <a
                  href="#"
                  className="hidden sm:block border border-theme-fg bg-theme-fg text-theme-inv px-4 py-[9px] text-[13px] font-bold no-underline"
                >
                  GitHub
                </a>
                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  className="sm:hidden w-9 h-9 border border-theme-border bg-transparent text-theme-fg cursor-pointer"
                >
                  {menuOpen ? "✕" : "☰"}
                </button>
              </div>
            </nav>

            {menuOpen && (
              <div className="sm:hidden border border-t-0 border-theme-border bg-theme-bg p-2">
                {navLinks.map((n) => (
                  <a
                    key={n}
                    href={`#${n.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block px-2.5 py-3 text-[14px] font-semibold text-theme-fg no-underline border-b border-theme-border"
                  >
                    {n}
                  </a>
                ))}
                <a
                  href="#"
                  className="block mt-2 text-center border border-theme-fg bg-theme-fg text-theme-inv p-2.5 text-[13px] font-bold no-underline"
                >
                  GitHub
                </a>
              </div>
            )}
          </header>

          {/* HERO */}
          <section
            className="relative min-h-[500px] md:min-h-[640px] overflow-hidden border border-theme-border mt-4 bg-[url('/greek-hero.png')] bg-cover bg-center bg-[#dcd8cf] dark:bg-[#141414]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,248,0.5)] to-[rgba(250,250,248,0.05)] dark:from-[rgba(10,10,10,0.55)] dark:to-[rgba(10,10,10,0.15)] from-0% to-55%" />

            <div className="absolute left-6 top-6 flex items-center gap-2.5">
              <svg width="30" height="30" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10.5"
                  fill="none"
                  stroke="#fafaf8"
                  strokeWidth="1.4"
                />
                <path d="M8 12h8M12 8v8" stroke="#fafaf8" strokeWidth="1.4" />
              </svg>
              <h1 className="font-serif font-bold text-[20px] text-[#fafaf8] drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                OSS Initiatives
              </h1>
            </div>

            <Reveal className="absolute left-6 right-6 bottom-6">
              <div className="grid gap-4 md:grid-cols-[minmax(18rem,34rem)_minmax(0,1fr)] md:items-end">
                <div className="bg-theme-bg text-theme-fg py-[22px] px-[26px] shadow-[10px_10px_0_rgba(10,10,10,0.18)] max-w-[560px]">
                  <Eyebrow>
                    IIIT Sonepat — Student-led, Non-profit
                  </Eyebrow>
                  <h2 className="font-serif font-extrabold text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] mt-2.5 tracking-[-0.01em]">
                    Software built for real people.
                  </h2>
                </div>

                <div className="grid max-sm:grid-cols-1 sm:grid-cols-3 gap-2.5 self-end">
                  {projects.map((p) => (
                    <a
                      key={p.name}
                      href="#projects"
                      className="border border-[#fafaf8] py-3 px-[14px] text-[#fafaf8] no-underline bg-[rgba(10,10,10,0.15)] backdrop-blur-sm"
                    >
                      <span className="block font-mono text-[13px] font-semibold">
                        {p.name}
                      </span>
                      <span className="block mt-1.5 text-[11.5px] opacity-[0.78]">
                        {p.status}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* ABOUT STRIP */}
          <section
            id="about"
            className="border-y border-theme-border py-10 px-1"
          >
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:items-baseline gap-6">
                <Eyebrow>Manifesto</Eyebrow>
                <p className="font-serif text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-[1.35] max-w-[780px]">
                  Libre software, built in the open. Everything we ship is
                  auditable, forkable, and yours — because good tools shouldn't
                  gatekeep who gets to learn from them.
                </p>
              </div>
            </Reveal>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="pt-12 px-1 pb-2">
            <Reveal>
              <div className="flex items-baseline justify-between mb-[26px]">
                <div>
                  <Eyebrow>Currently shipping</Eyebrow>
                  <h3 className="font-serif font-bold text-[clamp(1.8rem,3.4vw,2.6rem)] mt-2">
                    Active projects
                  </h3>
                </div>
                <span className="font-mono text-[12px] text-theme-faint">
                  {projects.length} repos · 0 releases (yet)
                </span>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((p, i) => (
                <ProjectCard key={p.name} p={p} i={i} />
              ))}
            </div>
          </section>

          {/* PRINCIPLES */}
          <section className="py-14 px-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {principles.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <div className="border border-theme-border p-[22px] h-full">
                    <Icon name={c.icon} size={24} className="text-theme-fg" />
                    <Eyebrow>
                      <span className="mt-4 block">{c.kicker}</span>
                    </Eyebrow>
                    <h4 className="font-serif font-bold text-[21px] mt-2 leading-[1.2]">
                      {c.title}
                    </h4>
                    <p className="mt-2.5 text-[14px] leading-[1.65] text-theme-mute">
                      {c.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CONTRIBUTE / FOOTER */}
          <footer
            id="contribute"
            className="border-t border-theme-border mt-6 pt-10 px-1 pb-6"
          >
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-7">
                <div>
                  <h4 className="font-serif italic font-semibold text-[clamp(1.6rem,3vw,2.2rem)] max-w-[480px] leading-[1.25]">
                    First PR is always the hardest. We keep a good-first-issue
                    label for that reason.
                  </h4>
                  <div className="flex gap-2.5 mt-5">
                    {SOCIALS.map(({ key, label, href }) => (
                      <a
                        key={key}
                        href={href}
                        aria-label={label}
                        className="w-[38px] h-[38px] grid place-items-center border border-theme-border text-theme-fg"
                      >
                        <SocialIcon type={key} size={17} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="font-mono text-[12.5px] text-theme-mute leading-[2.1]">
                  <div className="text-theme-faint uppercase tracking-[0.14em] text-[10.5px] mb-1.5">
                    Sitemap
                  </div>
                  <div>Projects — Blog — About — Contribute — Docs</div>
                  <div className="mt-[18px] text-theme-faint uppercase tracking-[0.14em] text-[10.5px] mb-1.5">
                    Org
                  </div>
                  <div>
                    © {new Date().getFullYear()} OSS Initiatives, IIIT Sonepat
                  </div>
                </div>
              </div>
            </Reveal>
          </footer>
        </div>
      </div>
    </div>
  );
}
