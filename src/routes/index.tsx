import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Code2,
  Palette,
  Database,
  Server,
  Sparkles,
  Layers,
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Sun,
  Moon,
  Quote,
  Briefcase,
  GraduationCap,
  Rocket,
  Menu,
  X,
  Send,
  CheckCircle2,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Morgan — Full Stack Developer & Graphic Designer" },
      {
        name: "description",
        content:
          "Portfolio of Alex Morgan — building performant full stack web apps with React, Node.js, and MongoDB, plus distinctive brand and graphic design systems.",
      },
      { property: "og:title", content: "Alex Morgan — Full Stack Developer & Graphic Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Alex Morgan — performant full stack web apps and distinctive brand design.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const skills = [
  { name: "React", level: 95, group: "Frontend" },
  { name: "JavaScript", level: 95, group: "Frontend" },
  { name: "HTML / CSS", level: 98, group: "Frontend" },
  { name: "Tailwind CSS", level: 92, group: "Frontend" },
  { name: "Node.js", level: 90, group: "Backend" },
  { name: "Express.js", level: 88, group: "Backend" },
  { name: "MongoDB", level: 85, group: "Backend" },
  { name: "REST / GraphQL", level: 82, group: "Backend" },
  { name: "Graphic Design", level: 90, group: "Design" },
  { name: "Figma", level: 92, group: "Design" },
  { name: "Brand Systems", level: 88, group: "Design" },
  { name: "Motion / Prototyping", level: 80, group: "Design" },
];

const projects = [
  {
    title: "Lumen Analytics",
    tag: "SaaS Dashboard",
    desc: "A real-time analytics platform with custom charts, role-based access, and a design system serving 12k+ users.",
    stack: ["React", "Node.js", "MongoDB", "D3"],
    img: project1,
  },
  {
    title: "Pasipun Atelier",
    tag: "E-commerce",
    desc: "Editorial fashion store with headless commerce, custom checkout, and content-driven storytelling.",
    stack: ["React", "Express", "Stripe"],
    img: project2,
  },
  {
    title: "Ceurn Identity",
    tag: "Brand System",
    desc: "Full brand identity and guidelines for a boutique investment firm — logo, type, motion, and digital toolkit.",
    stack: ["Figma", "Illustrator", "After Effects"],
    img: project3,
  },
  {
    title: "Pulse Fitness",
    tag: "Mobile App",
    desc: "Workout tracker with adaptive plans, social challenges, and an offline-first sync engine.",
    stack: ["React Native", "Node.js", "MongoDB"],
    img: project4,
  },
];

const experience = [
  {
    year: "2023 — Present",
    role: "Senior Full Stack Developer",
    company: "Northwind Studio",
    desc: "Leading a small team building product surfaces for design-led B2B clients. Owning architecture, DX, and brand.",
    icon: Rocket,
  },
  {
    year: "2021 — 2023",
    role: "Full Stack Developer & Designer",
    company: "Halo Labs",
    desc: "Shipped 14 production apps across React + Node, while designing the brand systems that wrapped them.",
    icon: Briefcase,
  },
  {
    year: "2019 — 2021",
    role: "Frontend Engineer",
    company: "Tessera Agency",
    desc: "Specialized in editorial micro-sites, motion-rich landing pages, and CMS-driven marketing platforms.",
    icon: Code2,
  },
  {
    year: "2015 — 2019",
    role: "BSc Computer Science & Visual Communication",
    company: "University of the Arts",
    desc: "Double major focused on the intersection of code, typography, and interaction design.",
    icon: GraduationCap,
  },
];

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "End-to-end web applications built with React, Node.js, Express and MongoDB — fast, accessible, and maintainable.",
  },
  {
    icon: Palette,
    title: "Brand & Graphic Design",
    desc: "Identity systems, marketing collateral, and pitch decks that give your product a memorable visual voice.",
  },
  {
    icon: Layers,
    title: "Product UI / UX",
    desc: "Design systems, component libraries, and end-to-end product flows that scale with your team.",
  },
  {
    icon: Sparkles,
    title: "Landing Pages",
    desc: "Premium marketing sites with motion, copy, and conversion craft — engineered for speed and SEO.",
  },
];

const testimonials = [
  {
    quote:
      "Alex is the rare unicorn who can architect a clean Node API in the morning and ship a brand identity by evening. Our product shipped twice as fast.",
    name: "Maya Chen",
    role: "Founder, Lumen Analytics",
  },
  {
    quote:
      "The taste level is off the charts. Every screen, every micro-interaction felt considered. Our investors literally noticed.",
    name: "Daniel Park",
    role: "CEO, Pasipun",
  },
  {
    quote:
      "Reliable, fast, and a genuinely excellent collaborator. We've worked with Alex on five projects and it's never not been a delight.",
    name: "Sarah Whitfield",
    role: "Product Lead, Halo Labs",
  },
];

function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-hero" aria-hidden />
      <div
        className="pointer-events-none fixed -top-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-brand/20 blur-3xl animate-blob"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed -bottom-40 -right-40 -z-10 h-[600px] w-[600px] rounded-full bg-brand-glow/20 blur-3xl animate-blob"
        aria-hidden
      />

      <Nav theme={theme} setTheme={setTheme} navOpen={navOpen} setNavOpen={setNavOpen} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Nav({
  theme,
  setTheme,
  navOpen,
  setNavOpen,
}: {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
  navOpen: boolean;
  setNavOpen: (b: boolean) => void;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
            A
          </span>
          <span className="hidden sm:inline">Alex Morgan</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-foreground transition hover:bg-accent"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90 sm:inline-flex"
          >
            Let's talk
          </a>
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface md:hidden"
          >
            {navOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {navOpen && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden animate-fade-up">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Available for freelance — Q3 2026
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I build software{" "}
            <span className="text-gradient">with the eye of a designer</span> and the rigor of an
            engineer.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm Alex — a full stack web developer and graphic designer based in Berlin. I help
            ambitious teams ship products that feel as good as they perform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              Start a project
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat value="6+" label="Years experience" />
            <Stat value="40+" label="Projects shipped" />
            <Stat value="25+" label="Happy clients" />
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2 animate-float">
            <img
              src={portrait}
              alt="Portrait of Alex Morgan"
              width={900}
              height={1100}
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
            <div className="glass absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl p-3">
              <div>
                <p className="text-xs text-muted-foreground">Currently building</p>
                <p className="text-sm font-semibold">Lumen v3.0</p>
              </div>
              <Sparkles className="h-5 w-5 text-brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-bold text-gradient">{value}</dt>
      <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-base text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader eyebrow="About" title="A craftsman across code and pixels" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <div className="glass-strong rounded-3xl p-8 lg:col-span-2">
          <p className="text-lg leading-relaxed text-foreground">
            For the last six years I've lived at the seam between engineering and design. I write
            production-grade JavaScript and Node services by day, then sketch logos and pour over
            typography by night.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            My favorite projects are the ones where both disciplines are needed — where you can
            unblock a backend bug in the morning, redesign the empty state in the afternoon, and
            ship them both before the standup. I care about details: the easing of a hover, the
            weight of a label, the schema you'll thank yourself for in six months.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Highlight icon={Code2} title="Engineering first" desc="Type-safe, tested, accessible." />
            <Highlight icon={Palette} title="Design native" desc="Type, color, motion, identity." />
          </div>
        </div>
        <div className="glass-strong flex flex-col gap-4 rounded-3xl p-8">
          <h3 className="font-display text-xl font-semibold">Quick facts</h3>
          <Fact label="Based in" value="Berlin, DE" />
          <Fact label="Working since" value="2019" />
          <Fact label="Languages" value="EN · DE · FR" />
          <Fact label="Open to" value="Remote · Hybrid" />
          <a
            href="#contact"
            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            Download résumé <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Highlight({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof Code2;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface-2 p-5">
      <Icon className="h-5 w-5 text-brand" />
      <p className="mt-3 font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  );
}

function Skills() {
  const groups = ["Frontend", "Backend", "Design"] as const;
  const groupIcons = { Frontend: Code2, Backend: Server, Design: Palette };
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader
        eyebrow="Skills"
        title="Tools I reach for"
        desc="A curated stack refined over years of shipping production work for startups and studios."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {groups.map((group) => {
          const Icon = groupIcons[group];
          return (
            <div key={group} className="glass-strong rounded-3xl p-7 hover-lift">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{group}</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {skills
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-brand"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader
        eyebrow="Featured work"
        title="Selected recent projects"
        desc="A small sample. Reach out for the full case studies."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`glass-strong group relative overflow-hidden rounded-3xl hover-lift ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={`${p.title} — ${p.tag}`}
                loading="lazy"
                width={1200}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium">
                {p.tag}
              </span>
            </div>
            <div className="p-6 sm:p-7">
              <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader eyebrow="Experience" title="A timeline of recent chapters" />
      <ol className="mx-auto mt-14 max-w-3xl">
        {experience.map((e, i) => {
          const Icon = e.icon;
          return (
            <li key={e.role} className="relative grid grid-cols-[auto_1fr] gap-6 pb-10">
              <div className="flex flex-col items-center">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                {i < experience.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-gradient-to-b from-border to-transparent" />
                )}
              </div>
              <div className="glass-strong rounded-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{e.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{e.role}</h3>
                <p className="text-sm text-muted-foreground">{e.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{e.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader
        eyebrow="Services"
        title="How I can help"
        desc="From a one-week design sprint to a multi-month product build."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="glass-strong rounded-3xl p-7 hover-lift">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader eyebrow="Testimonials" title="What collaborators say" />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="glass-strong flex flex-col rounded-3xl p-7 hover-lift">
            <Quote className="h-7 w-7 text-brand" />
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const errs: Record<string, string> = {};
    if (!name || name.length > 100) errs.name = "Please enter your name (max 100 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      errs.email = "Please enter a valid email.";
    if (!message || message.length > 1000)
      errs.message = "Please write a message (max 1000 chars).";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something memorable"
        desc="Drop a note about your project, timeline, and budget. I usually reply within one business day."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass-strong flex flex-col gap-5 rounded-3xl p-8">
          <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
          <p className="text-sm text-muted-foreground">
            Prefer email or a quick call? Use whichever works best for you.
          </p>
          <ContactRow icon={Mail} label="Email" value="hello@alexmorgan.studio" />
          <ContactRow icon={Phone} label="Phone" value="+49 30 1234 5678" />
          <ContactRow icon={MapPin} label="Studio" value="Mitte, Berlin" />
          <div className="mt-auto flex gap-3 pt-4">
            <SocialIcon icon={Github} label="GitHub" />
            <SocialIcon icon={Linkedin} label="LinkedIn" />
            <SocialIcon icon={Twitter} label="Twitter" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8" noValidate>
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Message sent</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Thanks for reaching out. I'll get back to you within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-brand hover:underline"
              >
                Send another →
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              <Field label="Your name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <Field label="Project type" name="topic" placeholder="e.g. Web app, brand identity" />
              <div>
                <label className="mb-2 block text-sm font-medium">Tell me about your project</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  className="w-full resize-none rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
                  placeholder="Goals, timeline, budget range..."
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        maxLength={255}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface-2 p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon: Icon, label }: { icon: typeof Github; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface-2 text-foreground transition hover:bg-accent hover:text-brand"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Morgan. Designed & built with care.
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Database className="h-3 w-3" />
          React · Node · MongoDB · Figma
        </div>
      </div>
    </footer>
  );
}
