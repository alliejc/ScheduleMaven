import 'react-pinterest/src/css/pinterest.css';
import { GridList, RaisedButton } from 'material-ui';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import CardItem from './CardItem.jsx';
import Welcome from './Welcome.jsx';

const styles = {
  root: {
    height: 'auto',
    width: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    height: 'auto',
  },
  loadMoreStyle: {
    marginBottom: '5%',
    marginTop: '5%',
  },
};

class Content extends React.Component {

  state = {
    cursorUrl: '',
    pinObjects: [],
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.props !== nextProps) {
      this.setState({ cursorUrl: nextProps.cursorUrl });
      this.setState({ pinObjects: nextProps.pinObjects });
    }
  };

  handleTouchTap = () => {
    Meteor.call('loadMorePins', this.state.cursorUrl, (err, result) => {
      if (result.pinData !== null) {
        const pins = this.state.pinObjects.concat(result.pinData);
        this.setState({ pinObjects: pins });
      }
      if (result.nextUrl !== null) {
        this.setState({ cursorUrl: result.nextUrl });
      }
    });
  };

  render() {
    if (this.props.user) {
      const pins = this.state.pinObjects.map(pin => (
        <CardItem key={pin.id} pin={pin} />
            ));

      return (
        <div>
          <div style={styles.root}>
            <GridList
              cellHeight="auto"
              rows={3}
              cols={4}
              style={styles.gridList}
            >
              {pins}
            </GridList>
            <RaisedButton
              fullWidth
              style={styles.loadMoreStyle}
              onTouchTap={this.handleTouchTap}
            >
                      Load More
                    </RaisedButton>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div style={styles.root}>
          <GridList
            cellHeight="auto"
            rows={3}
            cols={2}
            style={styles.gridList}
          >
            <Welcome />
          </GridList>
        </div>
      </div>
    );
  }
}

export default createContainer(() => ({
  user: Meteor.user(),
}
), Content);

