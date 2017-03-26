import React from 'react';
import { Meteor } from 'meteor/meteor';
import { MenuItem, SelectField } from 'material-ui';
import { createContainer } from 'meteor/react-meteor-data';

const styles = {
  display: 'flex',
  flexDirection: 'row wrap',
  padding: 20,
};

class ChooseABoard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      selectedBoardUrl: '',
      open: false,
    };
  }

  componentDidMount() {
    if (this.props.user) {
      this.getBoardList();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.getBoardList();
    }
  }

  getBoardList = () => {
    Meteor.call('getBoards', (err, result) => {
      this.setState({ boards: result });
    });
  };

  handleChange = (event, key, selectedBoardUrl) => {
    this.setState({ selectedBoardUrl });

    if (this.props.onChange) {
      this.props.onChange(selectedBoardUrl);
    }
  };

  render() {
    if (this.props.user) {
      const menuItems = this.state.boards
                .map(board => (<MenuItem value={board.url} key={board.url} primaryText={`${board.name}`} />));
      return (
        <div style={styles}>
          <SelectField
            hintText="Choose a Board" maxHeight={300} value={this.state.selectedBoardUrl}
            onChange={this.handleChange}
          >
            {menuItems}
          </SelectField>
        </div>
      );
    }
    return (<div>
      <SelectField hintText="Please Login" disabled />
    </div>);
  }
}

export default createContainer(() => ({
  user: Meteor.user(),
}
), ChooseABoard);

