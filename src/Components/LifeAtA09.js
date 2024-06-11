import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import "lightgallery.js/dist/css/lightgallery.css";
import lifeata09_1 from '../Assets/Images/lifeata09/1.jpg';
import lifeata09_2 from '../Assets/Images/lifeata09/2.jpg';
import lifeata09_3 from '../Assets/Images/lifeata09/3.jpg';
import lifeata09_4 from '../Assets/Images/lifeata09/4.jpg';
import lifeata09_5 from '../Assets/Images/lifeata09/5.jpg';
import lifeata09_6 from '../Assets/Images/lifeata09/6.jpg';
import lifeata09_7 from '../Assets/Images/lifeata09/7.jpg';
import lifeata09_8 from '../Assets/Images/lifeata09/8.jpg';
import lifeata09_9 from '../Assets/Images/lifeata09/9.jpg';
import lifeata09_10 from '../Assets/Images/lifeata09/10.jpg';
import lifeata09_11 from '../Assets/Images/lifeata09/11.jpg';
import lifeata09_12 from '../Assets/Images/lifeata09/12.jpg';



const LifeAtA09 = () => {
  const sliderRef = useRef(null);

  const LogosSliders = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    rows: 2,
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

  return (
    <div className="LifeAtA09Row">
      <Slider {...LogosSliders} className="LogosSlider-slick slick-slider arrowLRC" ref={sliderRef}>
      <LightgalleryProvider>
      <div className="item">
            <div className="LifeAtA09Col">
                <LightgalleryItem group='group1' src={lifeata09_1}>
                  <img src={lifeata09_1} />
                  <LightgalleryItem group='group1' src={lifeata09_2}></LightgalleryItem>
                  <LightgalleryItem group='group1' src={lifeata09_3}></LightgalleryItem>
                  <LightgalleryItem group='group1' src={lifeata09_4}></LightgalleryItem>
                </LightgalleryItem>

             
            </div>
          </div>
        </LightgalleryProvider>
      </Slider>
    </div>
  );
};

export default LifeAtA09;
