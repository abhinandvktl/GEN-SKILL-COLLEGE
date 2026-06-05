import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import CoursesSection from "../components/CoursesSection";
import PartnersSection from "../components/PartnersSection";
import VideoSection from "../components/VideoSection";

// 1. Keep your original image imports exactly on the right side
import heroImage2 from "../assets/hero-banner-course-images1.webp";
import heroImage3 from "../assets/Innovative-Remedial-Teaching-course-images1.webp";
import heroImage4 from "../assets/AI-Filmmaking-image.webp";

// 2. Import your Lottie player tool and JSON text animations for the left side
import { useLottie } from "lottie-react";
import { Carousel } from 'bootstrap'; 

import aiTextAnim from "../assets/AI Filmmaking Text.json";
import wealthTextAnim from "../assets/Wealth Management Text.json";
import businessTextAnim from "../assets/Business Automation Text.json";
import remedialTextAnim from "../assets/Remedial Teaching Text.json";

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
        interval: 6000,
        ride: 'carousel',
        pause: false
      });

      const slideRefs = [aiRef, wealthRef, businessRef, remedialRef];
      const stopAllSlides = () => {
        slideRefs.forEach((ref) => ref.current?.stop());
      };

      const handleSlide = (event) => {
        stopAllSlides();

        setTimeout(() => {
          if (event.to === 0) aiRef.current?.play();
          if (event.to === 1) wealthRef.current?.play();
          if (event.to === 2) businessRef.current?.play();
          if (event.to === 3) remedialRef.current?.play();
        }, 50);
      };

      myCarouselElement.addEventListener('slid.bs.carousel', handleSlide);
      carousel.cycle();

      if (aiRef.current) {
        stopAllSlides();
        aiRef.current.play();
      }

      return () => {
        myCarouselElement.removeEventListener('slid.bs.carousel', handleSlide);
      };
    }
  }, []);

  return (
    <div className="home">
      <div id="heroCarousel" className="carousel slide">
        <div className="carousel-inner">
          
          {/* Slide 1 - AI Filmmaking */}
          <div className="carousel-item active">
            <section className="home-hero" aria-labelledby="home-hero-heading">
              <div className="home-hero__inner">
                {/* LEFT SIDE: Text Animation sits exactly where text was */}
                <div className="home-hero__copy" data-aos="fade-right">
                  
                  <ManagedLottieText animationData={aiTextAnim} lottieRef={aiRef} />
                  
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/contact/our-office">Join the Class</Link>
                    <Link className="home-hero__btn" to="/programmes/bvoc">Learn more</Link>
                  </div>
                </div>
                {/* RIGHT SIDE: Your original image code restored */}
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

          {/* Slide 2 - Digital Wealth Management */}
          <div className="carousel-item">
            <section className="home-hero" style={{ background: 'var(--teal)' }}>
               <div className="home-hero__inner">
                  {/* LEFT SIDE */}
                  <div className="home-hero__copy">
                    
                    <ManagedLottieText animationData={wealthTextAnim} lottieRef={wealthRef} />
                    
                    <div className="home-hero__actions">
                      <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                    </div>
                  </div>
                  {/* RIGHT SIDE */}
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
                {/* LEFT SIDE */}
                <div className="home-hero__copy">
                  
                  <ManagedLottieText animationData={businessTextAnim} lottieRef={businessRef} />
                  
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                  </div>
                </div>
                {/* RIGHT SIDE */}
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
                {/* LEFT SIDE */}
                <div className="home-hero__copy">
                  
                  <ManagedLottieText animationData={remedialTextAnim} lottieRef={remedialRef} />
                  
                  <div className="home-hero__actions">
                    <Link className="home-hero__btn" to="/programmes">Explore All</Link>
                  </div>
                </div>
                {/* RIGHT SIDE */}
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
      
      <CoursesSection />
      <PartnersSection />
      <VideoSection />
    </div>
  );
}