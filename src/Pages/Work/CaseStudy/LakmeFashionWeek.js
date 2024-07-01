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
import logo from '../../../Assets/Images/logos/work/fashion_lifestyle/lakme.png';
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

const LakmeFashionWeek = () => {
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
                    <h1 className='sizeH4'>Capturing the Glamour: Content Creation and Event Coverage for Lakme Fashion Week</h1>
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
                        <p>Over six seasons of Lakme Fashion Week, we played a pivotal role in enhancing the event's digital presence and engagement. Our comprehensive approach involved creating compelling content, providing extensive event coverage, and fulfilling sponsor deliverables, ensuring that the essence and excitement of the fashion week were effectively captured and shared.</p>


                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Key Highlights</h4>
                        <ul>
                            <li><b> Content Creation for Social:</b>   Developed engaging and visually appealing content for various social media platforms, ensuring real-time updates and consistent brand messaging.</li>
                            <li><b>Event Coverage:</b>   Provided extensive coverage of the event, including live updates, interviews, and behind-the-scenes insights, bringing the audience closer to the action.</li>
                            <li><b>Sponsor Deliverables: </b>  Ensured all sponsor deliverables were met with high-quality content and timely execution, maintaining strong relationships and satisfaction.</li>
                            <li><b>Lives:  </b> Conducted live streams and live updates, keeping the audience engaged and connected with the event in real time.</li>
                            <li><b>Creation of IP - Be the Next (A Model Hunt): </b> Conceptualized and executed the "Be the Next" model hunt, adding a unique and interactive dimension to the event, and uncovering new talent.</li>
                        </ul>

                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Capability</h4>
                        <p>Content Creation & Event Coverage</p>
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

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork6} /></span>
                </div>

                <div className ='imgCol1 imgCol'>
                    <span><img src={ourwork7}/></span>
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

export default LakmeFashionWeek
