
export default function HomeSections({
  aboutImage,
  propertyIcon,
  investmentIcon,
  clientsIcon,
  satisfactionIcon,
  projects = [],
  mapImage,
}) {
  const benchmarks = [
    {
      icon: propertyIcon,
      number: "48",
      label: "Properties Managed",
    },
    {
      icon: investmentIcon,
      number: "90M",
      label: "Total Managed Investments",
    },
    {
      icon: clientsIcon,
      number: "500",
      label: "Happy Clients",
    },
    {
      icon: satisfactionIcon,
      number: "99%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white px-5 md:px-9">
      {/* Benchmarks of Success */}
      <section className="pb-16 pt-14 md:pb-24">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-black md:text-3xl">
            Benchmarks of Success
          </h2>
          <div className="mx-auto mt-2 h-[5px] w-36 rounded-full bg-[#c84949]" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benchmarks.map((item) => (
            <div
              key={item.label}
              className="flex min-h-[124px] flex-col items-center justify-center rounded-xl border border-[#dedada] bg-white px-3 py-4 shadow-md"
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt=""
                  className="mb-2 h-9 w-9 object-contain"
                />
              )}

              <h3 className="text-xl font-semibold text-black">
                {item.number}
              </h3>

              <p className="mt-2 text-center text-sm text-[#625b5b]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Grand Atlas */}
      <section className="pb-16 md:pb-24">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-black md:text-3xl">
            About Grand Atlas
          </h2>
          <div className="mx-auto mt-2 h-[5px] w-36 rounded-full bg-[#c84949]" />
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Property Image */}
          <div className="mx-auto h-[420px] w-full max-w-[673px] overflow-hidden rounded-tl-[70px] rounded-tr-[70px] sm:h-[520px] lg:ml-10 lg:h-[667px]">
            {aboutImage && (
              <img
                src={aboutImage}
                alt="Grand Atlas luxury residence"
                className="block h-full w-full object-cover"
              />
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col items-start lg:pl-3">
            <p className="text-justify text-base leading-8 text-[#625b5b] md:text-lg md:leading-9">
              We began with a singular, uncompromising vision: to bridge
              the gap between world-class architecture and the individuals
              who define our global culture. We recognized that for the
              discerning client, a home is rarely just a physical structure;
              it is a curated environment, a private gallery, and the
              ultimate expression of a life well-lived. Our journey started
              not in the pursuit of transactions, but in the pursuit of
              excellence. We set out to dismantle the traditional,
              high-volume real estate model in favor of a bespoke private
              office approach—one where quality always supersedes quantity,
              and where every client is treated as the sole focus of our
              firm. We don't just find you a home; we secure your peace of
              mind through a veil of absolute professional confidentiality.
            </p>

            <button
              type="button"
              className="mt-8 flex w-full max-w-[225px] items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#971717] to-[#c84949] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
            >
              Know More
              <span className="text-2xl leading-none">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Hand-Selected Masterpieces */}
      <section className="overflow-hidden bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-black md:text-[30px]">
              Hand-Selected Masterpieces
            </h2>
            <div className="mx-auto mt-2 h-[4px] w-[143px] rounded-full bg-[#c94242]" />
          </div>

          {projects.length > 0 ? (
            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4">
              {projects.map((project, index) => (
                <article
                  key={project.id ?? project.title ?? index}
                  className="w-[85%] shrink-0 snap-start sm:w-[442px]"
                >
                  <img
                    src={project.image}
                    alt={project.title || "Property"}
                    className="h-[260px] w-full rounded-lg object-cover shadow-sm sm:h-[358px]"
                  />

                  <h3 className="mt-3 font-serif text-base font-bold text-black">
                    {String(index + 1).padStart(2, "0")}. {project.title}
                  </h3>
                </article>
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-gray-500">
              Property images will appear here.
            </p>
          )}

          <div className="mt-5 flex justify-center gap-2">
            <span className="h-[7px] w-9 rounded-full bg-[#981717]" />
            <span className="h-[7px] w-[10px] rounded-full bg-gray-300" />
            <span className="h-[7px] w-[10px] rounded-full bg-gray-300" />
          </div>
        </div>
      </section>

      {/* Strategic Locations */}
      <section className="bg-white pb-16 pt-8">
        <div className="mb-5 text-center">
          <h2 className="font-serif text-2xl font-bold text-black md:text-[30px]">
            Strategic Locations
          </h2>
          <div className="mx-auto mt-2 h-[6px] w-[100px] rounded-full bg-[#c94242]" />
        </div>

        {mapImage ? (
          <img
  src={mapImage}
  alt="Strategic locations across Egypt"
  className="block h-[510px] w-full object-cover"
/>
        ) : (
          <p className="py-8 text-center text-gray-500">
            Map image will appear here.
          </p>
        )}
      </section>
    </main>
  );
}
