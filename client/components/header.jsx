import React from 'react';
import { AppBar } from 'material-ui/';

class Header extends React.Component {
    render(){
        return (
            <div>
            <AppBar
                title="Login"
                showMenuIconButton={false}
            />
            </div>
        )
    }
}

export default Header;

