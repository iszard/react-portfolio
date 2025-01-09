import PropTypes from "prop-types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImageSlider = ({ imageURLs, imageAltValue }) => {
  const swiperLoop = imageURLs.length > 1 ? true : false;
  return (
    <Swiper
      spaceBetween={30}
      loop={swiperLoop}
      centeredSlides={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      style={{
        "--swiper-pagination-color": "#fff",
      }}
      lazy="true"
      modules={[Autoplay, Pagination, Navigation]}
    >
      {imageURLs.map((imageURL, index) => (
        <SwiperSlide key={index}>
          <img
            src={imageURL}
            loading="lazy"
            alt={`${imageAltValue} ${index + 1}`}
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ImageSlider.propTypes = {
  imageURLs: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageAltValue: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default ImageSlider;
