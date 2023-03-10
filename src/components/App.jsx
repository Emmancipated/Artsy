import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import persistStore from "redux-persist/lib/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "../pages/MarketPlacePage";
import ProductPage from "../pages/ProductPage";
import "../style/style.css"
import AuctionsPage from "../pages/AuctionsPage";
import Drops from "./Drops";
import Checkout from "../pages/Checkout";

let persistor = persistStore(store);

function App() {
  return <>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/marketplace" element={<Marketplace/>}/>
          <Route exact path="/marketplace/:productName" element={<ProductPage/>}/>
          <Route exact path ="/auctions" element={< AuctionsPage />} />
          <Route exact path="/drops" element={< Drops />} />
          <Route exact path="/checkout" element={< Checkout />} />
        </Routes>  
      </Router>
    </PersistGate>
  </Provider> 
  </>
  
}

export default App;