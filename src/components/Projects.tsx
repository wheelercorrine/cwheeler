const projects = [
  {
    title: "SaaS Dashboard",
    description:
      "Analytics platform built with Next.js, Prisma, and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "AI Chat App",
    description: "Conversational AI interface with streaming responses.",
    tech: ["React", "OpenAI", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-white text-2xl font-bold mb-8">Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-slate-800 rounded-xl p-6 hover:border-teal-400 transition"
          >
            <h3 className="text-white text-lg font-semibold">
              {project.title}
            </h3>

            <p className="mt-3 text-slate-400">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-900 text-teal-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
