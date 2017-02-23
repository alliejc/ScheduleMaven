import React from 'react';
import TimePicker from 'material-ui/TimePicker';


const styles = {
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '100%'
};

class Timepicker extends React.Component {

    state = {
        hours: 0,
        minutes: 0
    };

    handleChangeTimePicker = (event, date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();

        this.setState({minutes: minutes});
        this.setState({hours: hours});

        if(this.props.onChange){
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