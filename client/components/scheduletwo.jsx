import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <BigCalendar
                    culture='en-GB'
                    events={this.props.tasks}
                    views={['month', 'week']}/>
            </div>
        );
    }
}


export default Calendar;