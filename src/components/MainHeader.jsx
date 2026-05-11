import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./MainHeader.css";

const navItems = [
  { label: "Home", to: "/", end: true, children: null },
  {
    label: "Programmes",
    to: "/programmes/bvoc",
    activePrefix: "/programmes",
    children: [
      { label: "B.Voc Degree Programmes", to: "/programmes/bvoc" },
      { label: "Advanced Diploma Programmes", to: "/programmes/advanced-diploma" },
      { label: "Diploma Programmes", to: "/programmes/diploma" },
      { label: "Certificate Programmes", to: "/programmes/certificate" },
    ],
  },
  {
    label: "About",
    to: "/about/profile",
    activePrefix: "/about",
    children: [
      { label: "Profile", to: "/about/profile" },
      { label: "Leadership", to: "/about/leadership" },
      { label: "Management Team", to: "/about/management-team" },
    ],
  },
  {
    label: "Contact",
    to: "/contact/our-office",
    activePrefix: "/contact",
    children: [
      { label: "Our Office", to: "/contact/our-office" },
      { label: "Franchisee", to: "/contact/franchisee" },
      { label: "Support Desk", to: "/contact/support-desk" },
      { label: "Placement desk", to: "/contact/placement-desk" },
    ],
  },
  {
    label: "Students",
    to: "/students/feedback",
    activePrefix: "/students",
    children: [
      { label: "Feedback", to: "/students/feedback" },
      { label: "Testimonials", to: "/students/testimonials" },
      { label: "Results Online", to: "/students/results-online" },
      { label: "Verify Registration", to: "/students/verify-registration" },
    ],
  },
  { label: "Blog", to: "/blog", children: null },
  { label: "Training & Certifications", to: "/training-certifications", children: null },
  {
    label: "Placement",
    to: "/placement/our-placements",
    activePrefix: "/placement",
    children: [
      { label: "Our Placements", to: "/placement/our-placements" },
      { label: "View Vacancies", to: "/placement/view-vacancies" },
      { label: "Post A Vacancy", to: "/placement/post-vacancy" },
      { label: "GEN Job Fair", to: "/placement/gen-job-fair" },
    ],
  },
  {
    label: "Gallery",
    to: "/gallery/photos",
    activePrefix: "/gallery",
    children: [
      { label: "Photo Gallery", to: "/gallery/photos" },
      { label: "Video gallery", to: "/gallery/videos" },
    ],
  },
];

function Logo() {
  return (
    <Link to="/" className="main-header__brand" aria-label="GEN Skill College home">
      <span className="main-header__logo-circle" aria-hidden="true">
        GEN
      </span>
      <span className="main-header__brand-text">
        <span className="main-header__brand-title">GEN Skill College</span>
        <span className="main-header__brand-sub">Skill College</span>
      </span>
    </Link>
  );
}

export function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeAll = () => setMobileOpen(false);

  const linkClass = (item, navIsActive) => {
    const prefix = item.activePrefix;
    const active =
      prefix != null
        ? location.pathname === item.to ||
          location.pathname.startsWith(`${prefix}/`) ||
          location.pathname === prefix
        : navIsActive;
    return `main-header__link${active ? " main-header__link--active" : ""}`;
  };

  return (
    <header className="main-header">
      <div className="main-header__bar">
        <div className="main-header__inner">
          <Logo />
          <button
            type="button"
            className="main-header__menu-btn"
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="main-header__menu-icon" aria-hidden="true" />
            <span className="visually-hidden">Menu</span>
          </button>
          <nav
            id="primary-navigation"
            className={`main-header__nav ${mobileOpen ? "main-header__nav--open" : ""}`}
            aria-label="Primary"
          >
            <ul className="main-header__list">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={item.children ? "main-header__item main-header__item--dropdown" : "main-header__item"}
                >
                  {item.children ? (
                    <>
                      <span className="main-header__dropdown-trigger">
                        <span className={`${linkClass(item, false)} main-header__link--static`}>{item.label}</span>
                        <span className="main-header__caret" aria-hidden="true" />
                      </span>
                      <div className="main-header__dropdown" role="group">
                        <ul className="main-header__sublist">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link to={child.to} className="main-header__sublink" onClick={closeAll}>
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) => linkClass(item, isActive)}
                      onClick={closeAll}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
