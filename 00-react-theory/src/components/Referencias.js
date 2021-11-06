/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";

export default function Referencias() {
  let refMenuBtn = useRef(),
    refMenu = useRef();

  console.log(refMenuBtn, refMenu);

  const handleToggleMenu = e => {
    //Note that we're entering to the property "current" of the reference asigned to the button/nav

    if (refMenuBtn.current.textContent === "Menu") {
      refMenuBtn.current.textContent = "Close Menu";

      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menu";

      refMenu.current.style.display = "none";
    }
  };
  return (
    <>
      <h2>References</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Section 1</a>
        <br />
        <a href="#">Section 2</a>
        <br />
        <a href="#">Section 3</a>
        <br />
        <a href="#">Section 4</a>
        <br />
        <a href="#">Section 5</a>
        <br />
      </nav>
    </>
  );
}
