import "./Artist.css";
import { useState } from "react";

export default function Song({ cover, preview, title, name, id }) {
  const handleClick = (id) => {
    console.log(id);
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
            <i class="bx bx-list-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
