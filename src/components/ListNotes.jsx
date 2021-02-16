import React, { Component } from "react";
import { Col, Row } from 'react-bootstrap';
import CardNote from "./CardNote";

class ListNote extends Component {

  constructor() {
    super();
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas })
  }

  render() {
    return(
      <Col xs={12} md={8} className="px-3">
        <Row className="justify-content-start no-gutters">
          
          {this.state.notas.map((nota, index) => {
              return (
                <Col xs={12} md={4} className="px-1 pb-2" key={index}>
                  <CardNote
                    indice={index}
                    categoria={nota.categoria}
                    titulo={nota.titulo}
                    descricao={nota.descricao}
                    apagarNota={this.props.apagarNota}
                  />
                </Col>
              );
          })}

        </Row>
      </Col>
    );
  }
}

export default ListNote;