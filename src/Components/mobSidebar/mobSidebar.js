import { useContext } from "react";
import Context from "../../Context";
import "./mobSidebar.css";

const MobSidebar = () => {
  const { sidebar, IsOpen } = useContext(Context);

  const handleClick = () => {
    IsOpen(false);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={"metaportal_fn_leftnav_closer" + (sidebar ? " active" : "")}
      />
      <div className={"metaportal_fn_leftnav" + (sidebar ? " active" : "")}>
        <a to="/" className="fn__closer" onClick={handleClick}>
          <span />
        </a>
      </div>
    </>
  );
};

export default MobSidebar;
