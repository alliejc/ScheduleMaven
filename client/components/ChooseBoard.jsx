import React from 'react';
import { Meteor } from 'meteor/meteor';
import { MenuItem, SelectField } from 'material-ui';
import { createContainer } from 'meteor/react-meteor-data';

const styles = {
  display: 'flex',
  flexDirection: 'row wrap',
};

class ChooseBoard extends React.Component {

  state = {
    boards: [],
    selectedBoardUrl: '',
    open: false,
  };

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

  sortList = () => {
    const nonSortedArray = this.state.boards;
    const sortedArray = nonSortedArray.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      return 0;
    });
    return sortedArray;
  };

  handleChange = (event, key, selectedBoardUrl) => {
    this.setState({ selectedBoardUrl });

    if (this.props.onChange) {
      this.props.onChange(selectedBoardUrl);
    }
  };

  render() {
    if (this.props.user) {
      if (this.state.boards) {
        const menuItems = this.sortList()
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
    }
    return (
      <div style={styles} >
        <SelectField hintText="Please Login" disabled />
      </div>);
  }
}

export default createContainer(() => ({
  user: Meteor.user(),
}
), ChooseBoard);

