import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Context from "./Context";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";
import MobSidebar from "./Components/mobSidebar/mobSidebar";
import Navbar from "./Components/Navbar/Navbar";
import ArtistDetails from "./Components/ArtistDetails/Artist";
import ArtistsPage from "./Components/ArtistsPage/ArtistsPage";
import GenresPage from "./Components/GenresPage/GenresPage";
import MusicPage from "./Components/MusicPage/MusicPage";
import PlaylistsPage from "./Components/PlaylistsPage/PlaylistsPage";

function App() {
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
      <main id="page_content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/artist/:name" element={<ArtistDetails />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/playlists" element={<PlaylistsPage />} />
        </Routes>
      </main>
    </Context.Provider>
  );
}

export default App;
