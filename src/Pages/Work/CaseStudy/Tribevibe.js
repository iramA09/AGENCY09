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
import logo from '../../../Assets/Images/logos/work/others/tribe-vibe.png';

import ourwork1 from '../../../Assets/Images/work/tribevibe/1.webp';
import ourwork2 from '../../../Assets/Images/work/tribevibe/2.webp';
import ourwork3 from '../../../Assets/Images/work/tribevibe/3.webp';
import ourwork4 from '../../../Assets/Images/work/tribevibe/4.webp';


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

const Tribevibe = () => {


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
                    <h1 className='sizeH4'>Empowering Campus Influencers: Tech-Driven Ambassador Program for TribeVibe</h1>
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
                        <p>We partnered with TribeVibe to conceptualize, strategize, and implement an innovative campus ambassador program. This tech-driven initiative was designed to engage and empower students across various campuses, using technology to track and reward their performance while promoting TribeVibe’s brand.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Education & Events</p>
                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Tech-Based Program Strategy & Development</li>
                            </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To create a tech-driven campus ambassador program that enhances TribeVibe's brand visibility across campuses, while providing students with valuable experiences and rewards.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Developing a comprehensive system to manage and track the performance of numerous campus ambassadors across multiple locations.</li>
                            <li>Incorporating engaging elements like gamification to motivate ambassadors and ensure active participation.</li>
                            </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Developed a robust CMS website and backend infrastructure to collect and manage data on campus ambassadors, facilitating efficient tracking of tasks, rewards, and overall performance.</li>
                            <li>Implemented multiple user management features to support various roles, ensuring smooth coordination across different campuses.</li>
                            <li>Incorporated gamification elements and a dynamic leaderboard to motivate ambassadors and foster healthy competition.</li>
                            <li>Provided detailed analytics and reports to offer insights into the performance and impact of ambassador activities.</li>
                            <li>Focused on campus engagement by tasking ambassadors with promoting TribeVibe on their college’s social media platforms, newsletters, and events.</li>
                            <li>Rewarded high-performing ambassadors with certificates of excellence and letters of recommendation to enhance their professional portfolios.</li>
                            </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Created a vibrant and engaging campus ambassador program that significantly increased TribeVibe’s brand visibility across campuses.</li>
                            <li>Empowered students with valuable experiences, recognition, and professional development opportunities.</li>
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

export default Tribevibe
