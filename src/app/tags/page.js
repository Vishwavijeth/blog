import Link from "next/link";
import { projects } from "../components/project_details";

export default function TagsPage() {
  const tagCount = projects.reduce((acc, project) => {
    project.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedTags = Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="flex flex-col gap-10">
      <Link
        href="/"
        className="self-start text-sm font-semibold text-cyan-300 hover:text-cyan-100"
      >
        ← Back to the blog
      </Link>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedTags.map(({ tag, count }) => (
          <div
            key={tag}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Tag
            </p>
            <h2 className="mt-2 text-xl font-semibold text-white">{tag}</h2>
            <p className="text-sm text-slate-400">
              {count} entr{count === 1 ? "y" : "ies"}
            </p>
            <div className="mt-5 h-2 rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{ width: `${Math.min(count * 12, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
