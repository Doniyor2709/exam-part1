import UserNav from "../navs/UserNav";
import { Outlet } from "react-router-dom";
import UserFooter from "../footers/UserFooter";
import "./UserLayout.scss"
const UserLayout = () => {
  return (
    <div>
      <nav className="header">
        <UserNav />
      </nav>
      <main>
        <Outlet />  
      </main>
      <footer>
        <UserFooter />
      </footer>
    </div>
  );
};

export default UserLayout;
