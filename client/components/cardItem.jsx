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
        date: "date",
        boardChoice: 1,
    };

    cardItem = {
        id: 'String PinId',
        link: 'String URL where created',
        url: 'String URL on Pinterest',
        note: 'String user-entered description',
        image: '/img/card_placeholder.jpg',
        article: 'meta data article name'
    };

    setDate = (event) => {
        this.setState({date: event});
    };

    setBoard = (event) => {
        this.setState({boardChoice: event});
    };

    handleOnClickSubmit = () => {
        CardData.insert({boardChoiceTitle: this.state.boardChoice});

        console.log(this.state.boardChoice);
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
                            <TimePicker />
                            <Calendar />
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
