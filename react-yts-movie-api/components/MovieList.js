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
        (data) => (<Movie key={data.no} no={data.no}
        title={data.title}/>)
    )

    return (
      <div id="movie-list">
        {result}
      </div>
    );
  }
}

export default MovieList;