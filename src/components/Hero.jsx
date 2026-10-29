
import hero from "../assets/hero.png";
import circle from "../assets/Ellipse 1.png";

import fb from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import tiktok from "../assets/tiktok.png";

export default function Hero({ bg, title, desc, btn, btnContent, icons }) {
  const socialIcons = [fb, instagram, x, tiktok];

  return (
    <section
      className="relative min-h-[650px] md:min-h-[calc(100vh-80px)] bg-cover bg-center flex items-center justify-center px-5 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bg || hero})`,
      }}
    >
      <div className="text-center text-white max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-8 text-base md:text-xl leading-8 max-w-5xl mx-auto">
          {desc}
        </p>

        {btn && (
          <a
            href="/services"
            className="inline-block mt-14 bg-gradient-to-r from-red-800 to-red-500 hover:from-red-900 hover:to-red-600 text-white text-xl font-semibold px-20 py-4 rounded-xl transition duration-300"
          >
            {btnContent}
          </a>
        )}
      </div>

      {icons && (
        <div className="absolute left-5 bottom-10 flex flex-col gap-4">
          {socialIcons.map((icon, index) => (
            <div
              key={index}
              className="relative w-12 h-12 flex items-center justify-center"
            >
              <img
                src={circle}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
              />

              <img
                src={icon}
                alt={["Facebook", "Instagram", "X", "TikTok"][index]}
                className="relative w-5 h-5 object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
