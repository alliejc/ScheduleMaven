import React from 'react';
import {DropDownMenu, MenuItem, RaisedButton, SelectField} from 'material-ui';

const styles = {
    padding: 20,
    width: '100%'
};

class ChooseABoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boards: [],
            selectedBoardUrl: '',
            open: false,
        };
    }

    componentDidMount() {

        console.log("component did mount");
            Meteor.call('getBoards', (err, result) => {
                this.setState({boards: result});
                console.log(result);
            });
    };

    // onChange: function(event: object, key: number, payload: any) => void
//     event: TouchTap event targeting the menu item that was clicked.
//     key: The index of the clicked menu item in the children collection.
//     payload: The boards prop of the clicked menu item.
    handleChange = (event, key, selectedBoardUrl) => {

        this.setState({ selectedBoardUrl: selectedBoardUrl });

        if (this.props.onChange) {
            this.props.onChange(selectedBoardUrl);
            console.log("handleChange boards" + selectedBoardUrl);
        }
    };

    render() {
        if(this.state.boards != null) {
            const menuItems = this.state.boards
                .map(board => (<MenuItem value={board.url} key={board.url} primaryText={`${board.name}`}/>));
            return (
                <div>
                    <SelectField fullWidth={true} hintText="Choose a Board" maxHeight={300} value={this.state.selectedBoardUrl} onChange={this.handleChange}>
                        {menuItems}
                    </SelectField>
                </div>
            )
        } else {
            return(
            <div>
                <MenuItem value={1} key={1} primaryText="Hello"/>
            </div>
            )
        }
    }
}

export default ChooseABoard;

