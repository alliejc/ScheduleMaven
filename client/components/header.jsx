import React from 'react';
import { AppBar, RaisedButton,Toolbar, ToolbarGroup, ToolbarTitle, FlatButton, Dialog, IconButton } from 'material-ui/';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,
        };
    }

    handleClose = () => {
        this.setState({dialogOpen: false});
    };

    handleOnClick = () => {
        this.setState({dialogOpen: true});
        if (this.props.onChange) {
            this.props.onChange({dialogOpen: true});
        }
    };

    launchPinterestAuth = () => {
        Meteor.loginWithPinterest();
    }

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <AppBar
                    title="Login"
                    showMenuIconButton={false}>
                    <FlatButton label="Login" onClick={this.handleOnClick.bind(this)}/>
                </AppBar>
                <Dialog
                    actions={actions}
                    modal={true}
                    open={this.state.dialogOpen}
                    title="Login with Pinterest">
                <IconButton onClick={this.launchPinterestAuth.bind(this)}>
                    <img src='/img/Pinterest-badge-144px.png'/>
                </IconButton>
                </Dialog>
            </div>
        )
    }
}

export default Header;

