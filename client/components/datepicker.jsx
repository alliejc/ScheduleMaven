import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  display: 'flex',
  flexDirection: 'row wrap',
  padding: 20,
};

class DatePickerClass extends React.Component {

  handleChange = (event, date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (this.props.onChange) {
      this.props.onChange(day, month, year);
    }
  };

  render() {
    return (
      <DatePicker
        style={styles}
        hintText="Pick a Date"
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePickerClass;
