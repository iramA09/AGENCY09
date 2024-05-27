import React, { useEffect, useRef } from 'react';
import { PiStarFourFill } from "react-icons/pi";

const Calculat = () => {

 
  
  return (
    <>
      {/* Calculat */}
          <div className='CalculatRow'>
            <div className='CalculatCol CalculatColA bounce'>
              <div className='CalculatColIn'><h4>10+</h4><p>Years <PiStarFourFill /></p></div>
            </div>
            <div className='CalculatCol CalculatColB'>
              <div className='CalculatColIn'><h4>85+</h4><p>Members <PiStarFourFill /></p></div>
            </div>
            <div className='CalculatCol CalculatColC'>
              <div className='CalculatColIn'><h4>450+</h4><p>Pojects <PiStarFourFill /></p></div>
            </div>
            <div className='CalculatCol CalculatColD'>
              <div className='CalculatColIn'><h4>3</h4><p>Countries <PiStarFourFill /></p></div>
            </div>
          </div>
      {/* Calculat End */}
    </>
  );
};

export default Calculat;
