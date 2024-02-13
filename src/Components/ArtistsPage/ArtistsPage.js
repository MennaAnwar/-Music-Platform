import Hero from "../Hero/Hero";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./ArtistsPage.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "../../Context";
import Loader from "../Loader/Loader";

export default function ArtistsPage() {
  const [artists, setArtists] = useState([]);
  const { userData, setIsLoading, isLoading } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8000/api/chart`, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then(function (res) {
        setArtists(res.data.artists.data);
        setIsLoading(false);
      });
  }, []);

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
          <div className="d-flex flex-wrap justify-content-center cover row g-4">
            {artists.map((item, index) => (
              <div className="col-6 col-xl-2 col-md-3 col-sm-4 mx-2">
                <Link
                  key={index}
                  to={`/artist/${item.id}`}
                  className="cover cover--round "
                >
                  <div className="cover__image">
                    <img src={item.picture} alt={item.name} />
                  </div>
                  <div className="cover__foot">
                    <span className="cover__title text-truncate">
                      {item.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
