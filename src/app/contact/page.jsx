import Header from "../components/layouts/header";
import Main from "../components/layouts/main";
import Footer from "../components/layouts/footer";
import Form from "../components/tools/form";

const Contact = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel atque
          delectus id modi, ut ex nisi repellat soluta rem quo saepe aspernatur
          quis impedit a natus excepturi, aliquid non deserunt!
        </p>
        <Form />
      </Main>
      <Footer />
    </>
  );
};

export default Contact;
