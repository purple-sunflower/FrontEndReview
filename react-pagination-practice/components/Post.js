import { Component } from 'react';
import '../css/Post.css';


class Post extends Component {
  constructor(props){
    super(props)
    this.state={
        
    }
  }

  render(){
    return (
      <div id='post'>
        <span>{this.props.no}</span>
        <span>{this.props.title}</span>
        <span>{this.props.writer}</span>
        <span>{this.props.date}</span>
      </div>
    );
  }
}

export default Post;