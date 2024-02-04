import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Title from "../Title/Title";
import "./Artists.css";
import { Images } from "./imgs";

export default function Artists() {
  return (
    <section className="artist-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Title title="Artists" />
          </div>
        </div>
        <div className="artist-row">
          <div className="row g-5">
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
                      <img src={item.src} alt={item.name} />
                    </a>
                    <a className="mt-3" href="/demo/app/artist/1/details">
                      {item.name}
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
