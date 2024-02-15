import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="site-branding">
              {/* <a
                href="index.html"
                title="SpiffyPlay - Music Design HTML5 Template"
              >
                <img src="assets/images/Logo-new.svg" alt="Logo New" />
              </a> */}
            </div>
          </div>
          <div className="col-lg-9">
            <div className="main-navigation">
              <button className="hamburger for-mob">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="header-menu">
                <div className="menu-main-menu-container">
                  <ul className="d-flex">
                    <li>
                      <a href="index.html" title="Home">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="artists.html" title="Artists">
                        Artists
                      </a>
                    </li>
                    <li>
                      <a href="albums.html" title="Albums">
                        Albums
                      </a>
                    </li>
                    <li>
                      <a href="events.html" title="Events">
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="gallery.html" title="Gallery">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a href="index.html#songs" title="Songs">
                        Songs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
