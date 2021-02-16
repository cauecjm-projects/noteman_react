import React, { Component } from "react";
import { Col, Row, Form, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { IconTrash } from '@tabler/icons';

class ListCategorias extends Component {

  constructor() {
    super();
    this.state = {
      categorias: [],
      inputCategoria: '',
    };
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

  _handleEventoNovaCategoria(e) {
    if(e.key == 'Enter'){
      this.props.adicionarCategoria(e.target.value);
      this._resetInputCategoria()
    } else if (e.target.type == 'submit') {
      this.props.adicionarCategoria(this.state.inputCategoria);
      this._resetInputCategoria()
    }
  }

  _handleChangeInputCategoria(e) {
    this.setState({ inputCategoria: e.target.value });
  }

  _handleEventoBtnNovaCategoria(e) {
    this._handleEventoNovaCategoria(e);
  }

  _resetInputCategoria() {
    this.setState({ inputCategoria: '' })
  }

  render() {

    const inputCategoriaValue = this.state.inputCategoria;

    return(
      <>
        <Row className="no-gutters dv-categoria mt-2 pt-3">
          <Col md={12} className="text-left">
            <h5 className="mb-4">Categorias:</h5>
            <ListGroup className="dv-list-categorias">
              { this.state.categorias.map((categoria, index) => {
                return <ListGroupItem
                  className="list-group-item"
                  key={index}
                >
                  { categoria }
                  <span className="float-right ico-trash text-danger"><IconTrash size={17} /></span>
                </ListGroupItem>
              })}
            </ListGroup>
          </Col>
          </Row>
          <Row className="no-gutters dv-categoria mt-4 pt-4">
            <Col md={10}>
              <Form.Control
                type="input"
                placeholder="Nova Categoria"
                value={inputCategoriaValue}
                onKeyUp={this._handleEventoNovaCategoria.bind(this)}
                onChange={this._handleChangeInputCategoria.bind(this)}
              />
            </Col>
            <Col md={2}>
              <Button
                type="submit"
                variant="outline-info"
                onClick={this._handleEventoBtnNovaCategoria.bind(this)}
              >
                OK
              </Button>  
            </Col>
        </Row>
      </>
    );
  }
}

export default ListCategorias;