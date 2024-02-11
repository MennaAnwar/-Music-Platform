import axios from "axios";
import "./Artist.css";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Song({ cover, preview, title, name, id }) {
  const [my_playlists, setMyPlaylists] = useState([]);

  const handleClick = async (id) => {
    console.log(id);
    axios.get(`http://localhost:8000/api/playlists`).then(function (res) {
      console.log(res.data);
      AddToPlaylist(res.data, id);
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
        <li className="dropstart d-inline-flex" onClick={() => handleClick(id)}>
          <a
            className="dropdown-link"
            role="button"
            data-bs-toggle="dropdown"
            aria-label="Cover options"
            aria-expanded="false"
          >
            <i className="bx bx-list-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
