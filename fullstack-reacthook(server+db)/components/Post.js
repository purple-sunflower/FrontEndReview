import "../css/Post.css"
import moment from "moment";
import {Link} from "react-router-dom";
// 번호, 제목, 글내용, 작성자, 등록일, 첨부, 조회 순
//moment를 통해 년도-월-일만 나오도록!
// Link를 통해 라우터 연결

function Post(props){

    return(
        <div id="post">
            <span>{props.no}</span> 
            <span><Link to='/postView' id="postview_title">{props.title}</Link></span>
            <span>{props.author}</span>
            <span>{moment(props.date).format("YYYY-MM-DD")}</span>
            <span>{props.attach}</span>
            <span>{props.hits}</span>
            <span>{props.contents}</span>
        </div>
    )
}

export default Post;