import { GraduationCap, ShieldCheck, Code2 } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  {
    icon: GraduationCap,
    period: "Ongoing",
    title: "Licence Informatique — 3ème année",
    org: "Université Abderahmane Mira de Bejaia",
    text: "Core computer science: algorithms, compilers, databases, software engineering and networks.",
  },
  {
    icon: ShieldCheck,
    period: "Internship",
    title: "Network & Security Administration Intern",
    org: "Bejaia, Algeria",
    text: "Hands-on with Active Directory, networking fundamentals and infrastructure/security administration.",
  },
  {
    icon: Code2,
    period: "Internship",
    title: "Software Development Intern — Edoc-Soummam",
    org: "Spring Boot 3.2 · React 19 · MySQL",
    text: "Designed and built a dynamic document generation engine with JSON Schema Draft-07 validation across frontend and backend.",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
      <SectionHeading eyebrow="04 — Journey" title="Education & experience." />

      <div className="relative pl-8 sm:pl-12">
        <div className="bg-gradient-brand absolute left-[3px] top-2 h-full w-px opacity-60 sm:left-[7px]" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-8 top-1.5 flex h-[9px] w-[9px] items-center justify-center rounded-full bg-cyan shadow-[0_0_0_4px_oklch(0.82_0.15_195/15%)] sm:-left-12" />
                <div className="glass glow-hover rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <it.icon className="h-4 w-4 text-primary" />
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {it.period}
                    </p>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-primary/90">{it.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
