import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Transitions from '../Hooks/Transitions';
import useLenisScroll from '../Hooks/useLenisScroll';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import GetInTouch from '../Components/Forms/GetInTouch';
import StartAProjectForm from '../Components/Forms/StartAProjectForm';
import { PiArrowCircleRightThin } from "react-icons/pi";
import RippleButton from '../Hooks/RippleButton';
import { GoNorthStar } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Accordion from 'react-bootstrap/Accordion';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs End

const Connect = () => {
  useLenisScroll();
  return (
    <>
      <Header />
      <div className="spacer"></div>

      <section><div className='container'>
      <div className='aboutS'>  
      <div className='aboutScol'>
      <h1 className='sizeH1 uppercase'>Connect</h1>  
      <div className='arrowRightH'><PiArrowCircleRightThin /></div>
      </div>      
      <div className='aboutScol'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
      </div> 
      </div> 
      </div></section>
    
      <section className='conatcWrapTab'><div className='container'>
      <Tabs>
            <TabList>
              <Tab><span>Start a Project</span></Tab>
              <Tab><span>Get in Touch</span></Tab>
            </TabList>

            <TabPanel>
              <StartAProjectForm />
            </TabPanel>
            <TabPanel>
              <GetInTouch />
            </TabPanel>
      </Tabs>
      </div></section>


      <section className='greenBox center greenB'>
          <div className='greenBoxFix'>
          <div className='container'>
          <div className='greenBoxRow'>
              <div className='greenBoxCol greenBoxColText'>
                <h3 className='sizeH1 uppercase'>Simplifying <span><i className="iconF"><GoNorthStar /></i> </span><span className='underline'>The Web<hr/></span> </h3>
                <p>Get enlightened by reading our AGENCY09 blog on various topics like marketing,<br/> strategy, tech, design, and much more.</p>
                <RippleButton to="https://www.agency09.co/simplifyingtheweb/" target="_blank" className="btnDark"><span>Visit Blog</span></RippleButton>
              </div>              
          </div>
        </div>
        </div>
        </section>

      <section className='contactAdress blackB'><div className='contactAdressRow'>
      <div className='contactAdressCol'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.09367715296!2d72.83382077520493!3d19.0596184821416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93dcff89f6f%3A0x9f74f6463d2bb9a!2sAGENCY09!5e0!3m2!1sen!2sin!4v1716232514330!5m2!1sen!2sin" allowfullscreen="" loading="lazy"  referrerpolicy="no-referrer-when-downgrade"></iframe>  
      </div>
      <div className='contactAdressCol'>
          <div className='contactAdressColInner'>

          <ul>
            <li>
            <div className='textI'>
              <FaLocationDot/>
              <p>Mumbai:<br/>
              101, Meghdoot, Junction of Linking & Turner Rd.,<br/>
              Above Bank of Baroda Bank, Opp HP Petrol Pump<br/>
              Bandra West, Mumbai - 400 050</p>
            </div>
            <p>UAE | Australia</p>
            </li>
            <li>
            <div className='textI'>
              <IoCall />
              <p><Link to='tellto:02226440909' target='_blank'>02226440909</Link></p>
            </div>
            </li>
            <li>
              <p className='yellow'>Write to Us<br/>
              <Link to='mailto:info@agency09.in' target='_blank'>info@agency09.in</Link>
              </p>
            </li>
            <li>
              <p className='yellow'>Finance<br/>
              <Link to='mailto:finance@agency09.in' target='_blank'>finance@agency09.in</Link>
              </p>
            </li>
            <li>
              <p className='yellow'>Culture<br/>
              <Link to='mailto:archita@agency09.in' target='_blank'>archita@agency09.in</Link>
              </p>
            </li>
          </ul>


          </div>
      </div>
      </div></section>


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

export default Connect
