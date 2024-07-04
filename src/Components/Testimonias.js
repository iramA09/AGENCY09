import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import ryan from '../Assets/Images/logos/work/ryan.png';
import tataMotors2 from '../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../Assets/Images/logos/work/bitsPilani.png';
import starY from '../Assets/Images/icons/star.png';
import SVGCurveLine from '../Hooks/SVGCurveLine'; 


//testimonaialSlider
const testimonialSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // testimonaialSlider End
  

  const Testimonias = () => {


// testimonaialSlider
const testimonialData = [
    {
        eventsText: "Working with AGENCY09 has significantly improved our online visibility. Their comprehensive digital marketing strategies and consistent optimization have driven more traffic to our website and increased our brand's reach.",
        name: 'Shuchiraa Rao',
        designation:'Digital Marketing Head',
        image:ryan,
    },
    {
        eventsText: 'The creativity and innovation that AGENCY09 brought to our project were outstanding. Their ability to translate our vision into compelling content and visually appealing designs exceeded our expectations.',
        name: 'Vinay Dholakia',
        designation:'Head - Digital Marketing & Media',
        image:tataMotors2,
    },
    {
        eventsText: 'The team at AGENCY09 is professional, responsive, and truly understands the needs of their clients. Their proactive approach and excellent communication made the entire process seamless and enjoyable.',
        name: 'Shuchiraa Rao',
        designation:'Digital Marketing Head',
        image:bitsPilani,
    },
    {
        eventsText: "AGENCY09's results-driven approach has delivered measurable success for our campaigns. Their data-driven strategies and insightful analytics have helped us achieve our marketing goals effectively.",
        name: 'Vinay Dholakia',
        designation:'Head - Digital Marketing & Media',
        image:ryan,
    },
    {
        eventsText: 'From web development to social media management, AGENCY09 offers a full suite of digital services. Their expertise across multiple domains has provided us with a cohesive and integrated marketing solution.',
        name: 'Vinay Dholakia',
        designation:'Head - Digital Marketing & Media',
        image:bitsPilani,
    }
  ];
  //testimonaialSlider End

    return (
    <>


    {/* TESTIMONIALS */}   
    {/* <section className='greenB testimonialSec'>
                <div className='container'>

                <div className='Heading center HeadingIcon'>
                    <h2 className='sizeH1 uppercase'>
                        <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                        TESTIMONIALS
                        <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    </h2>
                </div>


        <Slider {...testimonialSlider} className='testimonialSlider slick-slider'>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className='item'>
              <div className='awardsCol'>
              <div className='textwithimg'>
              <div className='awardsImg'><img src={testimonial.image} alt='testimonial Logo' /></div>
               
                <div className='awardsData'>
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.designation}</p>
                  
                  </div>
              </div>
              <div className='awardsText'><p>{testimonial.eventsText}</p></div>

              </div>
            </div>
          ))}
        </Slider>

        <div className='btnSpaceEx center pb-0'>     
            <Link to="../testimonials" className="btnDark fontM ripple-button"><span>View All</span></Link>
        </div>



        </div></section>  */}
        {/* TESTIMONIALS End */} 

        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>

    </>
  )
}

export default Testimonias
