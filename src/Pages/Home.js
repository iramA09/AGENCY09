import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HeroBanner from '../Components/HeroBanner';
import Services from '../Components/Services';
import ServicesList from '../Components/ServicesList';
import LogosSlider from '../Components/LogosSlider';
import Social from '../Components/Social';
import Calculat from '../Components/Calculat';
import Items from '../Components/WhatsNew';
import WeMakeIdeasPerform from '../Components/WeMakeIdeasPerform';
import useLenisScroll from '../Hooks/useLenisScroll';
import animateGsap from '../Components/Animation/HomeGsap'; 
import { IoStarSharp } from "react-icons/io5";
import { SlArrowRightCircle } from "react-icons/sl";
import SVGCurveLine from '../Hooks/SVGCurveLine'; 
// Images
import BARC from '../Assets/Images/work/BARC.jpg';
import Laffaire from '../Assets/Images/work/Laffaire.jpg';
import TataMotors from '../Assets/Images/work/TataMotors.jpg';
import TribeVibe from '../Assets/Images/work/TribeVibe.jpg';
// Images end

// Array of work items
export const workItems = [
  {
    id: 1,
    title: '5 Tailored Websites for Tata Motors CV',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: TataMotors,
    link: '/work/case-studys/tata-trucks',
    brand: 'Tata Motors CV',
    department: 'Tech'
  },
  {
    id: 2,
    title: 'Crafting a unique IP for Godrej Laffaire',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: Laffaire,
    link: '/work/case-studys',
    brand: 'Godrej Laffaire',
    department: 'Tech'
  },
  {
    id: 3,
    title: 'Award-Winning Annual Report for BARC India',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: BARC,
    link: '/work/case-studys',
    brand: 'BARC India',
    department: 'Tech'
  },
  {
    id: 4,
    title: 'Tech based Campaign Ambassador Program for Tribevibe',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: TribeVibe,
    link: '/work/case-studys',
    brand: 'TribeVibe',
    department: 'Tech'
  },
  
  // {
  //   id: 5,
  //   title: 'Elevated Employer Branding Content for Aditya Birla Capital',
  //   tags: [
  //     { name: 'Brand Strategy', link: '/' },
  //     { name: 'Print AD', link: '/' },
  //     { name: 'Digital', link: '/' }
  //   ],
  //   image: ABC,
  //   link: '/',
  //   brand: 'Aditya Birla Capital',
  //   department: 'Tech'
  // },
  
];

const Home = () => {
  useLenisScroll();

  useEffect(() => {
    const cleanup = animateGsap();
    return cleanup;
  }, []);



  return (
    <>
      <Header />

      {/* Hero */}
        <HeroBanner/>
      {/* Hero */}
        

    {/* Our Work */}
    <section className='ourWorkHm ourWork'>
      <div className='container'>
        <div className='Heading center'>  
          
        <h2 className='sizeH1 uppercase workTitle'><span>We</span> <span>grow</span> <span>brands</span> <span><i className="iconF arrowBtn"><SlArrowRightCircle /></i></span> <br/> <span><i className="iconF"><IoStarSharp /></i></span> <span>with</span>  <span className='underline'>ideas <hr/></span> <span>for</span> <span>content,</span> <span>technology, </span>
       <span>design & data.</span><span><i className="iconF"><IoStarSharp /></i></span></h2>
          <div className='btnSpaceEx'>     
            <div className="btnDark ripple-button titalBtn"><span>Our Work</span></div>
          </div>
        </div>


        <div className='workGrid'>
            {workItems.map((item) => (
              <div className='workGridItem' key={item.id}>
                <div className='workGridItemLink'>
                  <Link to={item.link} className='workGridItemLink'>
                    <div className='cursor09'></div>
                    <div className='workGridItemImg'>
                      <img src={item.image} alt={item.title}/>
                      <div className='workGridItemHover'>
                          <div className='workGridItemHoverIn'>
                              <h3>{item.title}</h3>
                              <h4>{item.brand}</h4>
                              <p>{item.department}</p>
                          </div>
                      </div>
                    </div>
                    <div className='workGridItemText'>
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                  <div className='workGridItemTags'>
                    {item.tags.map((tag, index) => (
                      <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='btnSpaceEx center'>     
            <Link to="/work/case-studies" className="btnDark fontL ripple-button"><span>See More Work</span></Link>
          </div>

      </div>
    </section>
    {/* Our Work */}

    {/* content & tech */}
      <WeMakeIdeasPerform />
    {/* content & tech */}


    {/* Updates */}
        <Items />                   
    {/* Updates */}

    {/* Services */}
    <Services />         
    {/* Services */}

    {/* ServicesList */}
        <ServicesList />         
    {/* ServicesList */}

    

    {/* Work Logos */}
    <div className='strokeB container'>
          <SVGCurveLine/>
    </div>
       <LogosSlider />
    <div className='strokeB container'>
          <SVGCurveLine/>
    </div>
    {/* Work Logos End */}


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


    {/* Social */}
      <Social />                  
    {/* Social End */}
      
      
      <Footer />
    </>
  )
}

export default Home

