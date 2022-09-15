import { Component } from 'react';
import '../css/Movie.css';

function Movie(props){

    return (
      <div id="movie">
        <div id='left-side'>
            {this.props.medium_cover_image}
        </div>
        <div id='right-side'>
            <span>제목: {this.props.title} </span>
            <span>년도: {this.props.year} </span>
            <span>장르: {this.props.genres}</span>
            <span>러닝타임: {this.props.runtime}분</span>
            <span>평점: {this.props.rating}/10</span>
            <span>줄거리: {this.props.summary}</span>
        </div>
      </div>
    );
    
  }

export default Movie;