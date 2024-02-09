import Hero from "../Hero/Hero";
import { GenresImages } from "./Images";

export default function GenresPage() {
  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Music <span className="text-primary">Genres</span>
            </h3>
          </div>
          <div className="d-flex flex-wrap justify-content-center cover row g-4">
            {GenresImages.map((item, index) => (
              <div class="col-xl-3 col-sm-6">
                <div class="cover cover--round">
                  <a href="genre-details.html" class="cover__image">
                    <img src={item.src} alt={item.genre} />
                    <div class="cover__image__content">
                      <span class="cover__title mb-1 fs-6 text-truncate">
                        {item.genre}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
