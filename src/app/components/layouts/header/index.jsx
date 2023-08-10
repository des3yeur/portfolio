import HeaderMobile from "./mobile";
import HeaderDesktop from "./desktop";
import ModalProvider from "../../context/modalProvider";

const Header = () => {
  return (
    <ModalProvider>
      <HeaderMobile />
      <HeaderDesktop />
    </ModalProvider>
  );
};

export default Header;
