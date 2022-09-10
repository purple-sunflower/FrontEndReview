import { useState } from 'react';
import './App.css';
import PostList from './components/PostList.js';
import Pagination from './components/Pagination.js'

function App() {

  const [postList, setPostList]= useState([
    {id:10, title:'title-10'},
    {id:9, title:'title-9'},
    {id:8, title:'title-8'},
    {id:7, title:'title-7'},
    {id:6, title:'title-6'},
    {id:5, title:'title-5'},
    {id:4, title:'title-4'},
    {id:3, title:'title-3'},
    {id:2, title:'title-2'},
    {id:1, title:'title-1'}
  ])

  const [postPerPage, setPostPerPage] = useState(3)
  const [currentPage, setCurrentPage] = useState(1)

  const currentPostList=(postList)=>{
    const startIndex = (currentPage-1)*postPerPage
    const lastIndex = startIndex+postPerPage
    const slicedList = postList.slice(startIndex, lastIndex)
    return slicedList
  }

  return (
    <div id='app'>
      <PostList postList={currentPostList(postList)}/>
      <Pagination postPerPage={postPerPage} total={postList.length}
      setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
