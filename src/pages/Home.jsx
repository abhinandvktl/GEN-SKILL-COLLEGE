import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import CoursesSection from "../components/CoursesSection";
import PartnersSection from "../components/PartnersSection";
import VideoSection from "../components/VideoSection";

// Image Imports
import heroImage2 from "../assets/hero-banner-course-images1.webp";
import heroImage3 from "../assets/Innovative-Remedial-Teaching-course-images1.webp";
import heroImage4 from "../assets/AI-Filmmaking-image.webp";

// Lottie and Bootstrap imports
import { useLottie } from "lottie-react";
import { Carousel } from 'bootstrap'; 

import aiTextAnim from "../assets/AI Filmmaking Text.json";
import wealthTextAnim from "../assets/Wealth Management Text.json";
import businessTextAnim from "../assets/Business Automation Text.json";
import remedialTextAnim  from "../assets/Remedial Teaching Text.json";

// Controlled Lottie Wrapper Component
const ManagedLottieText = ({ animationData, lottieRef }) => {
  const options = {
    animationData,
    loop: true,
    autoplay: false,
  };
  const { View, play, stop } = useLottie(options);

  useEffect(() => {
    if (lottieRef) {
      lottieRef.current = { play, stop };
    }
  }, [play, stop, lottieRef]);

  return <div className="home-hero__text-animated">{View}</div>;
};

export function Home() {
  // Animation tracking references for slide rotations
  const aiRef = useRef(null);
  const wealthRef = useRef(null);
  const businessRef = useRef(null);
  const remedialRef = useRef(null);

  useEffect(() => {
    document.title = "GEN Skill College | Home";
    AOS.init({ duration: 1000 });

    const myCarouselElement = document.querySelector('#heroCarousel');
    if (myCarouselElement) {
      const carousel = new Carousel(myCarouselElement, {
        interval: 7000,
        ride: 'carousel',
        pause: false
      });

      const slideRefs = [aiRef, wealthRef, businessRef, remedialRef];
      const stopAllSlides = () => {
        slideRefs.forEach((ref) => ref.current?.stop());
      };

      // Handle structural reset when active changes complete
      const handleSlid = (event) => {
        stopAllSlides();
        setTimeout(() => {
          if (event.to === 0) aiRef.current?.play();
          if (event.to === 1) wealthRef.current?.play();
          if (event.to === 2) businessRef.current?.play();
          if (event.to === 3) remedialRef.current?.play();
        }, 50);
      };

      const handleSlideStart = () => {
        stopAllSlides();
      };

      myCarouselElement.addEventListener('slid.bs.carousel', handleSlid);
      myCarouselElement.addEventListener('slide.bs.carousel', handleSlideStart);
      
      carousel.cycle();

      // Initial component mount call for page loading state
      if (aiRef.current) {
        stopAllSlides();
        aiRef.current.play();
      }

      return () => {
        myCarouselElement.removeEventListener('slid.bs.carousel', handleSlid);
        myCarouselElement.removeEventListener('slide.bs.carousel', handleSlideStart);
      };
    }
  }, []);

  return (
    <div className="home">
      <div id="heroCarousel" className="carousel slide">
        
        {/* Dot Indicators System */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 - AI Filmmaking */}
          <div className="carousel-item active">
            <section className="home-hero" aria-labelledby="home-hero-heading">
              <div className="home-hero__inner">
                <div className="home-hero__copy" data-aos="fade-right">
                  <ManagedLottieText animationData={aiTextAnim} lottieRef={aiRef} />
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/contact/our-office">Join the Class</Link>
                    <Link className="home-hero__btn" to="/programmes/bvoc">Learn more</Link>
                  </div>
                </div>
                <div className="home-hero__visual" data-aos="fade-left">
                  <div className="home-hero__frame">
                    <img src={heroImage4} alt="Filmmaking Production" className="home-hero__img-animated" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 2 - Digital Wealth Management */}
          <div className="carousel-item">
            <section className="home-hero" style={{ background: 'var(--teal)' }}>
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <ManagedLottieText animationData={wealthTextAnim} lottieRef={wealthRef} />
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

          {/* Slide 3 - Digital Business Automation */}
          <div className="carousel-item">
            <section className="home-hero" style={{ background: 'var(--teal)' }}>
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <ManagedLottieText animationData={businessTextAnim} lottieRef={businessRef} />
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

          {/* Slide 4 - Innovative Remedial Teaching */}
          <div className="carousel-item">
            <section className="home-hero" style={{ background: 'var(--teal)' }}>
              <div className="home-hero__inner"> 
                <div className="home-hero__copy">
                  <ManagedLottieText animationData={remedialTextAnim} lottieRef={remedialRef} />
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

        {/* Custom Navigation Buttons */}
        <button className="carousel-btn btn-left" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" aria-label="Previous Slide">&#10094;</button>
        <button className="carousel-btn btn-right" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" aria-label="Next Slide">&#10095;</button>
      </div>
      
      <CoursesSection />
      <PartnersSection />
      <VideoSection />
    </div>
  );
}