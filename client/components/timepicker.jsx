import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import CardData from '/imports/collections/CardData';

class Timepicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hour: 0,
            minutes: 0
        }
    }

    handleChangeTimePicker = (event, date) => {
        let hour = date.getHours();
        let minutes = date.getMinutes();

        this.setState({minutes: minutes});
        this.setState({hour: hour});

        if(this.props.onChange){
            this.props.onChange(hour, minutes);
        }

    };

    render() {
        return (
            <div>
                <TimePicker
                    hintText="Set Time"
                    format="ampm"
                    onChange={this.handleChangeTimePicker}
                />
            </div>
        );
    }
}

export default Timepicker;