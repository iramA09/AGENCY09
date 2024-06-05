import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowCircleRightThin } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";

const ServicesList = () => {
  return (
    <>

      <section className='ServicesList'>
        <div className='container'>

          <ul>
            <li><div>
              <Link to="/solutions/tech" className="btnDark fontL ripple-button">
                <span>Tech</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </Link>
            </div></li>
            <li className='IStart'><IoStarSharp /></li>
            <li><div>
              <Link to="/solutions/design" className="btnDark fontL ripple-button">
                <span>Design</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </Link>
            </div></li>
            <li><div>
              <Link to="/solutions/content" className="btnDark fontL ripple-button">
                <span>content</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </Link>
            </div></li>
            <li><div>
              <Link to="/solutions/media" className="btnDark fontL ripple-button">
                <span>Media</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </Link>
            </div></li>
            <li><div>
              <Link to="/solutions/production" className="btnDark fontL ripple-button">
                <span>Production</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </Link>
            </div></li>
            <li><div>
              <Link to="/solutions/keyword" className="btnDark fontL ripple-button">
                <span>Keyword</span>
                <span className='btnArrow'><PiArrowCircleRightThin /></span>
              </Link>
            </div></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ServicesList
