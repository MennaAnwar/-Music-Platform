import Hero from "../Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Images } from "../LandingPage/Artists/imgs";
import "./ArtistsPage.css";

export default function ArtistsPage() {
  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Featured <span className="text-primary">Artists</span>
            </h3>
          </div>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {Images.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <a href="/demo/app/artist/1/details">
                    <img
                      className="avatar__image"
                      src={item.src}
                      alt={item.name}
                    />
                  </a>
                  <a className="mt-3" href="/demo/app/artist/1/details">
                    {item.name}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Top <span className="text-primary">Artists</span>
            </h3>
          </div>
          <div className="row g-4">
            {Images.map((item, index) => (
              <div className="col-6 col-xl-2 col-md-3 col-sm-4 mx-2">
                <a
                  key={index}
                  href="artist-details.html"
                  class="cover cover--round "
                >
                  <div class="cover__image">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <div class="cover__foot">
                    <span class="cover__title text-truncate">A{item.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
