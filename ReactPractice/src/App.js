import './App.css';
import {Component} from 'react';
import './components/Entertainment.js'
import './components/BoyGroup.js'
import './components/GirlGroup.js'

import imgLee from './images/Representative/Lee.jpg'
import imgPark from './images/Representative/Park.jpg'
import imgBang from './images/Representative/Bang.jpg'
import imgNCT from './images/Boy_group/NCT.jpg'
import imgSK from './images/Boy_group/StrayKids.jpg'
import imgTXT from './images/Boy_group/TXT.jpg'
import imgAESPA from './images/Girl_group/AESPA.jpg'
import imgLS from './images/Girl_group/LE_SSERAFIM.jpg'
import imgNM from './images/Girl_group/NMIXX.png'
import Entertainment from './components/Entertainment.js';
import BoyGroup from './components/BoyGroup.js';
import GirlGroup from './components/GirlGroup.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      EntertainmentList:[
        {imgSrc:imgLee, company:'SM' , representative:'이수만'},
        {imgSrc:imgPark, company:'JYP' , representative:'박진영'},
        {imgSrc:imgBang, company:'HYBE' , representative:'방시혁'}
      ],
      BoygroupList:[
        {imgSrc:imgNCT, name:'NCT', numberOfMember: 22, agency:'SM'},
        {imgSrc:imgSK, name:'Stray Kids', numberOfMember: 8, agency:'JYP'},
        {imgSrc:imgTXT, name:'TXT', numberOfMember: 5, agency:'HYBE'}
      ],
      GirlgroupList:[
        {imgSrc:imgAESPA, name:'AESPA', numberOfMember: 4, agency:'SM'},
        {imgSrc:imgLS, name:'LE SSERAFIM', numberOfMember: 6, agency:'HYBE'},
        {imgSrc:imgNM, name:'N-MIXX', numberOfMember: 7, agency:'JYP'}
      ],
    }
  }
  render(){
    return (
      <div className="App">
        <div id='sm'>
          <img src={'./images/sm_logo.png'}></img>
          <Entertainment imgSrc={this.state.EntertainmentList[0].imgSrc}
          company={this.state.EntertainmentList[0].company}
          representative={this.state.EntertainmentList[0].representative}></Entertainment>
          <BoyGroup imgSrc={this.state.BoygroupList[0].imgSrc}
          name={this.state.BoygroupList[0].name}
          numberOfMember={this.state.BoygroupList[0].numberOfMember}
          agency={this.state.BoygroupList[0].agency}></BoyGroup>
          <GirlGroup imgSrc={this.state.GirlgroupList[0].imgSrc}
          name={this.state.GirlgroupList[0].name}
          numberOfMember={this.state.GirlgroupList[0].numberOfMember}
          agency={this.state.GirlgroupList[0].agency}></GirlGroup>
        </div>
        <div id='hybe'>
          <img src={'./images/hybe_logo.jpg'}></img>
          <Entertainment imgSrc={this.state.EntertainmentList[2].imgSrc}
          company={this.state.EntertainmentList[2].company}
          representative={this.state.EntertainmentList[2].representative}></Entertainment>
          <BoyGroup imgSrc={this.state.BoygroupList[2].imgSrc}
          name={this.state.BoygroupList[2].name}
          numberOfMember={this.state.BoygroupList[2].numberOfMember}
          agency={this.state.BoygroupList[2].agency}></BoyGroup>
          <GirlGroup imgSrc={this.state.GirlgroupList[1].imgSrc}
          name={this.state.GirlgroupList[1].name}
          numberOfMember={this.state.GirlgroupList[1].numberOfMember}
          agency={this.state.GirlgroupList[1].agency}></GirlGroup>
        </div>
        <div id='jyp'>
          <img src={'./images/jyp_logo.png'}></img>
          <Entertainment imgSrc={this.state.EntertainmentList[1].imgSrc}
          company={this.state.EntertainmentList[1].company}
          representative={this.state.EntertainmentList[1].representative}></Entertainment>
          <BoyGroup imgSrc={this.state.BoygroupList[1].imgSrc}
          name={this.state.BoygroupList[1].name}
          numberOfMember={this.state.BoygroupList[1].numberOfMember}
          agency={this.state.BoygroupList[1].agency}></BoyGroup>
          <GirlGroup imgSrc={this.state.GirlgroupList[2].imgSrc}
          name={this.state.GirlgroupList[2].name}
          numberOfMember={this.state.GirlgroupList[2].numberOfMember}
          agency={this.state.GirlgroupList[2].agency}></GirlGroup>
        </div>
      </div>
    );
  }
}

export default App;
