import React from "react";
import "./Props.css";
const Props = () => {
  return (
    <div className="style-prpsstate">
      <h2>Question2:Different between props and state?</h2>
      <div className="props-state">
        <p>
          Props are used to pass data from one component to another
          component.Props is Immutable (cannot be modified).Props can be used
          with state and functional components.Props are read-only.
        </p>
        <p className="state-style">
          State data can not pass to other components. State is Mutable ( can be
          modified).State can be used only with the state components/class
          component.State is both read and write.
        </p>
      </div>
    </div>
  );
};

export default Props;
