import React, { useEffect, useRef } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLenisScroll from '../../Hooks/useLenisScroll';

// Images
import blog from '../../Assets/Images/blogTestImg.jpg';
import media from '../../Assets/Images/media.jpg';

// Images end

const BlogDetail = () => {
  useLenisScroll();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kill all ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
    // Kill all ScrollTriggers End
  }, []);



  return (
  <>
    <Header />

    <div className="spacer"></div>

    
    {/* content & tech */}
    <section className=''>
       <div className='blogbnr'><img src={blog} alt=""/></div>
      
      </section>     {/* content & tech */}


<section className='blogDetailMain'><div className='container'>

<div class="Heading HeadingIcon"><h2 class="sizeH1 uppercase">Blog Detail</h2></div>
  <div className='blogContent pb-30'>
    <p>In the dynamic landscape of digital marketing, AGENCY09 firmly believes in the transformative power of data. Welcome to our comprehensive guide on business analytics, an indispensable tool for businesses striving to make informed decisions and maintain a competitive edge. Whether you’re a seasoned entrepreneur or just entering the world of analytics, this guide is crafted to assist you in unlocking the full potential of business analytics.</p>
  </div>
  <div className='blogContent pb-30'>
    <p>In the dynamic landscape of digital marketing, AGENCY09 firmly believes in the transformative power of data. Welcome to our comprehensive guide on business analytics, an indispensable tool for businesses striving to make informed decisions and maintain a competitive edge. Whether you’re a seasoned entrepreneur or just entering the world of analytics, this guide is crafted to assist you in unlocking the full potential of business analytics.</p>
  </div>
  <div className='blogContent pb-30'>
    <p>In the dynamic landscape of digital marketing, AGENCY09 firmly believes in the transformative power of data. Welcome to our comprehensive guide on business analytics, an indispensable tool for businesses striving to make informed decisions and maintain a competitive edge. Whether you’re a seasoned entrepreneur or just entering the world of analytics, this guide is crafted to assist you in unlocking the full potential of business analytics.</p>
  </div>
  <div className='blogContent pb-30'>
    <p>In the dynamic landscape of digital marketing, AGENCY09 firmly believes in the transformative power of data. Welcome to our comprehensive guide on business analytics, an indispensable tool for businesses striving to make informed decisions and maintain a competitive edge. Whether you’re a seasoned entrepreneur or just entering the world of analytics, this guide is crafted to assist you in unlocking the full potential of business analytics.</p>
  </div>
  <div className='blogAuthor pb-30'>
    <div className='blogAuthorImg'><img src={media} alt=""/></div>
    <div className='blogAuthorName'>Author: <b>Yasmeen Alharthi</b></div>
  </div>


  <div className='blogTag'>
  <p><b>Tags: </b></p>
  <ul>
    <li>North</li>
    <li>East</li>
    <li>West</li>
    <li>South</li>
    <li>Africa</li>
    <li>North</li>
  </ul>
  </div>

  
  </div>
</section>

    <Footer />
  </>
  )
}

export default BlogDetail
