import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import "lightgallery.js/dist/css/lightgallery.css";

const LifeAtA09 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get('https://agency09.in/cms/api/getGallery')
      .then(response => {
        setImages(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching gallery data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      try {
        sliderRef.current.slickGoTo(0);
      } catch (e) {
        console.error('Error resetting slider position:', e);
      }
    }
  }, [images]);

  // Updated zoom function with additional safeguards
  const zoom = (targetElement) => {
    if (!targetElement) {
      console.warn("Element is null or undefined, cannot access clientWidth");
      return;
    }

    // Add a delay to ensure DOM stability
    setTimeout(() => {
      const width = targetElement?.clientWidth;
      if (!width) {
        console.warn("Failed to access clientWidth, element may not be fully rendered.");
        return;
      }

      console.log(`Zoom logic using width: ${width}`);
      // Proceed with additional zoom logic here
    }, 100); // 100ms delay
  };

  const LogosSliders = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    rows: 2,
    speed: 700,
    slidesToShow: 3,
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

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return '';
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="LifeAtA09Row">
      {images.length > 0 && (
        <LightgalleryProvider>
          <Slider {...LogosSliders} className="LogosSlider-slick slick-slider" ref={sliderRef}>
            {images.map((image, index) => (
              <div key={index} className="item">
                <div className="LifeAtA09Col">
                  {/* Main Image */}
                  {image.src && (
                    <LightgalleryItem group={image.group} src={image.src}>
                      <img loading='lazy' 
                        src={image.src} 
                        alt={`lifeata09_${index + 1}`}  
                        onLoad={(e) => zoom(e.target)} // Apply zoom logic when image loads
                      />
                      <div className="LifeAt09Text">
                        <h3>{image.title}</h3>
                      </div>
                    </LightgalleryItem>
                  )}

                  {/* Additional Images */}
                  {image.additionalImages && image.additionalImages.map((additionalImage, addIndex) => (
                    <LightgalleryItem key={addIndex} group={image.group} src={additionalImage}>
                      <img loading='lazy' 
                        src={additionalImage}  
                        alt={`additional_${addIndex + 1}`} 
                        style={{ display: 'none' }} 
                        onLoad={(e) => zoom(e.target)} // Apply zoom logic when additional image loads
                      />
                    </LightgalleryItem>
                  ))}

                  {/* YouTube URLs */}
                  {image.urls && JSON.parse(image.urls).map((url, urlIndex) => (
                    url ? (
                      <LightgalleryItem
                        key={urlIndex}
                        group={image.group}
                        src={getYouTubeEmbedUrl(url)}
                        iframe={true}
                      >
                      </LightgalleryItem>
                    ) : null
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </LightgalleryProvider>
      )}
    </div>
  );
};

export default LifeAtA09;
