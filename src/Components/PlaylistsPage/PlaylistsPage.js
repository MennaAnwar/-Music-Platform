import "./PlaylistsPage.css";
import Hero from "./../Hero/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Swal from "sweetalert2";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/chart`).then(function (res) {
      setPlaylists(res.data.playlists.data);
      console.log(res.data);
    });
  });

  const handleClick = () => {
    Swal.fire({
      title: "Add your playlist name",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Create",
      showLoaderOnConfirm: true,
      preConfirm: (playlistName) => {
        return axios
          .post(`http://localhost:8000/api/playlists`, { name: playlistName })
          .then((response) => {
            if (response.status !== 200 && response.status !== 201) {
              throw new Error(response.statusText);
            }
            console.log(response.data);
            return response.data;
          })
          .catch((error) => {
            if (error.response) {
              Swal.showValidationMessage(
                `Request failed: ${error.response.data}`
              );
            } else if (error.request) {
              Swal.showValidationMessage(`Request failed: ${error.request}`);
            } else {
              Swal.showValidationMessage(`Error: ${error.message}`);
            }
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <Hero />
      <div className="section">
        <div className="section__head">
          <h3 className="mb-0">
            My <span className="text-primary">Playlists</span>
          </h3>
        </div>
        <div className="myplaylists d-flex flex-wrap">
          <div className="createPlaylist" onClick={handleClick}>
            + New Playlist
          </div>
        </div>
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
    </>
  );
}
