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

//function MovieCardDetail({img, title, releaseDate, runtime, genre, language, voteAverage, overview} : props){
 

function MovieCardDetail(){

    const imga = "https://image.tmdb.org/t/p/w185/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg"

    return(
            <div className="movieCardDetail">
                <img src={imga} alt="image film"></img>
                
                <div className="movieDetail">
                    <h3 className="movieTitleDetail">Title of the movie</h3>
                    <p className="movieInfoDetail">release date | runtime | genre</p>
                    <p>Language origin</p>

                    <div className="movieVotesDetail">
                        <h4>Rating by viewrs</h4>
                        <p>5</p>
                        
                    </div>

                    <p className="movieOverviewDetail">Brief description or summary of the movie.</p>
                    <button>Ver mais</button>
                    
                </div>
                
                
            </div>
       
        
    );
}

export default MovieCardDetail