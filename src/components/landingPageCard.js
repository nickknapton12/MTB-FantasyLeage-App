import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landingPageCardStyle.css';

class LandingPageCard extends React.Component{
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
        if(this.props.buttonText == "PRIZES"){
            this.setState({ LoggedInLink: "Logged In" })
        }
    }

    render(){
        return(
            <section className="introPage" id={ this.props.side }>
                <div className="stepBox" id={ this.props.side }>
                    <h3 className="stepBoxTitles">{ this.props.title }</h3>
                    <img src={ this.props.image } className="boxImg" id={ this.props.side } />
                    <p className="stepBoxParagraph">{ this.props.description }</p>
                    <ConditionalLink to={ this.props.destination } condition={ this.state.LoggedInLink } children={<div className="playNowButton">
                        <h2 className="playNowButtonText">{ this.props.buttonText }</h2>
                    </div>} />
                </div>
            </section>
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

export default LandingPageCard;