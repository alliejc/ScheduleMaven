import React from 'react';
import MaterialUiPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

MaterialUiPlugin();

const MainLayout = ({ header, subheader, content }) => (
  <MuiThemeProvider>
    <div>
      {header}
      {subheader}
      {content}
    </div>
  </MuiThemeProvider>
);

export default MainLayout;
