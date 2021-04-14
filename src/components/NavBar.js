import React from 'react';
import '../styles/navBarStyle.css';

import trek from "../images/trek.png";
import bontrager from "../images/bontragerLogo.png";
import sram from "../images/sramLogo.png";
import shimano from "../images/shimanoLogo.png";
import rockshox from "../images/rockshoxLogo.png";
import pbLogo from "../images/pblogo.png";

import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(){
        super();
        this.state = {
            LoggedIn: "Log in",
            LoggedIn1: "Register",
            LoggedInLink: ""
        }
        this.loggedIn = this.loggedIn.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem("token") != null){
            this.setState({ LoggedIn: "Log out" })
            this.setState({ LoggedIn1: "" })
            this.setState({ LoggedInLink: "Logged In" })
        }
        else{

        }
    }

    loggedIn(){
        if(this.state.LoggedIn == "Log in"){
            window.location.href = "http://localhost:3000/login"; 
        }else{
            this.logOut();
        }
    }

    signIn(){
        window.location.href = "http://localhost:3000/SignUp"; 
    }

    logOut(){
        localStorage.removeItem("token");
        this.setState({ LoggedIn: "Log in" })
        this.setState({ LoggedIn1: "Register" })
        this.setState({ LoggedInLink: "Logged out" })
        window.location.href = "http://localhost:3000/";
    }

    render() {
        return (
        <div className="">
                <div className="sponsorNav">
                <h3 className="sponsorHeader">Presented By:</h3>
                <a target="blank_" href="https://www.trekbikes.com/us/en_US/"><img src={trek} className="sponsorLogo" /></a>
                <a target="blank_" href="https://www.trekbikes.com/us/en_US/bontrager/"><img src={bontrager} className="sponsorLogo" style={{height: "21px"}} /></a>
                <a target="blank_" href="https://www.sram.com/en/sram"><img src={sram} className="sponsorLogo" style={{height: "15px"}} /></a>
                <a target="blank_" href="https://www.sram.com/en/rockshox"><img src={rockshox} className="sponsorLogo" style={{height: "19px"}} /></a>
                <a target="blank_" href="https://www.shimano.com/en/"><img src={shimano} className="sponsorLogo" style={{height: "19px"}} /></a>
            </div>
            <div className="navBar">
            <div className="navItemWrap">
                <Link to="/"><img src={pbLogo} className="navLogo" /></Link>
                <ConditionalLink to="/FantasyDraft" condition={ this.state.LoggedInLink } children={<h2 className="navItem">Fantasy Draft</h2>} className="navItem" />
                <ConditionalLink to="/Rankings" condition={ this.state.LoggedInLink } children={<h2 className="navItem">Rankings</h2>} className="navItem" />
                <ConditionalLink to="/RaceResults" condition={ this.state.LoggedInLink } children={<h2 className="navItem">Race Results</h2>} className="navItem" />
                <ConditionalLink to="/News" condition={ this.state.LoggedInLink } children={<h2 className="navItem">News</h2>} className="navItem" />
                <ConditionalLink to="/Stats" condition={ this.state.LoggedInLink } children={<h2 className="navItem">Stats</h2>} className="navItem" />
            </div>
            <h2 onClick={ this.loggedIn } id="signIn1" className="navItem">{ this.state.LoggedIn }</h2>
            <div className="registerButton" id={ this.state.LoggedIn1 }><h2 onClick={ this.signIn } id="signIn" className="registerButtonText">{ this.state.LoggedIn1 }</h2></div>
            </div>
        </div>
        );
    }
}
const ConditionalLink = ({ children, to, condition }) => {
    if(condition == "Logged In"){
        return <Link to={to}>{children}</Link>
    }else{
        return <Link to={"/Login"}>{children}</Link>
    }
}

export default NavBar;