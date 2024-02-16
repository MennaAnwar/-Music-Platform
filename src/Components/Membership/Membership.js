import { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import Loader from "../Loader/Loader";
import Login from "./Login";
import Signup from "./Signup";
import logo from "../../images/logo.png";
import "./Membership.css";

const Membership = () => {
  const [action, setAction] = useState("login");
  const { isLoading, setIsLoading } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("loading");
    }, 3000);
  }, []);

  const toggleAction = () => {
    var newAction = action === "login" ? "signup" : "login";
    setAction(newAction);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="app">
      <div className={action === "login" ? "wrapper" : "wrapper active"}>
        <Login handleClick={toggleAction} />
        <Signup handleClick={toggleAction} />
      </div>
    </div>
  );
};

export default Membership;
