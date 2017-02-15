import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import  'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CardData from '../../imports/collections/CardData';
import {createContainer} from 'meteor/react-meteor-data';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

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
            navbarOpen: true,
            dialogOpen: false,
        };
    }

    handleSelectEvent = (event) => {
        console.log("Select event:");
        console.log(event);

        this.setState({dialogOpen: true});
        if (this.props.onChange) {
            this.props.onChange({dialogOpen: true});
        }
    };

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

    handleToggle = () => {
        this.setState({open: !this.state.open});
        if (this.props.onChange) {
            this.props.onChange({open: !this.state.open});
        }
    };

    render() {

        events = this.props.scheduledItems
            .map(event => ({
                start: new Date(event.year, event.month - 1, event.day, event.hour, event.minutes),
                end: new Date(event.year, event.month - 1, event.day, event.hour, event.minutes + 15),
                title: event.boardChoiceTitle
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
                <RaisedButton
                    label="See Schedule"
                    onTouchTap={this.handleToggle}/>
                <Drawer
                    width={700}
                    openSecondary={true}
                    open={this.state.open}>
                    <AppBar title="AppBar"
                            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                            onTouchTap={this.handleToggle}
                    />
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
                </Drawer>
                <Dialog
                    actions={actions}
                    modal={true}
                    open={this.state.dialogOpen}
                    onRequestClose={this.handleClose()}
                    contentStyle={customContentStyle}
                >
                </Dialog>
            </div>
        );
    }
}

export default createContainer(() => (
    {
        scheduledItems: CardData.find({}).fetch(),
    }), Schedule);
