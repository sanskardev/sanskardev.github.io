import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text my-text-primary text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                required
                value={formData.name}
                type="text"
                id="name"
                name="name"
                placeholder="Ashok Kumar"
                className="w-full bg-white/5 border border-black/20 rounded-xl px-4 py-3 my-text-black transition focus:outline-none focus:my-border-primary"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                required
                value={formData.email}
                type="email"
                id="email"
                name="email"
                placeholder="ashok.kumar@example.com"
                className="w-full bg-white/5 border border-black/20 rounded-xl px-4 py-3 my-text-black transition focus:outline-none focus:my-border-primary"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                required
                value={formData.message}
                id="message"
                name="message"
                placeholder="Your message here..."
                className="w-full bg-white/5 border border-black/20 rounded-xl px-4 py-3 my-text-black transition focus:outline-none focus:my-border-primary"
                rows="4"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full my-bg-primary text-white py-3 px-6 rounded-xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
