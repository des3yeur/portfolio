import Header from "@/app/components/layouts/header";
import HomePage from "./home";
import Footer from "@/app/components/layouts/footer";
import ReturnToTop from "@/app/components/tools/returnToTop";
import Aos from "@/app/components/tools/aos";

export default function Home() {
  return (
    <>
      <Aos />
      <Header />
      <HomePage />
      <Footer />
      <ReturnToTop />
    </>
  );
}
