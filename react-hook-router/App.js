import './App.css';
import InputComp from './components/InputComp.js'
import Home from './components/Home.js'
import Search from './components/Search.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
 
function App() {

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

export default App;
