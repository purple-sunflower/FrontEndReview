import { Component } from 'react';
import '../css/SmList.css';
import Sm from './Sm.js'


class SmList extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render(){

    const result = this.props.smList.map(
        (data) => (<Sm key={data.img} imgSrc={data.imgSrc} no={data.no}
        name={data.name} debut_year={data.debut_year} member={data.member}/>)
    )

    return (
      <div id="sm-list">
        {result}
      </div>
    );
  }
}

export default SmList;