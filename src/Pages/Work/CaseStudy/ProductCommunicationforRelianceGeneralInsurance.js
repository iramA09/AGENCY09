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
import logo from '../../../Assets/Images/logos/work/BFSI/rgi.png';

import ourwork1 from '../../../Assets/Images/work/tata-trucks/tata-main.webp';
import ourwork2 from '../../../Assets/Images/work/tata-trucks/tata-slide1.webp';
import ourwork3 from '../../../Assets/Images/work/tata-trucks/tata-slide2.webp';
import ourwork4 from '../../../Assets/Images/work/tata-trucks/tata-slide3.webp';
import ourwork5 from '../../../Assets/Images/work/tata-trucks/tata-slide4.webp';
import ourwork6 from '../../../Assets/Images/work/tata-trucks/tata-slide5.webp';
import ourwork7 from '../../../Assets/Images/work/tata-trucks/tata-slide6.webp';


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

const ProductCommunicationforRelianceGeneralInsurance = () => {


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
                    <h1 className='sizeH4'>Innovative Product Communication for Enhanced Brand Visibility</h1>
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
                        <p>To boost brand visibility and engage customers, we collaborated with Reliance General Insurance to develop unique product offerings and implement a comprehensive communication strategy. The initiative focused on introducing innovative insurance products and reaching the target audience through a diverse range of communication channels.</p>
                    </div>
                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Insurance</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Product Development</li>
                            <li>Multi-Channel Communication</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To enhance brand visibility and customer engagement by introducing innovative insurance products and implementing a multi-channel communication strategy.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Creating distinctive and appealing product offerings in a competitive insurance market.</li>
                            <li>Effectively reaching and engaging the target audience through various communication channels.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Developed unique product offerings such as "Insurance ka Power Bank," "Health Global," and "Super Top Up" to differentiate Reliance General Insurance in the market.</li>
                            <li>Implemented a comprehensive multi-channel communication strategy, including Print Ads, Mailers, Channel Partner Communication, Social Media, and Digital Ads.</li>
                            <li>Focused on creative and engaging messaging to increase brand awareness and visibility.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully introduced innovative insurance products that captured market interest.</li>
                            <li>Enhanced brand visibility and customer engagement across multiple channels.</li>
                            <li>Received positive feedback from the target audience, leading to a strengthened market presence for Reliance General Insurance.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Year</h4>
                        <p>2023</p>
                    </div>

                </div>

            </div>



        </div>
    </section>





    <Footer/>
    </>
  )
}

export default ProductCommunicationforRelianceGeneralInsurance
