import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import developer from '../../assets/developer.png';

const Conocenos = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <Col className='justify-content-center' style={{display: 'flex', alignItems: 'center'}}>
          <div className='align-middle'>
            <h3 style={{color: '#620DD1'}}>¡Te contamos quienes somos!</h3>
            <hr style={{width: '111px', border: '2px solid #620DD1'}}></hr>
            <p>
              BookExchange es una aplicación que permite almacenar libros, poder editarlos y compartirlos con amantes de la lectura.
            </p>
            <p>
              El equipo de desarrolladores a usado tecnologías como <strong> React, MongoDB, Express, NodeJS</strong>, entre otras, con el propósito de crear este espacio para tí.
            </p>
          </div>
        </Col>
        <Col className='p-0'>
          <img
            src={developer}
            width='700px'
            className="d-inline-block align-top"
            alt="Developer BookExchange"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Conocenos;