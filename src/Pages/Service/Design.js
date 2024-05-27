import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Services from '../../Components/Services';
import ServicesList from '../../Components/ServicesList';

import Items from '../../Components/WhatsNew'; 
import ServicesForm from '../../Components/Forms/ServicesForm';
import useLenisScroll from '../../Hooks/useLenisScroll';
import Accordion from 'react-bootstrap/Accordion';
import { PiArrowCircleRightThin } from "react-icons/pi";
import Transitions from '../../Hooks/Transitions';
import RippleButton from '../../Hooks/RippleButton';
import SVGCurveLine from '../../Hooks/SVGCurveLine'; 

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs End

// Images
import media from '../../Assets/Images/media.jpg';
// Images end



const Design = () => {
  useLenisScroll();

  return (
    <>
      <Header />


      <div className="spacer"></div>

      <section>
        <div className='container'>
          <div className='aboutS'>  
            <div className='aboutScol'>
              <h1 className='sizeH1 uppercase'>Design</h1>  
            </div>      
            <div className='aboutScol'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>• Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>• Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>• Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>• Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>• Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
                  <Accordion.Body>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                  </Accordion.Body>
                </Accordion.Item>
             </Accordion>
            </div> 
          </div>
        </div>
    </section>


    <section className='serviceTab'>
      <div className='container'>
      <Tabs>
            <TabList>
              <Tab><span>Automobile</span></Tab>
              <Tab><span>Finance</span></Tab>
              <Tab><span>Fashion</span></Tab>
              <Tab><span>Food</span></Tab>
              <Tab><span>Health</span></Tab>
              <Tab><span>Real Estate</span></Tab>
              <Tab><span>Travel & Tourism</span></Tab>
              <Tab><span>Sports</span></Tab>
              <Tab><span>Insurance</span></Tab>
              <Tab><span>Media</span></Tab>
            </TabList>

            <TabPanel>
              <ul className='imgGridList'>
              <li>
                    <Link to="/">
                      <div className='imgGrid'>
                        <img src={media} alt=""/>
                      </div>
                      <div className='imgGridText'>
                        <h3>Lorem Ipsum is simply dummy text</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='imgGridOverlay'><PiArrowCircleRightThin /></div>
                      </div>  
                    </Link>
                </li>
                <li>
                    <Link to="/">
                      <div className='imgGrid'>
                        <img src={media} alt=""/>
                      </div>
                      <div className='imgGridText'>
                        <h3>Lorem Ipsum is simply dummy text</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='imgGridOverlay'><PiArrowCircleRightThin /></div>
                      </div>  
                    </Link>
                </li>
                <li>
                    <Link to="/">
                      <div className='imgGrid'>
                        <img src={media} alt=""/>
                      </div>
                      <div className='imgGridText'>
                        <h3>Lorem Ipsum is simply dummy text</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='imgGridOverlay'><PiArrowCircleRightThin /></div>
                      </div>  
                    </Link>
                </li>                
                          
              </ul>

              <div className='btnSpaceEx center'>     
                <RippleButton to="/work" className="btnDark fontL"><span>See More Work</span></RippleButton>
              </div>



            </TabPanel>

            <TabPanel>
              <h2>Strategy 2</h2>
            </TabPanel>

      </Tabs>      




      </div>
    </section>
    


    <Items />

    <section><div className='container'>
    <div className='accordion'>
              <h3 className='sizeH4 bold'>FAQs</h3>
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
    </div>
    </div></section>


    <Services />

    <section className='servicesFormWrap'>
      <div className='container'>
        <ServicesForm />
      </div>
    </section>


   <section className='pb-0'><div className='container'>
    <div className='strokeB'>
      <SVGCurveLine />
    </div>
    </div>
    </section> 

    <ServicesList />


      <Footer />
    </>
  );
};

export default Design
