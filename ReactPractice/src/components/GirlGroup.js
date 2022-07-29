import '../css/GirlGroup.css'

function GirlGroup(props){
    return(
        <div id='girl_group'>
        <div id='g-left'>
            <img src={props.imgSrc}></img>
        </div>
        <div id='g-right'>
            <div>이름: {props.name}</div>
            <div>멤버 수: {props.numberOfMember}</div>
            <div>소속: {props.agency}</div>
        </div>
    </div>
    )
}

export default GirlGroup;