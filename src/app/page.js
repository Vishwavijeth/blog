import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "./components/project_details";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section id="projects" className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Latest builds & launches
          </h2>
          <p className="text-slate-400 text-sm">
            From backend architecture to AI experiments.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const preview =
              project.content
                ?.split("\n")
                .find((line) => line.trim().length > 0)
                ?.trim() ?? "";

            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30 p-6 sm:p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="h-full w-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col gap-5">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{project.date}</span>
                    <span className="font-mono text-xs text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-base text-slate-300 line-clamp-3">
                    {preview}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wide text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                    >
                      Read deep dive <FaArrowRight />
                    </Link>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-slate-200"
                      >
                        Repo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
