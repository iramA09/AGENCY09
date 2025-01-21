import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HeroBanner from '../Components/HeroBanner';
import Services from '../Components/Services';
import ServicesList from '../Components/ServicesList';
import LogosSlider from '../Components/LogosSlider';
import Social from '../Components/Social';
import Calculat from '../Components/Calculat';
import Items from '../Components/WhatsNew';
import WeMakeIdeasPerform from '../Components/WeMakeIdeasPerform';
import animateGsap from '../Components/Animation/HomeGsap'; 
import { IoStarSharp } from "react-icons/io5";
import { SlArrowRightCircle } from "react-icons/sl";
import SVGCurveLine from '../Hooks/SVGCurveLine'; 
// Images
import barc from '../Assets/Images/work/BARC.webp';
import godrejlaffaire from '../Assets/Images/work/Laffaire.webp';
import TataMotors from '../Assets/Images/work/TatamotorsNew.webp';
import Tribevibe from '../Assets/Images/work/TribeVibe.webp';

// Images end

// Array of work items
export const workItems = [
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
  id: 3,
  title: 'Visualizing Insights: Award-Winning Yearbook for BARC India',
  tags: [
      { name: 'Annual Report', },
      { name: 'Book Design', },
      { name: 'Infographics', }
  ],
  image: barc,
  link: '/work/case-studies/barc-india-yearbook',
  brand: "BARC India Yearbook",
  department: 'Design'
},

{
  id: 5,
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

const Home = () => {

  useEffect(() => {
    const cleanup = animateGsap();
    return cleanup;
  }, []);


  return (
    <>

<Helmet>
    <title>Advertising Agency | Brand Agency in Mumbai - AGENCY09 </title>
    <meta name="robots" content="index, follow"/> 

    <meta name="description" content="AGENCY09 is a leading advertising agency in Mumbai. We grow brands with ideas for content, technology, design & data to implement growth strategies with results."/>
    <link rel="canonical" href="https://www.agency09.in/"/>

    <meta property="og:title" content="Advertising Agency | Brand Agency in Mumbai - AGENCY09 "/> 
    <meta property="og:description" content="AGENCY09 is a leading advertising agency in Mumbai. We grow brands with ideas for content, technology, design & data to implement growth strategies with results."/> 
    <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
    <meta property="og:type" content="website"/> 


    <meta name="twitter:card" content="summary" /> 
    <meta name="twitter:site" content="@AGENCY09" /> 
    <meta name="twitter:creator" content="@AGENCY09" /> 
    <meta name="twitter:url" content="https://www.agency09.in/"/> 
    <meta name="twitter:description" content=" AGENCY09 is a leading advertising agency in Mumbai. We grow brands with ideas for content, technology, design & data to implement growth strategies with results."/> 
    <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/>
</Helmet>



      <Header />

      {/* Hero */}
        <HeroBanner/>
      {/* Hero */}
        

    {/* Our Work */}
    <section className='ourWorkHm ourWork'>
      <div className='container'>
        <div className='Heading center'>  
          
        <h2 className='sizeH1 uppercase workTitle'><span>We</span> <span>grow</span> <span>brands</span> <span><i className="iconF arrowBtn"><SlArrowRightCircle /></i></span> <br/> <span><i className="iconF"><IoStarSharp /></i></span> <span>with</span>  <span className='underline'>ideas <hr/></span> <span>for</span> <span>content,</span> <span>technology, </span>
       <span>design & data.</span><span><i className="iconF"><IoStarSharp /></i></span></h2>
          <div className='btnSpaceEx'>     
            <div className="btnDark ripple-button titalBtn"><span>Our Work</span></div>
          </div>
        </div>


        <div className='workGrid'>
            {workItems.map((item) => (
              <div className='workGridItem' key={item.id}>
                <div className='workGridItemLink'>
                  <Link to={item.link} className='workGridItemLink'>
                    <div className='cursor09'></div>
                    <div className='workGridItemImg'>
                      <img src={item.image} alt={item.title} loading="lazy"/>
                      <div className='workGridItemHover'>
                          <div className='workGridItemHoverIn'>
                              <h3>{item.title}</h3>
                              <h4>{item.brand}</h4>
                              <p>{item.department}</p>
                          </div>
                      </div>
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

          <div className='btnSpaceEx center'>     
            <Link to="/work/case-studies" className="btnDark fontL ripple-button"><span>See More Work</span></Link>
          </div>

      </div>
    </section>
    {/* Our Work */}

    {/* content & tech */}
      <WeMakeIdeasPerform />
    {/* content & tech */}


    {/* Updates */}
        <Items />                   
    {/* Updates */}

    {/* Services */}
    <Services />         
    {/* Services */}

    {/* ServicesList */}
        <ServicesList />         
    {/* ServicesList */}

    

    {/* Work Logos */}
    <div className='strokeB container'>
          <SVGCurveLine/>
    </div>
       <LogosSlider />
    <div className='strokeB container'>
          <SVGCurveLine/>
    </div>
    {/* Work Logos End */}


    {/* Calculat */}
    <section className='Calculat'>
        <div className='container'>
           <Calculat /> 
           <div className='strokeB'>
             <SVGCurveLine/>
           </div>         
        </div>
      </section>
    {/* Calculat End */}


    {/* Social */}
      <Social />                  
    {/* Social End */}
      
      
      <Footer />
    </>
  )
}

export default Home

