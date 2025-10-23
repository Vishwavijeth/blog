import React from "react";
import { projects } from "../components/project_details";

export default function TagsPage() {
  // Count tags dynamically
  const tagCount = projects.reduce((acc, project) => {
    project.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <div className="px-10 py-6">
      <h1 className="text-3xl font-bold mb-6">Tags</h1>
      <div className="flex flex-wrap gap-4">
        {Object.entries(tagCount).map(([tag, count]) => (
          <span
            key={tag}
            className="px-3 py-1 bg-teal-100 text-teal-700 font-medium rounded"
          >
            {tag} ({count})
          </span>
        ))}
      </div>
    </div>
  );
}
