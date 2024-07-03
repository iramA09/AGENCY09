import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import StartAProjectFormPopup from '../../Components/Forms/StartAProjectFormPopup';

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
import pattern from '../../Assets/Images/icons/patternTech.jpg';
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

 

const Keyword = () => {
  useLenisScroll();
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);




// Services Data
  const servicesData = [
    {
      key: "0",
      header: "SEO",
      description: "Optimize your website for search engines. We conduct thorough keyword research, on-page and off-page optimization, and technical SEO to ensure your site ranks higher and attracts relevant traffic.",
      tags: [],
    },
    {
      key: "1",
      header: "ORM (Online Reputation Management)",
      description: "Protect and enhance your brand's online reputation with our ORM services. We monitor, manage, and respond to online reviews and mentions, ensuring a positive and trustworthy image for your business.",
      tags: [],
    },
    {
      key: "2",
      header: "GMB (Google My Business)",
      description: "Enhance your local search presence with our Google My Business optimization services. We manage your GMB profile to ensure accurate information, engaging content, and positive reviews, helping you attract local customers.",
      tags: [],
    },
    {
      key: "3",
      header: "GA4 Integrations",
      description: "Leverage the power of Google Analytics 4 with our seamless integration services. We set up and configure GA4 to provide you with actionable insights into your website's performance and user behavior, enabling data-driven decision-making.",
      tags: [],
    },
    {
      key: "4",
      header: "Local Listings",
      description: "Ensure your business appears in local search results with our local listings management services. We optimize your business information across various online directories to improve your visibility and attract local customers.",
      tags: [],
    },
    {
      key: "5",
      header: "Digital PR",
      description: "Build authority and drive traffic with our digital PR services. We create and distribute high-quality content to relevant online publications and influencers, enhancing your brand's visibility and reputation.",
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
    question: "1. What is SEO, and why is it important for my business?",
    answer: "SEO, or search engine optimization, is the process of improving your website's visibility on search engines like Google. It's essential for driving organic traffic, increasing online visibility, and attracting potential customers who are actively searching for your products or services."
  },
  {
    key: "1",
    question: "2. What does AGENCY09's SEO service include?",
    answer: "Our SEO services include keyword research, on-page and off-page optimization, technical SEO, content creation, link building, and performance tracking. We tailor our approach to meet your specific business needs and goals."
  },
  {
    key: "2",
    question: "3. How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy, and results can vary based on factors like industry competitiveness and current website performance. Typically, you can expect to see significant improvements within 3 to 6 months of implementing our SEO strategies."
  },
  {
    key: "3",
    question: "4. What is ORM, and how can it benefit my business?",
    answer: "ORM, or Online Reputation Management, involves monitoring and managing your brand's online presence to ensure a positive image. It helps build trust with customers, mitigate negative feedback, and enhance your overall reputation."
  },
  {
    key: "4",
    question: "5. How does Google My Business optimization help my local business?",
    answer: "Optimizing your Google My Business profile improves your visibility in local search results, making it easier for potential customers to find and engage with your business. It includes managing your business information, responding to reviews, and posting updates."
  },
  {
    key: "5",
    question: "6. What are GA4 Integrations, and why should I use them?",
    answer: "GA4 (Google Analytics 4) is the latest version of Google's analytics platform, providing advanced insights into user behavior and website performance. Integrating GA4 helps you make data-driven decisions to improve your digital marketing strategies."
  },
  {
    key: "6",
    question: "7. Why are local listings important for my business?",
    answer: "Local listings ensure your business information is accurate and consistent across various online directories. This improves your local search visibility, helps customers find you easily, and enhances your credibility."
  },
  {
    key: "7",
    question: "8. How can digital PR improve my SEO efforts?",
    answer: "Digital PR involves creating and distributing content to high-authority websites and influencers, generating backlinks and increasing your website's authority. This not only enhances your SEO but also drives referral traffic and builds brand recognition."
  },
  {
    key: "8",
    question: "9. Do you provide customized SEO strategies for different industries?",
    answer: "Yes, we tailor our SEO strategies to meet the unique needs and challenges of various industries. Our approach is customized based on your business goals, target audience, and competitive landscape."
  },
  {
    key: "9",
    question: "10. How can I get started with AGENCY09's SEO services?",
    answer: "To get started, simply contact us to schedule a consultation. We'll discuss your business goals, assess your current SEO performance, and develop a customized strategy to help you achieve your objectives."
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
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Keyword</span></div>
                    <h1 className='sizeH1 uppercase'>Boost Your Online Visibility</h1>
                    <p>Empower your online presence with comprehensive search engine optimization strategies. Leverage cutting-edge techniques and data-driven insights to enhance your visibility, drive organic traffic, and achieve sustainable growth in the digital world.</p>

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




        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>

        {/* Work Logos */}
            <LogosSlider />
        {/* Work Logos End */} 

        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>



      {/* FAQ */}
      <section className='faqContent'>
        <div className='container'>

        <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
        FAQs
    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
  </h2></div>          <Accordion>
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
                    <h2 className='sizeH3 uppercase'>Ready to elevate your digital presence? <br/> Contact us today for a personalized quote </h2>

                        
                    <div className='pt-30 center'>     
                    <Link onClick={() => { setOpenModalStartAProjectFormPopup(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 

      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup} defaultService="Keyword" />}

    </>
  );
};

export default Keyword
