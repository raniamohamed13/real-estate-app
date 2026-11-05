// export default function Footer() {
//   return (
//     <footer className="bg-[#1F1F1F] text-white py-6 px-4 text-center">
//       <p className="font-semibold tracking-wider">GRAND ATLAS</p>

//       <p className="text-sm text-gray-400 mt-2">
//         Luxury Real Estate
//       </p>

//       <p className="text-xs text-gray-500 mt-4">
//         © 2026 Grand Atlas. All rights reserved.
//       </p>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer
      data-theme="light"
      className="w-full bg-[#fafafa] px-5 pb-8 pt-16 text-[#111827] sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

        {/* Logo and Contact */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<img
  src={logo}
  alt="Grand Atlas Logo"
  className="mb-5 h-28 w-40 object-contain"
/>         
          <p className="text-lg font-medium">
            +1 (7635) 547-12-97
          </p>

          <a
            href="mailto:support@lift.agency"
            className="mt-5 text-lg transition hover:text-red-800"
          >
            support@lift.agency
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-bold">Quick Links</h3>

          <div className="flex flex-col gap-3 text-lg text-gray-500">
            <Link to="/home" className="transition hover:text-red-800">Home</Link>
<Link to="/units" className="transition hover:text-red-800">
  Units
</Link>            <Link to="/zones" className="transition hover:text-red-800">Zones</Link>
            <Link to="/developers" className="transition hover:text-red-800">Developers</Link>
            <Link to="/contactus" className="transition hover:text-red-800">Contact Us</Link>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="mb-5 text-xl font-bold">About</h3>

          <div className="flex flex-col gap-3 text-lg text-gray-500">
            <Link to="/home" className="transition hover:text-red-800">Grand Atlas</Link>
            <a href="#" className="transition hover:text-red-800">Privacy Policy</a>
            <a href="#" className="transition hover:text-red-800">Legal</a>
            <Link to="/contactus" className="transition hover:text-red-800">Help</Link>
            <Link to="/contactus" className="transition hover:text-red-800">Support</Link>
          </div>
        </div>

        {/* Newsletter and Social */}
        <div>
          <h3 className="mb-10 text-xl font-normal">Get In touch</h3>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full overflow-hidden rounded-lg border border-red-800"
          >
            <input
              type="email"
              placeholder="Get product updates"
              className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-red-800 px-5 text-2xl font-bold text-white transition hover:bg-red-900"
            >
              →
            </button>
          </form>

          <div className="mt-7 flex gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 font-bold text-red-800 transition hover:bg-red-800 hover:text-white"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 font-bold text-red-800 transition hover:bg-red-800 hover:text-white"
            >
              f
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 font-bold text-red-800 transition hover:bg-red-800 hover:text-white"
            >
              𝕏
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-200 pt-8 text-center">
        <p className="text-base text-[#111827]">
          © 2026 Grand Atlas. All rights reserved
        </p>
      </div>
    </footer>
  );
}
