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
            {this.props.image}
        </div>
        <div id='right-side'>
            <span>제목: {this.props.title} </span>
            <span>년도: {this.props.pubDate} </span>
            <span>감독: {this.props.director}</span>
            <span>배우: {this.props.actor}</span>
            <span>평점: {this.props.userRating}/10</span>
        </div>
      </div>
    );
  }
}

export default Movie;