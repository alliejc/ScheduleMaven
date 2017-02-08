import React from 'react';

export default Content = ({name}) => (
            <div className="row grey lighten-5 ">
                <div className="col s9 grey lighten-5">
                        <h2 className="center light-blue-text">
                            <i className="material-icons">flash_on</i>
                        </h2>
                        <h5 className="center">Speeds up development</h5>

                        <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                </div>
                <div className="col s3  teal lighten-2 z-depth-2">
                        <h2 className="center light-blue-text">
                            <i className="material-icons">settings</i>
                        </h2>
                        <h5 className="center">Easy to work with</h5>
                        <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                </div>
        </div>
);