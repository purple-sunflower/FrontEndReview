import "../css/PostList.css"
import Post from './Post.js'

function PostList(props) {

    const result = props.postList.map(
        (data) => (<Post no={data.no} title={data.title} author={data.author} 
          date={data.date} attach={data.attach} hits={data.hits}/>)
    )

    return(
        <div id="postlist">
            <div id="category">
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>날짜</span>
                <span>첨부</span>
                <span>조회</span>
            </div>
            {result}
        </div>
    )
}

export default PostList;