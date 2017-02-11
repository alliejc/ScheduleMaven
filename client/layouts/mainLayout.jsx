// a const exporting a MainLayout component,
// which accepts 3 parameters, navbar, content and footer.

import React from 'react';
import MaterialUiPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

MaterialUiPlugin();

export const MainLayout = ({header, subheader, content, footer}) => (
    <MuiThemeProvider>
    <div className="section grey lighten-5 ">

        {header}
        {subheader}
            {content}
        {footer}

    </div>
    </MuiThemeProvider>
);