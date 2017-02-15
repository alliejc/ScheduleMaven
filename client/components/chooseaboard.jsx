import React from 'react';
import {DropDownMenu, MenuItem} from 'material-ui';


// const items = [];
// for (let i = 0; i < 100; i++ ) {
//     items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
// }

class ChooseABoard extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            value: "Header Board",
            boardLink: "www.boardurl.com",
            boardTitle: "Board Title"
        };
    }

    // onChange: function(event: object, key: number, payload: any) => void
//     event: TouchTap event targeting the menu item that was clicked.
//     key: The index of the clicked menu item in the children collection.
//     payload: The value prop of the clicked menu item.
    handleChange = (event, index, value) => {
        this.setState({value: value});
        if(this.props.onChange){
            this.props.onChange(value);
        }
    };

    render(){
        return(
            <div>
                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value="Header Board" primaryText="Choose a Board" />
                    <MenuItem value="Board Title 1" primaryText="Beauty" />
                    <MenuItem value="Board Title 2" primaryText="Travel" />
                    <MenuItem value="Board Title 3" primaryText="Food" />
                    <MenuItem value="Board Title 4" primaryText="DIY" />
                    <MenuItem value="Board Title 5" primaryText="Home Decor" />
                    <MenuItem value="Board Title 6" primaryText="Misc" />
                    <MenuItem value="Board Title 7" primaryText="Love" />
                </DropDownMenu>
            </div>
        )
    }
}

export default ChooseABoard;
