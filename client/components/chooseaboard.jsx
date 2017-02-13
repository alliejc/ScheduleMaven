import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// const items = [];
// for (let i = 0; i < 100; i++ ) {
//     items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
// }

class ChooseABoard extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            value: 1
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        if(this.props.onChange){
            this.props.onChange(value);

        }
    };

    render(){
        return(
            <div>
                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Choose a Board" />
                    <MenuItem value={2} primaryText="Travel" />
                    <MenuItem value={3} primaryText="Food" />
                    <MenuItem value={4} primaryText="DIY" />
                    <MenuItem value={5} primaryText="Home Decor" />
                    <MenuItem value={6} primaryText="Misc" />
                    <MenuItem value={7} primaryText="Love" />
                </DropDownMenu>
            </div>
        )
    }
}

export default ChooseABoard;
