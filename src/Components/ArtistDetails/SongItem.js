import axios from "axios";
import "./Artist.css";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../../Context";
import Loader from "../Loader/Loader";

export default function Song({ cover, title, name, song_id, icon, action }) {
  const { setShow, setSongPreview, userData, setIsLoading, isLoading } =
    useContext(Context);

  const { id } = useParams();

  const handleClick = async (song_id) => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8000/api/playlists`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(function (res) {
        setIsLoading(false);
        action === "add"
          ? AddToPlaylist(res.data, song_id)
          : DeleteFromPlaylist(song_id);
      });
  };

  const AddToPlaylist = (playlists, songId) => {
    const inputOptions = playlists.reduce((acc, playlist) => {
      acc[playlist.id] = playlist.name;
      return acc;
    }, {});

    Swal.fire({
      title: "Choose a playlist",
      input: "select",
      inputOptions: inputOptions,
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: (playlistId) => {
        return axios
          .post(
            `http://localhost:8000/api/addSong`,
            {
              songId: songId,
              playlistId: playlistId,
            },
            {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            }
          )
          .then((response) => {
            if (response.status === 200 || response.status === 201) {
              return response.data;
            }
            throw new Error(response.statusText);
          })
          .catch((error) => {
            if (error.response) {
              throw new Error(
                `Request failed: ${
                  error.response.data.message || error.response.statusText
                }`
              );
            } else if (error.request) {
              throw new Error("No response from server");
            } else {
              throw new Error("Error: " + error.message);
            }
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Song added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to add song",
          text: error.message,
        });
      });
  };

  const DeleteFromPlaylist = (songId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/deleteSong`, {
            data: {
              songId: songId,
              playlistId: id,
            },
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          })
          .then(() => {
            Swal.fire(
              "Deleted!",
              "The song has been removed from the playlist.",
              "success"
            );
          })
          .catch((error) => {
            let errorMessage = "An error occurred";
            if (
              error.response &&
              error.response.data &&
              error.response.data.message
            ) {
              errorMessage = error.response.data.message;
            } else if (error.message) {
              errorMessage = error.message;
            }
            Swal.fire("Failed!", errorMessage, "error");
          });
      }
    });
  };

  const playSong = (songId) => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8000/api/track`, {
        params: {
          songId: songId,
        },
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(function (res) {
        setIsLoading(false);

        setSongPreview({
          title: res.data.title,
          artist: res.data.artist.name,
          preview: res.data.preview,
          image: res.data.album.cover,
        });
        setShow((show) => true);
      });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div
      className="list__item  d-flex justify-content-between align-items-center"
      onClick={() => playSong(song_id)}
    >
      <div className="list__cover">
        <div className="d-flex justify-content-between align-items-center">
          <img src={cover} alt={title} />
        </div>
        <div className="btn btn-play btn-sm btn-default btn-icon rounded-pill">
          <i className="play bx bx-play icon-play"></i>
        </div>
      </div>
      <div className="list__content">
        <span className="list__title text-truncate">{title}</span>
        <p className="list__subtitle text-truncate">{name}</p>
      </div>
      <ul className="list__option d-flex">
        <li>
          <a
            role="button"
            className="d-inline-flex"
            aria-label="Favorite"
            data-favorite-id="1"
          >
            <i className="bx bx-heart"></i>
          </a>
        </li>
        <li
          className="dropstart d-inline-flex"
          onClick={() => handleClick(song_id)}
        >
          <a
            className="dropdown-link"
            role="button"
            data-bs-toggle="dropdown"
            aria-label="Cover options"
            aria-expanded="false"
          >
            <i className={`bx bx-${icon}`}></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
