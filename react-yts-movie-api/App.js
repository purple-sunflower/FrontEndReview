import axios from 'axios';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movieList:[] // 빈 배열
    }
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies=async()=>{
    const {data : {data : {movies}}} 
    = await axios.get("https://yts.mx/api/v2/list_movies.json")
    this.setState({movies})

    const {movieList} = this.state

    for(var i=0; i<movies.length; i++){
        // finalMovieList: [...movieList, movies[i].title]
        // movieList.concat(movies[i].title)
        // push말고 원래 배열에 값 계속 추가 하는 함수?
        // concat은 제일 마지막 배열만 저장됨
        // this.setState 할 때마다 값이 변경됨!
      movieList.push(movies[i].title)
    }
  }

  render(){

    return (
      <div id="App">
        <p>{this.state.movieList[0]}</p>
        <p>{this.state.movieList[1]}</p>
        <p>{this.state.movieList[2]}</p>
        <p>{this.state.movieList[3]}</p>
        <p>{this.state.movieList[4]}</p>
      </div>
    );
  }
}

export default App;
