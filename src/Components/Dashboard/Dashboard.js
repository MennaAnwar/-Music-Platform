import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/chart`).then(function (res) {
      setAlbums(res.data.albums);
      setArtists(res.data.artists);
      setPlaylists(res.data.playlists);
      setPodcasts(res.data.podcasts);
      setTracks(res.data.tracks);
    });
  });

  useEffect(() => {
    console.log(artists);
    console.log(playlists);
    console.log(podcasts);
    console.log(tracks);
  }, [artists, playlists, podcasts, tracks, albums]);

  return <h1>Home Page</h1>;
}
