import axios from "axios";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Hero from "./../Hero/Hero";
import "./MusicPage.css";
import { useEffect, useState } from "react";

export default function MusicPage() {
  const [q, setQ] = useState("treat");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/search`, {
        params: {
          q: q,
        },
      })
      .then(function (res) {
        console.log(res.data.data);
        setSongs(res.data.data);
      });
  }, [q]);

  const handleChange = (e) => {
    setQ(e.target.value);
  };

  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="search_song">
            <h3 className="mb-0">
              <span className="text-primary">Songs</span>
            </h3>
            <div className="searchbar-box3">
              <input
                type="search"
                placeholder="Search..."
                className="searchbar3"
                onChange={handleChange}
              />
              <i className="bx bx-search icon3"></i>
            </div>
          </div>
          <MusicPlayer songs={songs} action="add" icon="list-plus" />
        </div>
      </div>
    </>
  );
}
