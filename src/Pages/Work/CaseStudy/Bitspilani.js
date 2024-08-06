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
                    <h1 className='sizeH4'>Transforming Digital Presence: Modern Website for India’s #1 Non-Govt. Technical Institute, BITS Pilani</h1>
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
                        <p>We undertook the challenge of revamping the website for BITS Pilani, India's premier non-government technical institute. The previous website design was outdated, non-mobile-friendly, and did not reflect the institute’s prestige or recent developments. Additionally, UI and UX issues made the browsing experience confusing for users.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Key Highlights</h4>
                        <ul>
                            <li><b> Simplified User Journey:</b> Streamlined navigation for all stakeholders with a mindful UI-UX approach, ensuring an intuitive and seamless browsing experience.</li>
                            <li><b>Simplified Content Structure: </b>  Organized content to be easily accessible and relevant, enhancing the user experience.</li>
                            <li><b>Elevated Design Language: </b> Introduced a modern design language that reflects the institute's prestige and forward-thinking approach.</li>
                            <li><b>Cross-Device Compatibility: </b>Ensured the website is fully responsive, providing a consistent experience across all devices.</li>
                            <li><b>Advanced Search: </b>Implemented a robust search function to facilitate easy access to information.</li>
                            <li><b>Dynamic Content Population:   </b>Enabled real-time updates and dynamic content display to keep the website current and engaging.</li>
                            <li><b>Modern UI: </b> Developed a sleek and user-friendly interface.</li>
                            <li><b>Well-Mapped User Journey:  </b>Carefully mapped out user journeys to cater to different user groups.</li>
                            <li><b>Robust CMS: </b>Built a powerful content management system to support ongoing updates and maintenance.</li>

                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <p>Web Design & Development, UI/UX Design</p>
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

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork5} /></span>
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
