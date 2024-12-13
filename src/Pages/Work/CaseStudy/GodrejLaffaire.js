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
import logo from '../../../Assets/Images/logos/work/fashion_lifestyle/godrej-laffaire.png';
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

const GodrejLaffaire = () => {


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
                        <p>In a bid to discover and nurture India's next big content creator, we launched Godrej L’Affaire Select, a nationwide talent hunt aimed at identifying and supporting the country’s most promising digital talents. The initiative provided budding creators with unmatched opportunities for growth, exposure, and industry connections.</p>
                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Lifestyle & Digital Content</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Digital Strategy</li>
                            <li>IP Building</li>
                            <li>Community Engagement</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To discover, mentor, and elevate emerging digital content creators in India, while reinforcing Godrej's commitment to creativity and innovation in the digital space.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Managing a nationwide talent hunt with thousands of participants.</li>
                            <li>Ensuring the selection process identified the most promising talents.</li>
                            <li>Providing meaningful mentorship and exposure to the finalists.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Conducted a rigorous nationwide hunt to attract and select top digital talents, narrowing down thousands of participants to the top 25 finalists.</li>
                            <li>Provided exclusive mentorship to the finalists from renowned digital influencer Ranveer Allahbadia and a jury of industry experts.</li>
                            <li>Organized the L’Affaire On Ground Event as the campaign’s grand finale, celebrating the finalists’ journey, showcasing their talents, and facilitating connections with industry leaders.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully identified and mentored India’s next wave of digital content creators.</li>
                            <li>Strengthened Godrej's reputation as a supporter of creativity and innovation in the digital landscape.</li>
                            <li>Enhanced engagement with a new generation of digital talent.</li>
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
<section className='cSsecMin'>
    <div className='container'>
        <div className="ytfm">
    <iframe width="1260" height="560" src="https://www.youtube.com/embed/OgGZXhIAhKo?si=TS5XFXLTQVSNUjdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
