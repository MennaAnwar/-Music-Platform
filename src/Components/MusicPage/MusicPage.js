import Song from "../ArtistDetails/SongItem";
import Hero from "./../Hero/Hero";

export default function MusicPage() {
  return (
    <>
      <Hero />
      <div className="under-hero container">
        <div className="section">
          <div className="section__head">
            <h3 className="mb-0">
              <span className="text-primary">Songs</span>
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
      </div>
    </>
  );
}
