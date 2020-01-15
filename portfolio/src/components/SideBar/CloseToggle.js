import React from 'react';
import './SideBarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CloseToggle = props => (
    <button className="close" onClick={props.click}>
        <FontAwesomeIcon icon={faTimes} style={{ color: "white", fontSize: "32px", transition: "all .5s ease" }} />
    </button>
);

export default CloseToggle;