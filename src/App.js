import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import SectionCompanies from "./components/SectionCompanies";
import SectionRegular from "./components/SectionRegular";
import SectionTestimonial from "./components/SectionTestimonial";
import FooterSection from "./components/FooterSection";
import HeaderOverlay from "./components/HeaderOverlay";
// import SignIn from "./components/auth/SignUp";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import { HireUpContext } from "./components/Contexts/HireUpContext";
import MainPage from "./components/MainPage";
import PostJob from "./components/PostJob";
import BrowseJobs from "./components/BrowseJobs";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { database } from "./firebase";
import ScrollTriggeredContent from "./components/ScrollTriggeredContent";

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [data, setData] = useState([]);
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const faqItems = [
    {
      question: "How do I get started lorem ipsum dolor at?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique. Morbi semper ornare euismod. Morbi magna urna, pulvinar ac massa ultricies, molestie finibus sem. Sed facilisis velit nisi, non efficitur nibh tincidunt at. Cras condimentum ante sit amet rutrum euismod. Fusce porttitor ipsum consequat tortor feugiat varius ac et ipsum. Quisque sed est non erat ultricies condimentum sed quis nisi. Nullam rutrum sapien nec sapien venenatis, vitae auctor elit malesuada. Nam feugiat enim a urna blandit ullamcorper. Nunc purus urna, auctor quis aliquet eget, consectetur quis metus.",
    },
    {
      question: "How do I get started lorem ipsum dolor at?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique. Morbi semper ornare euismod. Morbi magna urna, pulvinar ac massa ultricies, molestie finibus sem. Sed facilisis velit nisi, non efficitur nibh tincidunt at. Cras condimentum ante sit amet rutrum euismod. Fusce porttitor ipsum consequat tortor feugiat varius ac et ipsum. Quisque sed est non erat ultricies condimentum sed quis nisi. Nullam rutrum sapien nec sapien venenatis, vitae auctor elit malesuada. Nam feugiat enim a urna blandit ullamcorper. Nunc purus urna, auctor quis aliquet eget, consectetur quis metus.",
    },
    {
      question: "How do I get started lorem ipsum dolor at?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique. Morbi semper ornare euismod. Morbi magna urna, pulvinar ac massa ultricies, molestie finibus sem. Sed facilisis velit nisi, non efficitur nibh tincidunt at. Cras condimentum ante sit amet rutrum euismod. Fusce porttitor ipsum consequat tortor feugiat varius ac et ipsum. Quisque sed est non erat ultricies condimentum sed quis nisi. Nullam rutrum sapien nec sapien venenatis, vitae auctor elit malesuada. Nam feugiat enim a urna blandit ullamcorper. Nunc purus urna, auctor quis aliquet eget, consectetur quis metus.",
    },
  ];

  useEffect(() => {
    const usersRef = ref(database, "names");

    onValue(
      usersRef,
      (snapshot) => {
        const data = snapshot.val();
        const usersList = data ? Object.values(data) : [];
        setData(usersList);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleDataSubmit = (newUser) => {
    const usersRef = ref(database, "names");
    const newUserRef = push(usersRef);
    set(newUserRef, newUser)
      .then(() => {
        setIsDataSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <HireUpContext.Provider value={{ data, setData }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ScrollTriggeredContent>
                  <MainPage />
                </ScrollTriggeredContent>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route
              path="/postjob"
              element={
                <ScrollTriggeredContent>
                  {authUser ? (
                    <PostJob
                      isDataSubmitted={isDataSubmitted}
                      faqItems={faqItems}
                      onDataSubmit={handleDataSubmit}
                    />
                  ) : (
                    <SignIn />
                  )}
                </ScrollTriggeredContent>
              }
            />
            <Route
              path="/postjob/browsejobs"
              element={
                <ScrollTriggeredContent>
                  <BrowseJobs faqItems={faqItems} data={data} />
                </ScrollTriggeredContent>
              }
            />
          </Routes>
        </Router>
      </HireUpContext.Provider>
    </div>
  );
}

export default App;
