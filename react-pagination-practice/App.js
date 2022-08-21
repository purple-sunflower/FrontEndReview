import { Component } from 'react';
import './App.css';
import Pagination from './components/Pagination.js';
import PostList from './components/PostList.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      postList:[ // 목록 배열 만들어줌. 최신순으로 정렬되니 숫자 역 순으로
            {no: 15, title: 'title-15', writer: 'kim', date: '2022-08-21'},
            {no: 14, title: 'title-14', writer: 'lim', date: '2022-08-20'},
            {no: 13, title: 'title-13', writer: 'sim', date: '2022-08-19'},
            {no: 12, title: 'title-12', writer: 'nim', date: '2022-08-18'},
            {no: 11, title: 'title-11', writer: 'vim', date: '2022-08-17'},
            {no: 10, title: 'title-10', writer: 'bim', date: '2022-08-16'},
            {no: 9, title: 'title-9', writer: 'rim', date: '2022-08-15'},
            {no: 8, title: 'title-8', writer: 'wim', date: '2022-08-14'},
            {no: 7, title: 'title-7', writer: 'pim', date: '2022-08-13'},
            {no: 6, title: 'title-6', writer: 'jim', date: '2022-08-12'},
            {no: 5, title: 'title-5', writer: 'xim', date: '2022-08-11'},
            {no: 4, title: 'title-4', writer: 'fim', date: '2022-08-10'},
            {no: 3, title: 'title-3', writer: 'tim', date: '2022-08-09'},
            {no: 2, title: 'title-2', writer: 'dim', date: '2022-08-08'},
            {no: 1, title: 'title-1', writer: 'cim', date: '2022-08-07'}
        ],
        postListPerPage : 4,
        currentPage: 1
    }
  }

  setCurrentPage=(page)=>{
    alert(page+"페이지 클릭!")
    this.setState({
      currentPage:page
    })
  }

  currentPostList=(postList)=>{
    const {currentPage, postListPerPage} = this.state
    const indexOfFirst = (currentPage-1) * postListPerPage
    const indexOfLast = indexOfFirst + postListPerPage
    const slicePostList = postList.slice(indexOfFirst, indexOfLast)
    return slicePostList;
  }

  render(){
    const {postList, postListPerPage, currentPage} = this.state
    return (
      <div id='app'>
        <PostList postList={this.currentPostList(postList)}/>
        <Pagination postListLength={postList.length}
        postListPerPage={postListPerPage}
        currentPage={currentPage}
        setCurrentPage={this.setCurrentPage}/>
      </div>
    );
  }
}

export default App;
