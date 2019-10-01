import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideBar from './components/SideBar/SideBar';

class App extends Component {
    render() {
        return(
            <div style={{height: '100%'}}>
                <Toolbar />
                <SideBar />
                <main style={{marginTop: '64px'}}>
                <p>This is the page content</p>
                </main>
            </div>
        )
    }
}

export default App;