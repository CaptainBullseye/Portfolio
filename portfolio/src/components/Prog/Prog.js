import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tracker = styled.div`
    width: 50%;
    height: 20px;
    margin: 15px auto;
    background: rgb(34,34,34);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`;

const ProgressInTracker = styled.div`
    height: 100%;
    width: ${props => props.percentage}%;
    background: rgb(173, 17, 17);
    border-radius: 8px;
    transition: width 0.3s ease-in-out;
`;

class ProgBar extends Component {

    limit = (min, value, max) => {
        return Math.min(Math.max(min, value), max);
    }

    render() {
        return(
            <Tracker>
                <ProgressInTracker percentage={this.limit(0, this.props.percentage, 100)} />
            </Tracker>

        )
    }
}

ProgBar.propTypes = {
    percentage: PropTypes.number,
};

export default ProgBar