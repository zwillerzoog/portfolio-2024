import Project from "../components/project";
import WorkTitle from "../components/WorkTitle";
import DME from "../assets/DME_homepage.png";

export default function Work() {
  return (
    <div id="work" className="mb-30">
      <div className="max-w-xl m-auto pt-20 mb-30">
        <h3
          className="mt-10 pt-10 text-2xl font-semibold text-center"
          id="experience"
        >
          EXPERIENCE
        </h3>
        <WorkTitle title="Bellese Technologies" time="2020 - Present" />
        <Project
          title="Medical Equipment & Supplier Directory"
          description="The beneficiary-facing application for Medicare patients to locate equipment and suppliers. I developed
          the frontend for this website and currently maintain it."
          link="https://www.medicare.gov/medical-equipment-suppliers/"
          img={DME}
          imgAlt="The homepage of the Medicare Medical Equipment & Supplier Directory"
          techList={[
            "React",
            "Javascript",
            "Redux",
            "Sass",
            "Jest",
            "Playwright",
            "Golang",
          ]}
        />
        <Project
          title="The Location Widget"
          description="The Medicare-wide Location Widget is a React component that can be ingested by Drupal 
          sites to provide users with a consistent and performant experience."
          link="https://www.medicare.gov/coverage/medicare-diabetes-prevention-program"
          img={DME}
          imgAlt="The homepage of the Medicare Medical Equipment & Supplier Directory"
          techList={[
            "React",
            "Javascript",
            "Redux",
            "Sass",
            "Jest",
            "Playwright",
            "Golang",
          ]}
        />
        <Project
          title="Related Health Services: Data Validation"
          description="The beneficiary facing Medicare page to assist beneficiaries in finding nearby medical equipment and suppliers"
          img={DME}
          imgAlt="The homepage of the Medicare Medical Equipment & Supplier Directory"
          techList={[
            "React",
            "Next.js",
            "Javascript",
            "Zustand",
            "Sass",
            "Jest",
          ]}
        />
        <WorkTitle title="Pyramid Systems" time="2019 - 2020" />
        <Project
          title="Customer Profile Management System"
          description="The internal website utilized by National Record Center employees for accessing the biographic and
          biometric data of individuals applying for immigration benefits."
          link="https://www.medicare.gov/medical-equipment-suppliers/"
          img={DME}
          imgAlt="The homepage of the Medicare Medical Equipment & Supplier Directory"
          techList={[
            "React",
            "Javascript",
            "Redux",
            "Sass",
            "Jest",
            "Playwright",
            "Golang",
          ]}
        />
        <WorkTitle title="Gama-1 Technologies" time="2018 - 2019" />
        <Project
          title="Joint Polar Satellite Systems"
          description="The public-facing website for the Joint Polar Satellite Systems project"
          link="https://www.medicare.gov/medical-equipment-suppliers/"
          img={DME}
          imgAlt="The homepage of the Medicare Medical Equipment & Supplier Directory"
          techList={[
            "React",
            "Javascript",
            "Redux",
            "Sass",
            "Jest",
            "Playwright",
            "Golang",
          ]}
        />
        <WorkTitle title="Current Fun Projects" time="Forever" />
        <Project
          title="This Website!"
          description={`My portfolio website AKA the website you are currently using. I built this with Next.js and 
          created the animations with CSS`}
          techList={["React", "Next.js", "Typescript", "Tailwind", "Jest"]}
        />
        <Project
          title="Quiddler"
          description={`I'm currently working on creating an online version of the card game "Quiddler" for my own use so I can play with my long distance friends!`}
          last={true}
        />
      </div>
    </div>
  );
}
