import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar(e) {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2> Events in class Components ES6</h2>
        <nav>
          <button onClick={this.sumar}> + </button>
          <button onClick={this.restar}> - </button>
        </nav>
        <h3> {this.state.contador} </h3>
      </div>
    );
  }
}
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Use arrow functions instead normal functions

  sumar = e => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = e => {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2> Events in class Components ES7+ </h2>
        <nav>
          <button onClick={this.sumar}> + </button>
          <button onClick={this.restar}> - </button>
        </nav>
        <h3> {this.state.contador} </h3>
      </div>
    );
  }
}

const ButtonMadeComponent = ({ personalizedOnClick }) => (
  <button onClick={personalizedOnClick}>Button made component</button>
);
export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log("Hello!");
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(e);
    console.log(e.target);
    console.log(msg);
  };
  render() {
    return (
      <div>
        <h2>More about events</h2>
        <button
          onClick={e => this.handleClick(e, "Hello, params from an event")}>
          Saludar
        </button>

        {/* Personalized event => Create a prop and pass it to the component, then you can assign that prop and make it works*/}
        <ButtonMadeComponent
          personalizedOnClick={e =>
            this.handleClick(e, "Hello, from a button made component")
          }
        />
      </div>
    );
  }
}
