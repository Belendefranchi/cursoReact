import Carousel from 'react-bootstrap/Carousel';
import img13 from '/resources/img13.jpg';
import img27 from '/resources/img27.jpg';
import img35 from '/resources/img35.jpg';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={img13}
          alt="First slide"
        />
{/*         <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={img27}
          alt="Second slide"
        />

{/*         <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={img35}
          alt="Third slide"
        />

{/*         <Carousel.Caption>
          <h3>Third slide label</h3>
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;