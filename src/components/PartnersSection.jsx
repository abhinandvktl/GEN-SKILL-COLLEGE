import React from "react";
import "./PartnersSection.css";

import logo1 from "../assets/Footer-logo-white.webp";
import logo2 from "../assets/Logo-Navbar.webp";
import logo3 from "../assets/react.svg";
import logo4 from "../assets/vite.svg";

const logos = [
  { src: logo1, alt: "Partner 1" },
  { src: logo2, alt: "Partner 2" },
  { src: logo3, alt: "React" },
  { src: logo4, alt: "Vite" },
];

const repeatedLogos = [...logos, ...logos];

export default function PartnersSection() {
  return (
    <div className="container-fluid py-5 mt-5 partners">
      <div className="row">
        <div className="col text-center" data-aos="fade-up">
          <h1 className="tw-bold">Professional Collaboration Partners</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="marquee-wrapper" data-aos="zoom-in">
            <div className="marquee-track">
              {/* First copy */}
              {repeatedLogos.map((logo, index) => (
                <div className="logo-card" key={index}>
                  <img src={logo.src} alt={logo.alt} className="logo-img" />
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {repeatedLogos.map((logo, index) => (
                <div className="logo-card" key={`copy-${index}`}>
                  <img src={logo.src} alt={logo.alt} className="logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
