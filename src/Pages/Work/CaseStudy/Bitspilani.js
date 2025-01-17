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

import logo from "../../../Assets/Images/logos/work/education/bitspilani.png"
import ourwork1 from '../../../Assets/Images/work/bitspilani/bits-master.webp';
import ourwork2 from '../../../Assets/Images/work/bitspilani/1.webp';
import ourwork3 from '../../../Assets/Images/work/bitspilani/2.webp';
import ourwork4 from '../../../Assets/Images/work/bitspilani/3.webp';
import ourwork5 from '../../../Assets/Images/work/bitspilani/4.webp';



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
                    <h1 className='sizeH4'>Transforming Digital Presence: Modern Website for India’s #1 Non-Govt. Technical Institute, BITS Pilani</h1>
                </div>

                <div className='cSsecMinInfo m0'>
                    <img src={logo} loading='lazy'  />
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
                        <p>We revamped the website for BITS Pilani, India's premier non-government technical institute, to modernize its digital presence. The previous website was outdated, non-mobile-friendly, and did not reflect the institute's prestige. It also suffered from UI/UX issues that made navigation and content access difficult for users.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Education</p>
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
                        <p>To create a modern, responsive website for BITS Pilani that reflects its prestige and enhances the user experience for all stakeholders.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Challenges</h4>
                       <ul>
                        <li>Overhauling an outdated website design to be mobile-friendly and visually aligned with the institute’s esteemed reputation.</li>
                        <li>Addressing UI/UX issues to simplify navigation and improve content accessibility.</li>
                        <li>Ensuring the website could support dynamic content updates and provide a consistent experience across all devices.</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Approach</h4>
                       <ul>
                        <li>Simplified the user journey with a mindful UI/UX design, making navigation intuitive and seamless for all stakeholders.</li>
                        <li>Organized content into a simplified structure that is easily accessible and relevant to users.</li>
                        <li>Introduced a modern design language that elevates the institute's online presence.</li>
                        <li>Ensured full cross-device compatibility to provide a consistent browsing experience on any device.</li>
                        <li>Implemented an advanced search function for easy access to information.</li>
                        <li>Enabled real-time updates and dynamic content display to keep the website current and engaging.</li>
                        <li>Developed a sleek and user-friendly modern interface.</li>
                        <li>Mapped out user journeys to cater to different user groups effectively.</li>
                        <li>Built a robust content management system (CMS) to support ongoing updates and maintenance.</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Results</h4>
                       <ul>
                        <li>A modernized website that aligns with BITS Pilani's prestigious image.</li>
                        <li>Enhanced user experience across all devices with improved navigation and content accessibility.</li>
                        <li>Increased user engagement due to a more intuitive and dynamic online presence.</li>
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
