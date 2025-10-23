import Link from "next/link";
import { projects } from "./components/project_details";

export default function Home() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 flex flex-col items-center">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row items-start mb-10 w-full max-w-3xl border-b border-gray-300 pb-6"
        >
          {/* Project Date */}
          <div className="flex-none w-full md:w-56 text-left text-gray-500 text-lg md:text-xl font-normal mb-2 md:mb-0">
            {project.date}
          </div>

          {/* Project Details */}
          <div className="flex-1 md:ml-8">
            <h2 className="font-bold text-xl sm:text-2xl leading-tight tracking-tight mb-1">
              {project.title}
            </h2>

            {/* Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-teal-600 uppercase text-xs sm:text-sm font-medium tracking-wide px-2 py-1 bg-teal-100 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Read More */}
            <div className="mt-3">
              <Link href={`/projects/${project.slug}`}>
                <span className="text-teal-600 no-underline font-semibold text-base sm:text-lg cursor-pointer">
                  Read more →
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
