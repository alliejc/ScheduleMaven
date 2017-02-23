import React from 'react';
import CardItem from './cardItem';
import 'react-pinterest/src/css/pinterest.css';
import {GridList} from 'material-ui/GridList';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        height: "auto",
        width: "90%",
    },
};


class Content extends React.Component {
    render() {
        if (this.props.pinObjects) {
            console.log(this.props.pinObjects);
            const pins = this.props.pinObjects.map(pin => (
                <CardItem key={pin.id} pin={pin}/>
            ));

            return (
                <div>
                    <div style={styles.root}>
                        <GridList
                            cellHeight="auto"
                            rows={3}
                            cols={4}
                            style={styles.gridList}>
                            {pins}
                        </GridList>
                    </div>
                </div>
                    )
                    }
    }
}

export default Content;


