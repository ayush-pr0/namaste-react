import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const NavBar = () => {
  const onlineStatus = useOnlineStatus();
  const { username, setUser } = useContext(UserContext);
  return (
    <nav>
      <div id="nav-bar">
        <img
          src={
            "https://res.cloudinary.com/ayush-pr0/image/upload/v1690878972/logo_ptbf0a.ico"
          }
          alt="logo"
        />
        <ul>
          <li>
            <label>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</label>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link>Cart(0)</Link>
          </li>
          <li>
            <input
              placeholder="Guest"
              value={username}
              onChange={(e) => setUser(e.target.value)}
            ></input>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
