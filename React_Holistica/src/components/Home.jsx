import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import heroVideo from "../assets/1.mp4";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);

  // Load user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Logout user
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  // Slider logic + AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }

    const slideTimer = setInterval(nextSlide, 2000);
    showSlide(0);

    return () => clearInterval(slideTimer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <nav className="nav-left">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Wellness</a>
          <a href="#">Contact</a>
        </nav>

        <div className="logo">Holistica</div>

        {/* RIGHT SECTION */}
        <div className="nav-right">
          {user ? (
            <div className="profile-area">
              <span className="profile-icon">👤</span>
              <span className="profile-name">{user.name}</span>

              {/* Clean logout button */}
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <div className="hero-text">
          <h1>Experts in</h1>
          <h1>wellness</h1>
          <p>
            a wellness focused platform that blends mindful <br /> living and
            holistic health tips
          </p>
          <button>SCIENTIFICALLY BACKED</button>
        </div>
      </section>

      {/* Shop by Solution */}
      <section className="shop-concern">
        <h2>Shop by Solution</h2>
        <p>Find wellness solutions tailored to your specific needs.</p>

        <div className="concern-cards-scroll">
          <div className="concern-card">
            <Link to="/sleep_relax">
              <img
                src="https://plus.unsplash.com/premium_photo-1677849533990-ad83e1d7024e?w=600&auto=format&fit=crop&q=60"
                alt="Sleep"
              />
              <div className="card-text">Sleep And Relaxation</div>
            </Link>
          </div>

          <div className="concern-card">
            <Link to="/skincare">
              <img
                src="https://images.unsplash.com/photo-1638609927040-8a7e97cd9d6a?w=600&auto=format&fit=crop&q=60"
                alt="Skin"
              />
              <div className="card-text">Skincare</div>
            </Link>
          </div>

          <div className="concern-card">
            <img
              src="https://images.unsplash.com/photo-1665757516783-36558f7ab5d2?w=600&auto=format&fit=crop&q=60"
              alt="Stress"
            />
            <div className="card-text">Stress and Anxiety</div>
          </div>

          <div className="concern-card">
            <img
              src="https://t4.ftcdn.net/jpg/04/02/75/95/360_F_402759588_si9oFbEM4Tb60yHO5R2SfWrSLp2A5nYo.jpg"
              alt="Hair"
            />
            <div className="card-text">Hair Health</div>
          </div>

          <div className="concern-card">
            <img
              src="https://images.unsplash.com/photo-1631983357034-cf7136bc47ec?q=80&w=1332&auto=format&fit=crop"
              alt="Immunity"
            />
            <div className="card-text">Immunity</div>
          </div>

          
        </div>
      </section>

      {/* Method Section */}
      <section className="method-section">
        <div className="method-intro">
          <h2>
            Our <em>method</em>
          </h2>
          <p>
            Holistica is a holistic lifestyle platform dedicated to promoting
            health, mindfulness, and sustainable living.
          </p>
          <a href="#" className="btn">
            About Us →
          </a>
        </div>

        <div className="method-grid">
          <div className="method-card">
            <img
              src="https://www.shutterstock.com/image-photo/pharmaceutical-science-laboratory-health-care-600nw-2218232445.jpg"
              alt="Research"
            />
            <h3>Research</h3>
            <p>
              We bring you products that are backed by scientific studies and
              trusted expertise.
            </p>
          </div>

          <div className="method-card">
            <img
              src="https://www.mpluscosmetics.com/wp-content/uploads/2024/07/02-The-Basics-of-Understanding-a-Makeup-Ingredients-List_-1030x687.jpg"
              alt="Ingredients"
            />
            <h3>Ingredients</h3>
            <p>We handpick natural, transparent products.</p>
          </div>

          <div className="method-card">
            <img
              src="https://www.mydermastore.in/blog/wp-content/uploads/Skin-Care-Tips-in-Monsoon-Season.png"
              alt="Lifestyle"
            />
            <h3>Lifestyle</h3>
            <p>
              Holistic living is about balance — nourishing mind, body & spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="banner-overlay">
          <h1>
            Holistica is where wellness meets simplicity — healthy products that
            care <em>for you, inside and out.</em>
          </h1>
          <a href="#about" className="banner-btn">
            About Us →
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-text" data-aos="fade-up">
            <h2>About Us</h2>
            <p>
              At <strong>Holistica</strong>, we believe wellness is a lifestyle.
            </p>
            <a href="#shop" className="about-btn">
              Explore Our Products →
            </a>
          </div>

          <div className="about-image" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/6387848/pexels-photo-6387848.jpeg"
              alt="Holistica Wellness"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="testimonial-slider">
        <div className="testimonial-slide active">
          <div className="stars">★★★★★</div>
          <p className="quote">
            “I love these vitamins as{" "}
            <span className="highlight">they actually work</span>…I feel great.”
          </p>
          <p className="author">Elizabeth S.</p>
          <p className="product">Women’s Multivitamin 18+</p>
        </div>

        <div className="testimonial-slide">
          <div className="stars">★★★★★</div>
          <p className="quote">
            “My energy levels have increased{" "}
            <span className="highlight">significantly</span> since I started.”
          </p>
          <p className="author">Sophia L.</p>
          <p className="product">Energy Boost Capsules</p>
        </div>

        <div className="testimonial-slide">
          <div className="stars">★★★★★</div>
          <p className="quote">
            “This product helped my{" "}
            <span className="highlight">sleep patterns</span> tremendously.”
          </p>
          <p className="author">Mia K.</p>
          <p className="product">Sleep Support Formula</p>
        </div>

        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Holistica. Designed with care.</p>
      </footer>
    </>
  );
}

export default Home;
