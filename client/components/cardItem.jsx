import React from 'react';
import Calendar from '/client/components/datepicker';
import TimePicker from '/client/components/timepicker';
import ChooseABoard from '/client/components/chooseaboard';
import {FlatButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/';
import CardData from '/imports/collections/CardData';


// Todo: Replace card image, title, and description with info from Pinterest card
//Todo: find out why metadata.name is not working

class CardItem extends React.Component {


    state = {

        //pin
        image_url: '',
        note: '',
        selectedBoardUrl: '',
        board: '',
        link: '',

        //time
        hour: 0,
        minutes: 0,
        ampm: '',

        //date
        day: 0,
        month: 0,
        year: 0,
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

    setBoard = (selectedBoardUrl) => {
        let boardSpec = '';
        let slashCounter = 0;

        for(let i = 0; i < selectedBoardUrl.length; i++){
            if(selectedBoardUrl[i] === '/'){
                slashCounter++
            }
            if(slashCounter >= 3){
                boardSpec = boardSpec + selectedBoardUrl[i];
                this.setState({board: 'ZoeStone16/travel'});
            }
        }
        console.log("pin to boardspec" + boardSpec);

        this.setState({selectedBoardUrl: selectedBoardUrl});
        console.log(boardSpec);
    };

    handleOnClickSubmit = () => {
        let cardInsertData = {};

        cardInsertData.destinationBoardTitle = this.state.selectedBoardUrl;
        cardInsertData.destinationBoardLink = this.state.selectedBoardUrl;
        cardInsertData.board = this.state.board;
        cardInsertData.note = this.props.pin.note;
        cardInsertData.image_url = this.props.pin.image.original.url;
        cardInsertData.link = this.state.link;

        cardInsertData.day = this.state.day;
        cardInsertData.month = this.state.month;
        cardInsertData.year = this.state.year;

        cardInsertData.hour = this.state.hour;
        cardInsertData.minutes = this.state.minutes;
        cardInsertData.ampm = this.state.ampm;

        CardData.insert(cardInsertData);
    };

    render() {
        if (this.props.pin != null) {
            return (
                <div>
                    <div className="row">
                        <div className="row col s4 m3 l2">
                            <Card>
                                <CardMedia>
                                    <img src={this.props.pin.image.original.url}/>
                                </CardMedia>
                                <CardTitle title={this.props.pin.metadata.name}/>
                                <CardText> {this.props.pin.note} </CardText>
                                <CardActions>
                                    <ChooseABoard onChange={(selectedBoardUrl) => this.setBoard(selectedBoardUrl)}/>
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
