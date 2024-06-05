import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useLenisScroll from '../../Hooks/useLenisScroll';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import TechData from './CaseStudiesItems/Tech';
import BrandDesignData from './CaseStudiesItems/BrandDesign';
import ContentData from './CaseStudiesItems/Content';
import MediaData from './CaseStudiesItems/Media';
import ProductionData from './CaseStudiesItems/Production';
import KeywordData from './CaseStudiesItems/Keyword';



import { PiArrowCircleRightThin } from "react-icons/pi";
// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

 

const CaseStudies = () => {
    const location = useLocation();
    useLenisScroll();
    return (
        <>
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
                            <Tab><span>Tech</span></Tab>
                            <Tab><span>Brand Design</span></Tab>
                            <Tab><span>Content</span></Tab>
                            <Tab><span>Media</span></Tab>
                            <Tab><span>Production</span></Tab>
                            <Tab><span>Keyword</span></Tab>
                        </TabList>

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
                            <KeywordData/>
                        </TabPanel>
                        {/* Keyword */}
                    </Tabs>
                    {/* Case Studies End */}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CaseStudies;
