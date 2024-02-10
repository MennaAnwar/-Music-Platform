import "./MusicPlayer.css";
import Song from "../ArtistDetails/SongItem";

export default function MusicPlayer({ songs }) {
  return (
    <div className="lyrics-box" id="songs">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-12 d-flex justify-content-center mb-5">
            <div
              className="music-card__wrapper wow left-animation"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <div className="music-card">
                <div className="music-card__content">
                  <img
                    className="music-image"
                    src="./assets/images/minh-pham.jpg"
                    alt=""
                  />
                  <div className="music-info">
                    <h2 className="music-name">Black Hole</h2>
                    <p className="music-artist">minh pham</p>
                  </div>
                  <audio
                    id="audio1"
                    src="./assets/songs/Black-Hole-Sun.mp3"
                  ></audio>
                  <div className="music-progress">
                    <div id="progress-bar" className="music-progress-bar"></div>
                    <div className="music-progress__time">
                      <span className="music-progress__time-item music-current-time">
                        00:00
                      </span>
                      <span className="music-progress__time-item music-duration-time">
                        NaN:NaN
                      </span>
                    </div>
                  </div>
                  <div className="music-controls">
                    <div id="play" className="music-controls-item play">
                      <i className="bx bx-play music-controls-item--icon play-icon"></i>
                      <div className="play-icon-background"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="music-list-row">
              {songs.map((item, index) => (
                <Song
                  key={index}
                  cover={item.album.cover}
                  title={item.title}
                  preview={item.preview}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
