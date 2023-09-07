import Caroussel from "@/app/components/tools/carousel";
import datafront from "./datafront.json";
import Link from "next/link";
import Image from "next/image";
import CardProject from "@/app/components/tools/cards/projects";
import databack from "./databack.json";
import { FiArrowDown } from "react-icons/fi";

const Skills = () => {
  return (
    <section id="skills" className="py-12">
      <div className="text-xl">
        <div className="contain mx-6 p-6">
          <h1 className="text-pink">const Skills = () {"=> {"}</h1>
          <div className="pl-2 text-gray-clear">
            return (
            <br />
            <span className="pl-2">{"<Carousel>"}</span>
            <br />
            <div className="py-2">
              <Caroussel >
                
                <div className="grid grid-cols-3 p-4 ">
 
<div className="px-2">

          <Image
          src="/images/logo_html.svg"
          width={1024}
          height={1024}
          alt="logo html"
          />
          </div>
          <div className="px-2">

          <Image
          src="/images/logo_css.svg"
          width={1024}
          height={1024}
          alt="logo css"
          />
          </div>
          <div className="px-2">

          <Image
          src="/images/logo_javascript.svg"
          width={1024}
          height={1024}
          alt="logo javascript"
          />
          </div>    
                </div>
                <div className="grid grid-cols-3 p-4">
                  <div className="px-2">

                  <Image
          src="/images/logo_git.svg"
          width={1024}
          height={1024}
          alt="logo git"
          />
          </div>
          <div className="px-2">
                  <Image
          src="/images/logo_react.svg"
          width={1024}
          height={1024}
          alt="logo react"
          />
          </div>
          <div className="px-2">
          <Image
          src="/images/logo_nextjs.svg"
          width={1024}
          height={1024}
          alt="logo next js"
          />
          </div>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <div className="px-2">

                  <Image
          src="/images/logo_nodejs.svg"
          width={1024}
          height={1024}
          alt="logo node js"
          />
          </div>
          <div className="px-2">
                  <Image
          src="/images/logo_bootstrap.svg"
          width={1024}
          height={1024}
          alt="logo bootstrap"
          />
          </div>
<div className="px-2">
                  <Image
          src="/images/logo_tailwind.svg"
          width={1024}
          height={1024}
          alt="logo tailwind"
          />
          </div>
                </div>  
              </Caroussel>
            </div> 
            <span className="pl-2">{"</Carousel>"}</span>
            <br/>
            <span className="pl-2">{"<br/>"}</span>
            <br/>
             <span className="pl-2">{"<Carousel>"}</span>
            <Caroussel>
                <div className="grid grid-cols-3 p-4">
                  <div className="px-2">
                  <Image
          src="/images/logo_solidity.svg"
          width={1024}
          height={1024}
          alt="logo solidity"
          />
          </div>
            <div className="px-2">
                  <Image
          src="/images/logo_rust.svg"
          width={1024}
          height={1024}
          alt="logo rust"
          />
          </div>
          <div className="px-2">
          <Image
          src="/images/logo_wordpress.svg"
          width={1024}
          height={1024}
          alt="logo wordpress"
          />
          </div>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <div className="px-2">
                  <Image
          src="/images/logo_symfony.svg"
          width={1024}
          height={1024}
          alt="logo symphony"
          />
          </div>
          <div className="px-2">
<Image
          src="/images/logo_python.svg"
          width={1024}
          height={1024}
          alt="logo python"
          />
          </div>
          <div className="px-2">
        <Image
          src="/images/logo_bash.svg"
          width={1024}
          height={1024}
          alt="logo shell"
          />
          </div>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <div className="px-2">
                  <Image
          src="/images/logo_php.svg"
          width={1024}
          height={1024}
          alt="logo php"
          />
          </div>
          <div className="px-2">
                  <Image
          src="/images/logo_mysql.svg"
          width={1024}
          height={1024}
          alt="logo mysql"
          />
          </div>
          <div className="px-2">
<Image
          src="/images/logo_shopify.svg"
          width={1024}
          height={1024}
          alt="logo mysql"
          />
          </div>
                </div>
              </Caroussel>
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
