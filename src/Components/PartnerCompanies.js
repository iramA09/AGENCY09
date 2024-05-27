import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import pk_a from '../Assets/Images/logos/pk_a.png';
import OctrineOrganics from '../Assets/Images/logos/octrine-organics.png';
import instaHolidays from '../Assets/Images/logos/insta-holidays.png';
import a09store from '../Assets/Images/logos/a09store.png';
import AcademyZeroNine from '../Assets/Images/logos/academy-zero-nine.png';

// PartnerCompanies settings
const PartnerCompaniesSlider = {
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
        link: 'https://www.academy09.com/',  
        image: AcademyZeroNine,
        Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        link: 'https://www.a09store.com/',  
        image: a09store,
        Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        link: 'https://www.instaholidays.in/',  
        image: instaHolidays,
        Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        link: 'https://www.pk-a.in/',  
        image: pk_a,
        Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        link: 'https://www.octarineorganics.com/',  
        image: OctrineOrganics,
        Text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
              
  ]
  // Pilllars Data End

  return (
    <>
    <div className='Heading center HeadingIcon'>
          <h2 className='sizeH4 uppercase'>Partner Companies</h2>
    </div>
    <Slider {...PartnerCompaniesSlider} className='PartnerCompaniesSlider slick-slider'>
          {PartnerCompanies.map((PartnerCompanies, index) => (
            <div key={index} className='item'>
                <Link to={PartnerCompanies.link} target="_blank">
                    <div className='PartnerCompaniesCol'>
                        <div className='PartnerCompaniesImg'><img src={PartnerCompanies.image} alt='' /></div>
                        <div className='PartnerCompaniesText'><p>{PartnerCompanies.Text}</p></div>
                    </div>
                </Link>
            </div>
          ))}
        </Slider>



    </>
  )
}

export default PartnerCompanies
