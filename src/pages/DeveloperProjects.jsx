
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/api";

export default function DeveloperProjects() {
  const { id } = useParams();

  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getDeveloper() {
      setLoading(true);
      setError("");

      try {
        const response = await api.get("/developer");

        const developers = Array.isArray(response.data)
          ? response.data
          : [];

        const selectedDeveloper = developers.find(
          (item) => item.id === id
        );

        if (!selectedDeveloper) {
          setError("Developer not found.");
          return;
        }

        setDeveloper(selectedDeveloper);
      } catch (err) {
        console.error("Failed to fetch developer:", err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    getDeveloper();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-5 py-20 text-center">
        <p className="mb-5 text-red-600">{error}</p>
        <Link
          to="/developers"
          className="text-red-800 underline"
        >
          Back to Developers
        </Link>
      </div>
    );
  }

  const projects = developer.projects || [];

  return (
    <section className="min-h-screen bg-white px-5 py-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/developers"
          className="mb-8 inline-block text-sm text-red-800 hover:underline"
        >
          ← Back to Developers
        </Link>

        <h1 className="mb-3 text-center text-3xl font-semibold text-gray-900">
          {developer.name_en || developer.name_ar} Projects
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-center leading-7 text-gray-600">
          {developer.description_en || developer.description_ar}
        </p>

        {projects.length === 0 ? (
          <p className="rounded-lg bg-gray-50 py-12 text-center text-gray-500">
            No projects available for this developer yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="block h-56 overflow-hidden bg-gray-100"
                >
                  <img
                    src={project.images?.[0] || ""}
                    alt={project.name_en || project.name_ar}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </Link>

                <div className="p-5">
                  <h2 className="mb-3 text-xl font-semibold text-red-800">
                    {project.name_en || project.name_ar}
                  </h2>

                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {project.description_en ||
                      project.description_ar ||
                      "Discover this project."}
                  </p>

                  <Link
                    to={`/projects/${project.id}`}
                    className="block rounded-md border border-red-800 px-4 py-2.5 text-center text-sm text-red-800 transition hover:bg-red-800 hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
