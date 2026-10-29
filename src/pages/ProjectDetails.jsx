import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/api";

export default function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProject() {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/zone");

        const data = response.data;
        const zones = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
            ? data.data
            : [];

        let foundProject = null;

        for (const zone of zones) {
          foundProject = zone.projects?.find(
            (item) => item.id === id
          );

          if (foundProject) break;
        }

        if (!foundProject) {
          setError("Project not found.");
          return;
        }

        setProject(foundProject);
      } catch (err) {
        console.error(err);
        setError("Failed to load project details.");
      } finally {
        setLoading(false);
      }
    }

    getProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-96 items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="px-5 py-20 text-center">
        <h2 className="text-2xl font-semibold">
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
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-10">
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
    </main>
  );
}