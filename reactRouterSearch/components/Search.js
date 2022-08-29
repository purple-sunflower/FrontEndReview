import {Component} from 'react'
import '../css/Search.css'
import queryString from 'query-string'

class Search extends Component {
    constructor(props){
      super(props)
      this.state={
  
      }
    }
  
    componentDidMount(){
        console.log('Search')
        console.log('window.location', window.location) // href, hostname, pathname...
        console.log('window.location.href', window.location.href) // 링크 뜸
        console.log('window.location.search', window.location.search) // ?searchText= "~~~"
        const queryObj = queryString.parse(window.location.search)
        console.log(queryObj)
        console.log(queryObj.searchText)
        const searchText = queryObj.searchText
    }

    render(){
      return (
        <div id='search'>
          검색
        </div>
      );
    }
  }
  
  export default Search; 