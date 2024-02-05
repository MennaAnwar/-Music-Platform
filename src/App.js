import "./App.css";
import Navbar from "./Components/LandingPage/Navbar/Navbar";
import MainBanner from "./Components/LandingPage/MainBanner/MainBanner";
import Artists from "./Components/LandingPage/Artists/Artists";
import Footer from "./Components/LandingPage/Footer/Footer";

function App() {
  return (
    <div className="overlay-body">
      <Navbar />
      <MainBanner />
      <Artists />
      <Footer />
    </div>
  );
}

export default App;
