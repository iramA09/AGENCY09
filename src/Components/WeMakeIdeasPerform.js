import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GoNorthStar } from "react-icons/go";


const WeMakeIdeasPerform = () => {
return (
    <>
    <section className='hContTech'>
        <div className='hContTechPin'></div>
        <div className='hContTechColorBox'></div>

          <div className='hContTechFix'>
          <div className='container'>

          <div className='hContTechRow'>
              <div className='hContTechCol hContTechColText'>
                <h3 className='sizeH1 uppercase'>We make <span className='underline'>ideas<hr/></span> perform</h3>
                <p>We are an independent agency combining <br/> <b><i>content & tech</i></b> to implement growth strategies with results.</p>
                <Link className='btnDark ripple-button' to="/solutions/tech" ><span>Know MOre</span></Link>
              </div>              
          </div>
        </div>
        <div className='hContTechBackground'></div>          
        </div>
        </section>   
    </>
  )
}

export default WeMakeIdeasPerform
  