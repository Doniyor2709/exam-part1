import { useContext,  } from "react";
import { Link, NavLink } from "react-router-dom";
import { GeneralContextInfo } from "../../contexts/GeneralContext";
import { logOut } from "../../const/const";
import "./Nav.scss"
const UserNav = () => {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(GeneralContextInfo);

  const logOutUser = () => {
    const check = window.confirm("Do you want to log out of this account?");
    if(check){
      ([]);
      logOut();
      setIsAuthenticated(false);      
    }
  };

  return (
    <div className="nav containr">
      <div >
        {isAuthenticated ? (
          <Link to="/my-blog">MyBlog</Link>
        ) : (
          <Link to="/"><img src="https://i.ibb.co/9Hb5YLg/Logo-5.png" alt="logo" /></Link>
        )}
      </div>
      <div >
        <ul
        >
          <li>
            <NavLink
              className="nav-item"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/posts"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-item"
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li>
            <Link
              className="nav-btn"
              to={isAuthenticated ? "/account" : "/login"}
            >
              {isAuthenticated?"Account":"Login"}
            </Link>
          </li>
        </ul>
        {isAuthenticated&&<i
          onClick={logOutUser}
          >logout ➮</i>}
      </div>
    </div>
  );
};

export default UserNav;
