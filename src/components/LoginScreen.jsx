import React from "react";
import "../styles/LoginScreen.css";

function LoginScreen() {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src="/logo.png" alt="CodeAnt AI Logo" className="logo" />
        <h1>Welcome to CodeAnt AI</h1>
        <div className="login-options">
          <button>SAAS</button>
          <button>Self Hosted</button>
        </div>
      </div>
      <div className="login-buttons">
        <button>Sign in with GitHub</button>
        <button>Sign in with Bitbucket</button>
        <button>Sign in with Azure DevOps</button>
        <button>Sign in with GitLab</button>
      </div>
      <footer>By signing up, you agree to the Privacy Policy.</footer>
    </div>
  );
}

export default LoginScreen;
