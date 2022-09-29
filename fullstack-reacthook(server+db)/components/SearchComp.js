import { useState } from "react";
import "../css/SearchComp.css";

function SearchComp(){

    const [searchText, setSearchText] = useState('');

    const searchPost =()=>{
        alert("게시글 검색!")
        window.location.href=`/search?searchText="%${searchText}%"`
    }

    return(
        <div id="searchComp">
            <input type="text" placeholder="검색어를 입력하시오."
            onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={searchPost}>검색</button>
        </div>
    )
}

export default SearchComp;