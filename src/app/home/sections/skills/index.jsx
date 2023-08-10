import Caroussel from "@/app/components/tools/carousel";
import datafront from "./datafront.json";
import Link from "next/link";
import Image from "next/image";
import CardProject from "@/app/components/tools/cards/projects";
import databack from "./databack.json";
import { FiArrowDown } from "react-icons/fi";

const Skills = () => {
  return (
    <section className="py-12">
      <div>
        <div className="contain mx-6 p-6">
          <h1 className="text-pink">const Skills = () {"=> {"}</h1>
          <div className="pl-2 text-gray-clear">
            return (
            <br />
            <span className="pl-2">{"<Carousel>"}</span>
            <br />
            <div className="py-2">
              <Caroussel>
                <div className="grid grid-cols-3 p-4">
                  <FiArrowDown size={50} />
                  <FiArrowDown size={50} />
                  <FiArrowDown size={50} />
                </div>
                <div className="grid grid-cols-3 p-4">
                  <FiArrowDown size={50} />
                  <FiArrowDown size={50} />
                  <FiArrowDown size={50} />
                </div>
              </Caroussel>
            </div>
            <span className="pl-2">{"</Carousel>"}</span>
            <br />
            );
          </div>
          <h1 className="text-pink">{"};"}</h1>
          <h1 className="text-pink">Skills();</h1>
        </div>
      </div>
    </section>
  );
};

export default Skills;
