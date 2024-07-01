import React, { useEffect, useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Milestones from '../Components/Milestones';
import Awards from '../Components/Awards';
import PartnerCompanies from '../Components/PartnerCompanies';
import WeMakeIdeasPerform from '../Components/WeMakeIdeasPerform';

import ServicesList from '../Components/ServicesList';
import A09TeamList from '../Components/A09TeamList';
import SVGCurveLine from '../Hooks/SVGCurveLine'; 
import Calculat from '../Components/Calculat';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLenisScroll from '../Hooks/useLenisScroll';

import { IoStarSharp } from "react-icons/io5";
import { SlArrowRightCircle } from "react-icons/sl";
// Images
import ourpurpose from '../Assets/Images/our-purpose.jpg';
// Images end

const About = () => {
  useLenisScroll();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kill all ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
    // Kill all ScrollTriggers End
  }, []);



  return (
  <>
    <Header />

    <div className="spacer"></div>

 
    <section className='aboutInfo center aboutInfoS1'><div className='container'>
    <div className='aboutInfoRow'>
      <h1 className='sizeH5 uppercase bold bottomS'>About Us</h1>
 
        <h2 className='sizeH1 uppercase workTitle'><span>We</span> <span>grow</span> <span>brands</span> <span><i className="iconF arrowBtn"><SlArrowRightCircle /></i></span> <br/> <span><i className="iconF"><IoStarSharp /></i></span> <span>with</span>  <span className='underline'>ideas <hr/></span> <span>for</span> <span>content,</span> <span>technology, </span>
       <span>design & data.</span><span><i className="iconF"><IoStarSharp /></i></span></h2>
        
           </div>      
    </div></section>

    {/* Calculat */}
    <section className='Calculat'>
        <div className='container'>
           <Calculat /> 
        </div>
    </section>
    {/* Calculat End */}

  

    
    {/* content & tech */}
    <section className='hContTech'>
        <div className='hContTechPin'></div>
        <div className='hContTechColorBox'></div>

          <div className='hContTechFix'>
          <div className='container'>

          <div className='hContTechRow'>
              <div className='hContTechCol hContTechColText'>
                <h3 className='sizeH1 uppercase'>We make <span className='underline'>ideas<hr/></span> perform</h3>
                <p>We are an independent agency combining <br/> <b><i>content & tech</i></b> to implement growth strategies with results.</p>
              </div>              
          </div>
        </div>
        <div className='hContTechBackground'></div>          
        </div>
      </section>     {/* content & tech */}



    {/* ServicesList */}
    <div className='ServicesListA' >
      <ServicesList />         
    </div>
    {/* ServicesList */}

    

    <div className='strokeB container'>
      <SVGCurveLine/>
    </div>


    <section>
      <div className='container'>
        <img src={ourpurpose} alt='our purpose' />
      </div>
    </section>

    <section className='milestone09'>
      <div className='container'>
           <Milestones />
      </div>
    </section>
 
    {/* 
    <section>
      <A09TeamList/>
    </section> 
    */}

    <div div className='strokeB container'>
      <SVGCurveLine/>
    </div>
    
    <section className='awards09'>
      <div className='container'>
        <Awards />
      </div>
    </section>



    <section className='pillars09 center'><div className='container'>
      <PartnerCompanies />
    </div></section>


    <Footer />
  </>
  )
}

export default About
