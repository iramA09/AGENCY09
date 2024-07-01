import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { GoNorthStar } from "react-icons/go";
import { PiStarFourFill } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";
import WorkingWithUs from '../Components/WorkingWithUs';
import LifeAtA09 from '../Components/LifeAtA09';
import Opportunities from '../Components/Opportunities';
import Accordion from 'react-bootstrap/Accordion';
import useLenisScroll from '../Hooks/useLenisScroll';

const Careers = () => {
  useLenisScroll();
  const location = useLocation();

    useEffect(() => {
        if (location.hash === "#Opportunities") {
            const element = document.getElementById("Opportunities");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);



// Calculat Data
const calculatData = [
  {
    key: "A",
    number: "85+",
    description: "Creative <br/>Minds",
  },
  {
    key: "B",
    number: "15+",
    description: "Industry<br/> Awards",
  },
  {
    key: "C",
    number: "40%",
    description: "Internal <br/>Promotions",
  },
  {
    key: "D",
    number: "120+",
    description: "Training Programs<br/> Annually ",
  }
];
// Calculat Data End


  return (
    <>
      <Header />
      <div className="spacer"></div>
        
      <section><div className='container'>
      <div className='aboutS'>  
      <div className='aboutScol'>
      <h1 className='sizeH1 uppercase'>People First,<br/> Creativity Always</h1>  
      <div className='arrowRightH'><PiArrowCircleRightThin /></div>
      </div>      
      <div className='aboutScol'>
      <p>When you join AGENCY<b>09</b>, you’re not just starting a job – you’re becoming part of a vibrant, supportive ecosystem that values your ideas and helps you grow. We believe in keeping things fun and flexible, balancing hard work with plenty of play. From professional development opportunities to team outings and creative brainstorming sessions, we make sure our environment is as dynamic and engaging as the work we do. </p>
      </div> 
      </div> 
      </div></section>

    {/* Calculat */}
    <section className='Calculat pb-0'>
      <div className='container'>
        <div className='CalculatRow'>
            {calculatData.map(item => (
              <div key={item.key} className={`CalculatCol CalculatCol${item.key}`}>
                <div className='CalculatColIn'>
                  <h4>{item.number}</h4>
                  <p><span  dangerouslySetInnerHTML={{ __html: item.description }}></span> <PiStarFourFill /></p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
    {/* Calculat End */}

    {/* LifeAtA09 */}
    <section className='LifeAtA09' id='LifeAtA09'><div className='container'>
        <div className='Heading center HeadingIcon'>
        <h2 className='sizeH1 uppercase'>
            <span className='iconSVG blue'><GoNorthStar /></span>
             Life at 09
            <span className='iconSVG blue'><GoNorthStar /></span>
        </h2>
        </div>
        <LifeAtA09 />
    </div></section>
    {/* LifeAtA09 */}

    
    {/* LifeAtA09 */}
    <section className='checkPlay'><div className='container'>
        <div className='Heading center HeadingIcon pb-30'>
        <Link to='https://www.youtube.com/@agency09official/playlists' target='_blank'  className='sizeH1 uppercase btn'>
             Check out our playlist on YouTube
        </Link>
        </div>
    </div></section>
    {/* LifeAtA09 */}


    
    {/* Opportunities */}
    <section className='Opportunities greenB' id='Opportunities'><div className='container'>
        <div className='Heading center HeadingIcon pb-30'>
        <h2 className='sizeH1 uppercase'>
            <span className='iconSVG white'><GoNorthStar /></span>
                Opportunities
            <span className='iconSVG white'><GoNorthStar /></span>
        </h2>
        </div>
        <Opportunities />
    </div></section>
    {/* Opportunities */}

    {/* WorkingWithUs */}
    <section className='faqContent '><div className='container'>
        <div className='Heading center HeadingIcon pb-30'>
        <h2 className='sizeH1 uppercase'>
            <span className='iconSVG yellow'><GoNorthStar /></span>
             Working with Us 
            <span className='iconSVG yellow'><GoNorthStar /></span>
        </h2>
        <p className='sizeH4'>We are an independent agency combining content & tech to implement  strategies with results.</p>
        </div>
        <WorkingWithUs />
    </div></section>
    {/* WorkingWithUs */}



    
    <section className='faqContent yellowB'><div className='container'>
        <h2 className='sizeH5 uppercase bold pb-20'>FAQS</h2>



        <Accordion>
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
