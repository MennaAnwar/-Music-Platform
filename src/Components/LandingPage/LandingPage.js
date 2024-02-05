import Artists from "./Artists/Artists";
import Footer from "./Footer/Footer";
import MainBanner from "./MainBanner/MainBanner";
import Navbar from "./Navbar/Navbar";

export default function LandingPage() {
  return (
    <div className="body">
      <div className="overlay-body">
        <Navbar />
        <MainBanner />
        <Artists />
        <Footer />
      </div>
    </div>
  );
}
