import React from 'react';
import TimePicker from 'material-ui/TimePicker';

class Timepicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: null,
            minutes: null,
            dateObject: null
        };
    }

    handleChangeTimePicker = (event, date) => {
        this.setState({dateObject: date, hours:date.getHours(), minutes:date.getMinutes()});
        if(this.props.onChange){
            this.props.onChange({dateObject: date, hours:date.getHours(), minutes:date.getMinutes()});
        }
        console.log({hours:date.getHours(), minutes:date.getMinutes()});
    };

    render() {
        return (
            <div>
                <TimePicker
                    hintText="Set Time"
                    format="ampm"
                    value={this.state.dateObject}
                    onChange={this.handleChangeTimePicker}
                />
            </div>
        );
    }
}

export default Timepicker;