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

  return (


    <div className="container mt-4">
      <h3>Listado de libros</h3>
      {isLoading && books.length === 0 && <h5>Cargarndo libros...</h5>}
      <div className="row justify-content-center contenedor">
        {!isLoading &&
          books.map((book, id) => (

            <div key={id} className="card shadow-lg m-2 p-0" style={{ width: '14rem', height: '19rem' }} key={book}>
              <img src={book.front} className="rounded-lg"
                style={{ width: '14rem', height: '19rem' }} alt="" />
              <div className="capa p-3">
                <h5>{book.title}</h5>
                <p>{book.author}, {book.date.substr(6, 9)}</p>
                <p><em>Género: {book.gender}</em></p>
                <button className="btn btn-outline-light btn-sm btn-sol" type="submit">Solicitar</button>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  );
}

export default ListBooks;
