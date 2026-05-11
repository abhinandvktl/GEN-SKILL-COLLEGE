import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import heroImage from "../assets/direction landing page image.jpg";

export function Home() {
  useEffect(() => {
    document.title = "GEN Skill College | Home";
  }, []);

  return (
    <div className="home">
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__badge">
              <span className="home-hero__badge-text">Build a Future-Ready Career in</span>
            </p>
            <h1 id="home-hero-heading" className="home-hero__title">
              AI FILMMAKING &amp; DIGITAL MEDIA PRODUCTION
            </h1>
            <p className="home-hero__subtitle">B.Voc 3-Year Degree Program</p>
            <div className="home-hero__actions">
              <Link className="home-hero__btn" to="/contact/our-office">
                Join the Class
              </Link>
              <Link className="home-hero__btn" to="/programmes/bvoc">
                Learn more
              </Link>
            </div>
          </div>
          <div className="home-hero__visual">
            <div className="home-hero__frame">
              <img
                src={heroImage}
                alt="Students working with cinema camera and production equipment"
                width={888}
                height={600}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-stripes" aria-label="Highlights">
        <div className="home-stripes__inner">
          <article className="home-card">
            <h2 className="home-card__title">Programmes</h2>
            <p className="home-card__text">
              B.Voc degrees, advanced diplomas, diplomas, and certificates designed for portfolios, placements, and
              progression.
            </p>
            <Link className="home-card__link" to="/programmes/bvoc">
              Explore programmes
            </Link>
          </article>
          <article className="home-card">
            <h2 className="home-card__title">Training &amp; Certifications</h2>
            <p className="home-card__text">
              Focused skill blocks for teams and professionals—structured assessments and recognised transcripts.
            </p>
            <Link className="home-card__link" to="/training-certifications">
              View training paths
            </Link>
          </article>
          <article className="home-card">
            <h2 className="home-card__title">Placements</h2>
            <p className="home-card__text">
              Placement desk support, vacancies, job fair, and employer partnerships aligned to learner readiness.
            </p>
            <Link className="home-card__link" to="/placement/our-placements">
              Placement hub
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
