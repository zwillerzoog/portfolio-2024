import Image from "next/image";
import headshot from "../../assets/headshot_pic.jpeg";
import emailIcon from "../../assets/icons8-Email.png";
import linkedInIcon from "../../assets/icons8-LinkedIn.png";
import githubIcon from "../../assets/icons8-GitHub.png";
import "./about.css";

export default function AboutMe() {
  return (
    <div className="about-page" id="about">
      <div className="about-box">
        <Image className="headshot" src={headshot.src} alt="Heidi headshot" />
        <p className="about">
          I'm a fullstack web developer with a passion for frontend and design.
          I have 6 years of experience making performant, accessible, and
          user-friendly React websites. <br /> <br /> In my freetime, you can
          find me taking a walk in a cool neighborhood or trying a new
          restaurant. I have a dog named Dr. McTodd and 2 rabbits, Tully and
          Suki.
        </p>
        <p className="about2"></p>
      </div>
      <nav className="contact">
        <div className="contact-links flex justify-around">
          <div className="contact-link contact-link-email group">
            <a href="mailto:marsh.heidi.c@gmail.com">
              <Image
                className="icon email"
                src={emailIcon.src}
                alt="email icon"
              />
              <p className="contact-description email-words hidden group-hover:block">
                Email Me!
              </p>
            </a>
          </div>
          <p className="contact-link contact-link-linkedin">
            <a href="https://www.linkedin.com/in/heidi-marsh-6054562a/">
              <Image
                className="icon linkedin"
                src={linkedInIcon.src}
                alt="Heidi headshot"
              />
            </a>
          </p>
          <p className="contact-link contact-link-github">
            <a href="https://www.github.com/zwillerzoog">
              <Image
                className="icon github"
                src={githubIcon.src}
                alt="Heidi headshot"
              />
            </a>
          </p>
        </div>
      </nav>
    </div>
  );
}
