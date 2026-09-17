"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "TypeScript",
  "C# / Avalonia UI", "Python / OpenCV",
  "UML / draw.io", "Linux", "SQL (MySQL, PostgreSQL, MongoDB)",
  "React Native / Expo", "Flutter",
];

const projects = [
  {
    title: "TP Mobile — RN/Expo vs Flutter",
    description:
      "Comparaison pratique entre React Native/Expo et Flutter : app de présentation étudiant avec profil, compétences, et compteur de visites.",
    tech: ["React Native", "Expo", "Flutter"],
    link: "https://github.com/Mikami99/TP-INFO593-Programmation-Mobile",
  },
  {
    title: "Gestionnaire multi-SGBD",
    description:
      "Outil desktop d'administration pour MySQL, PostgreSQL, MongoDB et SQLite, avec interface Avalonia UI.",
    tech: ["C#", "Avalonia UI", ".NET"],
    link: "#",
  },
  {
    title: "API REST — Workflow BPMN",
    description:
      "Trois services web autour d'un workflow BPMN de gestion de commandes.",
    tech: ["Next.js", "REST API"],
    link: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent text-sm mb-2">
          $ whoami
          <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Mikami</h1>
        <p className="text-muted text-sm mb-3">RAJAONAH Mickaël</p>
        <p className="text-muted text-lg leading-relaxed">
          Étudiant en informatique (Parcours IDEV) à l&apos;ESTI Madagascar,
          niveau L3. Je travaille sur du frontend (Next.js), des systèmes
          (C#/Avalonia, Linux), et du scripting (Python).
        </p>
      </motion.section>

      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent text-sm mb-4">$ ls skills/</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-3 py-1 text-sm border border-border rounded-md bg-surface text-muted hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent text-sm mb-4">$ ls projects/</p>
        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block p-4 border border-border rounded-lg bg-surface hover:border-accent transition-colors group"
            >
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm mt-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-accent/80 bg-accentSoft px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-16 mb-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <p className="text-accent text-sm mb-4">$ cat contact.txt</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/Mikami99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="mailto:micksraj40@gmail.com"
            className="text-muted hover:text-accent transition-colors underline underline-offset-4"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mickael-rajaonah-9236312a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>

      <footer className="mt-8 pt-6 border-t border-border text-xs text-muted">
        <p>
          © {new Date().getFullYear()} RAJAONAH Mickaël — construit avec Next.js
          & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
