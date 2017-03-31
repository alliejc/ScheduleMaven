import React from 'react';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui';

const Welcome = () => (
  <div>
    <Card>
      <CardMedia>
        <img alt="Pin" src="/img/card_placeholder.jpg" />
      </CardMedia>
      <CardTitle title="Login with Pinterest to start scheduling" />
      <CardText>
            With Schedule Maven you can schedule pins from your current boards and boards you follow
        </CardText>
    </Card>
  </div>
);

export default Welcome;