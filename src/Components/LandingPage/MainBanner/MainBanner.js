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
