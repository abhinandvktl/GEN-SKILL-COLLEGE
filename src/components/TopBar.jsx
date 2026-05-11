import { Link } from "react-router-dom";
import "./TopBar.css";

export function TopBar() {
  return (
    <div className="topbar" role="region" aria-label="Utility links">
      <div className="topbar__inner">
        <span className="topbar__tagline">GEN Skill College — Skill & vocational excellence</span>
        <div className="topbar__actions">
          <Link className="topbar__link" to="/pay-now">
            Pay Now
          </Link>
          <span className="topbar__sep" aria-hidden="true">
            |
          </span>
          <Link className="topbar__link topbar__link--emphasis" to="/logins/student">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
