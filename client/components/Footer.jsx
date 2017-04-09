import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: '20px',
  marginTop: '5%',
  marginBottom: '5%',
};

const Footer = () => (
  <footer style={style}>
    <div>
      <div className="container">
                By using this app you are approving Schedule Maven to pin content on your behalf --
                <a href="https://github.com/alliejc/React-Meteor-Pinterest-Scheduler/blob/master/README.md">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
