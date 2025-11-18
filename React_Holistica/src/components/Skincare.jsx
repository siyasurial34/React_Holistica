import React from "react";
import { Link } from "react-router-dom"; // ✅ Needed for navigation
import "./style.css";
import "./skincare.css";
import img1 from "../assets/IMG1.png";
import img2 from "../assets/IMG2.png";
import img3 from "../assets/IMG3.png";

export default function Skincare() {
  return (
    <>
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
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zM6.5 11.497a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
              </svg>
            </button>
          </div>

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
             6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="wishlist-count">0</span>
          </div>

          <div className="cart-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .96.74L3.89 2H14a1 1 0 0 1 .97 1.243l-1.5 6A1 1 0 0 1 12.5 10H4a1 1 0 0 1-1-.895L1.61 2.607 1.11 1H1a1 1 0 0 1-1-1zm5 12a2 2 0 1 0 4 0H5zM11 13a2 2 0 1 0 4 0h-4z" />
            </svg>
            <span className="cart-count">0</span>
          </div>
        </div>
      </header>

      {/* Skincare Hero Section */}
      <section className="skincare-hero split">
        <div className="hero-left">
          <h1>Your Skin, Our Science</h1>
          <p>
            From hydration to blemish control, explore clean and effective skincare trusted by experts.
            Tailored to meet your unique skin needs, every step of the way.
          </p>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1581182800629-7d90925ad072?fm=jpg&q=60&w=3000"
            alt="Skincare Model"
          />
        </div>
      </section>

      {/* Shop by Category */}
      <section className="shop-concern">
        <h2>Shop by Category</h2>
        <div className="concern-cards-scroll">
          <div className="concern-card">
            <img
              src="https://www.shutterstock.com/image-photo/cosmetic-smears-creamy-texture-on-600nw-2212932693.jpg"
              alt="Moisturiser"
            />
            <div className="card-text">Moisturiser</div>
          </div>

          <div className="concern-card">
            <img
              src="https://t3.ftcdn.net/jpg/05/29/02/86/360_F_529028641_jVFNSEYthALCMMeEA8nDdyNDtNfD324x.jpg"
              alt="Cleansers"
            />
            <div className="card-text">Cleansers</div>
          </div>

          <div className="concern-card">
            <img src={img1} alt="Serums" />
            <div className="card-text">Serums</div>
          </div>

          <div className="concern-card">
            <img src={img2} alt="Sunscreen" />
            <div className="card-text">Sunscreen</div>
          </div>

          <div className="concern-card">
            <img src={img3} alt="Masks" />
            <div className="card-text">Masks</div>
          </div>
        </div>
      </section>

      {/* Skincare Routine */}
      <section className="routine-guide">
        <h2>Your Daily Skincare Routine</h2>
        <p className="routine-sub">Hover on each step to learn more</p>
        <div className="routine-steps">
          {[
            {
              title: "1. Cleanser",
              desc: "Removes dirt, oil & impurities for a fresh start.",
              img: "https://sdcdn.io/cl/cl_prod_29404_3000x3000_1.png?height=700px&width=700px",
            },
            {
              title: "2. Toner",
              desc: "Balances skin pH & preps for next steps.",
              img: "https://hips.hearstapps.com/hmg-prod/images/face-toner-1639513230.png?resize=640:*",
            },
            {
              title: "3. Serum",
              desc: "Targets acne, dullness, or fine lines effectively.",
              img: "https://media.istockphoto.com/id/1522079594/photo/woman-applies-beauty-serum-on-her-skin.jpg",
            },
            {
              title: "4. Moisturizer",
              desc: "Locks in hydration & strengthens skin barrier.",
              img: "https://scenturie.co.nz/wp-content/uploads/2022/03/Man-applying-face-cleanser.jpg",
            },
            {
              title: "5. Sunscreen",
              desc: "Shields skin from harmful UV rays daily.",
              img: "https://www.xtremeelement.com/wp-content/uploads/2018/02/visualelectric-1730153057328.jpg",
            },
          ].map((item, index) => (
            <div className="routine-card" key={index}>
              <div className="card-content">
                <img src={item.img} alt={item.title} />
                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ingredients */}
      <section className="ingredients-love">
        <h2>Ingredients to Love</h2>
        <div className="ingredient-grid">
          {[
            {
              name: "Hyaluronic Acid",
              desc: "Deep hydration & plump skin",
              bg: "https://t3.ftcdn.net/jpg/03/00/67/50/360_F_300675047_zYB9ZbWf8F5xU7F8bveLI2n85v0TSc2I.jpg",
            },
            {
              name: "Vitamin C",
              desc: "Brightens & fades dark spots",
              bg: "https://www.skinceuticals.com.au/dw/image/v2/BFZM_PRD/on/demandware.static/-/Sites-skinceuticals-au-ng-Library/en_AU/dw6f13d53e/images/pages/23_1109_SkinC_Ingredient_Pages_L-AsorbicAcid_What_Is_Ingredient_Module_1_D_1260x1060.jpg",
            },
            {
              name: "Niacinamide",
              desc: "Controls oil & reduces pores",
              bg: "https://karammdskin.com/cdn/shop/files/Swatch_Rinse_1x1_a8ea26a2-7c3e-4a04-89f0-bcf5fae06117.jpg",
            },
            {
              name: "Retinol",
              desc: "Boosts collagen & reduces wrinkles",
              bg: "https://www.nakedandthriving.com/cdn/shop/files/Retinol-Alternative-Trio_Swatch_1445x.jpg",
            },
            {
              name: "Salicylic Acid",
              desc: "Fights acne & unclogs pores",
              bg: "https://www.byrdie.com/thmb/MKeUDOf-TwVJPARRRRHANL2luyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kojicacidserum-c64cbd1f01294aa3bb9aee26812265c6.png",
            },
          ].map((i, index) => (
            <div
              className="ingredient-card"
              key={index}
              style={{ backgroundImage: `url(${i.bg})` }}
            >
              <div className="ingredient-name">
                <h3>{i.name}</h3>
                <p>{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Cards */}
      <section className="seasonal-tips-split">
        <div className="season-card summer">
          <div className="slide">
            <img src="https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg" alt="summer1" />
          </div>
          <div className="slide">
            <img src="https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg" alt="summer2" />
          </div>
          <div className="slide">
            <img src="https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg" alt="summer3" />
          </div>
          <div className="overlay">
            <h3>Radiant Summer</h3>
            <p>Embrace sunshine, freshness, and vibrant energy for your mind and body.</p>
          </div>
        </div>

        <div className="season-card winter">
          <div className="slide">
            <img src="https://t4.ftcdn.net/jpg/06/34/92/83/360_F_634928385_jCpRh3Rj7ZGRdV2KtVh82ectNScaIBAf.jpg" alt="winter1" />
          </div>
          <div className="slide">
            <img src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg" alt="winter2" />
          </div>
          <div className="slide">
            <img src="https://plus.unsplash.com/premium_photo-1674086973168-4fbfa03f32e9" alt="winter3" />
          </div>
          <div className="overlay">
            <h3>Season of Wellness</h3>
            <p>Embrace calm, cozy, and mindful routines to thrive this winter.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Holistica. All Rights Reserved.</p>
      </footer>
    </>
  );
}
