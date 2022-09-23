
import { useState } from 'react';
import './App.css';
import PostList from './components/PostList.js';
import Pagination from './components/Pagination.js';
import SearchComp from './components/SearchComp.js';

// (완!) ~ 검색창 만들기 
//  ~ 제목 클릭 시, 상세 내용 보이기 (요소: 제목, 작성자, 내용)
//  ~ 상세내용 안에 수정버튼 만들어 글 수정
//  ~ 각 글마다 삭제 버튼 추가 => 버튼 누르면 암호 입력창 뜨고 암호 올바르면 삭제

function App() {

  const [postList, setPostList] = useState([
    {no:10, title:"title-10", date:"2022-09-22", name:"kim", contents:"contents-10"},
    {no:9, title:"title-09", date:"2022-09-21", name:"sim", contents:"contents-9"},
    {no:8, title:"title-08", date:"2022-09-20", name:"bim", contents:"contents-8"},
    {no:7, title:"title-07", date:"2022-09-19", name:"zim", contents:"contents-7"},
    {no:6, title:"title-06", date:"2022-09-18", name:"xim", contents:"contents-6"},
    {no:5, title:"title-05", date:"2022-09-17", name:"fim", contents:"contents-5"},
    {no:4, title:"title-04", date:"2022-09-16", name:"cim", contents:"contents-4"},
    {no:3, title:"title-03", date:"2022-09-15", name:"nim", contents:"contents-3"},
    {no:2, title:"title-02", date:"2022-09-14", name:"pim", contents:"contents-2"},
    {no:1, title:"title-01", date:"2022-09-13", name:"lim", contents:"contents-1"},
  ])

  const [postPerPage, setPostPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPostList=(postList)=>{
    const indexOfFirst = (currentPage-1)*postPerPage
    const indexOfLast = indexOfFirst+postPerPage
    const slicedPostList = postList.slice(indexOfFirst, indexOfLast)
    return slicedPostList;
  }

  const searchPersonInfo=(searchText)=>{
    alert("App.js")
    alert("입력할 검색어:"+searchText)
  }

  return (
    <div id='app'>
      <SearchComp searchPersonInfo={searchPersonInfo}/>
      <PostList postList={currentPostList(postList)}/>
      <Pagination postPerPage={postPerPage} total={postList.length} 
      setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default App;
