import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, TextField, Drawer, AppBar, RaisedButton, IconButton} from 'material-ui';
import ChooseABoard from '/client/components/chooseaboard';
import Schedule from './schedule';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// Todo: dynamically fill options with user pinterest boards
//Source of Truth for isOpen

class SubHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            boardChoice: 1,
            open: true,
        };
    }

    handleToggle = () => {
        this.setState({open: !this.state.open});
        if (this.props.onChange) {
            this.props.onChange({open: !this.state.open});
        }
        console.log(this.state.open);
    };

    render(){
        return (
            <div>
            <Toolbar>
                <ToolbarGroup className="container">
                    <ToolbarTitle text="Board Title"/>
                    <ChooseABoard onChange={(item) => this.setBoard(item)}/>
                    <TextField hintText="Enter URL"/>
                    <RaisedButton label="See Schedule" onTouchTap={this.handleToggle}/>
                </ToolbarGroup>
            </Toolbar>
                <Drawer
                    width={700}
                    openSecondary={true}
                    open={this.state.open}>
                    <AppBar title="AppBar"
                            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                            onTouchTap={this.handleToggle}
                    />
                    <Schedule />
                </Drawer>
            </div>

        );
    }
}
export default SubHeader;