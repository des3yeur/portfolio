import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Carousel1 = () => (
  <Carousel
    // autoPlay
    showArrows={true}
    className={styles}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{ left: 15 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#0172D0" }} />
        </button>
      )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{ right: 15 }}
        >
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#0172D0" }} />
        </button>
      )
    }
  >
    <div className="bg-black w-full h-40 text-white flex flex-col items-center text-center justify-center">
      <Image
        src="/images/HTML5_logo_and_wordmark.svg.png"
        width={1024}
        height={1024}
        alt="Logo HTML5"
      />
    </div>
    <div className="bg-black w-full h-40 text-white flex flex-col items-center text-center justify-center">
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        Earum deserunt, reprehenderit mollitia debitis totam tempore, eum nobis
        doloribus quam itaque cumque aliquam deleniti? Aperiam culpa pariatur
        soluta et optio aliquid.
      </h3>
    </div>
    <div className="bg-black w-full h-40 text-white flex flex-col items-center text-center justify-center">
      <a href={``}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Earum deserunt, reprehenderit mollitia debitis totam tempore, eum
          nobis doloribus quam itaque cumque aliquam deleniti? Aperiam culpa
          pariatur soluta et optio aliquid.
        </h3>
      </a>
    </div>
    <div className="bg-black w-full h-40 text-white flex flex-col items-center text-center justify-center">
      <a href={``}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Earum deserunt, reprehenderit mollitia debitis totam tempore, eum
          nobis doloribus quam itaque cumque aliquam deleniti? Aperiam culpa
          pariatur soluta et optio aliquid.
        </h3>
      </a>
    </div>
    <div className="bg-black w-full h-40 text-white flex flex-col items-center text-center justify-center">
      <a href={``}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Earum deserunt, reprehenderit mollitia debitis totam tempore, eum
          nobis doloribus quam itaque cumque aliquam deleniti? Aperiam culpa
          pariatur soluta et optio aliquid.
        </h3>
      </a>
    </div>
  </Carousel>
);

export default Carousel1