import React from "react";
import Slider from "react-slick";

function Carousal() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="/home1.webp" alt="home1" className="slider-image" />
                </div>
                <div>
                    <img src="/home2.webp" alt="home2" className="slider-image" />
                </div>
                <div>
                    <img src="/home3.webp" alt="home3" className="slider-image" />
                </div>
                <div>
                    <img src="/home4.webp" alt="home4" className="slider-image" />
                </div>
            </Slider>
        </div>
    );
}

export default Carousal;