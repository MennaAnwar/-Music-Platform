import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Hero from "../Hero/Hero";
import "./Artist.css";
import Song from "./SongItem";

export default function ArtistDetails() {
  const { name } = useParams();
  const [artist, setArtist] = useState([]);
  const [TrackList, setTrackList] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/artist`, {
        params: {
          artist: name,
        },
      })
      .then(function (res) {
        console.log(res.data);
        setArtist(res.data.artist);
        setTrackList(res.data.tracks.data);
        setAlbums(res.data.albums.data);
      });
  }, []);

  useEffect(() => {
    console.log(artist);
    console.log(TrackList);
    console.log(albums);
  }, [artist, TrackList, albums]);

  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="row align-items-center">
            <div className="col-xl-3 col-md-4">
              <div className="cover cover--round">
                <div className="cover__image">
                  <img src={artist.picture} alt={artist.name} />
                </div>
              </div>
            </div>
            <div className="col-1 d-none d-xl-block"></div>
            <div className="col-md-8 mt-5 mt-md-0">
              <div className="d-flex flex-wrap mb-2">
                <span className="text-dark fs-4 fw-semi-bold pe-2">
                  {artist.name}
                </span>
              </div>

              <ul className="info-list">
                <li>
                  <a
                    role="button"
                    className="text-dark d-flex align-items-center"
                    aria-label="Favorite"
                    data-favorite-id="1"
                  >
                    <i className="bx bx-album"></i>
                    <span className="ps-2 fw-medium">
                      {artist.nb_album} Album
                    </span>
                  </a>
                </li>
                <li>
                  <span className="text-dark d-flex align-items-center">
                    <i className="bx bx-heart"></i>
                    <span className="ps-2 fw-medium">{artist.nb_fan} Fans</span>
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
              {TrackList.map((track, index) => (
                <div key={index} className="col-xl-6">
                  <Song
                    cover={track.album.cover}
                    title={track.title}
                    preview={track.preview}
                    song_id={track.id}
                    icon="list-plus"
                    action="add"
                  />
                </div>
              ))}
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
            {albums.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label={`${index + 1} / 10`}
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <a
                    href="/demo/app/artist/1/details"
                    style={{ display: "inline-block", marginBottom: "10px" }}
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="avatar__image"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </a>
                  <div className="d-block text-center">
                    <a
                      className="mt-3"
                      href="/demo/app/artist/1/details"
                      style={{
                        display: "block",
                        color: "#000",
                        textDecoration: "none",
                      }}
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
