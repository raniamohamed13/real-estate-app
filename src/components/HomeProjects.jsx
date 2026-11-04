import { Link } from "react-router-dom";

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
  },
  {
    id: "home-2",
    title: "Hayah City",
    developer: "Hayah Development",
    location: "New Cairo",
    image: image8,
  },
  {
    id: "home-3",
    title: "Palm Hills Residence",
    developer: "Palm Hills Developments",
    location: "New Cairo",
    image: frame2,
  },
];

export default function HomeProjects() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-9 text-center">
          <h2 className="font-serif text-2xl font-bold text-black md:text-3xl">
            Future Landmarks
          </h2>

          <div className="mx-auto mt-2 h-[5px] w-52 rounded-full bg-[#c84949]" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-gray-200 bg-white p-2.5 shadow-md transition duration-300 hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[240px] w-full object-cover sm:h-[220px] lg:h-[240px]"
                />

                <span className="absolute right-2 top-5 rounded bg-[#981717] px-3 py-1 text-sm text-white">
                  {project.location}
                </span>
              </div>

              <div className="flex min-h-[82px] items-center gap-3 px-2 py-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8eeee] text-xl font-bold text-[#981717]">
                  {project.developer.charAt(0)}
                </div>

                <div>
                  <h3 className="font-serif text-base font-bold text-[#292323]">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {project.developer}
                  </p>
                </div>
              </div>

              <Link
                to={`/static-projects/${project.id}`}
                className="mt-1 flex w-full items-center justify-center rounded-lg border border-[#b91c1c] px-4 py-2 text-sm text-[#981717] transition hover:bg-[#981717] hover:text-white"
              >
                View Details
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-3 w-12 rounded-full bg-[#981717]" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
