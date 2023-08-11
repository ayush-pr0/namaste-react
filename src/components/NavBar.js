import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const NavBar = () => {
  const onlineStatus = useOnlineStatus();
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
          <li style={{ color: "#6f1f05" }}>
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
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
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
