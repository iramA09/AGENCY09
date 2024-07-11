import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Link, useLocation } from 'react-router-dom';
import useLenisScroll from '../../Hooks/useLenisScroll';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AllData from './CaseStudiesItems/All';
import TechData from './CaseStudiesItems/Tech';
import BrandDesignData from './CaseStudiesItems/BrandDesign';
import ContentData from './CaseStudiesItems/Content';
import MediaData from './CaseStudiesItems/Media';
import ProductionData from './CaseStudiesItems/Production';
import KeywordData from './CaseStudiesItems/Keyword';
import { PiArrowCircleRightThin } from "react-icons/pi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import ourwork2 from '../../Assets/Images/work/ourwork-1.jpg';
import ourwork1 from '../../Assets/Images/work/ourwork-2.jpg';
import ourwork3 from '../../Assets/Images/work/ourwork-3.jpg';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

//CaseStudy Data
const CaseStudyData = [
    {
        link: '#',
        image: ourwork1,
        titale: 'Brand led site for a Banking Solutions Firm',
        tags: [{ name: 'BFSI' },],
        brand: 'Mahindra Tsubaki',
        department: 'BrandDesign'
    },  
    {
        link: '#',
        image: ourwork2,
        titale: 'A dynamic website for India’s biggest truck company',
        tags: [
            { name: 'Automobile' },
        ],
        brand: 'Mahindra Tsubaki',
        department: 'BrandDesign'
    },  
    {
        link: '#',
        image: ourwork3,
        titale: 'Revamped Website for one of the India’s biggest institution',
        tags: [{ name: 'Education' },],        
        brand: 'Mahindra Tsubaki',
        department: 'BrandDesign'

    },
  ];
//CaseStudy Data End



const CaseStudies = () => {
    const location = useLocation();
    useLenisScroll();
    return (
        <>

        <Helmet>
            <title> Case Study – AGENCY09</title>
            <meta name="description" content="Clients achieve better ROI with integrated digital & inbound marketing strategies. Peek at our lead based campaigns, website designs, SEO and ORM."/>
            <link rel="canonical" href="https://www.agency09.in/work/case-studies"/>

            <meta property="og:title" content=" Case Study – AGENCY09 "/> 
            <meta property="og:description" content=" Clients achieve better ROI with integrated digital & inbound marketing strategies. Peek at our lead based campaigns, website designs, SEO and ORM."/> 
            <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
            <meta property="og:type" content="website"/> 

            <meta name="twitter:card" content="summary"/> 
            <meta name="twitter:site" content="@AGENCY09"/> 
            <meta name="twitter:creator" content="@AGENCY09"/> 
            <meta name="twitter:url" content="https://www.agency09.in/work/case-studies"/> 
            <meta name="twitter:description" content=" Clients achieve better ROI with integrated digital & inbound marketing strategies. Peek at our lead based campaigns, website designs, SEO and ORM. "/> 
            <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 
        </Helmet>



            <Header />
            <div className="spacer"></div>
            <section>
                <div className='container'>
                    <div className='aboutS'>
                        <div className='aboutScol'>
                            <h1 className='sizeH1 uppercase'>Our WORK</h1>
                            <div className='arrowRightH'><PiArrowCircleRightThin /></div>
                        </div>
                        <div className='aboutScol'>
                            <p>We offer a comprehensive suite of services under one roof. Our expertise spans across multiple departments, ensuring that we deliver holistic and integrated solutions to our clients. We have a proven track record of success across various industries and categories, demonstrating our ability to adapt and excel in different market environments</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='workTabs'>
                <div className='container'>
                    <ul className='navBarC'>
                        <li><Link to='/work/case-studies' className={location.pathname === '/work/case-studies' ? 'active' : ''}>Case Studies</Link></li>
                        <li><Link to='/work/our-clients' className={location.pathname === '/work/our-clients' ? 'active' : ''}>Our Clients</Link></li>
                    </ul>

                    {/* Case Studies */}
                    <Tabs>
                        <TabList >
                            <Tab><span>All</span></Tab>
                            <Tab><span>Tech</span></Tab>
                            <Tab><span>Design</span></Tab>
                            <Tab><span>Content</span></Tab>
                            <Tab><span>Media</span></Tab>
                            <Tab><span>Production</span></Tab>
                            <Tab><span>Keyword</span></Tab>
                        </TabList>
                        
                        {/* All */}
                        <TabPanel>
                          <AllData/>
                        </TabPanel>
                        {/* All */}

                        {/* Tech */}
                        <TabPanel>
                          <TechData/>
                        </TabPanel>
                        {/* Tech */}

                        {/* Brand Design */}
                        <TabPanel>
                            <BrandDesignData/>
                        </TabPanel>
                        {/* Brand Design */}

                        {/* Content */}
                        <TabPanel>
                           <ContentData/>
                        </TabPanel>
                        {/* Content */}

                        {/* Media */}
                        <TabPanel>

                            <div className='comingSoon'>
                              <h2>Coming Soon...</h2>
                            </div>

                            <MediaData/>
                        </TabPanel>
                        {/* Media */}

                        {/* Production */}
                        <TabPanel>
                            <ProductionData/>
                        </TabPanel>
                        {/* Production */}

                        {/* Keyword */}
                        <TabPanel>
                            
                            <div className='comingSoon'>
                                <h2>Coming Soon...</h2>
                            </div>
                            <KeywordData/>
                        </TabPanel>
                        {/* Keyword */}
                    </Tabs>
                    {/* Case Studies End */}
                </div>
            </section>
{/* 
            <div className='strokeB container'>
                <SVGCurveLine/>
            </div>  
              
    <section className='solutionsSecCaseStudy '>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    Related Case Studies
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img src={CaseStudy.image}/>
                                <div className='workGridItemHover'>
                                    <div className='workGridItemHoverIn'>
                                        <h3>{CaseStudy.title}</h3>
                                        <h4>{CaseStudy.brand}</h4>
                                        <p>{CaseStudy.department}</p>
                                    </div>
                                </div>
                                </div>
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
        </section>  */}
            <Footer />
        </>
    )
}

export default CaseStudies;
