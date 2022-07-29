import '../css/Entertainment.css'

function Entertainment(props){
    return(
        <div id='entertainment'>
        <div id='e-left'>
            <img src={props.imgSrc}></img>
        </div>
        <div id='e-right'>
            <div>회사: {props.company}</div>
            <div>이름: {props.representative}</div>
        </div>
    </div>
    )
}

export default Entertainment;