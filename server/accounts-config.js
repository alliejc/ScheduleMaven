import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  loginPath: '/login',
  passwordSignupFields: 'USERNAME_ONLY',
    // forceApprovalPrompt: false,
    // onSignedInHook: () => FlowRouter.go('/'),
    // onSignedOutHook: () => FlowRouter.go('/'),
});
