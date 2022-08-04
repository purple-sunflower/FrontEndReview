import './App.css';
import {Component} from 'react';
import axios from 'axios';

// 클래스 컴포넌트 사용

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  getAllClass=()=>{
    alert("getAllClass")
    axios.get("/class")
  }
  getClassByNumber=()=>{
    alert("getClassByNumber")
    axios.get("/class/11687") // 국어 불러오기
  }
  addClassInfo=()=>{
    alert("getAllClass")
    const classObj = {number: 16962, title: "올라 with 클라라", subject: "스페인어", level: "초급", teacher: "클라라"}
    axios.post("/class", classObj) // 스페인어 추가
  }
  updateClassInfo=()=>{
    alert("getAllClass")
    const classObj = {number: 13815, title: "Englishman in KR", subject: "영어", level: "중급", teacher: "유지민"}
    axios.put("/class", classObj) // 영어 업데이트
  }
  deleteClassInfo=()=>{
    alert("getAllClass")
    axios.delete("/class/13815") // 영어 삭제
  }

  render(){
    return (
      <div id="App">
        <h1>Class Information</h1>
        <button onClick={this.getAllClass}>|GET|  /class</button>
        <button onClick={this.getClassByNumber}>|GET|  /class/:number</button>
        <button onClick={this.addClassInfo}>|POST|  /class</button>
        <button onClick={this.updateClassInfo}>|PUT|  /class</button>
        <button onClick={this.deleteClassInfo}>|DELETE|  /class</button>
      </div>
    );
  }
}

export default App;
