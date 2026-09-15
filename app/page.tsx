const skills = [
  "Next.js", "React", "TypeScript",
  "C# / Avalonia UI", "Python / OpenCV",
  "UML / draw.io", "Linux", "SQL (MySQL, PostgreSQL, MongoDB)",
  "React Native / Expo", "Flutter",
];

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <section>
        <p className="text-accent text-sm mb-2">$ whoami</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-1">
          Mikami
        </h1>
        <p className="text-muted text-sm mb-3">RAJAONAH Mickaël</p>
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
    </main>
  );
}
