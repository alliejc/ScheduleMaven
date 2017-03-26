import React from 'react';
import { AppBar } from 'material-ui';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  loginPath: '/login',
  passwordSignupFields: 'USERNAME_ONLY',
});

class Header extends React.Component {

  render() {
    return (
      <div>
        <AppBar
          title="Schedule Maven"
          showMenuIconButton={false}
        >
          <Accounts.ui.LoginForm />
        </AppBar>
      </div>
    );
  }
}

export default Header;

