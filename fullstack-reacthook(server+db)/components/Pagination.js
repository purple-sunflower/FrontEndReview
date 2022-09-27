import "../css/Pagination.css"

function Pagination(props) {

    const lastPage = Math.ceil((props.total)/(props.postPerPage))
    const pageNums = []
    for(var i=1; i<=lastPage; i++) {
        pageNums.push(i)
    }    
    
    const pageClick=(page)=>{
        alert(page+"페이지 클릭")
        props.setCurrentPage(page)
    }

    const prevPage=()=>{
        alert("이전!")
        if(props.currentPage === 1){
            alert("첫 페이지 입니다.")
            return
        }
        props.setCurrentPage(props.currentPage-1)
    }

    const nextPage=()=>{
        alert("다음!")
        if(props.currentPage+1 > lastPage){
            alert("마지막 페이지 입니다.")
            return
        }
        props.setCurrentPage(props.currentPage+1)
    }

    const result = pageNums.map(
        (page) => (<span className="page"
        onClick={()=>pageClick(page)}>{page}</span>)
    )
    
    return(
        <div id="pagination">
            <div>
                총 글 갯수: {props.total}
            </div>
            <div>
                페이지 당 글 갯수: {props.postPerPage}
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
    );
}

export default Pagination