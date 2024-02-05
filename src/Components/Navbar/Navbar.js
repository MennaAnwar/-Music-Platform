import { useState } from "react";
import "./Navbar.css";
import Dropdown from "../UserDropdown/UserDropDown";
import CircleBtn from "../Circlebtn/Circlebtn";

const Navbar = () => {
  const [sidebar, IsOpen] = useState(false);

  const OpenSidebar = () => {
    IsOpen((sidebar) => !sidebar);
  };

  return (
    <div className="container-fluid g-0">
      <div className="row">
        <div className="col-lg-12 p-0">
          <div className="header_iner d-flex bd-highlight mb-3 align-items-center">
            <div className="p-2 bd-highlight d-lg-none">
              <CircleBtn clickHandler={OpenSidebar} active={sidebar} />
            </div>
            <div className="p-2 bd-highlight logo d-lg-none">
              <h3 className="m-0">LOGO</h3>
            </div>
            <div className="p-2 bd-highlight username d-none d-lg-block">
              <h5>Welcome Back , </h5>
            </div>
            <div className="ms-auto p-2 bd-highlight d-flex align-items-center">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
