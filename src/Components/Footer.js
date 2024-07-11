import {useRef, useEffect} from 'react'
import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom'
import { IoMdArrowForward, IoMdHeart } from "react-icons/io"
import { BsClockFill } from "react-icons/bs";
import SVGCurveLine from '../Hooks/SVGCurveLine'; 
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// Images
import gaming from '../Assets/Images/icons/gaming.png'
import AGENCY09W from '../Assets/Images/agency-light.png'
import a09storeW from '../Assets/Images/logos/a09storeW.png'
import AZ9w from '../Assets/Images/logos/academy-zero-nineW.png'
import Instaw from '../Assets/Images/logos/insta-holidaysW.png'
import OOw from '../Assets/Images/logos/octrine-organicsW.png'
import PKAw from '../Assets/Images/logos/pk_aW.png'
import LO9IX from '../Assets/Images/logos/l09ix_w.png'
import GetQuote from '../Components/Forms/GetQuote';
import ApplyNow from '../Components/Forms/ApplyNow'


// Images


const Footer = () => {
  const [OpenModalGetQuote, setOpenModalGetQuote] = React.useState(false);
  const [OpenModalApplyNow, setOpenModalApplyNow] = React.useState(false);


  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: "footer",
        start: "top 150%",
        end: "bottom 50%",
        scrub: 0.25,
        onUpdate: e => direction = e.direction * -1,
      },
      x: "-=200px",
    })
        // Kill all ScrollTriggers
        return () => {
          ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill();
          });
        };
        // Kill all ScrollTriggers End
    
  }, [])

  const animation = () => {
    if(xPercent <= -100) {
      xPercent = 0;
    }
    if(xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  }
  
  return (
    <>

 
  <div className="marquee">
    <div className='slideContainer'>
      <div className='slider' ref={slider}>
      <p ref={firstText}>WE CREATE <i className='green'>BRAND</i> EXPERIENCES <span>THAT PEOPLE LOVE</span> <IoMdHeart className='pink'/> WE CREATE <i className='green'>BRAND</i> EXPERIENCES <span>THAT PEOPLE LOVE</span> <IoMdHeart className='yellow'/></p>
      <p ref={secondText}> WE CREATE <i className='green'>BRAND</i> EXPERIENCES <span>THAT PEOPLE LOVE</span> <IoMdHeart className='pink'/> WE CREATE <i className='green'>BRAND</i> EXPERIENCES <span>THAT PEOPLE LOVE</span> <IoMdHeart className='yellow'/> </p>
      </div>
    </div>
  </div>

  <footer>
 

    <div className='footerWrap1'><div className='container'><div className='footerRow'>

      <div className='footerCol'>
        <h3 className='fHd'>Quick Links</h3>
        <ul>
          <li><Link to='/work/our-clients'>Clients</Link></li>
          <li><Link to='/careers#Opportunities'>Vacancies</Link></li>
          <li><Link to='/connect'>Connect</Link></li>
          <li><Link to='https://www.agency09.co/simplifyingtheweb/' target='_blank'>Simplifying The Web</Link></li>
          <li><Link to='https://www.a09store.com/' target='_blank'>A09 Store</Link></li>
        </ul>
      </div>

      <div className='footerCol footerColSos'>
        <h3 className='fHd'>We are available here</h3>
        <ul>
        <li><Link to='https://www.linkedin.com/company/agency09/' target='_blank'> LinkedIn</Link></li>
        <li><Link to='https://www.instagram.com/agency09/' target='_blank'> Instagram</Link></li>
        <li><Link to='https://www.youtube.com/channel/UCT7wE543Vl0LSrpCmpMzZrg' target='_blank'> YouTube</Link></li>
        <li><Link to='https://twitter.com/AGENCY09' target='_blank'> X</Link></li>
        <li><Link to='https://www.facebook.com/agency09/' target='_blank'> Facebook</Link></li>

        </ul>
      </div>

      <div className='footerCol'>
        <h3 className='fHd'>Play Music</h3>
        <div className='Spotify'>
          <iframe src="https://open.spotify.com/embed/playlist/5EEeVOhLD3WyqS7o1xn1sC?utm_source=generator&theme=0" width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>

    </div></div></div>


    <div className='footerWrap2'><div className='container'><div className='footerRow'>
    <div className='strokeW'>
      <SVGCurveLine/>
    </div>

      <ul>
      <li><Link to='/connect#form'>REQUEST A SERVICE</Link></li>
      <li><Link onClick={() => { setOpenModalApplyNow(true); }} >JOIN THE TEAM</Link></li>
      <li><Link to='/connect#form'>PARTNER WITH US</Link></li>
      </ul>
      <div className='strokeW'>
        <SVGCurveLine/>
      </div>

    </div></div></div>



    <div className='footerWrap3'><div className='container'><div className='footerRow'>
      <ul>
        <li>
          <div className='clock'><BsClockFill/></div>
          <div className='text'>
            <h4>Office - <b>Dubai</b></h4>
            <p>Media City, Dubai</p>
          </div>
      </li>
      <li>
          <div className='clock'><BsClockFill/></div>
          <div className='text'>
          <h4>Head Office - <b>Mumbai</b></h4>
          <p>101, Meghdoot, Junction of Linking & Turner Rd.,<br/> Above Bank of Baroda Bank, Opp HP Petrol Pump,<br/> Bandra West, Mumbai - 400 050</p>
          <Link to='https://maps.google.com/maps?ll=19.059619,72.836396&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=718129958178962330' target='_blank'>View Map</Link>  
          </div>
      </li>        
      <li>
          <div className='clock'><BsClockFill/></div>
          <div className='text'>
            <h4>Office - <b>Australia</b></h4>
            <p>North Adelaide, Adelaide 5006</p>
          </div>
      </li>


      </ul>
    </div></div></div>

    <div className='footerWrap4'><div className='container'>
    <div className='strokeW'>
        <SVGCurveLine/>
    </div>
    <div className='footerRow'>
      <div className='fLogo09'>
        <Link to='/'>
          <img src={AGENCY09W} alt={AGENCY09W} />
        </Link>
      </div>
    </div>
    
    <div className='strokeW'>
        <SVGCurveLine/>
    </div>
    </div></div>


    <div className='footerWrap5'><div className='container'>
    <div className='footerRow'>
      <h5>Our Ecosystem</h5>
      <ul>
        <li><Link to='https://www.a09store.com/' target='_blank'><img src={a09storeW} alt={a09storeW} /></Link></li>
        <li><Link to='https://www.instaholidays.in/' target='_blank'><img src={Instaw} alt={Instaw} /></Link></li>
        <li><Link to='https://www.academy09.com/' target='_blank'><img src={AZ9w} alt={AZ9w} /></Link></li>
        <li><Link to='#' target='_blank'><img src={LO9IX} alt={LO9IX} /></Link></li>
        <li><Link to='https://www.pk-a.in/' target='_blank'><img src={PKAw} alt={PKAw} /></Link></li>
        <li><Link to='https://www.octarineorganics.com/' target='_blank'><img src={OOw} alt={OOw} /></Link></li>
      </ul>
    </div>

    <div className='strokeW'>
        <SVGCurveLine/>
    </div>
    </div></div>

    <div className='footerWrap6'><div className='container'>
    <div className='footerRow'>

      <div className='footerCol'>
        <p>©AGENCY<b>09</b>.  All Rights Reserved 2024</p>
      </div>

      <div className='footerCol'>
        <ul>
          {/* <li><Link to='/sitemap'>Sitemap</Link></li> */}
          <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
          {/* <li><Link to='/'>Terms of Service</Link></li> */}
        </ul>
      </div>

    </div>
    </div></div>


  </footer>
  {OpenModalGetQuote && <GetQuote closeModal={setOpenModalGetQuote} />}
  {OpenModalApplyNow && <ApplyNow closeModal={setOpenModalApplyNow} />}


    </>
  )
}

export default Footer
