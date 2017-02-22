import React from 'react';
import  'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CardData from '../../imports/collections/CardData';
import {createContainer} from 'meteor/react-meteor-data';
import {Dialog, FlatButton} from 'material-ui';

BigCalendar.momentLocalizer(moment);


const styles = {
    dialogRoot: {
        paddingTop: '0',
        marginTop: '-65px',
        bottom: '0',
        overflow: 'scroll',
    },
    dialogContent: {
        width: '100%',
        maxHeight: '100%',
    },
    dialogBody: {
        maxHeight: '100%',
    }
};

class Schedule extends React.Component {
    state = {
        dialogOpen: false,
        board: "",
        image: "",
        note: "",
        link: ""
    };

    handleSelectEvent = (event) => {

        console.log("Select event: " + event);

        this.setState({board: event.board});
        this.setState({image: event.image_url});
        this.setState({note: event.note});
        this.setState({link: event.link});

        this.setState({dialogOpen: true});
        if (this.props.onChange) {
            this.props.onChange({dialogOpen: true});

        }
    };

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

    render() {
        events = this.props.scheduledItems
            .map(event => ({
                start: new Date(event.year, event.month - 1, event.day, event.hours, event.minutes),
                end: new Date(event.year, event.month - 1, event.day, event.hours, event.minutes + 15),
                title: event.board + " - " + event.note,
                board: event.board,
                note: event.note,
                link: event.link,
                image_url: event.image_url,
            }));

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <div>
                    <BigCalendar
                        defaultView='agenda'
                        popup
                        step={15}
                        events={events}
                        startAccessor='start'
                        endAccessor='end'
                        style={{height: 800, width: '100%'}}
                        selectable={true}
                        onSelectEvent={event => this.handleSelectEvent(event)}
                    />
                </div>
                <Dialog
                    repositionOnUpdate={false}
                    autoDetectWindowHeight={false}
                    autoScrollBodyContent={false}
                    actions={actions}
                    title={this.state.board}
                    modal={false}
                    onRequestClose={this.handleClose}
                    contentStyle={styles.dialogContent}
                    bodyStyle={styles.dialogBody}
                    style={styles.dialogRoot}
                    open={this.state.dialogOpen}>
                    <span>{this.state.note}</span>
                    <img src={this.state.image}/>
                </Dialog>
            </div>
        )
    }
}

export default createContainer(() => (
    {
        scheduledItems: CardData.find({}).fetch(),
    }), Schedule);

