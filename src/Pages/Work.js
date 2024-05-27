import React from 'react'
import { Link } from 'react-router-dom'
import Transitions from '../Hooks/Transitions';
import useLenisScroll from '../Hooks/useLenisScroll';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RippleButton from '../Hooks/RippleButton';
import { PiArrowCircleRightThin } from "react-icons/pi";
import ourwork1 from '../Assets/Images/work/ourwork-1.jpg';
import ourwork2 from '../Assets/Images/work/ourwork-2.jpg';
import ourwork3 from '../Assets/Images/work/ourwork-3.jpg';
import ourwork4 from '../Assets/Images/work/ourwork-4.jpg';

import RGI from '../Assets/Images/logos/work/RGI.png';
import TataMotors from '../Assets/Images/logos/work/TataMotors.png';
import Samsonite from '../Assets/Images/logos/work/Samsonite.png';
import StarWars from '../Assets/Images/logos/work/StarWars.png';
import LakmeFashionWeek from '../Assets/Images/logos/work/LakmeFashionWeek.png';
import TommyHilfiger from '../Assets/Images/logos/work/TommyHilfiger.png';

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs End

// Tech Logos
const techLogos = [
  {src: RGI,},
  {src: TataMotors,},
  {src: Samsonite,},
  {src: StarWars,},
  {src: LakmeFashionWeek,},
  {src: TommyHilfiger,},
  {src: RGI,},
  {src: TataMotors,},
  {src: Samsonite,},
  {src: StarWars,},
  {src: LakmeFashionWeek,},
  {src: TommyHilfiger,},
  {src: RGI,},
  {src: TataMotors,},
  {src: Samsonite,},
  {src: StarWars,},
  {src: LakmeFashionWeek,},
  {src: TommyHilfiger,},
];
// Tech Logos

// Array of work items
export const workItems = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply dummy text of the printing 2',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork1,
    link: '/'
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork2,
    link: '/'
  },
  {
    id: 3,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork3,
    link: '/'
  },
  {
    id: 4,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork4,
    link: '/'
  },
  
  {
    id: 5,
    title: 'Lorem Ipsum is simply dummy text of the printing',
    tags: [
      { name: 'Brand Strategy', link: '/' },
      { name: 'Print AD', link: '/' },
      { name: 'Digital', link: '/' }
    ],
    image: ourwork4,
    link: '/'
  },
];

const Work = () => {
  useLenisScroll();

  return (
    <>
      <Header />
      <Transitions>
      <div className="spacer"></div>
      <section><div className='container'>
        <div className='aboutS'>  
        <div className='aboutScol'>
        <h1 className='sizeH1 uppercase'>Our WORK</h1>  
        <div className='arrowRightH'><PiArrowCircleRightThin /></div>
        </div>      
        <div className='aboutScol'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
        </div> 
        </div> 
      </div></section>
    


      
      <section className='workTabs'><div className='container'>
      <Tabs>
            <TabList Id={'tabListA'}>
              <Tab><span>Case Studies</span></Tab> <span className='lineA' />
              <Tab><span>Our Clients</span></Tab>
            </TabList>

          {/* Case Studies */}
            <TabPanel>
              <Tabs>
                <TabList >
                  <Tab><span>Tech</span></Tab>
                  <Tab><span>Brand Design</span></Tab>
                  <Tab><span>Content</span></Tab>
                  <Tab><span>Media</span></Tab>
                  <Tab><span>Production</span></Tab>
                </TabList>

                {/* Tech */}
                <TabPanel>
                  <section className='ourWorkHm ourWork'>
                      <div className='workGrid'>
                        {workItems.map((item) => (
                          <div className='workGridItem' key={item.id}>
                            <div className='workGridItemLink'>
                              <Link to={item.link} className='workGridItemLink'>
                                <div className='cursor09'></div>
                                <div className='workGridItemImg'>
                                  <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='workGridItemText'>
                                  <h3>{item.title}</h3>
                                </div>
                              </Link>
                              <div className='workGridItemTags'>
                                {item.tags.map((tag, index) => (
                                  <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                  </section>
                </TabPanel>
                {/* Tech */}

                {/* Brand Design */}
                <TabPanel>
                  <section className='ourWorkHm ourWork'>
                      <div className='workGrid'>
                        {workItems.map((item) => (
                          <div className='workGridItem' key={item.id}>
                            <div className='workGridItemLink'>
                              <Link to={item.link} className='workGridItemLink'>
                                <div className='cursor09'></div>
                                <div className='workGridItemImg'>
                                  <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='workGridItemText'>
                                  <h3>{item.title}</h3>
                                </div>
                              </Link>
                              <div className='workGridItemTags'>
                                {item.tags.map((tag, index) => (
                                  <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                  </section>
                </TabPanel>
                {/* Brand Design */}

                {/* Content */}
                <TabPanel>
                  <section className='ourWorkHm ourWork'>
                      <div className='workGrid'>
                        {workItems.map((item) => (
                          <div className='workGridItem' key={item.id}>
                            <div className='workGridItemLink'>
                              <Link to={item.link} className='workGridItemLink'>
                                <div className='cursor09'></div>
                                <div className='workGridItemImg'>
                                  <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='workGridItemText'>
                                  <h3>{item.title}</h3>
                                </div>
                              </Link>
                              <div className='workGridItemTags'>
                                {item.tags.map((tag, index) => (
                                  <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                  </section>
                </TabPanel>
                {/* Content */}

                {/* Media */}
                <TabPanel>
                  <section className='ourWorkHm ourWork'>
                      <div className='workGrid'>
                        {workItems.map((item) => (
                          <div className='workGridItem' key={item.id}>
                            <div className='workGridItemLink'>
                              <Link to={item.link} className='workGridItemLink'>
                                <div className='cursor09'></div>
                                <div className='workGridItemImg'>
                                  <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='workGridItemText'>
                                  <h3>{item.title}</h3>
                                </div>
                              </Link>
                              <div className='workGridItemTags'>
                                {item.tags.map((tag, index) => (
                                  <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                  </section>
                </TabPanel>
                {/* Media */}
                
                {/* Production */}
                <TabPanel>
                  <section className='ourWorkHm ourWork'>
                      <div className='workGrid'>
                        {workItems.map((item) => (
                          <div className='workGridItem' key={item.id}>
                            <div className='workGridItemLink'>
                              <Link to={item.link} className='workGridItemLink'>
                                <div className='cursor09'></div>
                                <div className='workGridItemImg'>
                                  <img src={item.image} alt={item.title}/>
                                </div>
                                <div className='workGridItemText'>
                                  <h3>{item.title}</h3>
                                </div>
                              </Link>
                              <div className='workGridItemTags'>
                                {item.tags.map((tag, index) => (
                                  <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                  </section>
                </TabPanel>
                {/* Production */}
             
              </Tabs>
            </TabPanel>
          {/* Case Studies End */}

          {/* Our Clients */}
               <TabPanel>
              <Tabs>
                <TabList >
                  <Tab><span>Tech</span></Tab>
                  <Tab><span>Brand Design</span></Tab>
                  <Tab><span>Content</span></Tab>
                  <Tab><span>Media</span></Tab>
                  <Tab><span>Production</span></Tab>
                </TabList>

                {/* Tech */}
                <TabPanel>
                  <section className='ourWorkHm ourWork'>
                    <div className='WorkLogosRow'>
                      {techLogos.map((image, index) => (
                        <div className='WorkLogosCol' key={index}>
                          <Link>
                            <img src={image.src}/>
                          </Link>
                        </div>
                      ))}
                    </div>    
                  </section>
                </TabPanel>
                {/* Tech */}

                {/* Brand Design */}
                <TabPanel>
                </TabPanel>
                {/* Brand Design */}

                {/* Content */}
                <TabPanel>
                </TabPanel>
                {/* Content */}

                {/* Media */}
                <TabPanel>
                </TabPanel>
                {/* Media */}
                
                {/* Production */}
                <TabPanel>
                </TabPanel>
                {/* Production */}
             
              </Tabs>
            </TabPanel>
          {/* Our Clients End */}

      </Tabs>
      </div></section>




      </Transitions>
      <Footer />
    </>
  )
}

export default Work
