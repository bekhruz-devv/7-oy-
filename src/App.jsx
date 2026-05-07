import { useState } from "react";
import "./App.css";
import img1 from "./assets/images/16pro.png";
import img2 from "./assets/images/24sss.png";
import ProductCard from "./components/ui/Products.jsx";

function App() {
  return (
    <div
      className="Products"
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <ProductCard
        name="iPhone 15"
        price={12500000}
        image={img1}
        inStock={true}
      />
      <ProductCard
        name="iPhone 15"
        price={12500000}
        image={img2}
        inStock={true}
      />
      <ProductCard
        name="iPhone 15"
        price={12500000}
        image={img1}
        inStock={false}
      />
    </div>
  );
}

export default App;
