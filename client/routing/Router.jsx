import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SubHeader from '../components/Subheader.jsx';
import MainLayout from '../layouts/MainLayout.jsx';

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
