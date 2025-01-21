import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import StartAProjectFormPopup from '../../Components/Forms/StartAProjectFormPopup';
import Testimonias from '../../Components/Testimonias';

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
import pattern from '../../Assets/Images/icons/patternTech.webp';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import starY from '../../Assets/Images/icons/star.webp';
import corporateWebsite from '../../Assets/Images/corporateWebsite.webp';

import chatbot from '../../Assets/Images/tools/chatbot.webp';
import one_dashboard from '../../Assets/Images/tools/one_dashboard.webp';
import ticketing_system from '../../Assets/Images/tools/ticketing_system.webp';
import url_builder from '../../Assets/Images/tools/url_builder.webp';
import website_audit from '../../Assets/Images/tools/website_audit.webp';

import TataMotors from '../../Assets/Images/work/TatamotorsNew.webp.';
import Ryan from '../../Assets/Images/work/Ryan.webp';
import GroupSoft from '../../Assets/Images/work/GroupSoft.webp';
import Siyarams from '../../Assets/Images/work/siyarams.webp';
import Bitspilani from '../../Assets/Images/work/Bitspilani.webp';
import Tribevibe from '../../Assets/Images/work/TribeVibe.webp';

import bitsPilani from '../../Assets/Images/logos/work/education/bitspilani.png';
import tataMotors2 from '../../Assets/Images/logos/work/automative/tatamotors.png';
import ryan from '../../Assets/Images/logos/work/education/ryan.png';

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


 

const Tech = () => {
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);



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
      header: "Corporate Website",
      description: "Professional, responsive websites that reflect your brand's identity and engage your audience effectively. Our websites are designed for optimal performance and user experience.",
      tags: ["PHP", "WordPress", "Drupal", "AngularJs", "NodeJs", "Laravel", "ReactJs"],
    },
    {
      key: "1",
      header: "eCommerce",
      description: "eCommerce solutions tailored to create seamless shopping experiences. We develop secure, scalable online stores that boost sales and enhance customer satisfaction.",
      tags: ["Magento", "Shopify", "WooCommerce", "OpenCart", "PrestaShop", "BigCommerce", "osCommerce"],
    },
    {
      key: "2",
      header: "ERP Systems",
      description: "Streamline your business operations with our custom ERP systems. We design and implement integrated solutions that improve efficiency and provide real-time insights.",
      tags: ["Custom ERP", "Oracle", "Microsoft Dynamics", "Odoo", "Infor", "NetSuite", "Sage"],
    },
    {
      key: "3",
      header: "Software Development",
      description: "Bespoke software solutions that address your specific business challenges. Our software development services ensure functionality, scalability, and reliability.",
      tags: [],
    },
    {
      key: "4",
      header: "HR Portal",
      description: "Enhance your human resources management with our advanced HR portals. We create user-friendly platforms that simplify HR processes and improve employee engagement.",
      tags: [],
    },
    {
      key: "5",
      header: "Marketing Automations",
      description: "Automate your marketing efforts with our innovative solutions. We help you streamline campaigns, track performance, and increase ROI with minimal effort.",
      tags: [],
    },
    {
      key: "6",
      header: "Web Application",
      description: "Web applications designed to provide dynamic and interactive user experiences. We develop robust applications that meet your business requirements and exceed user expectations.",
      tags: ["ReactJs", "AngularJs", "VueJs", "NodeJs", "Django", "Ruby on Rails", "ASP.NET", "ASP.Flask"],
    },
    {
      key: "7",
      header: "Mobile Applications",
      description: "Intuitive and powerful mobile applications for iOS and Android. Built to provide seamless user experiences and drive engagement on the go.",
      tags: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Flutter", "Xamarin", "Ionic", "Java", "Sage"],
    }
  ];
// Services Data


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
          link: '../url-builder',
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
    id: 1,
    title: "Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup",
    tags: [
        { name: 'Digital Strategy', },
        { name: 'UI/UX', },
        { name: 'Web Development', }
    ],
    image: TataMotors,
    link: '/work/case-studies/tata-trucks',
    brand: 'TATA Trucks',
    department: 'Tech'
},
{
    id: 2,
    title: 'Streamlining Digital Presence: 100+ Websites & CMS for Ryan International School',
    tags: [
        { name: 'Web Design', link: '' },
        { name: 'Web Development', link: '' },
        { name: 'Content Management Systems', link: '' }
    ],
    image: Ryan,
    link: '/work/case-studies/ryangroup',
    brand: 'Ryan International Group of Institutions',
    department: 'Tech'
},
{
    id: 3,
    title: 'Modernizing Digital Identity: Revamped Website for Global SaaS Company Groupsoft',
    tags: [
        { name: 'Web Design', link: '' },
        { name: 'Web Development', link: '' },
        { name: 'UI/UX Design', link: '' }
    ],
    image: GroupSoft,
    link: '/work/case-studies/groupsoft',
    brand: 'Groupsoft US Inc',
    department: 'Tech'

},
{
    id: 4,
    title: "Elevating Men's Fashion: A Visually Captivating Website for Siyaram's",
    tags: [
        { name: 'Web Design', link: '' },
        { name: 'Web Development', link: '' },
        { name: 'UI/UX Design', link: '' }
    ],
    image: Siyarams,
    link: '/work/case-studies/siyaram',
    brand: "Siyaram's",
    department: 'Tech'
},
{
    id: 5,
    title: 'Transforming Digital Presence: Modern Website for India’s #1 Non-Govt. Technical Institute, BITS Pilani',
    tags: [
        { name: 'Digital Strategy', },
        { name: 'UI/UX', },
        { name: 'Web Development', }
    ],
    image: Bitspilani,
    link: '/work/case-studies/bits-pilani',
    brand: "Bits Pilani",
    department: 'Tech'
},


{
    id: 8,
    title: 'Empowering Campus Influencers: Tech-Driven Ambassador Program for TribeVibe',
    tags: [
        { name: 'Digital Strategy', },
        { name: 'UI/UX', },
        { name: 'Web Development', }
    ],
    image: Tribevibe,
    link: '/work/case-studies/tribevibe',
    brand: "Tribevibe",
    department: 'Tech'
},

  ];
//CaseStudy Data End


// FAQS
const faqsData = [
  {
    key: "0",
    question: "1. What technologies do you use for developing corporate websites?",
    answer: "We specialize in PHP, WordPress, Drupal, AngularJs, NodeJs, Laravel, and ReactJs to build professional, responsive, and high-performance corporate websites."
  },
  {
    key: "1",
    question: "2. What eCommerce platforms do you work with?",
    answer: "We work with a variety of eCommerce platforms including Magento, Shopify, WooCommerce, OpenCart, PrestaShop, BigCommerce, and osCommerce to create secure and scalable online stores."
  },
  {
    key: "2",
    question: "3. What programming languages and frameworks do you use for software development?",
    answer: "We develop custom software solutions using Java, Python, C#, Ruby on Rails, .NET, Golang, and Swift, ensuring functionality, scalability, and reliability."
  },
  {
    key: "3",
    question: "4. What technologies do you use for web applications?",
    answer: "Our web applications are built using modern technologies such as ReactJs, AngularJs, VueJs, NodeJs, Django, Ruby on Rails, ASP.NET, and Flask to deliver dynamic and interactive user experiences."
  },
  {
    key: "4",
    question: "5. Which frameworks and languages do you use for mobile app development?",
    answer: "For mobile applications, we use Swift for iOS, Kotlin for Android, and cross-platform frameworks like React Native, Flutter, Xamarin, Ionic, and Java to create intuitive and powerful mobile apps."
  },
  {
    key: "5",
    question: "6. How do you ensure the security of eCommerce platforms? ",
    answer: "We prioritize security by implementing best practices in data encryption, secure payment gateways, SSL certificates, and regular security audits to protect your eCommerce platform from threats."
  },
  {
    key: "6",
    question: "7. Can you integrate existing systems with new ERP solutions? ",
    answer: "Yes, we specialize in integrating existing systems with new ERP solutions to ensure seamless operation and data flow across your business processes."
  },
  {
    key: "7",
    question: "8. Do you provide maintenance and support for the software and applications you develop? ",
    answer: "Absolutely. We offer comprehensive maintenance and support services to ensure your software and applications run smoothly and remain up-to-date with the latest technologies and security measures."
  },
  {
    key: "8",
    question: "9. Can you customize HR portals to fit our specific needs?",
    answer: "Yes, we provide fully customizable HR portals tailored to meet the unique requirements of your organization, enhancing efficiency and employee satisfaction."
  },
  {
    key: "9",
    question: "10. How do you approach a new tech project?",
    answer: "We start with a thorough analysis of your business needs and goals, followed by detailed planning, design, development, testing, and deployment. We maintain close communication with you throughout the process to ensure the final product meets your expectations."
  },
  {
    key: "10",
    question: "11. Do you offer free audits for our existing tech infrastructure?",
    answer: "Yes, we offer free audits to evaluate your current tech infrastructure and provide recommendations for enhancements to optimize your digital capabilities."
  },
  {
    key: "11",
    question: "12. How do you handle project timelines and delivery? ",
    answer: "We follow an agile development methodology to ensure timely delivery and flexibility. Regular updates and feedback loops are maintained to keep the project on track and aligned with your business objectives."
  }
];
// FAQS End



// Approach Section 
const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const groupSize = isMobile ? 2 : 4;

  const groupedItems = ApproachData.reduce((acc, item, index) => {
    if (index % groupSize === 0) {
      acc.push(<ul key={`ul-${index}`} className="solutionsSecApproachListRow">{[]}</ul>);
    }
    const ulIndex = Math.floor(index / groupSize);
    acc[ulIndex].props.children.push(
      <li key={index}>
        <div className='solutionsSecApproachListCol'>
          <div className='solutionsSecApproachListColNum'>
            <span>{item.number}</span>
            <span className='solutionsSecApproachListColNumTag'>{item.tag}</span>
          </div>
          <div className='solutionsSecApproachListColText'>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>    
        </div>
      </li>
    );
    return acc;
  }, []);
  // Approach Section End


  return (
    <>

    <Helmet>
      <title>Tech Solutions | Website Development & E-commerce Website - AGENCY09</title>
      <meta name="robots" content="index, follow"/> 

      <meta name="description" content="We are a MarTech firm and provide services like website development, UI UX, software development services, eCommerce website developers, corporate websites and AI-driven marketing."/>
      <link rel="canonical" href="https://www.agency09.in/solutions/tech"/>

      <meta property="og:title" content="Tech Solutions | Website Development & E-commerce Website - AGENCY09"/> 
      <meta property="og:description" content="We are a MarTech firm and provide services like website development, UI UX, software development services, eCommerce website developers, corporate websites and AI-driven marketing."/> 
      <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
      <meta property="og:type" content="website"/> 

      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@AGENCY09"/> 
      <meta name="twitter:creator" content="@AGENCY09"/> 
      <meta name="twitter:url" content="https://www.agency09.in/solutions/tech"/> 
      <meta name="twitter:description" content="We are a MarTech firm and provide services like website development, UI UX, software development services, eCommerce website developers, corporate websites and AI-driven marketing."/> 
      <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 
    </Helmet>




      <Header />
      <div className="spacer"></div>

        <section className='SolutionsSecAbout'>
        <div className="container">
            <div className='SolutionsRow'>
                <div className='SolutionsCol'>
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Tech</span></div>
                    <h1 className='sizeH1 uppercase'>Innovative Tech, Unleashing Creative Possibilities</h1>
                    <p>Tech solutions designed to drive innovation and efficiency. We combine creativity & technology with expert knowledge to deliver customized solutions that meet your unique needs. From corporate websites to mobile applications, we provide comprehensive tech services that empower your business to thrive in the digital age.</p>
                                
               

                    <div className='trustedBy'>
                        <h3 className='sizeH5'>Trusted By</h3>
                        <ul className='trustedByLogos'>
                            <li><img loading='lazy' src={bitsPilani} alt=""/></li>
                            <li><img loading='lazy' src={tataMotors2} alt=""/></li>
                            <li><img loading='lazy' src={ryan} alt=""/></li>
                            <li><img loading='lazy' src={mahindraAccelo} alt=""/></li>
                        </ul>
                    </div>
                </div>
                <div className='SolutionsCol SolutionsColImg'>
                    <div className='RoundIconA RoundIcon blueB'>
                        <span></span>
                    </div>
                    <div className='RoundIconB RoundIcon pinkB'></div>
                    <img loading='lazy'  src={pattern} alt="pattern" className='pattern' />
                </div>


                <div className='SolutionsColOurServies'>
                    <Link to='#'>
                        <img loading='lazy'  src={ourServiesBtn} alt="Our Servies" />
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
                      <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                      Services
                      <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
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

        <section className='solutionsSecTools'>
            <div className='container'>
                
                <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                        TOOLS
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                </h2>
                </div>



            <Slider {...toolsSlider} className='toolsSlider slick-slider'>
            {toolsData.map((tools, index) => (
                <div key={index} className='item'>
                <div className='toolsCol'>
                    <Link to={tools.link} >
                        <div className='toolsImg'><img src={tools.image}/></div>
                        <div className='toolsTitale'>{tools.titale}</div>
                        {/* <div className='textDecoration'><p>{tools.decoration}</p></div>
                        <div className='toolsBtn'><IoIosArrowDroprightCircle /></div> */}
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



          <div className='Heading center HeadingIcon'>
              <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                    A09 Approach
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
              </h2>
          </div>


            <div className='solutionsSecApproachList'>
              {groupedItems}
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
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                    Case studies
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img loading='lazy'  src={CaseStudy.image}/>
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
                <Link to="../work/case-studies#tech" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  



     

        {/* TESTIMONIALS */}   
        <Testimonias/>
        {/* TESTIMONIALS End */} 


        {/* Work Logos */}
        <LogosSlider />
        {/* Work Logos End */} 



        

        {/* Free Audit */}   
        <section className='pinkB freeAuditSec'><div className='container'>
          <div className='freeAuditSecRow'>
                <div className='freeAuditSecCol'>
                    <h3 className='sizeH5 uppercase bold pb-20 white'>Free Audit</h3>
                    <h2 className='sizeH1 uppercase white'>Interested in optimizing your tech infrastructure? </h2>
                    <div className='pt-30 '>     
                        {/* <Link   className="btnBlue fontM ripple-button"><span>Click Here</span></Link> */}
                    </div>
                </div>

                {/* <div className='freeAuditSecCol'>
                    <Link to=''>
                      <img src={clickHere} alt='Click Here' />
                    </Link>
                </div> */}

                        
             
            </div>
        </div></section> 
        {/* Free Audit End */} 


      {/* FAQ */}
      <section className='faqContent'>
        <div className='container'>

        <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
          <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
              FAQs
          <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
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
                    <h2 className='sizeH3 uppercase'>Ready to Transform Your Business with Cutting-Edge Tech Solutions? </h2>

                        
                    <div className='pt-30 center'>     
                        <Link onClick={() => { setOpenModalStartAProjectFormPopup(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 

      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup} defaultService="Tech" />}

    </>
  );
};

export default Tech
