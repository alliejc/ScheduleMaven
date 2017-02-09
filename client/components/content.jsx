import React from 'react';
import CardItem from './cardItem';
import Schedule from './schedule';

  class Content extends React.Component {


      render() {
          return (
              <div>
                  <div className="row grey lighten-5 ">
                      <div className="col s8 grey lighten-5">
                          <h2 className="center light-blue-text">
                          </h2>
                          <CardItem />
                      </div>
                      <div className="col s4  teal lighten-2 z-depth-2">
                          <div className="divider"></div>
                          <Schedule />
                      </div>
                  </div>
              </div>

          );
      }
  }
  export default Content;