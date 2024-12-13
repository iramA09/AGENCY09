import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { GoNorthStar } from "react-icons/go";
import { PiSlideshow, PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import starY from '../../../Assets/Images/icons/star.webp';
import logo from '../../../Assets/Images/logos/work/fashion_lifestyle/lakme.png';
import ourwork1 from '../../../Assets/Images/work/lakme/lk-main.webp'
import ourwork2 from '../../../Assets/Images/work/lakme/lk-1.webp'
import ourwork3 from '../../../Assets/Images/work/lakme/lk-2.webp'


// CaseStudySlider 
const CaseStudySlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 968,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
// CaseStudySlider End

// Slider

const mainSlider ={
    dot: false,
    arrows:true,
    infinite:true,
    autoplay:true,
    autoplaySpeed: 7000,
    speed:700,
    slideToShow:3,
    SlideshowToScroll:1,
    responsive: [
        {
            breakpoint:768,
            settings:{
                arrow:false,
            }
        }
    ]
}

// Slider

//CaseStudy Data
const CaseStudyData = [
    {
        link: '#',
        image: ourwork1,
        titale: 'Brand led site for a Banking Solutions Firm',
        tags: [{ name: 'BFSI' },],
    },  
    {
        link: '#',
        image: ourwork2,
        titale: 'A dynamic website for India’s biggest truck company',
        tags: [
            { name: 'Automobile' },
        ],
    },  
    {
        link: '#',
        image: ourwork3,
        titale: 'Revamped Website for one of the India’s biggest institution',
        tags: [{ name: 'Education' },],

    },
  ];
//CaseStudy Data End

const LakmeFashionWeek = () => {


  return (
    <>
    <Header/>
    <div className="spacer"></div>


    <section className='cSsecMin'>
        <div className='container'>
            
            <div className='cSsecMinA flexBio'>

                <div className='cSsecMinBtn m0'>
                <Link to='/work/case-studies' className='backBtn'><span><IoArrowBackCircleOutline /> Case Study</span></Link>
                </div>

                <div className='cSsecMinHead m0'>
                    <h1 className='sizeH4'>Capturing the Glamour: Content Creation and Event Coverage for Lakme Fashion Week</h1>
                </div>

                <div className='cSsecMinInfo m0'>
                    <img src={logo} loading='lazy' />
                    {/* <Link>Info <GoPlus /></Link> */}
                </div>

            </div>

            <div className='strokeB'>
                <SVGCurveLine/>
            </div>  


            <div className='cSsecMinB'>
                <div className='cSsecMinBRow'>
                    <div className='cSsecMinBCol'>
                        <h4>Overview</h4>
                        <p>Over six seasons of Lakme Fashion Week, we played a crucial role in amplifying the event's digital presence and engagement. Our approach encompassed creating compelling content, providing extensive event coverage, and fulfilling sponsor deliverables, ensuring that the excitement and essence of the fashion week were effectively captured and shared with the audience.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Fashion & Events</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Content Creation</li>
                            <li>Event Coverage</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To enhance the digital presence of Lakme Fashion Week through engaging content and comprehensive event coverage, while meeting sponsor deliverables and adding interactive elements to the event.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Developing engaging content that captures the excitement of the fashion week and resonates across various social media platforms.</li>
                            <li>Providing extensive and real-time event coverage to keep the audience connected with the event's happenings.</li>
                            <li>Fulfilling sponsor deliverables with high-quality content and timely execution.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Created engaging and visually appealing content for social media platforms, ensuring real-time updates and consistent brand messaging.</li>
                            <li>Provided extensive event coverage, including live updates, interviews, and behind-the-scenes insights, to bring the audience closer to the action.</li>
                            <li>Ensured all sponsor deliverables were met with high-quality content and timely execution, maintaining strong relationships with sponsors.</li>
                            <li>Conducted live streams and live updates to keep the audience engaged and connected with the event in real time.</li>
                            <li>Conceptualized and executed the "Be the Next" model hunt, adding a unique and interactive dimension to the event, and uncovering new talent.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully enhanced the digital presence and engagement of Lakme Fashion Week through impactful content and event coverage.</li>
                            <li>Maintained strong sponsor relationships with high-quality and timely deliverables.</li>
                            <li>Increased audience engagement with real-time updates and interactive elements like the "Be the Next" model hunt.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Year</h4>
                        <p>2015 - 2017</p>
                    </div>

                </div>

            </div>

            <div className='cSsecMinC'>

<div className='imgCol1 imgCol'>
    <span><img src={ourwork1} loading='lazy' /></span>
</div>

</div>


<div className='mainslider'>
<Slider {...mainSlider} className='clientelSlider slick-slider'>
<div className='imgCol1 imgCol'>
                <span><img src={ourwork2} loading='lazy' /></span>
            </div>

            <div className='imgCol1 imgCol'>
                <span><img src={ourwork3} loading='lazy' /></span>
            </div>
</Slider>
</div>

          
        </div>
    </section>






    <Footer/>
    </>
  )
}

export default LakmeFashionWeek
