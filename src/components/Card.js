import { Card } from "react-bootstrap";
export default function Cardbox({ title, description }) {
  return (
    <div className="service-card">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
