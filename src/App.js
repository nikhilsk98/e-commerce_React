import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/header";
import ProductListing from "./components/productListing";
import ProductDetails from "./components/productDetails";

const App = () => {
  return (
    <div>
      <ProductListing />
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={productListing} />
          <Route path="/product/:prodectId" exact component={productDetails} />
          <Route>404 Not Found</Route>
        </Routes>
]      </Router> */}
    </div>
  );
};

export default App;
