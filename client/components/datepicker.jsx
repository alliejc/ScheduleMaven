import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class Calendar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            date: ""
        }
    }

    render() {
        return (
            <DatePicker  hintText="Pick a Date"/>
        );
    }
}

export default Calendar;