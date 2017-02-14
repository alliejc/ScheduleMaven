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
        boardChoiceTitle: 1,
        hour: 0,
        minutes: 0,
        day: 0,
        month: 0,
        year: 0,
        ampm: ""
    };

    cardItem = {
        id: 'String PinId',
        link: 'String URL where created',
        url: 'String URL on Pinterest',
        note: 'String user-entered description',
        image: '/img/card_placeholder.jpg',
        article: 'meta data article name'
    };

    setTime = (hour, minutes) => {
        if(hour < 12){
            this.setState({ampm: "am"});
        } else {
            this.setState({ampm: "pm"});
        }

        this.setState({minutes: minutes});
        this.setState({hour: hour});

    };

    setDate = (day, month, year) => {
        this.setState({day: day});
        this.setState({month: month});
        this.setState({year: year});
    };

    setBoard = (board) => {
        this.setState({boardChoiceTitle: board});
    };

    handleOnClickSubmit = () => {
        let cardInsertData = {};

        cardInsertData.boardChoiceTitle = this.state.boardChoiceTitle;
        cardInsertData.day = this.state.day;
        cardInsertData.month = this.state.month;
        cardInsertData.year = this.state.year;
        cardInsertData.hour = this.state.hour;
        cardInsertData.minutes = this.state.minutes;
        cardInsertData.ampm = this.state.ampm;

        CardData.insert(cardInsertData);
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
                            <ChooseABoard onChange={(board) => this.setBoard(board)}/>
                            <TimePicker onChange={(hour, minutes) => this.setTime(hour, minutes)}/>
                            <Calendar onChange={(day, month, year) => this.setDate(day, month, year)} day={this.state.date}/>
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
