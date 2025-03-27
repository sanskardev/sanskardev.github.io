import { RevealOnScroll } from "../RevealOnScroll";
import { HomeContent } from "../HomeContent";
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
          <div className="flex justify-end translate-x-50">
            <img
              src={ProfileImage}
              alt="photo"
              className="z-20 h-60 w-60 rounded-full object-scale-down translate-y-10 rotate-10 border-white border-5"
            />

            <div class="piechart h-35 -translate-x-20 rotate-300 my-glow-animation">
              <div class="slice slice1"></div>
              <div class="slice slice2"></div>
              <div class="slice slice3"></div>
              <div class="slice slice4"></div>
            </div>
            <div class="piechart h-45 -translate-x-80 translate-y-52 rotate-60 my-glow-animation">
              <div class="slice slice1"></div>
              <div class="slice slice2"></div>
              <div class="slice slice3"></div>
              <div class="slice slice4"></div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
