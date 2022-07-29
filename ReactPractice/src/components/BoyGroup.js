import '../css/BoyGroup.css'

function BoyGroup(props){
    return(
        <div id='boy_group'>
        <div id='b-left'>
            <img src={props.imgSrc}></img>
        </div>
        <div id='b-right'>
            <div>이름: {props.name}</div>
            <div>멤버 수: {props.numberOfMember}</div>
            <div>소속: {props.agency}</div>
        </div>
    </div>
    )
}

export default BoyGroup;