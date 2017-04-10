import { RaisedButton } from 'material-ui';
import React from 'react';
import StackGrid from 'react-stack-grid';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import CardItem from './CardItem.jsx';
import Welcome from './Welcome.jsx';
import Footer from './Footer.jsx';

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
          <div>
            <StackGrid
              columnWidth="25%"
              monitorImagesLoaded
            >
              {pins}
            </StackGrid>
          </div>
          <RaisedButton
            fullWidth
            style={styles.loadMoreStyle}
            onTouchTap={this.handleTouchTap}
          >
            Load More
          </RaisedButton>
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <div>
          <StackGrid
            columnWidth="25%"
            monitorImagesLoaded
          >
            <Welcome />
            <Welcome />
            <Welcome />
            <Welcome />
          </StackGrid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default createContainer(() => ({
  user: Meteor.user(),
}
), Content);

