import { styles } from "../styles";
import { slide as Menu } from "react-burger-menu";


const HeaderMobile = () => {
  return (
    <nav>
      <header className="bg-gray-800 w-full  h-24">
        <ul className="flex flex-row justify-center justify-around">
          <li>
            <img
              src="https://pbs.twimg.com/media/EzlxtfDXMAEfJrv.jpg"
              alt="mur bleu karminecorp"
              height={50}
              width={50}
            />
          </li>
          <li>
            <h1>Gautier Gourdy</h1>
          </li>
        </ul>
        <header>
          <div>
            <Menu styles={styles}>
              <ul className="text-2xl uppercase text-white ">
                <li
                  id="About"
                  className="menu-item px-2 list-disc"
                  Link="/section/introduction.jsx"
                >
                  About
                </li>
                <li
                  id="Skills"
                  className="menu-item px-2 py-6 list-disc"
                  Link="/section/services.jsx"
                >
                  Skills
                </li>
                <li
                  id="Projects"
                  className="menu-item px-2 list-disc"
                  Link="/projets"
                >
                  Projects
                </li>
                <li
                  id="Career"
                  className="menu-item px-2 py-6 list-disc"
                  Link="/section/formulaire.jsx"
                >
                  Career
                </li>
                <li
                  id="Contact"
                  className="menu-item px-2 list-disc"
                  Link="/projets"
                >
                  Contact
                </li>
                <li className="menu-item--small" href=""></li>
                <br />
                <div className="w-full flex flew-row -mx-6 pt-16">
                  <li className="  px-3"></li>
                </div>
              </ul>
            </Menu>
          </div>
        </header>
      </header>
    </nav>
  );
};

export default HeaderMobile;
