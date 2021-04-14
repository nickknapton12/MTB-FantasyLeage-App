import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPageStyle.css';

class LandingCard extends React.Component{
    constructor(){
        super();
        this.state = {
            LoggedInLink: ""
        }
    }

    componentDidMount(){
        if(localStorage.getItem("token") != null){
            this.setState({ LoggedInLink: "Logged In" })
        }else{
            this.setState({ LoggedInLink: "" })
        }
    }

    render(){
        return(
            <div className="landingPage">
                <h1 className="landingText">The Home Of MTB Fantasy Leagues</h1>
                <ConditionalLink to="/FantasyDraft" condition={ this.state.LoggedInLink } children={<div className="playNowButton">
                <h2 className="playNowButtonText">PLAY NOW</h2>
                </div>} />
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

export default LandingCard;