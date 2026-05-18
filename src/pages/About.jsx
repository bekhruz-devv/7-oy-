import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

const team = [
  {
    initials: "AK",
    name: "Aliyev Komron",
    role: "Asoschisi & CEO",
    desc: "10 yillik tajribaga ega tadbirkor. Mahsulot strategiyasi va biznes rivojiga mas'ul.",
    color: "#9B59B6",
  },
  {
    initials: "SR",
    name: "Saidova Ra'no",
    role: "Bosh dizayner",
    desc: "UI/UX bo'yicha mutaxassis. Bizning mahsulotlarning ko'rinishi uchun javobgar.",
    color: "#1ABC9C",
  },
  {
    initials: "JT",
    name: "Jo'rayev Temur",
    role: "Texnik direktor",
    desc: "Full-stack dasturchi. Platformaning texnik tomonlariga rahbarlik qiladi.",
    color: "#F39C12",
  },
];

export const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Bizning hikoyamiz</h1>
        <p>
          Biz 2024 yildan beri mijozlarimizga eng sifatli mahsulotlarni eng
          qulay narxlarda taqdim etib kelmoqdamiz. Maqsadimiz — har bir mijoz
          uchun ideal xarid tajribasini yaratish.
        </p>
        <Link to="/contact" className="about-btn">
          Biz bilan bog'lanish
        </Link>
      </section>

      <section className="about-team">
        <h2>Bizning jamoa</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.initials} className="team-card">
              <div
                className="team-avatar"
                style={{ backgroundColor: member.color }}
              >
                {member.initials}
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
