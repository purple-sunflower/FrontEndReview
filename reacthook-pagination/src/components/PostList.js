import '../css/PostList.css'
import Post from './Post.js'

function PostList(props) {

  const result = props.postList.map(
    (data) => (<Post id={data.id} title={data.title}/>)
  )

  return (
    <div id='postlist'>
        {result}
    </div>
  );
}

export default PostList;