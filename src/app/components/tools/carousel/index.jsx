"use client";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";

const Caroussel = ({ children }) => {
  return (
    <Carousel showArrows={true} className={styles}>
      {children}
    </Carousel>
  );
};

Caroussel.propTypes = {
  children: PropTypes.node,
};

export default Caroussel;
