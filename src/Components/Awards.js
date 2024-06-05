import React from 'react'
import starY from '../Assets/Images/icons/star.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { GiSevenPointedStar } from "react-icons/gi";
// awardsSlider settings
const awardsSlider = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 7000,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
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
// awardsSlider End

const Awards = () => {
  const awardsData = [
      {
          year: '',
          eventsText: 'Best use of Instagram',
          eventAdmin: 'Reliance General Insurance'
      },
      {
          year: '',
          eventsText: 'Best Books',
          eventAdmin: 'BARC India(Yearbook)'
      },
      {
          year:  '',
          eventsText: 'Best Corporate Website',
          eventAdmin: 'Mahindra Susten'
      },
      {
          year: '',
          eventsText: 'Leveraging  Social Media to Boost ROI & Engagement.',
          eventAdmin: 'Mahindra Solarize'
      },
      {
          year: '',
          eventsText: 'Best Packaging',
          eventAdmin: 'Octarine Organics'
      },   
      {
          year: '',
          eventsText: 'Best Use of Influencers for Lifestyle Brands',
          eventAdmin: 'American Tourister'
      },
      {
          year: '',
          eventsText: 'Best Use of Influencers on Instagram',
          eventAdmin: 'Godrej Laffaire'
      },
      {
          year: '',
          eventsText:'Best Application of User Generated Content', 
          eventAdmin: 'Reliance General Insurance'
      },   
      {
          year: '',
          eventsText: 'AWWWards Nominee',
          eventAdmin: 'Siyarams India'
      },
      {
          year: '',
          eventsText: 'AWWWards Nominee',
          eventAdmin: 'TribeVibe'
      },
      {
          year: '2023',
          eventsText: 'Idea Award Best Website 2023',
          eventAdmin: 'Nahar Group'
      }
  ];
    

  return (
    <>
    <div className='awardsRow'>
        <div className='Heading center HeadingIcon'>
          <h2 className='sizeH1 uppercase'>
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} alt='Star Icon' />
              </i>
            </span>
            awards
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} alt='Star Icon' />
              </i>
            </span>
          </h2>
        </div>

        <Slider {...awardsSlider} className='awardsSlider slick-slider'>
          {awardsData.map((awards, index) => (
            <div key={index} className='item'>
              <div className='awardsCol'>
                <div className='awardsColIn'>
                <div className='awardsTag'><GiSevenPointedStar /></div>
                <div className='awardsText'><p>{awards.eventsText}</p></div>
                <div className='awardsText2'><p>- {awards.eventAdmin}</p></div>
                <div className='awardsYear'><h5>{awards.year}</h5></div>
              </div></div>
            </div>
          ))}
        </Slider>
    </div> 
    </>
  )
}

export default Awards
