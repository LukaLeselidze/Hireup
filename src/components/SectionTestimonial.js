import React, { useState, useRef, useEffect } from "react";
import "./SectionTestimonial.css";
import NextIcon from "../img/Next-Icon.svg";
import BackIcon from "../img/BackIcon.svg";
import Forward from "../img/iconnext.png";
import Previous from "../img/iconprevious.png";

import ChimpIcon from "../img/ChimpIcon.svg";
import TestimonialImage from "../img/TestimonialImage.jpg";
import Testimonial_girl from "../img/Testimonial_girl.jpg";

const testimonialsData = [
  {
    id: 1,
    name: "David Sinclair",
    job: "Senior Frontend Developer",
    testimonial:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”",
    img: TestimonialImage,
  },
  {
    id: 2,
    name: "Emily York",
    job: "Senior Frontend Developer",
    testimonial:
      "“There are lot of interesting projects that casting directors post on this platform. So many people and companies trust casting through Platform”",
    img: Testimonial_girl,
  },
];

function SectionTestimonial() {
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      ref={contentRef}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 3s" }}
      className="section_testimonial"
    >
      <div className="testimonial_content">
        <div className="testimonial_top">
          <div className="testimonial_text">Testimonial</div>
          <h3>See what users say about our job platform</h3>
        </div>
        <div className="testimonial_main">
          <div className="testimonial_grid">
            <div className="grid_wrap">
              <div className="testimonial_logo_wrap">
                <img src={ChimpIcon} alt={ChimpIcon} />
              </div>
              <p className="testimonial_quote">
                {currentTestimonial.testimonial}
              </p>
              <div className="testimonial_job_position">
                <span>{currentTestimonial.name}</span> - Senior Frontend
                Developer
              </div>
            </div>
            <div className="testimonial_image_wrap">
              <img src={`${currentTestimonial.img}`} alt={TestimonialImage} />
            </div>
          </div>
          <div className="buttons_container">
            <div
              onClick={handlePreviousTestimonial}
              className="testimonial_left_button"
            >
              <div className="button_wrap">
                <img src={Previous} alt={Previous} />
              </div>
            </div>
            <div
              onClick={handleNextTestimonial}
              className="testimonial_right_button"
            >
              <div className="button_wrap_right">
                <img src={Forward} alt={Forward} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTestimonial;
