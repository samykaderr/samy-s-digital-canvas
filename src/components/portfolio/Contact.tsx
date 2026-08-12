import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

const socials = [
  { icon: Github, label: "GitHub", value: "samykaderr", href: "https://github.com/samykaderr" },
  { icon: Linkedin, label: "LinkedIn", value: "Coming soon", href: "#" },
  { icon: Mail, label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-72 rounded-full bg-accent/10 blur-[130px]" />
      <SectionHeading
        eyebrow="05 — Contact"
        title="Let's build something."
        description="Open to internships, collaborations and full-stack side quests."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message ready to send", {
                description: "Thanks for reaching out — I'll get back to you soon.",
              });
              setForm({ name: "", email: "", message: "" });
            }}
            className="glass glow-hover space-y-4 rounded-3xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Message
              </span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your project..."
              />
            </label>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Send message <Send className="h-4 w-4" />
            </motion.button>
          </form>
        </Reveal>

        <div className="grid content-start gap-4">
          {socials.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                data-magnetic
                className="glass glow-hover flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                  <s.icon className="h-4 w-4 text-cyan" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="text-sm">{s.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
