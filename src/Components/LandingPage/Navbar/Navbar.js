import "./Navbar.css";
import { useState } from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
    setToggled((toggled) => !toggled);
  };

  return (
    <header className="site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="site-branding">
              <img src={logo} alt="Logo New" />
            </div>
          </div>
          <div className="col-lg-9">
            <div className={`main-navigation ${toggled ? "toggled" : ""}`}>
              <button className="hamburger for-mob" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="header-menu">
                <div className="menu-main-menu-container">
                  <ul className="d-flex">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Artists</Link>
                    </li>
                    <li>
                      <Link
                        to="/membership"
                        className="d-flex align-items-center"
                      >
                        <i className="bx bx-log-in"></i>
                        <span className="mx-1"> Login / Register</span>
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
