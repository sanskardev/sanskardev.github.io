import { Link } from "react-router-dom";

export const ContactButton = () => {
  return (
    <>
      <Link
        to="/contact-me"
        className="my-bg-primary text-white py-3 px-6 rounded-full font-medium transition relative overlow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_50px_#ff554d]"
      >
        Connect With Me
      </Link>
    </>
  );
};
