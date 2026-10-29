

// import { useEffect, useState } from "react";
// import Hero from "../components/Hero";
// import developersHero from "../assets/Dev.png";
// import api from "../utils/api";

// export default function Developers() {
//  const  [developers,setDevelopers]=useState([])
//  const [loading,setLoading]=useState(true)

// async function getDevelopers() {
//   try{
//     let response= await api.get('/developer')
//     console.log(response.data)
//     setDevelopers(response.data)
//     setLoading(false)
//     console.log(developers)
//   }
//   catch(error){
//      console.log(error)
//      setLoading(false)

//   }
  
// }
//   useEffect(() => {
//     getDevelopers()
//   }, [developers])

  
// return (
//     <>
//        <div>
//         <Hero
//           bg={developersHero}
//           title={'Defining the Future Skyline.'}
//           desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
//           btnContent="Learn More"
//           btn={false}
//           icons={true}
//         />
//       </div>
//       {loading && <h1 className="text-center text-red-200">loading</h1>}

//       {!loading &&
//         developers.map((developer) => (
//           <div key={developer.id}>
//             <img
//               src={developer.images?.[0]}
//               alt={developer.name_en}
//               className="size-48"
//             />
//             <h1>{developer.name_en}</h1>
//             <p>{developer.description_en}</p>
//           </div>
//         ))}

   
//     </>
//   )
// }




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import developersHero from "../assets/Dev.png";
import api from "../utils/api";

export default function Developers() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getDevelopers() {
      try {
        const response = await api.get("/developer");
        setDevelopers(
          Array.isArray(response.data) ? response.data : []
        );
      } catch (err) {
        console.error("Failed to fetch developers:", err);
        setError("Failed to load developers. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    getDevelopers();
  }, []);

  return (
    <>
      <Hero
        bg={developersHero}
        title="Defining the Future Skyline."
        desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
        btn={false}
        icons={true}
      />

      <section className="bg-white px-5 py-12 md:px-12 lg:px-16">
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900">
          Our Developers
        </h2>

        {loading && (
          <p className="py-10 text-center text-gray-500">
            Loading developers...
          </p>
        )}

        {error && (
          <p className="py-10 text-center text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && developers.length === 0 && (
          <p className="py-10 text-center text-gray-500">
            No developers found.
          </p>
        )}

        {!loading && !error && developers.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developers.map((developer) => (
              <article
                key={developer.id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img
                    src={developer.images?.[0] || developersHero}
                    alt={developer.name_en || "Developer"}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-3 text-xl font-semibold text-red-800">
                    {developer.name_en || developer.name_ar}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {developer.description_en ||
                      developer.description_ar ||
                      "Discover our developer projects."}
                  </p>

                  <Link
                    to={`/developers/${developer.id}`}
                    className="block rounded-md border border-red-800 px-4 py-2.5 text-center text-sm font-medium text-red-800 transition hover:bg-red-800 hover:text-white"
                  >
                    View Projects
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
