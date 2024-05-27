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
            year: 2024,
            eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        },
        {
            year: 2023,
            eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        },
        {
            year: 2022,
            eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        },
        {
            year: 2021,
            eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        },
        {
            year: 2020,
            eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        },   
        {
            year: 2019,
            eventsText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
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
                <div className='awardsTag'><GiSevenPointedStar /></div>
                <div className='awardsText'><p>{awards.eventsText}</p></div>
                <div className='awardsYear'><h5>{awards.year}</h5></div>
              </div>
            </div>
          ))}
        </Slider>
    </div> 
    </>
  )
}

export default Awards
