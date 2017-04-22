import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Toolbar, ToolbarGroup, Drawer, AppBar, RaisedButton, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ChooseABoard from './ChooseBoard.jsx';
import Content from './Content.jsx';
import CardData from '../../imports/collections/CardData';
import ExternalCardData from '../../imports/collections/ExternalCardData';
import Schedule from './Schedule.jsx';

const styles = {
  padding: '25px',
};

class SubHeader extends React.Component {
  state = {
    pinObjects: [],
    cursorUrl: '',
    open: false,
  };

  getBoardPins = (selectedBoardUrl) => {
    if (selectedBoardUrl !== null) {
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
        this.setState({ pinObjects: result.pinData });
        this.setState({ cursorUrl: result.nextUrl });
      });
    }
  };

  getExternalPins = () => {
    this.setState({ pinObjects: [ExternalCardData.image_url, ExternalCardData.link] });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });

    if (this.props.onChange) {
      this.props.onChange({ open: !this.state.open });
    }
  };

  render() {
    let content = null;
    if (this.state.cursorUrl !== null) {
      content = <Content pinObjects={this.state.pinObjects} cursorUrl={this.state.cursorUrl} />;
    } else {
      content = <Content pinObjects={this.state.pinObjects} />;
    }
    if (this.state.pinObjects !== null) {
      return (
        <div>
          <Toolbar>
            <ToolbarGroup style={styles} firstChild>
              <ChooseABoard onChange={this.getBoardPins} />
              <RaisedButton label="Display Web Pins" onTouchTap={this.getExternalPins} />
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
              title="Schedule"
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              onTouchTap={this.handleToggle}
            />
            <Schedule />
          </Drawer>
          {content}
        </div>
      );
    }
    return (
      <div>
        <Toolbar>
          <ToolbarGroup style={styles} firstChild>
            <ChooseABoard onChange={this.getBoardPins} />
            <RaisedButton label="Display Web Pins" onTouchTap={this.getExternalPins} />
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
            title="Schedule"
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
