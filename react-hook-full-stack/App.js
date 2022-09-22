import { useState } from 'react';
import './App.css';
import axios from 'axios';
import InputComp from './components/InputComp.js';
import Person from './components/Person.js';

function App() {

  const [personList, setPersonList] = useState([]);

  // 모두조회
  const selectAll = async()=>{
    const result = await axios.get('/person')
    console.log(result)
    console.log(result.data)
    setPersonList(result.data)
  }

  // 추가
  const addPersonInfo=(name, age, height)=>{
    const personObj = {name:name, age:age, height:height}
    const concatPersonList = personList.concat(personObj)
    setPersonList(concatPersonList)
    axios.post('/add/person', personObj)
  }

  const result = personList.map(
    (data) => (<Person name={data.name} age={data.age} height={data.height}/>)
  )

  return (
    <div id="app">
      <InputComp addPersonInfo={addPersonInfo}/>
      <button onClick={selectAll}>모두 조회</button>
      {result}
    </div>
  );
}

export default App;
