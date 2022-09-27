import "../css/PostList.css"
import Post from './Post.js'

function PostList(props) {

    const result = props.postList.map(
        (data) => (<Post no={data.no} title={data.title} 
          contents={data.contents} author={data.author} 
          date={data.date} attach={data.attach} hits={data.hits}/>)
    )

    return(
        <div id="postlist">
            {result}
        </div>
    )
}

export default PostList;