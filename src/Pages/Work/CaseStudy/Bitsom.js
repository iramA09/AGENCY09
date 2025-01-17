import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 

import { GoNorthStar } from "react-icons/go";
import { PiStarFourFill } from "react-icons/pi";

import bitsom from "../../../Assets/Images/logos/bitsom.png"
import starY from '../../../Assets/Images/icons/star.png'
import bitsom1 from "../../../Assets/Images/case-study/bitsom/bitsom1.jpg"
import bitsom2 from "../../../Assets/Images/case-study/bitsom/bitsom2.jpg"
import bitsom3 from "../../../Assets/Images/case-study/bitsom/bitsom3.jpg"

const Bitsom = () => {
    // Calculat Data
    const calculatData = [
        {
        key: "A",
        number: "26,337",
        description: "Unique Registrations",
        },
        {
        key: "B",
        number: "11",
        description: "Impressions",
        },
        {
        key: "C",
        number: "60+",
        description: "Unique Content Piece Created",
        }
    ];
    // Calculat Data End


  return (
    <>
    <Header/>
    <div className="spacer"></div>

    <section>
        <div className='caseStudyHeader'>
            <div className='container'>

            <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Case Study</span></div>


            <div className='caseStudyHead'>
            <div className='col'>
                    <h1 className='sizeH3 uppercase'>Create a destination for world <br/>class admission</h1>
                </div> 

                <div className='col'>
                    <img src={bitsom} loading='lazy'  />
                </div>

            </div>

            <div className='strokeB'>
                <SVGCurveLine/>
            </div>  

            </div>
        </div>


        <div className='caseStudyBio'>
            <div className='container'>

            <div className='bio flexBio'>
                <div className='col'>
                    <ul>
                        <li><h4>Client :</h4></li>
                        <li><p>BITSOM</p></li>
                    </ul>
                </div>
            
                <div className='col'>
                    <ul>
                        <li><h4>Services :</h4></li>
                        <li><p>Website Design & Development, Software, Digital Process Automation</p></li>
                    </ul>
                </div>
            </div>

            <div className='bioImg'>
                <img src={bitsom1} loading='lazy'  />
            </div>



            <div className='caseProject'>
                <h3 className='sizeH5 bold uppercase'>About Project</h3>    

                <div className='caseProjectRow flexBio'>
                    <div className='col'>
                        <h2 className='sizeH3'>Powered by excellence and designed for the global leaders of academia</h2>
                    </div>
                
                    <div className='col'>
                    <p>The BITS School of Management, a business school for tomorrow’s leaders in the business capital of India. BITSoM is powered by the spirit of excellence and entrepreneurial culture that BITS Pilani, an Institution of Eminence, has cultivated over five decades.</p>
                        <div className='btnSpace'>
                            <a class="btnDark ripple-button" href="/"><span>Visit WeBsite</span></a>
                        </div>
                    </div>
                </div>
            </div>


            <div className='strokeB'>
                <SVGCurveLine/>
            </div>  


            <div className='solutionsWrap'>
                <div className='solutionshead center'>
                    <h3 className='sizeH5 bold uppercase'>IMPLEMENTATION</h3>
                    <div className='Heading center HeadingIcon'>
                        <h2 className='sizeH1 uppercase'>
                            <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy'  alt='Star Icon' /></i></span>SOLUTIONS<span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy'  alt='Star Icon' /></i></span>
                        </h2>
                    </div>
                </div>

                <div className='caseProject'>
                    <div className='caseProjectRow flexBio'>
                        <div className='col'>
                            <h2 className='sizeH3'>A paperless admission process</h2>
                        </div>
                    
                        <div className='col'>
                        <p>BITSoM turned to us to create a world class design along with an admission management system to seamlessly facilitate the admission process online for the students and the management</p>
                        <ul className='customeUL'>
                            <li>Admission Management System</li>
                            <li>Lead Management System</li>
                            <li>User Logins</li>
                            <li>CMS Backend</li>
                            <li>Control Panel</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className='caseProject'>
                    <div className='caseProjectRow flexBio'>
                        <div className='col'>
                            <h2 className='sizeH3'>Design & Development</h2>
                        </div>
                    
                        <div className='col'>
                        <p>Every coin has two sides, and the BITSoM coin is made with imagination and innovation. Powered by excellence and designed for the global leaders of academia, BITSoM helps prepare tomorrow’s leaders</p>
                        </div>
                    </div>

                    <div className='bioImg'>
                      <img src={bitsom2} loading='lazy'  />
                    </div>
                </div>


                <div className='caseProject'>
                    <div className='caseProjectRow flexBio'>
                        <div className='col'>
                            <h2 className='sizeH3'>Admission Management System</h2>
                        </div>
                    
                        <div className='col'>
                        <p>Allows students to fill admission applications in phases, save and return later to complete the process from where they left it off</p>
                        </div>
                    </div>

                    <div className='bioImg'>
                      <img src={bitsom3} loading='lazy'  />
                    </div>
                </div>

            </div>

            </div>
        </div>
     </section>



    {/* Calculat */}
    <section className='Calculat greenB caseStudyCount'>
        <div className='container'>

        <div className='solutionshead center pb-30'>
            <div className='Heading center HeadingIcon mb-0'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy'  alt='Star Icon' /></i></span>RESULTS<span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy'  alt='Star Icon' /></i></span>
                </h2>
            </div>
            <h3 className='sizeH4  uppercase'>WHAT WE ACHIEVED IN 21 DAYS</h3>
        </div>


        <div className='CalculatRow'>
            {calculatData.map(item => (
            <div key={item.key} className={`CalculatCol CalculatCol${item.key}`}>
                <div className='CalculatColIn'>
                <h4>{item.number}</h4>
                <p><span  dangerouslySetInnerHTML={{ __html: item.description }}></span> </p>
                </div>
            </div>
            ))}
        </div>

        <div className='btnSpaceEx  center pb-0'>
            <Link className="btnDark fontM ripple-button" to="/work"><span>View All Case studies</span></Link>
        </div>

        </div>
    </section>
    {/* Calculat End */}

    {/* Business  */}   
      <section className='yellowB center caseRQuote'><div className='container'>
                <div className='Heading  HeadingIcon'>
                <div className='Heading center HeadingIcon pb-10'>
                    <h2 className='sizeH1 uppercase'>
                        <span className='iconSVG pink'><GoNorthStar /></span>
                        Lorem ipsum dolor sit amet, <span className='iconSVG pink'><GoNorthStar /></span> <br/> consectetur adipiscing elit?
                    </h2>
                </div>
                <div className='pt-10 center'>     
                    <Link to="#" className="btnBlue fontM ripple-button"><span>Request a Quote</span></Link>
                </div>
                </div>
        </div></section> 
    {/* Business End */} 

    <Footer/>
    </>
  )
}

export default Bitsom
