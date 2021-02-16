import React, { Component } from "react";
import { Row, Col, Form, Button } from 'react-bootstrap';

class FormNote extends Component {

  constructor(props) {
    super(props);
    this.categoria = "";
    this.titulo = "";
    this.descricao = "";
    this.state = { categorias:[] }

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }

  _handlerTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerDescricao(evento) {
    evento.stopPropagation();
    this.descricao = evento.target.value;
  }

  _handlerAlterarCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.adicionarNota(this.titulo, this.descricao, this.categoria);
  }

  render() {
    return(
      <Row className="no-gutters">
        <Col md={12}>
          <Form onSubmit={this._criarNota.bind(this)}>
            <Form.Group>
              <Form.Control
                type="input"
                placeholder="Título"
                onChange={this._handlerTitulo.bind(this)}
              />
              <Form.Label>Categorias</Form.Label>
              <Form.Control
                as="select"
                onChange={this._handlerAlterarCategoria.bind(this)}
              >
                <option>Escolha a categoria</option>
                { this.state.categorias.map((categoria, index) => {
                  return <option key={index}>{categoria}</option>
                })}
              </Form.Control>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="Escreva sua nota..."
                className="mt-3"
                onChange={this._handlerDescricao.bind(this)}
              />
              <Button type="submit" variant="outline-info" className="mt-3">CRIAR</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default  FormNote;