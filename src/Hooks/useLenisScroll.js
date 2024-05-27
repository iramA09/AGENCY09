// useLenisScroll.js
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy();
    };
  }, []); 
};
export default useLenisScroll;
