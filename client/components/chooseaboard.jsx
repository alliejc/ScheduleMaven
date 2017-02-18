import React from 'react';
// import { createContainer } from 'meteor/react-meteor-data';
import {DropDownMenu, MenuItem} from 'material-ui';

class ChooseABoard extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            boards: [],
            selectedBoardId: 0,
        };
    }

    componentWillMount() {

        Meteor.call('getBoards', (err, result) => {
            this.setState({boards: result});
        });

    };

    updateStateFromProps = (props) => {
        console.log("updateStateFromProps");

        if (props.user) {
            Meteor.call('getBoards', (err, result) => {
                this.setState({boards: result});
                console.log("from props" + result);
            });

        }
    };

    // onChange: function(event: object, key: number, payload: any) => void
//     event: TouchTap event targeting the menu item that was clicked.
//     key: The index of the clicked menu item in the children collection.
//     payload: The boards prop of the clicked menu item.
    handleChange = (event, key, selectedBoardId) => {
        console.log(selectedBoardId);

        this.setState({ selectedBoardId });

        if(this.props.onChange){
            this.props.onChange(selectedBoardId);
            console.log("handleChange boards" + selectedBoardId);
        }
    };

    render(){
        const menuItems = this.state.boards
            .map(board => (<MenuItem value={board.url} key={board.url} primaryText={`${board.name}`}/>));
        return(
            <div>
                <DropDownMenu maxHeight={300} value={this.state.selectedBoardId} onChange={this.handleChange}>
                    <MenuItem value={0} label="Choose a Board" primaryText="Choose a Board" disabled={true} />
                    {menuItems}
                </DropDownMenu>
            </div>
        )
    }
}

export default ChooseABoard;
// export default createContainer(() => {
//     Meteor.user();
// }, ChooseABoard);
