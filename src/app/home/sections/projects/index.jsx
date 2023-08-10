// import Carousel3 from "@/app/components/tools/carousel3";
import data from "./data.json";
import CardProject from "@/app/components/tools/cards/projects";
import Caroussel from "@/app/components/tools/carousel";
import { FiArrowDown } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="">
      <div>
        <div className="contain mx-6 p-6">
          <h1 className="text-pink">const Projects = () {"=> {"}</h1>
          <div className="pl-2 text-gray-clear">
            return (
            <br />
            <span className="pl-2">{"<Carousel>"}</span>
            <br />
            <div className="py-2">
              <Caroussel>
                {data.map((project) => {
                  return (
                    <CardProject image={project.image} title={project.title} />
                  );
                })}
              </Caroussel>
            </div>
            <span className="pl-2">{"</Carousel>"}</span>
            <br />
            );
          </div>
          <h1 className="text-pink">{"};"}</h1>
          <h1 className="text-pink">Projects();</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
