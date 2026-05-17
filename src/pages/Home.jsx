
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

// Import your images
// import heroImage from "../assets/direction landing page image.jpg";
import heroImage2 from "../assets/second-image.png";
import heroImage3 from "../assets/third-image.png";
import heroImage4 from "../assets/fourth-image.png";

// Import Carousel from bootstrap
import { Carousel } from 'bootstrap'; 

export function Home() {
  useEffect(() => {
    document.title = "GEN Skill College | Home";
    
    // Initialize Animations
    AOS.init({ duration: 1000 });

    // Initialize Carousel
    const myCarouselElement = document.querySelector('#heroCarousel');
    if (myCarouselElement) {
      const carousel = new Carousel(myCarouselElement, {
        interval: 3000,
        ride: 'carousel',
        pause: false
      });
      carousel.cycle();
    }
  }, []);

  return (
    <div className="home">
      {/* Bootstrap Carousel Wrapper */}
      <div id="heroCarousel" className="carousel slide">
        <div className="carousel-inner">
          
          {/* Slide 1 */}
          <div className="carousel-item active">
            <section className="home-hero" aria-labelledby="home-hero-heading">
              <div className="home-hero__inner">
                <div className="home-hero__copy" data-aos="fade-right">
                  <p className="home-hero__badge">
                    <span className="home-hero__badge-text">Build a Future-Ready Career in</span>
                  </p>
                  <h1 id="home-hero-heading" className="home-hero__title">
                    AI FILMMAKING & DIGITAL MEDIA PRODUCTION
                  </h1>
                  <p className="home-hero__subtitle">B.Voc 3-Year Degree Program</p>
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/contact/our-office">Join the Class</Link>
                    <Link className="home-hero__btn" to="/programmes/bvoc">Learn more</Link>
                  </div>
                </div>
                <div className="home-hero__visual" data-aos="fade-left">
                  <div className="home-hero__frame">
                    <img
                      src={heroImage4}
                      alt="Filmmaking Production"
                      className="home-hero__img-animated"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <section className="home-hero" style={{ background: 'var(--teal)' }}>
               <div className="home-hero__inner">
                  <div className="home-hero__copy">
                    <p className="home-hero__badge">
                      <span className="home-hero__badge-text">Master New Skills</span>
                    </p>
                    <h1 className="home-hero__title">DIGITAL WEALTH MANAGEMENT</h1>
                    <p className="home-hero__subtitle">Professional Certification Programs</p>
                    <div className="home-hero__actions">
                      <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                    </div>
                  </div>
                  <div className="home-hero__visual">
                    <div className="home-hero__frame">
                      <img src={heroImage2} className="home-hero__img-animated" alt="Second Slide" />
                    </div>
                  </div>
               </div>
            </section>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <section className="home-hero" style={{ background: 'var(--teal)' }}>
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <p className="home-hero__badge">
                    <span className="home-hero__badge-text">Stay Ahead of the Curve</span>
                  </p>
                  <h1 className="home-hero__title">DIGITAL BUSINESS AUTOMATION</h1>
                  <p className="home-hero__subtitle">Fostering Creative Solutions</p>
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                  </div>
                </div>
                <div className="home-hero__visual">
                  <div className="home-hero__frame">
                    <img src={heroImage2} className="home-hero__img-animated" alt="Third Slide" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Slide 4 */}
          <div className="carousel-item">
            <section className="home-hero" style={{ background: 'var(--teal)' }}>
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <p className="home-hero__badge">
                    <span className="home-hero__badge-text">Stay Ahead of the Curve</span>
                  </p>
                  <h1 className="home-hero__title">INNOVATIVE REMEDICAL TEACHING</h1>
                  <p className="home-hero__subtitle">Driving Insights with Data</p>
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                  </div>
                </div>
                <div className="home-hero__visual">
                  <div className="home-hero__frame">
                    <img src={heroImage3} className="home-hero__img-animated" alt="Fourth Slide" />
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>

      {/* Highlights Section */}
      <section className="home-stripes" aria-label="Highlights">
        <div className="home-stripes__inner">
          <article className="home-card">
            <h2 className="home-card__title">Programmes</h2>
            <p className="home-card__text">
              B.Voc degrees, advanced diplomas, diplomas, and certificates designed for portfolios.
            </p>
            <Link className="home-card__link" to="/programmes/bvoc">Explore programmes</Link>
          </article>
          <article className="home-card">
            <h2 className="home-card__title">Training & Certifications</h2>
            <p className="home-card__text">
              Focused skill blocks for teams and professionals—structured assessments.
            </p>
            <Link className="home-card__link" to="/training-certifications">View training paths</Link>
          </article>
          <article className="home-card">
            <h2 className="home-card__title">Placements</h2>
            <p className="home-card__text">
              Placement desk support, vacancies, and employer partnerships.
            </p>
            <Link className="home-card__link" to="/placement/our-placements">Placement hub</Link>
          </article>
        </div>
      </section>
    </div>
  );
}