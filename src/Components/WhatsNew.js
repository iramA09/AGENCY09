import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { PiArrowCircleRightThin } from "react-icons/pi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Images
import ideasPerform from '../Assets/Images/growth/mediaA09.webp';
import ideasPerform1 from '../Assets/Images/growth/ideas-perform1.webp';
import sportday from '../Assets/Images/growth/sportday.webp';
import ideasPerform2 from '../Assets/Images/growth/ideas-perform2.webp';
import rgiimage from '../Assets/Images/growth/rgi.webp';
import starY from '../Assets/Images/icons/star.webp';


// Images
const WhatsNew = () => {
  
// GSPA
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const tlhUpdates = gsap.timeline({
    duration: 0.1,
    scrollTrigger: {
      trigger: ".hUpdates",
      toggleActions: "restart none none none",
      start: "top 70%",
      end: "+=30%",
      scrub: true,

    },
  });
  tlhUpdates.to(".hUpdates .item", { left: '0', opacity:1, stagger: 0.3});

  return () => {
    ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
    });
    };
}, []);


   // Update
   const UpdateSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,


      }
    }
  ]};

  // Data 
  const UpdateData = [
    {
      link: '/',
      image: ideasPerform,
      title: 'AGENCY09 Celebrates a decade of Simplifying the Web',
      description: "Unlocking Digital Potential Since 20XX",
    },
    {
      link: '/',
      image: ideasPerform1,
      title: 'Tata Motors enlists A09 for their Smart City Project website',
      description: "AGENCY09 Powers Tata Motors' Smart City Initiative Online",
    },
    {
      link: '/',
      image: sportday,
      title: 'Bat, Ball & Balle Balle',
      description: "Sports Day at AGENCY09",
    },
    {
      link: 'https://www.agency09.in/simplifyingtheweb/design/the-journey-of-rhealthbeat-magazine-a-testament-to-innovative-design/',
      image: rgiimage,
      title: 'The Journey of RHealthBeat Magazine, a Testament to Innovative Design',
      description: "Designing Stories, Crafting Impact",
    },
  ];
  // Update end
  return (
    <>
    {/* Updates */}
    <section className='hUpdates'><div className='container'>

    <div className='Heading center HeadingIcon'>
      <h2 className='sizeH1 uppercase'>
        <span className='iconSVG'><i className="iconF"><img src={starY} alt="Star Icon" /></i></span>
        What's New
        <span className='iconSVG'><i className="iconF"><img src={starY} alt="Star Icon" /></i></span>
      </h2>
    </div>

    <Slider {...UpdateSlider} className="UpdateSlider-slick slick-slider">
    {UpdateData.map((item, index) => (
      <div className='item' key={index}>
        <Link to={item.link} target='_blank'>
          <img src={item.image} alt={item.title} loading="lazy" />
          <h2>{item.title}</h2>
          {/* <p>{item.description}</p> */}
          {/* <hr/>
          <div className='btnItem'>Know More <PiArrowCircleRightThin /></div> */}
        </Link>
      </div>
    ))}
    </Slider>
    </div></section>                      
    {/* Updates */} 
</>
  )
}

export default WhatsNew
