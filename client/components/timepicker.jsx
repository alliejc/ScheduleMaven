import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import CardData from '/imports/collections/CardData';

class Timepicker extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeTimePicker = (event, date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();

        if(hours <= 12){
            CardData.insert({ampm: "am"});
        } else {
            CardData.insert({ampm: "pm"});
        }
        
        CardData.insert({hour: hours});
        CardData.insert({minutes: minutes});

        console.log({hours:date.getHours(), minutes:date.getMinutes()});
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