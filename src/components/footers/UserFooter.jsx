import { Link } from "react-router-dom";
import './style.scss'
const UserFooter = () => {
  return (
    <footer>
    <div className=" containr elements">
      <p className="foot-text">
        Finstreet 118 2561 Fintown <br /> Hello@finsweet.com 020 7993 2905
      </p>
      <div className="icon">
        <Link to="https://www.facebook.com">
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link to="https://twitter.com">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link to="https://www.instagram.com/">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="https://ru.linkedin.com/">
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </div>
    </div>
    </footer>
  );
}

export default UserFooter