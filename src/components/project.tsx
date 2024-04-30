import { Chip } from "@mui/material";
import savage from "../assets/savage_screenshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Work(props: any) {
  const style = {
    link: "font-medium mr-4 underline color-hover",
  };
  const lastPadding = props.last ? " mb-20" : "";
  return (
    <div className={"mt-8 m-auto" + lastPadding}>
      <div className="flex justify-between">
        <h3
          className="text-lg font-semibold mb-2"  >
          {props.title}
        </h3>
        {props.link && (
          <a href={props.link} target="_blank">
            <FontAwesomeIcon
              icon={faExternalLink}
              size="lg"
              color="#505260"
              className="fa-beat-hover hover:cursor-pointer"
            />
          </a>
        )}
      </div>

      <img src={props.image} alt={props.imageAlt} />
      <p className="">{props.description}</p>
      <div className="flex">
        {props.source && (
          <a href={props.source} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              color="#505260"
              className="fa-beat-hover"
            />
          </a>
        )}
      </div>
      <div>
        {props.techList &&
          props.techList.map((tech: string) => (
            <Chip className={"mr-2 mt-2"} label={tech} />
          ))}
      </div>
    </div>
  );
}
