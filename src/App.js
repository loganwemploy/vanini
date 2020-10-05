import React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Form from "./components/Form";
import About from "./components/About";
// import ProductSingle from "./components/ProductSingle";
import SelectedProductSingle from "./components/SelectedProductSingle";
import NotFound from "./components/NotFound";
import CoffeeProductCard from "./components/CoffeeProductCard";

const App = props => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" component={Form} exact />
        <Route path="/products/:id" component={SelectedProductSingle}  />
        <Route path="/coffee" component={CoffeeProductCard} exact/>
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
