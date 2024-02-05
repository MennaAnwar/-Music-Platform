import { useState } from "react";
import Context from "../../Context";
import Sidebar from "./../Sidebar/Sidebar";
import Navbar from "./../Navbar/Navbar";
import MobSidebar from "../mobSidebar/mobSidebar";

export default function Dashboard() {
  const [sidebar, IsOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        sidebar,
        IsOpen,
      }}
    >
      <div id="wrapper">
        <Sidebar />
        <Navbar />
        <MobSidebar />
      </div>
    </Context.Provider>
  );
}
