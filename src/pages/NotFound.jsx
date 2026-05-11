import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContentPage.css";

export function NotFound() {
  useEffect(() => {
    document.title = "Not Found | GEN Skill College";
  }, []);

  return (
    <div className="content-page content-page--narrow">
      <div className="content-page__inner">
        <h1 className="content-page__title">404 — Page not found</h1>
        <p className="content-page__intro">The page you requested does not exist or has moved.</p>
        <Link className="content-page__back" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
