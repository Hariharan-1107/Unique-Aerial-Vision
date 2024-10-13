import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web"; // Import Lottie
import Navbar from "./Navbar";

export default function Hero() {
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const loadingAnimationRef = useRef(null); // Create a ref for the animation container

  function handleVideoLoad() {
    setVideoLoaded(true);
  }

  useEffect(() => {
    // Initialize Lottie animation
    const animation = lottie.loadAnimation({
      container: loadingAnimationRef.current, // Reference to the container
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://lottie.host/embed/678d52c4-cc69-4103-a0bf-03f3f1b6e5d8/q3pUdwIOTf.json", // Path to your Lottie JSON
    });

    return () => {
      animation.destroy(); // Clean up the animation instance on unmount
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-video-wrapper">
        <video
          src="Assets/video.mp4"
          autoPlay
          loop
          muted
          onLoadedData={handleVideoLoad}
          style={{ display: isVideoLoaded ? "block" : "none" }}
        />
        {!isVideoLoaded && (
          <div
            className="loading"
            ref={loadingAnimationRef}
            style={{ width: "300px", height: "300px" }}
          ></div>
        )}
      </div>
      <Navbar />
      <div className="hero-content">
        <h2>Capturing the World from Above</h2>
        <p>Discover the beauty of aerial photography and videography.</p>
      </div>
    </div>
  );
}
