import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselList.scss";
import Card from "../Card/Card";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },

  tablet: {
    breakpoint: { max: 1024, min: 720 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const CarouselList = ({ data, heading }) => {
  let data1 = data.categories || [];

  return (
    <div className="carouselBox">
      <p className="heading">{heading}</p>
      <Carousel
        className="carousel"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        //make sure with this combo of auto play, the time should not less than 1.7s, smaller than this would cause a splash
        autoPlaySpeed={1700}
        customTransition="all 1.7s ease-in-out"
        transitionDuration={1700}
        ///////////////////////
        showDots={true}
        ssr={true}
      >
        {data1?.map((item) => {
          return (
            <div className="cardInCarousel">
              <Card item={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselList;
