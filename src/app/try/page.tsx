import Header from "../header";
import AboutMe from "../../components/About";
import Contact from "../../components/contact";
import Work from "../../components/work";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="flex h-full mt-10">
        <div className="m-10 flex flex-col justify-center">
          <h1 className="text-6.5xl font-semi-bold">HEIDI MARSH</h1>
          <h2 className="text-2xl font-medium text-center uppercase">
            Frontend Engineer
          </h2>
          <Contact />
        </div>

        <div className="h-full overflow-y-scroll">
          <div className="m-10">
            <AboutMe />
            <Work />
            
          </div>
        </div>
      </div>
      {/* <script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossOrigin="anonymous"
      ></script>
      <script type="text/javascript" src="work/work.js"></script>
      <script type="text/javascript" src="about/about.js"></script>
      <script type="text/javascript" src="header.js"></script> */}
    </>
  );
}
