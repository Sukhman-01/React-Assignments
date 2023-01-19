import React from 'react';
import "./welcome.css";

function Welcome(props) {
  return (
    <div className='welcomeMessage'>
          <h1>Hi {props.name}!</h1>
          <h2>Welcome to College.</h2>
          <img src="https://media.tenor.com/mugZdxy-l5EAAAAM/welcome-gif.gif" alt='' />
    </div>
  )
}

export default Welcome
