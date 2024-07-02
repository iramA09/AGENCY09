import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import useLenisScroll from '../../Hooks/useLenisScroll';
import Accordion from 'react-bootstrap/Accordion';
import Transitions from '../../Hooks/Transitions';
import RippleButton from '../../Hooks/RippleButton';
import SVGCurveLine from '../../Hooks/SVGCurveLine'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import LogosSlider from '../../Components/LogosSlider';

import { PiStarFourFill } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs End

// Images
import ourServiesBtn from '../../Assets/Images/icons/ourServiesBtn.png';
import pattern from '../../Assets/Images/icons/pattern.png';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import ryan from '../../Assets/Images/logos/work/ryan.png';
import tataMotors2 from '../../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../../Assets/Images/logos/work/bitsPilani.png';
import starY from '../../Assets/Images/icons/star.png';
import corporateWebsite from '../../Assets/Images/corporateWebsite.jpg';

import chatbot from '../../Assets/Images/tools/chatbot.png';
import one_dashboard from '../../Assets/Images/tools/one_dashboard.png';
import ticketing_system from '../../Assets/Images/tools/ticketing_system.png';
import url_builder from '../../Assets/Images/tools/url_builder.png';
import website_audit from '../../Assets/Images/tools/website_audit.png';

import ourwork1 from '../../Assets/Images/work/ourwork-4.jpg';
import ourwork2 from '../../Assets/Images/work/ourwork-1.jpg';
import ourwork3 from '../../Assets/Images/work/ourwork-3.jpg';

import clickHere from '../../Assets/Images/icons/clickHere.png';
// Images end

// toolsSlider 
const toolsSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
 // toolsSlider End


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


//testimonaialSlider
const testimonialSlider = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 7000,
  speed: 700,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
// testimonaialSlider End

 

const BrandDesign = () => {
  useLenisScroll();

//Tools Data
  const toolsData = [
    {
        link: '#',
        image: chatbot,
        titale: 'Chatbot',
        decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },    
    {
        link: '#',
        image: website_audit,
        titale: 'website audit',
        decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },    
    {
        link: '#',
        image: url_builder,
        titale: 'url builder',
        decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },    
    {
        link: '#',
        image: ticketing_system,
        titale: 'ticketing system',
        decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },    
    {
        link: '#',
        image: one_dashboard,
        titale: 'ONE Dashboard',
        decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    }
  ];
//Tools Data End

// Approach Data
const ApproachData = [
    {
      number: '01',
      tag: 'Preparation',
      title: 'User Study',
      text: 'Device Based & Psychological Insights'
    },
    {
      number: '02',
      tag: 'Start',
      title: 'User Study',
      text: 'User Journey & WireFrame'
    },
    {
      number: '03',
      title: 'The User Interface',
      text: 'Design & Proto Type'
    },
    {
      number: '04',
      title: 'Development',
      text: 'Coding'
    },
    {
      number: '05',
      title: 'Quality Check',
      text: 'VAPT - Browsers'
    },
    {
      number: '06',
      title: 'Pre Launch Check Points',
      text: 'Search Related & Auto Responses'
    },
    {
      number: '07',
      tag: 'Finish',
      title: 'Live',
      text: 'Device Based and Psychological Insights '
    },
    {
      number: '08',
      title: 'Maintenance',
      text: 'Device Based and Psychological Insights '
    },
  ];
// Approach Data End


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

// testimonaialSlider
const testimonialData = [
  {
      eventsText: 'We rank AGENCY09’s work very highly, and ultimately chose to continue working with them over the last three years.”',
      name: 'Shuchiraa Rao',
      designation:'Digital Marketing Head',
      image:ryan,
  },
  {
      eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
      name: 'Vinay Dholakia',
      designation:'Head - Digital Marketing & Media',
      image:tataMotors2,
  },
  {
      eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
      name: 'Shuchiraa Rao',
      designation:'Digital Marketing Head',
      image:bitsPilani,
  },
  {
      eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
      name: 'Vinay Dholakia',
      designation:'Head - Digital Marketing & Media',
      image:ryan,
  },
  {
      eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
      name: 'Shuchiraa Rao',
      designation:'Digital Marketing Head',
      image:tataMotors2,
  },   
  {
      eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
      name: 'Vinay Dholakia',
      designation:'Head - Digital Marketing & Media',
      image:bitsPilani,
  }
];
//testimonaialSlider End

  return (
    <>
      <Header />
      <div className="spacer"></div>

        <section className='SolutionsSecAbout'>
        <div className="container">
            <div className='SolutionsRow'>
                <div className='SolutionsCol'>
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Brand Design</span></div>
                    <h1 className='sizeH1 uppercase'>Exceptional<br/>Digital Products</h1>
                    <h3 className='sizeH4 uppercase pt-10 pb-10'>On-Time. On-Budget. On-Point.</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries creators of Logix</p>
                                
                    <div className='btnSpaceM pt-30'>     
                        <RippleButton to="#" className="btnDark fontM"><span>Let’s Talk</span></RippleButton>
                    </div>

                    <div className='trustedBy'>
                        <h3 className='sizeH5'>Trusted By</h3>
                        <ul className='trustedByLogos'>
                            <li><img src={bitsPilani} alt=""/></li>
                            <li><img src={tataMotors2} alt=""/></li>
                            <li><img src={ryan} alt=""/></li>
                            <li><img src={mahindraAccelo} alt=""/></li>
                        </ul>
                    </div>
                </div>
                <div className='SolutionsCol SolutionsColImg'>
                    <div className='RoundIconA RoundIcon blueB'>
                        <span></span>
                    </div>
                    <div className='RoundIconB RoundIcon pinkB'></div>
                    <img src={pattern} alt="pattern" className='pattern' />
                </div>


                <div className='SolutionsColOurServies'>
                    <Link to='#'>
                        <img src={ourServiesBtn} alt="Our Servies" />
                    </Link>
                </div>
            </div>
        </div>
        </section>

        {/* Calculat */}
        <section className='Calculat'>
            <div className='container'>

            {/* Calculat */}
            <div className='CalculatRow'>
                <div className='CalculatCol CalculatColA bounce'>
                <div className='CalculatColIn'><h4>500+</h4><p> Projects<br/> Delivered <PiStarFourFill /></p></div>
                </div>
                <div className='CalculatCol CalculatColB'>
                <div className='CalculatColIn'><h4>11</h4><p>Years <br/>Of Experience <PiStarFourFill /></p></div>
                </div>
                <div className='CalculatCol CalculatColC'>
                <div className='CalculatColIn'><h4>20+</h4><p>Technologies <br/>Supported <PiStarFourFill /></p></div>
                </div>
                <div className='CalculatCol CalculatColD'>
                <div className='CalculatColIn'><h4>20+</h4><p>Tech <br/>Professionals <PiStarFourFill /></p></div>
                </div>
            </div>
            {/* Calculat End */}
            <div className='strokeB'>
                <SVGCurveLine/>
            </div>         
            </div>
        </section>
        {/* Calculat End */}
        
        <section className='solutionsSecServices'>
            <div className='container'>
                
                <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                Amplifying Business Progress<br/>
                    <span className='iconSVG'>
                    <i className='iconF'>
                        <img src={starY} alt='Star Icon' />
                    </i>
                    </span>
                    Through Smart Solutions
                    <span className='iconSVG'>
                    <i className='iconF'>
                        <img src={starY} alt='Star Icon' />
                    </i>
                    </span>
                </h2>
                </div>

                <div className='btnSpaceM pt-30 center pb-40'>     
                    <RippleButton to="#" className="btnBlue fontM"><span>Request a Quote</span></RippleButton>
                </div>



                <div className='solutionsSecServicesFaq'>
                    <h3 className='sizeH5 uppercase bold'>Services</h3>
                    <div className='solutionsSecServicesFaqList'>
                    <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                            <Accordion.Header>Corporate Website</Accordion.Header>
                            <Accordion.Body>
                                <div className='solutionsWrap'>
                                    <div className='solutionsCol'>
                                    <p>Explore our web development expertise to maximize your web presence which can help you captivate the audience by delivering unparalleled web experience</p>
                                    <div className='solutionsWrapTag'>
                                        <ul>
                                            <li><Link>PHP</Link></li>
                                            <li><Link>WordPress</Link></li>
                                            <li><Link>Drupal</Link></li>
                                            <li><Link>AngularJs</Link></li>
                                            <li><Link>NodeJs</Link></li>
                                            <li><Link>Laravel</Link></li>
                                            <li><Link>ReactJs</Link></li>
                                        </ul>
                                    </div>
                                    
                                <div className='btnSpaceM pt-30 '>     
                                    <RippleButton to="#" className="btnBlue fontM"><span>Request a Quote</span></RippleButton>
                                </div>
                                </div>

                                <div className='solutionsCol'>
                                    <img src={corporateWebsite} alt="corporateWebsite" />
                                </div>
                                
                                </div>    
                            </Accordion.Body>
                        </Accordion.Item>
            
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Ecommerce Development</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Web Application</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Mobile Applications</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>ERP Systems</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Software</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>HR Portal</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
                        
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Marketing Automations</Accordion.Header>
                            <Accordion.Body></Accordion.Body>
                        </Accordion.Item>
            
                    </Accordion>

                    </div>
                </div>

            </div>
        </section>

        <section className='solutionsSecTools'>
            <div className='container'>
                
                <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                        TOOLS
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                </h2>
                </div>



            <Slider {...toolsSlider} className='toolsSlider slick-slider'>
            {toolsData.map((tools, index) => (
                <div key={index} className='item'>
                <div className='toolsCol'>
                    <Link to={tools.link}>
                        <div className='toolsImg'><img src={tools.image}/></div>
                        <div className='toolsTitale'>{tools.titale}</div>
                        <div className='textDecoration'><p>{tools.decoration}</p></div>
                        <div className='toolsBtn'><IoIosArrowDroprightCircle /></div>
                    </Link>
                </div>
                </div>
            ))}
            </Slider>

        </div>
        </section>

        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>

        <section className='solutionsSecApproach'>
          <div className='container'>
            <h3 className='sizeH5 uppercase bold'>A09 Approach</h3>
            <div className='solutionsSecApproachList'>
              {ApproachData.reduce((acc, item, index) => {
                if (index % 4 === 0) {
                  acc.push(<ul key={`ul-${index}`} className="solutionsSecApproachListRow">{[]}</ul>);
                }
                const ulIndex = Math.floor(index / 4);
                acc[ulIndex].props.children.push(
                  <li key={index}>
                    <div className='solutionsSecApproachListCol'>
                      <div className='solutionsSecApproachListColNum'><span>{item.number}</span> <span className='solutionsSecApproachListColNumTag'>{item.tag}</span></div>
                      <div className='solutionsSecApproachListColText'>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>    
                    </div>
                  </li>
                );
                return acc;
              }, [])}
            </div>
          </div>
        </section>       



        <section className='solutionsSecCaseStudy'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
            <h3 className='sizeH5 uppercase bold pb-20'>Case studies</h3>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    Lorem ipsum dolor
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
                <RippleButton to="/work" className="btnDark fontM"><span>View All</span></RippleButton>
            </div>

            </div>

            </div>
        </section>  





        {/* Work Logos */}
        <section className='hWorkLogos'><div className='container'>
            {/* <hr className='hrTop'/> */}
            <div className='strokeB hrTop'>
                <SVGCurveLine/>
            </div>
            
            <LogosSlider />

            <div className='strokeB hrBottom'>
                <SVGCurveLine/>
            </div>
        </div></section> 
        {/* Work Logos End */} 



        {/* TESTIMONIALS */}   
        <section className='greenB testimonialSec'>
                <div className='container'>

                <div className='Heading center HeadingIcon'>
                    <h2 className='sizeH1 uppercase'>
                        <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                        TESTIMONIALS
                        <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    </h2>
                </div>


        <Slider {...testimonialSlider} className='testimonialSlider slick-slider'>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className='item'>
              <div className='awardsCol'>
              <div className='awardsText'><p>{testimonial.eventsText}</p></div>
              <div className='textwithimg'>
                <div className='awardsYear'><h5>{testimonial.name}</h5></div>
                <div className='awardsDesignation'><p>{testimonial.designation}</p></div>
                <div className='awardsImg'><img src={testimonial.image} alt='testimonial Logo' /></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className='btnSpaceEx center'>     
            <RippleButton to="#" className="btnDark fontM"><span>View All</span></RippleButton>
        </div>


        </div></section> 
        {/* TESTIMONIALS End */} 

        

        {/* Free Audit */}   
        <section className='pinkB freeAuditSec'><div className='container'>
          <div className='freeAuditSecRow'>
                <div className='freeAuditSecCol'>
                    <h3 className='sizeH5 uppercase bold pb-20 white'>Free Audit</h3>
                    <h2 className='sizeH1 uppercase white'>Uncover the untapped potential of your website</h2>
                </div>

                <div className='freeAuditSecCol'>
                    <Link to=''>
                      <img src={clickHere} alt='Click Here' />
                    </Link>
                </div>
            </div>
        </div></section> 
        {/* Free Audit End */} 


        
      <section className='faqContent'><div className='container'>
        <h2 className='sizeH5 uppercase bold pb-20'>FAQS</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>4. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>5. Branding: Lorem Ipsum is simply dummy text</Accordion.Header>
            <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
      </div></section>


       {/* Free Audit */}   
       <section className='yellowB center'><div className='container'>
                <div className='Heading  HeadingIcon'>
                    <h2 className='sizeH1 uppercase'><GoNorthStar className='pink' /> Lorem ipsum dolor sit amet, <GoNorthStar className='pink' /> <br/> consectetur adipiscing elit?</h2>

                        
                    <div className='btnSpaceEx center'>     
                        <RippleButton to="#" className="btnBlue fontM"><span>Request a Quote</span></RippleButton>
                    </div>
                </div>
        </div></section> 
        {/* Free Audit End */} 


      <Footer />
    </>
  );
};

export default BrandDesign
