import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./MainHeader.css";
import logoNavbar from "../assets/Logo-Navbar.webp";

/** Matches CSS in MainHeader.css — mobile layout hides the bar nav and uses the full drawer. */
const MOBILE_NAV_MEDIA = "(max-width: 767px)";

function useMobileNavLayout() {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(MOBILE_NAV_MEDIA).matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MEDIA);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return matches;
}

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

/** Update hrefs when official profiles are available. */
const drawerSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    ),
  },
];

function sectionIsActive(pathname, item) {
  if (!item.children) return false;
  const p = item.activePrefix;
  if (p) {
    return pathname === p || pathname.startsWith(`${p}/`);
  }
  return item.children.some((c) => pathname === c.to || pathname.startsWith(`${c.to}/`));
}

function MobileDrawerNav({ items, pathname, closeAll, drawerOpen }) {
  const [openLabel, setOpenLabel] = useState(null);

  useEffect(() => {
    if (!drawerOpen) return;
    const match = items.find((it) => it.children && sectionIsActive(pathname, it));
    setOpenLabel(match?.label ?? null);
  }, [drawerOpen, pathname, items]);

  const toggle = (label) => {
    setOpenLabel((cur) => (cur === label ? null : label));
  };

  const subActiveClass = (to) =>
    pathname === to || pathname.startsWith(`${to}/`)
      ? " main-header__drawer-mobile-sublink--active"
      : "";

  const contactItem = items.find((it) => it.label === "Contact");
  const otherItems = items.filter((it) => it.label !== "Contact");

  return (
    <div className="main-header__drawer-mobile-body">
      <ul className="main-header__drawer-mobile-list">
        {otherItems.map((item) => {
          const expanded = openLabel === item.label;
          const sectionActive = sectionIsActive(pathname, item);

          if (!item.children) {
            return (
              <li key={item.label} className="main-header__drawer-mobile-item">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `main-header__drawer-mobile-link${isActive ? " main-header__drawer-mobile-link--active" : ""}`
                  }
                  onClick={closeAll}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          }

          return (
            <li
              key={item.label}
              className={`main-header__drawer-mobile-item${expanded ? " main-header__drawer-mobile-item--expanded" : ""}`}
            >
              <button
                type="button"
                className={`main-header__drawer-mobile-trigger${expanded ? " main-header__drawer-mobile-trigger--expanded" : ""}${sectionActive && !expanded ? " main-header__drawer-mobile-trigger--section" : ""}`}
                aria-expanded={expanded}
                onClick={() => toggle(item.label)}
              >
                <span className="main-header__drawer-mobile-trigger-label">{item.label}</span>
                <span className="main-header__drawer-mobile-caret" aria-hidden="true" />
              </button>
              <div className="main-header__drawer-mobile-panel">
                <div className="main-header__drawer-mobile-panel-inner">
                  <ul className="main-header__drawer-mobile-sublist">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className={`main-header__drawer-mobile-sublink${subActiveClass(child.to)}`}
                          onClick={closeAll}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
        <li className="main-header__drawer-mobile-item">
          <NavLink
            to="/pay-now"
            className={({ isActive }) =>
              `main-header__drawer-mobile-link${isActive ? " main-header__drawer-mobile-link--active" : ""}`
            }
            onClick={closeAll}
          >
            Pay Now
          </NavLink>
        </li>
      </ul>
      <div className="main-header__drawer-social" role="list">
        {drawerSocialLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            className="main-header__drawer-social-btn"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            role="listitem"
          >
            {icon}
          </a>
        ))}
      </div>
      {contactItem && (
        <div className="main-header__drawer-contact">
          <Link
            to={contactItem.to}
            className="main-header__drawer-contact-btn"
            onClick={closeAll}
          >
            {contactItem.label}
          </Link>
        </div>
      )}
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="main-header__brand" aria-label="GEN Skill College home">
      <img src={logoNavbar} alt="GEN Skill College" className="main-header__brand-img" />
      <span className="visually-hidden">GEN Skill College</span>
    </Link>
  );
}

export function MainHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isMobileNav = useMobileNavLayout();

  const primaryNavItems = primaryNavLabels
    .map((label) => navItems.find((item) => item.label === label))
    .filter(Boolean);
  const drawerNavItemsDesktop = useMemo(
    () => navItems.filter((item) => !primaryNavLabels.includes(item.label)),
    [],
  );
  const drawerNavItems = isMobileNav ? navItems : drawerNavItemsDesktop;

  const closeAll = () => setDrawerOpen(false);

  useEffect(() => {
    if (!isMobileNav) setDrawerOpen(false);
  }, [isMobileNav]);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

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
            aria-hidden={isMobileNav ? true : undefined}
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
              aria-label={
                drawerOpen
                  ? isMobileNav
                    ? "Close navigation menu"
                    : "Close more navigation menu"
                  : isMobileNav
                    ? "Open navigation menu"
                    : "Open more navigation menu"
              }
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
        className={`main-header__drawer-backdrop ${drawerOpen ? "main-header__drawer-backdrop--open" : ""}${drawerOpen ? " main-header__drawer-backdrop--mobile-drawer" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />
      <aside
        id="secondary-navigation"
        className={`main-header__drawer main-header__drawer--mobile-skin ${drawerOpen ? "main-header__drawer--open" : ""}`}
        aria-label={isMobileNav ? "Main navigation" : "More navigation"}
        aria-hidden={!drawerOpen}
      >
        <div className="main-header__drawer-header">
          <span className="main-header__drawer-title">{isMobileNav ? "Menu" : "More"}</span>
          <button type="button" className="main-header__drawer-close" onClick={closeAll} aria-label="Close menu">
            &times;
          </button>
        </div>
        <nav aria-label={isMobileNav ? "Site navigation" : "Secondary navigation"}>
          <MobileDrawerNav
            items={drawerNavItems}
            pathname={location.pathname}
            closeAll={closeAll}
            drawerOpen={drawerOpen}
          />
        </nav>
      </aside>
    </header>
  );
}
