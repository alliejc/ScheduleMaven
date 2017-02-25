import React from 'react';
import { AppBar } from 'material-ui/';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  loginPath: '/login',
  passwordSignupFields: 'USERNAME_ONLY',
  onSignedInHook: () => FlowRouter.go('/'),
  onSignedOutHook: () => FlowRouter.go('/'),
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      loggedIn: false,
    };
  }

  render() {
    if (Meteor.user() === null) {
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

