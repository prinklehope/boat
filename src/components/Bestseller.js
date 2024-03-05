import React from "react";
import Slider from "react-slick";

function Bestseller() {
    return (
      <div className="bestseller-container">
        <h1 className="bestseller-heading">Explore Bestsellers</h1>
        <div className="scrolling-wrapper">
          <div className="item">
            <video 
              className="round-border"
              src="/smartwatch.mp4"
              width="320" 
              height="320" 
              onMouseEnter={event => event.target.play()} 
              onMouseLeave={event => event.target.pause()} 
              muted
            />
            <h3>Smartwatch</h3>
          </div>
          <div className="item">
            <video 
              className="round-border"
              src="/wirelessBuds.mp4"
              width="320" 
              height="320" 
              onMouseEnter={event => event.target.play()} 
              onMouseLeave={event => event.target.pause()} 
              muted
            />
            <h3>Wireless Buds</h3>
          </div>
          <div className="item">
            <video 
              className="round-border"
              src="/neckbands.mp4"
              width="320" 
              height="320" 
              onMouseEnter={event => event.target.play()} 
              onMouseLeave={event => event.target.pause()} 
              muted
            />
            <h3>Neckbands</h3>
          </div>
          <div className="item">
            <video 
              className="round-border"
              src="/headphones.mp4"
              width="320" 
              height="320" 
              onMouseEnter={event => event.target.play()} 
              onMouseLeave={event => event.target.pause()} 
              muted
            />
            <h3>Headphones</h3>
          </div>
          <div className="item">
            <video 
              className="round-border"
              src="/speakers.mp4"
              width="320" 
              height="320" 
              onMouseEnter={event => event.target.play()} 
              onMouseLeave={event => event.target.pause()} 
              muted
            />
            <h3>Speakers</h3>
          </div>
          </div>
          </div>
          
  );
}

export default Bestseller;
