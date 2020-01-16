import React, { Component } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import SideBar from '../components/SideBar/SideBar';
import Backdrop from '../components/Backdrop/Backdrop';
import 'react-animated-slider/build/horizontal.css';
import Content from '../components/Content/content';
import Footer from '../components/Footer/Footer';

class Picoo extends Component {
    state = {
        sideBarOpen: false
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
            <div style={{height: '100%', width: '100%'}}>
                <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler} />
                <SideBar show={this.state.sideBarOpen} closeClickHandler={this.backdropClickHandler}/>
                {backdrop}
                <Content />
                <Footer />
                
            </div> 
        )
    };    
}

export default Picoo;