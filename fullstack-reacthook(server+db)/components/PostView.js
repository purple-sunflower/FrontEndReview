import axios from "axios";
import queryString from 'query-string'
import { useEffect, useState } from "react";
import "../css/PostView.css";
import PostDetail from './PostDetail.js';

// 글 번호로 요청 postView?no=22 => 완료!
// 검색api 

function PostView(props){

    const [postContents, setPostContents] = useState([])
    
    useEffect(()=>{
        const queryObj = queryString.parse(window.location.search) // {no:22}
        const searchNo = queryObj.no
        searchPostView(searchNo)
    })

    const searchPostView = async(searchNo) =>{
        const result = await axios.get(`/post/${searchNo}`)
        setPostContents(result.data[0])
    }

        return(
            <div id="postview">
                <PostDetail/>
                <div id="info">
                    <div>{postContents.no} </div>
                    <div>날짜: {postContents.date} </div>
                    <div>작성자: {postContents.author} </div>
                    <div>첨부: {postContents.attach} </div>
                    <div>조회수: {postContents.hits} </div>
                </div>
                <div id="title-area">
                    제목: {postContents.title}
                </div>
                <div id="contents-area">
                    {postContents.contents}
                </div>
            </div>
        )
    }

export default PostView;