import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false });

const Partner = () => {
  const partnerImages = [
    '/img/partner/partner1.png',
    '/img/partner/partner2.png',
    '/img/partner/partner3.png',
    '/img/partner/partner4.png',
    '/img/partner/partner5.png',
    '/img/partner/partner6.png',
  ];

  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, // Adjust the autoplay speed in milliseconds
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div className="partner-area pt-100 pb-70 bg-f1f8fb">
      <div className="container partener">
        <OwlCarousel className="owl-theme" {...options}>
          {partnerImages.map((image, index) => (
            <div key={index} className="item">
              <img src={image} alt={`partner-${index + 1}`} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Partner;
