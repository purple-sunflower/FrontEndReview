// CRUD 생성 (생성, 수정, 삭제)

import axios from "axios";
import queryString from 'query-string'
import { useEffect, useState } from "react";
import "../css/PostDetail.css";


function PostDetail(props){
    // 삭제
    const [filterList, setFilterList] = useState([])

    const deletePost = async() =>{
        alert("삭제")
        const queryObj = queryString.parse(window.location.search) // {no:22}
        const deleteNo = queryObj.no
        const result = await axios.delete(`/board/delete/${deleteNo}`)
        const filterList = result.filter(
            (data) => (data.no != deleteNo)
        )
        setFilterList(filterList)
      }

    //   const deletePost=async()=>{
    //   alert("삭제")
    //   const deleteNo = props.deleteNo
    //   const res = await axios.delete(`/board/delete/${deleteNo}`)
    //   window.location.href="/"
    //   }


    // 수정
    //   updatePost=async()=>{
    //     alert("수정")
    //     const no = this.props.no
    //     const {edit} = this.state
    //     const {title, contents} = this.state
    //     const res = null
    //   }

    return(
        <div id="postdetail">
           <button onClick={deletePost}>삭제</button>
           <button>수정</button>
        </div>
    )
}

export default PostDetail;