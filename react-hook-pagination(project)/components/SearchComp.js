import { useState } from "react";
import "../css/SearchComp.css"

function SearchComp(props) {

    const [searchText, setSearchText] = useState("")

    const searchPersonInfo=()=>{
        alert("SearchComp")
        alert("입력할 검색어: " + searchText)
        props.searchPersonInfo(searchText)
    }

    const inputChange=(e)=>{
        setSearchText(e.target.value)
    }

    return (
        <div id='search-comp'>
            <input type='text' placeholder="검색" onChange={inputChange}/>
            <button onClick={searchPersonInfo}>검색</button>
        </div>
      );
}

export default SearchComp;