import "../css/Post.css"
import moment from "moment";
// 번호, 제목, 글내용, 작성자, 등록일, 첨부, 조회 순

//moment를 통해 년도-월-일만 나오도록!

function Post(props){

    return(
        <div id="post">
            <span>{props.no}</span> 
            <span>{props.title}</span>
            <span>{props.contents}</span>
            <span>{props.author}</span>
            <span>{moment(props.date).format("YYYY-MM-DD")}</span>
            <span>{props.attach}</span>
            <span>{props.hits}</span>
        </div>
    )
}

export default Post;