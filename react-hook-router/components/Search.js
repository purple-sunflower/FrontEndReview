import { useEffect } from 'react';
import queryString from 'query-string'
import '../css/Search.css'

function Search(){

    useEffect(()=>{
        console.log('useEffect')
        console.log(window.location)
        console.log(window.location.href)
        console.log(window.location.search)
        const queryObject = queryString.parse(window.localStorage.search)
        console.log(queryObject) // object 객체
        console.log(queryObject.searchText)
    })

    return(
        <div id='search'>
            검색 결과
        </div>
    )
}

export default Search;