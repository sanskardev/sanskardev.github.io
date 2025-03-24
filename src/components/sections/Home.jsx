import { RevealOnScroll } from "../RevealOnScroll";
import { HomeContent } from "./HomeContent";
import ProfileImage from "../../assets/profile image.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-20 grid md:grid-cols-2 grid-cols-1">
          <HomeContent />
          <div className="flex justify-end">
            <img
              src={ProfileImage}
              alt="photo"
              className="h-50 rounded-full object-scale-down md:translate-x-10 md:translate-y-10 sm:translate-y-20 sm:translate-x-20"
            />
            <div className="piechart w-25 h-25 md:-translate-x-10 md:translate-y-0 sm:translate-y-10"></div>
            <div className="piechart w-35 h-35 rotate-120 md:-translate-x-47 md:translate-y-43 sm:-translate-x-38 sm:translate-y-54"></div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
