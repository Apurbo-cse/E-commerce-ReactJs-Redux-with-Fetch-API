import "./App.css";
import Home from "./component/Home";
import { Navbar } from "./component/include/Navbar";
import Products from "./component/Products";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
    </>
  );
}

export default App;
