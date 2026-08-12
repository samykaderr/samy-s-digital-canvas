import { motion } from "framer-motion";
import { Braces, Database, Layers, Server, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  { icon: Braces, title: "Languages", items: ["Java", "JavaScript / TypeScript", "SQL"] },
  { icon: Server, title: "Backend", items: ["Spring Boot", "REST APIs", "JPA / Hibernate"] },
  { icon: Layers, title: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
  { icon: Database, title: "Databases", items: ["MySQL", "PostgreSQL"] },
  {
    icon: Wrench,
    title: "Tools & Other",
    items: [
      "Git / GitHub",
      "JSON Schema (Ajv / networknt)",
      "VBA",
      "Azure fundamentals (AZ-104 in progress)",
      "Active Directory & networking basics",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <SectionHeading
        eyebrow="02 — Skills"
        title="The toolkit."
        description="Grouped by where it lives in the stack."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="glass glow-hover h-full rounded-2xl p-6"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-brand mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
              >
                <g.icon className="h-5 w-5 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
