import { useState } from "react";
import "./VideoSection.css";
import thumbnail from "../assets/video-preview.png";

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="container py-5 mt-5 video-section">
      <div className="row">
        <div className="col text-center" data-aos="fade-up">
          <h1 className="tw-bold">Not Just a College… A Launchpad for Your Future</h1>
          <p className="out-text mt-2">
            From BVoc degrees to professional diplomas, certificates, and micro-credentials, Transorze gives you flexible routes to build expertise and turn it into a career.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="youtube" data-aos="fade-up">
            {!showVideo ? (
              <div
                className="ratio ratio-16x9 position-relative video-thumb"
                role="button"
                tabIndex={0}
                aria-label="Play introduction video"
                onClick={() => setShowVideo(true)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setShowVideo(true);
                  }
                }}
              >
                <img
                  src={thumbnail}
                  alt="Course video thumbnail"
                  className="w-100 h-100 rounded-3"
                  style={{ objectFit: "cover" }}
                />
                <div className="position-absolute top-50 start-50 translate-middle play-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#111" style={{ marginLeft: "3px" }}>
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/1M6RqtYEca0?si=pjRY03uC5kT3w6_H&autoplay=1&modestbranding=1&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
