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
import logo from '../../../Assets/Images/logos/work/retail_fmcg/american-tourister.png';
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

const AmericanTourister = () => {
 

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
                    <h1 className='sizeH4'>Showcasing Excellence: Captivating Product Films for American Tourister</h1>
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
                        <p>We partnered with American Tourister to create a series of captivating product films designed to showcase their latest offerings. These films aimed to highlight the unique features, quality, and style of American Tourister products, providing an engaging and informative viewing experience for potential customers.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Retail & Consumer Goods</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Product Film Production</li>
                            <li>Content Creation</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To create visually stunning product films that highlight the unique features and quality of American Tourister products, while aligning with the brand’s identity and marketing goals.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Showcasing the distinct features, durability, and design of the products in an engaging manner.</li>
                            <li>Ensuring high production quality and aligning the content with American Tourister’s brand identity.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Conducted meticulous filming to emphasize the unique features, durability, design, and functionality of the products.</li>
                            <li>Utilized high-end filming techniques and equipment to achieve superior production quality.</li>
                            <li>Crafted engaging narratives and visuals to capture the attention of the target audience, showcasing the products in various real-life scenarios.</li>
                            <li>Ensured that the films aligned with American Tourister’s brand identity and marketing objectives, reinforcing their reputation for quality and style.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Produced a series of high-quality product films that effectively showcased American Tourister’s</li>
                            </ul>
                    </div>

                </div>

            </div>



        </div>
    </section>
    <section className='cSsecMin'>
    <div className='container'>
        <div className="ytgrd">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Rj3Fu9dln3c?si=4LT1dpFd4pMvufzP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/p5e35M4hgdw?si=lFU28ecRVJzuWHIF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AogwIGpDIhA?si=yESoLQ_v8LdNV78-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8IyF02nNLXw?si=gGtEjz3irutSsm-d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>
</section>


    <Footer/>
    </>
  )
}

export default AmericanTourister
