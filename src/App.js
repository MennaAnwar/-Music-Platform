import "./App.css";
import MainBanner from "./Components/MainBanner/MainBanner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="overlay-body">
      <Navbar />
      <MainBanner />
    </div>
  );
}

export default App;
