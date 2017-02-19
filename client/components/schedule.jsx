import React from 'react';
import  'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CardData from '../../imports/collections/CardData';
import {createContainer} from 'meteor/react-meteor-data';
import {Dialog, FlatButton } from 'material-ui';

BigCalendar.momentLocalizer(moment);

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
    image: '/img/card_placeholder.jpg',
};

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
        };
    }

    handleSelectEvent = (event) => {
        console.log("Select event: " + {event});

        this.setState({dialogOpen: true});
        if (this.props.onChange) {
            this.props.onChange({dialogOpen: true});
        }

        console.log(event);

        Meteor.call('postPin', event.pinToBoardSpec, event.note, event.originalLink, event.image, (err, result) => {

            console.log("err " + err);
            console.log("postPin" + result);
        });
};

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

    render() {
        events = this.props.scheduledItems
            .map(event => ({
                start: new Date(event.year, event.month - 1, event.day, event.hour, event.minutes),
                end: new Date(event.year, event.month - 1, event.day, event.hour, event.minutes + 15),
                title: event.pinToBoardSpec + " - " + event.note,
                pinToBoardSpec: event.pinToBoardSpec,
                note: event.note,
                originalLink: event.originalLink,
                image: event.image,
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
                    actions={actions}
                    modal={true}
                    open={this.state.dialogOpen}
                    contentStyle={customContentStyle}>
                </Dialog>
            </div>
        )
    }
}

export default createContainer(() => (
    {
        scheduledItems: CardData.find({}).fetch(),
    }), Schedule);

