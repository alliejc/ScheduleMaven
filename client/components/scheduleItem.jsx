import React from 'react';
import CardData from '../../imports/collections/CardData';
import { createContainer } from 'meteor/react-meteor-data';

class ScheduleItem extends React.Component {


    render() {
        return(
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <img className="responsive-img" src="img/card_placeholder.jpg" width='auto' height='5px'/>
                        <time className="center" height='5px'>10:00am</time>
                    </div>
                </div>
            </div>
        )}
}

export default createContainer(() => (
    {
        scheduledItems: CardData.find({}).fetch(),
    }), ScheduleItem);

{/*<div className="row">*/}
        {/*<div className="col s12">*/}
            {/*<div className="card">*/}
                {/*<div className="card-image">*/}
                    {/*<img src="img/card_placeholder.jpg"/>*/}
                        {/*<span className="card-title">Card Title</span>*/}
                {/*</div>*/}
            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}