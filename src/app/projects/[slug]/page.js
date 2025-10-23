import { projects } from "@/app/components/project_details";
import Link from "next/link";
import { use } from "react"; // required in Next.js 13.5+ for async params

export default function ProjectPage({ params }) {
  // unwrap params using React.use
  const { slug } = use(params); // <- this fixes the Promise issue

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-8 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-600">{project.date}</p>
      </header>

      <section className="mb-6">
        <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
          {project.content}
        </p>
      </section>

      {project.repo && (
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Repo</h3>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {project.repo}
          </a>
        </section>
      )}

      <Link href="/">
        <span className="text-teal-600 font-semibold cursor-pointer hover:underline">
          ← Back to Projects
        </span>
      </Link>
    </div>
  );
}