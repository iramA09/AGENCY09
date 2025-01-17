import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Link, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import GetInTouch from '../Components/Forms/GetInTouch';
import StartAProjectForm from '../Components/Forms/StartAProjectForm';
import PartnerWithUs from '../Components/Forms/PartnerWithUs';
import { GoNorthStar } from "react-icons/go";

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs End

const Connect = () => {

  const location = useLocation();

    useEffect(() => {
        if (location.hash === "#form") {
            const element = document.getElementById("form");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

  return (
    <>
      <Helmet>
        <title>Contact AGENCY09 for the Best Advertising Services in India</title>
        <meta name="robots" content="index, follow"/> 

        <meta name="description" content="Connect with AGENCY09, a leading creative advertising agency. Reach out for innovative ways to  digital marketing, branding, and advertising solutions."/>
        <link rel="canonical" href="https://www.agency09.in/connect"/> 
              
        <meta property="og:title" content="Contact AGENCY09 for the Best Advertising Services in India"/> 
        <meta property="og:description" content="Connect with AGENCY09, a leading creative advertising agency. Reach out for innovative ways to  digital marketing, branding, and advertising solutions."/> 
        <meta property="og:image" content="https://www.agency09.in/images/agency09-dark.png"/> 
        <meta property="og:type" content="website"/> 


        <meta name="twitter:card" content="summary"/> 
        <meta name="twitter:site" content="@AGENCY09"/> 
        <meta name="twitter:creator" content="@AGENCY09"/> 
        <meta name="twitter:url" content="https://www.agency09.in/connect"/> 
        <meta name="twitter:description" content="Connect with AGENCY09, a leading creative advertising agency. Reach out for innovative ways to  digital marketing, branding, and advertising solutions."/> 
        <meta name="twitter:image" content="https://www.agency09.in/images/agency09-dark.png"/> 
     </Helmet>

      <Header />
      <div className="spacer"></div>

      <section><div className='container'>
      <div className='aboutS'>  
      <div className='aboutScol'>
      <h1 className='sizeH1 uppercase'>Connect</h1>  
      {/* <div className='arrowRightH'><PiArrowCircleRightThin /></div> */}
      </div>      
      {/* <div className='aboutScol'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
      </div>  */}
      </div> 
      </div></section>
    
    
      <section className='contactAdress blackB'><div className='contactAdressRow'>
      <div className='contactAdressCol'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.09367715296!2d72.83382077520493!3d19.0596184821416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93dcff89f6f%3A0x9f74f6463d2bb9a!2sAGENCY09!5e0!3m2!1sen!2sin!4v1716232514330!5m2!1sen!2sin" allowfullscreen="" loading="lazy"  referrerpolicy="no-referrer-when-downgrade"></iframe>  
      </div>
      <div className='contactAdressCol'>
          <div className='contactAdressColInner'>

          <ul>
            <li>
            <div className='textI'>
              <p><b className='yellow'>Mumbai:</b><br/>
              101, Meghdoot, Junction of Linking & Turner Rd.,<br/>
              Above Bank of Baroda Bank, Opp HP Petrol Pump<br/>
              Bandra West, Mumbai - 400 050</p>
            </div>
            </li>
            <li>
            <div className=''>
               <p><b className='yellow'>Office Tel:</b><br/><Link to='tellto:02226440909' target='_blank'>022 2644 09 09</Link> | <Link to='tellto:9892108119' target='_blank'>989 210 8119</Link></p>
            </div>
            </li>
            <li>
              <p className=''><b className='yellow'>Write to Us:</b><br/>
              <Link to='mailto:info@agency09.in' target='_blank'>info@agency09.in</Link>
              </p>
            </li>
            <li>
              <p className=''><b className='yellow'>Finance:</b><br/>
              <Link to='mailto:finance@agency09.in' target='_blank'>finance@agency09.in</Link>
              </p>
            </li>
            <li>
              <p className=''><b className='yellow'>Culture:</b><br/>
              <Link to='mailto:archita@agency09.in' target='_blank'>archita@agency09.in</Link>
              </p>
            </li>
          </ul>


          </div>
      </div>
      </div></section>



      <section className='conatcWrapTab' id='form'><div className='container'>
      <Tabs>
            <TabList>

              <Tab><span>Start a Project</span></Tab>
              <Tab><span>PARTNER WITH US</span></Tab>
              <Tab><span>Get in Touch</span></Tab>
            </TabList>

            <TabPanel>
              <StartAProjectForm />
            </TabPanel>
            <TabPanel>
              <PartnerWithUs />
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
                <a href="https://www.agency09.in/simplifyingtheweb/" className="btnDark ripple-button"><span>Visit Blog</span></a>
              </div>              
          </div>
        </div>
        </div>
        </section>


{/* 
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
      </div></section> */}


      <Footer />
    </>
    )
}

export default Connect
