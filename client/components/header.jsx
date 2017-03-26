import React from 'react';
import { AppBar } from 'material-ui';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  loginPath: '/login',
    // onSignedInHook: () => FlowRouter.go('/'),
    // onSignedOutHook: () => FlowRouter.go('/'),
});

class Header extends React.Component {

  render() {
    return (
      <div>
        <AppBar
          title="Pin Scheduler"
          showMenuIconButton={false}
        >
          <Accounts.ui.LoginForm />
        </AppBar>
      </div>
    );
  }
}

export default Header;

