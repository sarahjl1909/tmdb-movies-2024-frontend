import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import RoutesApp from "./routes/RoutesApp";
import MovieCardDetail from "./components/MovieCardDetail/MovieCardDetail";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesApp />
    </div>
  );
}

export default App;
