import axios from "axios";
import "./Artist.css";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function Song({
  cover,
  preview,
  title,
  name,
  song_id,
  icon,
  action,
}) {
  const { id } = useParams();

  const handleClick = async (song_id) => {
    axios.get(`http://localhost:8000/api/playlists`).then(function (res) {
      console.log(res.data);
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
      title: "Submit your Github username",
      input: "select",
      inputOptions: inputOptions,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Add",
      showLoaderOnConfirm: true,
      preConfirm: async (playlistId) => {
        return axios
          .post(`http://localhost:8000/api/addSong`, {
            songId: songId,
            playlistId: playlistId,
          })
          .then((response) => {
            if (response.status !== 200 && response.status !== 201) {
              throw new Error(response.statusText);
            }
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              Swal.showValidationMessage(
                `Request failed: ${error.response.data}`
              );
            } else if (error.request) {
              Swal.showValidationMessage(`Request failed: ${error.request}`);
            } else {
              Swal.showValidationMessage(`Error: ${error.message}`);
            }
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const DeleteFromPlaylist = (songId) => {
    console.log(songId);
    console.log(id);

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
            params: {
              songId: songId,
              playlistId: id,
            },
          })
          .then(function (res) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          });
      }
    });
  };

  return (
    <div className="list__item  d-flex justify-content-between align-items-center">
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
