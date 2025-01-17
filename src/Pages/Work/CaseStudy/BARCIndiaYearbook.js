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
import logo from '../../../Assets/Images/logos/work/others/barci.png';

import ourwork1 from '../../../Assets/Images/work/barc/main-barc.webp';
import ourwork2 from '../../../Assets/Images/work/barc/barc-1.webp';
import ourwork3 from '../../../Assets/Images/work/barc/barc-2.webp';
import ourwork4 from '../../../Assets/Images/work/barc/barc-3.webp';
import ourwork5 from '../../../Assets/Images/work/barc/barc-4.webp';
import ourwork6 from '../../../Assets/Images/work/barc/barc-5.webp';
import ourwork7 from '../../../Assets/Images/work/barc/barc-6.webp';


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

const BARCIndiaYearbook = () => {


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
                    <h1 className='sizeH4'>Visualizing Insights: Award-Winning Yearbook for BARC India</h1>
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
                        <p>For two consecutive years, we designed BARC India's prestigious annual report, "What India Watches." This comprehensive yearbook provides an in-depth analysis of television viewing habits across India, featuring a wealth of data presented through innovative and visually stunning infographics.</p>
                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Media & Broadcasting</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Data Visualization</li>
                            <li>Report Design</li>
                            </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To create an engaging and visually appealing yearbook that provides valuable insights into Indian television viewing patterns, making complex data accessible and impactful for key industry stakeholders.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Transforming vast amounts of complex data into engaging, easy-to-understand visuals.</li>
                            <li>Ensuring that the yearbook's design is both aesthetically pleasing and informative, aligning with BARC India’s prestige.</li>
                            <li>Creating unique infographics that effectively communicate detailed insights to industry professionals.</li>
                            </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Developed over one hundred unique infographics to present complex television viewership data in an engaging and visually appealing manner.</li>
                            <li>Focused on aesthetics and clarity to ensure that the infographics not only conveyed information effectively but also stood out visually.</li>
                            <li>Crafted a design that aligns with the prestige of BARC India, making "What India Watches" a valuable resource for understanding market trends and audience behavior.</li>
                            </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully produced an award-winning yearbook that has become a crucial resource for broadcasters, advertisers, and media planners.</li>
                            <li>Enhanced the industry’s understanding of television viewership in India through impactful data visualization.</li>
                            <li>Received recognition and acclaim within the industry for the report's compelling design and insightful content.</li>
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
    <span><img src={ourwork1} loading='lazy'  /></span>
</div>

</div>


<div className='mainslider'>
<Slider {...mainSlider} className='clientelSlider slick-slider'>
<div className='imgCol1 imgCol'>
                <span><img src={ourwork2} loading='lazy'  /></span>
            </div>

            <div className='imgCol1 imgCol'>
                <span><img src={ourwork3} loading='lazy'  /></span>
            </div>
            <div className='imgCol1 imgCol'>
                <span><img src={ourwork4} loading='lazy'  /></span>
            </div>
            <div className='imgCol1 imgCol'>
                <span><img src={ourwork5} loading='lazy'  /></span>
            </div>
            <div className='imgCol1 imgCol'>
                <span><img src={ourwork6} loading='lazy'  /></span>
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
        </section>  
 */}



    <Footer/>
    </>
  )
}

export default BARCIndiaYearbook
