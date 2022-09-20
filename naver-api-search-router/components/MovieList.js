import { Component } from 'react';
import '../css/MovieList.css';
import Movie from './Movie';

class MovieList extends Component {
  constructor(props){
    super(props)
    this.state={
    
    }
  }

  render(){
    const result= this.props.movieList.map(
        (data) => (<Movie key={data.id} 
        image = {<img src= {data.image}/>}
        title={data.title} pubDate={data.pubDate} director={data.director}
        actor={data.actor} userRating={data.userRating}/>)
    )

    return (
      <div id="movie-list">
        {result}
      </div>
    );
  }
}

export default MovieList;