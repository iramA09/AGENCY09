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

import logo from "../../../Assets/Images/logos/work/energy/mahindra-solarize.png"
import ourwork1 from '../../../Assets/Images/work/ryan-group/ryangroup-main.webp';
import ourwork2 from '../../../Assets/Images/work/ryan-group/ryanslide-1.webp';
import ourwork3 from '../../../Assets/Images/work/ryan-group/ryanslide-2.webp';
import ourwork4 from '../../../Assets/Images/work/ryan-group/ryanslide-3.webp';
import ourwork5 from '../../../Assets/Images/work/ryan-group/ryanslide-4.webp';
import ourwork6 from '../../../Assets/Images/work/ryan-group/ryanslide-5.webp';


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
    slidesToScroll:1,
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

const IndustryLeadingOrganicSearchResultsfromScratchforMahindraSolarize = () => {


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
                    <h1 className='sizeH4'>Industry Leading Organic Search Results from Scratch for Mahindra Solarize</h1>
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
                        <p>Mahindra Solarize, a provider of innovative and technologically advanced solar power solutions, aimed to attract proactive renewable energy seekers. Launching a brand new website posed challenges in establishing online visibility and attracting traffic.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Renewable Energy</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Digital Marketing, SEO, Website Launch</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2023</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Overcome initial negligible organic traffic</li>
                            <li>Reduce Bounce Rate</li>
                            <li>Increase Visibility on SERP</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Establishing online visibility for a new website</li>
                            <li>Attracting organic traffic from scratch</li>
                            <li>Reducing high bounce rates</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>Zero to 5K+:</b> Boost in Organic Traffic</li>
                            <li><b>46.48% Reduction:</b> Overall Bounce Rate</li>
                            <li><b>Full Website Indexing:</b> Across search engines</li>
                            <li><b>4K+:</b> Surge in Mobile Traffic</li>
                        </ul>
                    </div>

                </div>

            </div>


            {/* <div className='cSsecMinC'>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork1} /></span>
                </div>

            </div>


            <div className='mainslider'>
                <Slider {...mainSlider} className='clientelSlider slick-slider'>
                <div className='imgCol1 imgCol'>
                                <span><img src={ourwork2} /></span>
                            </div>

                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork3} /></span>
                            </div>


                </Slider>
            </div> */}




        </div>
    </section>





    <Footer/>
    </>
  )
}

export default IndustryLeadingOrganicSearchResultsfromScratchforMahindraSolarize
