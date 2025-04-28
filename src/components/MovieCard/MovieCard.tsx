import imageFilm from '../../assets/react.svg'
import './index.css'

interface props {
    img: string,
    title: string,
    releaseDate: string
    runtime: string
    genre: string
    language: string
    voteAverage: number
    overview: string  
}
 

function MovieCard({img, title, releaseDate, runtime, genre, language, voteAverage, overview} : props){

    const imga = "https://image.tmdb.org/t/p/w185/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg"

    return(
            <div className="movieCard">
                <img src={imga} alt="image film"></img>
                
                <div className="movieDetails">
                    <h3 className="movieTitle">Title of the movie</h3>
                    <p className="movieInfo">release date | runtime | genre</p>
                    <p>Language origin</p>

                    <div className="movieVotes">
                        <h4>Rating by viewrs</h4>
                        <p>5</p>
                        
                    </div>

                    <p className="movieOverview">Brief description or summary of the movie.</p>
                    
                </div>
                
            </div>
       
        
    );
}

export default MovieCard