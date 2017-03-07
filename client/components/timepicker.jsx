import React from 'react';
import TimePicker from 'material-ui/TimePicker';


const styles = {
  display: 'flex',
  flexDirection: 'row wrap',
  padding: 20,
};

class Timepicker extends React.Component {

  state = {
    hours: 0,
    minutes: 0,
  };

  handleChangeTimePicker = (event, date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    this.setState({ minutes });
    this.setState({ hours });

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

export default Timepicker;
