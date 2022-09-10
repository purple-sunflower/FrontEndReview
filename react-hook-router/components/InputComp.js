import { useState } from 'react';
import '../css/InputComp.css'

function InputComp(){

    const [searchText, setSearchText] = useState('')
    const searchMovie=()=>{
        alert("검색!")
        window.location.href=`/search?searchText=${searchText}&display=10&conutry=JPN`
    }

    return(
        <div id='inputcomp'>
            <input type='text' onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={searchMovie}>검색</button>
        </div>
    )
}

export default InputComp;