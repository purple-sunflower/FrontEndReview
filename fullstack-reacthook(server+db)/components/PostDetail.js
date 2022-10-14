// CRUD 생성 (생성, 수정, 삭제)

import axios from "axios";
import queryString from 'query-string'
import { useEffect, useState } from "react";
import "../css/PostDetail.css";

function PostDetail(props){
    // 삭제
    const [filterList, setFilterList] = useState([])
    const [edit, setEdit] = useState(false)
    const [updateList, setUpdateList] = useState([])
    // const [title, setTitle] = useState(props.title)
    // const [contents, setContents] = useState(props.contents)
    // const [no, setNo] = useState(props.no)

    const deletePost = async() =>{
        alert("삭제")
        const queryObj = queryString.parse(window.location.search) // {no:22}
        const deleteNo = queryObj.no
        const result = await axios.delete(`/post/delete/${deleteNo}`)
        filterList = result.filter(
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

    const updatePost=async()=>{
        alert("수정")
        const queryObj = queryString.parse(window.location.search) // {no:22}
        const updateNo = queryObj.no
        const updateTitle = queryObj.title
        const updateContents = queryObj.contents
        const result = await axios.update(`/post/update/${updateNo}`)
        if(edit===false){
            updateList = result.map(
                (data) => (data.no==updateNo)?({...data, title:updateTitle, contents:updateContents}):data
            )
            setUpdateList(updateList)
        }
        setEdit(!edit)
    }


    return(
        <div id="postdetail">
           <button onClick={deletePost}>삭제</button>
           <button onClick={updatePost}>수정</button>
        </div>
    )
}

export default PostDetail;