import React, { useEffect, useRef } from 'react';
import starY from '../Assets/Images/icons/star.png';
import { IoStarSharp } from "react-icons/io5";
import { SlArrowRightCircle } from "react-icons/sl";
const Services = () => {
  return (
    <>
    <section className='hCreativity staggerRow'><div className='container'>
      <div className='Heading center'>  
        <h2 className='sizeH1 uppercase staggerText'>
          <span>Driving</span> <span>growth,</span><br/>
          <span>with</span> <span>a</span> <span>focus</span> <span><i className="iconF arrowBtn"><SlArrowRightCircle /></i> </span> <span>on</span> <span>positivity,</span> <span><i className="iconF"><IoStarSharp /></i></span> <span>creativity,</span><br/>
          <span>and</span> <b className='underline'><span>doing</span> <span>what's</span> <span>right.</span> <hr/></b>
        </h2>
      </div>
    </div></section>  
    </>
  )
}
export default Services
