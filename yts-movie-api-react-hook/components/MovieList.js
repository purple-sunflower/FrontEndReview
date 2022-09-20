import '../css/MovieList.css';
import Movie from './Movie.js';

function MovieList(props) {

    const result= props.movieList.map(
        (data) => (<Movie key={data.id} 
        medium_cover_image = {<img src= {data.medium_cover_image}/>}
        title={data.title} year={data.year} genres={data.genres}
        summary={data.summary} runtime={data.runtime} rating={data.rating}/>)
    )

    return (
      <div id="movie-list">
        {result}
      </div>
    );
  }

export default MovieList;