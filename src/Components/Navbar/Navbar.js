import "./Navbar.css";
import { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
    setToggled((toggled) => !toggled);
  };

  return (
    <header className="header d-lg-none">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="site-branding">
              <img src={logo} alt="Logo New" />
            </div>
          </div>
          <div className="col-lg-9">
            <div
              className={`main-navigation d-lg-none ${
                toggled ? "toggled" : ""
              }`}
            >
              <button className="hamburger for-mob" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="header-menu">
                <div className="menu-main-menu-container">
                  <ul className="d-flex">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
