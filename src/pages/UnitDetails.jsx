import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/api";

export default function UnitDetails() {
  const { id } = useParams();

  const [unit, setUnit] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUnit() {
      try {
        setLoading(true);
        setError("");

        // The API returns an array of units.
        const response = await api.get("/unit", {
          params: { sort: "asc" },
        });

        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];

        const foundUnit = data.find((item) => item.id === id);

        if (!foundUnit) {
          setError("Unit not found.");
          return;
        }

        setUnit(foundUnit);
        setSelectedImage(foundUnit.images?.[0] || "");
      } catch (err) {
        console.error("Error fetching unit details:", err);
        setError("Failed to load unit details.");
      } finally {
        setLoading(false);
      }
    }

    fetchUnit();
  }, [id]);

  const formatPrice = (price) =>
    `${Number(price).toLocaleString("en-US")} EGP`;

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-red-800" />
      </div>
    );
  }

  if (error || !unit) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
        <p className="text-lg text-red-600">
          {error || "Unit not found."}
        </p>

        <Link
          to="/units"
          className="rounded-md bg-red-800 px-6 py-3 text-white hover:bg-red-900"
        >
          Back to Units
        </Link>
      </div>
    );
  }

  const images = unit.images?.length ? unit.images : [];

  return (
    <main className="min-h-screen bg-white px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/units"
          className="mb-6 inline-block text-sm text-red-800 hover:underline"
        >
          ← Back to Units
        </Link>

        {/* Main image */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
          <div className="overflow-hidden rounded-xl lg:col-span-4">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={unit.title_en}
                className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[480px]"
              />
            ) : (
              <div className="flex h-72 items-center justify-center bg-gray-100 text-gray-500">
                No image available
              </div>
            )}
          </div>

          {/* Image gallery */}
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden rounded-lg border-2 ${
                selectedImage === image
                  ? "border-red-800"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`${unit.title_en} ${index + 1}`}
                className="h-24 w-full object-cover transition hover:opacity-80"
              />
            </button>
          ))}
        </div>

        {/* Title and price */}
        <section className="mt-8">
          <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-start">
            <div>
              <h1 className="text-3xl font-bold text-red-800">
                {unit.title_en}
              </h1>

              <p className="mt-2 text-gray-500">
                {unit.projectName_en} · {unit.zoneName_en}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Developer: {unit.developerName_en || "Not specified"}
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-2xl font-semibold text-gray-700">
                {formatPrice(unit.price)}
              </p>

              <span className="mt-2 inline-block rounded bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {unit.status}
              </span>
            </div>
          </div>
        </section>

        {/* Details and description */}
        <section className="grid grid-cols-1 gap-10 py-8 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              At a glance
            </h2>

            <div className="space-y-4 text-gray-600">
              <p className="flex justify-between gap-4 border-b pb-3">
                <span>Property Size</span>
                <strong className="text-gray-900">
                  {unit.size} m²
                </strong>
              </p>

              <p className="flex justify-between gap-4 border-b pb-3">
                <span>Bedrooms</span>
                <strong className="text-gray-900">
                  {unit.bedrooms}
                </strong>
              </p>

              <p className="flex justify-between gap-4 border-b pb-3">
                <span>Bathrooms</span>
                <strong className="text-gray-900">
                  {unit.bathrooms}
                </strong>
              </p>

              <p className="flex justify-between gap-4 border-b pb-3">
                <span>Project</span>
                <strong className="text-gray-900">
                  {unit.projectName_en}
                </strong>
              </p>

              <p className="flex justify-between gap-4 border-b pb-3">
                <span>Zone</span>
                <strong className="text-gray-900">
                  {unit.zoneName_en}
                </strong>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-5 text-xl font-bold text-gray-900">
              Overview
            </h2>

            <p className="whitespace-pre-line leading-8 text-gray-600">
              {unit.description_en}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Contact via WhatsApp
              </a>

              <a
                href="tel:"
                className="rounded-md border border-red-800 px-4 py-3 text-center text-sm font-semibold text-red-800 transition hover:bg-red-800 hover:text-white"
              >
                Call
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}