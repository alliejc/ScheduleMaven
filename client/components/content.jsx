import 'react-pinterest/src/css/pinterest.css';
import { GridList } from 'material-ui/GridList';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CardItem from './cardItem.jsx';
import Welcome from './welcome.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    height: 'auto',
    width: '90%',
  },
};

class Content extends React.Component {

  render() {
    if (this.props.user) {
      if (this.props.pinObjects) {
        console.log(this.props.pinObjects);
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
    return (<div>
      <Welcome />
    </div>);
  }
}

export default createContainer(() => ({
  user: Meteor.user(),
}
), Content);

