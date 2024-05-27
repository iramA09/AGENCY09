import React, { useEffect, useRef, useState } from 'react';
import Transitions from '../Hooks/Transitions';
import RippleButton from '../Hooks/RippleButton';

const Error = () => { 
  return (
    <div className='error'>
      <div className='errorCol'>
          <h1>404</h1>
          <p> Page Not Found</p>
          <div className='btnSpaceEx center'>     
            <RippleButton to="/" className="btnDark fontL"><span>Back to home page</span></RippleButton>
          </div>
      </div>
    </div>
  );
}
export default Error;
