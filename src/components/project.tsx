import Image from "next/image";
import { Chip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Work(props: any) {
  const lastPadding = props.last ? " mb-20" : "";
  return (
    <div className={"mt-8 m-auto" + lastPadding}>
      <div className="flex justify-between">
        {props.link ? (
          <a
            href={props.link}
            target="_blank"
            className="w-fit inline-flex mb-2 group color-hover "
          >
            <h3 className="md:text-lg font-semibold mr-2">{props.title}</h3>
            <FontAwesomeIcon
              icon={faExternalLink}
              // size="lg"
              color="#505260"
              className="fa-beat-hover hover:cursor-pointer mx-0 my-1"
            />
          </a>
        ) : (
          <h3 className="md:text-lg font-semibold mb-2 mr-2">{props.title}</h3>
        )}
      </div>

      <Image src={props.image} alt={props.imageAlt} />
      <p className="text-sm md:text-base">{props.description}</p>
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
          props.techList.map((tech: string, i: number) => (
            <Chip className={"mr-2 mt-2 text-sm md:text-base"} label={tech} key={tech + i} />
          ))}
      </div>
    </div>
  );
}
