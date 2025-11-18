// SleepRelax.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./sleep_relax.css"; // Sleep Relax page specific styles
import "./skincare.css"; // Reused layout styles
import "./style.css"; // Global styles like navbar
import VID1 from "../assets/VID1.mp4";
function SleepRelax() {
  return (
    <div className="sleep-relax-page">
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
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242 1.153a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </button>
          </div>

          {/* Wishlist Icon */}
          <div className="wishlist-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                       4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
                       14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                       6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span className="wishlist-count">0</span>
          </div>

          {/* Cart Icon */}
          <div className="cart-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .96.74L3.89 2H14a1 1 0 0 1 .97 1.243l-1.5 6A1 1 0 0 1 12.5 10H4a1 1 0 0 1-1-.895L1.61 2.607 1.11 1H1a1 1 0 0 1-1-1zm5 12a2 2 0 1 0 4 0H5zM11 13a2 2 0 1 0 4 0h-4z"/>
            </svg>
            <span className="cart-count">0</span>
          </div>
        </div>
      </header>

      {/* Sleep Hero Section */}
      <section className="sleep-hero split">
        <div className="hero-left">
          <h1>Restful Sleep</h1>
          <p>Discover tips, routines, and essentials to improve your sleep and wellness naturally.</p>
        </div>
        <div className="hero-right">
          <img
            src="https://w0.peakpx.com/wallpaper/755/535/HD-wallpaper-time-to-relax-relax-lavender-towel-candles-fire-still-life-flame-purple-spa.jpg"
            alt="Sleep wellness"
          />
        </div>
      </section>

      {/* Shop by Concern */}
      <section className="shop-concern">
        <h2>Sleep Concerns</h2>
        <div className="concern-cards-scroll">
          {[
            {
              img: "https://img.freepik.com/free-photo/sunset-beach-ai-generated_268835-11222.jpg?semt=ais_incoming&w=740&q=80",
              text: "Tips to overcome insomnia naturally.",
            },
            {
              img: "https://media.istockphoto.com/id/1325095289/photo/still-life-closeup-of-a-tranquil-spa-arrangement.jpg?s=612x612&w=0&k=20&c=yrNXIAA1mSSzypzbKMTl4807nRG4S8rs5RsWb-J0M9U=",
              text: "Manage stress to sleep better.",
            },
            {
              img: "https://c4.wallpaperflare.com/wallpaper/195/141/79/moon-night-clouds-stars-wallpaper-preview.jpg",
              text: "Improve sleep hygiene for deeper rest.",
            },
          ].map((card, idx) => (
            <div key={idx} className="concern-card">
              <img src={card.img} alt={card.text} />
              <div className="card-text">{card.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sleep Routine Guide */}
      <section className="routine-guide">
        <h2>Sleep Routine Guide</h2>
        <p className="routine-sub">Simple nightly practices for a restful mind and body.</p>
        <div className="routine-steps">
          {[
            {
              img: "https://plus.unsplash.com/premium_photo-1674675646818-01d7a7bae64c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: "Meditation",
              desc: "Calm your mind and prepare for sleep with mindfulness techniques.",
            },
            {
              img: "https://images.stockcake.com/public/9/e/a/9ead5899-8dd8-4adf-9bee-a0bf59a40155_large/steaming-herbal-tea-stockcake.jpg",
              title: "Herbal Tea",
              desc: "Wind down with calming teas like chamomile or lavender.",
            },
            {
              img: "https://w0.peakpx.com/wallpaper/865/443/HD-wallpaper-books-reading-tea-aesthetics.jpg",
              title: "Light Reading",
              desc: "Engage in calming reading to reduce stress before bed.",
            },
          ].map((routine, idx) => (
            <div key={idx} className="routine-card">
              <div className="card-content">
                <img src={routine.img} alt={routine.title} />
                <div className="card-info">
                  <h3>{routine.title}</h3>
                  <p>{routine.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sleep Products */}
      <section className="sleep-products">
        <h2>Your Sleep & Calm Collection</h2>
        <p className="sleep-sub">Curated picks to help you unwind, rest, and recharge.</p>
        <a href="#" className="shop-btn">Shop Now</a>
        <div className="sleep-product-grid">
          {[
            { img: "https://media.istockphoto.com/id/146880094/photo/pile-of-pillows.jpg?s=612x612&w=0&k=20&c=QbO-O-mTZINJPtcuz0Y3RFmyE3OkxL1vGrKmmJcukL8=", title: "Comfort Pillow", desc: "Soft and supportive for deep restful sleep." },
            { img: "https://t3.ftcdn.net/jpg/07/44/68/74/360_F_744687401_2oSKTBb38D2qFbgdwQYZNEE8TM9E1dCd.jpg", title: "Lavender Oil", desc: "Promotes calmness and relaxation before bed." },
            { img: "https://itsalifestylehun.com/wp-content/uploads/2023/10/3-weighted-blankets-thatll-fit-your-rooms-aesthetic.png", title: "Weighted Blanket", desc: "Reduces anxiety and improves deep sleep quality." },
            { img: "IMG9.jpg", title: "Chamomile Tea", desc: "Soothing herbal blend to ease you into sleep." },
            { img: "https://wwd.com/wp-content/uploads/2021/01/Silk_Bundle_IvoryBlush_Detail1_1200x.jpg", title: "Sleep Mask", desc: "Blocks out light for uninterrupted rest." },
            { img: "https://media.istockphoto.com/id/185062032/photo/yellow-vitamin-pills-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=A6nwGT_2yP60RoSKm4fojlgWDAa7lWUcl9ceeShdcjk=", title: "Magnesium", desc: "Relaxes muscles and supports natural sleep cycles." },
            { img: "https://www.foodmatters.com/media/cache/9d/9a/9d9a8cac83b3567f17973da09a6a9836.jpg", title: "Herbal Bath Salts", desc: "Soothes the body and mind for bedtime relaxation." },
            { img: "https://media.istockphoto.com/id/1281320198/photo/modern-electric-fabric-shaver-and-wool-sweater.jpg?s=612x612&w=0&k=20&c=8l3Cr5RjI5bZFa-0e0f4VtHqK_XrH5TBgYfKX-3H-L8=", title: "White Noise Machine", desc: "Blocks distractions for deeper, uninterrupted sleep." },
          ].map((product, idx) => (
            <div key={idx} className="sleep-product-card">
              <img src={product.img} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ingredients / Sleep Essentials */}
      <section className="ingredients-love">
        <h2>Sleep Essentials</h2>
        <div className="ingredient-grid">
          {[
            { img: "https://images.pexels.com/photos/2746155/pexels-photo-2746155.jpeg?cs=srgb&dl=pexels-jkerro-2746155.jpg&fm=jpg", title: "Lavender", desc: "Calming scent to aid sleep" },
            { img: "https://media.istockphoto.com/id/186869428/photo/medicine-vitamin-pill-bottle-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=GIkuIkENVPPXuyrFFHXUdj9fCsJkiiUicpK3m4qE5sQ=", title: "Melatonin", desc: "Supports natural sleep cycles" },
            { img: "https://w0.peakpx.com/wallpaper/653/225/HD-wallpaper-chamomile-flowers-petals-macro-focus.jpg", title: "Chamomile", desc: "Natural relaxant for restful nights" },
            { img: "https://sssportsupplies.co.uk/cdn/shop/files/magnesium-glycinate.png?v=1749551952&width=533", title: "Magnesium", desc: "Promotes relaxation and calm muscles" },
            { img: "https://media.istockphoto.com/id/1435232795/photo/dried-valerian-root.jpg?s=612x612&w=0&k=20&c=t92RWRD8p7JcQAGgvhfMhK2MNniTfdtUS_fPu9l2I-8=", title: "Valerian Root", desc: "Herbal aid for deeper, restorative sleep" },
          ].map((ingredient, idx) => (
            <div key={idx} className="ingredient-card" style={{ backgroundImage: `url(${ingredient.img})` }}>
              <div className="ingredient-name">
                <h3>{ingredient.title}</h3>
                <p>{ingredient.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* Sleep Video Full Card */}
<section className="sleep-video-full">
  <div className="video-full-card">
    <video autoPlay muted loop playsInline>
      <source src={VID1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay-text">
      <h2>Relax & Unwind</h2>
      <p>Discover soothing rituals to improve your sleep quality and wake up refreshed every morning.</p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Holistica. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SleepRelax;
