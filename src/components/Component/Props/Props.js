import React from "react";
import "./Props.css";
const Props = () => {
  return (
    <div className="style-prpsstate">
      <h2>Question2: Different between props and state?</h2>
      <div className="props-style">
        <p>
          Props are used to pass data from one component to another component.
          Is a plain JS object. Props can change in child Components. Props can
          not change inside Component. Props is Immutable (cannot be
          modified).Props can be used with state and functional components.Props
          are read-only.
        </p>
        <p className="state-style">
          State data can not pass to other components. Is a plain JS
          object.State can not change in child Components. State change inside
          Component.State is Mutable ( can be modified).State can be used only
          with the state components/class component.State is both read and
          write.
        </p>
      </div>
    </div>
  );
};

export default Props;
