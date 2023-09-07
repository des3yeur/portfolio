import PropTypes from "prop-types";

const CardProject = ({ title, image }) => {
  return (
    <div 
   className="flex flex-col justify-center item-center p-4 w-full border border-gray-300 rounded-lg">
      <img src={image} height={50} weight={50} alt="" />
      <h1>{title}</h1>
    </div>
  );
};

CardProject.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default CardProject;
