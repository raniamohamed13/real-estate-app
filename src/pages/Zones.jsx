
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import zonesHero from "../assets/zone.png";
import api from "../utils/api";
export default function Zones() {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getZones() {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/zone");
      const data = response.data;

      if (Array.isArray(data)) {
        setZones(data);
      } else if (Array.isArray(data?.data)) {
        setZones(data.data);
      } else {
        setZones([]);
      }
    } catch (err) {
      console.error("Error fetching zones:", err);
      setError("Failed to load zones. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getZones();
  }, []);

  return (
    <>
      <Hero
        bg={zonesHero}
        title="Destinations Defined by Distinction"
        desc="From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."
        btnContent="Learn More"
        btn={false}
        icons={true}
      />

      <section className="px-5 py-16 md:px-10">
        {loading && (
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-lg" />
          </div>
        )}

        {!loading && error && (
          <div className="py-10 text-center">
            <p className="mb-4 text-red-600">{error}</p>

            <button
              onClick={getZones}
              className="rounded-md bg-black px-6 py-3 text-white"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && zones.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            No zones found.
          </p>
        )}

        {!loading && !error && zones.length > 0 && (
         <div className="grid grid-cols-1 gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
  {!loading &&
    zones.map((zone) => (
      <Link
        to={`/zones/${zone.id}`}
        key={zone.id}
        className="group overflow-hidden rounded-lg shadow-md transition hover:-translate-y-1 hover:shadow-xl"
      >
        <img
          src={zone.images?.[0]}
          alt={zone.name_en}
          className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="p-4">
          <h2 className="text-xl font-semibold">{zone.name_en}</h2>
          <p className="mt-2 text-gray-600">{zone.description_en}</p>
          <span className="mt-3 inline-block text-sm font-semibold text-red-700">
            Explore Projects →
          </span>
        </div>
      </Link>
    ))}
</div>
        )}
      </section>
    </>
  );
}