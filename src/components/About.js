import "./Aboutus.css"; // Import CSS file for styling
import logo from "./logo.png";
export default function Aboutus() {
  return (
    <div>
      <h1 className="heading">About Us</h1>
      <div className="about-container">
        <div className="about-text">
          <h1 className="poppins-semibold-italic">
            <span>
              <img src={logo} alt="logo" className="aboutlogo" />
            </span>
            Unique Aerial Vision
          </h1>{" "}
          <p className="nunito-sans-regular">
            Unique Aerial Vision is a premier provider of advanced drone
            services, offering unparalleled expertise in aerial cinematography,
            event coverage, real estate imaging, and industrial surveying. With
            over 7 years of professional experience, we deliver cutting-edge
            solutions that blend creativity with technical precision, ensuring
            high-quality visuals for clients across diverse industries. Our team
            of certified drone pilots, equipped with state-of-the-art
            technology, excels in capturing stunning aerial perspectives that
            enhance storytelling, optimize operations, and provide valuable
            insights. At Unique Aerial Vision, we elevate your vision to new
            heights, delivering results that are innovative, impactful, and
            distinctly professional.
          </p>
        </div>
        <div className="about-image">
          <img src="Assets/Drone.jpg" alt="Drone capturing aerial view" />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
