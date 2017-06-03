import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: '15%',
  marginTop: '5%',
  backgroundColor: 'Gainsboro',
};

const Footer = () => (
  <footer style={style}>
    <div>
      <div>
                By using this website you are approving Schedule Maven to pin content on your behalf --
                <a href="https://github.com/alliejc/React-Meteor-Pinterest-Scheduler/blob/master/README.md">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
