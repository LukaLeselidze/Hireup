import React, { useState } from "react";
import Header from "./Header";
import FooterSection from "./FooterSection";
import "./BrowseJobs.css";
import JobLocation from "../img/JobLocation.svg";
import JobSalary from "../img/JobSalary.svg";
import SearchIcon from "../img/SearchIcon.svg";
import FilterInformation from "../img/FilterInformation.svg";
import dropdown from "../img/dropdown.svg";

const BrowseJobs = ({ data }) => {
  const [filterCategory, setFilterCategory] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleFilter = (event, category) => {
    event.preventDefault();
    if (filterCategory === category) {
      setFilterCategory("");
    } else {
      setFilterCategory(category);
    }
  };

  const filteredData = filterCategory
    ? data.filter((user) =>
        user.jobCategory.toLowerCase().includes(filterCategory.toLowerCase())
      )
    : data;

  function handleDropdown() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <Header />
      <div className="browse_jobs_header">
        <div className="browse_jobs_container">
          <div className="browse_title_wrap">
            <div className="margin_bottom_16">
              <h2>Build a complete job board with Webflow memberships</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornar.
            </p>
          </div>
          <form className="browse_search">
            <div className="search_input_wrapper">
              <img src={SearchIcon} alt={SearchIcon}></img>
              <input
                placeholder="Search..."
                type="saerch"
                className="search_field"
              ></input>
            </div>
            <input
              value="Search"
              className="saerch_button"
              type="submit"
            ></input>
          </form>
        </div>
      </div>
      <div className="browsed_jobs_wrap">
        <div className="browsed_jobs_section">
          <div className="browsed_jobs_container">
            <div className="browse_grid">
              <div className="browse_filter_settings">
                <div className="filter_form">
                  <form>
                    <div className="browse_menu">
                      <div className="filters_title_wrap">
                        <img
                          alt={FilterInformation}
                          src={FilterInformation}
                        ></img>
                        <div>filter jobs</div>
                      </div>
                      <div>
                        <div onClick={handleDropdown} className="filter_click">
                          <div className="filter_name">Categories</div>
                          <img
                            className={`${
                              isActive ? "active_dropdown" : "dropdown"
                            }`}
                            src={dropdown}
                            alt={dropdown}
                          />
                        </div>
                        <nav className="dropdown_list">
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) => handleFilter(event, "")}
                              className="category_name"
                            >
                              All Categories
                            </label>
                            <div className="category_amount">(10)</div>
                          </div>
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) =>
                                handleFilter(event, "Marketing")
                              }
                              className="category_name"
                            >
                              Marketing
                            </label>
                            <div className="category_amount">(10)</div>
                          </div>
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) =>
                                handleFilter(event, "Development")
                              }
                              className="category_name"
                            >
                              Development/IT
                            </label>
                            <div className="category_amount">(10)</div>
                          </div>
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) =>
                                handleFilter(event, "Education")
                              }
                              className="category_name"
                            >
                              Education
                            </label>
                            <div className="category_amount">(10)</div>
                          </div>
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) =>
                                handleFilter(event, "Media/Publishing")
                              }
                              className="category_name"
                            >
                              Media/Publishing
                            </label>

                            <div className="category_amount">(10)</div>
                          </div>
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) => handleFilter(event, "Food")}
                              className="category_name"
                            >
                              Food
                            </label>

                            <div className="category_amount">(10)</div>
                          </div>
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) =>
                                handleFilter(event, "PR/Marketing")
                              }
                              className="category_name"
                            >
                              PR/Marketing
                            </label>
                            <div className="category_amount">(10)</div>
                          </div>
                          <div
                            className={`${
                              !isActive
                                ? "dropdown_content"
                                : "dropdown_content_active"
                            }`}
                          >
                            <label
                              onClick={(event) => handleFilter(event, "Other")}
                              className="category_name"
                            >
                              Other
                            </label>
                            <div className="category_amount">(10)</div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className={
                  !isActive ? "browsed_jobs_list" : "browsed_jobs_list_short"
                }
              >
                <div className="browsed_jobs_title_wrapper">
                  <div className="browsed_jobs_p"></div>
                </div>
                <div className="browsed_jobs_list">
                  <div className="jobs_list_grid">
                    {filteredData.length > 0 ? (
                      filteredData.map((user, index) => (
                        <div key={index} className="job">
                          <a>
                            <div className="job_item_top">
                              <div className="job_company_name">
                                <div className="name">{user.companyName}</div>
                                <div className="date">{user.date}</div>
                              </div>
                            </div>
                            <div className="job_name">
                              <h3>{user.positionName}</h3>
                            </div>
                            <div className="job_tags">
                              <div className="job_category">
                                {user.jobCategory}
                              </div>
                              <div className="job_hours">
                                {user.employmentType}
                              </div>
                            </div>
                            <div className="job_last_details">
                              <div className="job_location">
                                <img src={JobLocation} />
                                <div>{user.location}</div>
                              </div>
                              <div className="job_salary">
                                <img src={JobSalary} />
                                <div>{user.salary}</div>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))
                    ) : (
                      <h1 className="job_not">No Job Found</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default BrowseJobs;
