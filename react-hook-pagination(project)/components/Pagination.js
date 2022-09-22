import "../css/Pagination.css"

function Pagination(props){

    const lastPage = Math.ceil((props.total)/(props.postPerPage)) 
    const pageNumbers = []
    for(var i=1; i<=lastPage; i++){
        pageNumbers.push(i)
    }

    const pageClick=(page)=>{
        alert(page)
        props.setCurrentPage(page)
    }

    const result = pageNumbers.map(
        (page) =>(<span className="page" onClick={()=>pageClick(page)}>{page}</span>)
    )

    const prevPage=()=>{
        if(props.currentPage==1){
            alert("첫페이지입니다.")
            return
        }
        props.setCurrentPage(props.currentPage-1)
    }

    const nextPage=()=>{
        if(props.currentPage+1 > lastPage){
            alert("마지막페이지입니다.")
            return
        }
        props.setCurrentPage(props.currentPage+1)
    }

    return(
        <div id="pagination">
            <div>
                총 글 갯수: {props.total}
            </div>
            <div>
                페이지당 글 갯수: {props.postPerPage}
            </div>
            <div>
                <span className="page" onClick={prevPage}>
                    &lt;
                </span>
                {result}
                <span className="page" onClick={nextPage}>
                    &gt;
                </span>
            </div>
        </div>
    )
}

export default Pagination;