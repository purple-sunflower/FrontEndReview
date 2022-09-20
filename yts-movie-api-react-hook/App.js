import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList.js'
import Pagination from './components/Pagination.js';

function App(){
  const [movieList, setMovieList] = useState([]);

  // axios로 yts-movie data 가져오기
 
  useEffect(()=>{
    const getMovies = async() =>{
      const {data : {data : {movies}}} 
      = await axios.get("https://yts.mx/api/v2/list_movies.json")
      setMovieList(movies)
    }
    getMovies();
  })

  // componentDidMount을 react hook에서는 useEffect로

  const [moviePerPage, setMoviePerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)

  //pagination
  const currentMovieList=(movieList)=>{
    const indexOfFirst = (currentPage-1)*moviePerPage
    const indexOfLast = indexOfFirst+moviePerPage
    const slicedMovieList = movieList.slice(indexOfFirst, indexOfLast)
    return slicedMovieList;
  }

    return (
      <div id="App">
        <MovieList movieList={currentMovieList(movieList)}/>
        <Pagination moviePerPage={moviePerPage} total={movieList.length}
        setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>
    );
  }


export default App;
