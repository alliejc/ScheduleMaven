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
        this.state = {value: 1};
        console.log(this.state.value);
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        if(this.props.onChange){
            this.props.onChange(value);
            console.log("handleChange/value" + value);
            console.log("handleChange/index" + index);
            console.log("handleChange/event" + event);

        }
    }

    render(){
        return(
            <div>
                <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Choose a Board" />
                    <MenuItem value={2} primaryText="All Voice" />
                    <MenuItem value={3} primaryText="All Text" />
                    <MenuItem value={4} primaryText="Complete Voice" />
                    <MenuItem value={5} primaryText="Complete Text" />
                    <MenuItem value={6} primaryText="Active Voice" />
                    <MenuItem value={7} primaryText="Active Text" />
                </DropDownMenu>
            </div>
        )
    }
}

export default ChooseABoard;
