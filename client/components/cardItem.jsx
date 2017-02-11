import React from 'react';
import Calendar from '/client/components/calendar';
import TimePicker from '/client/components/timepicker';
import ChooseABoard from '/client/components/chooseABoard';
import {FlatButton, Card} from 'material-ui/';


// Todo: Replace card image, title, and description with info from Pinterest card


class CardItem extends React.Component{

    state = {
        time: null,
        date: null,
        boardChoice: 1
    };

    cardItem = {
        id: 'String PinId',
        link: 'String URL where created',
        url: 'String URL on Pinterest',
        note: 'String user-entered description',
        image: '/img/card_placeholder.jpg',
        article: 'meta data article name'
    };

    setTime = (event) => {
        this.setState({time: event});
        console.log("setTime" + this.state.time);
    };

    setDate = (event) => {
        this.setState({date: event});
    };

    setBoard = (event) => {
        this.setState({boardChoice: event});
        console.log("setBoard" + this.state.boardChoice);
    };

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col s4">
                        <div className="card white">
                            <div className="card-content black-text">
                                <div className="row">
                                    <img className="responsive-img" src={this.cardItem.image}/>
                                    <span className="card-title">{this.cardItem.article}</span>
                                    <p>{this.cardItem.note}</p>
                                </div>
                                <div className="row"><ChooseABoard onChange={(item) => this.setBoard(item)}/></div>
                                <div className="row"><TimePicker onChange={(item) => this.setTime(item)}/></div>
                                <div className="row"><Calendar day={this.state.date}/></div>
                                <div className="row"><FlatButton label="Primary" primary={true}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardItem;