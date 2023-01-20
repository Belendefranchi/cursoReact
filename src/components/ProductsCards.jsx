import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function BasicExample({title, price, description, category, image}) {
  return (
      <Card style={{ width: '20rem', height: '38rem', margin: '1rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body style={{ paddingBottom: '0rem', paddingTop: '0rem' }}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p style={{ height: '5rem'}}>{description}</p>
            <h4>${price}</h4>
          </Card.Text>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
  );
}

export default BasicExample;