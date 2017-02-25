import React from 'react';
import 'react-pinterest/src/css/pinterest.css';


class WebViewContent extends React.Component {

  state = {
    webUrl: 'https://www.pinterest.com/ZoeStone16/travel/',
  };

  render() {
    if (this.props.webUrl) {
      console.log(this.props.webUrl);
      this.setState({ webUrl: this.props.webUrl });

      return (
        <div>
          <iframe src={this.state.webUrl} name="targetframe" allowTransparency="true" scrolling="yes" frameBorder="0" />
        </div>

      );
    }
  }
}
export default WebViewContent;

