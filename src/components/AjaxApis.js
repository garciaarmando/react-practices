import React, { Component } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  render() {
    return (
      <>
        <h1>Async requests in class components</h1>
      </>
    );
  }
}
