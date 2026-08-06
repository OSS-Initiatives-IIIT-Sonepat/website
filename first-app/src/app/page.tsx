import Link from "next/link";
import Image from "next/image";
import { DitheredImage } from "@/components/DitheredImage";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = ["Projects", "About", "Source"];

const projectCards = [
  {
    name: "tiny-vercel",
    detail: "In Progress",
    color: "group-hover:text-[#fafafa]",
    status: "in-progress",
  },
  {
    name: "excalidraw-animate",
    detail: "In Progress",
    color: "group-hover:text-[#fafafa]",
    status: "in-progress",
  },
  {
    name: "transformers-visualized",
    detail: "In Progress",
    color: "group-hover:text-[#fafafa]",
    status: "in-progress",
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

function StatusDot({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block rounded-full bg-current ${className}`}
    />
  );
}

function SocialIcon({
  type,
  className,
}: {
  type: string;
  className: string;
}) {
  if (type === "x") {
    return (
      <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.6 10.2 22.3 1h-1.8l-6.7 8-5.4-8H2.2l8.1 12L2.2 23h1.8l7.1-8.5 5.7 8.5H23l-8.4-12.8Zm-2.5 3-0.8-1.2L4.8 2.4h2.7l5.3 7.8 0.8 1.2 6.9 10.1h-2.7l-5.7-8.3Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8h4.2v15H.4V8Zm7.5 0h4v2.05h.06c.56-1.06 1.94-2.18 3.99-2.18 4.27 0 5.05 2.81 5.05 6.46V23h-4.18v-7.68c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V23H7.9V8Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.9 4.4 19 4.7 19 4.7c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v4.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto min-h-screen w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30">
          <nav className="grid min-h-16 grid-cols-[1fr_auto_1fr] items-center border border-[#1b1b1b]/15 bg-[#fafafa]/92 px-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-[#fafafa]/15 dark:bg-[#1b1b1b]/92">
            <Link className="flex items-center gap-3" href="/">
              <span className="grid size-9 place-items-center">
                <Image
                  alt="Compose logo"
                  className="size-9 dark:invert"
                  height={36}
                  src="/compose-logo.svg"
                  width={36}
                />
              </span>
              <span className="text-sm font-bold uppercase tracking-tight">
                Compose
              </span>
            </Link>

            <div className="hidden items-center gap-1 text-sm font-semibold sm:flex">
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

            <div className="flex justify-end gap-2">
              <ThemeToggle />
              <a
                className="border border-[#1b1b1b] bg-[#1b1b1b] px-4 py-2 text-sm font-bold text-[#fafafa] transition hover:bg-transparent hover:text-[#1b1b1b] dark:border-[#fafafa] dark:bg-[#fafafa] dark:text-[#1b1b1b] dark:hover:bg-transparent dark:hover:text-[#fafafa]"
                href="#start"
              >
                Start capturing
              </a>
            </div>
          </nav>
        </header>

        <section className="grid gap-4 pt-4">
          <div className="relative min-h-[500px] overflow-hidden border border-[#1b1b1b]/15 bg-[#dcd8cf] dark:border-[#fafafa]/15 dark:bg-[#141414] lg:min-h-[660px]">
            <DitheredImage
              className="absolute inset-0 h-full w-full"
              src="/greek-hero.png"
              size={1.35}
              type="4x4"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,250,250,0.34),rgba(250,250,250,0)_55%)] dark:bg-[linear-gradient(90deg,rgba(27,27,27,0.40),rgba(27,27,27,0)_55%)]" />
            <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
              <Image
                alt="Compose logo"
                className="size-12 invert"
                height={48}
                src="/compose-logo.svg"
                width={48}
              />
              <h1 className="max-w-[12rem] text-2xl font-bold leading-none text-[#fafafa] drop-shadow">
                Compose
              </h1>
            </div>
            <div className="absolute inset-x-6 bottom-6 grid gap-4 sm:bottom-10 sm:left-10 sm:right-10 lg:grid-cols-[minmax(18rem,34rem)_minmax(0,1fr)]">
              <div className="bg-[#fafafa] p-5 text-[#1b1b1b] shadow-[12px_12px_0_rgba(27,27,27,0.18)] sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1b1b1b]/52">
                  Free, open-source dictation
                </p>
                <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                  Your voice, already written.
                </h2>
              </div>

              <div
                className="grid min-w-0 gap-3 sm:grid-cols-3 lg:self-end"
                id="platforms"
              >
                {platformCards.map((platform) => (
                  <a
                    className="group min-w-0 border border-[#fafafa] bg-transparent p-3 text-[#fafafa] transition hover:bg-[#fafafa] hover:text-[#1b1b1b] sm:p-4"
                    href="#platforms"
                    key={platform.name}
                  >
                    <PlatformIcon
                      className={`size-8 text-[#fafafa] transition ${platform.color}`}
                      type={platform.icon}
                    />
                    <span className="mt-4 block text-base font-black leading-none sm:text-lg">
                      {platform.name}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-[#fafafa]/72 transition group-hover:text-[#1b1b1b]/62 sm:text-sm">
                      {platform.detail}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <section
              className="grid gap-8 border border-[#1b1b1b]/15 bg-[#fafafa] p-5 dark:border-[#fafafa]/15 dark:bg-[#1b1b1b] sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              id="capture"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1b1b1b]/46 dark:text-[#fafafa]/48">
                  Speech to Text with lightning Speed
                </p>
                <h3 className="mt-4 max-w-xl text-4xl font-black leading-none sm:text-5xl">
                  Dictation that keeps up with real work.
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#1b1b1b]/62 dark:text-[#fafafa]/62">
                  Compose captures speech almost in real time, cleans up the
                  rough edges, and places the result where you need it. It is
                  free to use, open source, and made for notes, prompts, tasks,
                  and thoughts that happen away from a perfect typing setup.
                </p>
              </div>

              
            </section>

            <section className="grid gap-4 md:grid-cols-3" id="details">
              {cards.map((card) => (
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
            </section>

            <section className="grid gap-4 md:grid-cols-3">
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
                  alt="Compose logo"
                  className="size-10 dark:invert"
                  height={40}
                  src="/compose-logo.svg"
                  width={40}
                />
                <span className="text-sm font-bold uppercase tracking-tight">
                  Compose
                </span>
              </div>
              <p className="mt-5 max-w-xl text-2xl font-black leading-tight sm:text-4xl">
                Free, open-source dictation for thoughts that need to land now.
              </p>
            </div>
            <div className="grid gap-3 lg:min-w-[28rem]">
              <div className="grid gap-2 text-sm font-bold text-[#1b1b1b]/54 dark:text-[#fafafa]/58 sm:grid-cols-3">
                {platformCards.map((platform) => (
                  <a
                    className="group flex items-center gap-3 border border-[#1b1b1b]/12 p-3 transition hover:bg-[#1b1b1b] hover:text-[#fafafa] dark:border-[#fafafa]/12 dark:hover:bg-[#fafafa] dark:hover:text-[#1b1b1b]"
                    href="#platforms"
                    key={`footer-${platform.name}`}
                  >
                    <PlatformIcon
                      className={`size-5 transition ${platform.color}`}
                      type={platform.icon}
                    />
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
              <div className="flex justify-start gap-2 lg:justify-end">
                {[
                  { label: "X", href: "#", icon: "x" },
                  { label: "LinkedIn", href: "#", icon: "linkedin" },
                  {
                    label: "GitHub",
                    href: "https://github.com/FirePheonix/compose",
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
