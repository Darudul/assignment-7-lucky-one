import "./App.css";
import Products from "./components/Component/Products";
import Reactwork from "./components/Component/Reactworks/Reactwork";
import Props from "./components/Component/Props/Props";

function App() {
  return (
    <div className="App">
      <h1 className="header-app">
        Afsana's Perfume store
        <br /> Store
      </h1>
      <Products></Products>
      <Reactwork></Reactwork>
      <Props></Props>
    </div>
  );
}

export default App;
