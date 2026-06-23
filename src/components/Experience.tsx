const jobs = [
  {
    period: "2024 — Present",
    title: "Software Enthusiast",
    company: "Independant",
    description:
      "Following a company-wide reduction in force, I've spent time deepening my expertise in modern frontend technologies while exploring independent projects and consulting opportunities. I've continued building applications with React, Next.js, and TypeScript, experimenting with emerging AI tools and workflows, and refining my approach to accessibility, performance, and scalable UI architecture. This period has also provided opportunities to evaluate new technologies, contribute to personal projects, and invest in professional growth while preparing for the next long-term engineering role.",
  },
  {
    period: "2021 — 2022",
    title: "Senior Software Engineer",
    company: "Universe",
    description:
      "Led frontend architecture and development for the web beta of Universe's core product, delivering a production-ready MVP with Next.js and TypeScript. Championed accessibility initiatives across teams, improved platform-wide accessibility scores, built high-performance reusable components, and mentored engineers on React best practices and inclusive design principles.",
  },
  {
    period: "2018 — 2020",
    title: "Software Engineer",
    company: "AudioEye",
    description:
      "Developed accessibility-focused products used by thousands of websites, including a Chrome extension that empowered customers to implement accessibility improvements independently. Improved application performance, built cross-platform communication systems, and solved large-scale data quality challenges through automation and tooling enhancements.",
  },
  {
    period: "2016 — 2017",
    title: "Asscociate Software Engineer",
    company: "Decision Source",
    description:
      "Built responsive web applications for healthcare clients in a fast-paced consulting environment. Contributed across both frontend and backend systems, supporting data migrations, automated testing efforts, and analytics-focused platform improvements while gaining experience working directly with client-driven requirements.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-white text-2xl font-bold mb-8">Experience</h2>

      <div className="space-y-10">
        {jobs.map((job) => (
          <div key={job.title} className="grid md:grid-cols-[150px_1fr] gap-6">
            <span className="text-slate-500">{job.period}</span>

            <div>
              <h3 className="text-white font-semibold">
                {job.title} · {job.company}
              </h3>

              <p className="mt-3 text-slate-400">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
