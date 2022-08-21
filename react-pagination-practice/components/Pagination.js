import { Component } from 'react';
import '../css/Pagination.css';

class Pagination extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  setCurrentPage=(page)=>{
    alert(page+"페이지 클릭!")
    this.props.setCurrentPage(page)
  }

  prevPage=()=>{
    const {currentPage} = this.props
    alert("이전!")
    alert(currentPage-1)
    this.props.setCurrentPage(currentPage-1)
  }

  nextPage=()=>{
    const {currentPage} = this.props
    alert("다음")
    alert(currentPage+1)
    this.props.setCurrentPage(currentPage+1)
  }

  render(){

    const {postListLength, postListPerPage} = this.props

    let pageNumbers=[]; // 페이지 번호가 저장될 배열
    const lastPageNum = Math.ceil(postListLength/postListPerPage);
    for(var i = 1; i <= lastPageNum; i++) {
        pageNumbers.push(i);
    }

    const pageList = pageNumbers.map(
        (data) => (<span className='page' key={data}
        onClick={()=>this.setCurrentPage(data)}>{data}</span>)
    )

    return (
      <div id='pagination'>
        <div>총 글 갯수:{postListLength}</div>
        <div>페이지당 글 갯수:{postListPerPage}</div>
        <div>
            <span className='page' onClick={this.prevPage}>&lt;</span>
            {pageList}
            <span className='page' onClick={this.nextPage}>&gt;</span>
        </div>
      </div>
    );
  }
}

export default Pagination;