import { Card } from 'react-bootstrap';

export default function TimelineItem({ year, title, description }) {
  return (
    <Card className="timeline-item mb-4">
      <Card.Body>
        <Card.Img 
            variant="top" 
        />
        <Card.Title>{year} - {title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}