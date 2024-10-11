import React from "react";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  return (
    <div className="hero-container">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showArrows={true}
        className="hero-carousel"
        interval={3000}
      >
        <div>
          <img src="/Assets/image1.webp" alt="Aerial1" loading="lazy" />
        </div>
        <div>
          <img src="Assets/image2.webp" alt="Aerial2" loading="lazy" />
        </div>
        <div>
          <img src="Assets/image3.webp" alt="Aerial3" loading="lazy" />
        </div>
      </Carousel>
      <Navbar />
      <div className="hero-content">
        <h2>Capturing the World from Above</h2>
        <p>Discover the beauty of aerial photography and videography.</p>
      </div>
    </div>
  );
}
