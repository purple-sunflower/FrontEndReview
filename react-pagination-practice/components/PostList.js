import { Component } from 'react';
import '../css/PostList.css';
import Post from './Post.js'


class PostList extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){

    const result = this.props.postList.map(
        (data) => (<Post key={data.no} no={data.no}
        title={data.title} writer={data.writer} date={data.date}/>)
    )

    return (
      <div id='post-list'>
        {result}
      </div>
    );
  }
}

export default PostList;