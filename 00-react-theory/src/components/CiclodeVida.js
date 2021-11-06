import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    // console.log(3, "The component has been deleted from the DOM");
  }
  render() {
    return <h3> {this.props.hour} </h3>;
  }
}

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "The component was initialized, it's not at the DOM yet");
    this.state = {
      hour: new Date().toLocaleTimeString(),
      visible: false,
    };
    this.temporizador = null;
  }

  componentDidMount() {
    // console.log(1, "The component has been mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "The state or the props of the component has changed");
    console.log(prevProps, prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hour: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    // console.log(4, "The component is painted or re-painted in the DOM");
    return (
      <>
        <h1> Lifecycle in class components </h1>
        {this.state.visible && <Clock hour={this.state.hour} />}
        <button onClick={this.iniciar}> Iniciar </button>
        <button onClick={this.detener}> Detener </button>
      </>
    );
  }
}
