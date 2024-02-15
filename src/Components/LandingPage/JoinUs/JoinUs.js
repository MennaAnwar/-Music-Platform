import { Link } from "react-router-dom";
import "./JoinUs.css";

export default function JoinUs() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div
            className="banner-img wow left-animation"
            data-wow-duration="0.8s"
            data-wow-delay="0.2s"
          >
            <div className="music-img"></div>
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className="footer-content">
            <h1
              className="h1-title wow right-animation"
              data-wow-duration="0.8s"
              data-wow-delay="0.3s"
            >
              Music to fill your heart.
            </h1>
            <h3
              className="wow right-animation"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              Get playlists and albums inspired by the artists and genres you're
              listing to.
            </h3>
            <div className="banner-btn">
              <Link to="/membership" className="sec-btn wow left-animation">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
