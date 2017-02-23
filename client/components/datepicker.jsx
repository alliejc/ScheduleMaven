import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const styles = {
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '100%'
};

class DatePickerClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            day: 0,
            month: 0,
            year: 0
        }
    }

    handleChange = (event, date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        this.setState({day: day});
        this.setState({month: month});
        this.setState({year: year});

        if (this.props.onChange) {
            this.props.onChange(day, month, year);
        }

    };

    render() {
        return (
            <DatePicker
                style={styles}
                hintText="Pick a Date"
                onChange={this.handleChange}/>
        );
    }
}

export default DatePickerClass;