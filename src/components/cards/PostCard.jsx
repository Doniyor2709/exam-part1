import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./style-cards.scss";
import { URL_IMG } from "../../const/const";

const PostCard = ({ el }) => {
  const navigate = useNavigate();
  const { title, description, category, _id,photo} = el;
  const enterThisPost = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="selector border " onClick={() => enterThisPost(_id)}>
      <img className="sell-img"
        src={URL_IMG + photo?._id + "." + photo?.name?.split(".")[1]}
        alt="Post Img"
      />
      <div className="texts pt-5 px-5 py-5">
        <p className="textw">
          {category?.name.toUpperCase()}
        </p>
        <h2>
          {title}
        </h2>
        <p>
          {description}
        </p>
      
      </div>
    </div>
  );
};

PostCard.propTypes = {
  el: PropTypes.object,
};

export default PostCard;
