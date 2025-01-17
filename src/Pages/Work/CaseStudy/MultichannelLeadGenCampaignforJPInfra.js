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

import logo from "../../../Assets/Images/logos/work/real-estate/jp-infra.png"
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

const MultichannelLeadGenCampaignforJPInfra = () => {


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
                    <h1 className='sizeH4'>Multichannel Lead Gen Campaign for JP Infra</h1>
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
                        <p>JP Infra is an award-winning Real Estate Developer with multiple projects in and around MMR. The goal was to market and generate leads for their three properties: JP Deck Blue, Unity Towers, and JP North.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Real Estate</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Microsite, Content & Design, Paid Media</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2016</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Market and generate leads for JP Infra's properties: JP Deck Blue, Unity Towers, and JP North.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Attracting the right audience to generate quality leads.</li>
                            <li>Implementing a comprehensive multichannel lead generation strategy.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li><b>Lead Collection Infrastructure:</b></li>
                            <ul>
                            <li>Created a campaign microsite that also directed to individual project sites.</li>
                            </ul>
                            <li><b>Lead Gen Activity:</b>
                            <ul>
                                <li>Google Display & Text Ads</li>
                                <li>Social Ads & Remarketing</li>
                                <li>SMS & Emailer Campaign</li>
                                <li>Press Release & Group Posting</li>
                                <li>3rd Party Tie Ups with 99Acres, Makaan, and Magic Bricks.</li>
                            </ul>
                            </li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol '>
                        <h4>Results</h4>
                        <ul>
                            <li>7000+ leads for 3 JP Infra projects</li>
                            <li>100+ website ad placements</li>
                            <li>Hits from 49 countries</li>
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

export default MultichannelLeadGenCampaignforJPInfra
