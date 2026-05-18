import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const cards = [
  {
    icon: "🛍️",
    bg: "#6C63FF",
    title: "Mahsulotlar",
    desc: "Bizning keng assortimentimizdan o'zingizga mosini toping.",
    link: "/products",
    label: "Ko'rish →",
  },
  {
    icon: "👥",
    bg: "#E91E8C",
    title: "Biz haqimizda",
    desc: "Jamoamiz va kompaniyamiz tarixi haqida bilib oling.",
    link: "/about",
    label: "Batafsil →",
  },
  {
    icon: "💬",
    bg: "#1DB954",
    title: "Aloqa",
    desc: "Savollaringiz bormi? Biz bilan bog'laning, javob beramiz.",
    link: "/contact",
    label: "Yozish →",
  },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Zamonaviy savdo platformasiga xush kelibsiz</h1>
        <p>
          Eng yaxshi mahsulotlarni eng yaxshi narxlarda toping. React Router DOM
          bilan qurilgan tezkor va qulay tajriba.
        </p>
        <Link to="/products" className="hero-btn">
          Mahsulotlarni ko'rish →
        </Link>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <div key={card.title} className="card">
            <div className="card-icon" style={{ backgroundColor: card.bg }}>
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <Link to={card.link} className="card-link">
              {card.label}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
