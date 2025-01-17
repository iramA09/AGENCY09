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

import logo from "../../../Assets/Images/logos/work/media_entertainment_gaming/codashop.png"
import ourwork1 from '../../../Assets/Images/work/ryan-group/ryangroup-main.webp';
import ourwork2 from '../../../Assets/Images/work/ryan-group/ryanslide-1.webp';
import ourwork3 from '../../../Assets/Images/work/ryan-group/ryanslide-2.webp';
import ourwork4 from '../../../Assets/Images/work/ryan-group/ryanslide-3.webp';
import ourwork5 from '../../../Assets/Images/work/ryan-group/ryanslide-4.webp';
import ourwork6 from '../../../Assets/Images/work/ryan-group/ryanslide-5.webp';
import vidWork from '../../../Assets/Video/codashop/coda1.mp4';
import vidWork2 from '../../../Assets/Video/codashop/coda2.mp4';


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

const CodashopGetsGamersGroovingEngagingBGMIPlayerswithaUniqueRapSongandDanceContest = () => {


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
                    <h1 className='sizeH4'>Codashop Gets Gamers Grooving: Engaging BGMI Players with a Unique Rap Song and Dance Contest</h1>
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
                        <p>Codashop, a platform providing in-game purchases, sought to enhance its presence during BGMI's Anniversary by engaging gamers with a creative campaign that combined music and dance.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Gaming</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Content & Contest Management</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2023</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>To boost Codashop’s visibility and engagement among BGMI players by leveraging the anniversary event with a unique content-driven campaign.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Capturing the attention of gamers during a busy anniversary period.</li>
                            <li>Creating an engaging and memorable campaign without relying on media spends or third-party promotions.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Developed a catchy Codashop Rap Song in Hindi highlighting key features like instant delivery, exclusive offers, and 24x7 customer support.</li>
                            <li>Encouraged gamers to participate in a Dance Video contest using the in-game dance emote feature.</li>
                            <li>Integrated the Rap Song into Reel Audio on Instagram to drive user-generated content and encourage sharing.</li>
                            <li>Offered incentives such as free Royal Passes for winners to drive participation.</li>
                        </ul>
                    </div>

                    {/* <div className='cSsecMinBCol'>
                        <h4>Strategy</h4>
                        <ul>
                            <li>Crafted a campaign that leveraged both in-game features and social media.</li>
                            <li>Provided a contest tutorial video to guide participants.</li>
                            <li>Monitored and analyzed engagement to optimize campaign performance.</li>
                        </ul>
                    </div> */}

                  

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>3500+ Reels Created</li>
                            <li>+1631 Increase in Brand Mentions During the Campaign</li>
                            <li>14% Engagement Rate</li>
                            <li>28.2K Engagements</li>
                            <li>+11.7K Followers Increase in 10 Days</li>
                            <li>+1850% Increase vs. Typical Follower Rate</li>
                        </ul>
                    </div>

                </div>

            </div>


            <div className='cSsecMinC'>

                <div className='vdCol'>
                   <video src={vidWork} autoPlay controls loop muted />
                   <video src={vidWork2} autoPlay controls loop muted/>
                </div>

            </div>

{/* 
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

export default CodashopGetsGamersGroovingEngagingBGMIPlayerswithaUniqueRapSongandDanceContest
