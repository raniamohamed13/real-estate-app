// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import Hero from "../components/Hero";
// import zonesHero from "../assets/zone.png";
// import api from "../utils/api";

// export default function ZoneProjects() {
//   const { id } = useParams();

//   const [zone, setZone] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function getZoneProjects() {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await api.get("/zone");
//         const data = response.data;

//         const zones = Array.isArray(data)
//           ? data
//           : Array.isArray(data?.data)
//             ? data.data
//             : [];

//         const selectedZone = zones.find((item) => item.id === id);

//         if (!selectedZone) {
//           setError("Zone not found.");
//           setZone(null);
//           return;
//         }

//         setZone(selectedZone);
//       } catch (err) {
//         console.error("Error fetching zone projects:", err);
//         setError("Failed to load projects. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     getZoneProjects();
//   }, [id]);

//   return (
//     <>
//       <Hero
//         bg={zonesHero}
//         title={zone?.name_en || "Explore Our Projects"}
//         desc={zone?.description_en || "Discover projects in this destination."}
//         btn={false}
//         icons={true}
//       />

//       <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
//         {loading && (
//           <div className="flex justify-center py-12">
//             <span className="loading loading-spinner loading-lg" />
//           </div>
//         )}

//         {!loading && error && (
//           <p className="py-12 text-center text-red-600">{error}</p>
//         )}

//         {!loading && !error && zone && (
//           <>
//             <div className="mb-10">
//               <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
//                 Discover
//               </p>

//               <h2 className="mt-2 text-3xl font-semibold text-gray-900">
//                 Projects in {zone.name_en}
//               </h2>
//             </div>

//             {zone.projects?.length > 0 ? (
//               <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
//                 {zone.projects.map((project) => (
//                   <article
//                     key={project.id}
//                     className="overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
//                   >
//                     {project.images?.[0] ? (
//                       <img
//                         src={project.images[0]}
//                         alt={project.name_en || "Project"}
//                         className="h-64 w-full object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-64 items-center justify-center bg-gray-100 text-gray-500">
//                         No image available
//                       </div>
//                     )}

//                     <div className="p-5">
//                       <h3 className="text-xl font-semibold text-gray-900">
//                         {project.name_en}
//                       </h3>

//                       <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
//                         {project.description_en}
//                       </p>

//                       <Link
//                         to={`/projects/${project.id}`}
//                         state={{ project }}
//                         className="mt-5 inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
//                       >
//                         View Details
//                       </Link>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             ) : (
//               <p className="py-12 text-center text-gray-500">
//                 No projects available in this zone yet.
//               </p>
//             )}
//           </>
//         )}
//       </section>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import zonesHero from "../assets/zone.png";
import api from "../utils/api";

export default function ZoneProjects() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getZones() {
      try {
        const response = await api.get("/zone");

        const data = response.data;
        const zonesData = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
            ? data.data
            : [];

        setZones(zonesData);
      } catch (err) {
        console.error(err);
        setError("Failed to load zones and projects.");
      } finally {
        setLoading(false);
      }
    }

    getZones();
  }, []);

  return (
    <>
      <Hero
        bg={zonesHero}
        title="Explore Our Projects"
        desc="Discover exceptional projects across all our destinations."
        btn={false}
        icons={true}
      />

      <main className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        {loading && (
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-lg" />
          </div>
        )}

        {error && (
          <p className="py-10 text-center text-red-600">{error}</p>
        )}

        {!loading && !error && zones.length === 0 && (
          <p className="py-10 text-center">No zones found.</p>
        )}

        {!loading &&
          !error &&
          zones.map((zone) => (
            <section key={zone.id} className="mb-16">
              <div className="mb-6 border-b pb-4">
                <h2 className="text-3xl font-semibold text-gray-900">
                  {zone.name_en}
                </h2>

                <p className="mt-2 text-gray-600">
                  {zone.description_en}
                </p>
              </div>

              {zone.projects?.length > 0 ? (
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                  {zone.projects.map((project) => (
                    <article
                      key={project.id}
                      className="overflow-hidden rounded-lg bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <img
                        src={project.images?.[0]}
                        alt={project.name_en}
                        className="h-64 w-full object-cover"
                      />

                      <div className="p-5">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {project.name_en}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                          {project.description_en}
                        </p>

                        <Link
                          to={`/projects/${project.id}`}
                          className="mt-5 inline-block rounded-md bg-red-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-800"
                        >
                          View Details
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No projects available in this zone.
                </p>
              )}
            </section>
          ))}
      </main>
    </>
  );
}