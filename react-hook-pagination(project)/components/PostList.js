import "../css/PostList.css"
import Post from "./Post.js"

function PostList(props){

    const result = props.postList.map(
        (data) => (<Post key={data.no} no={data.no} title={data.title} date={data.date} name={data.name}/>)
    )

    return(
        <div id="postlist">
            {result}
        </div>
    )
}

export default PostList;