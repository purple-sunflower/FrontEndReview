import axios from 'axios';
import { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList.js'
import Pagination from './components/Pagination.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movieList:[],
      currentPage:1,
      movieListPerPage:3
    }
  }

  // axios로 yts-movie data 가져오기
  componentDidMount(){
    this.getMovies()
  }

  getMovies=async()=>{
    const {data : {data : {movies}}} 
    = await axios.get("https://yts.mx/api/v2/list_movies.json")
    this.setState({movieList:movies})
  }

  //pagination
  setCurrentPage=(page)=>{
    alert("페이지 설정(App.js):"+page)
    this.setState({
      currentPage:page
    })
  }

  currentMovieList=(movieList)=>{
    const {currentPage, movieListPerPage} = this.state
    const indexOfFirst = (currentPage-1)*movieListPerPage
    const indexOfLast = indexOfFirst+movieListPerPage
    const slicedMovieList = movieList.slice(indexOfFirst, indexOfLast)
    return slicedMovieList;
  }

  render(){
    const {movieList, movieListPerPage, currentPage} = this.state
    return (
      <div id="App">
        <MovieList movieList={this.currentMovieList(movieList)}/>
        <Pagination movieListLength={movieList.length}
        movieListPerPage={movieListPerPage} currentPage={currentPage}
        setCurrentPage={this.setCurrentPage}/>
      </div>
    );
  }
}

export default App;
