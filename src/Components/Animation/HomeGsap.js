import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animateGsap = () => {
  gsap.registerPlugin(ScrollTrigger);

  const HeroScaleB = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      toggleActions: "restart pause resume pause",
      start: "bottom 75%",
      end: "+=100%",
      pinSpacing: false,
      scrub: true,
      pin: true,
      duration: 0,
    }
  });
  HeroScaleB.to(".hero", { filter: "blur(12px)",  y: 1,  });

  
  const Hero = gsap.timeline({
    duration: 1,
    scrollTrigger: {
      trigger: ".ourWorkHm",
      toggleActions: "restart none none none",
      start: "top 100%",
      end: "+=70%",
      scrub: true,
      duration: 3,
    },
  });
  Hero.to(".ourWorkHm", { background: "#fff", })
    .to(".ourWorkHm", { borderRadius: "100px" });

      const ctB = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: ".ourWorkHm",
          toggleActions: "restart none none none",
          start: "top 10%",
          end: "+=50%",
          scrub: true,
          duration: 3,
        },
      });
      ctB.to(".background", { background: "#fff" });
  
  return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
};

export default animateGsap;
