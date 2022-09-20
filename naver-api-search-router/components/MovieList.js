import { Component } from 'react';
import '../css/MovieList.css';
import Movie from './Movie';

class MovieList extends Component {
  constructor(props){
    super(props)
    this.state={
    
    }
  }

  // 제목에 나오는 html태그 제거해야 함 -> (구글링: react 태그 제거 ~ replace)

  render(){
    const result= this.props.movieList.map(
        (data) => (<Movie key={data.id} 
        image = {<img src= {data.image}/>}
        title={data.title.replace(/(<([^>]+)>)/ig,"")} 
        pubDate={data.pubDate} director={data.director.replace(/(<([^>]+)>)/ig,"").replace(/\|/ig,",")}
        actor={data.actor.replace(/(<([^>]+)>)/ig,"").replace(/\|/ig,",")} userRating={data.userRating}/>)
    )

    // data.title.replace(/(<([^>]+)>)/ig,"") => 모든 태그를 제거
    // data.director.replace(/\|/ig,",") => |를 한꺼번에 바꾸기 (| 앞에 무효화할 수 있도록 \키 넣기)

    return (
      <div id="movie-list">
        {result}
      </div>
    );
  }
}

export default MovieList;