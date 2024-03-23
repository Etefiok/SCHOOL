import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Imagecarousel.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    cssEase: "linear",
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, item, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img src={image} alt={`Slide ${index}`} />
            <h1 style={{
              position: 'absolute',
              top: '10px', // Adjust the position of the text
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              fontSize: '24px',
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
              padding: '10px', // Add padding to the text
            }}>things fall apart</h1>
          <p>i am good </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
