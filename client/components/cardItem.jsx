import React from 'react';
import Calendar from '/client/components/datepicker';
import TimePicker from '/client/components/timepicker';
import ChooseABoard from '/client/components/chooseaboard';
import {FlatButton} from 'material-ui/';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CardData from '/imports/collections/CardData';


// Todo: Replace card image, title, and description with info from Pinterest card


class CardItem extends React.Component{

    state = {
        time: null,
        date: "date",
        boardChoice: 1,
        hours: 0,
        minutes: 0,
    };

    cardItem = {
        id: 'String PinId',
        link: 'String URL where created',
        url: 'String URL on Pinterest',
        note: 'String user-entered description',
        image: '/img/card_placeholder.jpg',
        article: 'meta data article name'
    };

    setTime = (dateobject, hours, minutes) => {
        this.setState({hours: hours});
        this.setState({minutes: minutes});
    };

    setDate = () => {
    };

    setBoard = (event) => {
        this.setState({boardChoice: event});
    };

    handleOnClickSubmit = () => {
        CardData.insert({boardChoiceTitle: this.state.boardChoice});
        // CardData.insert({hour: this.state.hours});
        // CardData.insert({minutes: this.state.minutes});

        console.log(this.state.boardChoice);
        console.log(this.state.minutes);
        console.log(this.state.hours);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="row col s4 m3 l2">
                    <Card>
                        <CardMedia>
                            <img src={this.cardItem.image}/>
                        </CardMedia>
                        <CardTitle title={this.cardItem.article} subtitle={this.cardItem.link} />
                        <CardText> {this.cardItem.note} </CardText>
                        <CardActions>
                            <ChooseABoard onChange={(item) => this.setBoard(item)}/>
                            <TimePicker onChange={(dateobject, hours, minutes) => this.setTime(dateobject, hours, minutes)}/>
                            <Calendar onChange={(item) => this.setDate(item)} day={this.state.date}/>
                            <FlatButton label="Submit" primary={true} onClick={this.handleOnClickSubmit.bind(this)}/>
                        </CardActions>
                    </Card>
                    </div>
                    <div className="row col s4 m3 l2">
                        <Card>
                            <CardMedia>
                                <img src={this.cardItem.image}/>
                            </CardMedia>
                            <CardTitle title={this.cardItem.article} subtitle={this.cardItem.link} />
                            <CardText> {this.cardItem.note} </CardText>
                            <CardActions>
                                <ChooseABoard onChange={(item) => this.setBoard(item)}/>
                                <TimePicker onChange={(item) => this.setTime(item)}/>
                                <Calendar onChange={(item) => this.setDate(item)} day={this.state.date}/>
                                <FlatButton label="Submit" primary={true} onClick={this.handleOnClickSubmit.bind(this)}/>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                </div>
        );
    }
}

export default CardItem;
