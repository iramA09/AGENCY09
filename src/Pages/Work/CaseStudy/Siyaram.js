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

import logo from "../../../Assets/Images/logos/work/siyarams.png"
import ourwork1 from '../../../Assets/Images/work/siyaram/siyaram-master.webp';
import ourwork2 from '../../../Assets/Images/work/siyaram/1.webp';
import ourwork3 from '../../../Assets/Images/work/siyaram/2.webp';
import ourwork4 from '../../../Assets/Images/work/siyaram/3.webp';
import ourwork5 from '../../../Assets/Images/work/siyaram/4.webp';
import ourwork6 from '../../../Assets/Images/work/siyaram/5.webp';


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
                    <h1 className='sizeH4'>Elevating Men's Fashion: A Visually Captivating Website for Siyaram's</h1>
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
                        <p>Siyaram's, a leader in men’s clothing, is dedicated to understanding and catering to the diverse needs of its customers by staying at the forefront of innovation and technology. Our task was to design a visually captivating website that embraced a user-centric approach to its information architecture while effectively showcasing the brand's rich legacy and commitment to fashion excellence.</p>
                    </div>
<div className="cSsecMinBCol">
    <h4>Industry</h4>
    <p>Fashion</p>
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
                    <p>To create a visually compelling and user-friendly website for Siyaram's that reflects the brand's innovative spirit, showcases its rich legacy, and provides an exceptional user experience.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Designing a website that balances the brand's rich legacy with a modern, innovative image.</li>
                            <li>Ensuring the website remains fresh and engaging with real-time content updates.</li>
                            <li>Achieving quick loading times for a seamless user experience across all devices.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Developed a sleek and contemporary user interface that aligns with Siyaram's brand identity.</li>
                            <li>Implemented dynamic content population to enable real-time updates and keep the website engaging.</li>
                            <li>Optimized the website for mobile devices, adopting a mobile-first approach to ensure a consistent and high-quality experience across all platforms.</li>
                            <li>Focused on reducing loading times to enhance the overall user experience.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully created a visually captivating and user-friendly website that aligns with Siyaram's brand identity.</li>
                            <li>Enhanced user engagement through dynamic content updates and a modern UI.</li>
                            <li>Delivered a seamless browsing experience with quick loading times</li>
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

                <div className ='imgCol1 imgCol'>
                    <span><img src={ourwork6} loading='lazy' /></span>
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
