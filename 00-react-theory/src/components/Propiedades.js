import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "True" : "False"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{`${props.object.name} ${props.object.email}`}</li>
        <li>{props.array.map(props.func).join(", ")}</li>
        <li>{props.reactElement}</li>
        <li>{props.componentReact}</li>
      </ul>
    </div>
  );
}

//through an object, you can define default properties and call them in the render instance
Propiedades.defaultProps = {
  porDefecto: "Setting default properties using defaultProps",
};

//propTypes gives you a sort of typescript without TS,also, gives you de possibility to define required props using isRequired
Propiedades.propTypes = {
  number: PropTypes.number.isRequired,
};
