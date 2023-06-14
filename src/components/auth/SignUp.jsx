import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import React, { useState } from "react";
import "./SignUp.css";
import { auth } from "../../firebase";
import Header from "../Header";
import SignUpBackground from "../../img/SignUpBackground.svg";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [registrationError, setRegistrationError] = useState(null);

  function signUp(e) {
    e.preventDefault();
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        const user = userCredential.user;

        return updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            sendEmailVerification(user)
              .then(() => {
                console.log("Email verification sent");
                console.log(user.emailVerified);
              })
              .catch((error) => {
                console.log(error);
              });
            navigate("/signin");
          })
          .catch((error) => {
            setTimeout(() => {
              setIsLoading(false); // Update isLoading state to false after a delay of 1 second
            }, 1000);
          });
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          setRegistrationError("The password must be at least 6 characters.");
        } else if (error.code === "auth/email-already-in-use") {
          setRegistrationError(
            "An account with this email address already exists. Log in or reset your password."
          );
        } else {
          setRegistrationError(
            "An error occurred during registration. Please try again."
          );
        }

        setIsLoading(false);
      });
  }

  function navigateHandler() {
    navigate("/signin");
  }

  return (
    <>
      <Header />
      <div className="sign_up">
        <div className="sign_up_left">
          <div className="sign_up_form_wrapper">
            <form onSubmit={signUp}>
              <div className="form_title">
                <h3>Sign Up</h3>
                <p>Get started posting and applying for jobs</p>
              </div>
              <label htmlFor="Email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <label htmlFor="Name">Name</label>
              <input
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                type="text"
              />
              <label htmlFor="Password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <button className="form_button" type="submit">
                {isLoading ? "Please Wait..." : "Create an account"}
              </button>
              <div className="form_divider"></div>
              <div className="form_footer">
                <span>Already Have an account?</span>
                <a onClick={navigateHandler}>Log In</a>
              </div>
              {registrationError && (
                <div className="error_container">
                  <h1 className="registration_error">{registrationError}</h1>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="sign_up_right">
          <div className="sign_up_right_content"></div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
