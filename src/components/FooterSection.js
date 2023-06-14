import React, { useState, useRef, useEffect } from "react";
import "./FooterSection.css";
import HireUp from "../img/HireUp Logo.svg";

function FooterSection() {
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

  return (
    <div
      ref={contentRef}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2s" }}
      className="footer_section"
    >
      <div className="footer_content">
        <div className="footer_logo">
          <a>
            <img src={HireUp} alt="hire-up-logo" />
          </a>
        </div>
        <div className="footer_grid">
          <div className="w_layout_grid grid_top grid_responsive">
            <div className="footer_column">
              <div>Pages</div>
              <a>Home</a>
              <a>Home V2</a>
              <a>About</a>
              <a>Pricing</a>
              <a>Jobs</a>
              <a className="last_a">Post a Job</a>
            </div>
            <div className="footer_column">
              <div>Account</div>
              <a>Sign In</a>
              <a>Sign Up</a>
              <a>Reset Password</a>
              <a className="last_a">User Account</a>
            </div>
            <div className="footer_column">
              <div>Template</div>
              <a>Style Guide</a>
              <a>License</a>
              <a>Changelog</a>
            </div>
          </div>
          <div className="grid_bottom">
            <div className="footer_form_container">
              <div className="footer_margin">
                <div>SIGN UP TO OUR NEWSLETTER</div>
              </div>
              <form className="footer_form">
                <input
                  type="email"
                  className="form_text_field email_input"
                  placeholder="Email address"
                  required
                ></input>
                <input
                  className="footer_button"
                  type="submit"
                  value="Get Started"
                ></input>
              </form>
            </div>
            <div className="footer_bottom_text">
              <div>HireUP. All Rights Reserved, 2022.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
