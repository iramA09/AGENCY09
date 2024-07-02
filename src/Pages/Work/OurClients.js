import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useLenisScroll from '../../Hooks/useLenisScroll';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { PiArrowCircleRightThin } from "react-icons/pi";

// Logos Images
import tatamotors from '../../Assets/Images/logos/work/automative/tatamotors.png';
import wurthCarHaus from '../../Assets/Images/logos/work/automative/wurth-car-haus.png';

import adityabirla from '../../Assets/Images/logos/work/BFSI/aditya-birla.png';
import edelweiss from '../../Assets/Images/logos/work/BFSI/edelweiss.png';
import igcb from '../../Assets/Images/logos/work/BFSI/igcb.png';
import iifl from '../../Assets/Images/logos/work/BFSI/iifl.png';
import invesco from '../../Assets/Images/logos/work/BFSI/invesco.png';
import nomura from '../../Assets/Images/logos/work/BFSI/nomura.png';
import rgi from '../../Assets/Images/logos/work/BFSI/rgi.png';
import trust from '../../Assets/Images/logos/work/BFSI/trust.png';

import bitsom from '../../Assets/Images/logos/work/education/bitsom.png';
import bitspilani from '../../Assets/Images/logos/work/education/bitspilani.png';
import oberoi from '../../Assets/Images/logos/work/education/oberoi.png';
import ryan from '../../Assets/Images/logos/work/education/ryan.png';
import thakurTrusts from '../../Assets/Images/logos/work/education/thakur-trusts.png';

import americantourister from '../../Assets/Images/logos/work/retail_fmcg/american-tourister.png';
import g2 from '../../Assets/Images/logos/work/retail_fmcg/g2.png';
import gocheese from '../../Assets/Images/logos/work/retail_fmcg/gocheese.png';
import gowardhan from '../../Assets/Images/logos/work/retail_fmcg/gowardhan.png';
import prideofcows from '../../Assets/Images/logos/work/retail_fmcg/prideofcows.png';
import samsonite from '../../Assets/Images/logos/work/retail_fmcg/samsonite.png';
import siyarams from '../../Assets/Images/logos/work/retail_fmcg/siyarams.png';

import aldo from '../../Assets/Images/logos/work/fashion_lifestyle/aldo.png';
import godrejlaffaire from '../../Assets/Images/logos/work/fashion_lifestyle/godrej-laffaire.png';
import hudobosshugo from '../../Assets/Images/logos/work/fashion_lifestyle/hudo-boss-hugo.png';
import lavie from '../../Assets/Images/logos/work/fashion_lifestyle/lavie.png';
import missdiva from '../../Assets/Images/logos/work/fashion_lifestyle/miss-diva.png';
import movado from '../../Assets/Images/logos/work/fashion_lifestyle/movado.png';
import tommyhilfiger from '../../Assets/Images/logos/work/fashion_lifestyle/tommy-hilfiger.png';

import jupiterhospital from '../../Assets/Images/logos/work/health_wellness/jupiterhospital.png';
import stepsetgo from '../../Assets/Images/logos/work/health_wellness/stepsetgo.png';
import avvatarindia from '../../Assets/Images/logos/work/health_wellness/avvatarindia.png';

import apolloenergy from '../../Assets/Images/logos/work/energy/apollo-energy.png';
import athenarenewable from '../../Assets/Images/logos/work/energy/athena-renewable.png';
import mahindrasolarize from '../../Assets/Images/logos/work/energy/mahindra-solarize.png';
import senvion from '../../Assets/Images/logos/work/energy/senvion.png';
import susten from '../../Assets/Images/logos/work/energy/susten.png';
import teqmahindra from '../../Assets/Images/logos/work/energy/teqo-mahindra.png';

import codashop from '../../Assets/Images/logos/work/media_entertainment_gaming/codashop.png';
import disney from '../../Assets/Images/logos/work/media_entertainment_gaming/disney.png';
import lokmat from '../../Assets/Images/logos/work/media_entertainment_gaming/lokmat.png';
import starwars from '../../Assets/Images/logos/work/media_entertainment_gaming/star-wars.png';
import tips from '../../Assets/Images/logos/work/media_entertainment_gaming/tips.png';

import ashargroup from '../../Assets/Images/logos/work/real-estate/ashar-group.png';
import credaimchi from '../../Assets/Images/logos/work/real-estate/credai-mchi.png';
import ensaara from '../../Assets/Images/logos/work/real-estate/ensaara.png';
import jpinfra from '../../Assets/Images/logos/work/real-estate/jp-infra.png';
import nahargroup from '../../Assets/Images/logos/work/real-estate/nahar-group.png';
import rajeshlifespaces from '../../Assets/Images/logos/work/real-estate/rajesh-lifespaces.png';
import sunteck from '../../Assets/Images/logos/work/real-estate/sunteck.png';
import supreme from '../../Assets/Images/logos/work/real-estate/supreme.png';
import ukrealty from '../../Assets/Images/logos/work/real-estate/uk-realty.png';

import jupitermarathon from '../../Assets/Images/logos/work/events/jupiter-marathon.png';
import lakmefashionweek from '../../Assets/Images/logos/work/events/lakme-fashion-week.png';
import mahamarathonlokmat from '../../Assets/Images/logos/work/events/mahamarathon-lokmat.png';
import mahindraopensky from '../../Assets/Images/logos/work/events/mahindra-open-sky.png';
import timesfashionweek from '../../Assets/Images/logos/work/events/times-fashion-week.png';
import wethewomen from '../../Assets/Images/logos/work/events/we-the-women.png';

import barci from '../../Assets/Images/logos/work/others/barci.png';
import chinesewok from '../../Assets/Images/logos/work/others/chinese-wok.png';
import hppetrol from '../../Assets/Images/logos/work/others/hp-petrol.png';
import mahycogrow from '../../Assets/Images/logos/work/others/mahyco-grow.png';
import tribevibe from '../../Assets/Images/logos/work/others/tribe-vibe.png';
// Logos Images end

const techLogos = [
  {src: tatamotors, category: 'Automotive'},
  {src: wurthCarHaus, category: 'Automotive'},

  {src: adityabirla, category: 'BFSI'},
  {src: edelweiss, category: 'BFSI'},
  {src: igcb, category: 'BFSI'},
  {src: iifl, category: 'BFSI'},
  {src: invesco, category: 'BFSI'},
  {src: nomura, category: 'BFSI'},
  {src: rgi, category: 'BFSI'},
  {src: trust, category: 'BFSI'},

  {src: bitsom, category: 'Education'},
  {src: bitspilani, category: 'Education'},
  {src: oberoi, category: 'Education'},
  {src: ryan, category: 'Education'},
  {src: thakurTrusts, category: 'Education'},

  {src: americantourister, category: 'RetailFMCG'},
  {src: g2, category: 'RetailFMCG'},
  {src: gocheese, category: 'RetailFMCG'},
  {src: gowardhan, category: 'RetailFMCG'},
  {src: prideofcows, category: 'RetailFMCG'},
  {src: samsonite, category: 'RetailFMCG'},
  {src: siyarams, category: 'RetailFMCG'},
  
  {src: aldo, category: 'FashionLifestyle'},
  {src: godrejlaffaire, category: 'FashionLifestyle'},
  {src: hudobosshugo, category: 'FashionLifestyle'},
  {src: lavie, category: 'FashionLifestyle'},
  {src: missdiva, category: 'FashionLifestyle'},
  {src: movado, category: 'FashionLifestyle'},
  {src: tommyhilfiger, category: 'FashionLifestyle'},
  
  {src: jupiterhospital, category: 'HealthWellness'},
  {src: stepsetgo, category: 'HealthWellness'},
  {src: avvatarindia, category: 'HealthWellness'},

  {src: apolloenergy, category: 'GreenEnergy'},
  {src: athenarenewable, category: 'GreenEnergy'},
  {src: mahindrasolarize, category: 'GreenEnergy'},
  {src: senvion, category: 'GreenEnergy'},
  {src: susten, category: 'GreenEnergy'},
  {src: teqmahindra, category: 'GreenEnergy'},
  
  {src: codashop, category: 'MediaEntertainmentGaming'},
  {src: disney, category: 'MediaEntertainmentGaming'},
  {src: lokmat, category: 'MediaEntertainmentGaming'},
  {src: starwars, category: 'MediaEntertainmentGaming'},
  {src: tips, category: 'MediaEntertainmentGaming'},

  {src: ashargroup, category: 'RealEstate'},
  {src: credaimchi, category: 'RealEstate'},
  {src: ensaara, category: 'RealEstate'},
  {src: jpinfra, category: 'RealEstate'},
  {src: nahargroup, category: 'RealEstate'},
  {src: rajeshlifespaces, category: 'RealEstate'},
  {src: sunteck, category: 'RealEstate'},
  {src: supreme, category: 'RealEstate'},
  {src: ukrealty, category: 'RealEstate'},

  {src: jupitermarathon, category: 'Events'},
  {src: lakmefashionweek, category: 'Events'},
  {src: mahamarathonlokmat, category: 'Events'},
  {src: mahindraopensky, category: 'Events'},
  {src: timesfashionweek, category: 'Events'},
  {src: wethewomen, category: 'Events'},

  {src: barci, category: 'Others'},
  {src: chinesewok, category: 'Others'},
  {src: hppetrol, category: 'Others'},
  {src: mahycogrow, category: 'Others'},
  {src: tribevibe, category: 'Others'},
];

const OurClients = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useLenisScroll();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredLogos = techLogos.filter(logo => selectedCategory === 'All' || logo.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="spacer"></div>
      <section>
        <div className='container'>
          <div className='aboutS'>  
            <div className='aboutScol'>
              <h1 className='sizeH1 uppercase'>Our WORK</h1>  
              <div className='arrowRightH'><PiArrowCircleRightThin /></div>
            </div>      
            <div className='aboutScol'>
              <p>We offer a comprehensive suite of services under one roof. Our expertise spans across multiple departments, ensuring that we deliver holistic and integrated solutions to our clients. We have a proven track record of success across various industries and categories, demonstrating our ability to adapt and excel in different market environments</p>
            </div> 
          </div> 
        </div>
      </section>
      
      <section className='workTabs'>
        <div className='container'>
          <ul className='navBarC'>
            <li><Link to='/work/case-studies' className={location.pathname === '/work/case-studies' ? 'active' : ''}>Case Studies</Link></li>
            <li><Link to='/work/our-clients' className={location.pathname === '/work/our-clients' ? 'active' : ''}>Our Clients</Link></li>
          </ul>

          <div className='ourClientsL'>
            <div className='ourClientsLnav'>
              <ul>
                <li><span className={selectedCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryClick('All')}>All</span></li>
                <li><span className={selectedCategory === 'Automotive' ? 'active' : ''} onClick={() => handleCategoryClick('Automotive')}>Automotive</span></li>
                <li><span className={selectedCategory === 'BFSI' ? 'active' : ''} onClick={() => handleCategoryClick('BFSI')}>BFSI</span></li>
                <li><span className={selectedCategory === 'Education' ? 'active' : ''} onClick={() => handleCategoryClick('Education')}>Education</span></li>
                <li><span className={selectedCategory === 'RetailFMCG' ? 'active' : ''} onClick={() => handleCategoryClick('RetailFMCG')}>Retail & FMCG</span></li>
                <li><span className={selectedCategory === 'FashionLifestyle' ? 'active' : ''} onClick={() => handleCategoryClick('FashionLifestyle')}>Fashion & Lifestyle</span></li>
                <li><span className={selectedCategory === 'HealthWellness' ? 'active' : ''} onClick={() => handleCategoryClick('HealthWellness')}>Health & Wellness</span></li>
                <li><span className={selectedCategory === 'GreenEnergy' ? 'active' : ''} onClick={() => handleCategoryClick('GreenEnergy')}>Green Energy</span></li>
                <li><span className={selectedCategory === 'MediaEntertainmentGaming' ? 'active' : ''} onClick={() => handleCategoryClick('MediaEntertainmentGaming')}>Media, Entertainment & Gaming</span></li>
                <li><span className={selectedCategory === 'RealEstate' ? 'active' : ''} onClick={() => handleCategoryClick('RealEstate')}>Real Estate</span></li>
                <li><span className={selectedCategory === 'Events' ? 'active' : ''} onClick={() => handleCategoryClick('Events')}>Events</span></li>
                <li><span className={selectedCategory === 'Others' ? 'active' : ''} onClick={() => handleCategoryClick('Others')}>Others</span></li>
              </ul>
            </div>


          <div className='ourClientsR'>
            {filteredLogos.map((logo, index) => (
              <span key={index} className={`${selectedCategory === 'All' || logo.category === selectedCategory ? 'show' : ''} ${logo.category}`}>
                <img src={logo.src} alt="" />
              </span>
            ))}
          </div>
         
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OurClients;
