
import { Link, useParams } from "react-router-dom";

import image7 from "../assets/image 7.png";
import image8 from "../assets/image 8.png";
import frame2 from "../assets/framee2.png";

const projects = [
  {
    id: "home-1",
    title: "Palm Hills",
    developer: "Palm Hills Developments",
    location: "New Cairo",
    image: image7,
    description:
      "A premium residential destination offering modern design and a comfortable lifestyle.",
  },
  {
    id: "home-2",
    title: "Hayah City",
    developer: "Hayah Development",
    location: "New Cairo",
    image: image8,
    description:
      "A modern residential project designed to offer comfort and a welcoming community.",
  },
  {
    id: "home-3",
    title: "Palm Hills Residence",
    developer: "Palm Hills Developments",
    location: "New Cairo",
    image: frame2,
    description:
      "A distinguished residential destination combining contemporary architecture with elegant living.",
  },
];

export default function StaticProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="mb-5 text-2xl font-bold">Project not found</h2>

        <Link
          to="/"
          className="rounded-lg bg-red-700 px-6 py-3 text-white"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white px-5 py-12 md:px-10">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/"
          className="mb-8 inline-block text-red-700 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="h-[300px] w-full object-cover md:h-[500px]"
          />

          <div className="p-6 md:p-10">
            <span className="rounded-md bg-red-800 px-4 py-2 text-sm text-white">
              {project.location}
            </span>

            <h1 className="mt-6 text-3xl font-bold text-gray-900 md:text-4xl">
              {project.title}
            </h1>

            <p className="mt-3 text-lg text-gray-500">
              {project.developer}
            </p>

            <div className="mt-8 border-t pt-6">
              <h2 className="mb-3 text-xl font-bold">
                About Project
              </h2>

              <p className="leading-8 text-gray-600">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
