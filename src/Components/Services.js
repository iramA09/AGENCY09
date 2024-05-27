import React, { useEffect, useRef } from 'react';
import starY from '../Assets/Images/icons/star.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoStarSharp } from "react-icons/io5";
import { SlArrowRightCircle } from "react-icons/sl";
const Services = () => {

  useEffect(() => {  

  gsap.registerPlugin(ScrollTrigger);
      
    // staggerText
    const tlSg = gsap.timeline({
      scrollTrigger: {
        trigger: ".staggerRow",
        toggleActions: "restart none none none",
        start: "top 90%",
        end: "+=50%",
        scrub: true,
        duration: 3,
      }
    });
    tlSg.to(".staggerText span", 0.4, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
    }, 0.5) ; 
    // staggerText End

    // staggerText
    const tlSg2 = gsap.timeline({
      duration: 0.1,
    scrollTrigger: {
    trigger: ".staggerRow",
    toggleActions: "restart none none none",
    start: "top 90%",
    end: "+=70%",
    scrub: true,
    duration: 1,
    }
    });
    tlSg2.to(".hCreativity .react-tabs", 0.4, {
    opacity: 1,
    top: 0,
    }, 0.5); 
    // staggerText End
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <>
  <section className='hCreativity staggerRow'><div className='container'>
    <div className='Heading center'>  
      <h2 className='sizeH1 uppercase staggerText'>
        <span>Driving</span> <span>growth,</span><br/>
        <span>with</span> <span>a</span> <span>focus</span> <span><i className="iconF arrowBtn"><SlArrowRightCircle /></i> </span> <span>on</span> <span>positivity,</span> <span><i className="iconF"><IoStarSharp /></i></span> <span>creativity,</span><br/>
        <span>and</span> <b className='underline'><span>doing</span> <span>what's</span> <span>right.</span> <hr/></b>
      </h2>
    </div>
 </div></section>  

    </>
  )
}
export default Services
