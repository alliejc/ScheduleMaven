import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import ChooseABoard from '/client/components/chooseaboard';
import TextField from 'material-ui/TextField';
import Schedule from './schedule';
import RaisedButton from 'material-ui/RaisedButton';

// Todo: dynamically fill options with user pinterest boards
//Source of Truth for isOpen

class SubHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            boardChoice: 1,
        };
    }

    // handleChange = (event, index, value) => this.setState({value});

    // handleSupportNavBarChange = () => {
    //     this.setState({open: !this.state.open})
    // };

    // handleToggle = (event) => {
    //     // this.setState({open: event});
    //     if (this.props.onChange) {
    //         this.props.onChange(event);
    //     }
    //     console.log("Drawer open - Raised Button Click");
    // };

    render(){
        return (
            <div>
            <Toolbar>
                <ToolbarGroup className="container">
                    <ToolbarTitle text="Board Title"/>
                    <ChooseABoard onChange={(item) => this.setBoard(item)}/>
                    <TextField hintText="Enter URL"/>
                </ToolbarGroup>
            </Toolbar>
                <Schedule/>
            </div>

        );
    }
}
export default SubHeader;