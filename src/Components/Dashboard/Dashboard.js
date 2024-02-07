import { useState } from "react";
import Context from "../../Context";
import Sidebar from "./../Sidebar/Sidebar";
import Navbar from "./../Navbar/Navbar";
import MobSidebar from "../mobSidebar/mobSidebar";
import "./Dashboard.css";
import ArtistDetails from "../ArtistPage/Artist";

export default function Dashboard() {
  const [sidebar, IsOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        sidebar,
        IsOpen,
      }}
    >
      <Sidebar />
      <MobSidebar />
      <Navbar />

      <div className="main_content dashboard_part">
        <ArtistDetails />
      </div>
    </Context.Provider>
  );
}
