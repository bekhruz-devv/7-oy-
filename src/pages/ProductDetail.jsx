import React from "react";
import { Link, useParams } from "react-router-dom";
import "../css/ProductDetail.css";
import { products } from "../data/products.js";

const ProductDetail = () => {
  const id = useParams().id;
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="not-found">
        <p>Mahsulot topilmadi!</p>
        <Link to="/products">← Orqaga</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/products" className="back-link">
        ← Mahsulotlarga qaytish
      </Link>

      <div className="detail-card">
        <div className="detail-img" style={{ backgroundColor: product.bg }}>
          <span>{product.icon}</span>
        </div>

        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">${product.price}</p>
          <p className="detail-desc">{product.desc}</p>

          <div className="specs-table">
            <p className="specs-title">Texnik xususiyatlar</p>
            <table>
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label}>
                    <td className="spec-label">{spec.label}</td>
                    <td className="spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="detail-btns">
            <button className="btn-primary">🛒 Savatga qo'shish</button>
            <Link to="/products" className="btn-secondary">
              — Orqaga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
