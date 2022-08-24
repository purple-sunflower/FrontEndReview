import { Component } from 'react';
import '../css/Pagination.css';


class Pagination extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  componentDidMount=()=>{
    var pageList = document.getElementsByClassName('page')
    pageList[1].style.color="hotpink"
    pageList[1].style.backgroundColor="ivory"
  }

  setCurrentPage=(page)=>{
    alert(page+"페이지 입력!(Pagination.js)")
    this.props.setCurrentPage(page)
    this.setAllDefault()
    this.setPageHighLight(page)
  }

  prevFunc=()=>{
    alert("이전")
    const {currentPage, setCurrentPage} = this.props
    if (currentPage === 1){
      alert("첫페이지 입니다.")
      return
    }
    setCurrentPage(currentPage-1)
  }

  nextFunc=()=>{
    alert("다음")
    const {currentPage, setCurrentPage, smListLength, smListPerPage} = this.props
    const endPage = Math.ceil(smListLength/smListPerPage)
    if (currentPage+1 > endPage){
      alert("끝페이지 입니다.")
      return
    }
    setCurrentPage(currentPage+1)
  }

  setAllDefault=()=>{
    alert("모두 해제!")
    var pageList = document.getElementsByClassName('page')
    const pageListLength = pageList.length
    for(var i=0; i<pageListLength; i++){
      pageList[i].style.color="ivory"
      pageList[i].style.backgroundColor="hotpink"
    } 
  }

  setPageHighLight=(page)=>{
    alert(page+"페이지 클릭!")
    var pageList=document.getElementsByClassName('page')
    pageList[page].style.color="hotpink"
    pageList[page].style.backgroundColor="ivory"
  }

  render(){

    const {smListLength, smListPerPage} = this.props
    let pageNumbers = [];
    const lastPageNum = Math.ceil(smListLength/smListPerPage)
    for(var i=1; i<=lastPageNum; i++) {
        pageNumbers.push(i)
    }

    const pageList = pageNumbers.map(
        (data) => (<span className='page' 
        onClick={()=>this.setCurrentPage(data)}>{data}</span>)
    )

    return (
      <div id="pagination">
        <div>총 글 갯수: {smListLength}</div>
        <div>페이지당 글 갯수: {smListPerPage}</div>
        <div>
            <span className='page' onClick={this.prevFunc}>&lt;</span>
            {pageList}
            <span className='page' onClick={this.nextFunc}>&gt;</span>
        </div>
      </div>
    );
  }
}

export default Pagination;