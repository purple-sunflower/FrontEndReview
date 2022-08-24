import { Component } from 'react';
import '../css/Sm.css';


class Sm extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render(){
    return (
      <div id="sm">
        <span><img src= {this.props.imgSrc}/></span>
        <span>번호: {this.props.no} </span>
        <span>팀 이름: {this.props.name} </span>
        <span>데뷔년도: {this.props.debut_year} </span>
        <span>멤버 수: {this.props.member} </span>
      </div>
    );
  }
}

export default Sm;