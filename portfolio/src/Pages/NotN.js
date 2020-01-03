import React, { Component } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import SideBar from '../components/SideBar/SideBar';
import Backdrop from '../components/Backdrop/Backdrop';
import 'react-animated-slider/build/horizontal.css';

class Notn extends Component {
    state = {
        sideBarOpen: false
    }

    constructor(){
        super();
        this.state = {
            percentage: 0
        }
    }

    sideBarToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideBarOpen: !prevState.sideBarOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideBarOpen: false});
    };

    render() {
        let backdrop;

        if(this.state.sideBarOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return(
            <div id="notn" style={{height: '100%', width: '100%'}}>
                <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler} />
                <SideBar show={this.state.sideBarOpen} />
                {backdrop}
                
            </div> 
        )
    };    
}

export default Notn;