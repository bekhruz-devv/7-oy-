import { Link } from "react-router-dom";
import "../css/NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Voy! Sahifa topilmadi 😕</h2>
        <p className="error-message">
          Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.
        </p>
        <Link to="/" className="home-btn">
          🏠 Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
}
