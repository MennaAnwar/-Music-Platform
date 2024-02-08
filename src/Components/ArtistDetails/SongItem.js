import "./Artist.css";
import { useState } from "react";

export default function Song() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <div
      className="list__item"
      data-song-id="1"
      data-song-name="I love you mummy"
      data-song-artist="Arebica Luna"
      data-song-album="Mummy"
      data-song-url="audio/ringtone-1.mp3"
      data-song-cover="images/cover/small/1.jpg"
    >
      <div className="list__cover">
        <img src="images/cover/small/1.jpg" alt="I love you mummy" />
        <a
          className="btn btn-play btn-sm btn-default btn-icon rounded-pill"
          data-play-id="1"
          aria-label="Play pause"
        >
          <i className="ri-play-fill icon-play"></i>
          <i className="ri-pause-fill icon-pause"></i>
        </a>
      </div>
      <div className="list__content">
        <a href="song-details.html" className="list__title text-truncate">
          I love you mummy
        </a>
        <p className="list__subtitle text-truncate">
          <a href="artist-details.html">Arebica Luna</a>
        </p>
      </div>
      <ul className="list__option">
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
        <li>01:14</li>
        <li className="dropstart d-inline-flex" onClick={handleClick}>
          <a
            className="dropdown-link"
            role="button"
            data-bs-toggle="dropdown"
            aria-label="Cover options"
            aria-expanded="false"
          >
            <i className="bx bx-dots-horizontal-rounded"></i>
          </a>
          <ul
            className={`dropdown-menu dropdown-menu-sm${show ? " show" : ""}`}
          >
            <li>
              <a className="dropdown-item" role="button" data-playlist-id="1">
                Add to playlist
              </a>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <a className="dropdown-item" role="button" data-play-id="1">
                Play
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
