import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';
import Content from '/client/components/content.jsx';
import Navbar from '/client/components/navbar.jsx';
import Footer from '/client/components/footer.jsx';

FlowRouter.route("/", {
    action () {
        mount(MainLayout, {
            header: <Navbar/>,
            content: <Content/>,
            footer: <Footer/>
        });
    }
});