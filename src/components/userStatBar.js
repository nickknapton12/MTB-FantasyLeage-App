import React from 'react';
import '../styles/userStatBarStyles.css';

class UserStatBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="userBar">
                <div className="horizontalLine"></div>
                <div className="userStatBar">
                    <p className="userStatText" id="rank">{this.props.rank + 1}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="username">{this.props.username}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="race">{this.props.race1}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="race">{this.props.race2}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="race">{this.props.race3}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="race">{this.props.race4}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="race">{this.props.race5}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="race">{this.props.race6}</p>
                    <div className="vertLine"></div>
                    <p className="userStatText" id="totalPoints">{this.props.totalPoints}</p>
                    <div className="vertLine"></div>
                </div>
            </div>
        );
    }
}

export default UserStatBar;