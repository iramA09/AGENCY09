import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
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
import ourServiesBtn from '../../Assets/Images/icons/ourServiesBtn.png';
import pattern from '../../Assets/Images/icons/pattern.png';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import ryan from '../../Assets/Images/logos/work/ryan.png';
import tataMotors2 from '../../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../../Assets/Images/logos/work/bitsPilani.png';
import starY from '../../Assets/Images/icons/star.png';

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

 

const Content = () => {
  useLenisScroll();


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



        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>

        {/* Work Logos */}
        <section className='hWorkLogos'><div className='container'>
        
            <div className='Heading center HeadingIcon'>
              <h2 className='sizeH1 uppercase'>
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                  Clientele 
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
              </h2>
            </div>
   
            <LogosSlider />

            <div className='btnSpaceEx center'>     
               <Link to="../work/our-clients" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>
        </div></section> 
        {/* Work Logos End */} 

  <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>


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
                <Link to="../work/case-studies" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  







      

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
              <div className='textwithimg'>
              <div className='awardsImg'><img src={testimonial.image} alt='testimonial Logo' /></div>
               
                <div className='awardsData'>
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.designation}</p></div>
              </div>
              <div className='awardsText'><p>{testimonial.eventsText}</p></div>

              </div>
            </div>
          ))}
        </Slider>

        {/* <div className='btnSpaceEx center'>     
            <Link to="#" className="btnDark fontM ripple-button"><span>View All</span></Link>
        </div> */}


        </div></section> 
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
                        <Link to="#" className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 

      <Footer />
    </>
  );
};

export default Content
