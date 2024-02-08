import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <div className="text logo-text">
            <h3>LOGO</h3>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links p-0 ">
            <li>
              <a>
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Home</span>
              </a>
            </li>
            <li>
              <i className="bx bx-home-alt icon"></i>
              <span className="text nav-text">Genres</span>
            </li>
            <li>
              <i className="bx bx-home-alt icon"></i>
              <span className="text nav-text">Music</span>
            </li>
            <li>
              <i className="bx bx-home-alt icon"></i>
              <span className="text nav-text">Albums</span>
            </li>
            <li>
              <i className="bx bx-home-alt icon"></i>
              <span className="text nav-text">Artists</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
