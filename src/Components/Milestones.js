import React from 'react';
import starY from '../Assets/Images/icons/star.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { FaStarOfLife } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
// MilestonesSlider settings
const MilestonesSlider = {
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 7000,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
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
// MilestonesSlider End

const Milestones = () => {
  const milestonesData = [
    {
      year: 2024,
      teamStrength: 85,
      events: ['Sports Day', 'Tata Motors Live', 'Store - Comic Con', 'Chaitali Plus 2', 'Laffaire Event'],
    },
    {
      year: 2023,
      teamStrength: 80,
      events: ['Salary Shifted to Pvt Ltd', 'Goa Trip - 65 People', 'First A Team Meet up - 24', 'Shivangi becomes plus one', 'Ritesh Became plus one', 'AGENCY09 Board', 'Rasika became plus one', 'Got Bits Pilani Website Live', 'Tata Motors', 'Bits Pilani - Website', '10th Year - Biggest Parents Meet Up']
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
      teamStrength: 38,
      events: ['Debt Free', 'Lockdown', 'First Creative Tweeted by PM', 'First logo for International Client', '#PM Retweeted #MuskurayagaIndia', 'First Consulting Client - SSG', 'Bagged  - MGI Group - Tommy Hilfiger', 'Won 06 Awards', 'RYAN SEO', 'Appraisals during Lockdown', '9th Anniversary celebration'],
    },
    {
      year: 2019,
      teamStrength: 35,
      events: ['Bipeen Become Plus One', 'Bagged Star Wars (Disney)', 'RGI - National Campaign (Covered Hai)', 'Almost debt free', 'Australia Office Started', 'JJUST onboard', 'Dubai Franchise - Mayank', 'A campaign got copied', 'Ryan International (92 Website Project)', 'Nomura (Social Network Project)', 'Started Blog - agency.co', 'Archita Introduced Ayaansh', 'PKA - First Deal', 'Exerfit', 'Nomura Bank - Social Newtork'],
    },
    {
      year: 2018,
      teamStrength: 30,
      events: ['International Expansion - Dubai Trip', 'Conceptualized and designed a cafe - Road House Cafe', 'Alibaug', 'Raj Bhai Joined the Team', 'Reliance General Insurance', 'Total Team Strength - 5'],
    },
    {
      year: 2017,
      teamStrength: 25,
      events: ['Amanzee - Club Party', 'First Web Series - Lalbuag Chi Jatra', 'First feature in a magazine', 'Pyaar Ka Rang Sunehra - Biggest Campaign', 'Rennovation', 'Australia Start Date', 'Tech Team Got Formed'],
    },
    {
      year: 2016,
      teamStrength: 18,
      events: ['Team Camping trip - Red Hat', '5000+ Real-estate Leads', 'Archita Joined the team', 'First Regional newspaper client - Lokmat',],
    },
    {
      year: 2015,
      teamStrength: 14,
      events: ['Bagged Lakme Fashion Week', 'Actually started using all the rooms', 'Team Camping trip', '1st International Client - Rocket', 'A09 Party - Villa 69', 'Chaitali Aditya Joined the Team', 'Krunal Joined the Team'],
    },
    {
      year: 2014,
      teamStrength: 11,
      events: ['Office Painting Session', 'Shifted office', 'Bangalore Book Festival', '#EduSelfie - first organic viral campaign', 'Total Team Strength - 21', 'Rakesh Gawas Joined the Team', 'Gautam Joined the Team', 'Total Team Strength - 5', 'Team Outing - Goa Trip', 'Turning Point - Got our first 6 Digit Retainer'],
    },
    {
      year: 2013,
      teamStrength: 5,
      events: ['15 Days single seat sofa with no AC, Lights & Fan', 'First Cheque - Vinegar', 'Hogiliscious Website', 'Pehla Office - 09-09-13 - Ganesh Chaturthi', 'First Computer / First AC', 'First Retainer', 'Three wise men - Nikita', 'Game Changer Launch - Scare Crow + pagadi', 'One Pager Website', 'Rutul First Version Logo',],
    },
    {
      year: 2012,
      // teamStrength: 45,
      events: ['Domain Booked', 'Diary & White Board Planning', 'Dining Table Set Up', 'A09 Logo',],
    },
  ];

  return (
    <>
      <div className='milestoneRow'>
        <div className='Heading center HeadingIcon'>
          <h2 className='sizeH1 uppercase'>
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} loading='lazy' alt='Star Icon' />
              </i>
            </span>
            Milestones
            <span className='iconSVG'>
              <i className='iconF'>
                <img src={starY} loading='lazy' alt='Star Icon' />
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
