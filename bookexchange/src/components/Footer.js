import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../assets/logo.png';
import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';
import map from '../assets/map.svg';
import '../css/footer.css';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5 footer'>
            <section className='pt-1' style={{backgroundColor: 'rgb(247, 245, 244)'}}>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img
                                    src={logo}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top me-3"
                                    alt="BookExchange logo"
                                />
                                BookExchange
                            </h6>
                            <p>
                                Somos una organización que fomenta la lectura en las personas, buscando compartir libros a quienes les guste dejar volar su imaginación.
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Categorias</h6>
                            <p>
                                <a href='#' className='text-reset'>
                                    Ciencia ficción
                                </a>
                            </p>
                            <p>
                                <a href='#' className='text-reset'>
                                    Infantil
                                </a>
                            </p>
                            <p>
                                <a href='#' className='text-reset'>
                                    Aventura
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                            <p>
                                <img
                                    src={map}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top me-3"
                                />
                                Pasto, Nariño. COL
                            </p>
                            <p>
                                <img
                                    src={mail}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top me-3"
                                />
                                info@bookexchange.com
                            </p>
                            <p>
                                <img
                                    src={phone}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top me-3"
                                />
                                + 01 234 567 88
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{backgroundColor: 'rgb(228, 226, 225)'}}>
                © 2022 Copyright. {' '} 
                <Link className='text-reset fw-bold' to='/conocenos'>
                    Developer team BookExchange.
                </Link>
            </div>
        </MDBFooter>
    );
};

export default Footer;