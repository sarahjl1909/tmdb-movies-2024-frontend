import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import SearchPage from "../pages/SearchPage/SearchPage";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies/:id" element={<MovieDetail />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesApp;
