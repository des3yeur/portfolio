import { FiArrowDown } from "react-icons/fi";
import {BsDiscord} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsMailbox2} from "react-icons/bs"
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import Link from "next/link";




const Contact = () => {
  return (
    <section id="contact" className="pb-12 text-xl">
      <div className="contain mx-6 p-6">
        <h1 className="text-pink">const Contact = () {"=> {"}</h1>
        <div className="pl-2 text-gray-clear">
          return (
          <br />
          <span className="pl-2">{"<div className=''grid grid-cols-6''>"}</span>
          <br />
          <div className="grid grid-cols-6">
            <div className="flex justify-center py-4">
               <Link href="https://discord.com/users/0xdes3yeur" >
                
              <BsDiscord size={35} />
               </Link>
              <link rel="stylesheet" href="" />
            </div>
            <div className="flex justify-center py-4">
              <Link href="https://github.com/des3yeur" >
              
              <BsGithub size={35} />
             </Link>
            </div>
            <div className="flex justify-center py-4">
              <Link href="https://github.com/des3yeur" >
              <BsMailbox2 size={35} />
              </Link>
            </div>
            <div className="flex justify-center py-4">
              <Link href="https://github.com/des3yeur" >
              <BsFillTelephoneFill size={35} />
              </Link>
            </div>
            <div className="flex justify-center py-4">
              <Link href="https://twitter.com/0xdes3yeur" >
              <BsTwitter size={35} />
              </Link>
            </div>
            <div className="flex justify-center py-4">
              <Link href="https://www.linkedin.com/in/gautier-gourdy/" >
              <BsLinkedin size={35} />
              </Link>
            </div>
          </div>
          <span className="pl-2">{"</div>"}</span>
          <br />
          );
        </div>
        <h1 className="text-pink">{"};"}</h1>
        <h1 className="text-pink">Contact();</h1>
      </div>
    </section>
  );
};

export default Contact;
