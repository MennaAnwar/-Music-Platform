import React, { useContext } from "react";
import Context from "../../Context";
import "./Loader.css";

const Loader = () => {
  const { isLoading } = useContext(Context);

  return (
    <div className={`robot-loader ${isLoading ? " visible" : " hidden"}`}>
      <div id="loader"></div>
    </div>
  );
};

export default Loader;
