import { RevealOnScroll } from "../RevealOnScroll";
import { ContactForm } from "../ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  // const element = <FontAwesomeIcon icon={faEnvelope} />;

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="grid grid-cols-2 max-w-3xl gap-4">
          <div className="my-card p-6">
            <h2 className="my-underline-primary text-2xl my-6">Get In Touch</h2>
            {/* Find me on <FontAwesomeIcon icon={faLinkedin} size="xl" bounce />{" "}
          <FontAwesomeIcon icon={faGithub} size="xl" /> */}

            <p>
              Whether you have a project idea, want to discuss data engineering,
              or just want to say hello, I'd love to hear from you! <br />
              <br />
              <strong>Email</strong>: sanskar.dikshit11@gmail.com <br />
              <strong>Phone/Whatsapp</strong>: +91-8527873619 <br />
            </p>
            <div className="flex justify-center m-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sanskardikshit/"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  className="border my-border-primary m-3 p-3 hover:bg-white/5"
                />
              </a>
              <a target="_blank" href="https://github.com/sanskardev">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  className="border my-border-primary m-3 p-3 hover:bg-white/5"
                />
              </a>
            </div>
          </div>
          <div class="my-card p-6">
            <h2 className="text-xl my-6">Or shoot a message now!</h2>
            <ContactForm />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
