import React from 'react';
import CardItem from './cardItem';

  class Content extends React.Component {


      render() {
          return (
              <div>
                  <div className="row grey lighten-5 ">
                      <div className="grey lighten-5">
                          <CardItem />
                      </div>
                  </div>
              </div>

          );
      }
  }
  export default Content;