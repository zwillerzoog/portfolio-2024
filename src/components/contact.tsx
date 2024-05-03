import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const style = {
    p: "hidden group-hover:block absolute",
    iconWrap: "group w-8 pr-5 pl-5",
  };

  let animationStyle: string = "";

  return (
    <div className="contact flex justify-around w-fit md:float-right md:mr-4">
      <div className={style.iconWrap}>
        <a href="mailto:marsh.heidi.c@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="lg"
            color="#505260"
            className="fa-beat-hover"
          />
        </a>
      </div>
      <div className={style.iconWrap}>
        <a href="https://www.linkedin.com/in/heidi-marsh">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            color="#505260"
            className="fa-beat-hover"
          />
        </a>
      </div>
      <div className={style.iconWrap}>
        <a href="https://www.github.com/zwillerzoog">
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            color="#505260"
            className="fa-beat-hover"
          />
        </a>
      </div>
    </div>
  );
}
