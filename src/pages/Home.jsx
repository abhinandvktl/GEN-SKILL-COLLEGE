import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import CoursesSection from "../components/CoursesSection";
import PartnersSection from "../components/PartnersSection";
import VideoSection from "../components/VideoSection";

// Image Imports
import heroImage1 from "../assets/hero-banner-title-images.webp";
import heroImage2 from "../assets/AI Filmmaking-image.webp";
import heroImage3 from "../assets/Wealth Management.webp";
import heroImage4 from "../assets/Business Automation.webp";
import heroImage5 from "../assets/Remedial-Teaching.webp";
// Make sure this file exists in src/assets/
 

// Lottie and Bootstrap imports
import { useLottie } from "lottie-react";
import { Carousel } from 'bootstrap'; 

import aiTextAnim from "../assets/AI Filmmaking Text.json";
import wealthTextAnim from "../assets/Wealth Management Text.json";
import businessTextAnim from "../assets/Business Automation Text.json";
import remedialTextAnim  from "../assets/Remedial Teaching Text.json";
import brandTitleHB from "../assets/brand-title-hb.json";
import ugcLogoHB from "../assets/ugc-logo-hb.json";

// Controlled Lottie Wrapper Component
const ManagedLottieText = ({ animationData, lottieRef, className }) => {
  const options = {
    animationData,
    loop: true,
    autoplay: false,
  };
  const { View, play, stop, goToAndPlay } = useLottie(options);

  useEffect(() => {
    if (lottieRef) {
      lottieRef.current = { play, stop, goToAndPlay };
    }
  }, [play, stop, goToAndPlay, lottieRef]);

  return <div className={`home-hero__text-animated ${className || ""}`}>{View}</div>;
};

export function Home() {
  // Animation tracking references
  const aiRef = useRef(null);
  const wealthRef = useRef(null);
  const businessRef = useRef(null);
  const remedialRef = useRef(null);
  const brandRef = useRef(null);
  const ugcRef = useRef(null);

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

      const slideRefs = [aiRef, wealthRef, businessRef, remedialRef, brandRef, ugcRef];

      const stopAllSlides = () => {
        slideRefs.forEach((ref) => ref.current?.stop());
      };

      const playFromStart = (ref) => {
        if (!ref.current) return;
        ref.current.goToAndPlay?.(0, true) || ref.current.play();
      };

      const playSyncedPair = (firstRef, secondRef) => {
        requestAnimationFrame(() => {
          playFromStart(firstRef);
          playFromStart(secondRef);
        });
      };

      const handleSlid = (event) => {
        stopAllSlides();
        setTimeout(() => {
          if (event.to === 0) {
            playSyncedPair(aiRef, ugcRef);
          }
          if (event.to === 1) wealthRef.current?.play();
          if (event.to === 2) businessRef.current?.play();
          if (event.to === 3) remedialRef.current?.play();
          if (event.to === 4) {
            playSyncedPair(brandRef, ugcRef);
          }
        }, 50);
      };

      const handleSlideStart = () => {
        stopAllSlides();
      };

      myCarouselElement.addEventListener('slid.bs.carousel', handleSlid);
      myCarouselElement.addEventListener('slide.bs.carousel', handleSlideStart);
      
      carousel.cycle();

      if (aiRef.current) {
        stopAllSlides();
        playSyncedPair(aiRef, ugcRef);
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
        
        {/* Updated Dot Indicators (5 dots now) */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 - AI Filmmaking */}
          <div className="carousel-item active">
            <section className="home-hero">
              <div className="home-hero__inner">
                <div className="home-hero__copy" data-aos="fade-right">
                  <ManagedLottieText animationData={brandTitleHB} lottieRef={aiRef} />
                </div>
                <div className="home-hero__visual" data-aos="fade-left">
                  <div className="home-hero__frame">
                    <img 
                        id="hero-img-primary"
                        src={heroImage1} 
                        alt="Filmmaking" 
                        className="home-hero__img-animated" 
                    />
                    
                  </div>
                  <ManagedLottieText animationData={ugcLogoHB} lottieRef={ugcRef} className="home-hero__ugc-overlay" />
                </div>
              </div>
            </section>
          </div>

          {/* Slide 2 - Digital Wealth Management */}
          <div className="carousel-item">
            <section className="home-hero">
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <ManagedLottieText animationData={aiTextAnim} lottieRef={wealthRef} />
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/contact/our-office">Join the Class</Link>
                    <Link className="home-hero__btn" to="/programmes/bvoc">Learn more</Link>
                  </div>
                </div>
                <div className="home-hero__visual">
                  <div className="home-hero__frame">
                    <img src={heroImage2} className="home-hero__img-animated" alt="Digital Wealth Management" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 3 - Business Automation */}
          <div className="carousel-item">
            <section className="home-hero">
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <ManagedLottieText animationData={wealthTextAnim} lottieRef={businessRef} />
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                  </div>
                </div>
                <div className="home-hero__visual">
                  <div className="home-hero__frame">
                    <img src={heroImage3} className="home-hero__img-animated" alt="Business Automation" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 4 - Remedial Teaching */}
          <div className="carousel-item">
            <section className="home-hero">
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <ManagedLottieText animationData={businessTextAnim} lottieRef={remedialRef} />
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                  </div>
                </div>
                <div className="home-hero__visual">
                  <div className="home-hero__frame">
                    <img src={heroImage4} className="home-hero__img-animated" alt="Remedial Teaching" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 5 */}
          <div className="carousel-item">
            <section className="home-hero">
              <div className="home-hero__inner">
                <div className="home-hero__copy">
                  <ManagedLottieText animationData={remedialTextAnim} lottieRef={brandRef} className="home-hero__text-animated--small" />
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                  </div>
                </div>
                <div className="home-hero__visual">
                  <div className="home-hero__frame">
                    <img src={heroImage5} className="home-hero__img-animated" alt="Hero Banner Title" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <button className="carousel-btn btn-left" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev" aria-label="Previous Slide">&#10094;</button>
        <button className="carousel-btn btn-right" type="button" data-bs-target="#heroCarousel" data-bs-slide="next" aria-label="Next Slide">&#10095;</button>
      </div>
      
      <CoursesSection />
      <PartnersSection />
      <VideoSection />
    </div>
  );
}