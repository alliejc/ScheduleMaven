import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Schedule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    };

    componentDidMount() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function() {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            }
        })
    }

    handleToggle = () => {
        this.setState({open: !this.state.open});
        if(this.props.onChange){
            this.props.onChange({open: !this.state.open})
        }
        console.log("handleToggle" + open);
    };

    render() {
        return (
            <div>
                {/*<RaisedButton*/}
                    {/*label="Toggle Drawer"*/}
                    {/*onTouchTap={this.handleToggle}/>*/}
                <Drawer
                    width={500}
                    openSecondary={true}
                    open={this.state.open}
                    onChange={this.handleToggle()}
                >
                    <AppBar title="AppBar"
                            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                            onTouchTap={this.handleToggle}
                    />
                    <div className="teal lighten-2 z-depth-2" id="calendar"></div>;
                </Drawer>
            </div>
            );
    }
}
export default Schedule;
