
import { useState } from "react";
import Hero from "../components/Hero";
import contactHero from "../assets/contact.png";
import api from "../utils/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      // غيّري المسار لو الـ API عندك بيستخدم endpoint مختلف
      await api.post("/contact", formData);

      setSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const contactDetails = [
    {
      icon: "✉",
      text: "rm5010167@gmail.com",
      href: "mailto:rm5010167@gmail.com",
    },
    {
      icon: "▯",
      text: "01150231313",
      href: "tel:01150231313",
    },
    {
      icon: "☎",
      text: "0453454821",
      href: "tel:0453454821",
    },
  ];

  return (
    <>
      <Hero
        bg={contactHero}
        title={
          <>
            Connected Globally.
            <br />
            Available Locally.
          </>
        }
        desc="With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."
        btn={false}
        icons={false}
      />

      <section className="bg-white px-5 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-black">
              Contact Information
            </h2>

            <p className="mb-6 text-sm leading-6 text-gray-500">
              Feel free to contact us for inquiries and more information.
              We are always happy to hear from you.
            </p>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-red-800">
                Rania Mohamed
              </h3>

              <div className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-red-800 transition hover:text-red-600"
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-3 text-base text-gray-500">
                Follow us on social media
              </h3>

              <div className="flex gap-3">
                {[
                  { label: "f", name: "Facebook", url: "https://facebook.com" },
                  { label: "𝕏", name: "X", url: "https://x.com" },
                  { label: "◎", name: "Instagram", url: "https://instagram.com" },
                  { label: "♪", name: "TikTok", url: "https://tiktok.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-red-800 text-sm text-red-800 transition hover:bg-red-800 hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-base text-gray-500">
                Working Hours
              </h3>

              <div className="space-y-2 text-sm">
                {[
                  ["Saturday", "9:00 AM - 5:00 PM"],
                  ["Sunday", "9:00 AM - 5:00 PM"],
                  ["Monday", "9:00 AM - 5:00 PM"],
                  ["Tuesday", "9:00 AM - 5:00 PM"],
                  ["Wednesday", "9:00 AM - 5:00 PM"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex gap-5">
                    <span className="w-20 text-red-800">{day}:</span>
                    <span className="text-gray-500">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-md md:p-8">
            <h2 className="mb-6 text-xl font-semibold text-black">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 outline-none focus:border-red-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 outline-none focus:border-red-700"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm text-gray-800"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  required
                  className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 outline-none focus:border-red-700"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full resize-y rounded-md border border-gray-300 bg-gray-50 px-3 py-2.5 outline-none focus:border-red-700"
                />
              </div>

              {success && (
                <p className="text-sm text-green-700">{success}</p>
              )}

              {error && (
                <p className="text-sm text-red-700">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-gradient-to-r from-red-800 to-red-500 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
