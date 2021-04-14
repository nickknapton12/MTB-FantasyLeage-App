import React from 'react';
import '../styles/leagueBarStyle.css';

class LeagueBar extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div className="leagueCard">
                <div className="leagueCardBox" id="leagueCardPhoto" style={{ backgroundImage: `url(${this.props.photo})` }}>
                </div>
                <h3 className="leagueCardName">{this.props.name}</h3>
                <p className="leagueDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ligula in nunc fringilla iaculis. Quisque eget nunc in quam rutrum semper vitae non lorem. Etiam eu lectus vel tortor venenatis viverra eu et eros. In quis quam ut libero vestibulum maximus. In dolor lorem, dignissim et auctor a, hendrerit.</p>
                <div className="leagueCardButton" onClick={ () =>  this.props.onClickFunction(this.props.editLeagueNum, this.props.name) }>
                    <h3 className="leagueCardName" id="leagueCardButtonText">Select</h3>
                </div>
            </div>
        );
    }
}

export default LeagueBar;