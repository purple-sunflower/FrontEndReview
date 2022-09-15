import '../css/Pagination.css';

function Pagination(props) {

  setCurrentPage=(page)=>{
    alert(page+"페이지 클릭(Pagination.js)")
    props.setCurrentPage(page)
  }

  prevPage=()=>{
    alert("이전")
    if (props.currentPage==1){
        alert("여기는 첫 페이지 입니다.")
        return
    }
    props.setCurrentPage(props.currentPage-1)
  }

  nextPage=()=>{
    alert("다음")
    if (props.currentPage+1 > lastPageNum){
        alert("여기는 마지막 페이지 입니다.")
        return
    }
    props.setCurrentPage(currentPage+1)
  }

    let pageNumbers=[];
    const lastPageNum = Math.ceil((props.total)/(props.movieListPerPage))
    for(var i=1; i<=lastPageNum; i++){
        pageNumbers.push(i)
    }

    const pageClick=(page)=>{
      alert(page)
      props.setCurrentPage(page)
    }

    const movieList=pageNumbers.map(
        (data)=>(<span className='page' key={data}
        onClick={()=>pageClick(data)}>{data}</span>)
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


export default Pagination;