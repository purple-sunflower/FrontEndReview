import "../css/Post.css"

function Post(props) {
    return (
        <div id='post'>
          <span>번호: {props.no}</span>
          <span>제목: {props.title}</span>
          <span>날짜: {props.date}</span>
          <span>작성자: {props.name}</span>
        </div>
      );
}

export default Post;