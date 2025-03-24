import { Link } from "react-router-dom";
import ResumeURL from "../../assets/Sanskar_Dikshit_Resume_2025.pdf";

export const HomeContent = () => {
  return (
    <div>
      <h1 className="my-text-black text-right px-10 py-10">
        Hi, my name is <span className="font-bold">Sanskar Dikshit</span>
      </h1>
      <div className="ml-auto my-bg-primary w-10 h-2"></div>
      <p className="my-text-black text-lg mb-8 min-w-100 mx-auto my-10 text-right">
        I am a{" "}
        <Link to="/professional-experience">
          <a className="underline">Data Engineer</a>
        </Link>
        <br />
        who{" "}
        <Link to="/creative-works">
          <a className="underline">creates videos on the internet.</a>
        </Link>
      </p>
      <div className="flex justify-end space-x-4">
        <a
          href={ResumeURL}
          className="border my-border-primary my-text-primary py-3 px-6 rounded-full font-medium transition-all duration-200 relative overlow-hidden hover:-translate-y-0.5 hover:my-bg-primary/10"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="my-bg-primary my-text-white py-3 px-6 rounded-full font-medium transition relative overlow-hidden hover:-translate-y-0.5 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};
