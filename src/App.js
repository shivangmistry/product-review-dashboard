import React from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import AppFooter from "./components/AppFooter/AppFooter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <AppHeader />
        <ProductContainer />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
