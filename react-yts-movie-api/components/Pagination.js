import { Component } from 'react';
import '../css/Pagination.css';

class Pagination extends Component {
  constructor(props){
    super(props)
    this.state={
    
    }
  }

  setCurrentPage=(page)=>{
    alert(page+"페이지 클릭(Pagination.js)")
    this.props.setCurrentPage(page)
  }

  render(){
    const {movieListLength, movieListPerPage} = this.props

    let pageNumbers=[];
    const lastPageNum = Math.ceil(movieListLength/movieListPerPage)
    for(var i=1; i<=lastPageNum; i++){
        pageNumbers.push(i)
    }

    const movieList=pageNumbers.map(
        (data)=>(<span className='page' key={data}
        onClick={()=>this.setCurrentPage(data)}>{data}</span>)
      )

    return (
      <div id="pagination">
        <div>
            총 글 갯수: {movieListLength}
        </div>
        <div>
            페이지당 글 갯수: {movieListPerPage}
        </div>
        <div>
            <span>{movieList}</span>
        </div>
      </div>
    );
  }
}

export default Pagination;