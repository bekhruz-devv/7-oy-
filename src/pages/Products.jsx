import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Product.css";
import { products } from "../components/ProductCard";

const Products = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1>Mahsulotlar</h1>
          <p>Jami {filtered.length} ta mahsulot mavjud</p>
        </div>
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Mahsulot qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="products-grid">
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            <div
              className="product-img"
              style={{ backgroundColor: product.bg }}
            >
              <span>{product.icon}</span>
            </div>
            <div className="product-info">
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <Link to={`/products/${product.id}`} className="detail-btn">
                  Batafsil →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
