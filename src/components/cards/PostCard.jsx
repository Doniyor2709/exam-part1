import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { URL_IMG } from "../../const/const";

const PostCard = ({ el }) => {
  const navigate = useNavigate();
  const { title, description, category, _id,photo} = el;
  const enterThisPost = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div className="selector" onClick={() => enterThisPost(_id)}>
      <img
        src={URL_IMG + photo?._id + "." + photo?.name?.split(".")[1]}
        alt="Post Img"
      />
      <div className="texts">
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
