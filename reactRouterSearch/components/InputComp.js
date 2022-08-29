import {Component} from 'react'
import '../css/InputComp.css'

class InputComp extends Component {
    constructor(props){
      super(props)
      this.state={
        searchText:''
      }
    }

    searchBook=()=>{
        alert("책검색")
        window.location.href=`/search?searchText=${this.state.searchText}&display=10&coutnry=JPN`
    }

    inputChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
  
    render(){
      return (
        <div id='input-comp'>
          <input type="text" placeholder='검색어'
          onChange={this.inputChange}/>
          <button onClick={this.searchBook}>검색</button>
        </div>
      );
    }
  }
  
  export default InputComp; 