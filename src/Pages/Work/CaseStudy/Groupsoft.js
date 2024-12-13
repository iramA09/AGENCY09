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

import logo from "../../../Assets/Images/logos/work/groupsoftus.gif"
import ourwork1 from '../../../Assets/Images/work/groupsoft/groupsoft-master.webp';
import ourwork2 from '../../../Assets/Images/work/groupsoft/1.webp';
import ourwork3 from '../../../Assets/Images/work/groupsoft/2.webp';
import ourwork4 from '../../../Assets/Images/work/groupsoft/3.webp';
import ourwork5 from '../../../Assets/Images/work/groupsoft/4.webp';



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

const TataTrucks = () => {

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
                    <h1 className='sizeH4'>Modernizing Digital Identity: Revamped Website for Global SaaS Company Groupsoft</h1>
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
                        <p>We partnered with Groupsoft to revamp their website, aligning it with their new brand identity. The goal was to create a modern, technically sophisticated, and visually compelling website that embodies Groupsoft's core beliefs and philosophies. As a leading technology company, it was essential to integrate the latest technical advancements while establishing a distinct tone and imagery.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Technology (SaaS)</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Web Design & Development</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>
                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To modernize Groupsoft’s digital identity by creating a website that reflects their brand’s technological expertise and innovative spirit, while providing a seamless and engaging user experience.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Aligning the website design with Groupsoft’s new brand identity while integrating the latest technical advancements.</li>
                            <li>Ensuring the website was fully optimized for mobile devices to provide a seamless experience across all platforms.</li>
                            <li>Mapping user journeys to ensure intuitive navigation and a cohesive browsing experience.</li>
                        </ul>
                    </div>
                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Implemented a mobile-first design strategy to optimize the website for all devices, ensuring a consistent user experience.</li>
                            <li>Developed a visually engaging user interface to captivate visitors and enhance user interaction.</li>
                            <li>Carefully mapped out user journeys to ensure intuitive navigation and a cohesive experience across the website.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully revamped Groupsoft's website, creating a modern digital identity that reflects their technological expertise and brand values.</li>
                            <li>Enhanced user engagement through a visually compelling and mobile-optimized website.</li>
                            <li>Improved navigation and user experience, aligning with the latest industry standards.</li>
                        </ul>
                    </div>

<div className='cSsecMinBCol'>
<h4>Year</h4>
<p>2023</p>
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

    </Slider>
</div>

        </div>
    </section>
{/* 

    <div className='container'>
    <div className='strokeB'>
              <SVGCurveLine />
    </div>
    </div>

    
    <section className='solutionsSecCaseStudy'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    Related Work
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img src={CaseStudy.image}/></div>
                                <div className='CaseStudyTitale'>{CaseStudy.titale}</div>
                                <div className='textTag'><p>{CaseStudy.tag}
                                
                                {CaseStudy.tags.map((tag, index) => (
                                  <span key={index}>{tag.name}</span>
                                ))}
                                
                                </p></div>
                            </Link>
                        </div>
                        </div>
                    ))}
                </Slider>

            <div className='btnSpaceEx center'>     
                <Link to="/work/case-studies" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>   */}




    <Footer/>
    </>
  )
}

export default TataTrucks
