import Song from "../ArtistDetails/SongItem";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
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
          <MusicPlayer />
        </div>
      </div>
    </>
  );
}
