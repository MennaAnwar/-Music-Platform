import "./MusicPlayer.css";
import Song from "../ArtistDetails/SongItem";

export default function MusicPlayer({ songs, action, icon }) {
  return (
    <div className="lyrics-box" id="songs">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-12">
            <div className="music-list-row list">
              {songs.map((item, index) => (
                <Song
                  key={index}
                  cover={item.album.cover}
                  title={item.title}
                  preview={item.preview}
                  name={item.artist.name}
                  song_id={item.id}
                  icon={icon}
                  action={action}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
