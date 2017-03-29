import 'react-pinterest/src/css/pinterest.css';
import { GridList } from 'material-ui/GridList';
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
    // justifyContent: 'space-around',
  },
  gridList: {
    height: 'auto',
  },
};

class Content extends React.Component {

  render() {
    if (this.props.user) {
      if (this.props.pinObjects) {
        const pins = this.props.pinObjects.map(pin => (
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
            </div>
          </div>
        );
      }
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

