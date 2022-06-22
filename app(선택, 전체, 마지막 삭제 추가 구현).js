
document.getElementById("btnAdd").addEventListener('click',addList)
//btnAdd요소에 접근해서 click이벤트 추가하겠다.
//click하면 addList함수를 실행하겠다.
//$("#btnAdd").click(addList)

document.getElementById("btnDelAll").addEventListener('click',delAllElement)//모두삭제
document.getElementById("btnDelLast").addEventListener('click',delLastElement)//마지막삭제
document.getElementById("DeleteSel").addEventListener('click',delSelected)//선택삭제

function addList(){
    var contents=document.querySelector(".text-basic")//input에 접근
    alert(contents.value)//input의 value값 출력
    if(contents.value==='' || contents.value===' '){
        alert("추가할 값을 입력하십시오")
        return//함수종료
    }
    //동적생성
    var tr=document.createElement('tr')//tr태그 생성
    
    var td01=document.createElement('td')//td태그 생성
    var input=document.createElement('input')//input태그 생성
    input.setAttribute('type','checkbox')//input을 checkbox로 만듬
    input.setAttribute('class','btn-chk')//input에 class값 추가
    td01.appendChild(input)//td01에 input을 자식요소로 추가

    var td02=document.createElement('td')//td태그 생성
    td02.innerText=contents.value//td02의 내부에 입력창에 입력한 글자를 넣음

    tr.appendChild(td01)//tr의 자식요소로 td01추가
    tr.appendChild(td02)//tr의 자식요소로 td02추가

    document.getElementById("listBody").appendChild(tr)
    //listBody의 자식요소로 tr을 추가하겠다.
    contents.value=''//input clear
}

function delAllElement() {
    var list = document.getElementById("listBody")
    var listChildren = list.children;

    for (var i = 0; i < listChildren.length ; i++) {
        list.removeChild(listChildren[i]);
        i--;
    }
    
}

function delLastElement() {
    var list = document.getElementById("listBody");
    var listChildren = list.children;

    if (listChildren.length > 0 ) { // 리스트가 존재할 때
        var lastIdx = listChildren.length - 1
        list.removeChild(listChildren[lastIdx])
    }
}

function delSelected() {
    var list = document.getElementById("listBody");
    var checkBox = document.querySelectorAll("#listBody input")
                            // listBody의 모든 하위 input 선택
    
    for (var i in checkBox) {
        if (checkBox[i].checked) {
            list.removeChild(checkBox[i].parentNode.parentNode) 
            // 체크 박스 부모(td)의 부모(tr) 제거
        }
    }
}