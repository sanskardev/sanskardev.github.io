import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import _ from "lodash";
import YouTube from "react-youtube";

export const CreativeWorks = () => {
  const ytVideoList = [
    {
      type: "Youtube Video",
      title: "Violet vs purple? What is the difference?",
      id: "bgZOKktpny0",
    },
    {
      type: "Youtube Video",
      title: "What are the Real Primary Colors? RGB vs CMYK vs RYB",
      id: "3LfVSDJ9hLM",
    },
    {
      type: "Youtube Video",
      title: "Linked Lists under 5 minutes (with bad camera quality)",
      id: "2iuDpUGRWM8",
    },
  ];

  const blogPostList = [
    {
      type: "Blog Post",
      title: "Così è la vita",
      content:
        "Kisi european desh me \\ Woh Banarasi ladka khada tha. \\ Ganga maiya ke bhes me \\ Samudra bhadka pada tha. \\ ...",
      url: "https://isanskari.home.blog/2025/03/27/european-banarasi/",
    },
    {
      type: "Blog Post",
      title: "बेपरवाही",
      content:
        "लापरवाही को बेपरवाही बुला रहा हूँ, मैं झूठ बेच रहा हूँ, \\ दौड़ता हूँ कह रहा हूँ, पर सिर्फ गिर रहा हूँ, \\बागबान की तस्वीर हूँ, पर बक्से में जी रहा हूँ, \\ ...",
      url: "https://isanskari.home.blog/2024/01/15/%e0%a4%ac%e0%a5%87%e0%a4%aa%e0%a4%b0%e0%a4%b5%e0%a4%be%e0%a4%b9%e0%a5%80/",
    },
    {
      type: "Blog Post",
      title: "The City Lights",
      content:
        "I can see the skyline of the city right now. I can see all of the millions of people’s homes. I can see all ...",
      url: "https://isanskari.home.blog/2019/10/23/the-city-lights/",
    },
  ];

  const [isSelectedYT, setisSelectedYT] = useState(false);
  const [isSelectedBlog, setisSelectedBlog] = useState(false);

  const ytOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      showinfo: 0,
      rel: 2,
    },
  };

  return (
    <section
      id="creativeworks"
      className={`min-h-screen flex justify-center py-20 relative`}
    >
      <div
        className={`max-w-5xl absolute ${
          !isSelectedBlog &&
          !isSelectedYT &&
          " top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <RevealOnScroll>
          <div className="p-6">
            <p className="text-2xl/10 min-w-100 mx-auto my-10 transition-all">
              Just like this website, which came to life during an especially
              dull weekend, I've spent other weekends working on projects like a{" "}
              <span
                className="click-animation hover:my-text-primary border my-border-primary cursor-pointer"
                onClick={() => {
                  setisSelectedBlog(!isSelectedBlog);
                }}
              >
                blog
              </span>{" "}
              and a{" "}
              <span
                className="click-animation hover:my-text-primary border my-border-primary cursor-pointer"
                onClick={() => {
                  setisSelectedYT(!isSelectedYT);
                }}
              >
                YouTube channel
              </span>
              .
            </p>
          </div>
          <div
            className={`grid grid-cols-2 gap-4 ${
              !isSelectedBlog && !isSelectedYT && "hidden"
            }`}
          >
            <div
              className={`transition-opacity duration-500 ${
                !isSelectedBlog && "opacity-0"
              }`}
            >
              <p className="text-2xl/10 min-w-100 mx-auto my-2">
                Visit{" "}
                <a
                  target="_blank"
                  href="https://isanskari.home.blog/"
                  class="my-underline-primary hover:my-text-primary"
                >
                  isanskari.home.blog/
                </a>{" "}
                <p class="text-lg">*featured blog posts*</p>
              </p>
              {blogPostList.map((item, key) => (
                <div key={key} className={"my-card p-6"}>
                  <span className="my-pill">{item.type}</span>
                  <div className="my-card my-4 p-2">
                    <h3 className="text-xl my-4">{item.title}</h3>
                    {item.content}
                    <a
                      href={item.url}
                      target="_blank"
                      className="block my-3 my-text-primary hover:my-text-white transition-colors"
                    >
                      Go to post →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`transition-opacity duration-500 ${
                !isSelectedYT && "opacity-0"
              }`}
            >
              <p className="text-2xl/10 min-w-100 mx-auto my-2">
                Visit{" "}
                <a
                  target="_blank"
                  href="https://www.youtube.com/@isanskari"
                  class="my-underline-primary hover:my-text-primary"
                >
                  youtube.com/@isanskari
                </a>{" "}
                <p class="text-lg">*featured youtube videos*</p>
              </p>
              {ytVideoList.map((item, key) => (
                <div key={key} className={"my-card p-6"}>
                  <span className="my-pill">{item.type}</span>
                  <YouTube
                    className={"my-6"}
                    videoId={item.id}
                    opts={ytOptions}
                    onReady={(event) => {
                      event.target.pauseVideo();
                    }}
                  />
                  <h3 className="text-xl">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
