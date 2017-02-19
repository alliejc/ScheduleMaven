import React from 'react';
import {DropDownMenu, MenuItem, Menu, FlatButton, Popover} from 'material-ui';

class ChooseABoard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boards: [],
            selectedBoardUrl: '',
            open: false,
        };
    }

    componentWillMount() {

        Meteor.call('getBoards', (err, result) => {
                this.setState({boards: result});
        });
    };

    // onChange: function(event: object, key: number, payload: any) => void
//     event: TouchTap event targeting the menu item that was clicked.
//     key: The index of the clicked menu item in the children collection.
//     payload: The boards prop of the clicked menu item.
    handleChange = (event, key, selectedBoardUrl) => {

        this.setState({ selectedBoardUrl });

        if (this.props.onChange) {
            this.props.onChange(selectedBoardUrl);
            console.log("handleChange boards" + selectedBoardUrl);
        }
    };

    render() {
        const menuItems = this.state.boards
            .map(board => (<MenuItem value={board.url} key={board.url} primaryText={`${board.name}`}/>));
        return(
            <div>
                <DropDownMenu maxHeight={300} value={this.state.selectedBoardUrl} onChange={this.handleChange}>
                    {menuItems}
                </DropDownMenu>
            </div>
        )
    }
}

export default ChooseABoard;

