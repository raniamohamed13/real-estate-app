
// import Hero from "../components/Hero";
// import homeHero from "../assets/hero.png";
// import HomeSections from "../components/HomeSections";

// import aboutImage from "../assets/Frame 10.png";
// import propertyIcon from "../assets/Apartment.png";
// import investmentIcon from "../assets/your-investment-icon.png";
// import clientsIcon from "../assets/your-clients-icon.png";
// import satisfactionIcon from "../assets/your-satisfaction-icon.png";

// import property1 from "../assets/property1.png";
// import property2 from "../assets/property2.png";
// import property3 from "../assets/property3.png";
// import egyptMap from "../assets/egyptMap.png";

// export default function Home() {
//   const projects = [
//     {
//       title: "Palm Hills Office No.3",
//       image: property1,
//     },
//     {
//       title: "Hacienda Duplex No.4",
//       image: property2,
//     },
//     {
//       title: "Sawary Family Villa",
//       image: property3,
//     },
//   ];

//   return (
//     <>
//       {/* Hero */}
//       <Hero
//         bg={homeHero}
//         title={
//           <>
//             Redefining the Horizon
//             <br />
//             of Modern Luxury Living
//           </>
//         }
//         desc="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest."
//         btn={true}
//         btnContent="Explore"
//         icons={true}
//       />

//       {/* About + Benchmarks + Masterpieces + Locations */}
//       <HomeSections
//         aboutImage={aboutImage}
//         propertyIcon={propertyIcon}
//         investmentIcon={investmentIcon}
//         clientsIcon={clientsIcon}
//         satisfactionIcon={satisfactionIcon}
//         projects={projects}
//         mapImage={egyptMap}
//       />
//     </>
//   );
// }
// import { useEffect, useState } from "react";

// import Hero from "../components/Hero";
// import homeHero from "../assets/hero.png";
// import HomeSections from "../components/HomeSections";
// import api from "../utils/api";

// import aboutImage from "../assets/Frame 10.png";
// import propertyIcon from "../assets/Apartment.png";
// import investmentIcon from "../assets/your-investment-icon.png";
// import clientsIcon from "../assets/your-clients-icon.png";
// import satisfactionIcon from "../assets/your-satisfaction-icon.png";

// import property1 from "../assets/property1.png";
// import property2 from "../assets/property2.png";
// import property3 from "../assets/property3.png";
// import egyptMap from "../assets/egyptMap.png";
// import HomeProjects from "../components/HomeProjects";
// export default function Home() {
//   const [developers, setDevelopers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const projects = [
//     {
//       title: "Palm Hills Office No.3",
//       image: property1,
//     },
//     {
//       title: "Hacienda Duplex No.4",
//       image: property2,
//     },
//     {
//       title: "Sawary Family Villa",
//       image: property3,
//     },
//   ];

//   useEffect(() => {
//     const fetchDevelopers = async () => {
//       try {
//         const response = await api.get("/developer");
//         setDevelopers(response.data);
//       } catch (err) {
//         console.error("Error fetching developers:", err);
//         setError("Failed to load developers. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDevelopers();
//   }, []);

//   return (
//     <>
//       {/* Hero */}
//       <Hero
//         bg={homeHero}
//         title={
//           <>
//             Redefining the Horizon
//             <br />
//             of Modern Luxury Living
//           </>
//         }
//         desc="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest."
//         btn={true}
//         btnContent="Explore"
//         icons={true}
//       />

//       {/* About + Benchmarks + Masterpieces + Locations */}
//       <HomeSections
//         aboutImage={aboutImage}
//         propertyIcon={propertyIcon}
//         investmentIcon={investmentIcon}
//         clientsIcon={clientsIcon}
//         satisfactionIcon={satisfactionIcon}
//         projects={projects}
//         mapImage={egyptMap}
//       />

//       {/* Developers and Projects from API - After Map */}
//       <section className="bg-white px-5 py-16 md:px-9 md:py-24">
//         <div className="mx-auto max-w-[1400px]">
//           {/* Section Title */}
//           <div className="mb-12 text-center">
//             <h2 className="font-serif text-2xl font-bold text-black md:text-3xl">
//               Our Developers & Projects
//             </h2>

//             <div className="mx-auto mt-2 h-[5px] w-36 rounded-full bg-[#c84949]" />
//           </div>

//           {/* Loading */}
//           {loading && (
//             <p className="py-10 text-center text-gray-500">
//               Loading developers and projects...
//             </p>
//           )}

//           {/* Error */}
//           {!loading && error && (
//             <p className="py-10 text-center text-red-600">
//               {error}
//             </p>
//           )}

//           {/* Empty State */}
//           {!loading && !error && developers.length === 0 && (
//             <p className="py-10 text-center text-gray-500">
//               No developers available.
//             </p>
//           )}

//           {/* Developers */}
//           {!loading && !error && developers.length > 0 && (
//             <div className="space-y-16">
//               {developers.map((developer) => (
//                 <div
//                   key={developer.id}
//                   className="border-b border-gray-200 pb-12 last:border-b-0"
//                 >
//                   {/* Developer Information */}
//                   <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10">
//                     {/* Developer Image */}
//                     {developer.images?.[0] && (
//                       <div className="h-[280px] overflow-hidden rounded-xl md:h-[350px]">
//                         <img
//                           src={developer.images[0]}
//                           alt={developer.name_en || "Developer"}
//                           className="h-full w-full object-cover"
//                           loading="lazy"
//                         />
//                       </div>
//                     )}

//                     {/* Developer Details */}
//                     <div>
//                       <h3 className="font-serif text-2xl font-bold text-black md:text-3xl">
//                         {developer.name_en}
//                       </h3>

//                       {developer.name_ar && (
//                         <p
//                           className="mt-2 text-lg text-[#971717]"
//                           dir="rtl"
//                         >
//                           {developer.name_ar}
//                         </p>
//                       )}

//                       {developer.description_en && (
//                         <p className="mt-4 leading-8 text-[#625b5b]">
//                           {developer.description_en}
//                         </p>
//                       )}

//                       {developer.description_ar && (
//                         <p
//                           className="mt-4 leading-8 text-[#625b5b]"
//                           dir="rtl"
//                         >
//                           {developer.description_ar}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Projects Title */}
//                   {developer.projects?.length > 0 && (
//                     <div className="mt-10">
//                       <h4 className="mb-6 font-serif text-xl font-bold text-black md:text-2xl">
//                         Our Projects
//                       </h4>

//                       {/* Projects Grid */}
//                       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                         {developer.projects.map((project) => (
//                           <article
//                             key={project.id}
//                             className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-lg"
//                           >
//                             {/* Project Image */}
//                             {project.images?.[0] && (
//                               <img
//                                 src={project.images[0]}
//                                 alt={project.name_en || "Project"}
//                                 className="h-[230px] w-full object-cover"
//                                 loading="lazy"
//                               />
//                             )}

//                             {/* Project Details */}
//                             <div className="p-5">
//                               <h5 className="text-lg font-bold text-black">
//                                 {project.name_en}
//                               </h5>

//                               {project.name_ar && (
//                                 <p
//                                   className="mt-1 text-[#971717]"
//                                   dir="rtl"
//                                 >
//                                   {project.name_ar}
//                                 </p>
//                               )}

//                               {project.description_en && (
//                                 <p className="mt-3 leading-7 text-[#625b5b]">
//                                   {project.description_en}
//                                 </p>
//                               )}

//                               {project.description_ar && (
//                                 <p
//                                   className="mt-3 leading-7 text-[#625b5b]"
//                                   dir="rtl"
//                                 >
//                                   {project.description_ar}
//                                 </p>
//                               )}

//                               {/* Additional Project Images */}
//                               {project.images?.length > 1 && (
//                                 <div className="mt-4 grid grid-cols-2 gap-3">
//                                   {project.images.slice(1).map((image, index) => (
//                                     <img
//                                       key={`${project.id}-${index}`}
//                                       src={image}
//                                       alt={`${project.name_en || "Project"} ${index + 2}`}
//                                       className="h-24 w-full rounded-lg object-cover"
//                                       loading="lazy"
//                                     />
//                                   ))}
//                                 </div>
//                               )}
//                             </div>
//                           </article>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* No Projects */}
//                   {(!developer.projects ||
//                     developer.projects.length === 0) && (
//                     <p className="mt-6 text-gray-500">
//                       No projects available for this developer.
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

import Hero from "../components/Hero";
import HomeSections from "../components/HomeSections";
import HomeProjects from "../components/HomeProjects";

import homeHero from "../assets/hero.png";
import aboutImage from "../assets/Frame 10.png";
import propertyIcon from "../assets/Apartment.png";
import investmentIcon from "../assets/your-investment-icon.png";
import clientsIcon from "../assets/your-clients-icon.png";
import satisfactionIcon from "../assets/your-satisfaction-icon.png";

import property1 from "../assets/property1.png";
import property2 from "../assets/property2.png";
import property3 from "../assets/property3.png";
import egyptMap from "../assets/egyptMap.png";

export default function Home() {
  const projects = [
    {
      title: "Palm Hills Office No.3",
      image: property1,
    },
    {
      title: "Hacienda Duplex No.4",
      image: property2,
    },
    {
      title: "Sawary Family Villa",
      image: property3,
    },
  ];

  return (
    <>
      {/* Hero */}
      <Hero
        bg={homeHero}
        title={
          <>
            Redefining the Horizon
            <br />
            of Modern Luxury Living
          </>
        }
        desc="We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the luxury market to find a space that inspires your best work and your deepest rest."
        btn={true}
        btnContent="Explore"
        icons={true}
      />

      {/* About, Benchmarks, Masterpieces and Map */}
      <HomeSections
        aboutImage={aboutImage}
        propertyIcon={propertyIcon}
        investmentIcon={investmentIcon}
        clientsIcon={clientsIcon}
        satisfactionIcon={satisfactionIcon}
        projects={projects}
        mapImage={egyptMap}
      />

      {/* Static Future Landmarks */}
      <HomeProjects />
    </>
  );
}
