import "../css/PostList.css"
import Post from "./Post.js"

function PostList(props){

    const result = props.postList.map(
        (data) => (<Post key={data.no} no={data.no} title= {data.title}
            date={data.date} name={data.name}/>)
    )

    // data.title에 하이퍼링크 넣기 => a태그? link태그?

    return(
        <div id="postlist">
            {result}
        </div>
    )
}

export default PostList;