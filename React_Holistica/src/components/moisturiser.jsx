import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";      // Global styles including navbar
import "./moisturiser.css"; // Page-specific styles (except navbar)


export default function Moisturiser() {
  // Cart and Wishlist state
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // Product data
  const products = [
    {
      title: "Neutrogena Hydro Boost Hyaluronic Acid Water Gel Light Face Moisturizer For Normal, Dry & Oily Skin",
      img: "https://images-static.nykaa.com/media/catalog/product/5/d/5d709cc4891080614470_x1.jpg",
      category: "dry",
    },
    {
      title: "The Face Shop Rice & Ceramide Emulsion - Korean Brightening Moisturizer/Cream for Dull & Dry Skin",
      img: "https://images-static.nykaa.com/media/catalog/product/1/e/1e2ba768806182535468_8.jpg?tr=w-500",
      category: "sensitive",
    },
    {
      title: "Dot & Key Vitamin C + E Super Bright Face Moisturizer For Glowing Skin, Fades Dark Spots",
      img: "https://images-static.nykaa.com/media/catalog/product/b/b/bbe1986DOTKE00000054_1a.jpg",
      category: "oily",
    },
    // Add more products as needed
  ];

  // Filter products by category and search query
  const filteredProducts = products.filter(
    (p) =>
      (filter === "all" || p.category === filter) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Functions to add items
  const addToCart = (product) => setCart([...cart, product]);
  const addToWishlist = (product) => setWishlist([...wishlist, product]);

  return (
    <div className="moisturiser-page">
      {/* Navbar */}
      <header className="navbar">
        <nav className="nav-left">
          <Link to="/">Home</Link>
          <a href="#">About</a>
          <a href="#">Wellness</a>
          <a href="#">Contact</a>
        </nav>

        <div className="logo">Holistica</div>

        <div className="nav-right">
          {/* Search */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zM6.5 11.497a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
              </svg>
            </button>
          </div>

          {/* Wishlist Counter */}
          <div className="wishlist-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
                 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="wishlist-count">{wishlist.length}</span>
          </div>

          {/* Cart Counter */}
          <div className="cart-container" onClick={() => setShowCartPopup(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .96.74L3.89 2H14a1 1 0 0 1 .97 1.243l-1.5 6A1 1 0 0 1 12.5 10H4a1 1 0 0 1-1-.895L1.61 2.607 1.11 1H1a1 1 0 0 1-1-1zm5 12a2 2 0 1 0 4 0H5zM11 13a2 2 0 1 0 4 0h-4z"/>
            </svg>
            <span className="cart-count">{cart.length}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-moisturizers">
        <div className="hero-text">
          <h4>Discover</h4>
          <h1>Bestselling Moisturisers</h1>
          <p>
            Shop face creams, night creams, and deeply hydrating moisturisers crafted for every skin type.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://www.shutterstock.com/image-photo/beauty-skin-care-skincare-hydration-600nw-2342278775.jpg"
            alt="Applying moisturizer"
          />
          <div className="overlay-text">
            Explore result-driven essentials, approved by experts.
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="moisturizers">
        <div className="container">
          <h3 className="skin-type-title">Shop by Skin Type</h3>
          <div className="filter-buttons">
            {["all", "oily", "dry", "acne-prone", "combination", "sensitive"].map(
              (type) => (
                <button
                  key={type}
                  className={`filter-btn ${filter === type ? "active" : ""}`}
                  onClick={() => setFilter(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-wrapper">
                  <img src={product.img} alt={product.title} />
                  <button className="add-cart" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                  <button className="add-wishlist" onClick={() => addToWishlist(product)}>
                    ♥
                  </button>
                </div>
                <h3 className="product-title">{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Popup */}
      {showCartPopup && (
        <div className="cart-popup">
          <div className="cart-popup-content">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
              <p>Cart is empty.</p>
            ) : (
              cart.map((item, idx) => (
                <div className="cart-item" key={idx}>
                  <img src={item.img} alt={item.title} />
                  <div className="cart-item-title">{item.title}</div>
                </div>
              ))
            )}
            <button className="close-cart-btn" onClick={() => setShowCartPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <p>© 2025 Holistica. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
