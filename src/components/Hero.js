import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const [isVideoLoaded, setVideoLoaded] = React.useState(false);
  const [showAnimation, setShowAnimation] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 1000); // Display animation for 1 second

    return () => clearTimeout(timer);
  }, []);

  function handleVideoLoad() {
    setVideoLoaded(true);
  }

  return (
    <div className="hero-container">
      {showAnimation ? (
        <div className="loading">
          <iframe
            src="https://lottie.host/embed/678d52c4-cc69-4103-a0bf-03f3f1b6e5d8/q3pUdwIOTf.json"
            style={{ width: "300px", height: "300px", border: "none" }}
            title="Drone Animation"
          ></iframe>
        </div>
      ) : (
        <div className="hero-video-wrapper">
          <video
            src="Assets/video.mp4"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            style={{ display: isVideoLoaded ? "block" : "none" }}
          />
        </div>
      )}
      <Navbar />
      <div className="hero-content">
        <h2>Capturing the World from Above</h2>
        <p>Discover the beauty of aerial photography and videography.</p>
      </div>
    </div>
  );
}
