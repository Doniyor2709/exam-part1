import PropTypes from "prop-types";
import './style-cards.scss';

import { Link } from "react-router-dom";
import { URL_IMG } from "../../const/const";

const BlogCard = ({ el }) => {
  const { user, title, description,_id ,photo} = el;
  const {first_name,last_name} = user;
  return (
    <div className="slider-mar ">
      <Link to={`posts/${_id}`}>
      <img src={URL_IMG+photo?._id + "." + photo}  alt="Img" />
      <div className="line">
        <p>
          By
          <span>
            {first_name + " " + last_name}
          </span>
          l oct 16, 2023
        </p>
        <h2 className="texted">{title}</h2>
        <p>{description} </p>
        <button >More 📔</button>
      </div>
      </Link>
    </div>
  );
};

BlogCard.propTypes = {
  el: PropTypes.object,
};

export default BlogCard;
