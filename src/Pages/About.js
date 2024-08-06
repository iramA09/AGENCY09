import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
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
import ourpurpose from '../Assets/Images/our-purpose.webp';
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


    <Helmet>
      <title> About Us | Digital Marketing Agency | Web Development Company -  AGENC09 </title>
      <link rel="canonical" href="https://www.agency09.in/about"/>
      <meta name="robots" content="index, follow"/> 

      <meta name="description" content="AGENCY09 is a digital marketing agency for 10+ years, with 85+ members, which has delivered 450+ projects across 4 continents including the UAE & Australia."/>
      <meta property="og:title" content=" About Us | Digital Marketing Agency | Web Development Company -  AGENC09"/> 
      <meta property="og:description" content="AGENCY09 is a digital marketing agency for 10+ years, with 85+ members, which has delivered 450+ projects across 4 continents including the UAE & Australia."/> 
      <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
      <meta property="og:type" content="website"/> 


      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@AGENCY09"/> 
      <meta name="twitter:creator" content="@AGENCY09"/> 
      <meta name="twitter:url" content="https://www.agency09.in/about"/> 
      <meta name="twitter:description" content=" AGENCY09 is a digital marketing agency for 10+ years, with 85+ members, which has delivered 450+ projects across 4 continents including the UAE & Australia."/> 
      <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 

    </Helmet>



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
{/* 
    <section className='milestone09'>
      <div className='container'>
           <Milestones />
      </div>
    </section> */}
 
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
