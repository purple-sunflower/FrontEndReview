import axios from 'axios';
import { Component } from 'react';
import './App.css';
import Movie from './components/Movie.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movieTitleList:[] // 빈 배열
    }
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies=async()=>{
    const {data : {data : {movies}}} 
    = await axios.get("https://yts.mx/api/v2/list_movies.json")
    this.setState({movies})

    const {movieTitleList} = this.state

    for(var i=0; i<movies.length; i++){
        // finalMovieList: [...movieList, movies[i].title]
        // movieList.concat(movies[i].title)
        // push말고 원래 배열에 값 계속 추가 하는 함수?
        // concat은 제일 마지막 배열만 저장됨
        // this.setState 할 때마다 값이 변경됨!
        movieTitleList.push(movies[i].title)
      console.log(movies[i])
      // movieList가 필요가 있나??
    }
  }

  render(){

    return (
      <div id="App">
        <p>{this.state.movieTitleList[0]}</p>
        <p>{this.state.movieTitleList[1]}</p>
        <p>{this.state.movieTitleList[2]}</p>
        <p>{this.state.movieTitleList[3]}</p>
        <p>{this.state.movieTitleList[4]}</p>
        <Movie movieTitleList={this.state.movieTitleList}/>
      </div>
    );
  }
}

export default App;
