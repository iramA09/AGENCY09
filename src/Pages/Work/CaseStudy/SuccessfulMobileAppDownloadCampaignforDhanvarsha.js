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

import logo from "../../../Assets/Images/logos/work/BFSI/dhanvarsha.png"
import ourwork1 from '../../../Assets/Images/work/dhanvarsha/dv-main.webp'
import ourwork2 from '../../../Assets/Images/work/dhanvarsha/dv-1.webp'
import ourwork3 from '../../../Assets/Images/work/dhanvarsha/dv-2.webp'



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

const SuccessfulMobileAppDownloadCampaignforDhanvarsha = () => {


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
                    <h1 className='sizeH4'>Successful Mobile App Download Campaign for Dhanvarsha</h1>
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
                        <p>Dhanvarsha Finvest Limited is an NBFC aiming to provide credit solutions to India's large underserved and underbanked MSME segment. The goal was to lead a mobile app download campaign targeting users for personal and business loan products in four regions: Mumbai, Pune, Ahmedabad, and Surat.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> BFSI</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Microsite, Content & Design, Paid Media</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2019</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Lead a mobile app download campaign targeting users for personal & business loan products in 4 serving Regions (Mumbai, Pune, Ahmedabad & Surat)</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Attracting the right users to download the app</li>
                            <li>Optimizing the campaign to achieve cost-effective results</li>
                            <li>Ensuring high engagement with the app post-download</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ol>
                            <li>Create a campaign microsite</li>
                            <li>Develop customer profiles & SEM keyword lists</li>
                            <li>Pull users via Google Text Ads</li>
                            <li>Push users via Social Ads</li>
                            <li>Track campaign, optimize, and remarket</li>
                        </ol>
                    </div>

                    <div className='cSsecMinBCol '>
                        <h4>Results</h4>
                        <ul>
                            <li><b>7000+</b> Mobile App Downloads</li>
                            <li><b>₹39</b> Avg. Cost Per Download</li>
                            <li><b>₹6.2</b> Avg. CPC for Google Ads</li>
                            <li><b>₹3</b> Avg. CPC for Social Ads</li>
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


                </Slider>
            </div>




        </div>
    </section>





    <Footer/>
    </>
  )
}

export default SuccessfulMobileAppDownloadCampaignforDhanvarsha
