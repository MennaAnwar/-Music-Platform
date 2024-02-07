import "./Artist.css";
import { useState } from "react";

export default function Song() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
  };

  return (
    <div
      class="list__item"
      data-song-id="1"
      data-song-name="I love you mummy"
      data-song-artist="Arebica Luna"
      data-song-album="Mummy"
      data-song-url="audio/ringtone-1.mp3"
      data-song-cover="images/cover/small/1.jpg"
    >
      <div class="list__cover">
        <img src="images/cover/small/1.jpg" alt="I love you mummy" />
        <a
          class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
          data-play-id="1"
          aria-label="Play pause"
        >
          <i class="ri-play-fill icon-play"></i>
          <i class="ri-pause-fill icon-pause"></i>
        </a>
      </div>
      <div class="list__content">
        <a href="song-details.html" class="list__title text-truncate">
          I love you mummy
        </a>
        <p class="list__subtitle text-truncate">
          <a href="artist-details.html">Arebica Luna</a>
        </p>
      </div>
      <ul class="list__option">
        <li>
          <a
            role="button"
            class="d-inline-flex"
            aria-label="Favorite"
            data-favorite-id="1"
          >
            <i class="bx bx-heart"></i>
          </a>
        </li>
        <li>01:14</li>
        <li class="dropstart d-inline-flex" onClick={handleClick}>
          <a
            class="dropdown-link"
            role="button"
            data-bs-toggle="dropdown"
            aria-label="Cover options"
            aria-expanded="false"
          >
            <i class="bx bx-dots-horizontal-rounded"></i>
          </a>
          <ul class={`dropdown-menu dropdown-menu-sm${show ? " show" : ""}`}>
            <li>
              <a class="dropdown-item" role="button" data-playlist-id="1">
                Add to playlist
              </a>
            </li>
            <li class="dropdown-divider"></li>
            <li>
              <a
                class="dropdown-item"
                href="javascript:void(0);"
                role="button"
                data-play-id="1"
              >
                Play
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
