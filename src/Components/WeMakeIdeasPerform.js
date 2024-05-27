import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RippleButton from '../Hooks/RippleButton';
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
                <h3 className='sizeH1 uppercase'>We make<span><i className="iconF"><GoNorthStar /></i></span><span className='underline'>ideas<hr/></span> perform</h3>
                <p>We are an independent agency combining<br/> <b><i>content & tech</i></b>  to implement growth strategies.</p>
                <RippleButton to="/work" className="btnDark"><span>Know MOre</span></RippleButton>
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
