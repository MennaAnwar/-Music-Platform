import "./MainBanner.css";

export default function MainBanner() {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <h3
                className="wow left-animation"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                One good thing about music,
              </h3>
              <h1
                className="h1-title wow left-animation"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                when it hits you, you feel no pain.
              </h1>
              {/*               <div className="banner-btn">
                <a
                  href="javascript:void(0);"
                  title="Google Play"
                  className="sec-btn wow left-animation"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <span>
                    <i className="fab fa-google-play" aria-hidden="true"></i>
                  </span>
                  google play
                </a>
                <a
                  href="javascript:void(0);"
                  title="Amazon Music"
                  className="sec-btn hover-btn wow left-animation"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <span>
                    <i className="fab fa-amazon" aria-hidden="true"></i>
                  </span>
                  Amazon Music
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 for-des">
            <div
              className="banner-img wow right-animation"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <div className="back-img"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
