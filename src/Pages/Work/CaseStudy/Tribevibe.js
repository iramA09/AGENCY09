import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import useLenisScroll from '../../../Hooks/useLenisScroll';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { GoNorthStar } from "react-icons/go";
import { PiSlideshow, PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import starY from '../../../Assets/Images/icons/star.png';
import logo from '../../../Assets/Images/logos/work/others/tribe-vibe.png';

import ourwork1 from '../../../Assets/Images/work/tribevibe/1.jpg';
import ourwork2 from '../../../Assets/Images/work/tribevibe/2.jpg';
import ourwork3 from '../../../Assets/Images/work/tribevibe/3.jpg';
import ourwork4 from '../../../Assets/Images/work/tribevibe/4.jpg';


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
    useLenisScroll();


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
                        <p>We partnered with TribeVibe to conceptualize, strategize, and implement a cutting-edge campus ambassador program. This program was designed to engage and empower students across various campuses, leveraging technology to track and reward their performance while promoting TribeVibe’s brand.</p>


                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>The project involved</h4>
                        <ul>
                            <li><b> CMS Website and Backend:</b>  We developed a comprehensive content management system (CMS) and backend infrastructure to collect and manage data on campus ambassadors. This system enables efficient tracking of tasks, rewards, and overall performance.</li>
                            <li><b>Multiple User Management:</b>   The platform supports multiple user roles, ensuring smooth coordination and management of ambassadors from different campuses.</li>
                            <li><b>Gamification & Leaderboard: </b> To motivate ambassadors and foster healthy competition, we incorporated gamification elements and a dynamic leaderboard, showcasing top performers.</li>
                            <li><b>Analytics & Reports: </b> The system provides detailed analytics and reports, offering insights into the performance and impact of the ambassadors' activities.</li>
                            <li><b>Campus Engagement: </b> Ambassadors are tasked with creating buzz on their college’s social media platforms, newsletters, alumni meets, and more, ensuring widespread brand visibility.</li>
                            <li><b>Certificates & Recommendations: </b> High-performing ambassadors receive certificates of excellence and letters of recommendation, adding value to their professional portfolios.</li>
                        </ul>

                        <p>The outcome is a vibrant and engaging program that not only promotes TribeVibe’s brand but also provides valuable experiences and recognition for student ambassadors.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Capability</h4>
                        <p>Tech-Based Program Strategy & Development</p>
                    </div>

                </div>

            </div>


            <div className='cSsecMinC'>

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

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork4} /></span>
                </div>

    </Slider>
</div>

        </div>
    </section>


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
        </section>  




    <Footer/>
    </>
  )
}

export default Tribevibe
