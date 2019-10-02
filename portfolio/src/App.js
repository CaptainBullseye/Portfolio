import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
    state = {
        sideBarOpen: false
    }

    sideBarToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideBarOpen: !prevState.sideBarOpen};
        });
    };

    render() {
        let sideBar;
        let backdrop;

        if(this.state.sideBarOpen) {
            sideBar = <SideBar />;
            backdrop = <Backdrop />
        }
        return(
            <div style={{height: '100%'}}>
                <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler} />
                {sideBar}
                {backdrop}
                <main style={{marginTop: '64px'}}>
                <p>This is the page content</p>
                </main>
            </div>
        )
    }
}

export default App;