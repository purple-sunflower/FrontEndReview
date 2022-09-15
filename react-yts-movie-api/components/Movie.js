import { Component } from 'react';
import '../css/Movie.css';

class Movie extends Component {
  constructor(props){
    super(props)
    this.state={
    
    }
  }

  render(){
    return (
      <div id="movie">
        <div id='left-side'>
            {this.props.medium_cover_image}
        </div>
        <div id='right-side'>
            <span>제목: {this.props.title} </span>
            <span>년도: {this.props.year} </span>
            <span>장르: {this.props.genres}</span>
            <span>줄거리: {this.props.summary}</span>
        </div>
      </div>
    );
  }
}

export default Movie;