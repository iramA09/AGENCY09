import React from 'react';
import starY from '../Assets/Images/icons/star.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { FaStarOfLife } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
// MilestonesSlider settings
const MilestonesSlider = {
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
// MilestonesSlider End

const Milestones = () => {
  const milestonesData = [
    {
      year: 2024,
      teamStrength: 80,
      events: ['Sports Day', 'Tata Motors Live', 'Store - Comic Con'],
    },
    {
      year: 2023,
      teamStrength: 80,
      events: ['Salary Shifted to Pvt Ltd', 'Goa Trip - 65 People', 'First A Team Meet up - 24', 'Shivangi becomes plus one', 'Ritesh Became plus one', 'AGENCY09 Board', 'Rasika became plus one', 'Got Bits Pilani Website Live', 'Tata Motors', 'Bits Pilani - Website']
    },
    {
      year: 2022,
      teamStrength: 65,
      events: ['Pvt Ltd', 'New Office', 'Rakesh Becomes plus one', 'Get together at Raasta', 'ACADEMY09 - First Lecture', 'Got Featured in Forbes Online'],
    },
    {
      year: 2021,
      teamStrength: 45,
      events: ['Kelwa trip', 'Saheb Dubai gaya', '50+ A09ers', 'G2: Series of print ads and multiple packaging', 'Gautam becomes plus one', 'Insta Holidays Launch'],
    },
    {
      year: 2020,
      teamStrength: 45,
      events: ['Annual Meet', 'Product Launch', 'New Office Opening'],
    },
  ];

  return (
    <>
      <div className='milestoneRow'>
        <div className='Heading center HeadingIcon'>
          <h2 className='sizeH1 uppercase'>
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} alt='Star Icon' />
              </i>
            </span>
            Milestones
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} alt='Star Icon' />
              </i>
            </span>
          </h2>
        </div>

        <Slider {...MilestonesSlider} className='MilestonesSlider slick-slider'>
          {milestonesData.map((milestone, index) => (
            <div key={index} className='item'>
                <div className='milestoneLine'>
                  <GrStar />
                </div>
              <div className='milestoneCol'>
        
                <h2>{milestone.year}</h2>
                <div className='milestoneTag'><FaStarOfLife /> Team Strength - <span>{milestone.teamStrength}</span></div>
                <ul>
                  {milestone.events.map((event, eventIndex) => (
                    <li key={eventIndex}>
                      <p>{event}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Milestones;
