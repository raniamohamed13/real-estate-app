// import Hero from "../components/Hero";
// import unitHero from "../assets/about.png";

// export default function Units() {
//   return (
//     <Hero
//       bg={unitHero}
//       title={
//         <>
//           Discover Our
//           <br />
//           Luxury Units
//         </>
//       }
//       desc="Explore a collection of exceptional residences designed for modern luxury living."
//       btn={false}
//       icons={true}
//     />
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import unitHero from "../assets/about.png";
import api from "../utils/api";

export default function Units() {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    bedrooms: "",
    developerName: "",
    zoneName: "",
    projectName: "",
    status: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    async function fetchUnits() {
      try {
        const response = await api.get("/unit", {
          params: { sort: "asc" },
        });

        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];

        setUnits(data);
      } catch (err) {
        console.error("Error fetching units:", err);
        setError("Failed to load units. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchUnits();
  }, []);

  const updateFilter = (event) => {
    const { name, value } = event.target;

    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const filteredUnits = units.filter((unit) => {
    const searchText = filters.search.toLowerCase();

    const matchesSearch =
      !searchText ||
      [
        unit.title_en,
        unit.description_en,
        unit.projectName_en,
        unit.zoneName_en,
        unit.developerName_en,
      ].some((value) => value?.toLowerCase().includes(searchText));

    const matchesBedrooms =
      !filters.bedrooms ||
      unit.bedrooms === Number(filters.bedrooms);

    const matchesDeveloper =
      !filters.developerName ||
      unit.developerName_en === filters.developerName;

    const matchesZone =
      !filters.zoneName ||
      unit.zoneName_en === filters.zoneName;

    const matchesProject =
      !filters.projectName ||
      unit.projectName_en === filters.projectName;

    const matchesStatus =
      !filters.status || unit.status === filters.status;

    const matchesMinPrice =
      !filters.minPrice ||
      Number(unit.price) >= Number(filters.minPrice);

    const matchesMaxPrice =
      !filters.maxPrice ||
      Number(unit.price) <= Number(filters.maxPrice);

    return (
      matchesSearch &&
      matchesBedrooms &&
      matchesDeveloper &&
      matchesZone &&
      matchesProject &&
      matchesStatus &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });

  const uniqueValues = (key) =>
    [...new Set(units.map((unit) => unit[key]).filter(Boolean))];

  const formatPrice = (price) =>
    `${Number(price).toLocaleString("en-US")} EGP`;

  return (
    <>
      <Hero
        bg={unitHero}
        title={
          <>
            Discover Our
            <br />
            Luxury Units
          </>
        }
        desc="Explore a collection of exceptional residences designed for modern luxury living."
        btn={false}
        icons={true}
      />

      <section className="bg-white px-4 py-12 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Search and filters */}
          <div className="mb-10 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <input
                type="text"
                name="search"
                placeholder="Search property..."
                value={filters.search}
                onChange={updateFilter}
                className="input input-bordered w-full"
              />

              <select
                name="bedrooms"
                value={filters.bedrooms}
                onChange={updateFilter}
                className="select select-bordered w-full"
              >
                <option value="">All Bedrooms</option>
                {[...new Set(units.map((unit) => unit.bedrooms))]
                  .filter((value) => value !== undefined)
                  .sort((a, b) => a - b)
                  .map((number) => (
                    <option key={number} value={number}>
                      {number} Bedrooms
                    </option>
                  ))}
              </select>

              <select
                name="developerName"
                value={filters.developerName}
                onChange={updateFilter}
                className="select select-bordered w-full"
              >
                <option value="">All Developers</option>
                {uniqueValues("developerName_en").map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>

              <select
                name="zoneName"
                value={filters.zoneName}
                onChange={updateFilter}
                className="select select-bordered w-full"
              >
                <option value="">All Zones</option>
                {uniqueValues("zoneName_en").map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>

              <select
                name="projectName"
                value={filters.projectName}
                onChange={updateFilter}
                className="select select-bordered w-full"
              >
                <option value="">All Projects</option>
                {uniqueValues("projectName_en").map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>

              <select
                name="status"
                value={filters.status}
                onChange={updateFilter}
                className="select select-bordered w-full"
              >
                <option value="">All Statuses</option>
                {uniqueValues("status").map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <input
                type="number"
                name="minPrice"
                placeholder="Minimum Price"
                value={filters.minPrice}
                onChange={updateFilter}
                className="input input-bordered w-full"
              />

              <input
                type="number"
                name="maxPrice"
                placeholder="Maximum Price"
                value={filters.maxPrice}
                onChange={updateFilter}
                className="input input-bordered w-full"
              />
            </div>

            <button
              onClick={() =>
                setFilters({
                  search: "",
                  bedrooms: "",
                  developerName: "",
                  zoneName: "",
                  projectName: "",
                  status: "",
                  minPrice: "",
                  maxPrice: "",
                })
              }
              className="btn mt-4 border-red-800 bg-red-800 text-white hover:bg-red-900"
            >
              Clear Filters
            </button>
          </div>

          {/* Units */}
          {loading && (
            <div className="flex justify-center py-16">
              <span className="loading loading-spinner loading-lg text-red-800" />
            </div>
          )}

          {error && (
            <p className="py-10 text-center text-red-600">{error}</p>
          )}

          {!loading && !error && filteredUnits.length === 0 && (
            <p className="py-16 text-center text-gray-500">
              No units match your search.
            </p>
          )}

          {!loading && !error && filteredUnits.length > 0 && (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredUnits.map((unit) => (
                <article
                  key={unit.id}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={unit.images?.[0] || unitHero}
                      alt={unit.title_en || "Property"}
                      className="h-60 w-full object-cover"
                    />

                    <span
                      className={`absolute right-3 top-3 rounded px-3 py-1 text-xs font-semibold text-white ${
                        unit.status === "AVAILABLE"
                          ? "bg-green-600"
                          : "bg-gray-600"
                      }`}
                    >
                      {unit.status || "N/A"}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-semibold text-red-800">
                        {unit.title_en || "Property Unit"}
                      </h2>

                      <span className="shrink-0 text-sm font-semibold text-gray-700">
                        {formatPrice(unit.price)}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {unit.projectName_en} · {unit.zoneName_en}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 border-y border-gray-100 py-3 text-sm text-gray-600">
                      <span>📐 {unit.size} m²</span>
                      <span>🛏️ {unit.bedrooms} Bedrooms</span>
                      <span>🛁 {unit.bathrooms} Bathrooms</span>
                    </div>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {unit.description_en}
                    </p>

                    <Link
                      to={`/units/${unit.id}`}
                      className="mt-5 block rounded-md border border-red-800 py-2.5 text-center text-sm font-medium text-red-800 transition hover:bg-red-800 hover:text-white"
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
    </>
  );
}