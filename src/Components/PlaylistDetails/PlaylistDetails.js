import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import MusicPlayer from "./../MusicPlayer/MusicPlayer";
import Context from "../../Context";

export default function PlaylistDetails() {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);
  const { isLoading, setIsLoading, userData, setUserData } =
    useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/playlist_songs`, {
        params: {
          playlistId: id,
        },
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(function (res) {
        setSongs(res.data);
      });
  }, []);

  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="search_song">
            <h3 className="mb-0">
              <span className="text-primary">Songs</span>
            </h3>
          </div>
          <MusicPlayer songs={songs} action="delete" icon="trash" />
        </div>
      </div>
    </>
  );
}
