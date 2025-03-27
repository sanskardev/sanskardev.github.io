import { Link } from "react-router-dom";
import ResumeURL from "../assets/Sanskar_Dikshit_Resume_2025.pdf";
import { ContactButton } from "./ContactButton";

export const HomeContent = () => {
  return (
    <div className="container">
      <div className="relative w-auto h-2">
        <div className="ml-auto my-bg-primary w-16 h-2 my-glow-primary line-animate"></div>
      </div>
      <h1 className="text-right px-10">
        Hi, I'm <span className="font-bold">Sanskar.</span>
      </h1>

      <p className="text-2xl/10 min-w-100 mx-auto my-10 text-right">
        No{" "}
        <Link
          to="/professional-experience"
          className="hover:my-text-primary border my-border-primary"
        >
          Data Engineer
        </Link>{" "}
        really <i>needs</i> a website, <br /> but hey, weekends are for{" "}
        <Link
          to="/creative-works"
          className="border my-border-primary hover:my-text-primary"
        >
          fun projects
        </Link>
        !
      </p>

      <div className="flex justify-end space-x-4 my-10 ">
        <a
          href={ResumeURL}
          target="_blank"
          className="border my-border-primary my-text-primary py-3 px-6 font-medium transition-all duration-200 relative overlow-hidden my-underline-primary hover:bg-white"
        >
          Download Resume
        </a>
        <ContactButton />
      </div>
    </div>
  );
};
