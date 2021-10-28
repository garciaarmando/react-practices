import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["spring", "summer", "fall", "winter"],
    };
  }
  render() {
    console.log(data);
    return (
      <div>
        <h2>Elements rendering</h2>
        <h3>Seasons of the year</h3>
        <ol>
          {this.state.seasons.map((el, id) => (
            <li key={id}>{el}</li>
          ))}
        </ol>
        <h3>Popular frameworks of JS</h3>
        <ul>
          {data.frameworks.map(el => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
