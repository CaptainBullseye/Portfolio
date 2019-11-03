import React, { Component, Fragment } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';
import Backdrop from './components/Backdrop/Backdrop';

import 'react-animated-slider/build/horizontal.css';
import ContentSlider from './components/SlideContent/SlideContent';

// import ProgessBar from './components/ProgressBar/ProgressBar';
import ProgBar from './components/Prog/Prog';

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
                
                {/* <main style={{marginTop: '88px'}}>   */}
                
                {/* <p>This is the page content</p> */}
                
                <ContentSlider />
                {/* <ProgessBar /> */}
                <Fragment>
                    <button onClick={() => this.setState({ percentage: this.state.percentage + 10 })} >Increase</button>
                    {/* moet uiteindelijk de 'start' knop worden */}
                    <button onClick={() => this.setState({ percentage: this.state.percentage - 10 })} >Decrease</button>
                    {/* moet uiteindelijk de 'reset' knop worden */}
                    <ProgBar percentage={this.state.percentage} />
                </Fragment>
                

                {/* </main> */}

            </div>
            
            
        )
    };

    
}

export default App;