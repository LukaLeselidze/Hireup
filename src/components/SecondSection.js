import React, { useState, useRef, useEffect } from "react";
import "./SecondSection.css";
import companylogo from "../img/companylogo.svg";
import JobLocation from "../img/JobLocation.svg";
import JobSalary from "../img/JobSalary.svg";
import { Link } from "react-router-dom";
import SpotifyLogo from "../img/spotifyLogo.svg";
import FacebookIcon from "../img/FacebookIcon.svg";
import Tokopedia from "../img/TokoPediaIcon.svg";
import PayPalIcon from "../img/PayPalIcon.svg";
import DribbleIcon from "../img/DribbleIcon.svg";

function SecondSection() {
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
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2s " }}
      className="second_section_container"
    >
      <div className="content_wrapper">
        <div className="second_section_content">
          <div className="section_top_try second_section_top">
            <div className="second_section_left">
              <div>
                <h3>Explore the latest job openings</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel
                convallis magna.
              </p>
            </div>
            <Link className="second_section_button" to="/postjob/browsejobs">
              See All Jobs
            </Link>
            {/* <a className="second_section_button">See All Jobs</a> */}
          </div>
        </div>
        <div className="jobs_container">
          <div className="jobs_list">
            <div className="job">
              <a>
                <div className="job_item_top">
                  <div className="job_logo">
                    <img src={companylogo} />
                  </div>
                  <div className="job_company_name">
                    <div className="name">Dribble</div>
                    <div className="date">October 25, 2022</div>
                  </div>
                </div>
                <div className="job_name">
                  <h3>Front End Developer</h3>
                </div>
                <div className="job_tags">
                  <div className="job_category">Marketing</div>
                  <div className="job_hours">Part Time</div>
                </div>
                <div className="job_last_details">
                  <div className="job_location">
                    <img src={JobLocation} />
                    <div>San Antonio</div>
                  </div>
                  <div className="job_salary">
                    <img src={JobSalary} />
                    <div>$130k-160k</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="job">
              <a>
                <div className="job_item_top">
                  <div className="job_logo">
                    <img src={companylogo} />
                  </div>
                  <div className="job_company_name">
                    <div className="name">Dribble</div>
                    <div className="date">October 25, 2022</div>
                  </div>
                </div>
                <div className="job_name">
                  <h3>Backend Developer</h3>
                </div>
                <div className="job_tags">
                  <div className="job_category">Design</div>
                  <div className="job_hours">Full Time</div>
                </div>
                <div className="job_last_details">
                  <div className="job_location">
                    <img src={JobLocation} />
                    <div>Dallas</div>
                  </div>
                  <div className="job_salary">
                    <img src={JobSalary} />
                    <div>$50k-70k</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="job">
              <a>
                <div className="job_item_top">
                  <div className="job_logo">
                    <img src={Tokopedia} />
                  </div>
                  <div className="job_company_name">
                    <div className="name">Tokopedia</div>
                    <div className="date">March 30, 2022</div>
                  </div>
                </div>
                <div className="job_name">
                  <h3>Scrum Developer</h3>
                </div>
                <div className="job_tags">
                  <div className="job_category">Marketing</div>
                  <div className="job_hours">Part Time</div>
                </div>
                <div className="job_last_details">
                  <div className="job_location">
                    <img src={JobLocation} />
                    <div>San Antonio</div>
                  </div>
                  <div className="job_salary">
                    <img src={JobSalary} />
                    <div>$130k-160k</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="job">
              <a>
                <div className="job_item_top">
                  <div className="job_logo">
                    <img src={FacebookIcon} />
                  </div>
                  <div className="job_company_name">
                    <div className="name">Facebook</div>
                    <div className="date">March 25, 2022</div>
                  </div>
                </div>
                <div className="job_name">
                  <h3>Lead Technical Architect</h3>
                </div>
                <div className="job_tags">
                  <div className="job_category">Technology</div>
                  <div className="job_hours">Full Time</div>
                </div>
                <div className="job_last_details">
                  <div className="job_location">
                    <img src={JobLocation} />
                    <div>Melbourne</div>
                  </div>
                  <div className="job_salary">
                    <img src={JobSalary} />
                    <div>$210k-240k</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="job">
              <a>
                <div className="job_item_top">
                  <div className="job_logo">
                    <img src={SpotifyLogo} />
                  </div>
                  <div className="job_company_name">
                    <div className="name">Spotify</div>
                    <div className="date">April 25, 2022</div>
                  </div>
                </div>
                <div className="job_name">
                  <h3>Digital Media Strategist</h3>
                </div>
                <div className="job_tags">
                  <div className="job_category">Business</div>
                  <div className="job_hours">Casual</div>
                </div>
                <div className="job_last_details">
                  <div className="job_location">
                    <img src={JobLocation} />
                    <div>New York</div>
                  </div>
                  <div className="job_salary">
                    <img src={JobSalary} />
                    <div>$50k-70k</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="job">
              <a>
                <div className="job_item_top">
                  <div className="job_logo">
                    <img src={PayPalIcon} />
                  </div>
                  <div className="job_company_name">
                    <div className="name">Paypal</div>
                    <div className="date">October 25, 2022</div>
                  </div>
                </div>
                <div className="job_name">
                  <h3>Systems Administrator</h3>
                </div>
                <div className="job_tags">
                  <div className="job_category">Business</div>
                  <div className="job_hours">Casual</div>
                </div>
                <div className="job_last_details">
                  <div className="job_location">
                    <img src={JobLocation} />
                    <div>California</div>
                  </div>
                  <div className="job_salary">
                    <img src={JobSalary} />
                    <div>$40k-50k</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
