import { Component } from 'react';
import '../css/Search.css'
import axios from 'axios'
import queryString from 'query-string'
import MovieList from './MovieList.js'
import Pagination from './Pagination.js';

//search한 값을 pagination

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
           movieList:[],
           currentPage:1,
           moviePerPage:3
        }
    }

    componentDidMount(){
    //    console.log('Search')
    //   console.log('window.location', window.location) // host, hostname, href, pathname. port...
    //    console.log('window.location.href', window.location.href) 
        // http://localhost:3000/search?searchText=블라블라블라&display=10&country=JPN
    //    console.log('window.location.search', window.location.search)
        // ?searchText=블라블라블라&display=10&country=JPN
        const queryObj=queryString.parse(window.location.search)
    //    console.log(queryObj) // {country: 'JPN', display: '10', searchText: '스파이더맨'}
    //    console.log(queryObj.searchText) //스파이더맨
        const searchText = queryObj.searchText
        this.searchMovie(searchText)
    }

    searchMovie=async(searchText)=>{
        const {movieList} = this.state
        console.log(searchText)
        const axios_movies = await axios({
            method:'get',
            url:`/v1/search/movie.json?query=${searchText}`,
            dataType:'json',
            headers:{
                "X-Naver-Client-Id": "OCTOqeR_MCymgnyep8zR",
                "X-Naver-Client-Secret": "_UO4OJzKop"
            }
        })
        this.setState({
            movieList:axios_movies.data.items
        })
        console.log(axios_movies.data.items)
        console.log(movieList)
    }

    setCurrentPage=(page)=>{
        alert("페이지 설정(App.js):"+page)
        this.setState({
            currentPage:page
        })
    }

    currentMovieList=(movieList)=>{
        const {currentPage, moviePerPage} = this.state
        const indexFirst = (currentPage-1)*moviePerPage
        const indexLast = indexFirst+moviePerPage
        const slicedMovieList = movieList.slice(indexFirst, indexLast)
        return slicedMovieList;
    }

    

    render(){
        const {movieList, moviePerPage, currentPage} = this.state
        return(
            <div id='search'>
                <MovieList movieList={this.currentMovieList(movieList)}/>
                <Pagination movieListLength={movieList.length} currentPage={currentPage}
                moviePerPage={moviePerPage} setCurrentPage={this.setCurrentPage}/>
            </div>
        )
    }
}


export default Search;