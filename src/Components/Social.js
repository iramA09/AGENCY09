import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Link } from 'react-router-dom';

import starY from '../Assets/Images/icons/star.webp';

const Social = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
  }, []);

  // CultureSlider
  const CultureSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
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
          arrows: true,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
        }
      }
    ]
  };

  const videos = [
    { id: 1, url: "https://www.youtube.com/embed/lwaoZUeekbI", title: "Behind the AGENCY09" },
    { id: 2, url: "https://www.youtube.com/embed/kEY2I0t64HM", title: "AGENCY09 - The team" },
    { id: 3, url: "https://www.youtube.com/embed/wQgHwsarek8", title: "Resolutions | AGENCY09" },
    { id: 4, url: "https://www.youtube.com/embed/EmEA2j234hU", title: "The Finger Pacer | AGENCY09" }
  ];

  const handleMouseEnter = (id) => {
    setHoveredVideo(id);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <>
      <section className='Culture'>
        <div className='container'>
          <div className='Heading center'>
            <h2 className='sizeH1 uppercase'>
              <span>Young</span>
              <span>
                <i className="iconF">
                  <img src={starY} loading='lazy' alt="Star Icon" />
                </i>
              </span>
              <span>Inclusive</span>
              <span>
                <i className="iconF">
                  <img src={starY} loading='lazy' alt="Star Icon" />
                </i>
              </span>
              <span>Diverse</span>
              <span>
                <i className="iconF">
                  <img src={starY} loading='lazy' alt="Star Icon" />
                </i>
              </span>
              <span>Creative</span>
            </h2>
          </div>

          <Slider {...CultureSlider} className="CultureSlider-slick slick-slider arrowLRC">
            {videos.map((video) => (
              <div
                className='item'
                key={video.id}
                onMouseEnter={() => handleMouseEnter(video.id)}
                onMouseLeave={handleMouseLeave}
              >
                <iframe
                  src={`${video.url}${hoveredVideo === video.id ? '?autoplay=1&' : '?'}controls=0&modestbranding=1&rel=0`}
                  title={`YouTube video player - ${video.title}`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slider>

          <div className='CultureRow center'>
            <p>
              We’re building a culture of progressive thinking open minded folks
              who are well equipped to tackle the nuances of communicating with the thumb generation.
            </p>
            <div className='CultureRowBtn'>
              <Link className="btnDark ripple-button" to='/careers#LifeAtA09'>
                <span>Our Culture</span>
              </Link>
              <Link className="btnDark ripple-button" to='https://www.youtube.com/@agency09official/playlists' target="_blank">
                <span>View Playlist</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
