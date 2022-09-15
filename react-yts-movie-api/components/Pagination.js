import { Component } from 'react';
import '../css/Pagination.css';

class Pagination extends Component {
  constructor(props){
    super(props)
    this.state={
    
    }
  }

  setCurrentPage=(page)=>{
    alert(page+"페이지 클릭(Pagination.js)")
    this.props.setCurrentPage(page)
  }

  prevPage=()=>{
    alert("이전")

    const {currentPage, setCurrentPage} = this.props
    if (currentPage==1){
        alert("여기는 첫 페이지 입니다.")
        return
    }
    setCurrentPage(currentPage-1)
  }

  nextPage=()=>{
    alert("다음")

    const {currentPage, setCurrentPage} = this.props
    const {lastPageNum} = this.state

    if (currentPage+1 > lastPageNum){
        alert("여기는 마지막 페이지 입니다.")
        return
    }
    setCurrentPage(currentPage+1)
  }

  render(){
    const {movieListLength, movieListPerPage} = this.props

    let pageNumbers=[];
    const lastPageNum = Math.ceil(movieListLength/movieListPerPage)
    for(var i=1; i<=lastPageNum; i++){
        pageNumbers.push(i)
    }

    const movieList=pageNumbers.map(
        (data)=>(<span className='page' key={data}
        onClick={()=>this.setCurrentPage(data)}>{data}</span>)
      )

    return (
      <div id="pagination">
        <div>
            총 글 갯수: {movieListLength}
        </div>
        <div>
            페이지당 글 갯수: {movieListPerPage}
        </div>
        <div>
            <span className='page' onClick={this.prevPage}>
                &lt;
            </span>
            <span>{movieList}</span>
            <span className='page' onClick={this.nextPage}>
                &gt;
            </span>
        </div>
      </div>
    );
  }
}

export default Pagination;