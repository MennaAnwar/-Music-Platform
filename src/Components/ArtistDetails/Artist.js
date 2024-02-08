import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Hero from "../Hero/Hero";
import "./Artist.css";
import Song from "./SongItem";
import { Images } from "../LandingPage/Artists/imgs";

export default function ArtistDetails() {
  //const { name } = useParams();

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
                    role="button"
                    className="text-dark d-flex align-items-center"
                    aria-label="Favorite"
                    data-favorite-id="1"
                  >
                    <i className="bx bx-heart"></i>
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
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Top <span className="text-primary">Songs</span>
            </h3>
          </div>
          <div className="list">
            <div className="row">
              <div className="col-xl-6">
                <Song />
              </div>
              <div className="col-xl-6">
                <Song />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Top <span className="text-primary">Albums</span>
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
    </>
  );
}
