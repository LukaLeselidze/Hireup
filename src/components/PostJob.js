import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { database } from "../firebase";
import { onValue, ref } from "firebase/database";
import { HireUpContext } from "./Contexts/HireUpContext";
import dropdown from "../img/dropdown.svg";
import Header from "./Header";
import FooterSection from "./FooterSection";
import "./PostJob.css";

const PostJob = ({ isDataSubmitted, faqItems, onDataSubmit }) => {
  const navigate = useNavigate();
  const { data, setData } = useContext(HireUpContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [positionName, setPositionName] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [jobTime, setJobTime] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newUser = {
      positionName: positionName,
      jobCategory: jobCategory,
      companyName: companyName,
      salary: salary,
      location: location,
      employmentType: employmentType,
      date: currentDate,
    };

    onDataSubmit(newUser);
    setTimeout(() => {
      navigate("/postjob/browsejobs");
    }, 3000);
  };

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setIsActive(index === activeIndex ? null : true);
  };

  return (
    <div>
      <Header />
      <div className="submit_job_section">
        <div className="submit_job_content">
          <div className="submit_top_content">
            <h2>Submit a Job</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="job_form">
            <div className="form_container">
              {isDataSubmitted ? (
                <div className="success_message">
                  <div>Thank you! Your submission has been received!</div>{" "}
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="job_form_wrapper">
                    <div className="job_form_number">
                      <div>1</div>
                    </div>
                    <div className="job_from_section">
                      <div className="job_form_margin">
                        <h5>Job Information</h5>
                      </div>
                      <label htmlFor="positionName">Job Title</label>
                      <input
                        onBlur={(e) => {
                          if (e.target.value.trim() === "") {
                            setPositionName("");
                          }
                        }}
                        required
                        type="text"
                        value={positionName}
                        onChange={(e) => setPositionName(e.target.value)}
                      ></input>
                      <label htmlFor="JobCategory">Job Category</label>
                      <select
                        required
                        value={jobCategory}
                        onChange={(e) => setJobCategory(e.target.value)}
                      >
                        <option value="Marketing">Marketing</option>
                        <option value="Education">Education</option>
                        <option value="Development/IT">Development/IT</option>
                        <option value="Media/Publishing">
                          Media/Publishing
                        </option>
                        <option value="Food">Food</option>
                        <option value="PR/Marketing">PR/Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                      <label htmlFor="JobTime">Location</label>
                      <input
                        onBlur={(e) => {
                          if (e.target.value.trim() === "") {
                            setLocation("");
                          }
                        }}
                        required
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      ></input>
                      <label htmlFor="Job-Title">Employment Type</label>
                      <input
                        onBlur={(e) => {
                          if (e.target.value.trim() === "") {
                            setEmploymentType("");
                          }
                        }}
                        required
                        value={employmentType}
                        onChange={(e) => setEmploymentType(e.target.value)}
                        type="text"
                      ></input>
                      <label htmlFor="salary">Job Salary</label>
                      <input
                        onBlur={(e) => {
                          if (e.target.value.trim() === "") {
                            setSalary("");
                          }
                        }}
                        required
                        type="text"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="job_form_wrapper">
                    <div className="job_form_number">
                      <div>2</div>
                    </div>
                    <div className="job_from_section">
                      <div className="job_form_margin">
                        <h5>Company Information</h5>
                      </div>
                      <label htmlFor="CompanyName">Company Name</label>
                      <input
                        onBlur={(e) => {
                          if (e.target.value.trim() === "") {
                            setCompanyName("");
                          }
                        }}
                        required
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      ></input>
                      <label htmlFor="Job-Title">Company Size</label>
                      <input type="text"></input>
                      <label htmlFor="Job-Title">Instagram</label>
                      <input type="text"></input>
                      <label htmlFor="Job-Title">Twitter</label>
                      <input type="text"></input>
                      <label htmlFor="Job-Title">Company Description</label>
                      <input type="text"></input>
                      <div className="margin_bottom_48"></div>
                      <div className="submit_form">
                        <input
                          className="form_submit"
                          value="Submit"
                          type="submit"
                        ></input>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="faq_wrap">
        <div className="faq_container">
          <div className="faq_title_wrap">
            <div className="faq_margin_12">
              <div className="faq_about">about hireup</div>
            </div>
            <h3 className="faq_main_header">Frequently asked questions</h3>
          </div>
          <div className="faq_blocks_container">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="faq_block"
                onClick={() => handleClick(index)}
              >
                <div className="faq_header">
                  <div className="question">{item.question}</div>
                  <div className="faq_drop_down">
                    <img
                      className={`${
                        index === activeIndex ? "active_dropdown" : "dropdown"
                      }`}
                      src={dropdown}
                    />
                  </div>
                </div>
                <div
                  className={`${
                    index === activeIndex ? "active_answer" : "answer"
                  }`}
                >
                  <p className="faq_answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PostJob;
