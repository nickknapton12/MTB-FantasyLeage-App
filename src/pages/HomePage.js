import LandingCard from '../components/landingpage';
import LandingPageCard from '../components/landingPageCard';
import '../styles/App.css';


import card1Photo from '../images/teamPhoto.png';
import card2Photo from '../images/globalLeague.png';
import card3Photo from '../images/discipline.jpg';
import card4Photo from '../images/prize.png';
import React from 'react';
import Axios from 'axios';

class HomePage extends React.Component {

  componentDidMount(){
    Axios.post("https://mtb-fantasy-league.herokuapp.com/login/verifytoken", {
        "token": localStorage.getItem('token')
    })
    .then(res => {
      if(res.data.id != null){
        console.log(res.data.id)
      }else{
        console.log(res.data.token)
      }
      
      
    })
  }

  render(){
    return (
      <div className="HomePage">
        <LandingCard />
        <LandingPageCard title="Create your ultimate team" description="Pick your team of 5 riders, staying under the $1.5m budget. 
        Choose between veteren racers with a proven track record or risk it with fresh riders coming out of juniors." buttonText="CREATE TEAM"
        image={card1Photo} side="right" destination="/FantasyDraft"/>
        <LandingPageCard title="Compete in the global league, or create your own" description="Compete in the global league to have a chance to win prizes from 
        TREK, BONTRAGER, SRAM or ROCKSHOX, or join a private league and compete for bragging rights between you and your riding buddys." buttonText="JOIN LEAGUES"
        image={card2Photo} side="left" destination="/FantasyDraft" />
        <LandingPageCard title="Choose your discipline" description="Global leagues for Downhill, Enduro and Cross Country disciplines. Choose your favorite or
        compete in all three." buttonText="PLAY NOW" image={card3Photo} side="right" destination="/FantasyDraft" />
        <LandingPageCard title="Prizes" description="Win prizes based on your teams performance in the global league. Prizes include products from TREK, 
        BONTRAGER, SRAM and ROCKSHOX." buttonText="PRIZES" image={card4Photo} side="left" destination="/Prizes" />
      </div>
    );
  }
  
}

export default HomePage;