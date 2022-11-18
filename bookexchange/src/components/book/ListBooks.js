import '../../css/book.css';

import { useState, useEffect } from "react";
import { getBooks } from '../../services/BookService';

const ListBooks = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (isLoading) {
      getBooks().then((response) => {
        console.log(response);
        setBooks(response);
        setIsLoading(false);
      });
    }
  }, [isLoading]);
  console.log(books);

  return (
    <div className="container mt-4">
      <h3>Listado de libros</h3>
      <div className="row justify-content-center contenedor">
        <div className="card shadow-lg m-2 p-0" style={{width: '14rem', height: '19rem'}}>
          <img src="https://ecat-server.grupo-sm.com/ecat_Imagenes/Original/209623_279253.jpg" className="rounded-lg"
            style={{width: '14rem', height: '19rem'}} alt="..." />
          <div className="capa p-3">
            <h5>El Principito</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores sit, sed praesentium soluta
              temporibus.</p>
            <button className="btn btn-outline-light btn-sm btn-sol" type="submit">Solicitar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBooks;
