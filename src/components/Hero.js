import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-video-wrapper">
        <video src="Assets/video.mp4" autoPlay loop muted />
      </div>
      <Navbar />
      <div className="hero-content">
        <h2>Capturing the World from Above</h2>
        <p>Discover the beauty of aerial photography and videography.</p>
      </div>
    </div>
  );
}
