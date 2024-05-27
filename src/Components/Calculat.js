import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { PiStarFourFill } from "react-icons/pi";

const Calculat = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable);


    gsap.utils.toArray('.CalculatCol').forEach(col => {
      Draggable.create(col, {
        type: "x,y",
        bounds: ".Calculat",
      });
    });

    // Reset positions of draggable elements when scrolling down
    ScrollTrigger.create({
      trigger: ".Calculat",
      start: "top 20%",
      end: "bottom top",
      onEnter: () => {
        gsap.to(".CalculatCol", { x: 0, y: 0 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);
  
  return (
    <>
      {/* Calculat */}
          <div className='CalculatRow'>
            <div className='CalculatCol CalculatColA bounce'>
              <div className='CalculatColIn'><h4>10+</h4><p>Years <PiStarFourFill /></p></div>
            </div>
            <div className='CalculatCol CalculatColB'>
              <div className='CalculatColIn'><h4>85+</h4><p>Members <PiStarFourFill /></p></div>
            </div>
            <div className='CalculatCol CalculatColC'>
              <div className='CalculatColIn'><h4>450+</h4><p>Pojects <PiStarFourFill /></p></div>
            </div>
            <div className='CalculatCol CalculatColD'>
              <div className='CalculatColIn'><h4>3</h4><p>Countries <PiStarFourFill /></p></div>
            </div>
          </div>
      {/* Calculat End */}
    </>
  );
};

export default Calculat;
