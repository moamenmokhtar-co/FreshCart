import React, { useEffect, useState } from "react";
import style from "./WelcomeSlide.module.css";
import WelcomSlide1 from "../../assets/images/Slider/3-landscape.jpg";
import WelcomSlide2 from "../../assets/images/Slider/1-landscape.jpg";
import WelcomSlide3 from "../../assets/images/Slider/2-landscape.jpg";
import WelcomSlide4 from "../../assets/images/Slider/4-landscape.jpg";
import Slider from "react-slick";
export default function WelcomeSlide() {
  const [first, setFirst] = useState(0);
  useEffect(() => {}, []);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container px-2">
        <Slider {...settings}>
          <div>
            <img
              className="rounded-md block w-full object-contain"
              src={WelcomSlide1}
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md block w-full object-contain"
              src={WelcomSlide2}
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md block w-full object-contain"
              src={WelcomSlide3}
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-md block w-full object-contain"
              src={WelcomSlide4}
              alt=""
            />
          </div>
        </Slider>
      </div>

      {/* <div className="home rounded-lg w-full md:max-w-[90rem]  md:mx-auto pb-10">
        
      </div> */}
    </>
  );
}
