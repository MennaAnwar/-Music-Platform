import "./PlaylistsPage.css";
import Hero from "./../Hero/Hero";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Context from "../../Context";
import Loader from "../Loader/Loader";

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);
  const [my_playlists, setMyPlaylists] = useState([]);
  const [dropdownVisibility, setDropdownVisibility] = useState({});
  const { isLoading, setIsLoading, userData } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      axios.get(`http://localhost:8000/api/chart`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }),
      axios.get(`http://localhost:8000/api/playlists`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }),
    ])
      .then(function (responses) {
        const [chartResponse, playlistsResponse] = responses;

        setPlaylists(chartResponse.data.playlists.data);
        setMyPlaylists(playlistsResponse.data);
      })
      .catch(function (error) {
        console.error("Failed to fetch data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userData.token]);

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
          .post(
            `http://localhost:8000/api/playlists`,
            { name: playlistName },
            {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            }
          )
          .then((response) => {
            if (response.status !== 200 && response.status !== 201) {
              throw new Error(response.statusText);
            }
            setMyPlaylists(response.data);
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

  const toggleDropdown = (id) => {
    setDropdownVisibility((prev) => {
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});

      newState[id] = !prev[id];

      return newState;
    });
  };

  const Delete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/deletePlaylist`, {
            params: { playlistId: id },
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          })
          .then((res) => {
            setMyPlaylists(res.data.remainingPlaylists);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Deletion error:", error);
          });
      }
    });
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Hero />
      <div className="section">
        <div className="section__head">
          <h3 className="mb-0">
            My <span className="text-primary">Playlists</span>
          </h3>
        </div>
        <div className="myplaylists d-flex flex-wrap justify-content-evenly">
          {my_playlists.map((item, index) => (
            <div
              key={index}
              className="music-list-box wow right-animation mb-5"
            >
              <div className="music-list-image">
                <div className="back-img"></div>
              </div>
              <div className="music-list-info">
                <div className="music-info">
                  <h2 className="music-name">{item.name}</h2>
                </div>
              </div>
              <div
                className="dropstart more d-inline-flex "
                onClick={() => toggleDropdown(item.id)}
              >
                <a
                  className="dropdown-link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-label="Cover options"
                  aria-expanded="false"
                >
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-sm${
                    dropdownVisibility[item.id] ? " show" : ""
                  }`}
                >
                  <li className="dropdown-item">
                    <Link to={`/playlist/${item.id}`}>view</Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-item" onClick={() => Delete(item.id)}>
                    delete
                  </li>
                </ul>
              </div>
            </div>
          ))}

          <div
            className="music-list-box wow right-animation mb-5"
            onClick={handleClick}
          >
            <div className="music-list-image">
              <div className="back-img"></div>
            </div>
            <div className="music-list-info">
              <div className="music-info">
                <h2 className="music-name">+ New Playlist</h2>
              </div>
            </div>
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
    </>
  );
}
