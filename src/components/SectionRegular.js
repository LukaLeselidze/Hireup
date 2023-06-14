import React, { useState, useRef, useEffect } from "react";
import "./SectionRegular.css";
import OfficeMan from "../img/OfficeMan.webp";
import FeatureIcon from "../img/Featureicon.svg";

function SectionRegular() {
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
      className="section_regular"
    >
      <div className="section_regular_content">
        <div className="regular_grid">
          <div className="regular_section_main_picture">
            <img src={OfficeMan} alt={OfficeMan}></img>
          </div>
          <div className="regular_section_second_part">
            <div className="first_text">
              <h4>Why Choose Us</h4>
            </div>
            <div className="regular_section_header_text">
              <h2>Build a custom membership site with locked content.</h2>
            </div>
            <div className="regular_section_p">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel
                convallis magna, sit amet pulvinar diam. Sed laoreet feugiat
                consequat.
              </p>
            </div>
            <div className="regular_section_features_list">
              <div className="feature_content">
                <div className="feature_icon">
                  <img src={FeatureIcon} alt={FeatureIcon} />
                </div>
                <div className="feature_right">
                  <div className="feature_point">Add a feature point here</div>
                  <div className="feature_p">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature_content">
                <div className="feature_icon">
                  <img src={FeatureIcon} alt={FeatureIcon} />
                </div>
                <div className="feature_right">
                  <div className="feature_point">Add a feature point here</div>
                  <div className="feature_p">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature_content">
                <div className="feature_icon">
                  <img src={FeatureIcon} alt={FeatureIcon} />
                </div>
                <div className="feature_right">
                  <div className="feature_point">Add a feature point here</div>
                  <div className="feature_p">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionRegular;
