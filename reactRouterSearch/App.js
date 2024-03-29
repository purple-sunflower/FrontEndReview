import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js'
import Search from './components/Search.js'
import InputComp from './components/InputComp.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render(){
    return (
      <div id='app'>
        <BrowserRouter>
          <InputComp/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
