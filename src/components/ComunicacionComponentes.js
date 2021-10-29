import React, { Component } from "react";

export default class ComunicacionComponentes extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = e => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <>
        <p>
          Contador: <b>{this.state.contador}</b>
        </p>
        <h2>Comunication between components</h2>
        <Hijo
          incrementarContador={this.incrementarContador}
          msg="Message to the son component"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          msg="Message to the son component number 2"
        />
      </>
    );
  }
}

function Hijo({ msg, incrementarContador }) {
  return (
    <>
      <h3>{msg}</h3>
      <button onClick={incrementarContador}>+</button>
    </>
  );
}
