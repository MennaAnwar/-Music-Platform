import "./Dashboard.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Context from "../../Context";
import Loader from "../Loader/Loader";

export default function Dashboard() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { isLoading, setIsLoading, logged_in, userData, setCookie } =
    useContext(Context);

  useEffect(() => {
    if (logged_in === true) {
      setCookie("rememberMe", true, {
        path: "/",
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      });
      for (const key in userData) {
        setCookie(key, userData[key], {
          path: "/",
          expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        });
      }
    }
  }, [userData]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8000/api/chart`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(function (res) {
        setAlbums(res.data.albums.data);
        setArtists(res.data.artists.data);
        setPlaylists(res.data.playlists.data);
        setPodcasts(res.data.podcasts.data);
        setTracks(res.data.tracks.data);
      })
      .catch(function (error) {
        console.error("Error fetching chart data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userData.token]);

  return isLoading ? (
    <Loader />
  ) : (
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
            className="mySwiper artists-swiper"
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

                  <div className="d-block text-center">
                    <Link className="mt-3" to={`/artist/${item.id}`}>
                      {item.name}
                    </Link>
                  </div>
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
            className="mySwiper albums-swiper"
          >
            {albums.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="avatar__image"
                  />

                  <div className="d-block text-center">{item.title}</div>
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
            className="mySwiper playlists-swiper"
          >
            {playlists.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <img
                    src={item.picture}
                    alt={item.title}
                    className="avatar__image"
                  />

                  <div className="d-block text-center">{item.title}</div>
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
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwipe podcast-swiper"
          >
            {podcasts.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <img
                    src={item.picture}
                    alt={item.title}
                    className="avatar__image"
                  />

                  <div className="d-block text-center">{item.title}</div>
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
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper tracks-swiper"
          >
            {tracks.map((item, index) => (
              <SwiperSlide
                key={index}
                role="group"
                aria-label="1 / 10"
                className="swiper-slide-active"
              >
                <div className="d-block text-center">
                  <img
                    src={item.album.cover}
                    alt={item.title}
                    className="avatar__image"
                  />

                  <div className="d-block text-center">{item.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
