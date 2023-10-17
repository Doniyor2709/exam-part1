import PropTypes from "prop-types";

import "./style-cards.scss";
import image from "../../assets/images/Icon.png";

import { useNavigate } from "react-router-dom";

const CategoryCard = ({ el }) => {
  const navigate = useNavigate();
  const { name, description,_id } = el;

  const enterToCategory = (id) => {
    navigate(`/category/${id}`)
  }
  return (
    <div onClick={()=>enterToCategory(_id)} className="element ">
      <img  src={image} alt="" />
      <h3>{name}</h3>
      <p >{description}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  el: PropTypes.object,
};

export default CategoryCard;
