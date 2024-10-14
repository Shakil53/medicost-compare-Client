
import carouselImg1 from '../../../assets/carousel/doctor-web-banner16.jpg'
import carouselImg2 from '../../../assets/carousel/happy10-web-banner01.jpg'
import carouselImg3 from '../../../assets/carousel/insulin-web-banner1.jpg'
import carouselImg4 from '../../../assets/carousel/web-banner0.jpg'
import carouselImg5 from '../../../assets/carousel/web-banner5.jpg'
import carouselImg6 from '../../../assets/carousel/woman-care-web-banner.jpg'

import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


const Carousel = () => {
    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={1}
      autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={carouselImg1}></img></SwiperSlide>
      <SwiperSlide><img src={carouselImg2}></img></SwiperSlide>
      <SwiperSlide><img src={carouselImg3}></img></SwiperSlide>
      <SwiperSlide><img src={carouselImg4}></img></SwiperSlide>
      <SwiperSlide><img src={carouselImg5}></img></SwiperSlide>
      <SwiperSlide><img src={carouselImg6}></img></SwiperSlide>
      
    </Swiper>
        
    );
};

export default Carousel;