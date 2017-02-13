import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import CardData from '/imports/collections/CardData';

class Timepicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            ampm: ""
        }
    }

    handleChangeTimePicker = (event, date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();

        if(hours < 12){
            CardData.insert({ampm: "am"});
            this.setState({ampm: "am"});
        } else {
            CardData.insert({ampm: "pm"});
            this.setState({ampm: "pm"});
        }

        CardData.insert({hour: hours});
        CardData.insert({minutes: minutes});

        this.setState({minutes: minutes});
        this.setState({hours: hours});

        console.log(this.state.ampm);
        console.log(this.state.minutes);
        console.log(this.state.hours);

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