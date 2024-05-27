import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import ServicesList from '../Components/ServicesList';
import LogosSlider from '../Components/LogosSlider';
import Social from '../Components/Social';
import { motion } from 'framer-motion'; 
import Calculat from '../Components/Calculat';
import Items from '../Components/WhatsNew';
import WeMakeIdeasPerform from '../Components/WeMakeIdeasPerform';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import useLenisScroll from '../Hooks/useLenisScroll';
import RippleButton from '../Hooks/RippleButton';
import animateGsap from '../Components/Animation/HomeGsap'; 
import Transitions from '../Hooks/Transitions';
import { IoStarSharp } from "react-icons/io5";
import { SlArrowRightCircle } from "react-icons/sl";
import SVGCurveLine from '../Hooks/SVGCurveLine'; 

// Images
import rgiBG from '../Assets/Images/hero/rgi-bg.png';
import rgiLogo from '../Assets/Images/hero/rgi-logo.png';
import ourwork1 from '../Assets/Images/work/ourwork-1.jpg';
import ourwork2 from '../Assets/Images/work/ourwork-2.jpg';
import ourwork3 from '../Assets/Images/work/ourwork-3.jpg';
import ourwork4 from '../Assets/Images/work/ourwork-4.jpg';
// Images end


// Array of work items
export const workItems = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply dummy text of the printing 2',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork1,
    link: '/'
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork2,
    link: '/'
  },
  {
    id: 3,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork3,
    link: '/'
  },
  {
    id: 4,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork4,
    link: '/'
  },
  
  {
    id: 5,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork4,
    link: '/'
  },
];

const Home = () => {
  useLenisScroll();

  useEffect(() => {
    const cleanup = animateGsap();
    return cleanup;
  }, []);


  // Hero
  const homescreenSliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    draggable: true,
    swipe: true,
    touchMove: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; 

  const slideData = [
    { 
      image: rgiBG,
      imageLogo: rgiLogo,
      title: "Reliance<br> General<br> Insurance<br> Products",
      description: 'Lorem Ipsum is simply dummy text of the printing ',
      btnLink: '#',
      className: 'rgiSlider',
    },
    { 
      image: '',
      imageLogo: '',
      title: "Lakme <br/>Fashion <br/>Week",
      description: 'Lorem Ipsum is simply dummy text of the printing ',
      btnLink: '#',
      className: 'lakmeSlider',
    },
  ];
  // Hero End


  

  return (
    <>
      <Header />
        <div className='background'></div>



      {/* Hero */}
        <section className='heroRow'>
        <div className='hero heroHome'>
          <div className='HeroSlider'>
            <Slider {...homescreenSliderSettings} className="homescreen-slick slick-slider">
              {slideData.map((slide, index) => (
                <motion.div 
                  key={index} 
                  className={`item ${slide.className}`} 
                  whileDrag={{ scale: 0.97 }}
                  whileTap={{ scale: 0.97}} 
                >
                  <div className='container'>
                    <div className='HeroImage'>
                      <div className='Herobg'><img src={slide.image} alt={`Slide ${index} - ${slide.image}`} /></div>
                      <div className='HerobgLogo'><img src={slide.imageLogo} alt={`Slide ${index} - ${slide.image}`} /></div>
                      <div className='HeroText'>
                        {slide.title && <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />}
                        {slide.description && <p>{slide.description}</p>}
                        <div className='HeroBtn'>
                          {slide.btnLink && <RippleButton className="btnWhite" to={slide.href}><span>Know More</span></RippleButton>}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
        </section>
      {/* Hero */}
        

    {/* Our Work */}
    <section className='ourWorkHm ourWork'>
      <div className='container'>
        <div className='Heading center'>  
          
        <h2 className='sizeH1 uppercase workTitle'><span>We</span> <span>grow</span> <span>brands</span> <span><i className="iconF arrowBtn"><SlArrowRightCircle /></i></span> <br/> <span>with</span> <span className='underline'>ideas <hr/></span> <span>for</span> <span>content,</span> <span>technology,</span> <br /> 
        <span><i className="iconF"><IoStarSharp /></i></span><span>design & data.</span><span><i className="iconF"><IoStarSharp /></i></span></h2>

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
            <RippleButton to="/work" className="btnDark fontL"><span>See More Work</span></RippleButton>
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
    <section className='hWorkLogos'><div className='container'>
          {/* <hr className='hrTop'/> */}
          <div className='strokeB hrTop'>
            <SVGCurveLine/>
          </div>
          
           <LogosSlider />

           <div className='strokeB hrBottom'>
            <SVGCurveLine/>
          </div>
    </div></section> 
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

