import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';
// import CarouselUI from './components/Image-Slider/Slider';
import carousel from './components/Carousel/carousel';

class App extends Component {
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
            <div style={{height: '100%'}}>
                <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler} />
                <SideBar show={this.state.sideBarOpen} />
                {backdrop}
                
                {/* <CarouselUI /> */}

                <main style={{marginTop: '88px'}}>
                    
                <Carousel slides={carouselSlidesData} />, carouselContainer
                
                <p>This is the page content</p>
                </main>
            </div>
        )
    }
}

export default App;