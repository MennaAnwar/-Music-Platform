import "./Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/chart`).then(function (res) {
      setAlbums(res.data.albums.data);
      setArtists(res.data.artists.data);
      setPlaylists(res.data.playlists.data);
      setPodcasts(res.data.podcasts.data);
      setTracks(res.data.tracks.data);
      console.log(res.data);
    });
  });

  useEffect(() => {
    console.log(artists);
    console.log(playlists);
    console.log(podcasts);
    console.log(tracks);
  }, [artists, playlists, podcasts, tracks, albums]);

  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Top <span className="text-primary">Artists</span>
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
            {artists.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <Link to={`/artist/${item.id}`}>
                    <img
                      src={item.picture}
                      alt={item.name}
                      className="avatar__image"
                    />
                  </Link>
                </div>
                <div className="d-block text-center">
                  <Link className="mt-3" to={`/artist/${item.id}`}>
                    {item.name}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Top <span className="text-primary">Albums</span>
            </h3>
          </div>
          <Swiper
            slidesPerView={4}
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
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <a href="/demo/app/artist/1/details">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="avatar__image"
                    />
                  </a>
                </div>
                <div className="d-block text-center">
                  <a className="mt-3" href="/demo/app/artist/1/details">
                    {item.title}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Top <span className="text-primary">Playlists</span>
            </h3>
          </div>
          <Swiper
            slidesPerView={4}
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
            {playlists.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <a href="/demo/app/artist/1/details">
                    <img
                      src={item.picture}
                      alt={item.title}
                      className="avatar__image"
                    />
                  </a>
                </div>
                <div className="d-block text-center">
                  <a className="mt-3" href="/demo/app/artist/1/details">
                    {item.title}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              <span className="text-primary">Podcasts</span>
            </h3>
          </div>
          <Swiper
            slidesPerView={4}
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
            {podcasts.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <a href="/demo/app/artist/1/details">
                    <img
                      src={item.picture}
                      alt={item.title}
                      className="avatar__image"
                    />
                  </a>
                </div>
                <div className="d-block text-center">
                  <a className="mt-3" href="/demo/app/artist/1/details">
                    {item.title}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              Top <span className="text-primary">Tracks</span>
            </h3>
          </div>
          <Swiper
            slidesPerView={4}
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
            {tracks.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <a href="/demo/app/artist/1/details">
                    <img
                      src={item.album.cover}
                      alt={item.title}
                      className="avatar__image"
                    />
                  </a>
                </div>
                <div className="d-block text-center">
                  <a className="mt-3" href="/demo/app/artist/1/details">
                    {item.title}
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
