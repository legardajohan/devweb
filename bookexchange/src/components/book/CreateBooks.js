import React, { Component } from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";

export default class CreateBooks extends Component{
  constructor(props) {
    super(props);

    this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
    this.onChangeBookGender = this.onChangeBookGender.bind(this);
    this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
    this.onChangeBookCopy = this.onChangeBookCopy.bind(this);
    this.onChangeBookDate = this.onChangeBookDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 

    this.state = {
      title: '',
      gender: '',
      author: '',
      copy: '',
      date: ''
    };
  }

  onChangeBookTitle(e) {
    this.setState({title: e.taget.value});
  }
  onChangeBookGender(e) {
    this.setState({gender: e.targe.value});
  }
  onChangeBookAuthor(e) {
    this.setState({author: e.target.value});
  }
  onChangeBookCopy(e) {
    this.setState({copy: e.target.value});
  }
  onChangeBookDate(e) {
    this.setState({date: e.target.value});
  }
  onSubmit(e) {
    e.preventDefaul();

    const bookObject = {
      title: this.state.title,
      gender: this.state.gender,
      author: this.state.author,
      copy: this.state.copy,
      date: this.state.date
    };

    axios 
      .post("http://localhost:4000/books/createbooks", bookObject)
      .then((res) => console.log(res.data));
    this.setState({ title: '', gender: '', author: '', copy: '', date: '' });

  }

  render() {
    return (
    <div className="container mt-5">
      <div className='row justify-content-center'>
        <Form onSubmit={this.onSubmit} className='col-6 text-center shadow p-4 ' style={{ backgroundColor: 'white', borderRadius: '18px' }}>
          <h3 className='mb-4'>Crear libro</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              value={this.state.title}
              onChange={this.onChangeBookTitle}
              type="text" 
              placeholder="Título del libro" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              value={this.state.gender}
              onChange={this.onChangeBookGender}
              type="text" 
              placeholder="Género"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              value={this.state.author}
              onChange={this.onChangeBookAuthor}
              type="text" 
              placeholder="Autor"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              value={this.state.copy}
              onChange={this.onChangeBookCopy}
              type="number" 
              placeholder="Copias" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
              value={this.state.date}
              onChange={this.onChangeBookDate}
              type="date" 
              placeholder="Año" 
            />
          </Form.Group>
          <Form.Group className="mb-3 d-grid gap-2" controlId="formBasicEmail">
            <Button variant="primary" type="submit">
              Crear
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
};

