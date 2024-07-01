import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import GetQuote from '../../Components/Forms/GetQuote';

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

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs End

// Images
import ourServiesBtn from '../../Assets/Images/icons/ourServiesBtn.png';
import pattern from '../../Assets/Images/icons/patternMedia.jpg';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import ryan from '../../Assets/Images/logos/work/ryan.png';
import tataMotors2 from '../../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../../Assets/Images/logos/work/bitsPilani.png';
import starY from '../../Assets/Images/icons/star.png';
import ourwork1 from '../../Assets/Images/work/ourwork-4.jpg';
import ourwork2 from '../../Assets/Images/work/ourwork-1.jpg';
import ourwork3 from '../../Assets/Images/work/ourwork-3.jpg';


// Partners
import GooglePremierPartner from '../../Assets/Images/logos/partners/GooglePremierPartner.png';
import MetaVerifiedPartner from '../../Assets/Images/logos/partners/MetaVerifiedPartner.png';
import LinkedInMarketingPartner from '../../Assets/Images/logos/partners/LinkedInMarketingPartner.png';
import TwitterAdPartner from '../../Assets/Images/logos/partners/TwitterAdPartner.png';
import SnapchatCertifiedPartner from '../../Assets/Images/logos/partners/SnapchatCertifiedPartner.png';
import AmazonAdvertisingPartner from '../../Assets/Images/logos/partners/AmazonAdvertisingPartner.png';
import HubSpotAgencyPartner from '../../Assets/Images/logos/partners/HubSpotAgencyPartner.png';
import MicrosoftAdvertisingPartner from '../../Assets/Images/logos/partners/MicrosoftAdvertisingPartner.png';
// Partners End


// Platforms
import Meta from '../../Assets/Images/logos/platforms/Meta.png';
import LinkedIn from '../../Assets/Images/logos/platforms/LinkedIn.png';
import YouTube from '../../Assets/Images/logos/platforms/YouTube.png';
import GoogleAds from '../../Assets/Images/logos/platforms/GoogleAds.png';
import Twitter from '../../Assets/Images/logos/platforms/Twitter.png';
import Snapchat from '../../Assets/Images/logos/platforms/Snapchat.png';
import Pinterest from '../../Assets/Images/logos/platforms/Pinterest.png';
import MicrosoftAdvertising from '../../Assets/Images/logos/platforms/MicrosoftAdvertising.png';
import AmazonAdvertising from '../../Assets/Images/logos/platforms/AmazonAdvertising.png';
import Taboola from '../../Assets/Images/logos/platforms/Taboola.png';
import Outbrain from '../../Assets/Images/logos/platforms/Outbrain.png';
import SpotifyAdStudio from '../../Assets/Images/logos/platforms/SpotifyAdStudio.png';
import QuoraAds from '../../Assets/Images/logos/platforms/QuoraAds.png';
import RedditAds from '../../Assets/Images/logos/platforms/RedditAds.png';
// Platforms End



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

 

const Media = () => {
  useLenisScroll();
  const [OpenModalGetQuote, setOpenModalGetQuote] = React.useState(false);



// Calculat Data
const calculatData = [
  {
    key: "A",
    number: "500+",
    description: "Projects<br/> Delivered",
  },
  {
    key: "B",
    number: "11",
    description: "Years <br/>Of Experience",
  },
  {
    key: "C",
    number: "20+",
    description: "Technologies <br/>Supported",
  },
  {
    key: "D",
    number: "20+",
    description: "Tech <br/>Professionals",
  }
];
// Calculat Data End

// Services Data
  const servicesData = [
    {
      key: "0",
      header: "Performance Marketing",
      description: "Our data-driven approach ensures that every campaign is optimized for maximum ROI, driving measurable results and tangible business growth. From precise audience targeting to continuous optimization, we empower you to achieve your marketing objectives efficiently and effectively.",
      tags: [],
    },
    {
      key: "1",
      header: "Lead Generation",
      description: "Generate high-quality leads that are primed for conversion. Leveraging advanced targeting techniques and compelling messaging, we capture the interest of your target audience and guide them seamlessly through the conversion funnel. With our performance-driven approach, you can expect a steady flow of leads that fuel your sales pipeline and drive business growth.",
      tags: [],
    },
    {
      key: "2",
      header: "Conversion Campaigns",
      description: "Turn prospects into customers and drive meaningful actions. Whether it's making a purchase, signing up for a newsletter, or downloading an app, we craft campaigns that inspire action and deliver tangible results. Through strategic messaging, creative assets, and continuous optimization, we help you achieve your conversion goals and maximize ROI.",
      tags: [],
    },
    {
      key: "3",
      header: "App Downloads",
      description: "Boost visibility and drive installations for your mobile app. Using targeted advertising and app promotion strategies, we reach your ideal audience and encourage them to download and engage with your app. From driving app installs to increasing user retention, we help you unlock the full potential of your mobile application and achieve success in the competitive app marketplace.",
      tags: [],
    },
    {
      key: "4",
      header: "Influencer Marketing",
      description: "Amplify your brand message and reach a wider audience authentically. By partnering with relevant influencers in your industry, we create genuine connections with your target audience and drive engagement and conversions. From product endorsements to sponsored content, we leverage the influence of trusted voices to elevate your brand's presence and impact.",
      tags: [],
    },
    {
      key: "5",
      header: "Humane Reviews",
      description: "Build trust and credibility with your audience. We facilitate genuine customer feedback and reviews that highlight the positive aspects of your products or services. By showcasing real experiences and testimonials, we create a compelling narrative that resonates with potential customers and drives conversions.",
      tags: [],
    },
    {
      key: "6",
      header: "Store Walk-ins",
      description: "Increase foot traffic to your physical locations. Through targeted digital campaigns and location-based targeting, we drive local customers to your stores and encourage them to make purchases. Whether it's promoting exclusive offers or highlighting store events, we help you create engaging experiences that drive real-world visits and sales.",
      tags: [],
    },
    {
      key: "7",
      header: "Video Views",
      description: "Capture audience attention and drive engagement. Whether it's on social media platforms or video advertising networks, we create compelling video content that resonates with your audience and drives views and interactions. From brand storytelling to product demonstrations, we help you leverage the power of video to increase brand awareness and drive conversions.",
      tags: [],
    }
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
    question: "1. What types of results can I expect from performance marketing campaigns?",
    answer: "The results of performance marketing campaigns vary depending on your goals and objectives. Common outcomes include increased website traffic, lead generation, conversions, app downloads, and sales. Our team works closely with you to define clear KPIs and optimize campaigns for maximum performance."
  },
  {
    key: "1",
    question: "2. How do you measure the success of performance marketing campaigns?",
    answer: "We measure the success of performance marketing campaigns using a variety of key performance indicators (KPIs) tailored to your objectives. These may include metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), and more. Our robust analytics and reporting tools provide transparent insights into campaign performance."
  },
  {
    key: "2",
    question: "3. What targeting options do you offer for performance marketing campaigns?",
    answer: "We offer a range of targeting options to ensure your performance marketing campaigns reach the right audience. This includes demographic targeting, geographic targeting, interest targeting, behavior targeting, retargeting (remarketing), and lookalike audience targeting. By segmenting your audience effectively, we maximize campaign effectiveness and ROI."
  },
  {
    key: "3",
    question: "4. How do you optimize performance marketing campaigns for maximum results?",
    answer: "We employ a continuous optimization approach to performance marketing campaigns, leveraging data-driven insights and A/B testing to refine targeting, messaging, and creative elements. Our team monitors campaign performance in real-time, making adjustments to maximize performance and achieve your goals efficiently."
  },
  {
    key: "4",
    question: "5. Can you work with my existing marketing technology stack?",
    answer: "Yes, we can integrate with your existing marketing technology stack to streamline campaign management, tracking, and reporting. Whether you use CRM systems, marketing automation platforms, or analytics tools, we ensure seamless integration to optimize campaign performance and ROI."
  },
  {
    key: "5",
    question: "6. What sets your performance marketing services apart from competitors?",
    answer: "Our performance marketing services are distinguished by our strategic approach, data-driven methodologies, and relentless focus on delivering measurable results. We prioritize transparency, collaboration, and innovation to drive success for our clients, ensuring maximum ROI and business impact."
  },
  {
    key: "6",
    question: "7. How do you stay updated with the latest trends and best practices in performance marketing?",
    answer: "Our team is dedicated to staying at the forefront of industry trends and best practices in performance marketing. We regularly attend industry conferences, participate in training programs, and engage with industry experts to ensure we're leveraging the latest strategies and technologies to drive success for our clients."
  },
  {
    key: "7",
    question: "8. What industries have you worked with in your performance marketing campaigns? ",
    answer: "We have experience working with clients across a wide range of industries, including e-commerce, technology, healthcare, finance, travel, and more. Our adaptable approach allows us to tailor performance marketing strategies to meet the unique needs and objectives of each industry vertical."
  },
  {
    key: "8",
    question: "9. How can I get started with performance marketing services for my business?",
    answer: "Getting started with performance marketing services is simple. Contact us today to schedule a consultation with one of our experts. We'll discuss your goals, objectives, and budget, and develop a customized strategy to drive success for your business through performance marketing."
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
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Media</span></div>
                    <h1 className='sizeH1 uppercase'>Harness the potential of digital platforms to propel your brand to new heights</h1>
                    <p>Performance marketing strategies are meticulously crafted to deliver unparalleled results for your brand. With a data-driven approach and a relentless pursuit of ROI, we empower businesses to thrive in the competitive digital landscape. From maximizing conversions to optimizing ad spend, we're here to elevate your brand's performance and propel your success to new heights</p>
                                
               

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

      
        {/* Quick Facts  */}
        <section className='Calculat'>
          <div className='container'>
            <div className='CalculatRow'>
              {calculatData.map(item => (
                <div key={item.key} className={`CalculatCol CalculatCol${item.key}`}>
                  <div className='CalculatColIn'>
                    <h4>{item.number}</h4>
                    <p><span  dangerouslySetInnerHTML={{ __html: item.description }}></span> <PiStarFourFill /></p>
                  </div>
                </div>
              ))}
            </div>
            <div className='strokeB'>
              <SVGCurveLine />
            </div>
          </div>
        </section>
        {/* Quick Facts  End */}
        
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
                  <Accordion defaultActiveKey="0">
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
                <Link to="/work" className="btnDark fontM ripple-button"><span>View All</span></Link>
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

        <div className='btnSpaceEx center pb-0'>     
            <Link to="../testimonials" className="btnDark fontM ripple-button"><span>View All</span></Link>
        </div>



        </div></section> 
        {/* TESTIMONIALS End */} 
 

        
        <section className='mdlogoSec'>
            <div className='container'>
                    
            <Tabs>
                <TabList >
                  <Tab><span>Partners</span></Tab>
                  <Tab><span>Platforms</span></Tab>
                </TabList>

                <TabPanel>
                  <div className='mdlogoList'>
                    <ul>
                      <li><img src={GooglePremierPartner}/></li>
                      <li><img src={MetaVerifiedPartner}/></li>
                      <li><img src={LinkedInMarketingPartner}/></li>
                      <li><img src={TwitterAdPartner}/></li>
                      <li><img src={SnapchatCertifiedPartner}/></li>
                      <li><img src={AmazonAdvertisingPartner}/></li>
                      <li><img src={HubSpotAgencyPartner}/></li>
                      <li><img src={MicrosoftAdvertisingPartner}/></li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='mdlogoList'>
                    <ul>
                      <li><img src={Meta}/></li>
                      <li><img src={LinkedIn}/></li>
                      <li><img src={YouTube}/></li>
                      <li><img src={GoogleAds}/></li>
                      <li><img src={Twitter}/></li>
                      <li><img src={Snapchat}/></li>
                      <li><img src={MicrosoftAdvertising}/></li>
                      <li><img src={Pinterest}/></li>
                      <li><img src={AmazonAdvertising}/></li>
                      <li><img src={Taboola}/></li>
                      <li><img src={Outbrain}/></li>
                      <li><img src={SpotifyAdStudio}/></li>
                      <li><img src={QuoraAds}/></li>
                      <li><img src={RedditAds}/></li>
                    </ul>
                  </div>
                </TabPanel>
            
            </Tabs>
              
            </div>            
        </section>


        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>


        {/* Work Logos */}
            <LogosSlider />
        {/* Work Logos End */} 




        {/* Free Audit */}   
        <section className='pinkB freeAuditSec'><div className='container'>
          <div className='freeAuditSecRow'>
                <div className='freeAuditSecCol'>
                <div className='Heading HeadingIcon'>
              <h2 className='sizeH1 uppercase white center'>
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                  One Dashboard 
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
              </h2>
            </div>
                    <p className='white'>Simplify your media management with our integrated dashboard, providing comprehensive insights and analytics across all your campaigns and channels. </p>
                </div>

            </div>
        </div></section> 
        {/* Free Audit End */} 



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
                    <h2 className='sizeH3 uppercase'>Ready to take your media strategy to the next level?<br/> Contact us today for a personalized quote.</h2>

                        
                    <div className='pt-30 center'>     
                    <Link onClick={() => { setOpenModalGetQuote(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 


      <Footer />
      {OpenModalGetQuote && <GetQuote closeModal={setOpenModalGetQuote} />}

    </>
  );
};

export default Media
