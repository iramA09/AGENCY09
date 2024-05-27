import React, { useEffect, useRef } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Milestones from '../Components/Milestones';
import Awards from '../Components/Awards';
import PartnerCompanies from '../Components/PartnerCompanies';
import ServicesList from '../Components/ServicesList';
import SVGCurveLine from '../Hooks/SVGCurveLine'; 
import Calculat from '../Components/Calculat';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLenisScroll from '../Hooks/useLenisScroll';
import RippleButton from '../Hooks/RippleButton';
import Transitions from '../Hooks/Transitions';

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


  // Marquee Data
  const marqueeContent = "<span>Pradnya Satle, Jr. Graphic Designer</span> <span>Aniket Sakpal, Sr. Manager - Strategy</span> <span>Aditya Jadhav, Sr. Art Director</span> <span>Imran Shaikh, Sr. Content Creater</span> <span>Pradnya Satle, Jr. Graphic Designer</span> <span>Aniket Sakpal, Sr. Manager - Strategy</span> <span>Aditya Jadhav, Sr. Art Director</span> <span>Imran Shaikh, Sr. Content Creater</span>"; 
  // Marquee Data End



  return (
  <>
    <Header />

    <div className="spacer"></div>

 
    <section className='aboutInfo center aboutInfoS1'><div className='container'>
    <div className='aboutInfoRow'>
      <h1 className='sizeH5 uppercase bold bottomS'>About Us</h1>
      <h2 className='sizeH1 uppercase'>We Grow brands <br /> With ideasa for content, technology, <br />Design, DATA.</h2>  
    </div>      
    </div></section>

    {/* Calculat */}
    <section className='Calculat'>
        <div className='container'>
           <Calculat /> 
           <div className='strokeB'>
             <SVGCurveLine/>
           </div>         
        </div>
    </section>
    {/* Calculat End */}

    
    <section className='aboutInfo center aboutInfoS2'><div className='container'>
    <div className='aboutInfoRow'>
      <h2 className='sizeH1 uppercase'>We are an independent <br /> agency combining <br />content & tech to implement  <br /> growth strategies.</h2>  
    </div>      
    </div></section>


    {/* ServicesList */}
    <div className='ServicesListA' >
      <ServicesList />         
    </div>
    {/* ServicesList */}

    

    <div className='container'>
    <div className='strokeB'>
      <SVGCurveLine/>
    </div>
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

    <section className='aboutMarquee'>
      <div dangerouslySetInnerHTML={{ __html: `<div>${marqueeContent}</div>` }} />   
      <div dangerouslySetInnerHTML={{ __html: `<div>${marqueeContent}</div>` }} />   
      <div dangerouslySetInnerHTML={{ __html: `<div>${marqueeContent}</div>` }} />      
      <div dangerouslySetInnerHTML={{ __html: `<div>${marqueeContent}</div>` }} />   
      <div dangerouslySetInnerHTML={{ __html: `<div>${marqueeContent}</div>` }} />   
      <div dangerouslySetInnerHTML={{ __html: `<div>${marqueeContent}</div>` }} />      
    </section>


    <section className='awards09'>
      <div className='container'>
        <Awards />
      </div>
    </section>


    <div className='container'>
    <div className='strokeB'>
      <SVGCurveLine/>
    </div>
     </div>


    <section className='pillars09 center'><div className='container'>
      <PartnerCompanies />
    </div></section>


    <Footer />
  </>
  )
}

export default About
