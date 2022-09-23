import "../css/Post.css"
import Delete from "./Delete.js";

function Post(props) {
    return (
        <div id='post'>
          <span>{props.no}</span>
          <span>{props.title}</span>
          <span>{props.date}</span>
          <span>글 삭제</span>
          <span>{props.name}</span>
        </div>
      );
}

export default Post;