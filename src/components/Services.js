import Cardbox from "./Card";
export default function Services() {
  const services = [
    {
      title: "Aerial Cinematography",
      description:
        "Capturing stunning, cinematic visuals for films, commercials, and creative projects, delivering high-quality footage that enhances storytelling.",
      url: "Assets/Aerial.png",
    },
    {
      title: "Event Coverage",
      description:
        "Providing comprehensive aerial coverage for weddings, corporate events, festivals, and more, ensuring every moment is captured from unique perspectives.",
      url: "Assets/Event.png",
    },
    {
      title: "Surveying and Mapping",
      description:
        "Offering precision-driven surveying solutions for accurate 2D/3D mapping, topographic analysis, and GIS data collection.",
      url: "Assets/Surveying.png",
    },
    {
      title: "Surveillance",
      description:
        "Ensuring reliable aerial surveillance for mission tracking, security operations, and protection services with real-time data and visuals.",
      url: "Assets/Surveillance.png",
    },
    {
      title: "Inspection (Solar Plants, EB Lines, etc.)",
      description:
        "Conducting detailed inspections of solar plants, electric lines, and infrastructure, reducing risks and improving maintenance efficiency.",
      url: "Assets/Inspection.png",
    },
    {
      title: "Agricultural (Spraying and Crop Health Monitoring)",
      description:
        "Utilizing drones for efficient crop spraying and real-time monitoring of crop health, optimizing agricultural processes.",
      url: "Assets/Agricultural.png",
    },
    {
      title:
        "FPV Cinematic Shoots (Corporate Events, Ad Films, Movies, Moto Racing)",
      description:
        "Providing dynamic first-person-view (FPV) drone shots for high-speed, immersive visual experiences at events, films, and racing.",
      url: "Assets/FPV.png",
    },
    {
      title: "Drone Repair Services",
      description:
        "Offering expert drone repair and maintenance services to ensure optimal performance and longevity of your equipment.",
      url: "Assets/Repair.png",
    },
  ];
  return (
    <div className="services-contents">
      <h1 className="parisienne-regular">Our Services</h1>
      <div className="cards-container">
        {services.map((service) => (
          <Cardbox
            url={service.url}
            title={service.title}
            description={service.description}
            key={service.title}
            className="service-card"
          />
        ))}
      </div>
    </div>
  );
}
