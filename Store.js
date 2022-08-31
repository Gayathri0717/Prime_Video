import React, { useState } from 'react'
import vd from "./videos/WhatsApp Video 2022-08-15 at 8.01.50 AM.mp4";
import vd2 from "./videos/WhatsApp Video 2022-08-15 at 8.01.50 AM.mp4";
import Image5 from './images/ag.jpg';
import "./Video.css"
import Image2 from './images/dr6.jpg';
import Image4 from './images/2.jpg';
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Video from "./Video";
import "react-multi-carousel/lib/styles.css";
import "./Store.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Store() {

  const data = [
    {
      title: "KTM RC 1190RC8 Top  Speed",
      vid: vd,
      image: Image2

    },
    {
      title: "KTM RC 1190RC8 Top  Speed",
      vid: vd2,

      image: Image4

    },
    {
      title: "KTM RC 1190RC8 Top  Speed",
      vid: vd2,

      image: Image5

    },
    {
      title: "KTM RC 1190RC8 Top  Speed",
      vid: vd2,

      image: Image4

    },
    {
      title: "KTM RC 1190RC8 Top  Speed",
      vid: vd2,

      image: Image5

    }
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const [current, setCurrent] = useState(0)
  const length = data.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);

  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);

  };


  // console.log(current);

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div>
      <ArrowBackIosIcon className='left' onClick={prevSlide} />
      <ArrowForwardIosIcon className='right' onClick={nextSlide} />
      <Header />

      {data.map((e, i, a) => {
        return (


            <div key={e} className={i == current ? 'slide active' : 'slide'}> {i === current && (<img src={e.image} className="img"></img>)} </div>

        )
      })}
      <div className='topic_1'>
  
        <p className='topic'>RENT
          New release movies
        </p> 
        <Slider {...settings}>
        {data.map((e, i, a) => (
          <Video value={e} />
        )

      )}


          </Slider> 
     
    </div>
    </div>
  );

};
export default Store
