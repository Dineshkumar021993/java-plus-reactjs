import React from "react";

import MaterialRipple from "../material-ripple";

import "./style.scss";

export default () => (
  <nav className="nav">
    <MaterialRipple smallRipple className="nav__item" text="Home" to="/" />
    <MaterialRipple
      smallRipple
      className="nav__item"
      text="About"
      to="/about"
    />
  </nav>
);