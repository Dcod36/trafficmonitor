import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Temp.css";

export default function Temp() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const navigate = useNavigate();

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Register form
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const address = form.address.value.trim();
    const pin = form.pin.value.trim();

    // Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !address ||
      !pin
    ) {
      alert("Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert(
      `Registration successful! Welcome ${firstName}! Redirecting to login...`
    );

    form.reset();
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  // Handle Login form
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (email && password) {
      alert("Login successful! Welcome to TrafficFlow Dashboard!");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${navbarScrolled ? "scrolled" : ""}`} id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={() => navigate("/")}>
            TrafficFlow
          </a>
          <div className="nav-buttons">
            <button className="btn btn-outline" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn btn-primary" onClick={() => navigate("/register")}>
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Home Page */}
      <div id="home" className="page active">
        <section className="hero">
          <div className="hero-container">
            <div className="hero-content">
              <h1>Smart Traffic Monitoring Made Simple</h1>
              <p>
                Monitor, analyze, and optimize traffic flow in real-time with
                our cutting-edge AI-powered platform. Get insights that matter,
                when they matter most.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => navigate("/register")}>
                  Get Started Free
                </button>
                <button className="btn btn-outline" onClick={() => navigate("/login")}>
                  Sign In
                </button>
              </div>
            </div>
            <div className="traffic-visual">
              <div className="traffic-light">
                <div className="light red"></div>
                <div className="light yellow"></div>
                <div className="light green"></div>
              </div>
              <div className="cars">
                <div className="car"></div>
                <div className="car"></div>
                <div className="car"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
