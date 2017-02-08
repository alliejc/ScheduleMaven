// a const exporting a MainLayout component,
// which accepts 3 parameters, navbar, content and footer.

import React from 'react';

export const MainLayout = ({header, content, footer}) => (
    <div className="section grey lighten-5">
        {header}
            {content}
        {footer}
    </div>
);