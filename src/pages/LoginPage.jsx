import { useEffect, useState } from "react";
import "./LoginPage.css";

import facultyImage from "../assets/hero.png";
import studentImage from "../assets/direction landing page image.jpg";
import moodleImage from "../assets/react.svg";

const typeConfig = {
  faculty: {
    title: "Faculty Login",
    description:
      "Access attendance entry, internal marks, course materials, and student feedback spaces through a secure faculty account.",
    image: facultyImage,
    alt: "Faculty reviewing course content on a computer",
  },
  student: {
    title: "Student Login",
    description:
      "Access timetables, fees, results, and downloads. Single sign-on with the LMS will be wired when the backend service is available.",
    image: studentImage,
    alt: "Film-making students and crew on set in front of a green screen",
  },
  moodle: {
    title: "Moodle Login",
    description:
      "Sign in to the learning management system to attempt quizzes, submit assignments, and participate in course discussions.",
    image: moodleImage,
    alt: "Abstract illustration representing an online learning platform",
  },
};

export function LoginPage({ initialType = "student" }) {
  const [type, setType] = useState(typeConfig[initialType] ? initialType : "student");
  const cfg = typeConfig[type];

  useEffect(() => {
    document.title = `${cfg.title} | GEN Skill College`;
  }, [cfg.title]);

  return (
    <section className="login-page" aria-labelledby="login-heading">
      <div className="login-page__inner">
        <div className="login-page__card">
          <header className="login-page__header">
            <h1 id="login-heading" className="login-page__title">
              {cfg.title}
            </h1>
            <p className="login-page__subtitle">Choose your portal and sign in to continue.</p>
          </header>

          <form
            className="login-page__form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <fieldset className="login-page__fieldset">
              <legend className="login-page__legend">I am logging in as</legend>
              <div className="login-page__type-grid">
                <label
                  className={
                    type === "faculty" ? "login-page__choice login-page__choice--active" : "login-page__choice"
                  }
                >
                  <input
                    type="radio"
                    name="userType"
                    value="faculty"
                    checked={type === "faculty"}
                    onChange={() => setType("faculty")}
                  />
                  <span>Faculty</span>
                </label>
                <label
                  className={
                    type === "student" ? "login-page__choice login-page__choice--active" : "login-page__choice"
                  }
                >
                  <input
                    type="radio"
                    name="userType"
                    value="student"
                    checked={type === "student"}
                    onChange={() => setType("student")}
                  />
                  <span>Student</span>
                </label>
                <label
                  className={
                    type === "moodle" ? "login-page__choice login-page__choice--active" : "login-page__choice"
                  }
                >
                  <input
                    type="radio"
                    name="userType"
                    value="moodle"
                    checked={type === "moodle"}
                    onChange={() => setType("moodle")}
                  />
                  <span>Moodle</span>
                </label>
              </div>
            </fieldset>

            <label className="login-page__label">
              Institute ID / Email
              <input className="login-page__input" type="text" name="username" autoComplete="username" required />
            </label>

            <label className="login-page__label">
              Password
              <input
                className="login-page__input"
                type="password"
                name="password"
                autoComplete="current-password"
                required
              />
            </label>

            <div className="login-page__row">
              <label className="login-page__remember">
                <input type="checkbox" name="remember" /> Remember me on this device
              </label>
              <button type="submit" className="login-page__submit">
                Login
              </button>
            </div>

            <p className="login-page__hint">
              This is a frontend-only prototype. Actual authentication and password reset flows will be connected once
              the backend is ready.
            </p>
          </form>
        </div>

        <aside className="login-page__visual" aria-hidden="true">
          <div className="login-page__image-frame">
            <img src={cfg.image} alt={cfg.alt} />
          </div>
          <p className="login-page__description">{cfg.description}</p>
        </aside>
      </div>
    </section>
  );
}

