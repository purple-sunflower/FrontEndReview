import "../css/Post.css"
// 번호, 제목, 글내용, 작성자, 등록일, 첨부, 조회 순

function Post(props){

    return(
        <div id="post">
            <span>{props.no}</span> 
            <span>{props.title}</span>
            <span>{props.contents}</span>
            <span>{props.author}</span>
            <span>{props.date}</span>
            <span>{props.attach}</span>
            <span>{props.hits}</span>
        </div>
    )
}

export default Post;