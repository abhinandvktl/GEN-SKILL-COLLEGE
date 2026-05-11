import { useEffect } from "react";
import { Link } from "react-router-dom";
import { pageContent } from "../data/pageContent.js";
import "./ContentPage.css";

export function ContentPage({ pageKey }) {
  const data = pageContent[pageKey];

  useEffect(() => {
    if (data) document.title = data.title;
  }, [data]);

  if (!data) {
    return (
      <div className="content-page content-page--narrow">
        <h1>Page not found</h1>
        <p>This section is not available.</p>
        <Link to="/">Return home</Link>
      </div>
    );
  }

  return (
    <article className="content-page">
      <div className="content-page__inner">
        <header className="content-page__header">
          <h1 className="content-page__title">{data.heading}</h1>
        </header>
        <p className="content-page__intro">{data.intro}</p>
        {data.bullets?.length > 0 && (
          <ul className="content-page__bullets">
            {data.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        <Link className="content-page__back" to="/">
          Back to home
        </Link>
      </div>
    </article>
  );
}
