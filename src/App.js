import "./App.css";
import Products from "./components/Component/Products";
import Reactwork from "./components/Component/Reactworks/Reactwork";
import Props from "./components/Component/Props/Props";

function App() {
  return (
    <div className="App">
      <h2 className="header-app">
        buyer can choose
        <br /> any item
      </h2>
      <Products></Products>
      <Reactwork></Reactwork>
      <Props></Props>
    </div>
  );
}

export default App;
