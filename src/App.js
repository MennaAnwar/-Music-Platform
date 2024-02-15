import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Context from "./Context";
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
import Membership from "./Components/Membership/Membership";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [logged_in, setLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [userData, setUserData] = useState({
    user_id: "",
    name: "",
    email: "",
    password: "",
    token: "",
  });
  const [sidebar, IsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [songPreview, setSongPreview] = useState([]);

  const location = useLocation();
  const isMembershipRoute = location.pathname === "/membership";
  const isLPRoute = location.pathname === "/";

  let navigate = useNavigate();

  useEffect(() => {
    if (cookies.rememberMe === false) {
      navigate(`/`);
    } else {
      navigate(`/`);
      for (const key in userData) {
        if (key in cookies) {
          userData[key] = cookies[key];
        }
      }
    }
  }, [cookies.rememberMe]);

  return (
    <Context.Provider
      value={{
        isLoading,
        setIsLoading,
        logged_in,
        setLoggedIn,
        cookies,
        setCookie,
        removeCookie,
        userData,
        setUserData,
        sidebar,
        IsOpen,
        show,
        setShow,
        songPreview,
        setSongPreview,
      }}
    >
      {!isMembershipRoute && !isLPRoute && <Sidebar />}
      {!isMembershipRoute && !isLPRoute && <MobSidebar />}
      {!isMembershipRoute && !isLPRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <main id="page_content">
        <Routes>
          <Route path="/membership" element={<Membership />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/artist/:name" element={<ArtistDetails />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/playlists" element={<PlaylistsPage />} />
          <Route path="/playlist/:id" element={<PlaylistDetails />} />
        </Routes>
      </main>
      {!isMembershipRoute && <MusicPreview />}
    </Context.Provider>
  );
}

export default App;
