import React from 'react';
import '../styles/standardCardStyle.css';

class StandardCard extends React.Component{
    render(){
        return(
            <section className="introPage" id={ this.props.side }>
                <div className="stepBoxStandard" id={ this.props.side }>
                <a target="blank_" href={ this.props.link } classNameName="titleLink"><h3 className="stepBoxTitles">{ this.props.title }</h3></a>
                    <img src={ this.props.image } className="boxImg" id={ this.props.side } />
                    <p className="stepBoxParagraph">{ this.props.description }</p>
                </div>
            </section>
        );
    }
}

export default StandardCard;