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

import logo from "../../../Assets/Images/logos/work/octarineorganics.png"
import ourwork1 from '../../../Assets/Images/work/octarine-organics/main-banner.webp'
import ourwork2 from '../../../Assets/Images/work/octarine-organics/oo-1.webp'
import ourwork3 from '../../../Assets/Images/work/octarine-organics/oo-2.webp'
import ourwork4 from '../../../Assets/Images/work/octarine-organics/oo-3.webp'
import ourwork5 from '../../../Assets/Images/work/octarine-organics/oo-4.webp'
import ourwork6 from '../../../Assets/Images/work/octarine-organics/oo-5.webp'
import ourwork7 from '../../../Assets/Images/work/octarine-organics/oo-6.webp'
import ourwork8 from '../../../Assets/Images/work/octarine-organics/oo-7.webp'
import ourwork9 from '../../../Assets/Images/work/octarine-organics/oo-8.webp'
import ourwork10 from '../../../Assets/Images/work/octarine-organics/oo-9.webp'


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

const OctarineOrganicsEnchantingMushroomMagicBoxwithInnovativePackagingDesign = () => {


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
                    <h1 className='sizeH4'>Octarine Organics: Enchanting Mushroom Magic Box with Innovative Packaging Design</h1>
                </div>

                <div className='cSsecMinInfo m0'>
                    <img src={logo} />
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
                        <p>Octarine Organics is an Indian mushroom farming venture that combines scientific expertise with innovative product design. For their Mushroom Magic Box, the goal was to create a unique packaging experience that sparked curiosity and engagement.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Plant-Based Products</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Product Packaging</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2023</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>To develop an eye-catching and functional packaging design for the Mushroom Magic Box that aligns with the brand’s innovative image and provides clear growth instructions.</li>
                        </ul>
                    </div>

                    {/* <div className='cSsecMinBCol'>
                        <h4>Strategy</h4>
                        <ul>
                            <li>Developed a packaging concept that evoked curiosity and excitement.</li>
                            <li>Ensured all sides of the octagonal box were utilized effectively for branding and instructional purposes.</li>
                            <li>Focused on practical aspects of packaging to support optimal mushroom growth.</li>
                        </ul>
                    </div> */}

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Designing a packaging solution that stands out and intrigues consumers.</li>
                            <li>Ensuring the packaging serves both an aesthetic and practical purpose, including growth instructions.</li>
                        </ul>
                    </div>
                    <div className='cSsecMinBCol'>
                    <h4>Approach </h4>
                    <ul>
<li>Created an Eight-Sided Octagonal Magic Box to reflect the product’s intriguing nature.</li>
<li>Incorporated detailed growth instructions directly on the box to eliminate the need for additional manuals or pamphlets.</li>
<li>Designed the packaging so that the mushrooms grow out of the Octarine Organics logo, adding a unique and engaging visual element.</li>


                    </ul>
                    </div>


                    <div className='cSsecMinBCol '>
                        <h4>Results</h4>
                        <ul>
                            <li>The final design effectively captivated consumer interest.</li>
                            <li>The box’s perforation allowed mushrooms to grow out of the Octarine Organics logo, enhancing the customer experience.</li>
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

export default OctarineOrganicsEnchantingMushroomMagicBoxwithInnovativePackagingDesign
