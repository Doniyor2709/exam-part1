import { useContext,  } from "react";
import { Link, NavLink } from "react-router-dom";
import { GeneralContextInfo } from "../../contexts/GeneralContext";
import { logOut } from "../../const/const";
import "./Nav.scss"
import logo from "../../assets/images/Screenshot_28-removebg-preview.png";
import image from "../../assets/images/box-arrow-in-right.svg";

const UserNav = () => {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(GeneralContextInfo);

  const logOutUser = () => {
    const check = window.confirm("Log out account?");
    if(check){
      ([]);
      logOut();
      setIsAuthenticated(false);      
    }
  };

  return (
    <div className="nav container">
      <div >
        {isAuthenticated ? (
          <Link to="/my-blog"><img className="logo" src={logo} alt="Screenshot-28" />
          </Link>
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
          <li className="d-flex">
          {isAuthenticated&& <a href="/user" 
            className="nav-btn" > <p>My Posts</p></a>}
            <Link
              className="nav-btn "
              to={isAuthenticated ? "/account" : "/login"}
            >
              {isAuthenticated?"Account":"Login"}
            </Link>
           
            {isAuthenticated&& <button 
            className="nav-btn logout" onClick={logOutUser}> <p>logOut</p><img src={image} alt="" /></button>}
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default UserNav;
