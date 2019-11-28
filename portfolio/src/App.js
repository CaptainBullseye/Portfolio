import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';

import 'react-animated-slider/build/horizontal.css';
import ContentSlider from './components/SlideContent/SlideContent';
import About from './components/About/About';

// import ProgessBar from './components/ProgressBar/ProgressBar';
// import ProgBar from './components/Prog/Prog';
import VerticalProgBar from './components/VerticalProgBar/VerticalProgbar';
// import Stuff from './components/Icons/Stuff';
// import { ICONS } from './components/Icons/Icons';


// var counting = false;

// function start(percentage) {
//     //console.log(counting);
//     if (!counting) {
//         counting = true;
//         // log.innerHTML = count;
//         var timer = setInterval(function() {
//             if (percentage < 100) {
//                 // log.innerHTML = count;
//                 percentage++;
//             } else {
//                 clearInterval(timer);
//                 percentage = arguments[0];
//                 counting = false;
//             }
//         }, 100);
//     }
// }

class App extends Component {
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
            <div style={{height: '100%', width: '100%'}}>
                <Toolbar sideBarClickHandler={this.sideBarToggleClickHandler} />
                <SideBar show={this.state.sideBarOpen} />
                {backdrop}
                
                <ContentSlider />

                <About />

                <VerticalProgBar />          

            </div>
            
            
        )
    };

    
}

export default App;