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

 

const Production = () => {
  useLenisScroll();




// Services Data
  const servicesData = [
    {
      key: "0",
      header: "Corporate Videos",
      description: "Capture the essence of your brand and communicate your message effectively with our corporate video production services. From company profiles to internal communications, we help you tell your story with clarity and impact.",
      tags: [],
    },
    {
      key: "1",
      header: "Reels",
      description: "Make a lasting impression on social media with engaging and visually stunning reels. Whether it's showcasing products, highlighting events, or sharing behind-the-scenes glimpses, we create reels that captivate and inspire.",
      tags: [],
    },
    {
      key: "2",
      header: "After Movie",
      description: "Relive the excitement and energy of your events with our after movie production services. From conferences to festivals, we capture the highlights and emotions of your event, creating compelling videos that resonate with your audience.",
      tags: [],
    },
    {
      key: "3",
      header: "Product Video",
      description: "Showcase your products in the best light with our product video production services. From explainer videos to demonstrations, we create visually appealing and informative videos that drive engagement and conversions.",
      tags: [],
    },
    {
      key: "4",
      header: "Employer Branding:",
      description: "Attract top talent and showcase your company culture with compelling employer branding videos. We highlight what makes your workplace unique and desirable, helping you stand out as an employer of choice.",
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
    question: "1. What types of video production services does AGENCY09 offer?",
    answer: "AGENCY09 offers a wide range of video production services including corporate videos, reels, after movies, product videos, and employer branding videos. Each service is tailored to meet your specific needs and objectives."
  },
  {
    key: "1",
    question: "2. How do you ensure the quality of your video productions?",
    answer: "We ensure the highest quality by using state-of-the-art equipment, employing experienced professionals, and adhering to industry best practices. Our team is dedicated to delivering visually stunning and engaging videos that align with your brand's vision and goals."
  },
  {
    key: "2",
    question: "3. Can you help with scriptwriting and storyboarding?",
    answer: "Yes, we offer comprehensive pre-production services including scriptwriting, storyboarding, and concept development. Our creative team works closely with you to craft a compelling narrative that effectively communicates your message."
  },
  {
    key: "3",
    question: "4. How long does it typically take to produce a video?",
    answer: "The production timeline varies depending on the complexity and scope of the project. A simple corporate video might take a few weeks, while a more complex production like an after movie or product video could take longer. We work diligently to meet your deadlines while maintaining high-quality standards."
  },
  {
    key: "4",
    question: "What is an after movie, and why should I consider producing one?",
    answer: "An after movie is a highlight video that captures the essence and energy of an event. It’s a great way to relive the experience, share it with attendees, and promote future events. After movies are especially effective for conferences, festivals, and corporate events."
  },
  {
    key: "5",
    question: "6. How do reels differ from other types of video content?",
    answer: "Reels are short, engaging videos designed specifically for social media platforms. They are typically 15-60 seconds long and are meant to capture attention quickly. Reels are ideal for showcasing products, events, or behind-the-scenes moments in a visually appealing way."
  },
  {
    key: "6",
    question: "7.Can you create videos in different styles and formats?",
    answer: "Absolutely! We can produce videos in a variety of styles and formats, including animated videos, live-action videos, and mixed media. Whether you need a professional corporate video or a dynamic social media reel, we have the expertise to bring your vision to life."
  },
  {
    key: "7",
    question: "8. What is employer branding video production, and how can it benefit my company?",
    answer: "Employer branding videos showcase your company culture, values, and work environment. These videos help attract top talent by providing a glimpse into what makes your company a great place to work. They can be used in recruitment campaigns, on your careers page, and in onboarding materials."
  },
  {
    key: "8",
    question: "9. How much does video production cost?",
    answer: "The cost of video production varies depending on the project's scope, length, complexity, and other factors. Contact us for a personalized quote based on your specific needs and budget. We aim to deliver high-quality video content that fits within your financial parameters."
  },
  {
    key: "9",
    question: "10. How can I get started with AGENCY09's video production services?",
    answer: "Getting started is easy! Reach out to us through our contact page or request a quote. We'll schedule a consultation to discuss your vision, goals, and requirements, and then develop a tailored plan to bring your project to life."
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
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Production</span></div>
                    <h1 className='sizeH1 uppercase'>Lights, Camera, Action: Unleash Your Story</h1>
                    <p>Creativity meets Execution. We specialize in bringing your vision to life through captivating and high-quality video production services. From corporate videos to product showcases, we're here to elevate your brand's storytelling and engage your audience like never before.</p>
                                
               

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





    

        
        <section className=''>
          <div className='container'>

          <div className='Heading center HeadingIcon'>
              <h2 className='sizeH1 uppercase'>
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                  Showreel
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
              </h2>
          </div>

      </div></section>



        
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
                  <Accordion>
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


        <div className='container'> <hr className='hrTop'/> </div>

        {/* Clients */}
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
               <Link to="#" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>
        </div></section> 
        {/* Clients End */} 


        <div className='container'> <hr className='hrTop'/> </div>

        

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
                    <h2 className='sizeH3 uppercase'>Interested in optimizing your tech infrastructure? </h2>
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

export default Production
