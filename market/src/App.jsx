import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";

import Header from "./components/header";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
