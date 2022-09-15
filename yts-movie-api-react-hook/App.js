import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList.js'
import Pagination from './components/Pagination.js';

function App(){
  const [movieList, setMovieList] = useState([]);

  // axios로 yts-movie data 가져오기
  useEffect(()=>{
    getMovies()
  }) // componentDidMount을 react hook에서는 useEffect로

  const [movieListPerPage, setMovieListPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)

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
    const indexOfFirst = (currentPage-1)*movieListPerPage
    const indexOfLast = indexOfFirst+movieListPerPage
    const slicedMovieList = movieList.slice(indexOfFirst, indexOfLast)
    return slicedMovieList;
  }

    return (
      <div id="App">
        <MovieList movieList={currentMovieList(movieList)}/>
        <Pagination movieListPerPage={movieListPerPage} total={movieList.length}
        setCurrentPage={setCurrentPage}/>
      </div>
    );
  }


export default App;
