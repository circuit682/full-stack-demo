import "./styles.css";
// import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

function CustomGoogleButton() {
  const handleLogin = () => {
    window.location.href = "/auth/google"; // hits backend (proxy handles localhost:5000)
  };

  return (
    <img
      src="images/google.png"
      alt="Google login"
      onClick={handleLogin}
      style={{ cursor: "pointer" }}
    />
  );
}

// function CustomGoogleButton() {
//   const login = useGoogleLogin({
//     onSuccess: (response) => console.log("Google Success", response),
//     onError: () => console.log("Google Login Failed"),
//   });

//   return (
//     <img
//       src="images/google.png"
//       alt="Google login"
//       onClick={() => login()}
//       style={{ cursor: "pointer" }}
//     />
//   );
// }


export default function App() {
  return (
    <GoogleOAuthProvider clientId="97568906881-r7tdoq29favn4pamdhijiki7j2jqcfvs.apps.googleusercontent.com">
      <div className="container">
        <div className="header">
          <h1>Log in to Codeacademy</h1>
        </div>

        <form>
          <label htmlFor="email">Email or Username</label>
          <input type="text" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          {/* <a href="#">I forgot my password?</a> */}
        <button
  type="button"
  onClick={() => alert("Redirect to forgot password page")}
  style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer" }}
>
  I forgot my password?
</button>
          <input type="submit" value="Log In" />
        </form>

        <div className="footer">
          <h3>Login with another account?</h3>

          <div className="images">
            {/* Replace Google image with actual GoogleLogin button */}
            {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log("Google Login Success:", credentialResponse);
              }}
              onError={() => {
                console.log("Google Login Failed");
              }}
            /> */}
             <CustomGoogleButton />

            {/* Keep other images for now */}
            <img src="images/facebook.png" alt="Facebook login" />
            <img src="images/github.png" alt="GitHub login" />
            <img src="images/linkedin.png" alt="LinkedIn login" />
            <img src="images/twitter.png" alt="Twitter login" />
          </div>

          <a href="/sign-up">Not a Member Yet? Sign Up for Free</a>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
