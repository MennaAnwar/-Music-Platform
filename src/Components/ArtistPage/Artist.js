import Hero from "../Hero/Hero";
import "./Artist.css";
import Song from "./SongItem";

export default function ArtistDetails() {
  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="row align-items-center">
            <div className="col-xl-3 col-md-4">
              <div className="cover cover--round">
                <div className="cover__image">
                  <img src="images/cover/large/8.jpg" alt="Karen Jennings" />
                </div>
              </div>
            </div>
            <div className="col-1 d-none d-xl-block"></div>
            <div className="col-md-8 mt-5 mt-md-0">
              <div className="d-flex flex-wrap mb-2">
                <span className="text-dark fs-4 fw-semi-bold pe-2">
                  Karen Jennings
                </span>
              </div>
              <ul className="info-list info-list--dotted mb-3">
                <li>10 Album</li>
                <li>245 Songs</li>
                <li>Apr 1, 1990</li>
              </ul>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus iste fugit voluptatum dolorem assumenda deleniti,
                mollitia culpa facere. Velit nisi quidem nesciunt quae veritatis
                possimus cupiditate placeat officiis ab modi!
              </p>
              <ul className="info-list">
                <li>
                  <a
                    href="javascript:void(0);"
                    role="button"
                    className="text-dark d-flex align-items-center"
                    aria-label="Favorite"
                    data-favorite-id="1"
                  >
                    <i class="bx bx-heart"></i>
                    <span className="ps-2 fw-medium">121</span>
                  </a>
                </li>
                <li>
                  <span className="text-dark d-flex align-items-center">
                    <i className="bx bxs-star text-warning"></i>{" "}
                    <span className="ps-2 fw-medium">4.5</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section__head">
            <h3 class="mb-0">
              Top <span class="text-primary">Songs</span>
            </h3>
          </div>
          <div className="list">
            <div className="row">
              <div className="col-lg-6">
                <Song />
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
