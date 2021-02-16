import React, { Component } from "react";
import { Col, Row } from 'react-bootstrap';
import { IconTrash } from '@tabler/icons';

class CardNote extends Component {

  apagar() {
    const index = this.props.indice;
    this.props.apagarNota(index);
  }

  render() {
    return(
      <Row className="no-gutters p-3 border rounded shadow-sm"  style={{borderColor: "#f0f0f0"}}>
        <Col xs={12}>
          <p className="pl-3 border border-info border-top-0 border-right-0 border-bottom-0">
            {this.props.categoria}
            <span className="float-right ico-trash text-danger">
              <IconTrash size={19} onClick={this.apagar.bind(this)} />
            </span>
          </p>
          <h3 className="border border-top-0 border-right-0 border-left-0">{this.props.titulo}</h3>
          <p>{this.props.descricao}</p>
        </Col>
      </Row>
    );
  }
}

export default CardNote;