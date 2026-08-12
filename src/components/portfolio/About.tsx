import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";

const stats = [
  { value: 5, suffix: "+", label: "Projects Shipped" },
  { value: 2, suffix: "", label: "Internships Completed" },
  { value: 3, suffix: "rd", label: "Year Licence Informatique" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setN(value);
      return;
    }
    let frame = 0;
    const total = 48;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setN(Math.round(value * progress));
      if (frame >= total) window.clearInterval(id);
    }, 18);
    return () => window.clearInterval(id);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className="text-gradient font-display text-4xl font-bold sm:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading eyebrow="01 — About" title="Building software that actually ships." />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a computer science student at Université Abderahmane Mira de Bejaia, currently
            gaining hands-on experience through internships in software development and
            network/security administration.
          </p>
          <p>
            I&apos;m passionate about building real, deployable software rather than just theory — and
            I believe in thinking outside the box to solve problems. My focus is full-stack: robust
            Spring Boot services behind fast, considered React interfaces.
          </p>
          <p className="font-display text-foreground">
            Full-stack focus · Java &amp; Spring Boot · React &amp; TypeScript
          </p>
        </Reveal>

        <div className="grid gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass glow-hover flex items-center justify-between rounded-2xl p-6"
              >
                <Counter value={s.value} suffix={s.suffix} />
                <p className="max-w-[9rem] text-right text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
