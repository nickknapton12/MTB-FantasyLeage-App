import React from 'react';
import '../styles/riderCardStyles.css';

class RiderStat extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render(){
        return(
            <div className="riderCard">
                <div className="riderCardBox" style={{ backgroundImage: `url(${this.props.photo})` }}>
                </div>
                <h3 className="riderCardName">{this.props.name}</h3>
                <p className="riderDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ligula in nunc fringilla iaculis. Quisque eget nunc in quam rutrum semper vitae non lorem. Etiam eu lectus vel tortor venenatis viverra eu et eros. In quis quam ut libero vestibulum maximus. In dolor lorem, dignissim et auctor a, hendrerit.</p>
                <div className="riderCardButton" onClick={ () =>  this.props.onClickFunction(this.props.editRiderNumber, this.props.name) }>
                    <h3 className="riderCardName" id="RiderCardButtonText">Select</h3>
                </div>
            </div>
        );
    }
}

export default RiderStat;