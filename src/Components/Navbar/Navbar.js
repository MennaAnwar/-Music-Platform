import { useContext } from "react";
import Context from "../../Context";
import "./Navbar.css";
import Dropdown from "../UserDropdown/UserDropDown";
import CircleBtn from "../Circlebtn/Circlebtn";
import logo from "../../images/logo.png";

const Navbar = () => {
  const { sidebar, IsOpen } = useContext(Context);
  const OpenSidebar = () => {
    IsOpen((sidebar) => !sidebar);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <div className="d-flex bd-highlight align-items-center">
            <div className="bd-highlight d-lg-none">
              <CircleBtn clickHandler={OpenSidebar} active={sidebar} />
            </div>
            <div className="bd-highlight logo d-lg-none">
              <img src={logo} className="logo" />
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
