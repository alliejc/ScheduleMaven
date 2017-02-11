import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import ChooseABoard from '/client/components/chooseABoard';
import TextField from 'material-ui/TextField';
import Schedule from './schedule';
import RaisedButton from 'material-ui/RaisedButton';
// Todo: dynamically fill options with user pinterest boards

class SubHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            boardChoice: 1,
            open: true
        };
    }

    setBoard = (event) => {
        this.setState({boardChoice: event});
        console.log("setBoard" + this.state.boardChoice);
    };

    handleChange = (event, index, value) => this.setState({value});

    handleNavChange = () => {
        this.setState({open: !this.state.open})
    };

    render(){
        return (
            <div>
            <Toolbar>
                <ToolbarGroup className="container">
                    <ToolbarTitle text="Board Title" firstChild="true"/>
                    <ChooseABoard onChange={(item) => this.setBoard(item)}/>
                    <TextField hintText="Enter URL"/>
                    <RaisedButton label="Toggle Drawer" onClick={this.handleNavChange}/>
                </ToolbarGroup>
            </Toolbar>
                <Schedule />
            </div>

        );
    }
}
export default SubHeader;