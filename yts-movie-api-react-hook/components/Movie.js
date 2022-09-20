import '../css/Movie.css';

function Movie(props){

    return (
      <div id="movie">
        <div id='left-side'>
            {props.medium_cover_image}
        </div>
        <div id='right-side'>
            <span>제목: {props.title} </span>
            <span>년도: {props.year} </span>
            <span>장르: {props.genres}</span>
            <span>러닝타임: {props.runtime}분</span>
            <span>평점: {props.rating}/10</span>
            <span>줄거리: {props.summary}</span>
        </div>
      </div>
    );
    
  }

export default Movie;