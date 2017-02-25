import React from 'react';
import {MenuItem, SelectField} from 'material-ui';
import {createContainer} from 'meteor/react-meteor-data';


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
        this.getBoardList();
    };


    getBoardList = () => {
        console.log("getBoardList");

        Meteor.call('getBoards', (err, result) => {
            this.setState({boards: result});
            console.log(result);
        });
    };

    componentWillReceiveProps(nextProps){
        if (nextProps.user != this.props.user) {
            console.log("shouldComponentUpdate-true");
            this.getBoardList();
        }
    }

    // onChange: function(event: object, key: number, payload: any) => void
//     event: TouchTap event targeting the menu item that was clicked.
//     key: The index of the clicked menu item in the children collection.
//     payload: The boards prop of the clicked menu item.
    handleChange = (event, key, selectedBoardUrl) => {

        this.setState({selectedBoardUrl: selectedBoardUrl});

        if (this.props.onChange) {
            this.props.onChange(selectedBoardUrl);
            console.log("handleChange boards" + selectedBoardUrl);
        }
    };

    render() {
        const menuItems = this.state.boards
            .map(board => (<MenuItem value={board.url} key={board.url} primaryText={`${board.name}`}/>));
        return (
            <div>
                <SelectField hintText="Choose a Board" maxHeight={300} value={this.state.selectedBoardUrl}
                             onChange={this.handleChange}>
                    {menuItems}
                </SelectField>
            </div>
        )
    }
}

export default createContainer(() => ({
        user: Meteor.user(),
    }
), ChooseABoard);

