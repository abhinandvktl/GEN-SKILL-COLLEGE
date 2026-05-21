import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../components/CoursesSection.css';

import cardImg from "../assets/AI-Filmmaking-image.webp";

const courses = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: "Lorem Ipsum",
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  img: cardImg,
}));

export default function CoursesSection() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="container mt-5 courses-section">
      <div className="row">
        <div className="col text-center" data-aos="fade-up">
          <h1 className="tw-bold">The Courses</h1>
          <p className="out-text">
            From BVoc degrees to professional diplomas, certificates, and
            micro-credentials, Transorze gives you flexible routes to build
            expertise and turn it into a career.
          </p>
        </div>
      </div>

      <div className="row mt-2 row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="col"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="card h-100">
              <img
                src={course.img}
                className="card-img-top img-fluid"
                alt={`${course.title} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.text}</p>
                <Link to={`/courses/${course.id}`} className="btn btn-end btn-more-details">
                  More Details <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
