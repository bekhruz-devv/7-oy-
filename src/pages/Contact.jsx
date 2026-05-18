import React, { useState } from "react";
import "../css/Contact.css";

const contactInfo = [
  { icon: "📍", title: "Manzil", value: "Toshkent shahri, Chilonzor tumani" },
  { icon: "📞", title: "Telefon", value: "+998 90 123 45 67" },
  { icon: "✉️", title: "Email", value: "info@myshop.uz" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1>Biz bilan bog'laning</h1>
        <p>
          Savollaringiz, takliflaringiz yoki shikoyatlaringizni biz bilan
          bo'lishing. Tez orada javob beramiz.
        </p>

        <div className="contact-info">
          {contactInfo.map((item) => (
            <div key={item.title} className="contact-info-item">
              <span className="contact-icon">{item.icon}</span>
              <div>
                <p className="info-title">{item.title}</p>
                <p className="info-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-form">
          <div className="form-group">
            <label>Ismingiz</label>
            <input
              type="text"
              name="name"
              placeholder="Aliyev Komron"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Xabar</label>
            <textarea
              name="message"
              placeholder="Xabaringizni yozing..."
              value={form.message}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <button className="submit-btn">Xabarni yuborish →</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
