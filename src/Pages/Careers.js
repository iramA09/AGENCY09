import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Transitions from '../Hooks/Transitions';
import useLenisScroll from '../Hooks/useLenisScroll';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { GoNorthStar } from "react-icons/go";
import RippleButton from '../Hooks/RippleButton';
import { PiArrowCircleRightThin } from "react-icons/pi";
import Calculat from '../Components/Calculat';
import WorkingWithUs from '../Components/WorkingWithUs';
import LifeAtA09 from '../Components/LifeAtA09';
import Opportunities from '../Components/Opportunities';
import Accordion from 'react-bootstrap/Accordion';

const Careers = () => {
useLenisScroll();

  return (
    <>
      <Header />
      <div className="spacer"></div>
        
      <section><div className='container'>
      <div className='aboutS'>  
      <div className='aboutScol'>
      <h1 className='sizeH1 uppercase'>People First</h1>  
      <div className='arrowRightH'><PiArrowCircleRightThin /></div>
      </div>      
      <div className='aboutScol'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
      </div> 
      </div> 
      </div></section>

    {/* Calculat */}
    <section className='Calculat pb-0'>
        <div className='container'>
           <Calculat /> 
        </div>
    </section>
    {/* Calculat End */}


    {/* WorkingWithUs */}
    <section className='faqContent yellowB'><div className='container'>
        <div className='Heading center HeadingIcon pb-30'>
        <h2 className='sizeH1 uppercase'>
            <span className='iconSVG white'><GoNorthStar /></span>
             Working with Us 
            <span className='iconSVG white'><GoNorthStar /></span>
        </h2>
        </div>
        <WorkingWithUs />
    </div></section>
    {/* WorkingWithUs */}

    {/* LifeAtA09 */}
    <section className='LifeAtA09'><div className='container'>
        <div className='Heading center HeadingIcon pb-30'>
        <h2 className='sizeH1 uppercase'>
            <span className='iconSVG yellow'><GoNorthStar /></span>
             Life at 09
            <span className='iconSVG yellow'><GoNorthStar /></span>
        </h2>
        </div>
        <LifeAtA09 />
    </div></section>
    {/* LifeAtA09 */}

    {/* WorkingWithUs */}
    <section className='Opportunities greenB'><div className='container'>
        <div className='Heading center HeadingIcon pb-30'>
        <h2 className='sizeH1 uppercase'>
            <span className='iconSVG white'><GoNorthStar /></span>
                Opportunities
            <span className='iconSVG white'><GoNorthStar /></span>
        </h2>
        </div>
        <Opportunities />
    </div></section>
    {/* WorkingWithUs */}

    
    <section className='faqContent'><div className='container'>
        <h2 className='sizeH5 uppercase bold pb-20'>FAQS</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>4. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>5. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div></section>

      <Footer />
    </>
  )
}

export default Careers
