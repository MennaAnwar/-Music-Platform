import { useContext } from "react";
import "./MusicPreview.css";
import Context from "../../Context";

export default function MusicPreview() {
  const { show, songPreview } = useContext(Context);

  return (
    <div id="player" className={show ? "show" : ""}>
      <div className="d-flex justify-content-center">
        <div className="player-container">
          <div className="cover d-flex align-items-center">
            <div className="cover__image">
              <img src={songPreview.image} alt="" />
            </div>
            <div className="cover__content ps-3 d-none d-sm-block">
              <a
                href="song-details.html"
                className="cover__title text-truncate"
              >
                {songPreview.title}
              </a>
              <a
                href="artist-details.html"
                className="cover__subtitle text-truncate"
              >
                {songPreview.artist}
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <audio controls src={songPreview.preview} />
          </div>
        </div>
      </div>
    </div>
  );
}
