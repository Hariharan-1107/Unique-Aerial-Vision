import Cardbox from "./Card";
export default function Services() {
  const services = [
    {
      title: "Aerial Photography",
      description:
        "We offer high-quality aerial photography services for a variety of industries, including real estate, construction, and agriculture.",
    },
    {
      title: "Aerial Videography",
      description:
        "Our aerial videography services are perfect for capturing stunning footage for commercials, documentaries, and more.",
    },
    {
      title: "Drone Inspections",
      description:
        "We provide drone inspection services for infrastructure, utilities, and other hard-to-reach areas.",
    },
    {
      title: "Mapping & Surveying",
      description:
        "Our mapping and surveying services are ideal for land development, construction, and environmental monitoring.",
    },
  ];
  return (
    <div className="services-contents">
      <h1>Our Services</h1>
      <div className="cards-container">
        {services.map((service) => (
          <Cardbox
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
