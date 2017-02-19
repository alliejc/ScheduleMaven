import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, TextField, Drawer, AppBar, RaisedButton, IconButton} from 'material-ui';
import ChooseABoard from '/client/components/chooseaboard';
import Schedule from './schedule';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Content from '/client/components/content';
import WebViewContent from '/client/components/webviewcontent';
import CardData from '/imports/collections/CardData';

// Todo: dynamically fill options with user pinterest boards
//Source of Truth for isOpen

class SubHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBoardUrl: '',
            pinnedFromBoardSpec: '',
            pinObjects: [],
            selectedBoardTitle: '',
            webViewUrl: '',
            open: true,
        };
    }

    getBoardPins = (selectedBoardUrl) => {
        this.setState({selectedBoardUrl});
        console.log("getBoardPins" + selectedBoardUrl);

        let boardSpec = '';
        let slashCounter = 0;

        for(let i = 0; i < selectedBoardUrl.length; i++){
            if(selectedBoardUrl[i] === '/'){
                slashCounter++
            }
            if(slashCounter >= 3){
                boardSpec = boardSpec + selectedBoardUrl[i];
                this.setState({pinnedFromBoardSpec: boardSpec});
                CardData.pinnedFromBoardSpec = this.state.pinnedFromBoardSpec;
        }
    }

        Meteor.call('getBoardPins', boardSpec, (err, result) => {
            this.setState({pinObjects: result});

            console.log("err " + err);
            console.log("getBoardPins - Call" + result);
        });
    };

    // handleUrl = (webViewUrl) => {
    //     this.setState({webViewUrl: webViewUrl});
    //
    //     if (this.props.onChange) {
    //         this.props.onChange({webViewUrl});
    //     }
    //     console.log(this.state.open);
    // };

    handleToggle = () => {
        this.setState({open: !this.state.open});

        if (this.props.onChange) {
            this.props.onChange({open: !this.state.open});
        }
    };

    render(){
        return(
            <div>
            <Toolbar>
                <ToolbarGroup className="container">
                    <ChooseABoard onChange={(selectedBoardUrl) => this.getBoardPins(selectedBoardUrl)}/>
                    <TextField hintText="Enter URL" />
                    <RaisedButton label="See Schedule" onTouchTap={this.handleToggle}/>
                </ToolbarGroup>
            </Toolbar>
                <Drawer
                    width={700}
                    openSecondary={true}
                    open={this.state.open}>
                    <AppBar title="AppBar"
                            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                            onTouchTap={this.handleToggle}
                    />
                    <Schedule />
                </Drawer>
                <Content pinObjects={this.state.pinObjects} />
            </div>

        );
    }
}
export default SubHeader;