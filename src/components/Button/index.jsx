import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Button(props) {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: 'white' }}>
      <button type={props.type} className={props.className}>
        {props.text}
      </button>
    </Link>
  );
}

export default Button;
