import { useState } from "react";
import Context from "../../Context";
import Sidebar from "./../Sidebar/Sidebar";
import Navbar from "./../Navbar/Navbar";
import MobSidebar from "../mobSidebar/mobSidebar";
import "./Dashboard.css";

export default function Dashboard() {
  const [sidebar, IsOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        sidebar,
        IsOpen,
      }}
    >
      <div className="main-container">
        <Sidebar />
        <MobSidebar />
        <div className="main_content dashboard_part">
          <Navbar />
        </div>
      </div>
    </Context.Provider>
  );
}
