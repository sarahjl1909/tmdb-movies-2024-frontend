import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movies" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    )
}

export default RoutesApp;