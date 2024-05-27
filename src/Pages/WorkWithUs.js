import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import Transitions from '../Hooks/Transitions';
import useLenisScroll from '../Hooks/useLenisScroll';
import WorkWithUsForm from '../Components/Forms/WorkWithUsForm';



import { PiArrowCircleRightThin } from "react-icons/pi";

const WorkWithUs = () => {
    useLenisScroll();
  return (
    <>
    <Header />
    <Transitions>
    <div className="spacer"></div>

    <section><div className='container'>
    <div className='aboutS'>  
    <div className='aboutScol'>
    <h1 className='sizeH1 uppercase'>Work With Us </h1>  
    <div className='arrowRightH'><PiArrowCircleRightThin /></div>
    </div>      
    <div className='aboutScol'>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
    </div> 
    </div> 
    </div></section>
    
    
    <section className='navItmesWrap'>
      <div className='container'>
      <div className='navItmes'>
        <ul>
        <li><span>Brand</span></li>
          <li><span>Influencer</span></li>
          <li><span>Media House</span></li>
          <li><span>Artist</span></li>
          <li><span>Service Provider</span></li>
          <li><span>Ui/UX Design</span></li>
          <li><span>Web Development</span></li>
          <li><span>Illustration</span></li>
        </ul>
      </div>  
      </div>
    </section>
    
    <section className='servicesFormWrap'>
      <div className='container'>
        <WorkWithUsForm />
      </div>
    </section>




    <Services className='withB' />
    
    
    <section className='testimonials greenB'>
      <div className='container'>
        <h1 className='sizeH1 uppercase center'>Testimonials</h1>
      </div>
    </section>
    </Transitions>

    <Footer />
      
    </>
  )
}

export default WorkWithUs
