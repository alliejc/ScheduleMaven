import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Toolbar, ToolbarGroup, TextField, Drawer, AppBar, RaisedButton, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ChooseABoard from '../components/chooseaboard.jsx';
import Content from '../components/content.jsx';
import CardData from '../../imports/collections/carddata';
import Schedule from '../components/schedule.jsx';

const styles = {
  padding: '25px',
};

class SubHeader extends React.Component {
  state = {
    pinObjects: [],
    open: false,
  };

  getBoardPins = (selectedBoardUrl) => {
    let boardSpec = '';
    let slashCounter = 0;

    for (let i = 0; i < selectedBoardUrl.length; i += 1) {
      if (selectedBoardUrl[i] === '/') {
        slashCounter += 1;
      }
      if (slashCounter >= 3) {
        boardSpec += selectedBoardUrl[i];
        CardData.pinnedFromBoardSpec = boardSpec;
      }
    }

    Meteor.call('getBoardPins', boardSpec, (err, result) => {
      this.setState({ pinObjects: result });
    });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });

    if (this.props.onChange) {
      this.props.onChange({ open: !this.state.open });
    }
  };

  render() {
    if (this.state.pinObjects !== null) {
      return (
        <div>
          <Toolbar>
            <ToolbarGroup style={styles} firstChild>
              <ChooseABoard onChange={selectedBoardUrl => this.getBoardPins(selectedBoardUrl)} />
            </ToolbarGroup>
            <ToolbarGroup style={styles} lastChild>
              <RaisedButton label="See Schedule" onTouchTap={this.handleToggle} />
            </ToolbarGroup>
          </Toolbar>
          <Drawer
            width={700}
            openSecondary
            open={this.state.open}
          >
            <AppBar
              title="AppBar"
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              onTouchTap={this.handleToggle}
            />
            <Schedule />
          </Drawer>
          <Content pinObjects={this.state.pinObjects} />
        </div>
      );
    }
    return (
      <div>
        <Toolbar>
          <ToolbarGroup className="container">
            <ChooseABoard onChange={selectedBoardUrl => this.getBoardPins(selectedBoardUrl)} />
            <TextField hintText="Enter URL" />
            <RaisedButton label="See Schedule" onTouchTap={this.handleToggle} />
          </ToolbarGroup>
        </Toolbar>
        <Drawer
          width={700}
          openSecondary
          open={this.state.open}
        >
          <AppBar
            title="AppBar"
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onTouchTap={this.handleToggle}
          />
          <div className="container">
            <Schedule />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default SubHeader;
