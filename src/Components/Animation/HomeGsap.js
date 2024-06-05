import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animateGsap = () => {
  gsap.registerPlugin(ScrollTrigger);

  const HeroScaleB = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      toggleActions: "restart pause resume pause",
      start: "bottom 85%",
      end: "+=100%",
      pinSpacing: false,
      scrub: true,
      pin: true,
      duration: 0,
    }
  });
  HeroScaleB.to(".hero", { filter: "blur(12px)",  y: 1,  });

  
  return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
};

export default animateGsap;
