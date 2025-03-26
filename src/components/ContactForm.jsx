import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactForm = () => {
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
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            required
            value={formData.name}
            type="text"
            id="name"
            name="name"
            placeholder="Ashok Kumar"
            className="my-form"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            className="my-form"
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
            className="my-form"
            rows="4"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="w-full my-bg-primary text-white py-3 px-6 font-medium transition relative overflow-hidden hover:my-glow-primary"
        >
          Send Message
        </button>
      </form>
    </>
  );
};
