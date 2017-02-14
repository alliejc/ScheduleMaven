import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ScheduleItem from './scheduleItem';
import  'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import CardData from '../../imports/collections/CardData';
import { createContainer } from 'meteor/react-meteor-data';

BigCalendar.momentLocalizer(moment);


class ScheduleTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            title: 'test'
        };
    }

    handleToggle = () => {
        this.setState({open: !this.state.open});
        if (this.props.onChange) {
            this.props.onChange({open: !this.state.open});
        }
    };

    render() {
        // console.log(this.props.scheduledItems);
        return (
            <div>
                <RaisedButton
                    label="See Schedule"
                    onTouchTap={this.handleToggle}/>
                <Drawer
                    width={500}
                    openSecondary={true}
                    open={this.state.open}>
                    <AppBar title="AppBar"
                            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                            onTouchTap={this.handleToggle}
                    />
                        <div>
                            <BigCalendar
                                defaultView='day'
                                events={this.props.scheduledItems}
                                startAccessor='startDate'
                                endAccessor='endDate'
                                style={{height: 800}}
                                selectable={true}
                                />
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default createContainer(() => (
    {
        scheduledItems: CardData.find({}).fetch(),
    }), ScheduleTwo);
