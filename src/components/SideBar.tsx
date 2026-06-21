import GithubIcon from "../assets/GitHub.svg?react";
import LinkedInIcon from "../assets/LinkedIn.svg?react";
export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-5xl font-bold text-white">Corrine Wheeler</h1>

        <h2 className="mt-3 text-xl text-teal-400">Frontend Developer</h2>

        <p className="mt-6 max-w-sm text-slate-400">
          Building performant, scalable web applications with React, TypeScript,
          and modern web technologies.
        </p>
      </div>

      <nav className="hidden lg:block mt-16">
        <ul className="space-y-5 uppercase tracking-widest text-sm">
          <li>
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-teal-400">
              Experience
            </a>
          </li>

          {/* <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li> */}
        </ul>
      </nav>

      <div className="flex gap-5 mt-16 ">
        <a
          href="https://github.com/wheelercorrine"
          className="hover:text-teal-400"
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/corrine-wheeler/"
          className="hover:text-teal-400"
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedInIcon />
        </a>
      </div>
    </aside>
  );
}
