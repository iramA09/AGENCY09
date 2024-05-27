import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { PiArrowCircleRightThin } from "react-icons/pi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Images
import ideasPerform from '../Assets/Images/growth/ideas-perform.jpg';
import ideasPerform1 from '../Assets/Images/growth/ideas-perform1.jpg';
import ideasPerform2 from '../Assets/Images/growth/ideas-perform2.jpg';
import ideasPerform3 from '../Assets/Images/growth/ideas-perform3.jpg';
import starY from '../Assets/Images/icons/star.png';
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
      title: 'Lorem Ipsum is simply dummy text',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      link: '/',
      image: ideasPerform1,
      title: 'Lorem Ipsum is simply dummy text',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      link: '/',
      image: ideasPerform2,
      title: 'Lorem Ipsum is simply dummy text',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      link: '/',
      image: ideasPerform3,
      title: 'Lorem Ipsum is simply dummy text',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
        <Link to={item.link}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <hr/>
          <div className='btnItem'>Know More <PiArrowCircleRightThin /></div>
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
