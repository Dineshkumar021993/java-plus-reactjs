import React from "react";
import Aux from "../Aux";
import { Translate } from "react-translated";

export default () => (
  <Aux>
    <p className="home__note">
      React 16 supports array of elements or just plain text; No more extra
      wrapper!
    </p>
    <p className="home__note">
      Also now supports custom HTML attributes eg: ❤️ 🦄
    </p>
    <Translate text="English" />
  </Aux>
);
