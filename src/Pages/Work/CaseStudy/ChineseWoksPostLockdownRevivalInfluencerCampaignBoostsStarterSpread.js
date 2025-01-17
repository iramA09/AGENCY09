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

import logo from "../../../Assets/Images/logos/work/others/chinese-wok.png"
import ourwork1 from '../../../Assets/Images/work/ryan-group/ryangroup-main.webp';
import ourwork2 from '../../../Assets/Images/work/ryan-group/ryanslide-1.webp';
import ourwork3 from '../../../Assets/Images/work/ryan-group/ryanslide-2.webp';
import ourwork4 from '../../../Assets/Images/work/ryan-group/ryanslide-3.webp';
import ourwork5 from '../../../Assets/Images/work/ryan-group/ryanslide-4.webp';
import ourwork6 from '../../../Assets/Images/work/ryan-group/ryanslide-5.webp';
import vidWork from '../../../Assets/Video/chineseWok/CW1.mp4';
import vidWork1 from '../../../Assets/Video/chineseWok/CW2.mp4';
import vidWork2 from '../../../Assets/Video/chineseWok/CW3.mp4';


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

const ChineseWoksPostLockdownRevivalInfluencerCampaignBoostsStarterSpread = () => {


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
                    <h1 className='sizeH4'>Chinese Wok's Post-Lockdown Revival: Influencer Campaign Boosts Starter Spread</h1>
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
                        <p>Chinese Wok, a restaurant known for its extensive range of Chinese starters, aimed to revitalize its brand presence after the second lockdown in 2021.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Restaurant</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Influencer Activity</p>
                       <p>Promoting Chinese Wok’s range of starters through social media influencers</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2021</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>To connect with the audience through social media by leveraging their favorite influencers to promote Chinese Wok’s starters.</li>
                        </ul>
                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Engaging the audience effectively during a competitive New Year's period.</li>
                            <li>Creating impactful content to showcase a diverse menu.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                    <h4>Approach </h4>
                    <ul>
<li>Approached food influencers on Instagram and provided campaign details.</li>
<li>Generated content ideas and formats for online promotion.</li>
<li>Supplied copy to influencers for the campaign.</li>
<li>Analyzed influencer posts to gauge engagement levels.</li>

                    </ul>
                    </div>

                

                    {/* <div className='cSsecMinBCol'>
                        <h4>Strategy</h4>
                        <ul>
                            <li>Identified relevant influencers and prepared rate cards.</li>
                            <li>Shortlisted and approached influencers.</li>
                            <li>Provided creatives and a brief about the content idea.</li>
                            <li>Analyzed campaign performance post-execution.</li>
                        </ul>
                    </div> */}

                 

                    <div className='cSsecMinBCol '>
                        <h4>Results</h4>
                        <ul>
                            <li>412K+ Overall Reach</li>
                            <li>19.7K+ Overall Interactions</li>
                            <li>2% Engagement Rate</li>
                        </ul>
                    </div>

                </div>

            </div>


            <div className='cSsecMinC'>

                <div className='vdCol'>
                    <video src={vidWork} autoPlay controls loop muted/>
                    <video src={vidWork1} autoPlay controls loop muted/>
                    <video src={vidWork2} autoPlay controls loop muted/>
                </div>

            </div>


            {/* <div className='mainslider'>
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

export default ChineseWoksPostLockdownRevivalInfluencerCampaignBoostsStarterSpread
