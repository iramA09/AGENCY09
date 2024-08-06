import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import StartAProjectFormPopup from '../../Components/Forms/StartAProjectFormPopup';
import Testimonias from '../../Components/Testimonias';

import useLenisScroll from '../../Hooks/useLenisScroll';
import Accordion from 'react-bootstrap/Accordion';
import SVGCurveLine from '../../Hooks/SVGCurveLine'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import LogosSlider from '../../Components/LogosSlider';
import { useMediaQuery } from 'react-responsive';

import { PiStarFourFill } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Images
import ourServiesBtn from '../../Assets/Images/icons/ourServiesBtn.webp';
import pattern from '../../Assets/Images/icons/patternContent.webp';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import ryan from '../../Assets/Images/logos/work/ryan.png';
import tataMotors2 from '../../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../../Assets/Images/logos/work/bitsPilani.png';
import starY from '../../Assets/Images/icons/star.webp';
import godrejlaffaire from '../../Assets/Images/work/Laffaire.webp';
import RGI from '../../Assets/Images/work/rgi.webp';
import lakme from '../../Assets/Images/work/lakme.webp';

import adityabirla from '../../Assets/Images/logos/work/BFSI/aditya-birla.png';
import samsonite from '../../Assets/Images/logos/work/retail_fmcg/samsonite.png';
import lakmefashionweek from '../../Assets/Images/logos/work/events/lakme-fashion-week.png';
import disney from '../../Assets/Images/logos/work/media_entertainment_gaming/disney.png';

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
 

const Content = () => {
  useLenisScroll();
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);


// Services Data
  const servicesData = [
    {
      key: "0",
      header: "Mainline Advertising",
      description: "Focus on reaching your target audience through traditional mediums such as television, radio, print, and outdoor advertising. We create compelling campaigns that capture attention and drive results.",
      tags: [],
    },
    {
      key: "1",
      header: "Social Communication",
      description: "Harness the power of social media. Develop engaging content and strategic campaigns to connect with your audience on platforms like Facebook, Instagram, Twitter, LinkedIn and Youtube, maximizing brand visibility and engagement.",
      tags: [],
    },
    {
      key: "2",
      header: "HR Communication & Employer Branding",
      description: "Strengthen your employer brand and enhance internal communication with our HR communication services. From employee engagement initiatives to employer branding campaigns - attract, retain, and motivate top talent.",
      tags: [],
    },
    {
      key: "3",
      header: "Channel and Distribution Communication",
      description: "Optimize your channel and distribution communication strategies to drive sales and enhance partner relationships. Develop targeted communication plans and collateral to support your distribution channels and maximize market penetration.",
      tags: [],
    },
    {
      key: "4",
      header: "Buildings IP’s",
      description: "Unlock the potential of your brand through the creation of innovative content and digital-based intellectual properties (IP's). We specialize in developing unique and engaging content assets that resonate with your audience and reinforce your brand's identity",
      tags: [],
    },
    {
      key: "5",
      header: "Amplifying Events",
      description: "Elevate your brand's presence at events with our expert event coverage and content creation services. We specialize in capturing the essence of your events through compelling photography, videography, and live social media coverage.",
      tags: [],
    },
  ];
// Services Data



//CaseStudy Data
const CaseStudyData = [
  {
    id: 6,
    title: 'Unearthing India’s Next Big Content Creator with Godrej L’Affaire Select',
    tags: [
        { name: 'Brand Strategy', },
        { name: 'Community Management', },
        { name: 'IP Creation', }
    ],
    image: godrejlaffaire,
    link: '/work/case-studies/godrej-laffaire',
    brand: "Godrej Laffaire",
    department: 'Content'
},

{
    id: 9,
    title: 'Innovative Product Communication for Enhanced Brand Visibility',
    tags: [
        { name: 'Product Development', link: '' },
        { name: 'Multi-Channel Communication', link: '' }
    ],
    image: RGI,
    link: '/work/case-studies/product-communication-for-reliance-general-insurance',
    brand: "Product Communication for Reliance General Insurance",
    department: 'Content'
},
{
    id: 10,
    title: 'Capturing the Glamour: Content Creation and Event Coverage for Lakme Fashion Week',
    tags: [
        { name: 'Content Creation', link: '' },
        { name: 'Event Coverage', link: '' }
    ],
    image: lakme,
    link: '/work/case-studies/lakme-fashionweek',
    brand: "Lakme Fashion Week",
    department: 'Content'
},

  ];
//CaseStudy Data End
 
// FAQS
const faqsData = [
  {
    key: "0",
    question: "1. What sets AGENCY09 apart in the realm of brand communication?",
    answer: "AGENCY09 distinguishes itself through a unique blend of creativity and strategic thinking. We leverage our expertise to craft communication solutions that not only captivate audiences but also drive tangible results for our clients."
  },
  {
    key: "1",
    question: "2. What types of services does AGENCY09 offer in brand communication?",
    answer: "AGENCY09 offers a comprehensive range of services, including mainline advertising, social communication, HR communication & employer branding, channel and distribution communication, event coverage and content creation, and the creation of various content and digital-based intellectual properties (IP's)."
  },
  {
    key: "2",
    question: "3. How does AGENCY09 approach event coverage and content creation?",
    answer: "When it comes to event coverage and content creation, we prioritize capturing the essence of each event through compelling photography, videography, and live social media coverage. Our goal is to create engaging event highlights and post-event content that resonates with your audience long after the event has ended."
  },
  {
    key: "3",
    question: "4. What industries does AGENCY09 serve?",
    answer: "AGENCY09 serves clients across a diverse range of industries, including but not limited to technology, healthcare, consumer goods, finance, and entertainment. Our adaptable approach allows us to tailor our services to meet the unique needs of each industry."
  },
  {
    key: "4",
    question: "5. How can AGENCY09 help my brand stand out in a crowded marketplace?",
    answer: "AGENCY09 specializes in developing impactful brand communication strategies that cut through the noise and resonate with your target audience. Whether it's through creative advertising campaigns, engaging social media content, or immersive event experiences, we're committed to helping your brand stand out and make a lasting impression."
  },
  {
    key: "5",
    question: "6. What is the process for requesting a quote from AGENCY09?",
    answer: "Requesting a quote from AGENCY09 is simple. Just reach out to us through our contact page or email address, and one of our team members will be in touch to discuss your specific needs and provide you with a personalized quote tailored to your project requirements."
  },
  {
    key: "6",
    question: "7. Can I see examples of AGENCY09's past work?",
    answer: "Absolutely! You can explore our case studies section to see real-world examples of how we've helped our clients achieve their goals through our brand communication solutions. From successful advertising campaigns to impactful employer branding initiatives, our case studies showcase the diverse range of industries and challenges we've tackled."
  },
  {
    key: "7",
    question: "8. How does AGENCY09 ensure consistency across different communication channels?",
    answer: "At AGENCY09, we understand the importance of consistency in brand communication. That's why we develop comprehensive brand guidelines for our clients, which outline specifications for logos, color palettes, typography, and messaging. These guidelines ensure that your brand maintains a cohesive and recognizable identity across all touchpoints."
  },
];
// FAQS End

 

  return (
    <>

    <Helmet>
      <title>Content Marketing Services | Influencer Marketing - AGENCY09</title>
      <meta name="robots" content="index, follow"/> 

      <meta name="description" content="We provide content creation services for all websites. We modify content, and approach everyday social media copy in order to solve challenges."/>
      <link rel="canonical" href="https://www.agency09.in/solutions/content"/>

      <meta property="og:title" content="Content Marketing Services | Influencer Marketing - AGENCY09"/> 
      <meta property="og:description" content="We provide content creation services for all websites. We modify content, and approach everyday social media copy in order to solve challenges."/> 
      <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
      <meta property="og:type" content="website"/> 


      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@AGENCY09"/> 
      <meta name="twitter:creator" content="@AGENCY09"/> 
      <meta name="twitter:url" content="https://www.agency09.in/solutions/content"/> 
      <meta name="twitter:description" content="We provide content creation services for all websites. We modify content, and approach everyday social media copy in order to solve challenges."/> 
      <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 
          </Helmet>



      <Header />
      <div className="spacer"></div>

        <section className='SolutionsSecAbout'>
        <div className="container">
            <div className='SolutionsRow'>
                <div className='SolutionsCol'>
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Content</span></div>
                    <h1 className='sizeH1 uppercase'>Transforming Communication: Where Creativity Meets Strategy</h1>
                    <p>We believe that communication is more than just conveying a message—it's about creating connections, sparking conversations, and driving meaningful actions. With a blend of creativity and strategic thinking, we specialize in crafting communication solutions that resonate with your audience, leaving a lasting impact on your brand's journey.
                    </p>
                                
     

                    <div className='trustedBy'>
                        <h3 className='sizeH5'>Trusted By</h3>
                        <ul className='trustedByLogos'>
                            <li><img src={adityabirla} alt=""/></li>
                            <li><img src={samsonite} alt=""/></li>
                            <li><img src={lakmefashionweek} alt=""/></li>
                            <li><img src={disney} alt=""/></li>
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

        
        <section className='solutionsSecServices' id='services'>
            <div className='container'>

              <div className='solutionsSecServicesFaq'>


              <div className='Heading center HeadingIcon pb-20'>
                  <h2 className='sizeH1 uppercase'>
                      <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                      Services
                      <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                  </h2>
                </div>



                <div className='solutionsSecServicesFaqList'>
                  <Accordion >
                    {servicesData.map(service => (
                      <Accordion.Item eventKey={service.key} key={service.key}>
                        <Accordion.Header>{service.header}</Accordion.Header>
                        <Accordion.Body>
                          <div className='solutionsWrap'>
                            <div className='solutionsCol'>
                              <p>{service.description}</p>
                              <div className='solutionsWrapTag'>
                                <ul>
                                  {service.tags.map((tag, index) => (
                                    <li key={index}><Link>{tag}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>

            </div>
        </section>



       

  
        <section className='solutionsSecCaseStudy'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    Case studies
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
                                </div></div>
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
                <Link to="../work/case-studies" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  

        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>

        {/* Work Logos */}
            <LogosSlider />
        {/* Work Logos End */} 





            {/* TESTIMONIALS */}   
            <Testimonias/>
        {/* TESTIMONIALS End */} 
        
 

      {/* FAQ */}
      <section className='faqContent'>
        <div className='container'>

        <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
          <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
              FAQs
          <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
        </h2></div>
          <Accordion>
            {faqsData.map(faq => (
              <Accordion.Item eventKey={faq.key} key={faq.key}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
      {/* FAQ */}

      {/* Business  */}   
      <section className='yellowB center getSolutions'><div className='container'>
                <div className='Heading  HeadingIcon'>
                    <h2 className='sizeH3 uppercase'>Ready to take your brand communication to the next level? <br/>Contact us today for a personalized quote </h2>

                        
                    <div className='pt-30 center'>     
                    <Link onClick={() => { setOpenModalStartAProjectFormPopup(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 

      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup} defaultService="Content" />}

    </>
  );
};

export default Content
