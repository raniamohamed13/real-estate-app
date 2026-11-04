
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import zonesHero from "../assets/zone.png";
import api from "../utils/api";

export default function ZoneProjects() {
  const { id } = useParams();

  const [zone, setZone] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getZone() {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/zone");

        const data = response.data;

        const zonesData = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
          ? data.data
          : [];

        const selectedZone = zonesData.find(
          (item) => String(item.id) === String(id)
        );

        if (!selectedZone) {
          setError("Zone not found.");
          setZone(null);
          return;
        }

        setZone(selectedZone);
      } catch (err) {
        console.error("Error fetching zone:", err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    getZone();
  }, [id]);

  return (
    <>
      <Hero
        bg={zonesHero}
        title={zone?.name_en || "Explore Our Projects"}
        desc={
          zone?.description_en ||
          "Discover exceptional projects in this destination."
        }
        btn={false}
        icons={false}
      />

      <main className="mx-auto min-h-screen max-w-7xl px-5 py-12 md:px-10">

        <Link
          to="/zones"
          className="mb-8 inline-block text-sm font-medium text-red-800 hover:underline"
        >
          ← Back to Zones
        </Link>

        {loading && (
          <div className="py-16 text-center text-gray-500">
            Loading projects...
          </div>
        )}

        {!loading && error && (
          <p className="py-16 text-center text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && zone && (
          <>
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                {zone.name_en} Projects
              </h2>

              <div className="mx-auto mt-3 h-1 w-32 rounded-full bg-red-700" />
            </div>

            {zone.projects?.length > 0 ? (
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                {zone.projects.map((project) => (
                  <article
                    key={project.id}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Link to={`/projects/${project.id}`}>
                      <img
                        src={project.images?.[0]}
                        alt={project.name_en || "Project"}
                        className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </Link>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.name_en}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {project.description_en ||
                          "Discover this exceptional project."}
                      </p>

                      <Link
                        to={`/projects/${project.id}`}
                        className="mt-5 block rounded-md border border-red-800 px-5 py-3 text-center text-sm font-medium text-red-800 transition hover:bg-red-800 hover:text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </article>
                ))}

              </div>
            ) : (
              <p className="py-12 text-center text-gray-500">
                No projects available in this zone yet.
              </p>
            )}
          </>
        )}
      </main>
    </>
  );
}
