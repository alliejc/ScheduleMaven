import React from 'react';

// Todo: Replace card image, title, and description with info from Pinterest card


class CardItem extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            time: '0:00',
            date: '02/15/17',
            boardChoice: '',
        };
    }

    userBoards = {
        board1: 'boardId1',
        board2: 'boardId2',
        board3: 'boardId3',
        board4: 'boardId4',
        board5: 'boardId5'
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
    };

    setDate = (event) => {
        this.setState({date: event});
    };

    setBoard = (event) => {
        this.setState({boardChoice: event});
    }

    onSubmitItem = () => {
        console.log(this.state.time);
        console.log(this.state.boardChoice);
        console.log(this.state.date);
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
                                <div className="divider"></div>
                                <div className="row">
                                    <div className="input-field section" onChange={value => this.setBoard(value)}>
                                        <select>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">{this.userBoards.board1}</option>
                                            <option value="2">{this.userBoards.board2}</option>
                                            <option value="3">{this.userBoards.board3}</option>
                                            <option value="4">{this.userBoards.board4}</option>
                                            <option value="5">{this.userBoards.board5}</option>
                                        </select>
                                        <label>Chose a Pinterest Board</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field">
                                        <input type="date"
                                               className="datepicker section"
                                               onChange={value => this.setDate(value)}
                                               value={this.state.date}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field">
                                        <input type="time"
                                               className="fc-time"
                                               onChange={value => this.setTime(value)}
                                               value={this.state.time}
                                        />
                                    </div>
                                </div>
                                <button className="btn waves-effect teal lighten-2"
                                        type="submit"
                                        name="action"
                                        onSubmit={this.onSubmitItem()}
                                >Schedule
                                    <i className="material-icons right">done</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardItem;