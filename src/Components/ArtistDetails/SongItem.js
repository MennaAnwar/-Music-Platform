import "./Artist.css";
import { useState } from "react";

export default function Song({ cover, preview, title, name }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((show) => !show);
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
        <p class="list__subtitle text-truncate">{name}</p>
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
