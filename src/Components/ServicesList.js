import React, { useEffect, useRef } from 'react';
import RippleButton from '../Hooks/RippleButton';
import { PiArrowCircleRightThin } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";

const ServicesList = () => {
  return (
    <>

      <section className='ServicesList'>
        <div className='container'>

          <ul>
            <li><div>
              <RippleButton to="/" className="btnDark fontL">
                <span>Tech</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </RippleButton>
            </div></li>
            <li className='IStart'><IoStarSharp /></li>
            <li><div>
              <RippleButton to="/" className="btnDark fontL">
                <span>Design</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </RippleButton>
            </div></li>
            <li><div>
              <RippleButton to="/" className="btnDark fontL">
                <span>content</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </RippleButton>
            </div></li>
            <li><div>
              <RippleButton to="/" className="btnDark fontL">
                <span>Media</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </RippleButton>
            </div></li>
            <li><div>
              <RippleButton to="/" className="btnDark fontL">
                <span>Production</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </RippleButton>
            </div></li>
            <li><div>
              <RippleButton to="/" className="btnDark fontL">
                <span>Logix</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </RippleButton>
            </div></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ServicesList
