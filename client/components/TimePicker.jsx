import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const styles = {
  display: 'flex',
  flexDirection: 'row wrap',
};

class TimePickerClass extends React.Component {

  handleChangeTimePicker = (event, date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    if (this.props.onChange) {
      this.props.onChange(hours, minutes);
    }
  };

  render() {
    return (
      <div>
        <TimePicker
          style={styles}
          hintText="Set Time"
          format="ampm"
          onChange={this.handleChangeTimePicker}
        />
      </div>
    );
  }
}

TimePickerClass.defaultProps = {
  date: new Date(),
};

TimePickerClass.PropTypes = {
  date: React.PropTypes.object,
};

export default TimePickerClass;
