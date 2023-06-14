import {
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/signup");
  }

  function signIn(e) {
    <Header />;
    setIsLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(true);
        setIsLoading(false);
        console.log(userCredential);
        console.log("sign-in succ");
        navigate("/");
        return updateProfile(user, {
          displayName: displayName,
        });
      })
      .catch((error) => {
        setIsLoading(true);
        setIsLoading(false);
      });
  }

  return (
    <>
      <Header />
      <div className="sign_up">
        <div className="sign_up_left">
          <div className="sign_up_form_wrapper">
            <form onSubmit={signIn}>
              <div className="form_title">
                <h3>Log In with </h3>
                {/* {authUser && <p>{`Signed In as ${authUser.displayName}`}</p>} */}
                <p>Sign in to create and apply for jobs</p>
              </div>
              <label htmlFor="Email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <label htmlFor="Password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <button className="form_button" type="submit">
                {!isLoading ? "Log In" : "Please Wait..."}
              </button>
              <div className="form_divider"></div>
              <div className="form_footer">
                <span>Don't Have an account?</span>
                <a onClick={navigateHandler}>Sign Up</a>
              </div>
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

export default SignIn;
