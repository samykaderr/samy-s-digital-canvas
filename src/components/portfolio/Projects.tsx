import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./Reveal";

const GITHUB = "https://github.com/samykaderr";

const projects = [
  {
    name: "Edoc-Soummam",
    year: "Internship",
    description:
      "A dynamic document generation engine built during a software development internship. Spring Boot 3.2 backend, React 19 + Vite frontend, MySQL database. Three-layer architecture (Data Schema / UI Schema / DocumentTypeConfig) with JSON Schema Draft-07 validation on both frontend (Ajv) and backend (networknt) for fully configurable document templates.",
    tags: ["Spring Boot", "React", "MySQL", "JSON Schema"],
    featured: true,
  },
  {
    name: "BloodLink",
    year: "Platform",
    description:
      "A blood donation management platform (mobile + web) designed for the Algerian healthcare context, connecting donors, hospitals, and blood banks in real time.",
    tags: ["Full-stack", "Healthcare", "Mobile"],
  },
  {
    name: "Stock Management System",
    year: "Full-stack",
    description:
      "A full-stack inventory/stock management application built with Spring Boot, React, and PostgreSQL/MySQL — JPA entities, service layer, REST controllers and a complete admin dashboard.",
    tags: ["Spring Boot", "React", "PostgreSQL"],
  },
  {
    name: "Mini Compilateur",
    year: "Academic",
    description:
      "A mini JavaScript compiler built in Java, performing lexical analysis and syntax parsing with try/catch error handling.",
    tags: ["Java", "Compilers", "Algorithms"],
  },
  {
    name: "University Transport Management App",
    year: "Desktop",
    description:
      "A Java desktop application helping students consult transport routes and giving admins centralized management tools.",
    tags: ["Java", "Desktop App"],
  },
];

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={GITHUB}
      target="_blank"
      rel="noreferrer"
      data-magnetic
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = el.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -9;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 9;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      }}
      onPointerLeave={() => {
        if (ref.current)
          ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
      }}
      className={`glass glow-hover group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-transform duration-300 ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="bg-gradient-brand pointer-events-none absolute inset-x-0 top-0 h-px opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
            {project.year}
          </p>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{project.name}</h3>
        </div>
        <span className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground/70"
          >
            {t}
          </span>
        ))}
        <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Github className="h-3.5 w-3.5" /> View on GitHub
        </span>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Selected work."
        description="Real systems built for internships, coursework and the problems around me."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06} className={p.featured ? "lg:col-span-2" : ""}>
            <motion.div className="h-full">
              <TiltCard project={p} />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
