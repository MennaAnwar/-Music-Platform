import { Link } from "react-router-dom";
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
              <Link>
                <i className="bx bx-home icon"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="bx bxl-deezer icon"></i>
                <span className="text nav-text">Genres</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="bx bx-music icon"></i>
                <span className="text nav-text">Music</span>
              </Link>
            </li>
            <li>
              <Link>
                <i class="bx bx-disc icon"></i>
                <span className="text nav-text">Albums</span>
              </Link>
            </li>
            <li>
              <Link to="/artists">
                <i class="bx bx-microphone icon"></i>
                <span className="text nav-text">Artists</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
