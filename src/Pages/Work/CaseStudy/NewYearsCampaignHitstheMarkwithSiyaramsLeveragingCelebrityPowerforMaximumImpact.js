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

import logo from "../../../Assets/Images/logos/work/fashion_lifestyle/siyaram.png"
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

const NewYearsCampaignHitstheMarkwithSiyaramsLeveragingCelebrityPowerforMaximumImpact = () => {


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
                    <h1 className='sizeH4'>New Year's Campaign Hits the Mark with Siyaram's:<br/> Leveraging Celebrity Power for Maximum Impact</h1>
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
                        <p>Siyaram is an Indian blended fabric and garment manufacturer with a network of retail outlets and branded showrooms.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Fashion</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Facebook & YouTube Ads</p>
                       <p>New Year's Video Campaign</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2022</p>
                    </div>
                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>To connect with the audience through their New Year's Video Campaign.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Engaging the audience effectively during a competitive New Year's period.</li>
                            <li>Maximizing ad performance across both Facebook and YouTube platforms.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                    <h4>Approach </h4>
                    <ul>
<li>Utilized an A-list celebrity in the ad for enhanced engagement.</li>
<li>Developed a comprehensive media plan for both Facebook and YouTube.</li>
<li>Defined campaign objectives and key performance indicators (KPIs).</li>
<li>Executed creative and copy for the campaign.</li>
<li>Analyzed ad performance on both platforms.</li>
<li>Ran non-skippable YouTube ads to increase traction.</li>
<li>Continuously tracked, optimized, and remarked the campaign.</li>

                    </ul>
                    </div>

              

                    <div className='cSsecMinBCol '>
                        <h4>Results</h4>
                        <ul>
                            <li>1.6M Facebook Impressions</li>
                            <li>1.3M Facebook Views</li>
                            <li>1.3M YouTube Impressions</li>
                            <li>497K+ YouTube Views</li>
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

<section className='cSsecMin'>
    <div className='container'>
        <div className="ytfm">
        <iframe width="1160" height="560" src="https://www.youtube.com/embed/Oyhq4yVpT70?si=lgyl6SP-DVJ1yOKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
</section>


        </div>
    </section>





    <Footer/>
    </>
  )
}

export default NewYearsCampaignHitstheMarkwithSiyaramsLeveragingCelebrityPowerforMaximumImpact
