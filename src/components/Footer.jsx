import { Link } from "react-router-dom";
import "./Footer.css";

const col1 = [
  { label: "B.Voc Degree Programmes", to: "/programmes/bvoc" },
  { label: "Advanced Diploma Programmes", to: "/programmes/advanced-diploma" },
  { label: "Diploma Programmes", to: "/programmes/diploma" },
  { label: "Certificate Programmes", to: "/programmes/certificate" },
  { label: "Profile", to: "/about/profile" },
  { label: "Leadership", to: "/about/leadership" },
  { label: "Management Team", to: "/about/management-team" },
  { label: "Our Office", to: "/contact/our-office" },
  { label: "Franchisee", to: "/contact/franchisee" },
];

const col2 = [
  { label: "Support Desk", to: "/contact/support-desk" },
  { label: "Placement desk", to: "/contact/placement-desk" },
  { label: "Feedback", to: "/students/feedback" },
  { label: "Testimonials", to: "/students/testimonials" },
  { label: "Results Online", to: "/students/results-online" },
  { label: "Verify Registration", to: "/students/verify-registration" },
  { label: "Blog", to: "/blog" },
  { label: "Training & Certifications", to: "/training-certifications" },
  { label: "College Magazine", to: "/college-magazine" },
];

const col3 = [
  { label: "Our Placements", to: "/placement/our-placements" },
  { label: "View Vacancies", to: "/placement/view-vacancies" },
  { label: "Post A Vacancy", to: "/placement/post-vacancy" },
  { label: "GEN Job Fair", to: "/placement/gen-job-fair" },
  { label: "Photo Gallery", to: "/gallery/photos" },
  { label: "Video gallery", to: "/gallery/videos" },
  { label: "Privacy Policy", to: "/legal/privacy" },
  { label: "Refund Policy", to: "/legal/refund" },
  { label: "Terms & Conditions", to: "/legal/terms" },
];

function LogoBlock() {
  return (
    <div className="footer__brand">
      <div className="footer__logo-circle" aria-hidden="true">
        GEN
      </div>
      <div>
        <p className="footer__title">GEN Skill College</p>
        <p className="footer__sub">(A Unit of Garvit Education Network LLP)</p>
        <p className="footer__sub">Official Skill &amp; Vocational Training Provider of Mind Power University</p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <section className="site-footer__top">
          <LogoBlock />
          <div className="site-footer__quick">
            <h2 className="site-footer__heading">Quick Links</h2>
            <div className="site-footer__rule" />
            <div className="site-footer__columns">
              <ul className="site-footer__list">
                {col1.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
              <ul className="site-footer__list">
                {col2.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
              <ul className="site-footer__list">
                {col3.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="site-footer__divider" />

        <section className="site-footer__mid">
          <div className="site-footer__mid-block">
            <h2 className="site-footer__heading">Logins</h2>
            <div className="site-footer__rule" />
            <ul className="site-footer__list site-footer__list--inline">
              <li>
                <Link to="/logins/faculty">Faculty login</Link>
              </li>
              <li>
                <Link to="/logins/student">Student login</Link>
              </li>
              <li>
                <Link to="/logins/moodle">Moodle login</Link>
              </li>
            </ul>
          </div>
          <div className="site-footer__mid-block site-footer__mid-block--wide">
            <h2 className="site-footer__heading">Contact us</h2>
            <div className="site-footer__rule" />
            <div className="site-footer__contact-grid">
              <p className="site-footer__address">
                Gen Skill College, 1st Floor, Dr Subramanyan Building, V.M Convent, Ponnani, Kerala 679577
              </p>
              <div>
                <p className="site-footer__label">Call Us:</p>
                <p>+91 8113 887 712</p>
                <p>+91 9207 833 844</p>
              </div>
              <div>
                <p>
                  <span className="site-footer__label">Email: </span>
                  <a href="mailto:info@gencolleg.in">info@gencolleg.in</a>
                </p>
                <p className="site-footer__social-title">Connect With Us</p>
                <div className="site-footer__social-placeholder" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <div className="site-footer__divider" />

        <p className="site-footer__copy">Copyright © 2026, GEN SKILL COLLEGE. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
