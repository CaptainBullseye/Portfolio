import React from 'react';
const {PropTypes} = React;

const icons = {
    'school' : 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z',

};

const Stuff = props => (
    <svg width="22" height="22" viewBox="0 0 1024 1024">
      <path d={icons[props.ding]}></path>
    </svg>
  );
  
  Stuff.propTypes = {
    ding: PropTypes.string,
  };
  
  export default Stuff;