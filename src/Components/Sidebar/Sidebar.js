import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <div className="text image">
            <img src={logo} className="logo" />
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links p-0 ">
            <li>
              <Link to="/dashboard">
                <i className="bx bx-home icon"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/playlists">
                <i className="bx bxs-playlist icon"></i>
                <span className="text nav-text">My Playlists</span>
              </Link>
            </li>
            <li>
              <Link to="/genres">
                <i className="bx bxl-deezer icon"></i>
                <span className="text nav-text">Genres</span>
              </Link>
            </li>
            <li>
              <Link to="/music">
                <i className="bx bx-music icon"></i>
                <span className="text nav-text">Music</span>
              </Link>
            </li>
            <li>
              <Link>
                <i className="bx bx-disc icon"></i>
                <span className="text nav-text">Albums</span>
              </Link>
            </li>
            <li>
              <Link to="/artists">
                <i className="bx bx-microphone icon"></i>
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
