import { Component } from 'react';
import './App.css';
import SmList from './components/SmList.js'
import Pagination from './components/Pagination.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      smList:[
        {imgSrc: 'tvxq.jpg', no:1, name:'동방신기', debut_year:2003, member:2},
        {imgSrc: 'girls_generation.jpg', no:2, name:'소녀시대', debut_year:2007, member:9},
        {imgSrc: 'superJunior.jpg', no:3, name:'슈퍼주니어', debut_year:2005, member:10},
        {imgSrc: 'shinee.jpg', no:4, name:'샤이니', debut_year:2008, member:5},
        {imgSrc: 'fx.jpg', no:5, name:'에프엑스', debut_year:2009, member:5},
        {imgSrc: 'wayv.jpg', no:6, name:'Way-v', debut_year:2019, member:7},
        {imgSrc: 'aespa.jpg', no:7, name:'에스파', debut_year:2020, member:4},
        {imgSrc: 'exo.jpg', no:8, name:'엑소', debut_year:2012, member:9},
        {imgSrc: 'redvelvet.jpg', no:9, name:'레드벨벳', debut_year:2014, member:5},
        {imgSrc: 'nct127.jpg', no:10, name:'NCT 127', debut_year:2016, member:10},
        {imgSrc: 'nctdream.jpg', no:11, name:'NCT DREAM', debut_year:2016, member:7}
      ],
      smListPerPage: 3,
      currentPage: 1
    }
  }

  setCurrentPage=(page)=>{
    alert(page+"페이지 입력!(App.js)")
    this.setState({
      currentPage:page
    })
  }

  currentSmList=(smList)=>{
    const {currentPage, smListPerPage} = this.state
    const indexOfFirst = (currentPage-1) * smListPerPage
    const indexOfLast = indexOfFirst + smListPerPage
    const sliceSmList = this.state.smList.slice(indexOfFirst, indexOfLast)
    return sliceSmList;
  }

  render(){
    const {smList, currentPage, smListPerPage} = this.state
    return (
      <div id="app">
        <SmList smList={this.currentSmList(smList)}></SmList>
        <Pagination smListLength={smList.length}
        currentPage={currentPage} smListPerPage={smListPerPage}
        setCurrentPage={this.setCurrentPage}></Pagination>
      </div>
    );
  }
}

export default App;
