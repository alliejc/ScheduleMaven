import React from 'react';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/';

// const styles = {
//   display: 'flex',
//   flexDirection: 'row wrap',
//   padding: 20,
//   width: 'auto%',
//   textOverflow: 'ellipsis',
// };

const Welcome = () => (
  <div className="row col 4">
    <Card>
      <CardMedia>
        <img alt="Pin" src="/img/card_placeholder.jpg" />
      </CardMedia>
      <CardTitle title="Login with Pinterest to start scheduling" />
      <CardText>
            With PinScheduler you can schedule pins from your current boards and boards you follow
        </CardText>
    </Card>
  </div>
);

export default Welcome;
