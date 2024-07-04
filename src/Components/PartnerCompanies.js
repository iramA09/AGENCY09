import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import pk_a from '../Assets/Images/logos/pk_a.png';
import OctrineOrganics from '../Assets/Images/logos/octrine-organics.png';
import instaHolidays from '../Assets/Images/logos/insta-holidays.png';
import a09store from '../Assets/Images/logos/a09store.png';
import AcademyZeroNine from '../Assets/Images/logos/academy-zero-nine.png';
import l09ix from '../Assets/Images/logos/l09ix.png';
import starY from '../Assets/Images/icons/star.png';




// PartnerCompanies settings
const PartnerCompaniesSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
  // PartnerCompaniesSlider End
const PartnerCompanies = () => {

// Pilllars Data
const PartnerCompanies = [
  
   {
    link: 'https://www.a09store.com/',  
    image: a09store,
    Text: 'Look Cool, Feel Happy. E-Commerce merchandise store that empowers	 artists and seeks to build a community.',
    siteUrl: 'www.a09store.com'
    },
    {
      link: 'https://www.instaholidays.in/',  
      image: instaHolidays,
      Text: 'Crafting personalized travel experiences to make your holidays unforgettable. Discover the world with tailored itineraries and expert guidance.',
      siteUrl: 'www.instaholidays.in'
    },
    {
      link: '#',  
      image: l09ix,
      Text: "Logix is a leading tech company specializing in the development of custom software, mobile applications, and enterprise resource planning (ERP) systems, designed to streamline operations and enhance business productivity. Our innovative solutions cater to various industries, providing scalable and efficient tools to drive growth and optimize resources.",
    },

    {
        link: 'https://www.academy09.com/',  
        image: AcademyZeroNine,
        Text: ' Empowering creative talent through hands-on digital marketing, creative & tech training.',
        siteUrl: 'www.academy09.com'
    },
    

    {
        link: 'https://www.pk-a.in/',  
        image: pk_a,
        Text: 'Buy, Rent or Sell. Real estate done right with precision & Creativity',
        siteUrl: 'www.pk-a.in'
    },
    {
        link: 'https://www.octarineorganics.com/',  
        image: OctrineOrganics,
        Text: "Pioneering organic mushroom farming with a focus on health and sustainability. Bringing the best of nature's superfoods to your table.",
        siteUrl: 'www.octarineorganics.com'
    }
    
              
  ]
  // Pilllars Data End

  return (
    <>
     <div className='Heading center HeadingIcon pb-30'>
          <h2 className='sizeH1 uppercase'>
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} alt='Star Icon' />
              </i>
            </span>
            Partner Companies
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} alt='Star Icon' />
              </i>
            </span>
          </h2>
        </div>
   
   <div className='ourEcosystemDiv'>
    <ul>
          {PartnerCompanies.map((PartnerCompanies, index) => (
            <li> 
            <div key={index} className='item'>
                <Link to={PartnerCompanies.link} target="_blank">
                    <div className='PartnerCompaniesCol'>
                        <div className='PartnerCompaniesImg'><img src={PartnerCompanies.image} alt='' /></div>
                        <div className='PartnerCompaniesText'><p>{PartnerCompanies.Text}</p></div>
                        <div className='PartnerCompaniesUrl'><span>{PartnerCompanies.siteUrl}</span></div>
                    </div>
                </Link>
            </div>
            </li>
          ))} 
    </ul>
   </div>
    </>
  )
}

export default PartnerCompanies
