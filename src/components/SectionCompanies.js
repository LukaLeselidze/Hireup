import React, { useState, useRef, useEffect } from "react";
import "./SectionCompanies.css";
import NextIcon from "../img/Next-Icon.svg";
import BackIcon from "../img/BackIcon.svg";
import SpotifyLogo from "../img/spotifyLogo.svg";
import FacebookIcon from "../img/FacebookIcon.svg";
import SlackIcon from "../img/SlackIcon.svg";
import PayPalIcon from "../img/PayPalIcon.svg";
import DribbleIcon from "../img/DribbleIcon.svg";
import Forward from "../img/iconnext.png";
import Previous from "../img/iconprevious.png";

function SectionCompanies() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const CompaniesData = [
    {
      id: 1,
      name: "Spotify",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique",
      employees: 2000,
      img: SpotifyLogo,
    },
    {
      id: 2,
      name: "Dribble",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique",
      employees: 65,
      img: DribbleIcon,
    },
    {
      id: 3,
      name: "Paypal",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique",
      employees: 6000,
      img: PayPalIcon,
    },
    {
      id: 4,
      name: "Slack",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique",
      employees: 400,
      img: SlackIcon,
    },
    {
      id: 5,
      name: "Facebook",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique",
      employees: 3000,
      img: FacebookIcon,
    },
  ];

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

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex + 1 === CompaniesData.length - 2) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handleBack = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  console.log(currentImageIndex);

  return (
    <div
      ref={contentRef}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 2s " }}
      className="section_companies_container"
    >
      <div className="section_companies_content">
        <div className="companies_top">
          <div className="companies_left">
            <div className="top_first">
              <h3>Work with exciting companies</h3>
            </div>
            <div className="top_second">
              <p>Discover more than 1,600 open positions</p>
            </div>
          </div>
          <div className="companies_buttons">
            <div onClick={handleBack} className="behind">
              <img alt={Previous} src={Previous} />
            </div>
            <div onClick={handleNext} className="next">
              <img alt={Forward} src={Forward} />
            </div>
          </div>
        </div>
        <div
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          className="companies_carrousel"
        >
          {CompaniesData.map((company, index) => (
            <div key={index} className="company">
              <a>
                <div className="company_top">
                  <div className="company_logo">
                    <img
                      src={company.img}
                      className="company_logo_img"
                      alt={company.name}
                    />
                  </div>
                  <h1 className="company_name">{company.name}</h1>
                </div>
                <div className="company_middle">
                  <p>{company.text}</p>
                </div>
                <div className="company_employees">
                  <div>{company.employees}</div>
                  <div>Employees</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionCompanies;
