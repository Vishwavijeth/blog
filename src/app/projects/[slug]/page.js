import { projects } from "@/app/components/project_details";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { use } from "react";

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="glass-panel p-10 text-center text-slate-300">
        Project not found.{" "}
        <Link href="/" className="text-cyan-300 underline">
          Back home
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-10">
      <header className="glass-panel p-8 lg:p-10 space-y-4">
        <p className="accent-pill w-fit">Case study</p>
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white">
            {project.title}
          </h1>
          <p className="text-slate-300">{project.date}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100"
          >
            View repository <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </header>

      <section className="glass-panel p-8 lg:p-10 text-base leading-7 text-slate-100 whitespace-pre-line">
        {project.content}
      </section>

      <Link
        href="/"
        className="inline-flex items-center gap-3 text-sm font-semibold text-cyan-300 hover:text-cyan-100"
      >
        <FaArrowLeft /> Back to all projects
      </Link>
    </article>
  );
}
