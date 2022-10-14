import { useState } from "react";
import "../css/PostWrite.css";

// react로 글쓰기 영역 만들기 참고!
// https://blog.naver.com/PostView.naver?blogId=sejun3278&logNo=221806719514&redirect=Dlog&widgetTypeCall=true&directAccess=false
// https://jaypedia.tistory.com/150
// https://ymkmoon.github.io/React-08-Voc-Post-Question/

function PostWrite(props){

  const [title, setTitle] = useState(props.title)
  const [contents, setContents] = useState(props.contents)

  const enrollPost=()=>{
    alert("글 추가!")
    props.enrollPost(title, contents)
  }

    return(
        <div id="postwrite">
            <h1>게시판 글 쓰기</h1>
            <div id="title-area">
              제목 <input type="text" placeholder="제목" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div id="contents-area">
              내용 <textarea placeholder="내용" onChange={(e)=>setContents(e.target.value)}></textarea>
            </div>
            <div id="submit-btn">
              <button onClick={enrollPost}>등록</button>
            </div>
        </div>
    )
}

export default PostWrite;

// 수정 필요!!

// import "../css/PostWrite.css"
// import React, { Component } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// class PostWrite extends Component{
//     constructor(props){
//         super(props);
//     }

//     modules = {
//         toolbar: [
//           //[{ 'font': [] }],
//           [{ 'header': [1, 2, false] }],
//           ['bold', 'italic', 'underline','strike', 'blockquote'],
//           [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
//           ['link', 'image'],
//           [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
//           ['clean']
//         ],
//       }
    
//       formats = [
//         //'font',
//         'header',
//         'bold', 'italic', 'underline', 'strike', 'blockquote',
//         'list', 'bullet', 'indent',
//         'link', 'image',
//         'align', 'color', 'background',        
//       ]

//     render(){
//         const { value, onChange } = this.props;
//         return(
//             <div style={{height: "650px"}} id="postwrite">
//                 <ReactQuill 
//                     style={{height: "600px"}} 
//                     theme="snow" 
//                     modules={this.modules} 
//                     formats={this.formats} 
//                     value={value || ''} 
//                     onChange={(content, delta, source, editor) => onChange(editor.getHTML())} />
//             </div>
//         )
//     }
// }
// export default PostWrite