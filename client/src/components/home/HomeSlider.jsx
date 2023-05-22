import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'
//imgs
import acupuntura from '../../assets/home/acupuntura.jpg'
import fisioterapia from '../../assets/home/fisioterapia.jpg'
import quiropraxia from '../../assets/home/quiropraxia.jpg' 
import quiropraxiaIndiana from '../../assets/home/quiropraxia-indiana.jpg' 
import sotaiho from '../../assets/home/sotaiho.jpg' 
import shiatsu from '../../assets/home/shiatsu.jpg'
import kawai from '../../assets/home/kawai-kinkeitai.jpg'
import bodymap from '../../assets/home/map-bodymuscle_250x250.jpg'


export default function HomeSlider() {
   var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      responsive:
         [
            {
               breakpoint: 800,
               settings: {
                  slidesToShow: 1
               }
            }
         ]
   };
   return (
      <Slider {...settings}>
         <div className='slider-container'>
            <img src={acupuntura} alt='acupuntura-pic' />
            <p>Acupuntura</p>
         </div>
         <div className='slider-container'>
            <img src={fisioterapia} alt='fisioterapia-pic' />
            <p>Fisioterapia</p>
         </div>
         <div className='slider-container'>
            <img src={quiropraxia} alt='quiropraxia-pic' />
            <p>Quiropraxia</p>
         </div>
         <div className='slider-container'>
         <img src={quiropraxiaIndiana} alt='quiropraxia-pic' />
         <p>Quiropraxia Indiana</p>
      </div>
         <div className='slider-container'>
            <img src={shiatsu} alt='shiatsu-pic' />
            <p>Shiatsu</p>
         </div>
         <div className='slider-container'>
            <img src={kawai} alt='kawai-pic' />
            <p>Kawai Kinkeitai</p>
         </div>
         <div className='slider-container'>
            <img src={sotaiho} alt='sotaiho-pic' />
            <p>sotaiho</p>
         </div>
         <div className='slider-container'>
          <img src={bodymap} alt="body-pic" />
            <p>E muito mais...</p>
         </div>
      </Slider>
   );
}
