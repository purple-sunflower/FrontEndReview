import "../css/Search.css";
import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import PostList from "./PostList.js";
import Pagination from "./Pagination.js";
import SearchComp from "./SearchComp.js";

// 여기 수정 봐야 함 ㅠㅠ

function Search(){

    useEffect(()=>{
        const queryObj=queryString.parse(window.location.search)
        console.log(window.location.search)
        const searchText = queryObj.searchText
        searchPost(searchText)
    })

    const searchPost=async(searchText)=>{
        const axios_post = await axios.get('/board/title')
    }

    const [postList, setPostList] = useState([]);
  
    const [postPerPage, setPostPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
  
    const currentPostList=(postList)=>{
      const indexOfFirst = (currentPage-1)*postPerPage
      const indexOfLast = indexOfFirst+postPerPage
      const slicedPostList = postList.slice(indexOfFirst, indexOfLast)
      return slicedPostList;
  
    }
  
    const lastPage = Math.ceil((postList.length)/postPerPage)
  
    return (
      <div id='search'>
        <SearchComp/>
        <span>총 게시물: {postList.length}   /</span>
        <span>   페이지 : {currentPage}/{lastPage}</span>
        <PostList postList={currentPostList(postList)}/>
        <button><Link to='/postWrite' id='postwrite_btn'>글쓰기</Link></button>
        <Pagination currentPage={currentPage} postPerPage={postPerPage} 
        total={postList.length} setCurrentPage={setCurrentPage}/>
      </div>
    );
}

export default Search;