import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row, Col, Form, Button } from 'react-bootstrap';
import { Icon3dCubeSphere } from '@tabler/icons';
import Header from "./components/Header"
import FormNote from './components/FormNote';
import ListNotes from './components/ListNotes';
import ListCategorias from './components/ListCategorias';
import Categorias from './dados/Categorias';
import Notas from './dados/Notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias(); 
    this.notas = new Notas();
  }

  render(){
    return (
      <Container fluid className="p-0">
        <Header/>
  
        <Row className="no-gutters justify-content-center mt-4">
          <Col xs={12} md={4} className="px-4 text-center" style={{borderRight: "solid 1px #f0f0f0"}}>
            <FormNote
              adicionarNota={this.notas.adicionarNota.bind(this.notas)}
              categorias={this.categorias}
            />
            <ListCategorias
              adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
              categorias={this.categorias}
            />
          </Col>

          <ListNotes
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </Row>

      </Container>
    );
  }
}

export default App;
