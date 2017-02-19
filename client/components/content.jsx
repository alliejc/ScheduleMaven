import React from 'react';
import CardItem from './cardItem';
import 'react-pinterest/src/css/pinterest.css';


class Content extends React.Component {

    render() {
        if (this.props.pinObjects) {
            console.log(this.props.pinObjects);
            const pins = this.props.pinObjects.map(pin => (
              <CardItem key={pin.id} pin={pin}/>
            ));

            return (
                <div>
                    <div className="grey lighten-5 ">
                            {pins}
                        </div>
                    </div>

            );
        } else {
            return (<CardItem pin={ {url:'test', id:4, link:'test'}}/>);
        }

    }
}
export default Content;

