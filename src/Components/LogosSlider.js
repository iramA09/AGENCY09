import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import starY from '../Assets/Images/icons/star.png';
import { Link } from 'react-router-dom';
import SVGCurveLine from '../Hooks/SVGCurveLine'; 


// Logos Images
import tatamotors from '../Assets/Images/logos/work/automative/tatamotors.png';
import wurthCarHaus from '../Assets/Images/logos/work/automative/wurth-car-haus.png';

import adityabirla from '../Assets/Images/logos/work/BFSI/aditya-birla.png';
import edelweiss from '../Assets/Images/logos/work/BFSI/edelweiss.png';
import igcb from '../Assets/Images/logos/work/BFSI/igcb.png';
import iifl from '../Assets/Images/logos/work/BFSI/iifl.png';
import invesco from '../Assets/Images/logos/work/BFSI/invesco.png';
import nomura from '../Assets/Images/logos/work/BFSI/nomura.png';
import rgi from '../Assets/Images/logos/work/BFSI/rgi.png';
import trust from '../Assets/Images/logos/work/BFSI/trust.png';

import bitsom from '../Assets/Images/logos/work/education/bitsom.png';
import bitspilani from '../Assets/Images/logos/work/education/bitspilani.png';
import oberoi from '../Assets/Images/logos/work/education/oberoi.png';
import ryan from '../Assets/Images/logos/work/education/ryan.png';
import thakurTrusts from '../Assets/Images/logos/work/education/thakur-trusts.png';

import americantourister from '../Assets/Images/logos/work/retail_fmcg/american-tourister.png';
import g2 from '../Assets/Images/logos/work/retail_fmcg/g2.png';
import gocheese from '../Assets/Images/logos/work/retail_fmcg/gocheese.png';
import gowardhan from '../Assets/Images/logos/work/retail_fmcg/gowardhan.png';
import prideofcows from '../Assets/Images/logos/work/retail_fmcg/prideofcows.png';
import samsonite from '../Assets/Images/logos/work/retail_fmcg/samsonite.png';
import siyarams from '../Assets/Images/logos/work/retail_fmcg/siyarams.png';

import aldo from '../Assets/Images/logos/work/fashion_lifestyle/aldo.png';
import godrejlaffaire from '../Assets/Images/logos/work/fashion_lifestyle/godrej-laffaire.png';
import hudobosshugo from '../Assets/Images/logos/work/fashion_lifestyle/hudo-boss-hugo.png';
import lavie from '../Assets/Images/logos/work/fashion_lifestyle/lavie.png';
import missdiva from '../Assets/Images/logos/work/fashion_lifestyle/miss-diva.png';
import movado from '../Assets/Images/logos/work/fashion_lifestyle/movado.png';
import tommyhilfiger from '../Assets/Images/logos/work/fashion_lifestyle/tommy-hilfiger.png';

import jupiterhospital from '../Assets/Images/logos/work/health_wellness/jupiterhospital.png';
import stepsetgo from '../Assets/Images/logos/work/health_wellness/stepsetgo.png';
import avvatarindia from '../Assets/Images/logos/work/health_wellness/avvatarindia.png';

import apolloenergy from '../Assets/Images/logos/work/energy/apollo-energy.png';
import athenarenewable from '../Assets/Images/logos/work/energy/athena-renewable.png';
import mahindrasolarize from '../Assets/Images/logos/work/energy/mahindra-solarize.png';
import senvion from '../Assets/Images/logos/work/energy/senvion.png';
import susten from '../Assets/Images/logos/work/energy/susten.png';
import teqmahindra from '../Assets/Images/logos/work/energy/teqo-mahindra.png';

import codashop from '../Assets/Images/logos/work/media_entertainment_gaming/codashop.png';
import disney from '../Assets/Images/logos/work/media_entertainment_gaming/disney.png';
import lokmat from '../Assets/Images/logos/work/media_entertainment_gaming/lokmat.png';
import starwars from '../Assets/Images/logos/work/media_entertainment_gaming/star-wars.png';
import tips from '../Assets/Images/logos/work/media_entertainment_gaming/tips.png';

import ashargroup from '../Assets/Images/logos/work/real-estate/ashar-group.png';
import credaimchi from '../Assets/Images/logos/work/real-estate/credai-mchi.png';
import ensaara from '../Assets/Images/logos/work/real-estate/ensaara.png';
import jpinfra from '../Assets/Images/logos/work/real-estate/jp-infra.png';
import nahargroup from '../Assets/Images/logos/work/real-estate/nahar-group.png';
import rajeshlifespaces from '../Assets/Images/logos/work/real-estate/rajesh-lifespaces.png';
import sunteck from '../Assets/Images/logos/work/real-estate/sunteck.png';
import supreme from '../Assets/Images/logos/work/real-estate/supreme.png';
import ukrealty from '../Assets/Images/logos/work/real-estate/uk-realty.png';

import jupitermarathon from '../Assets/Images/logos/work/events/jupiter-marathon.png';
import lakmefashionweek from '../Assets/Images/logos/work/events/lakme-fashion-week.png';
import mahamarathonlokmat from '../Assets/Images/logos/work/events/mahamarathon-lokmat.png';
import mahindraopensky from '../Assets/Images/logos/work/events/mahindra-open-sky.png';
import timesfashionweek from '../Assets/Images/logos/work/events/times-fashion-week.png';
import wethewomen from '../Assets/Images/logos/work/events/we-the-women.png';

import barci from '../Assets/Images/logos/work/others/barci.png';
import chinesewok from '../Assets/Images/logos/work/others/chinese-wok.png';
import hppetrol from '../Assets/Images/logos/work/others/hp-petrol.png';
import mahycogrow from '../Assets/Images/logos/work/others/mahyco-grow.png';
import tribevibe from '../Assets/Images/logos/work/others/tribe-vibe.png';
// Logos Images end


const Logos09 = [
  {src: tatamotors},
  {src: wurthCarHaus},

  {src: adityabirla},
  {src: edelweiss},
  {src: igcb},
  {src: iifl},
  {src: invesco},
  {src: nomura},
  {src: rgi},
  {src: trust},

  {src: bitsom},
  {src: bitspilani},
  {src: oberoi},
  {src: ryan},
  {src: thakurTrusts},

  {src: americantourister},
  // {src: g2},
  // {src: gocheese},
  // {src: gowardhan},
  // {src: prideofcows},
  // {src: samsonite},
  // {src: siyarams},
  
  // {src: aldo},
  // {src: godrejlaffaire},
  // {src: hudobosshugo},
  // {src: lavie},
  // {src: missdiva},
  // {src: movado},
  // {src: tommyhilfiger},
  
  // {src: jupiterhospital},
  // {src: stepsetgo},
  // {src: avvatarindia},

  // {src: apolloenergy},
  // {src: athenarenewable},
  // {src: mahindrasolarize},
  // {src: senvion},
  // {src: susten},
  // {src: teqmahindra},
  
  // {src: codashop},
  // {src: disney},
  // {src: lokmat},
  // {src: starwars},
  // {src: tips},

  // {src: ashargroup},
  // {src: credaimchi},
  // {src: ensaara},
  // {src: jpinfra},
  // {src: nahargroup},
  // {src: rajeshlifespaces},
  // {src: sunteck},
  // {src: supreme},
  // {src: ukrealty},

  // {src: jupitermarathon},
  // {src: lakmefashionweek},
  // {src: mahamarathonlokmat},
  // {src: mahindraopensky},
  // {src: timesfashionweek},
  // {src: wethewomen},

  // {src: barci},
  // {src: chinesewok},
  // {src: hppetrol},
  // {src: mahycogrow},
  // {src: tribevibe},
];


const LogosSlider = () => {
    
  // Logos 
  const LogosSliders = {
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow:7,
    slidesToScroll:1,
    variableWidth: true,
    rtl: false,
    mobileFirst: true,
    rows: 1,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 4,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        rows: 2
      }
    }
  ]};
  // Logos End


  return (
    <>

  

    {/* Work Logos */}
    <section className='hWorkLogos'><div className='container'>
          {/* <hr className='hrTop'/> */}
      
        <div className='Heading center HeadingIcon'>
          <h2 className='sizeH1 uppercase'>
              <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
              Clientele 
              <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
          </h2>
        </div>
        <Slider {...LogosSliders} className="LogosSlider-slick slick-slider arrowLRC">
        {Logos09.map((logo, index) => (
              <div className='item'> <span> <img src={logo.src} alt="" /></span> </div>
        ))}
        </Slider>

        <div className='btnSpaceEx center'>     
               <Link to="../work/our-clients" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>
   
    </div></section>                 
    {/* Work Logos End */}


    </>
  )
}

export default LogosSlider
