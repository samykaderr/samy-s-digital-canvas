import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="bg-gradient-brand h-px w-full origin-left"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Samy Achouche — Bejaia, Algeria</p>
        <p className="font-mono">thinking out of the Box.</p>
      </div>
    </footer>
  );
}
