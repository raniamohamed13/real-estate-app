
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api, { unwrapData } from "../utils/api";

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function getProject() {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/projects/${id}`);
        const projectData = unwrapData(response);

        if (!projectData || !projectData.id) {
          throw new Error("Project response is empty or invalid.");
        }

        if (!cancelled) setProject(projectData);
      } catch (err) {
        console.error("Failed to fetch project:", err);

        if (!cancelled) {
          setProject(null);
          setError(
            err.response?.status === 404
              ? "Project not found."
              : "Failed to load project details."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    getProject();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div
        data-theme="light"
        className="flex min-h-screen items-center justify-center bg-white text-gray-900"
      >
        <span className="loading loading-spinner loading-lg text-red-700" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div
        data-theme="light"
        className="min-h-screen bg-white px-5 py-20 text-center text-gray-900"
      >
        <h2 className="text-2xl font-semibold text-gray-900">
          {error || "Project not found."}
        </h2>

        <Link
          to="/zones"
          className="mt-6 inline-block rounded-md bg-red-700 px-6 py-3 text-white"
        >
          Back to Zones
        </Link>
      </div>
    );
  }

  return (
    <main
      data-theme="light"
      className="min-h-screen bg-white px-5 py-12 text-gray-900 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <Link
          to="/zones"
          className="mb-8 inline-block text-red-700 hover:underline"
        >
          ← Back to Zones
        </Link>

        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          {project.name_en}
        </h1>

        <p className="mb-10 max-w-4xl leading-7 text-gray-600">
          {project.description_en}
        </p>

        {project.images?.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`${project.name_en} - ${index + 1}`}
                className="h-72 w-full rounded-lg object-cover shadow-md md:h-96"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>
    </main>
  );
}
