import { Link } from "react-router-dom";
import ResumeURL from "../../assets/Sanskar_Dikshit_Resume_2025.pdf";
import { ContactButton } from "../ContactButton";

export const HomeContent = () => {
  return (
    <div>
      <div className="ml-auto my-bg-primary w-10 h-2"></div>
      <h1 className="my-text-black text-right px-10">
        Hi, I'm <span className="font-bold">Sanskar.</span>
      </h1>

      <p className="my-text-black text-2xl/10 min-w-100 mx-auto my-10 text-right line">
        No{" "}
        <Link
          to="/professional-experience"
          className="hover:my-text-primary border my-border-primary"
        >
          /*Data Engineer*/
        </Link>{" "}
        really <i>needs</i> a website <br /> but hey, weekends are for{" "}
        <Link
          to="/creative-works"
          className="border my-border-primary hover:my-text-primary"
        >
          /*fun projects!*/
        </Link>{" "}
      </p>

      <div className="flex justify-end space-x-4 my-10 ">
        <a
          href={ResumeURL}
          target="_blank"
          className="border my-border-primary my-text-primary py-3 px-6 rounded-full font-medium transition-all duration-200 relative overlow-hidden bg-white/50 hover:bg-white"
        >
          Download Resume
        </a>
        <ContactButton />
      </div>
    </div>
  );
};
