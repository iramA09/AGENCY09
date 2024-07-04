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
import logo from '../../../Assets/Images/logos/work/fashion_lifestyle/godrej-laffaire.png';
import ourwork1 from '../../../Assets/Images/work/tata-trucks/tata-main.jpg';
import ourwork2 from '../../../Assets/Images/work/tata-trucks/tata-slide1.jpg';
import ourwork3 from '../../../Assets/Images/work/tata-trucks/tata-slide2.jpg';
import ourwork4 from '../../../Assets/Images/work/tata-trucks/tata-slide3.jpg';
import ourwork5 from '../../../Assets/Images/work/tata-trucks/tata-slide4.jpg';
import ourwork6 from '../../../Assets/Images/work/tata-trucks/tata-slide5.jpg';
import ourwork7 from '../../../Assets/Images/work/tata-trucks/tata-slide6.jpg';


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

const GodrejLaffaire = () => {
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
                    <h1 className='sizeH4'>Unearthing India’s Next Big Content Creator with Godrej L’Affaire Select</h1>
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
                        <p>In an ambitious effort to discover and nurture India's next big content creator, we launched Godrej L’Affaire Select, a nationwide talent hunt that sought out the most promising digital talents across the country. The initiative aimed to identify and support budding creators, providing them with unparalleled opportunities for growth and exposure.</p>


                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>The campaign involved</h4>
                        <ul>
                            <li><b>Nationwide Hunt:</b> A rigorous selection process that attracted thousands of participants from across India, all vying for a spot in the top 25.</li>
                            <li><b>Expert Mentorship:</b>  The top 25 finalists were provided with exclusive mentorship from Ranveer Allahbadia, one of India's leading digital influencers, along with guidance from a vast jury of industry experts.</li>
                            <li><b>L’Affaire On Ground Event:</b>  The culmination of the campaign was a grand event where the finalists were commemorated. This event celebrated their journey, showcased their talents, and provided a platform for them to connect with industry leaders and potential collaborators.</li>
                        </ul>

                        <p>The initiative not only uncovered new digital talent but also reinforced Godrej's commitment to supporting creativity and innovation in the digital space.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Capability</h4>
                        <p>Digital Strategy, IP Building, Community Engagement</p>
                    </div>

                </div>

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

export default GodrejLaffaire
