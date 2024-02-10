import "./MusicPlayer.css";

export default function MusicPlayer() {
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
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div
                    className="music-list-box wow right-animation"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <div className="music-list-image">
                      <div className="back-img"></div>
                    </div>
                    <div className="music-list-info">
                      <div className="music-info">
                        <h2 className="music-name">Broken Song</h2>
                        <p className="music-artist">austin neill</p>
                      </div>
                    </div>
                    <div className="music_controls">
                      <div
                        data-id="1"
                        className="music-controls-item play play_btn"
                      >
                        <i className="bx bx-play music-controls-item--icon play-icon"></i>
                        <div className="play-icon-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="music-list-box wow right-animation"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <div className="music-list-image">
                      <div className="back-img"></div>
                    </div>
                    <div className="music-list-info">
                      <div className="music-info">
                        <h2 className="music-name">Blue Ghost</h2>
                        <p className="music-artist">joshua fuller</p>
                      </div>
                    </div>
                    <div className="music_controls">
                      <div
                        data-id="2"
                        className="music-controls-item play play_btn"
                      >
                        <i className="bx bx-play music-controls-item--icon play-icon"></i>

                        <div className="play-icon-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="music-list-box wow right-animation"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <div className="music-list-image">
                      <div className="back-img"></div>
                    </div>
                    <div className="music-list-info">
                      <div className="music-info">
                        <h2 className="music-name">Altered Song</h2>
                        <p className="music-artist">slim emcee</p>
                      </div>
                    </div>
                    <div className="music_controls">
                      <div data-id="3" className="music-controls-item play_btn">
                        <i className="bx bx-play music-controls-item--icon play-icon"></i>

                        <div className="play-icon-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="music-list-box wow right-animation"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <div className="music-list-image">
                      <div className="back-img"></div>
                    </div>
                    <div className="music-list-info">
                      <div className="music-info">
                        <h2 className="music-name">Frau Power</h2>
                        <p className="music-artist">nick karvounis</p>
                      </div>
                    </div>
                    <div className="music_controls">
                      <div data-id="0" className="music-controls-item play_btn">
                        <i className="bx bx-play music-controls-item--icon play-icon"></i>
                        <div className="play-icon-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="music-list-box wow right-animation"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <div className="music-list-image">
                      <div className="back-img"></div>
                    </div>
                    <div className="music-list-info">
                      <div className="music-info">
                        <h2 className="music-name">Paranoia Overflow</h2>
                        <p className="music-artist">felipe portella</p>
                      </div>
                    </div>
                    <div className="music_controls">
                      <div
                        data-id="4"
                        className="music-controls-item play play_btn"
                      >
                        <i className="bx bx-play music-controls-item--icon play-icon"></i>

                        <div className="play-icon-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="music-list-box wow right-animation current_play"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  >
                    <div className="music-list-image">
                      <div className="back-img"></div>
                    </div>
                    <div className="music-list-info">
                      <div className="music-info">
                        <h2 className="music-name">Black Hole</h2>
                        <p className="music-artist">minh pham</p>
                      </div>
                    </div>
                    <div className="music_controls">
                      <div
                        data-id="5"
                        className="music-controls-item play pause_btn"
                      >
                        <i className="bx bx-play music-controls-item--icon play-icon"></i>

                        <div className="play-icon-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
