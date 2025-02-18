import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>Authentic Local Flavors, Delivered Fresh!</h2>
          <p>
            Welcome to Bhojmandu! Explore a diverse range of delicious meals
            from your favorite local restaurants and street vendors. Whether
            you're craving traditional Nepali flavors or something new, we bring
            the best dishes straight to your doorstep—fresh, fast, and full of
            flavor!
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </>
  );
};

export default Header;
