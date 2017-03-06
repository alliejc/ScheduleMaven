import React from 'react';
import { Toolbar, ToolbarGroup, TextField, Drawer, AppBar, RaisedButton, IconButton } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ChooseABoard from '../components/chooseaboard.jsx';
import Schedule from '../components/schedule.jsx';
import Content from '../components/content.jsx';
import CardData from '../../imports/collections/carddata';


class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoardUrl: '',
      pinnedFromBoardSpec: '',
      pinObjects: [],
      selectedBoardTitle: '',
      webViewUrl: '',
      open: false,
    };
  }

  getBoardPins = (selectedBoardUrl) => {
    this.setState({ selectedBoardUrl });
    console.log(`getBoardPins${selectedBoardUrl}`);

    let boardSpec = '';
    let slashCounter = 0;

    for (let i = 0; i < selectedBoardUrl.length; i += 1) {
      if (selectedBoardUrl[i] === '/') {
        slashCounter += 1;
      }
      if (slashCounter >= 3) {
        boardSpec += selectedBoardUrl[i];
        this.setState({ pinnedFromBoardSpec: boardSpec });
        CardData.pinnedFromBoardSpec = this.state.pinnedFromBoardSpec;
      }
    }
    console.log(`pinned from boardspec${boardSpec}`);

    Meteor.call('getBoardPins', boardSpec, (err, result) => {
      this.setState({ pinObjects: result });

      console.log(`err ${err}`);
      console.log(`getBoardPins - Call${result}`);
    });
  };

    // handleUrl = (webViewUrl) => {
    //     this.setState({webViewUrl: webViewUrl});
    //
    //     if (this.props.onChange) {
    //         this.props.onChange({webViewUrl});
    //     }
    //     console.log(this.state.open);
    // };

  handleToggle = () => {
    this.setState({ open: !this.state.open });

    if (this.props.onChange) {
      this.props.onChange({ open: !this.state.open });
    }
  };

  render() {
    if (this.state.pinObjects != null) {
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
          <Schedule />
        </Drawer>
      </div>
    );
  }
}

export default SubHeader;
