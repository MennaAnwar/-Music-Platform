import "./App.css";
import Artists from "./Components/Artists/Artists";
import MainBanner from "./Components/MainBanner/MainBanner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="overlay-body">
      <Navbar />
      <MainBanner />
      <Artists />
    </div>
  );
}

export default App;
