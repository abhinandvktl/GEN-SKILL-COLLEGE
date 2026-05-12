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

const primaryNavLabels = ["Home", "Programmes", "Contact", "About"];

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const primaryNavItems = primaryNavLabels
    .map((label) => navItems.find((item) => item.label === label))
    .filter(Boolean);
  const drawerNavItems = navItems.filter((item) => !primaryNavLabels.includes(item.label));

  const closeAll = () => setDrawerOpen(false);

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
          <div className="main-header__start">
            <Logo />
          </div>
          <nav
            id="primary-navigation"
            className="main-header__nav"
            aria-label="Primary"
          >
            <ul className="main-header__list">
              {primaryNavItems.map((item) => (
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
          <div className="main-header__end">
            <div className="main-header__utility" role="region" aria-label="Utility links">
              <Link className="main-header__utility-link" to="/pay-now">
                Pay Now
              </Link>
              <span className="main-header__utility-sep" aria-hidden="true">
                |
              </span>
              <Link className="main-header__utility-link main-header__utility-link--emphasis" to="/logins/student">
                Login
              </Link>
            </div>
            <button
              type="button"
              className="main-header__menu-btn"
              aria-expanded={drawerOpen}
              aria-controls="secondary-navigation"
              aria-label={drawerOpen ? "Close more navigation menu" : "Open more navigation menu"}
              onClick={() => setDrawerOpen((o) => !o)}
            >
              <span className="main-header__menu-lines" aria-hidden="true">
                <span className="main-header__menu-line" />
                <span className="main-header__menu-line" />
                <span className="main-header__menu-line" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`main-header__drawer-backdrop ${drawerOpen ? "main-header__drawer-backdrop--open" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />
      <aside
        id="secondary-navigation"
        className={`main-header__drawer ${drawerOpen ? "main-header__drawer--open" : ""}`}
        aria-label="More navigation"
      >
        <div className="main-header__drawer-header">
          <span className="main-header__drawer-title">More</span>
          <button type="button" className="main-header__drawer-close" onClick={closeAll} aria-label="Close menu">
            &times;
          </button>
        </div>
        <nav aria-label="Secondary">
          <ul className="main-header__drawer-list">
            {drawerNavItems.map((item) => (
              <li key={item.label} className="main-header__drawer-item">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => linkClass(item, isActive)}
                  onClick={closeAll}
                >
                  {item.label}
                </NavLink>
                {item.children ? (
                  <ul className="main-header__drawer-sublist">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link to={child.to} className="main-header__sublink" onClick={closeAll}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}
