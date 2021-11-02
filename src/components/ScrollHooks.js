import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  //WITHOUT THE THIRD PARAMETER REPRESENTED BY AN ARRAY
  useEffect(() => {
    // console.log(
    //   "This content will be displayed every time that something in the component changed (render method or ComponentDidUpdate)"
    // );

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);
  });

  //WITH THE THIRD PARAMETER (AN EMPTY ARRAY)
  useEffect(() => {
    // console.log(
    //   "This content only will be displayed in the componentDidMount phase"
    // );
  }, []);

  //WITH THE THIRD PARAMETER WITH AN ARRAY OBSERVING A STATE VARIABLE
  useEffect(() => {
    // console.log(
    //   `This content will be displayed only when the state variable "ScrollY" suffer changes`
    // );

    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("click", detectarScroll);

    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  //componentWillUnmount
  useEffect(() => {
    // console.log(
    //   "This content will be displayed only when you set a return method inside the useEffect, emulating the componentWillUnmount phase"
    // );
    return () => {
      // console.log("componentWillUnmount");
    };
  });

  return (
    <>
      <h2> Hooks - useEffect() and the lifecycle </h2>
      <p>
        Scroll Y of the browser {scrollY}
        px
      </p>
    </>
  );
}
