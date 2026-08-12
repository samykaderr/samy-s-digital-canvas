import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const id = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 18 + 6);
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(id);
        window.setTimeout(() => setDone(true), 380);
      }
    }, 140);
    return () => window.clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            <span className="text-gradient">SA</span>
            <span className="ml-1 inline-block h-8 w-[3px] translate-y-1 animate-pulse bg-cyan align-middle" />
          </motion.div>
          <p className="relative mt-4 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            initializing
          </p>
          <div className="relative mt-8 h-[2px] w-56 overflow-hidden rounded-full bg-secondary">
            <div
              className="bg-gradient-brand h-full transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
