
import Hero from "../components/Hero";
import homeHero from "../assets/hero.png";
import HomeSections from "../components/HomeSections";

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

      {/* About + Benchmarks + Masterpieces + Locations */}
      <HomeSections
        aboutImage={aboutImage}
        propertyIcon={propertyIcon}
        investmentIcon={investmentIcon}
        clientsIcon={clientsIcon}
        satisfactionIcon={satisfactionIcon}
        projects={projects}
        mapImage={egyptMap}
      />
    </>
  );
}
