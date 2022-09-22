
import { useState } from 'react';
import './App.css';
import PostList from './components/PostList.js';
import Pagination from './components/Pagination.js';

function App() {

  const [postList, setPostList] = useState([
    {no:10, title:"title-10", date:"2022-09-22", name:"kim"},
    {no:9, title:"title-09", date:"2022-09-21", name:"sim"},
    {no:8, title:"title-08", date:"2022-09-20", name:"bim"},
    {no:7, title:"title-07", date:"2022-09-19", name:"zim"},
    {no:6, title:"title-06", date:"2022-09-18", name:"xim"},
    {no:5, title:"title-05", date:"2022-09-17", name:"fim"},
    {no:4, title:"title-04", date:"2022-09-16", name:"cim"},
    {no:3, title:"title-03", date:"2022-09-15", name:"nim"},
    {no:2, title:"title-02", date:"2022-09-14", name:"pim"},
    {no:1, title:"title-01", date:"2022-09-13", name:"lim"},
  ])

  const [postPerPage, setPostPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPostList=(postList)=>{
    const indexOfFirst = (currentPage-1)*postPerPage
    const indexOfLast = indexOfFirst+postPerPage
    const slicedPostList = postList.slice(indexOfFirst, indexOfLast)
    return slicedPostList;
  }

  return (
    <div id='app'>
      <PostList postList={currentPostList(postList)}/>
      <Pagination postPerPage={postPerPage} total={postList.length} 
      setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default App;
