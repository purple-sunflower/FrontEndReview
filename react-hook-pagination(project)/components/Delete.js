import "../css/Delete.css"

function Delete(props){

    return(
        <div id="delete">
            <span>암호</span>
            <input type="text" placeholder="암호를 입력하시오"/>
            <button>삭제</button>
            <button>닫기</button>
        </div>
    )
}

export default Delete;