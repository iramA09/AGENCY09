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

import logo from "../../../Assets/Images/logos/work/fashion_lifestyle/aldo.png"
import ourwork1 from '../../../Assets/Images/work/aldo/picture.webp';
import ourwork2 from '../../../Assets/Images/work/aldo/aldo-1.webp';
import ourwork3 from '../../../Assets/Images/work/aldo/aldo-2.webp';
import ourwork4 from '../../../Assets/Images/work/aldo/aldo-3.webp';
import ourwork5 from '../../../Assets/Images/work/aldo/aldo-4.webp';
import ourwork6 from '../../../Assets/Images/work/aldo/aldo-5.webp';
import ourwork7 from '../../../Assets/Images/work/aldo/aldo-6.webp';
import ourwork8 from '../../../Assets/Images/work/aldo/aldo-7.webp';
import ourwork9 from '../../../Assets/Images/work/aldo/aldo-8.webp';
import ourwork10 from '../../../Assets/Images/work/aldo/aldo-9.webp';
import ourwork11 from '../../../Assets/Images/work/aldo/aldo-10.webp';


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

const PromotingALDOsSS19andWeddingCollections = () => {


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
                    <h1 className='sizeH4'>Promoting ALDO's SS'19 and Wedding Collections</h1>
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
                        <p>ALDO launched their latest range of wedding shoe collections and wanted to connect with their audience through relevant social platforms.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Fashion</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Influencer activity</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2019</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Connect to the audience through social media via their favorite influencers.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Identifying and engaging relevant influencers.</li>
                            <li>Generating and providing engaging content ideas.</li>
                            <li>Ensuring high engagement and impressions within a short timeframe.</li>
                        </ul>
                    </div>

                   

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Approach influencers on Instagram and provide them with details about the product and campaign.</li>
                            <li>Generate content ideas to promote the product online.</li>   
                            <li>Provide influencers with the copy for the campaign.</li> 
                            <li>Analyze which influencer posts are getting the most engagement.</li>                     
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>40K Likes</li>
                            <li>500+ Comments</li>
                            <li>180K+ Impressions</li>
                        </ul>
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
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork4} loading='lazy' /></span>
                            </div>
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork5} loading='lazy' /></span>
                            </div>
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork6} loading='lazy' /></span>
                            </div>
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork7} loading='lazy' /></span>
                            </div>
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork8} loading='lazy' /></span>
                            </div>
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork9} loading='lazy' /></span>
                            </div>
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork10} loading='lazy' /></span>
                            </div>


                </Slider>
            </div>




        </div>
    </section>





    <Footer/>
    </>
  )
}

export default PromotingALDOsSS19andWeddingCollections
