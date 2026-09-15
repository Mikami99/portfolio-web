export const metadata_note = null;

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

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <section>
        <p className="text-accent text-sm mb-2">$ whoami</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-1">Mikami</h1>
        <p className="text-muted text-sm mb-3">RAJAONAH Mickaël</p>
        <p className="text-muted text-lg leading-relaxed">
          Étudiant en informatique (Parcours IDEV) à l&apos;ESTI Madagascar,
          niveau L3. Je travaille sur du frontend (Next.js), des systèmes
          (C#/Avalonia, Linux), et du scripting (Python).
        </p>
      </section>

      <section className="mt-16">
        <p className="text-accent text-sm mb-4">$ ls skills/</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm border border-border rounded-md bg-surface text-muted hover:border-accent hover:text-accent transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="text-accent text-sm mb-4">$ ls projects/</p>
        <div className="space-y-4">
          {projects.map((project) => (
            
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
