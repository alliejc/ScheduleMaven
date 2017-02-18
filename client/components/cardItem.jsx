import React from 'react';
import Calendar from '/client/components/datepicker';
import TimePicker from '/client/components/timepicker';
import ChooseABoard from '/client/components/chooseaboard';
import {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/';
import CardData from '/imports/collections/CardData';


// Todo: Replace card image, title, and description with info from Pinterest card


class CardItem extends React.Component {


    state = {
        image: '',
        note: '',
        article: '',
        selectedBoardId: 0,
        hour: 0,
        minutes: 0,
        day: 0,
        month: 0,
        year: 0,
        ampm: "",

    };

    cardItem = {
        pinId: 'String PinId',
        link: 'String URL where created',
        url: 'String URL on Pinterest',
        article: 'meta data article name'
    };

    setTime = (hour, minutes) => {
        if (hour < 12) {
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

    setBoard = (selectedBoardId) => {
        this.setState({selectedBoardId: selectedBoardId});
    };

    handleOnClickSubmit = () => {
        let cardInsertData = {};

        cardInsertData.destinationBoardTitle = this.state.selectedBoardId;
        cardInsertData.day = this.state.day;
        cardInsertData.month = this.state.month;
        cardInsertData.year = this.state.year;
        cardInsertData.hour = this.state.hour;
        cardInsertData.minutes = this.state.minutes;
        cardInsertData.ampm = this.state.ampm;
        cardInsertData.pinNote = this.state.note;

        CardData.insert(cardInsertData);
    };

    render() {
        if (this.props.pin) {
            return (
                <div>
                    <div className="row">
                        <div className="row col s4 m3 l2">
                            <Card>
                                <CardMedia>
                                    <img src={this.props.pin.image.original.url}/>
                                </CardMedia>
                                <CardTitle title={this.props.pin.id} subtitle={this.props.pin.original_link}/>
                                <CardText> {this.props.pin.note} </CardText>
                                <CardActions>
                                    <ChooseABoard onChange={(selectedBoardId) => this.setBoard(selectedBoardId)}/>
                                    <TimePicker onChange={(hour, minutes) => this.setTime(hour, minutes)}/>
                                    <Calendar onChange={(day, month, year) => this.setDate(day, month, year)}
                                              day={this.state.date}/>
                                    <FlatButton label="Submit" primary={true}
                                                onClick={this.handleOnClickSubmit.bind(this)}/>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        } else return (<div/>)
    }
}

export default CardItem;
