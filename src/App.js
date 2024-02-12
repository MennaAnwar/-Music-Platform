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
import PlaylistDetails from "./Components/PlaylistDetails/PlaylistDetails";
import MusicPreview from "./Components/MusicPreview/MusicPreview";

function App() {
  const [sidebar, IsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [songPreview, setSongPreview] = useState([]);

  return (
    <Context.Provider
      value={{
        sidebar,
        IsOpen,
        show,
        setShow,
        songPreview,
        setSongPreview,
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
          <Route path="/playlist/:id" element={<PlaylistDetails />} />
        </Routes>
      </main>
      <MusicPreview />
    </Context.Provider>
  );
}

export default App;
