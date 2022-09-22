import { useState } from "react";
import "../css/InputComp.css"

function InputComp(props) {
  
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')

    const addPersonInfo=()=>{
        props.addPersonInfo(name, age, height)
    }

    const inputChangeName = (e) =>{
        setName(e.target.value)
    }

    const inputChangeAge = (e) =>{
        setAge(e.target.value)
    }

    const inputChangeHeight = (e) =>{
        setHeight(e.target.value)
    }

    return (
      <div id="input-comp">
        <input type='text' onChange={inputChangeName} placeholder='이름'/>
        <input type='text' onChange={inputChangeAge} placeholder='나이'/>
        <input type='text' onChange={inputChangeHeight} placeholder='키'/>
        <button onClick={addPersonInfo}>추가</button>
      </div>
    );
  }
  
  export default InputComp;