import React from 'react';
import MaterialUiPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

MaterialUiPlugin();

const MainLayout = ({ header, subheader, content, footer }) => (
  <MuiThemeProvider>
    <div className="grey lighten-5 ">

      {header}
      {subheader}
      {content}
      {footer}

    </div>
  </MuiThemeProvider>
);

export default MainLayout;
