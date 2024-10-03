import React from "react";
import { Header } from "./layout/header/header";
import { Banner } from "./components/banner/banner";
import { Card } from "./components/card/card";
import { Products } from "./components/products/products";

function App() {
  return (
    <>
      <div className="block">
        <Header />
        <Banner />
        <Card />
        <Products />
      </div>
    </>
  );
}

export default App;
