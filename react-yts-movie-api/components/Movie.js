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
        <span>{this.props.no}</span>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default Movie;