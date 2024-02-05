import { useState } from "react";
import "./userDropDown.css";

export default function Dropdown() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="User-area">
      <div className="User-avtar" onClick={handleClick}>
        <div className="circle">
          <span>u</span>
        </div>
      </div>
      <ul className={!active ? "User-Dropdown" : "User-Dropdown U-open"}>
        <li>My Profile</li>
        <li>Projects</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}
