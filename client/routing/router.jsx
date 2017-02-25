import React from 'react';
import { mount } from 'react-mounter';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import SubHeader from '../components/subheader.jsx';
import MainLayout from '../layouts/mainLayout.jsx';


FlowRouter.route('/login', {
  action() {
    mount(MainLayout, {
      content: <Accounts.ui.LoginForm />,
    });
  },
});

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      header: <Header />,
      subheader: <SubHeader />,
      footer: <Footer />,
    });
  },
});
