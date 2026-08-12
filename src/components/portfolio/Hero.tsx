import { ClientOnly } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Github, MapPin, Sparkles } from "lucide-react";
import { Suspense, lazy, useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

const HeroScene = lazy(() => import("./HeroScene"));

const terminalLines = [
  "$ whoami",
  "samy achouche — full-stack software engineer (student)",
  "$ stack --list",
  "java · spring boot · react · typescript · sql",
];

function TerminalReveal() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? terminalLines.length : 0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c >= terminalLines.length) {
          window.clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, 420);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className="glass mt-8 w-full max-w-md rounded-2xl p-4 font-mono text-[12px] leading-relaxed sm:text-[13px]">
      {terminalLines.slice(0, count).map((line, i) => (
        <motion.p
          key={line}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className={i % 2 === 0 ? "text-cyan" : "text-muted-foreground"}
        >
          {line}
        </motion.p>
      ))}
      <span className="mt-1 inline-block h-3 w-[7px] animate-pulse bg-primary align-middle" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[320px] w-[320px] rounded-full bg-accent/15 blur-[110px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
          >
            <MapPin className="h-3 w-3 text-cyan" /> Bejaia, Algeria
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl"
          >
            Samy
            <br />
            <span className="text-gradient">Achouche</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 max-w-xl text-lg text-foreground/85"
          >
            Full-Stack Software Engineer (Student) — Java / Spring Boot &amp; React.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground"
          >
            3ème année Licence Informatique at Université Abderahmane Mira de Bejaia, building real,
            deployable software — not just theory.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-7 border-l-2 border-primary/60 pl-4 font-display text-base italic text-foreground/80 sm:text-lg"
          >
            <Sparkles className="mb-1 mr-2 inline h-4 w-4 text-cyan" />
            &ldquo;The way to find solution is just thinking out of the Box.&rdquo;
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="bg-gradient-brand glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="glass glow-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Get in Touch
              </a>
            </Magnetic>
            <a
              href="https://github.com/samykaderr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" /> samykaderr
            </a>
          </motion.div>

          <TerminalReveal />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[320px] sm:h-[420px] lg:h-[560px]"
        >
          <div className="pointer-events-none absolute inset-8 rounded-full bg-accent/10 blur-3xl" />
          <ClientOnly
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="h-48 w-48 animate-pulse rounded-full border border-primary/30" />
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center">
                  <div className="h-48 w-48 animate-pulse rounded-full border border-primary/30" />
                </div>
              }
            >
              <HeroScene />
            </Suspense>
          </ClientOnly>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto mt-16 flex w-fit flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground"
      >
        scroll
        <ArrowDown className="h-4 w-4 text-primary" />
      </motion.a>
    </section>
  );
}
