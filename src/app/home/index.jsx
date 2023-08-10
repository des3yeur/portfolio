import Main from "../components/layouts/main";
import Introduction from "./sections/introduction";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Careers from "./sections/careers";
import Contact from "./sections/contact";

const HomePage = () => {
  return (
      <Main>
        <Introduction />
        <About />
        <Skills />
        <Projects />
        <Careers />
        <Contact />
      </Main>
  );
};

export default HomePage;
