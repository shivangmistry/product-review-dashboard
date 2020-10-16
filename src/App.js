import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppHeader from "./components/AppHeader/AppHeader";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import AppFooter from "./components/AppFooter/AppFooter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="main">
          <AppHeader />
          <ProductContainer />
        </div>
        <AppFooter />
      </div>
    </Provider>
  );
}

export default App;
