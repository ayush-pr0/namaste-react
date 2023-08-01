const NavBar = () => {
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#restaurant">Restaurant</a>
          </li>
          <li>
            <a href="#footer-content">Locations</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
