import { Link } from "react-router-dom";

export const ContactButton = () => {
  return (
    <>
      <Link
        to="/contact-me"
        className="my-bg-primary text-white py-3 px-6 font-medium transition relative overlow-hidden hover:my-glow-primary"
      >
        Connect
      </Link>
    </>
  );
};
