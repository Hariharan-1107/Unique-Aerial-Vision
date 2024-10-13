import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const [isVideoloaded, setVideoloaded] = React.useState(false);
  function handleVideoLoad() {
    setVideoloaded(true);
  }
  return (
    <div className="hero-container">
      <div className="hero-video-wrapper">
        <video
          src="Assets/video.mp4"
          autoPlay
          loop
          muted
          onLoadedData={handleVideoLoad}
          style={{ display: isVideoloaded ? "block" : "none" }}
        />
      </div>
      <Navbar />
      {!isVideoloaded && (
        <div className="loading">
          <iframe
            src="https://lottie.host/embed/678d52c4-cc69-4103-a0bf-03f3f1b6e5d8/q3pUdwIOTf.json"
            style={{ width: "300px", height: "300px", border: "none" }}
            title="Drone Animation"
          ></iframe>
        </div>
      )}
      <div className="hero-content">
        <h2>Capturing the World from Above</h2>
        <p>Discover the beauty of aerial photography and videography.</p>
      </div>
    </div>
  );
}
