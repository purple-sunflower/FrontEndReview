import '../css/Pagination.css';

function Pagination(props) {

    let pageNumbers=[];
    const lastPageNum = Math.ceil((props.total)/(props.moviePerPage))
    for(var i=1; i<=lastPageNum; i++){
        pageNumbers.push(i)
    }

    const prevPage=()=>{
      alert("이전")
      if (props.currentPage===1){
          alert("여기는 첫 페이지 입니다.")
          return
      }
      props.setCurrentPage(props.currentPage-1)
    }
  
    const nextPage=()=>{
      alert("다음")
      if (props.currentPage+1 > lastPageNum){
          alert("여기는 마지막 페이지 입니다.")
          return
      }
      props.setCurrentPage(props.currentPage+1)
    }

    const pageClick=(page)=>{
      alert(page)
      props.setCurrentPage(page)
    }

    const result=pageNumbers.map(
        (page)=>(<span className='page' key={page}
        onClick={()=>pageClick(page)}>{page}</span>)
      )

    return (
      <div id="pagination">
        <div>
            총 글 갯수: {props.total}
        </div>
        <div>
            페이지당 글 갯수: {props.moviePerPage}
        </div>
        <div>
            <span className='page' onClick={prevPage}>
                &lt;
            </span>
            <span>{result}</span>
            <span className='page' onClick={nextPage}>
                &gt;
            </span>
        </div>
      </div>
    );
  }


export default Pagination;