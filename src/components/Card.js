export default function Cardbox({ title, description, url }) {
  return (
    <div className="service-card">
      <img src={url} alt="service" className="card-img" />
      <h2 className="poppins-semibold-italic">{title}</h2>
      <p className="nunito-sans-regular">{description}</p>
    </div>
  );
}
