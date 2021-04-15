import React from "react";
import '../styles/menuLeagueStyles.css';

class MenuLeague extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="fantasyDraftWindowButton" onClick={() => this.props.onClickFunction(this.props.leagueName)}>
                    <h4 className="menuLeagueButtonText">{this.props.leagueName}</h4>
                </div>
            </div>
        )
    }
}

export default MenuLeague;