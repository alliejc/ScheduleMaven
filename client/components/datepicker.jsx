import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import CardData from '/imports/collections/CardData';

class DatePickerClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: 0,
        }
    }

    // Callback function that is fired when the date value changes.
    //
    // Signature:
    // function(null: undefined, date: object) => void
    // null: Since there is no particular event associated with the change, the first argument will always be null.
    // date: The new date.

    handleChange = (event, date) => {
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        CardData.insert({day: day});
        CardData.insert({month: month});
        CardData.insert({year: year});
    };

    render() {
        return (
            <DatePicker hintText="Pick a Date"
                        onChange={this.handleChange}/>
        );
    }
}

export default DatePickerClass;