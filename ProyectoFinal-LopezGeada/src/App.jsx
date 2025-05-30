import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar>
        <CartWidget />
      </Navbar>
      <ItemListContainer saludo={"Bienvenidos a ..."} />
    </>
  );
}

export default App;
