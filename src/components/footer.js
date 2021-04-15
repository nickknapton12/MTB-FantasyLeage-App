import React from 'react';
import pbLogo from '../images/pblogoFooter.png';
import '../styles/footerStyle.css';

class Footer extends React.Component{
    render(){
        return (
            <div>
                <section className="footer">
                <div className="footerWrap">
                    <div className="footerBar1">
                        <img src={pbLogo} className="footerLogo" />
                        <a href="/Login"><div className="playNowButton" style={{margin: "0 0 15px 0"}}>
                            <h2 className="playNowButtonText">PLAY NOW</h2>
                        </div></a>
                        <a href="/signUp"><div className="playNowButton" style={{backgroundColor: "white"}}>
                            <h2 className="playNowButtonText" style={{color:"black"}}>SIGN IN</h2>
                        </div></a>
                    </div>
                    <div className="footerBarGame">
                        <h4 className="footerTitle">THE GAME</h4>
                        <div className="footerBar"></div>
                        <a href="/FantasyDraft"><h4 className="footerLink">Rosters</h4></a>
                        <a href="/FantasyDraft"><h4 className="footerLink">Leagues</h4></a>
                        <a href="/Rankings"><h4 className="footerLink">Rankings</h4></a>
                        <a href="/RaceResults"><h4 className="footerLink">Race Results</h4></a>
                        <a href="/News"><h4 className="footerLink">News</h4></a>
                    </div>
                    <div className="footerBarOther">
                        <h4 className="footerTitle">OTHER INFO</h4>
                        <div className="footerBar"></div>
                        <a href="/#"><h4 className="footerLink">Rules</h4></a>
                        <a href="/#"><h4 className="footerLink">Points System</h4></a>
                        <a href="/#"><h4 className="footerLink">Prizes</h4></a>
                        <a href="/#"><h4 className="footerLink">FAQ</h4></a>
                    </div>
                    <div className="footerBarMore">
                        <h4 className="footerTitle">MORE</h4>
                        <div className="footerBar"></div>
                        <a target="blank_" href="https://www.pinkbike.com/"><h4 className="footerLink">PinkBike.com</h4></a> 
                        <a href="/#"><h4 className="footerLink">Advertise</h4></a>
                        <a href="/#"><h4 className="footerLink">Terms and Conditions</h4></a>
                        <a href="/#"><h4 className="footerLink">Privacy Policy</h4></a>
                   
                    </div>
                </div>
                </section>
            </div>
        )
    }
}

export default Footer;