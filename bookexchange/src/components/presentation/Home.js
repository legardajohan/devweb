import Carousel from 'react-bootstrap/Carousel';
import Portada1 from '../../assets/1.png';
import Portada2 from '../../assets/2.png';
import Portada3 from '../../assets/3.png';


const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Portada1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Festival de tradición oral</h3>
          <p>Conoce las obras que han perdurado pese al tiempo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Portada2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Repositorio libre y gratuito</h3>
          <p>Algunas personas comparten libros que transforman vidas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Portada3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Transforma tu mundo</h3>
          <p>Crea, comparte y lee en nuestro entorno.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;