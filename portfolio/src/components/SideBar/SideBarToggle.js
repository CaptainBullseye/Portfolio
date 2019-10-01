import React from 'react';
import './SideBarToggleStyle.css';

const sidebarToggle = props => (
    <button className="toggle-button">
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
        <div className="toggle_button_line" />
    </button>
);

export default sidebarToggle;