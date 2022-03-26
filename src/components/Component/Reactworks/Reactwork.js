import React from "react";
import "./Reactwork.css";
const Reactwork = () => {
  return (
    <div className="react-works">
      <h2>Question1: How does react works?</h2>
      <p>
        React is a very popular JavaScript library.React contains a collection
        of reusable JavaScript code snippets used for user interface (UI)
        building called components.The Document Object Model (DOM) presents a
        web page in a data tree structure. ReactJS stores Virtual DOM trees in
        the memory. By doing so, React can apply updates to specific parts of
        the data tree, which is faster than re-rendering the entirety of the DOM
        tree.Whenever there’s a change in data, ReactJS will generate a new
        Virtual DOM tree and compare it with the previous one to find the
        quickest possible way to implement changes in the real DOM. This process
        is known as diffing.
      </p>
    </div>
  );
};

export default Reactwork;
