import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import { Navbar } from "./component/include/Navbar";
import ProductDetails from "./component/ProductDetails";
import Products from "./component/Products";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />
      </Switch>
    </>
  );
}

export default App;
